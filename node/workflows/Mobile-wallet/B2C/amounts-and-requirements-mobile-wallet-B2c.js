// Example: Get amounts and requirements

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/SendOrders/Countries/SL/Currencies/SLE/DeliveryMethods/34/Countries/BD/Currencies/BDT/SendingCorrespBranches/PH/AmountsAndReqs?PayingCorrespLocID=95022711&ProductID=118&AmountType=LocalAmount&Amount=2000',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'ria-CallDateTimeLocal': '20260325153000',
    'ria-CallerUserId': 'demo-user',
    'ria-AgentId': '618472935',
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
