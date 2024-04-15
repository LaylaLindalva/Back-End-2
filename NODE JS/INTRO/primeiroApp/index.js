const fs = require('node:fs');

fs.readFile('test.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data);
})