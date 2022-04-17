//npm init -y
//npm install supertest mocha chai --save-dev

const request = require('supertest')('https://jsonplaceholder.typicode.com');
const assert = require('chai').assert;

//Testing user 
describe('User API', () => {
    // Make GET request to the users route
    it('GET /users not empty', () => {
        return request
            .get('/users')
            .expect(200)
            .then(res => {
                // assert that data returned is not empty
                assert.isNotEmpty(res.body);
            })
    })

    //Make POST request
    it('POST /users', () => {
        const data = {
            name:'Test user',
            email:'test_user@digitalonus.com',
         };
        return request
         .post ('/users')
         .send(data) // send payload data
         .then((res) => {
           assert.hasAnyKeys(res.body, 'id');
           assert.equal(res.body.name, data.name);
           assert.equal(res.body.email, data.email);
     
           });
     });
})