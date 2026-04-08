// Example: Create draft order with Debtor Agent

const axios = require('axios');

let data = JSON.stringify({
  "Ria": {
    "ProductID": 116
  },
  "Transaction": {
    "OrderDate": "20260325",
    "OrderTime": "153000",
    "OrderNo": "TEST-D11211234",
    "CountryFrom": "SL",
    "CountryTo": "IN",
    "DeliveryMethod": "2",
    "TransferReasonID": 1211
  },
  "Quotation": {
    "PaymentCurrency": "SLE",
    "PaymentAmount": 1500,
    "CustChargeCurrency": "SLE",
    "CustChargeAmount": 70,
    "BeneCurrency": "INR",
    "BeneAmount": 6000
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
  },
  "DebtorAgent": {
    "Name": "Example Bank S.A.",
    "PostalAddress": {
      "City": "Madrid",
      "Country": "ES"
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
    'ria-AgentId': '658241937',
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