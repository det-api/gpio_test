const rpio = require('rpio');

// Set pin 11 as OUTPUT
const pin = 11;
rpio.open(pin, rpio.OUTPUT, rpio.LOW);

// Function to blink the LED
function blinkLED() {
  rpio.write(pin, rpio.HIGH); // Turn on LED
  setTimeout(() => {
    rpio.write(pin, rpio.LOW); // Turn off LED after 1 second
  }, 1000);
}

// Blink the LED every 2 seconds
setInterval(blinkLED, 2000);
