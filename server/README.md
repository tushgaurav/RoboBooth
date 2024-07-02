# PhotoBooth Robot Connector v1.2
This is a server that enables API endpoints for controlling the robots and reading robot configuration. This server also supplies the motion file list to be displayed to the frontend.

## Installation
1. You have to enable python virtual environment. You can do this by running the following command:
```bash
python3 -m venv env
```
Now activate the virtual environment by running the following command:
```bash
source env/bin/activate
```
2. Install the required packages by running the following command:
```bash
pip install -r requirements.txt
```
3. Run the server by running the following command:
```bash
uvicorn main:app --reload
```
The server will be running on `http://localhost:8000`.

## Changing the configuration
You can change virtually everything from the config.toml file. You could change the robot's IP address, the list of available motion files, their names and the approx time taken by the bot to execute the motion.