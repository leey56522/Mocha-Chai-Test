const request = require('supertest')('https://api.twilio.com/2010-04-01');
const assert = require('chai').assert;

describe('Twilio API', () => {
    // Make GET request to the users route
    it('GET /users not empty', () => {
        return request
            .get('/Accounts')
            //encode authorization info into base64 format
            .set("Authorization", "basic " + new Buffer("userName:passWord").toString("base64"))
            .expect(200)
    })
})
