const fs = require("fs");


function addPerson(id, fname, lname, age, city) {
    const data = loadData();
    const filterd = data.filter(item => item.id === id);
    if (filterd.length == 0) {
        data.push({
            id,
            fname,
            lname,
            age,
            city
        });
    } else {
        throw new Error('Data Cannot Have Duplicated ID');
    }



    saveAllData(data);
};

function deleteData(id) {
    const data = loadData();
    const returnedData = data.filter(item => item.id !== id);
    saveAllData(returnedData);
};


function loadData() {
    try {
        const data = fs.readFileSync('firstData.json').toString();
        return JSON.parse(data);
    } catch {
        return [];
    }

};

function readData(id) {
    const data = loadData();
    const returnedData = data.filter(item => item.id === id);
    if (returnedData.length > 0) {
        return returnedData;
    } else {
        console.log(`id of value ${id} is not found`);
        return;
    };
};

// function listData() {
//     const data = loadData();
//     data.forEach(obj => obj.fname, obj.city);
// };

function listData(id) { // this function is a plus logic wich we pass a specific id and the output will be thye first name and the city of the obj with the specifi id
    const data = loadData();
    const personInfo = data.filter(item => item.id === id);
    if (personInfo.length > 0) {
        const returnedInfo = personInfo.map(item => ({ fname: item.fname, city: item.city }));
        return returnedInfo;

    } else {
        console.log(`id of value ${id} is not found`);
        return;
    }
};

function saveAllData(data) {
    const dataToSave = JSON.stringify(data);
    fs.writeFileSync('firstData.json', dataToSave);
};

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}