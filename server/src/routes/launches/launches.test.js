const request = require('supertest');
const app = require('../../app');


describe('Test GET /launches', () => { 
     test('it should respond with 200 success', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200);

     });
});

describe('Test POST /launch', () => { 
    const completelaunchData = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186 f',
        launchDate: 'January 4, 2028',
    }; 

    const launchDataWithoutDate = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186 f',
    }

     test('It should respond with 201 created', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completelaunchData)
            .expect('Content-Type', /json/)
            .expect(201);

        const requestDate = new Date(completelaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);

        expect(response.body).toMatchObject(launchDataWithoutDate);
     });
     test('It should also catch invalid dates', () => {});
})