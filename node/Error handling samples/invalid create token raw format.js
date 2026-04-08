// Example: Get OAuth token using raw x-www-form-urlencoded body with operational country

const axios = require('axios');

const data = 'client_id=<CLIENT_ID>&client_secret=<CLIENT_SECRET>&grant_type=client_credentials&operational_Country=QA';

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://mt-staging.dandelionpayments.com/Authentication/oauth2/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>'
  },
  data: data
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
