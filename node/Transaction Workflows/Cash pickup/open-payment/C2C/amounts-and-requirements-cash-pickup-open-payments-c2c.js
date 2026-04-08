// Example: Get amounts and requirements

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/SendOrders/Countries/SL/Currencies/SLE/DeliveryMethods/1/Countries/NG/Currencies/NGN/SendingCorrespBranches/R-Sub-004/AmountsAndReqs?AmountType=LocalAmount&Amount=1000&ProductID=111',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'ria-CallDateTimeLocal': '20260324153000',
    'ria-CallerUserId': 'demo-user',
    'ria-AgentId': '853174296',
    'Host': 'mt-staging.dandelionpayments.com',
    'Ria-ApiVersion': 'v2',
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
