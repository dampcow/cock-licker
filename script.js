var licks = 0;
var lickerPrice = 10;
var lickers = 0;
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
        lickerPrice += 6;
        lickers++;
        document.getElementById("licker-price").innerHTML = `Buy auto (c)licker! (${lickerPrice} licks)`;
        document.getElementById("lick-amount").innerHTML = `You have licked ${licks} times  `;
    }
}

function licker() {
    if (lickers >= 1) {
        licks += lickers;
        document.getElementById("lick-amount").innerHTML = `You have licked ${licks} times  `;
    }
}
