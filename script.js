var licks = 0;
var lickerPrice = 10;
var lickers = 0;
var tickRate = 1000;
var oldTickRate = tickRate;
var debugModeIsEnabled = false;

var lickerInterval = setInterval(licker, tickRate);

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
    if (oldTickRate != tickRate) {
        oldTickRate = tickRate;
        clearInterval(lickerInterval);
        lickerInterval = setInterval(licker, tickRate);
    }
}

function buyFleshlight() {
    if (licks >= 200) {
        licks -= 200;
        tickRate /= 2;
        document.getElementById("purchased-fleshlight").innerHTML = `You bought the fleshlight already!`;
        document.getElementById("purchased-fleshlight").disabled = true;
        document.getElementById("tick-rate").innerHTML = `Tickrate: ${tickRate}`;
        document.getElementById("lick-amount").innerHTML = `You have licked ${licks} times`;
    }
}

// function debugMode() {
//     const passwordFieldValue = document.getElementById("password-input").value;
//     if (passwordFieldValue == "pen1s") {
//         document.getElementById("password-input").disabled = true;
//         document.getElementById("password-check").disabled = true;
//         document.getElementById("debug-button-give").disabled = false;
//         document.getElementById("debug-button-give").innerHTML = "Give 1000 licks";
//         debugModeIsEnabled = true; 
//     }
// }

// function debugButtonGive() {
//     if (debugModeIsEnabled == true) {
//         licks += 1000
//         document.getElementById("lick-amount").innerHTML = `You have licked ${licks} times`;
//     }
// }