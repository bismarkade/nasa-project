const http = require('http');
const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000; 

/*
  using the builid-in node create server and  
 -parse the express app as a listiner:
 -Benefit: separates the sever functionality from the express code
*/
const server = http.createServer(app);

// we await any planets data that comes to our server
async function startServer(){
    await loadPlanetsData();
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}
startServer();

