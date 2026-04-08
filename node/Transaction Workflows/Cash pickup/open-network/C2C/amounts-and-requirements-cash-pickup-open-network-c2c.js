// Example: Get amounts and requirements

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/SendOrders/Countries/SL/Currencies/SLE/DeliveryMethods/1/Countries/SD/Currencies/SDG/SendingCorrespBranches/R-Sub-004/AmountsAndReqs?PayingCorrespID=211595911&ProductID=111&AmountType=LocalAmount&Amount=1000',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'ria-CallDateTimeLocal': '20260324153000',
    'ria-CallerUserId': 'demo-user',
    'ria-AgentId': '694182537',
    'Ria-ApiVersion': 'v2',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>',
    'Authorization': 'Bearer <ACCESS_TOKEN>',
    'Content-Type': 'text/plain'
  }
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
