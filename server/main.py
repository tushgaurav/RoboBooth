import uvicorn
import tomllib
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from SDK import Robot as product2

with open('config.toml', mode='rb') as f:
    config = tomllib.load(f)


class Trajectory(BaseModel):
    index: int
    title: str
    file_name: str
    image: str
    duration: int
    description: str
    alt: str


photobot = product2(config["robot"]["ip"])
# result, _ = photobot.connect()

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/status")
async def status():
    try:
        servoStatus = photobot.getServoStatus()
        status = photobot.getStatus()
        mode = photobot.getRobotMode()
        return {
            "servoStatus": servoStatus,
            "status": status,
            "mode": mode
        }
    except Exception as e:
        return {"servoStatus": "Error",
                "status": "Error",
                "mode": "Error",
                "error": str(e)
                }


@app.get("/motion_list")
async def motion_list():
    return {"motions": config["motions"]}


@app.post("/start_motion")
async def start_motion(trajectory: Trajectory):
    file_name = trajectory.file_name

    if (photobot.checkJbiExist(file_name)):
        result = photobot.runJbi(file_name)
        return {"result": result}
    else:
        return {"result": "File not found"}


@app.post("/emergency_stop")
async def stop():
    result, _ = photobot.stopOperation()

    return {"result": result}
