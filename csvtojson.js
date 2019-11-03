let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'Bangalore_schools.csv'; 
let fileOutputName = 'myOutputFile.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);