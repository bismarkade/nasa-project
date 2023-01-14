const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require('../../models/launches.model');

function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res){
    const launch = req.body;

    //validation
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target ){
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

function httpAbortLaunch(req, res){
    const launchId = Number(req.params.id);

    // if launch does not exist
    if (!existsLaunchWithId(launchId)){
        return res.status(404).json({
            error: 'Launch not found',
        });
    }

    // if launch exists
    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted);


}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};