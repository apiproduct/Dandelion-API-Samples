// Example: Get amounts and requirements

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/SendOrders/Countries/PH/Currencies/PHP/DeliveryMethods/1/Countries/CY/Currencies/EUR/SendingCorrespBranches/PH/AmountsAndReqs?PayingCorrespID=79650211&ProductID=111&AmountType=ForeignAmount&Amount=100',
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
