// Example: Get rates

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/SendOrders/Rates?DateDesired=20260324&CountryFrom=US&CurrencyFrom=USD&CurrencyTo=ALL&CountryTo=AL&SendingCorrespBranchNo=US&IndicativeRate=true',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'ria-CallDateTimeLocal': '20260324153000',
    'ria-CallerUserId': 'demo-user',
    'ria-AgentId': '538271649',
    'Ria-ApiVersion': 'v1',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>',
    'Host': 'mt-staging.dandelionpayments.com',
    'Authorization': 'Bearer <ACCESS_TOKEN>',
    'Accept': 'application/json'
  }
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });