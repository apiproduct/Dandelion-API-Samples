// Example: Create order missing Bene Last Name

const axios = require('axios');

let data = JSON.stringify({
  "Ria": {
    "ProductID": 111
  },
  "Transaction": {
    "OrderDate": "20260325",
    "OrderTime": "153000",
    "OrderNo": "TEST-ORDER-0001",
    "CountryFrom": "SL",
    "CountryTo": "IN",
    "DeliveryMethod": "2",
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
      "CustLastName": "Anderson",
      "CustDateOfBirth": 19800415,
      "CustCountryOfBirth": "CA",
      "CustNationality": "CA"
    },
    "IdentityDocument": {
      "CustID1Type": "Tax ID",
      "CustID1No": "78657657",
      "CustID1ExpirationDate": 20300101
    },
    "Residence": {
      "CustAddress": "12 Example Street",
      "CustCity": "Freetown",
      "CustCountryofResidence": "SL",
      "CustState": "EA"
    },
    "ContactDetails": {
      "CustCellNo": "17048900535"
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
      "BeneLastName": ""
    },
    "Residence": {
      "BeneCity": "Mumbai",
      "BeneState": "MH",
      "BeneCountry": "IN"
    },
    "BankAccount": {
      "BankAccountNo": "123456789012",
      "BankRoutingCode": "AIRP0000001"
    }
  },
  "PayoutPartner": {
    "BankDeposit": {
      "BankID": "485011"
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
    'ria-AgentId': '583741926',
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
