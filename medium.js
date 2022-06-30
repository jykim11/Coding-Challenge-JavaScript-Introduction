////////// TWO WAYS /////////////////

// First way: Using JavaScript with browser.

//user input
const input = prompt("Type in anything : ");

if (input == input.toUpperCase()) {
    alert("You are shouting");
} else if (input == input.toLowerCase()) {
    alert("You are whispering");
} else {
    alert("You are talking normally");
}



// Second way: Using Node.js to run it in terminal.\

/*

//////////// including external module 'readline' for user input.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Type in Anything : ', anything => {
    if (anything == anything.toUpperCase()) {
        console.log("You are shouting");
    } else if (anything == anything.toLowerCase()) {
        console.log("You are whispering");
    } else {
        console.log("You are talking normally");
    }

    readline.close();
});
*/