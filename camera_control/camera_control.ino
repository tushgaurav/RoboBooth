int robotInput = 8;
int shutter = 4;
int buzzer = 10;

void setup() {
  pinMode(robotInput, INPUT);
  pinMode(shutter, OUTPUT);
  pinMode(buzzer, OUTPUT);

  Serial.begin(9600);
}

void loop() {
  int sig = digitalRead(robotInput);
  if (sig == HIGH) {
    buzz(buzzer, 10000);
    capture(shutter);
  }
  
  Serial.println(sig);
  delay(2000);
}

void buzz(int buzzPin, int buzzTime) {
  digitalWrite(buzzPin, HIGH);
  delayMicroseconds(buzzTime);
  digitalWrite(buzzPin, LOW);
  delayMicroseconds(buzzTime);
}

void capture(int shutterPin) {
  digitalWrite(shutterPin, HIGH);
  delay(1000);
  digitalWrite(shutterPin, LOW);
  delay(1000);
}
