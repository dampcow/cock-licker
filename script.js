var licks = 0;
var lickerPrice = 10;
var lickers = 0;
var fleshlight = false;
var tickRate = 1000;

var intervalID = window.setInterval(licker, tickRate);

function lick() {
    licks++;
    if (licks == 1) {
        document.getElementById("lick-amount").innerHTML = `You have licked ${licks} time`;
    } else {
        document.getElementById("lick-amount").innerHTML = `You have licked ${licks} times`;
    }
}

function buyLicker() {
    if (licks >= lickerPrice) {
        licks -= lickerPrice;
        lickerPrice += 5;
        lickers++;
        document.getElementById("licker-price").innerHTML = `Buy auto licker! (${lickerPrice} licks)`;
        document.getElementById("lick-amount").innerHTML = `You have licked ${licks} times`;
        document.getElementById("licker-amount").innerHTML = `You have ${lickers} lickers`;
    }
}

function licker() {
    if (lickers >= 1) {
        licks += lickers;
        document.getElementById("lick-amount").innerHTML = `You have licked ${licks} times  `;
    }
}

function buyFleshlight() {
    // TODO: Disable button after purchase
    if (licks >= 200) {
        licks -= 200;
        fleshlight = true;
        tickRate /= 2;
        document.getElementById("purchased-fleshlight").innerHTML = `You bought the fleshlight already!`;
    }
}