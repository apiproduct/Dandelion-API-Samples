// Example: Create order

const axios = require('axios');

let data = JSON.stringify({
  "Ria": {
    "ProductID": 118
  },
  "Transaction": {
    "OrderDate": "20260325",
    "OrderTime": "153000",
    "OrderNo": "TEST-352184372234",
    "CountryFrom": "SL",
    "CountryTo": "IN",
    "DeliveryMethod": "2",
    "TransferReasonID": "1211"
  },
  "Quotation": {
    "PaymentCurrency": "SLE",
    "PaymentAmount": 2000,
    "CustChargeCurrency": "SLE",
    "CustChargeAmount": "70.00",
    "BeneCurrency": "INR",
    "BeneAmount": 7940
  },
  "Customer": {
    "RiaInformation": {
      "AgentCustID": "5404867120",
      "CustTypeID": "30"
    },
    "EntityInformation": {
      "CustEntityName": "Global Trade Solutions Ltd",
      "CustDateOfIncorporation": "20200906",
      "CustIndustryCategoryID": "1000",
      "CustIndustrySubCategoryID": "1"
    }
  },
  "SendingPartner": {
    "SendingCorrespBranchNo": "R-SUB-004"
  },
  "Beneficiary": {
    "RiaInformation": {
      "BeneTypeID": "10"
    },
    "PersonalInformation": {
      "BeneFirstName": "Lana",
      "BeneLastName": "Wayne"
    },
    "BankAccount": {
      "BankAccountNo": "123456789012",
      "BankRoutingCode": "AIRP0000001"
    }
  },
  "PayoutPartner": {
    "BankDeposit": {
      "BankID": "536101"
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
    'ria-AgentId': '581429367',
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
