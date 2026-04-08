// Example: Get amounts and requirements

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://staging-mt.dandelionpayments.com/SendOrders/Countries/SL/Currencies/SLE/DeliveryMethods/2/Countries/IN/Currencies/INR/SendingCorrespBranches/R-SUB-004/AmountsAndReqs?ProductID=116&AmountType=LocalAmount&Amount=100&BankID=536101',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'ria-CallDateTimeLocal': '20260324153000',
    'ria-CallerUserId': 'demo-user',
    'ria-AgentId': '384726195',
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
