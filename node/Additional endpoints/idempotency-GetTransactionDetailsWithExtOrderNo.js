// Example: Get transaction by external number

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/Transactions/ExternalNumber/123456789',
  headers: {
    'Accept-Language': 'en-US',
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>',
    'Host': 'mt-staging.dandelionpayments.com',
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
