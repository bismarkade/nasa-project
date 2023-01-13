const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');

function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res){
    const launch = req.body;

    //validation
    if(!launch.mission || !launch.rocket || !launch.date || !launch.destination ){
        return res.status(400).json({
            error: 'Missing required launch property',
        });
    }
    // validating date object
    launch.launchDate = new Date(launch.launchDate);
    //isNAN --> return true is not a suucessful date
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }
    addNewLaunch(launch);
    
    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
};