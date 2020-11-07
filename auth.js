'use strict'

let username;
let password;

let dbName;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const userName = () => {
    return new Promise((resolve, reject) =>{
        readline.question('Enter your username: ', (username) => {
            console.log(`Username set to ${username}`);
            resolve();
        });
    });
};

const main = async () =>{
    await userName();
    readline.close();
}

main();
