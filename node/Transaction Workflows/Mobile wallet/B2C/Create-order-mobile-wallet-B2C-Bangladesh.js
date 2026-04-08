// Example: Create order

const axios = require('axios');

let data = JSON.stringify({
  "Ria": {
    "ProductID": 118
  },
  "Transaction": {
    "OrderDate": "20260325",
    "OrderTime": "153000",
    "OrderNo": "GP554456738939",
    "CountryFrom": "SL",
    "CountryTo": "BD",
    "DeliveryMethod": 34,
    "TransferReasonID": "211"
  },
  "Quotation": {
    "PaymentCurrency": "SLE",
    "PaymentAmount": 2000,
    "CustChargeCurrency": "SLE",
    "CustChargeAmount": 0,
    "BeneCurrency": "BDT",
    "BeneAmount": 10360
  },
  "Customer": {
    "RiaInformation": {
      "AgentCustID": "217482111",
      "CustTypeID": 30
    },
    "EntityInformation": {
      "CustEntityName": "Global Trade Solutions Ltd"
    }
  },
  "SendingPartner": {
    "SendingCorrespBranchNo": "R-SUB-004"
  },
  "Beneficiary": {
    "RiaInformation": {
      "BeneTypeID": 10
    },
    "PersonalInformation": {
      "BeneFirstName": "Diether Jhan",
      "BeneLastName": "Ogal"
    },
    "Residence": {
      "BeneCountry": "BD"
    },
    "MobileWallet": {
      "MobileWalletAccountNo": "51965657124"
    }
  },
  "PayoutPartner": {
    "PayingCorrespLocID": 95022711
  }
});

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'https://mt-staging.dandelionpayments.com/SendOrders/Order',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'ria-CallDateTimeLocal': '20260325153000',
    'ria-CallerUserId': 'demo-user',
    'ria-AgentId': '628451937',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>',
    'Ria-ApiVersion': 'v2',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <ACCESS_TOKEN>'
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
