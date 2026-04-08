// Example: Invalid date format

const axios = require('axios');

let data = JSON.stringify({
  "Ria": {
    "ProductID": 111
  },
  "Transaction": {
    "OrderDate": "25-03-2026",
    "OrderTime": "153000",
    "OrderNo": "TEST-INVALID-DATE-001",
    "CountryFrom": "SL",
    "CountryTo": "IN",
    "DeliveryMethod": 2,
    "TransferReasonID": 1211
  },
  "Quotation": {
    "PaymentCurrency": "SLE",
    "PaymentAmount": 1000,
    "CustChargeCurrency": "SLE",
    "CustChargeAmount": 42,
    "BeneCurrency": "INR",
    "BeneAmount": 3970
  },
  "Customer": {
    "RiaInformation": {
      "AgentCustID": "5404867120",
      "CustTypeID": "10"
    },
    "PersonalInformation": {
      "CustFirstName": "John",
      "CustLastName": "Anderson"
    }
  },
  "SendingPartner": {
    "SendingCorrespBranchNo": "R-SUB-004"
  },
  "Beneficiary": {
    "RiaInformation": {
      "BeneTypeID": "30"
    },
    "EntityInformation": {
      "BeneEntityName": "Global Trade Solutions"
    },
    "BankAccount": {
      "BankAccountNo": "151056209995",
      "BankRoutingCode": "56543249087"
    }
  },
  "PayoutPartner": {
    "BankDeposit": {
      "BankID": "536101"
    }
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://mt-staging.dandelionpayments.com/SendOrders/Orders/Draft',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'ria-CallDateTimeLocal': '20260325153000',
    'ria-CallerUserId': 'demo-user',
    'ria-CallerDeviceId': '',
    'ria-AgentId': '584271936',
    'ria-CallerDeviceIP': '',
    'ria-CallerDeviceType': '',
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
