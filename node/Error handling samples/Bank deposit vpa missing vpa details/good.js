// Example: Create order

const axios = require('axios');

let data = JSON.stringify({
  "Ria": {
    "ProductID": 111
  },
  "Transaction": {
    "OrderDate": "20260325",
    "OrderTime": "153000",
    "OrderNo": "TEST-112E111K234",
    "CountryFrom": "SL",
    "CountryTo": "BR",
    "DeliveryMethod": "2",
    "TransferReasonID": 1211
  },
  "Quotation": {
    "PaymentCurrency": "SLE",
    "PaymentAmount": 1000,
    "CustChargeCurrency": "BRL",
    "CustChargeAmount": 42,
    "BeneCurrency": "BRL",
    "BeneAmount": 220
  },
  "Customer": {
    "RiaInformation": {
      "AgentCustID": "5404867120",
      "CustTypeID": "10"
    },
    "PersonalInformation": {
      "CustFirstName": "John",
      "CustLastName": "Anderson",
      "CustDateOfBirth": "19800415",
      "CustCountryOfBirth": "CA",
      "CustNationality": "CA"
    },
    "IdentityDocument": {
      "CustID1Type": "Tax ID",
      "CustID1No": "78657657",
      "CustID1ExpirationDate": "20300101"
    },
    "Residence": {
      "CustAddress": "12 Example Street",
      "CustCity": "Freetown",
      "CustCountryofResidence": "SL",
      "CustState": "EA"
    },
    "ContactDetails": {
      "CustCellNo": "+17048900535"
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
    "Residence": {
      "BeneCity": "Sao Paulo",
      "BeneState": "SP",
      "BeneCountry": "BR"
    },
    "VPA": {
      "VirtualPaymentAccountNo": "user@example.com"
    }
  },
  "PayoutPartner": {
    "VPA": {
      "VirtualPaymentProviderID": 2878411
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
    'ria-AgentId': '684193527',
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
