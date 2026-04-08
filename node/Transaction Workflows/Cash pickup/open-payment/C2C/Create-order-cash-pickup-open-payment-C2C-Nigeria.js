// Example: Create order

const axios = require('axios');

let data = JSON.stringify({
  "Ria": {
    "ProductID": 111
  },
  "Transaction": {
    "OrderDate": "20260325",
    "OrderTime": "153000",
    "OrderNo": "74440721330",
    "CountryFrom": "SL",
    "CountryTo": "NG",
    "DeliveryMethod": 1,
    "TransferReasonID": 211
  },
  "Quotation": {
    "PaymentCurrency": "SLE",
    "PaymentAmount": 1000,
    "CustChargeCurrency": "SLE",
    "CustChargeAmount": 42,
    "BeneCurrency": "NGN",
    "BeneAmount": 58439.1
  },
  "Customer": {
    "RiaInformation": {
      "AgentCustID": 232516,
      "CustTypeID": 10
    },
    "PersonalInformation": {
      "CustFirstName": "Adam",
      "CustLastName": "Ali"
    },
    "Residence": {
      "CustAddress": "123 Example Street",
      "CustCity": "Bo",
      "CustState": "SO",
      "CustCountryofResidence": "SL"
    },
    "IdentityDocument": {
      "CustID1Type": "National ID",
      "CustID1No": "55555555555555",
      "CustID1ExpirationDate": "20300826"
    },
    "ContactDetails": {
      "CustCellNo": "23255555555"
    }
  },
  "SendingPartner": {
    "SendingCorrespBranchNo": "R-Sub-004"
  },
  "Beneficiary": {
    "RiaInformation": {
      "AgentBeneID": 232547,
      "BeneTypeID": 10
    },
    "PersonalInformation": {
      "BeneFirstName": "Amina",
      "BeneLastName": "Yusuf"
    },
    "Residence": {
      "BeneCountry": "NG",
      "BeneCity": "Lagos",
      "BeneState": "LA"
    },
    "ContactDetails": {
      "BenePhoneNo": "2348012345678"
    }
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
    'ria-AgentId': '573821964',
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
