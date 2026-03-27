// Example: Get banks by destination country and product with search filter

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/Network/countries/PK/products/111/banks?PageNumber=2&PageSize=20&SearchString=Pakistan',
  headers: {
    'Accept-Language': 'en-US',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>',
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
