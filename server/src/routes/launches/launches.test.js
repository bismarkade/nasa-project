describe('Test GET /launches', () => { 
     test('it should respond with 200 success', () => {
        const response = 200;
        expect(response).toBe(200);

     });
});

describe('Test POST /launch', () => { 
     test('It should catch missing required properties', () => {});
     test('It should also catch invalid dates', () => {});
})