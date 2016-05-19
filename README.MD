# Setting Up (Hardware)

1. While unplugged to anything, connect the Arduino to the MQ2 Smoke Sensor as follows:

  a. VCC `1` to Arduino `VCC` (5V)

  b. Ground `2` to Arduino `GND`

  c. Data `3` to Arduino Analog 0 `A0`

2. Connect Arduino to PC using USB. Pay attention to which `Port` it's using for the Software steps.

# Setting Up (Software)

1. `git clone https://github.com/mathdroid/evasap-arduino && cd evasap-arduino`
2. `npm install`
3. Open **Arduino IDE**, upload the `StandardFirmata` software using one of the options below:

  a. From the **Arduino IDE**, go to `File` > `Examples` > `Firmata` > `StandardFirmata`.

  b. Copy-and-paste the file from `./Arduino/StandardFirmata.ino`.

4. Wait for it to be uploaded successfully.

  a. If upload fails, make sure you have the right `Board` and `Port` set up in the Tools.

5. `node index.js`
