'use strict'

let username;
let pw;
let dbname;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const userName = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter your username: ', (username) => {
            resolve(username)
        })
    })
}

const passWord = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter your password: ', (password) => {
            resolve(password)
        })
    })
}

const dbName = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter the database name you want to connect to: ', (dbname) => {
            resolve(dbname)
        })
    })
}

const main = async () =>{
    username = await userName();
    pw = await passWord();
    dbname = await dbName();

    readline.close();
    console.log(`Username: ${username}`);
    console.log(`PW: ${pw}`);
    console.log(`Database: ${dbname}`);
}

main();
