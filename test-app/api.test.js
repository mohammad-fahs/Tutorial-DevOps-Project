// Install the required packages using npm
// npm install axios mocha chai

// Import the required modules
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

// Set the base URL for your API dsfv dgfbd
const baseURL = 'http://test-one-app-1:6868/api';

// Test for the POST request
describe('POST /tutorials', () => {
  it('should create a new tutorial', async () => {
    // Define the request payload
    const data = {
      title: 'first tutorial',
      description: 'this is the description of the first tutorial',
      published: false
    };

    // Make the POST request
    const response = await axios.post(`${baseURL}/tutorials`, data);

    // Validate the response
    expect(response.status).to.equal(201);
    console.log(response.data)
    expect(response.data.id).to.be;
    expect(response.data.title).to.be;
    expect(response.data.description).to.be;
    expect(response.data.published).to.be;

  });
});

// Test for the GET request
describe('GET /tutorials', () => {
    it('should retrieve tutorials as a JSON array', async () => {
      // Make the GET request
      const response = await axios.get(`${baseURL}/tutorials`);
  
      // Validate the response status code
      expect(response.status).to.equal(200);
  
      // Validate the content type is JSON
      expect(response.headers['content-type']).to.include('application/json');
  
      // Validate that the response body is an array
      expect(response.data).to.be.an('array');
    });
  });
