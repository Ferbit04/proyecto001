const controller = {};
const path = require('path');
controller.index = (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/inicio.html'));
    
};

module.exports = controller