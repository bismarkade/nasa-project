const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000; 

/* using the builid-in node create server and  
parse the express app as a listiner:
Benefit: separates the sever functionality from the express code
*/
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})
