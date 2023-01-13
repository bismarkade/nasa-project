const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumer: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumer, launch);

function getAllLaunches(){
    // returns the launches in the format needed (handles the implementation details)
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber++;
    // ussing the lastest flight number as the key for our launch
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['Zero to Mastery', 'NASA'],
            flightNumer: latestFlightNumber, 
        })
    );
}


module.exports = {
    getAllLaunches,
    addNewLaunch,
};