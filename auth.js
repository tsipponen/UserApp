'use strict'

let username;
let pw;
let dbname;
let testVar;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUsername(){
    return new Promise((resolve, reject) => {
         readline.question('Enter your username: ', (username) => {
            resolve(username)
         })
    })
}

async function getPassword(){
    return new Promise((resolve, reject) => {
        readline.question('Enter your password: ', (password) => {
            resolve(password)
        })
    })
}

async function getDbName(){
    return new Promise((resolve, reject) => {
        readline.question('Enter the database name you want to connect to: ', (dbname) => {
            resolve(dbname)
        })
    })
}

module.exports = {
    getConnectionInfo: async() => {
        var connectionInfo = {
            username: await getUsername(),
            password: await getPassword(),
            dbname: await getDbName()
        }
        return connectionInfo;
    }
}
