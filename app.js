
const data = require('./firstData');
// Reading file from file system 
const fs = require("fs");



// package to help parsing commands to objects 
const yargs = require('yargs');



yargs.command({
    command: "add", // we are bisacally adding this command to the terminal commands
    describe: "to add an item",
    builder: { // conditions fo every object 
        id: {
            describe: "person id",
            demandOption: true,
            type: 'number'
        },
        fname: {
            describe: "frist name",
            demandOption: true,
            type: 'string',
        },
        lname: {
            describe: 'last name',
            demandOption: true,
            type: 'string'
        },
        age: {
            describe: 'person age',
            demandOption: true,
            type: 'number'
        },
        city: {
            describe: 'home sweet home',
            demandOption: false,
            type: 'string'
        }
    },
    handler: function (x) {
        data.addPerson(x.id, x.fname, x.lname, x.age, x.city);
    }
})



yargs.command({
    command: "delete",
    describe: "delete an item",
    builder: {
        id: {
            describe: "person id",
            demandOption: true,
            type: 'number'
        },
    },
    handler: (x) => {
        data.deleteData(x.id);
        console.log(`you have successfuly Deleted item with the ID => ${x.id}`);
    }
})

yargs.command({
    command: 'read',
    describe: 'reading item data',
    builder: {
        id: {
            describe: "person id",
            demandOption: true,
            type: 'number'
        },
    },
    handler: (x) => {
        console.log(data.readData(x.id));
    }
});

yargs.command({
    command: 'list',
    describe: 'list info about an item',
    builder: {
        id: {
            describe: "person id",
            demandOption: true,
            type: 'number'
        },
    },
    handler: (x) => {
        console.log(data.listData(x.id));;
    }
})
yargs.parse(); // pasring the command we passes to the terminal command into a JS object (handler)
