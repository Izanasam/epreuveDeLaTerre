const path = require('path'); 

const scriptPath = __filename; 
const scriptName = path.basename(scriptPath);

console.log(scriptName);