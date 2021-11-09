const controller = {};
const path = require('path');
controller.index = (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/home.html'));

};
controller.studies = (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/studies.html'));
    
};
controller.movies = (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/movies.html'));
    
};
controller.series = (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/series.html'));
    
};
controller.rutine = (req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/rutine.html'));
    
};

module.exports = controller