// Example: Get transaction statuses

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/Transactions/status',
  headers: {
    'Accept-Language': 'en-US',
    'ria-CallerCorrelationId': 'demo-correlation-id',
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