// Example: Create draft order

const axios = require('axios');

let data = JSON.stringify({
  "Ria": {
    "ProductID": 111
  },
  "Transaction": {
    "OrderDate": "20260325",
    "OrderTime": "153000",
    "OrderNo": "GP55445678939",
    "CountryFrom": "SL",
    "CountryTo": "BD",
    "DeliveryMethod": 34,
    "TransferReasonID": "211"
  },
  "Quotation": {
    "PaymentCurrency": "SLE",
    "PaymentAmount": 1000,
    "CustChargeCurrency": "SLE",
    "CustChargeAmount": 0,
    "BeneCurrency": "BDT",
    "BeneAmount": 5190
  },
  "Customer": {
    "RiaInformation": {
      "AgentCustID": "217482111",
      "CustTypeID": 10
    },
    "ContactDetails": {
      "CustCellNo": "341254523452"
    },
    "IdentityDocument": {
      "CustID1Type": "Tax ID",
      "CustID1No": "78657657",
      "CustID1ExpirationDate": 20300101
    },
    "PersonalInformation": {
      "CustFirstName": "Glenda",
      "CustLastName": "Wayne",
      "CustDateOfBirth": "19871201",
      "CustNationality": "UK"
    },
    "Residence": {
      "CustAddress": "Waterloo Street",
      "CustCity": "London",
      "CustState": "KEN",
      "CustCountryofResidence": "UK"
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
      "BeneCity": "Dhaka",
      "BeneState": "Dhaka",
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
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://mt-staging.dandelionpayments.com/SendOrders/Orders/Draft',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'ria-CallDateTimeLocal': '20260325153000',
    'ria-CallerUserId': 'demo-user',
    'ria-AgentId': '472861935',
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
