// Example: Invalid access token

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/Network/countries',
  headers: {
    'Accept-Language': 'en-US',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>',
    'Host': 'mt-staging.dandelionpayments.com',
    'Accept': 'application/json',
    'Authorization': 'Bearer <ACCESS_TOKEN>'
  }
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
