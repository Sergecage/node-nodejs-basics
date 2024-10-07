const fs = require('fs');
const dir = require('path');

const create = async () => {
    fs.mkdir(path.join(__dirname, "files"));


    fs.writeFile(
        path.join(__dirname, "files", 'fresh.txt'),
        "I am fresh and young",
     () => {
        if(fs.existsSync) {
            throw new Error("FS operation failed");
        }
     },)

};

await create();