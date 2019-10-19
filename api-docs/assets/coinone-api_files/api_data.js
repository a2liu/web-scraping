define({ "api": [
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/account/btc_deposit_address/",
    "title": "BTC deposit address",
    "name": "BTCAddress",
    "group": "Account",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress",
            "description": "<p>BTC wallet address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n  \"errorCode\":\"0\",\n  \"walletAddress\":\"mnobqu4i6qMCJWDpf5UimRmr8JCvZ8FLcN\",\n  \"result\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/account/daily_balance/",
    "title": "Daily Balance - Deprecated",
    "name": "DailyBalance",
    "group": "Account",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.0",
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "dailyBalance",
            "description": "<p>Daily balance's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.value",
            "description": "<p>Overall balance's value in KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.krw",
            "description": "<p>KRW balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.btc",
            "description": "<p>BTC balance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"dailyBalance\": \n  [\n    {\n      \"timestamp\": \"1416787200\", \n      \"value\": \"100452138\", \n      \"krw\": \"90052387\", \n      \"btc\": \"24.76131234\"\n    }, \n    {\n      \"timestamp\": \"1416700800\", \n      \"value\": \"100352138\", \n      \"krw\": \"89952387\", \n      \"btc\": \"24.76131234\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/account/user_info/",
    "title": "User Information",
    "name": "GetUserInfo",
    "group": "Account",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.virtualAccountInfo",
            "description": "<p>Virtual account's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.bankName",
            "description": "<p>Virtual account's bank name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.mobileInfo",
            "description": "<p>Mobile authentication's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.userName",
            "description": "<p>Mobile phone's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneNumber",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneCorp",
            "description": "<p>Mobile phone's corporation code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.mobileInfo.isAuthenticated",
            "description": "<p>'true' If a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.bankInfo",
            "description": "<p>User's bank information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.depositor",
            "description": "<p>Account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.bankCode",
            "description": "<p>Account's bankCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.accountNumber",
            "description": "<p>Account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.bankInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.emailInfo",
            "description": "<p>User's email information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.emailInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.emailInfo.email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "userInfo.securityLevel",
            "description": "<p>User's security level. Summation of authentications.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.maker",
            "description": "<p>Percent of maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.taker",
            "description": "<p>Percent of taker fee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"result\": \"success\", \n  \"userInfo\": \n  {\n    \"virtualAccountInfo\": \n    {\n      \"depositor\": \"John\", \n      \"accountNumber\": \"0123456789\", \n      \"bankName\": \"bankName\"\n    }, \n    \"mobileInfo\": \n    {\n      \"userName\": \"John\", \n      \"phoneNumber\": \"0123456789\", \n      \"phoneCorp\": \"1\", \n      \"isAuthenticated\": \"true\"\n    }, \n    \"bankInfo\": \n    {\n      \"depositor\": \"John\", \n      \"bankCode\": \"20\", \n      \"isAuthenticated\": \"true\", \n      \"accountNumber\": \"0123456789\"\n    }, \n    \"emailInfo\": \n    {\n      \"isAuthenticated\": \"true\",\n      \"email\": \"john@coinone.com\"\n    }, \n    \"securityLevel\": \"4\",\n    \"feeRate\":\n    {\n        \"maker\":\"-0.0015\",\n        \"taker\":\"0.002\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/account/user_info/",
    "title": "Account Information",
    "name": "GetUserInfo",
    "group": "Account",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.virtualAccountInfo",
            "description": "<p>Virtual account's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.bankName",
            "description": "<p>Virtual account's bank name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.mobileInfo",
            "description": "<p>Mobile authentication's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.userName",
            "description": "<p>Mobile phone's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneNumber",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneCorp",
            "description": "<p>Mobile phone's corporation code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.mobileInfo.isAuthenticated",
            "description": "<p>'true' If a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.bankInfo",
            "description": "<p>User's bank information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.depositor",
            "description": "<p>Account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.bankCode",
            "description": "<p>Account's bankCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.accountNumber",
            "description": "<p>Account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.bankInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.emailInfo",
            "description": "<p>User's email information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.emailInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "userInfo.securityLevel",
            "description": "<p>User's security level. Summation of authentications.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"userInfo\":\n  {\n    \"virtualAccountInfo\":\n    {\n      \"depositor\": \"John\",\n      \"accountNumber\": \"0123456789\",\n      \"bankName\": \"bankName\"\n    },\n    \"mobileInfo\":\n    {\n      \"userName\": \"John\",\n      \"phoneNumber\": \"0123456789\",\n      \"phoneCorp\": \"1\",\n      \"isAuthenticated\": \"true\"\n    },\n    \"bankInfo\":\n    {\n      \"depositor\": \"John\",\n      \"bankCode\": \"20\",\n      \"isAuthenticated\": \"true\",\n      \"accountNumber\": \"0123456789\"\n    },\n    \"emailInfo\":\n    {\n      \"isAuthenticated\": \"true\",\n      \"email\": \"john@coinone.com\"\n    },\n    \"securityLevel\": \"4\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/account/virtual_account/",
    "title": "Virtual Account",
    "name": "GetVirtualAccount",
    "group": "Account",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankName",
            "description": "<p>Virtual account's bank name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"depositor\": \"John\", \n  \"accountNumber\": \"2309482304\", \n  \"result\": \"success\", \n  \"bankName\": \"bankName\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/account/balance/",
    "title": "Balance",
    "name": "UserBalance",
    "group": "Account",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "btc",
            "description": "<p>BTC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.avail",
            "description": "<p>Available BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "bch",
            "description": "<p>BCH information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bch.avail",
            "description": "<p>Available BCH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bch.balance",
            "description": "<p>Total BCH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "eth",
            "description": "<p>ETH information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eth.avail",
            "description": "<p>Available ETH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eth.balance",
            "description": "<p>Total ETH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "etc",
            "description": "<p>ETC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "etc.avail",
            "description": "<p>Available ETC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "etc.balance",
            "description": "<p>Total ETC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "xrp",
            "description": "<p>XRP information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xrp.avail",
            "description": "<p>Available XRP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xrp.balance",
            "description": "<p>Total XRP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "qtum",
            "description": "<p>QTUM information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "qtum.avail",
            "description": "<p>Available QTUM.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "qtum.balance",
            "description": "<p>Total QTUM.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "iota",
            "description": "<p>IOTA information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "iota.avail",
            "description": "<p>Available IOTA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "iota.balance",
            "description": "<p>Total IOTA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ltc",
            "description": "<p>LTC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "ltc.avail",
            "description": "<p>Available LTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "ltc.balance",
            "description": "<p>Total LTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "btg",
            "description": "<p>BTG information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btg.avail",
            "description": "<p>Available BTG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btg.balance",
            "description": "<p>Total BTG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "omg",
            "description": "<p>OMG information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "omg.avail",
            "description": "<p>Available OMG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "omg.balance",
            "description": "<p>Total OMG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "eos",
            "description": "<p>EOS information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eos.avail",
            "description": "<p>Available EOS.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eos.balance",
            "description": "<p>Total EOS.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>DATA information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "data.avail",
            "description": "<p>Available DATA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "data.balance",
            "description": "<p>Total DATA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "zil",
            "description": "<p>ZIL information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "zil.avail",
            "description": "<p>Available ZIL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "zil.balance",
            "description": "<p>Total ZIL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "knc",
            "description": "<p>KNC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "knc.avail",
            "description": "<p>Available KNC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "knc.balance",
            "description": "<p>Total KNC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "zrx",
            "description": "<p>ZRX information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "zrx.avail",
            "description": "<p>Available ZRX.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "zrx.balance",
            "description": "<p>Total ZRX.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "xtz",
            "description": "<p>XTZ information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xtz.avail",
            "description": "<p>Available XTZ.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xtz.balance",
            "description": "<p>Total XTZ.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "krw",
            "description": "<p>KRW information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.avail",
            "description": "<p>Available KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.balance",
            "description": "<p>Total KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "normalWallets",
            "description": "<p>BTC normal wallet information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "normalWallets.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normalWallets.label",
            "description": "<p>Normal Wallet Label.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n  \"errorCode\":\"0\",\n  \"normalWallets\":\n  [  \n    {  \n      \"balance\":\"6.1151\",\n      \"label\":\"First Wallet\"\n    },\n    {  \n       \"balance\":\"6.9448\",\n       \"label\":\"Second Wallet\"\n    }\n  ],\n  \"result\":\"success\",\n  \"btc\":\n  {  \n    \"avail\":\"344.33703699\",\n    \"balance\":\"344.33703699\"\n  },\n  \"bch\":\n  {\n    \"avail\":\"1.00001234\",\n    \"balance\":\"1.00001234\"\n  },\n  \"eth\":\n  {\n    \"avail\":\"1.00001234\",\n    \"balance\":\"1.00001234\"\n  },\n  \"etc\":\n  {\n    \"avail\":\"300.32123699\",\n    \"balance\":\"300.32123699\"\n  },\n  \"xrp\":\n  {\n    \"avail\":\"434.50890000\"\n    \"balance\":\"434.85450000\"\n  },\n  \"qtum\":\n  {\n    \"avail\":\"434.50890000\"\n    \"balance\":\"434.85450000\"\n  },\n  \"iota\":\n  {\n    \"avail\":\"213.50800000\"\n    \"balance\":\"213.50800000\"\n  },\n  \"ltc\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"btg\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"omg\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"eos\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"data\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"zil\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"knc\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"zrx\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"xtz\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"krw\":\n  {  \n    \"avail\":\"6901425\",\n    \"balance\":\"6901430\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/deposit_address/",
    "title": "Deposit Address",
    "name": "Address",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "walletAddress",
            "description": "<p>wallet address object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.btc",
            "description": "<p>BTC wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.bch",
            "description": "<p>BCH wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.eth",
            "description": "<p>ETH wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.etc",
            "description": "<p>ETC wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.xrp",
            "description": "<p>XRP wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.xrp_tag",
            "description": "<p>XRP destination tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.qtum",
            "description": "<p>QTUM wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.iota",
            "description": "<p>IOTA wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.ltc",
            "description": "<p>LTC wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.btg",
            "description": "<p>BTG wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.omg",
            "description": "<p>OMG wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.eos",
            "description": "<p>EOS wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.eos_memo",
            "description": "<p>EOS memo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.data",
            "description": "<p>DATA wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.zil",
            "description": "<p>ZIL wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.knc",
            "description": "<p>KNC wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.zrx",
            "description": "<p>ZRX wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.xtz",
            "description": "<p>XTZ wallet address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"walletAddress\":\n  {\n    \"btc\": \"mnobqu4i6qMCJWDpf5UimRmr8JCvZ8FLcN\",\n    \"bch\": \"mt9Dxe1ZwEMjw9M6mv3xcEB572oqwLuuHC\",\n    \"eth\": \"0x61bB630D3B2e8eda0FC1d50F9f958eC02e3969F6\",\n    \"etc\": \"0x37a9679c41e99dB270Bda88DE8FF50c0Cd23f326\",\n    \"xrp\": \"rGf3sLFW6q65YeQDCGDEFeFTKLKNxy6rDg\",\n    \"xrp_tag\": \"1289063454\",\n    \"qtum\": \"0x65113c823388127da32b2003444c076d70f8d2d3\",\n    \"iota\": \"CVLITGUGQXPHFKTUNAVXQFZQP9LTGWPBZBHPIRJOPTQQROVSXPVQPURDETCPBHQYPGTERQJIMZAZV9HQAGZNASOHHC\",\n    \"ltc\": \"LS3B9qyihXq6tztmJRbLBYAxtEGMaVLBTP\",\n    \"btg\": \"mt9Dxe1ZwEMjw9M6mv3xcEB572oqwLuuHC\",\n    \"omg\": \"0x61bB630D3B2e8eda0FC1d50F9f958eC02e3969F6\",\n    \"eos\": \"coinonekorea\",\n    \"eos_memo\": \"012345678\",\n    \"data\": \"0x61bB630D3B2e8eda0FC1d50F9f958eC02e3969F6\",\n    \"zil\": \"0x61bB630D3B2e8eda0FC1d50F9f958eC02e3969F6\",\n    \"knc\": \"0x61bB630D3B2e8eda0FC1d50F9f958eC02e3969F6\",\n    \"zrx\": \"0x61bB630D3B2e8eda0FC1d50F9f958eC02e3969F6\",\n    \"xtz\": \"tz1TEGZycBBAhZeX59a8xXPrCXDyEsJrm7bm\",\n  }\n  \"result\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/deposit_address/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/deposit_address/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time()*1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndata = get_response('v2/account/deposit_address/', get_base_payload())\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/account.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/deposit_address/",
    "title": "Deposit Address",
    "name": "Address",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "walletAddress",
            "description": "<p>wallet address object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.btc",
            "description": "<p>BTC wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.bch",
            "description": "<p>BCH wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.eth",
            "description": "<p>ETH wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.etc",
            "description": "<p>ETC wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.xrp",
            "description": "<p>XRP wallet address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.xrp_tag",
            "description": "<p>XRP destination tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress.qtum",
            "description": "<p>QTUM wallet address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"walletAddress\":\n  {\n    \"btc\": \"mnobqu4i6qMCJWDpf5UimRmr8JCvZ8FLcN\",\n    \"bch\": \"mt9Dxe1ZwEMjw9M6mv3xcEB572oqwLuuHC\",\n    \"eth\": \"0x61bB630D3B2e8eda0FC1d50F9f958eC02e3969F6\",\n    \"etc\": \"0x37a9679c41e99dB270Bda88DE8FF50c0Cd23f326\",\n    \"xrp\": \"rGf3sLFW6q65YeQDCGDEFeFTKLKNxy6rDg\",\n    \"xrp_tag\": \"1289063454\",\n    \"qtum\": \"0x65113c823388127da32b2003444c076d70f8d2d3\"\n  }\n  \"result\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/deposit_address/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/deposit_address/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/btc_deposit_address/",
    "title": "BTC Deposit Address - Deprecated",
    "name": "BTCAddress",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.2",
    "deprecated": {
      "content": "This API is no longer supported. Now use 'Deposit Address'."
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletAddress",
            "description": "<p>BTC wallet address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n  \"errorCode\":\"0\",\n  \"walletAddress\":\"mnobqu4i6qMCJWDpf5UimRmr8JCvZ8FLcN\",\n  \"result\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/btc_deposit_address/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/btc_deposit_address/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/account.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/daily_balance/",
    "title": "Daily Balance - Deprecated",
    "name": "DailyBalance",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.9",
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "dailyBalance",
            "description": "<p>Daily balance's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.value",
            "description": "<p>Overall balance's value in KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.krw",
            "description": "<p>KRW balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.btc",
            "description": "<p>BTC balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.bch",
            "description": "<p>BCH balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.eth",
            "description": "<p>ETH balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.etc",
            "description": "<p>ETC balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.xrp",
            "description": "<p>XRP balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.qtum",
            "description": "<p>QTUM balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.iota",
            "description": "<p>IOTA balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.ltc",
            "description": "<p>LTC balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.btg",
            "description": "<p>BTG balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.omg",
            "description": "<p>OMG balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.eos",
            "description": "<p>EOS balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.data",
            "description": "<p>DATA balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.zil",
            "description": "<p>ZIL balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.knc",
            "description": "<p>KNC balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.zrx",
            "description": "<p>ZRX balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.xtz",
            "description": "<p>XTZ balance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"dailyBalance\": \n  [\n    {\n      \"timestamp\": \"1416787200\", \n      \"value\": \"100452138\", \n      \"krw\": \"90052387\", \n      \"btc\": \"24.76131234\",\n      \"bch\": \"1.23122322\",\n      \"eth\": \"1.23122322\",\n      \"etc\": \"1.23122322\",\n      \"xrp\": \"1.23122322\",\n      \"qtum\": \"1.23122322\",\n      \"iota\": \"1.23122322\",\n      \"ltc\": \"1.23122322\",\n      \"btg\": \"1.23122322\",\n      \"omg\": \"1.23122322\",\n      \"eos\": \"1.23122322\",\n      \"data\": \"1.23122322\",\n      \"zil\": \"1.23122322\",\n      \"knc\": \"1.23122322\",\n      \"zrx\": \"1.23122322\",\n      \"xtz\": \"1.23122322\",\n    }, \n    {\n      \"timestamp\": \"1416700800\", \n      \"value\": \"100352138\", \n      \"krw\": \"89952387\", \n      \"btc\": \"24.76131234\",\n      \"bch\": \"1.23122322\",\n      \"eth\": \"1.23122322\",\n      \"etc\": \"1.23122322\",\n      \"xrp\": \"1.23122322\",\n      \"qtum\": \"1.23122322\",\n      \"iota\": \"1.23122322\",\n      \"ltc\": \"1.23122322\",\n      \"btg\": \"1.23122322\",\n      \"omg\": \"1.23122322\",\n      \"eos\": \"1.23122322\",\n      \"data\": \"1.23122322\",\n      \"zil\": \"1.23122322\",\n      \"knc\": \"1.23122322\",\n      \"zrx\": \"1.23122322\",\n      \"xtz\": \"1.23122322\",\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/daily_balance/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/daily_balance/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time()*1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndata = get_response('v2/account/daily_balance/', get_base_payload())\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/account.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/daily_balance/",
    "title": "Daily Balance",
    "name": "DailyBalance",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "dailyBalance",
            "description": "<p>Daily balance's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.value",
            "description": "<p>Overall balance's value in KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.krw",
            "description": "<p>KRW balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.btc",
            "description": "<p>BTC balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.bch",
            "description": "<p>BCH balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.eth",
            "description": "<p>ETH balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.etc",
            "description": "<p>ETC balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.xrp",
            "description": "<p>XRP balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.qtum",
            "description": "<p>QTUM balance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"dailyBalance\": \n  [\n    {\n      \"timestamp\": \"1416787200\", \n      \"value\": \"100452138\", \n      \"krw\": \"90052387\", \n      \"btc\": \"24.76131234\",\n      \"bch\": \"1.23122322\",\n      \"eth\": \"1.23122322\",\n      \"etc\": \"1.23122322\",\n      \"xrp\": \"1.23122322\",\n      \"qtum\": \"1.23122322\"\n    }, \n    {\n      \"timestamp\": \"1416700800\", \n      \"value\": \"100352138\", \n      \"krw\": \"89952387\", \n      \"btc\": \"24.76131234\",\n      \"bch\": \"1.23122322\",\n      \"eth\": \"1.23122322\",\n      \"etc\": \"1.23122322\",\n      \"xrp\": \"1.23122322\",\n      \"qtum\": \"1.23122322\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/daily_balance/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/daily_balance/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/daily_balance/",
    "title": "Daily Balance",
    "name": "DailyBalance",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "dailyBalance",
            "description": "<p>Daily balance's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.value",
            "description": "<p>Overall balance's value in KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.krw",
            "description": "<p>KRW balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.btc",
            "description": "<p>BTC balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.eth",
            "description": "<p>ETH balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.etc",
            "description": "<p>ETC balance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"dailyBalance\": \n  [\n    {\n      \"timestamp\": \"1416787200\", \n      \"value\": \"100452138\", \n      \"krw\": \"90052387\", \n      \"btc\": \"24.76131234\",\n      \"eth\": \"1.23122322\",\n      \"etc\": \"1.23122322\"\n    }, \n    {\n      \"timestamp\": \"1416700800\", \n      \"value\": \"100352138\", \n      \"krw\": \"89952387\", \n      \"btc\": \"24.76131234\",\n      \"eth\": \"1.23122322\",\n      \"etc\": \"1.23122322\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/daily_balance/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/daily_balance/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/daily_balance/",
    "title": "Daily Balance",
    "name": "DailyBalance",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "dailyBalance",
            "description": "<p>Daily balance's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.value",
            "description": "<p>Overall balance's value in KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "dailyBalance.krw",
            "description": "<p>KRW balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "dailyBalance.btc",
            "description": "<p>BTC balance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"dailyBalance\":\n  [\n    {\n      \"timestamp\": \"1416787200\",\n      \"value\": \"100452138\",\n      \"krw\": \"90052387\",\n      \"btc\": \"24.76131234\"\n    },\n    {\n      \"timestamp\": \"1416700800\",\n      \"value\": \"100352138\",\n      \"krw\": \"89952387\",\n      \"btc\": \"24.76131234\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/daily_balance/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/daily_balance/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/user_info/",
    "title": "User Information",
    "name": "GetUserInfo",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.virtualAccountInfo",
            "description": "<p>Virtual account's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.bankName",
            "description": "<p>Virtual account's bank name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.mobileInfo",
            "description": "<p>Mobile authentication's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.userName",
            "description": "<p>Mobile phone's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneNumber",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneCorp",
            "description": "<p>Mobile phone's corporation code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.mobileInfo.isAuthenticated",
            "description": "<p>'true' If a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.bankInfo",
            "description": "<p>User's bank information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.depositor",
            "description": "<p>Account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.bankCode",
            "description": "<p>Account's bankCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.accountNumber",
            "description": "<p>Account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.bankInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.emailInfo",
            "description": "<p>User's email information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.emailInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.emailInfo.email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "userInfo.securityLevel",
            "description": "<p>User's security level. Summation of authentications.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.btc",
            "description": "<p>User's BTC fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.btc.maker",
            "description": "<p>Percent of BTC maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.btc.taker",
            "description": "<p>Percent of BTC taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.bch",
            "description": "<p>User's BCH fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.bch.maker",
            "description": "<p>Percent of BCH maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.bch.taker",
            "description": "<p>Percent of BCH taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.eth",
            "description": "<p>User's ETH fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.eth.maker",
            "description": "<p>Percent of ETH maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.eth.taker",
            "description": "<p>Percent of ETH taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.etc",
            "description": "<p>User's ETC fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.etc.maker",
            "description": "<p>Percent of ETC maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.etc.taker",
            "description": "<p>Percent of ETC taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.xrp",
            "description": "<p>User's XRP fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.xrp.maker",
            "description": "<p>Percent of XRP maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.xrp.taker",
            "description": "<p>Percent of XRP taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.qtum",
            "description": "<p>User's QTUM fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.qtum.maker",
            "description": "<p>Percent of QTUM maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.qtum.taker",
            "description": "<p>Percent of QTUM taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.iota",
            "description": "<p>User's IOTA fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.iota.maker",
            "description": "<p>Percent of IOTA maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.iota.taker",
            "description": "<p>Percent of IOTA taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.ltc",
            "description": "<p>User's LTC fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.ltc.maker",
            "description": "<p>Percent of LTC maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.ltc.taker",
            "description": "<p>Percent of LTC taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.btg",
            "description": "<p>User's BTG fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.btg.maker",
            "description": "<p>Percent of BTG maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.btg.taker",
            "description": "<p>Percent of BTG taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.omg",
            "description": "<p>User's OMG fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.omg.maker",
            "description": "<p>Percent of OMG maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.omg.taker",
            "description": "<p>Percent of OMG taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.eos",
            "description": "<p>User's EOS fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.eos.maker",
            "description": "<p>Percent of EOS maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.eos.taker",
            "description": "<p>Percent of EOS taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.data",
            "description": "<p>User's DATA fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.data.maker",
            "description": "<p>Percent of DATA maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.data.taker",
            "description": "<p>Percent of DATA taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.zil",
            "description": "<p>User's ZIL fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.zil.maker",
            "description": "<p>Percent of ZIL maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.zil.taker",
            "description": "<p>Percent of ZIL taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.knc",
            "description": "<p>User's KNC fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.knc.maker",
            "description": "<p>Percent of KNC maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.knc.taker",
            "description": "<p>Percent of KNC taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.zrx",
            "description": "<p>User's ZRX fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.zrx.maker",
            "description": "<p>Percent of ZRX maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.zrx.taker",
            "description": "<p>Percent of ZRX taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.xtz",
            "description": "<p>User's XTZ fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.xtz.maker",
            "description": "<p>Percent of XTZ maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.xtz.taker",
            "description": "<p>Percent of XTZ taker fee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"result\": \"success\", \n  \"userInfo\": \n  {\n    \"virtualAccountInfo\": \n    {\n      \"depositor\": \"John\", \n      \"accountNumber\": \"0123456789\", \n      \"bankName\": \"bankName\"\n    }, \n    \"mobileInfo\": \n    {\n      \"userName\": \"John\", \n      \"phoneNumber\": \"0123456789\", \n      \"phoneCorp\": \"1\", \n      \"isAuthenticated\": \"true\"\n    }, \n    \"bankInfo\": \n    {\n      \"depositor\": \"John\", \n      \"bankCode\": \"20\", \n      \"isAuthenticated\": \"true\", \n      \"accountNumber\": \"0123456789\"\n    }, \n    \"emailInfo\": \n    {\n      \"isAuthenticated\": \"true\",\n      \"email\": \"john@coinone.com\"\n    }, \n    \"securityLevel\": \"4\",\n    \"feeRate\":\n    {\n      \"btc\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"bch\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"eth\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"etc\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"xrp\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"qtum\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"iota\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"ltc\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"btg\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"omg\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"eos\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"data\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"zil\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"knc\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"zrx\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"xtz\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/user_info/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/user_info/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time()*1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n      'Content-Type': 'application/json',\n      'X-COINONE-PAYLOAD': encoded_payload,\n      'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n      data = res.read().decode('utf-8')\n      return json.loads(data)\n\n\ndata = get_response('v2/account/user_info/', get_base_payload())\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/account.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/user_info/",
    "title": "User Information",
    "name": "GetUserInfo",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.virtualAccountInfo",
            "description": "<p>Virtual account's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.bankName",
            "description": "<p>Virtual account's bank name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.mobileInfo",
            "description": "<p>Mobile authentication's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.userName",
            "description": "<p>Mobile phone's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneNumber",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneCorp",
            "description": "<p>Mobile phone's corporation code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.mobileInfo.isAuthenticated",
            "description": "<p>'true' If a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.bankInfo",
            "description": "<p>User's bank information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.depositor",
            "description": "<p>Account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.bankCode",
            "description": "<p>Account's bankCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.accountNumber",
            "description": "<p>Account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.bankInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.emailInfo",
            "description": "<p>User's email information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.emailInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.emailInfo.email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "userInfo.securityLevel",
            "description": "<p>User's security level. Summation of authentications.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.btc",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.btc.maker",
            "description": "<p>Percent of BTC maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.btc.taker",
            "description": "<p>Percent of BTC taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.bch",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.bch.maker",
            "description": "<p>Percent of BCH maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.bch.taker",
            "description": "<p>Percent of BCH taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.eth",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.eth.maker",
            "description": "<p>Percent of ETH maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.eth.taker",
            "description": "<p>Percent of ETH taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.etc",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.etc.maker",
            "description": "<p>Percent of ETC maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.etc.taker",
            "description": "<p>Percent of ETC taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.xrp",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.xrp.maker",
            "description": "<p>Percent of XRP maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.xrp.taker",
            "description": "<p>Percent of XRP taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.qtum",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.qtum.maker",
            "description": "<p>Percent of QTUM maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.qtum.taker",
            "description": "<p>Percent of QTUM taker fee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"result\": \"success\", \n  \"userInfo\": \n  {\n    \"virtualAccountInfo\": \n    {\n      \"depositor\": \"John\", \n      \"accountNumber\": \"0123456789\", \n      \"bankName\": \"bankName\"\n    }, \n    \"mobileInfo\": \n    {\n      \"userName\": \"John\", \n      \"phoneNumber\": \"0123456789\", \n      \"phoneCorp\": \"1\", \n      \"isAuthenticated\": \"true\"\n    }, \n    \"bankInfo\": \n    {\n      \"depositor\": \"John\", \n      \"bankCode\": \"20\", \n      \"isAuthenticated\": \"true\", \n      \"accountNumber\": \"0123456789\"\n    }, \n    \"emailInfo\": \n    {\n      \"isAuthenticated\": \"true\",\n      \"email\": \"john@coinone.com\"\n    }, \n    \"securityLevel\": \"4\",\n    \"feeRate\":\n    {\n      \"btc\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"bch\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"eth\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"etc\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"xrp\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"qtum\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/user_info/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/user_info/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/user_info/",
    "title": "User Information",
    "name": "GetUserInfo",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.virtualAccountInfo",
            "description": "<p>Virtual account's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.bankName",
            "description": "<p>Virtual account's bank name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.mobileInfo",
            "description": "<p>Mobile authentication's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.userName",
            "description": "<p>Mobile phone's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneNumber",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneCorp",
            "description": "<p>Mobile phone's corporation code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.mobileInfo.isAuthenticated",
            "description": "<p>'true' If a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.bankInfo",
            "description": "<p>User's bank information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.depositor",
            "description": "<p>Account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.bankCode",
            "description": "<p>Account's bankCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.accountNumber",
            "description": "<p>Account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.bankInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.emailInfo",
            "description": "<p>User's email information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.emailInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.emailInfo.email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "userInfo.securityLevel",
            "description": "<p>User's security level. Summation of authentications.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.btc",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.btc.maker",
            "description": "<p>Percent of BTC maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.btc.taker",
            "description": "<p>Percent of BTC taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.eth",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.eth.maker",
            "description": "<p>Percent of ETH maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.eth.taker",
            "description": "<p>Percent of ETH taker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate.etc",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.etc.maker",
            "description": "<p>Percent of ETC maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.etc.taker",
            "description": "<p>Percent of ETC taker fee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"result\": \"success\", \n  \"userInfo\": \n  {\n    \"virtualAccountInfo\": \n    {\n      \"depositor\": \"John\", \n      \"accountNumber\": \"0123456789\", \n      \"bankName\": \"bankName\"\n    }, \n    \"mobileInfo\": \n    {\n      \"userName\": \"John\", \n      \"phoneNumber\": \"0123456789\", \n      \"phoneCorp\": \"1\", \n      \"isAuthenticated\": \"true\"\n    }, \n    \"bankInfo\": \n    {\n      \"depositor\": \"John\", \n      \"bankCode\": \"20\", \n      \"isAuthenticated\": \"true\", \n      \"accountNumber\": \"0123456789\"\n    }, \n    \"emailInfo\": \n    {\n      \"isAuthenticated\": \"true\",\n      \"email\": \"john@coinone.com\"\n    }, \n    \"securityLevel\": \"4\",\n    \"feeRate\":\n    {\n      \"btc\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"eth\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      },\n      \"etc\":\n      {\n        \"maker\":\"0.001\",\n        \"taker\":\"0.001\"\n      }\n\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/user_info/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/user_info/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/user_info/",
    "title": "Account Information",
    "name": "GetUserInfo",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.virtualAccountInfo",
            "description": "<p>Virtual account's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.bankName",
            "description": "<p>Virtual account's bank name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.mobileInfo",
            "description": "<p>Mobile authentication's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.userName",
            "description": "<p>Mobile phone's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneNumber",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneCorp",
            "description": "<p>Mobile phone's corporation code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.mobileInfo.isAuthenticated",
            "description": "<p>'true' If a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.bankInfo",
            "description": "<p>User's bank information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.depositor",
            "description": "<p>Account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.bankCode",
            "description": "<p>Account's bankCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.accountNumber",
            "description": "<p>Account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.bankInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.emailInfo",
            "description": "<p>User's email information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.emailInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.emailInfo.email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "userInfo.securityLevel",
            "description": "<p>User's security level. Summation of authentications.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.feeRate",
            "description": "<p>User's fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.maker",
            "description": "<p>Percent of maker fee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "userInfo.feeRate.taker",
            "description": "<p>Percent of taker fee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"userInfo\":\n  {\n    \"virtualAccountInfo\":\n    {\n      \"depositor\": \"John\",\n      \"accountNumber\": \"0123456789\",\n      \"bankName\": \"bankName\"\n    },\n    \"mobileInfo\":\n    {\n      \"userName\": \"John\",\n      \"phoneNumber\": \"0123456789\",\n      \"phoneCorp\": \"1\",\n      \"isAuthenticated\": \"true\"\n    },\n    \"bankInfo\":\n    {\n      \"depositor\": \"John\",\n      \"bankCode\": \"20\",\n      \"isAuthenticated\": \"true\",\n      \"accountNumber\": \"0123456789\"\n    },\n    \"emailInfo\":\n    {\n      \"isAuthenticated\": \"true\",\n      \"email\": \"john@coinone.com\"\n    },\n    \"securityLevel\": \"4\",\n    \"feeRate\":\n    {\n        \"maker\":\"-0.0015\",\n        \"taker\":\"0.002\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/user_info/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/user_info/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/user_info/",
    "title": "Account Information",
    "name": "GetUserInfo",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": "<p>User information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.virtualAccountInfo",
            "description": "<p>Virtual account's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.virtualAccountInfo.bankName",
            "description": "<p>Virtual account's bank name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.mobileInfo",
            "description": "<p>Mobile authentication's information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.userName",
            "description": "<p>Mobile phone's user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneNumber",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.mobileInfo.phoneCorp",
            "description": "<p>Mobile phone's corporation code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.mobileInfo.isAuthenticated",
            "description": "<p>'true' If a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.bankInfo",
            "description": "<p>User's bank information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.depositor",
            "description": "<p>Account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.bankCode",
            "description": "<p>Account's bankCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo.bankInfo.accountNumber",
            "description": "<p>Account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.bankInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo.emailInfo",
            "description": "<p>User's email information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "userInfo.emailInfo.isAuthenticated",
            "description": "<p>'true' if a user is authenticated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "userInfo.securityLevel",
            "description": "<p>User's security level. Summation of authentications.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"userInfo\":\n  {\n    \"virtualAccountInfo\":\n    {\n      \"depositor\": \"John\",\n      \"accountNumber\": \"0123456789\",\n      \"bankName\": \"bankName\"\n    },\n    \"mobileInfo\":\n    {\n      \"userName\": \"John\",\n      \"phoneNumber\": \"0123456789\",\n      \"phoneCorp\": \"1\",\n      \"isAuthenticated\": \"true\"\n    },\n    \"bankInfo\":\n    {\n      \"depositor\": \"John\",\n      \"bankCode\": \"20\",\n      \"isAuthenticated\": \"true\",\n      \"accountNumber\": \"0123456789\"\n    },\n    \"emailInfo\":\n    {\n      \"isAuthenticated\": \"true\",\n      \"email\": \"john@coinone.com\"\n    },\n    \"securityLevel\": \"4\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/user_info/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/user_info/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/virtual_account/",
    "title": "Virtual Account",
    "name": "GetVirtualAccount",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accountNumber",
            "description": "<p>Virtual account's number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "depositor",
            "description": "<p>Virtual account's depositor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankName",
            "description": "<p>Virtual account's bank name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"depositor\": \"John\",\n  \"accountNumber\": \"2309482304\",\n  \"result\": \"success\",\n  \"bankName\": \"bankName\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/virtual_account/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/virtual_account/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time()*1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n      'Content-Type': 'application/json',\n      'X-COINONE-PAYLOAD': encoded_payload,\n      'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n      data = res.read().decode('utf-8')\n      return json.loads(data)\n\n\ndata = get_response('v2/account/virtual_account/', get_base_payload())\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/account.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/balance/",
    "title": "Balance",
    "name": "UserBalance",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "btc",
            "description": "<p>BTC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.avail",
            "description": "<p>Available BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "bch",
            "description": "<p>BCH information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bch.avail",
            "description": "<p>Available BCH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bch.balance",
            "description": "<p>Total BCH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "eth",
            "description": "<p>ETH information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eth.avail",
            "description": "<p>Available ETH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eth.balance",
            "description": "<p>Total ETH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "etc",
            "description": "<p>ETC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "etc.avail",
            "description": "<p>Available ETC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "etc.balance",
            "description": "<p>Total ETC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "xrp",
            "description": "<p>XRP information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xrp.avail",
            "description": "<p>Available XRP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xrp.balance",
            "description": "<p>Total XRP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "qtum",
            "description": "<p>QTUM information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "qtum.avail",
            "description": "<p>Available QTUM.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "qtum.balance",
            "description": "<p>Total QTUM.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "iota",
            "description": "<p>IOTA information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "iota.avail",
            "description": "<p>Available IOTA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "iota.balance",
            "description": "<p>Total IOTA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ltc",
            "description": "<p>LTC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "ltc.avail",
            "description": "<p>Available LTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "ltc.balance",
            "description": "<p>Total LTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "btg",
            "description": "<p>BTG information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btg.avail",
            "description": "<p>Available BTG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btg.balance",
            "description": "<p>Total BTG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "omg",
            "description": "<p>OMG information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "omg.avail",
            "description": "<p>Available OMG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "omg.balance",
            "description": "<p>Total OMG.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "eos",
            "description": "<p>EOS information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eos.avail",
            "description": "<p>Available EOS.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eos.balance",
            "description": "<p>Total EOS.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>DATA information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "data.avail",
            "description": "<p>Available DATA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "data.balance",
            "description": "<p>Total DATA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "zil",
            "description": "<p>ZIL information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "zil.avail",
            "description": "<p>Available ZIL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "zil.balance",
            "description": "<p>Total ZIL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "knc",
            "description": "<p>KNC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "knc.avail",
            "description": "<p>Available KNC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "knc.balance",
            "description": "<p>Total KNC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "zrx",
            "description": "<p>ZRX information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "zrx.avail",
            "description": "<p>Available ZRX.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "zrx.balance",
            "description": "<p>Total ZRX.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "xtz",
            "description": "<p>XTZ information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xtz.avail",
            "description": "<p>Available XTZ.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xtz.balance",
            "description": "<p>Total XTZ.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "krw",
            "description": "<p>KRW information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.avail",
            "description": "<p>Available KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.balance",
            "description": "<p>Total KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "normalWallets",
            "description": "<p>BTC normal wallet information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "normalWallets.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normalWallets.label",
            "description": "<p>Normal Wallet Label.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n  \"errorCode\":\"0\",\n  \"normalWallets\":\n  [  \n    {  \n      \"balance\":\"6.1151\",\n      \"label\":\"First Wallet\"\n    },\n    {  \n       \"balance\":\"6.9448\",\n       \"label\":\"Second Wallet\"\n    }\n  ],\n  \"result\":\"success\",\n  \"btc\":\n  {  \n    \"avail\":\"344.33703699\",\n    \"balance\":\"344.33703699\"\n  },\n  \"bch\":\n  {\n    \"avail\":\"1.00001234\",\n    \"balance\":\"1.00001234\"\n  },\n  \"eth\":\n  {\n    \"avail\":\"1.00001234\",\n    \"balance\":\"1.00001234\"\n  },\n  \"etc\":\n  {\n    \"avail\":\"300.32123699\",\n    \"balance\":\"300.32123699\"\n  },\n  \"xrp\":\n  {\n    \"avail\":\"434.50890000\"\n    \"balance\":\"434.85450000\"\n  },\n  \"qtum\":\n  {\n    \"avail\":\"434.50890000\"\n    \"balance\":\"434.85450000\"\n  },\n  \"iota\":\n  {\n    \"avail\":\"213.50800000\"\n    \"balance\":\"213.50800000\"\n  },\n  \"ltc\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"btg\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"omg\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"eos\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"data\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"zil\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"knc\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"zrx\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"xtz\":\n  {\n    \"avail\":\"43.50890000\"\n    \"balance\":\"43.85450000\"\n  },\n  \"krw\":\n  {  \n    \"avail\":\"6901425\",\n    \"balance\":\"6901430\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/balance/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/balance/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time()*1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndata = get_response('v2/account/balance/', get_base_payload())\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/account.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/balance/",
    "title": "Balance",
    "name": "UserBalance",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "btc",
            "description": "<p>BTC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.avail",
            "description": "<p>Available BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "bch",
            "description": "<p>BCH information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bch.avail",
            "description": "<p>Available BCH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bch.balance",
            "description": "<p>Total BCH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "eth",
            "description": "<p>ETH information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eth.avail",
            "description": "<p>Available ETH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eth.balance",
            "description": "<p>Total ETH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "etc",
            "description": "<p>ETC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "etc.avail",
            "description": "<p>Available ETC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "etc.balance",
            "description": "<p>Total ETC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "xrp",
            "description": "<p>XRP information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xrp.avail",
            "description": "<p>Available XRP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "xrp.balance",
            "description": "<p>Total XRP.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "qtum",
            "description": "<p>QTUM information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "qtum.avail",
            "description": "<p>Available QTUM.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "qtum.balance",
            "description": "<p>Total QTUM.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "krw",
            "description": "<p>KRW information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.avail",
            "description": "<p>Available KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.balance",
            "description": "<p>Total KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "normalWallets",
            "description": "<p>BTC normal wallet information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "normalWallets.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normalWallets.label",
            "description": "<p>Normal Wallet Label.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n  \"errorCode\":\"0\",\n  \"normalWallets\":\n  [  \n    {  \n      \"balance\":\"6.1151\",\n      \"label\":\"First Wallet\"\n    },\n    {  \n       \"balance\":\"6.9448\",\n       \"label\":\"Second Wallet\"\n    }\n  ],\n  \"result\":\"success\",\n  \"btc\":\n  {  \n    \"avail\":\"344.33703699\",\n    \"balance\":\"344.33703699\"\n  },\n  \"bch\":\n  {\n    \"avail\":\"1.00001234\",\n    \"balance\":\"1.00001234\"\n  },\n  \"eth\":\n  {\n    \"avail\":\"1.00001234\",\n    \"balance\":\"1.00001234\"\n  },\n  \"etc\":\n  {\n    \"avail\":\"300.32123699\",\n    \"balance\":\"300.32123699\"\n  },\n  \"xrp\":\n  {\n    \"avail\":\"434.50890000\"\n    \"balance\":\"434.85450000\"\n  },\n  \"qtum\":\n  {\n    \"avail\":\"434.50890000\"\n    \"balance\":\"434.85450000\"\n  },\n  \"krw\":\n  {  \n    \"avail\":\"6901425\",\n    \"balance\":\"6901430\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/balance/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/balance/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/balance/",
    "title": "Balance",
    "name": "UserBalance",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "btc",
            "description": "<p>BTC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.avail",
            "description": "<p>Available BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "eth",
            "description": "<p>ETH information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eth.avail",
            "description": "<p>Available ETH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "eth.balance",
            "description": "<p>Total ETH.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "etc",
            "description": "<p>ETC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "etc.avail",
            "description": "<p>Available ETC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "etc.balance",
            "description": "<p>Total ETC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "krw",
            "description": "<p>KRW information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.avail",
            "description": "<p>Available KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.balance",
            "description": "<p>Total KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "normalWallets",
            "description": "<p>BTC normal wallet information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "normalWallets.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normalWallets.label",
            "description": "<p>Normal Wallet Label.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n  \"errorCode\":\"0\",\n  \"normalWallets\":\n  [  \n    {  \n      \"balance\":\"6.1151\",\n      \"label\":\"First Wallet\"\n    },\n    {  \n       \"balance\":\"6.9448\",\n       \"label\":\"Second Wallet\"\n    }\n  ],\n  \"result\":\"success\",\n  \"btc\":\n  {  \n    \"avail\":\"344.33703699\",\n    \"balance\":\"344.33703699\"\n  },\n  \"eth\":\n  {\n    \"avail\":\"1.00001234\",\n    \"balance\":\"1.00001234\"\n  },\n  \"etc\":\n  {\n    \"avail\":\"300.32123699\",\n    \"balance\":\"300.32123699\"\n  },\n  \"krw\":\n  {  \n    \"avail\":\"6901425\",\n    \"balance\":\"6901430\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/balance/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/balance/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/account/balance/",
    "title": "Balance",
    "name": "UserBalance",
    "group": "Account_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "btc",
            "description": "<p>BTC information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.avail",
            "description": "<p>Available BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btc.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "krw",
            "description": "<p>KRW information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.avail",
            "description": "<p>Available KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krw.balance",
            "description": "<p>Total KRW.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "normalWallets",
            "description": "<p>BTC normal wallet information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "normalWallets.balance",
            "description": "<p>Total BTC.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normalWallets.label",
            "description": "<p>Normal Wallet Label.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"normalWallets\":\n  [\n    {\n      \"balance\":\"6.1151\",\n      \"label\":\"First Wallet\"\n    },\n    {\n       \"balance\":\"6.9448\",\n       \"label\":\"Second Wallet\"\n    }\n  ],\n  \"result\":\"success\",\n  \"btc\":\n  {\n    \"avail\":\"344.33703699\",\n    \"balance\":\"344.33703699\"\n  },\n  \"krw\":\n  {\n    \"avail\":\"6901425\",\n    \"balance\":\"6901430\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/account/balance/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/account/balance/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Account_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "",
    "url": "ErrorCode",
    "title": "",
    "name": "ErrorCode",
    "group": "ErrorCode",
    "version": "0.1.6",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "4",
            "description": "<p>Blocked user access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "11",
            "description": "<p>Access token is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "12",
            "description": "<p>Invalid access token</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "40",
            "description": "<p>Invalid API permission</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "50",
            "description": "<p>Authenticate error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "51",
            "description": "<p>Invalid API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "52",
            "description": "<p>Deprecated API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "53",
            "description": "<p>Two Factor Auth Fail</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "100",
            "description": "<p>Session expired</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "101",
            "description": "<p>Invalid format</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "102",
            "description": "<p>ID is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "103",
            "description": "<p>Lack of Balance</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "104",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "105",
            "description": "<p>Price is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "106",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "107",
            "description": "<p>Parameter error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "111",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "112",
            "description": "<p>Cancel failed</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "113",
            "description": "<p>Quantity is too low(ETH, ETC &gt; 0.01)</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "120",
            "description": "<p>V2 API payload is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "121",
            "description": "<p>V2 API signature is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "122",
            "description": "<p>V2 API nonce is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "123",
            "description": "<p>V2 API signature is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "130",
            "description": "<p>V2 API Nonce value must be a positive integer</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "131",
            "description": "<p>V2 API Nonce is must be bigger then last nonce</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "132",
            "description": "<p>V2 API body is corrupted</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "141",
            "description": "<p>Too many limit orders</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "150",
            "description": "<p>It's V1 API. V2 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "151",
            "description": "<p>It's V2 API. V1 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "200",
            "description": "<p>Wallet Error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "202",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "210",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "220",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "221",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "310",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "311",
            "description": "<p>Need mobile auth</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "312",
            "description": "<p>Name is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "330",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>Page not found error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "405",
            "description": "<p>Server error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "444",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "500",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "501",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "777",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "778",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "779",
            "description": "<p>Address error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1202",
            "description": "<p>App not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1203",
            "description": "<p>Already registered</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1204",
            "description": "<p>Invalid access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1205",
            "description": "<p>API Key error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1206",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1207",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1208",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1209",
            "description": "<p>User not found</p>"
          }
        ]
      }
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "ErrorCode"
  },
  {
    "type": "",
    "url": "ErrorCode",
    "title": "",
    "name": "ErrorCode",
    "group": "ErrorCode",
    "version": "0.1.5",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "4",
            "description": "<p>Blocked user access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "11",
            "description": "<p>Access token is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "12",
            "description": "<p>Invalid access token</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "40",
            "description": "<p>Invalid API permission</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "50",
            "description": "<p>Authenticate error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "51",
            "description": "<p>Invalid API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "52",
            "description": "<p>Deprecated API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "53",
            "description": "<p>Two Factor Auth Fail</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "100",
            "description": "<p>Session expired</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "101",
            "description": "<p>Invalid format</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "102",
            "description": "<p>ID is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "103",
            "description": "<p>Lack of Balance</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "104",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "105",
            "description": "<p>Price is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "106",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "107",
            "description": "<p>Parameter error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "111",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "112",
            "description": "<p>Cancel failed</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "113",
            "description": "<p>Quantity is too low(ETH, ETC &gt; 0.01)</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "120",
            "description": "<p>V2 API payload is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "121",
            "description": "<p>V2 API signature is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "122",
            "description": "<p>V2 API nonce is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "123",
            "description": "<p>V2 API signature is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "130",
            "description": "<p>V2 API Nonce value must be a positive integer</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "131",
            "description": "<p>V2 API Nonce is must be bigger then last nonce</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "132",
            "description": "<p>V2 API body is corrupted</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "141",
            "description": "<p>Too many limit orders</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "150",
            "description": "<p>It's V1 API. V2 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "151",
            "description": "<p>It's V2 API. V1 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "200",
            "description": "<p>Wallet Error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "202",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "210",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "220",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "221",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "310",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "311",
            "description": "<p>Need mobile auth</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "312",
            "description": "<p>Name is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "330",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>Page not found error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "405",
            "description": "<p>Server error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "444",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "500",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "501",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "777",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "778",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1202",
            "description": "<p>App not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1203",
            "description": "<p>Already registered</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1204",
            "description": "<p>Invalid access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1205",
            "description": "<p>API Key error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1206",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1207",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1208",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1209",
            "description": "<p>User not found</p>"
          }
        ]
      }
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "ErrorCode"
  },
  {
    "type": "",
    "url": "ErrorCode",
    "title": "",
    "name": "ErrorCode",
    "group": "ErrorCode",
    "version": "0.1.4",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "4",
            "description": "<p>Blocked user access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "11",
            "description": "<p>Access token is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "12",
            "description": "<p>Invalid access token</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "40",
            "description": "<p>Invalid API permission</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "50",
            "description": "<p>Authenticate error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "51",
            "description": "<p>Invalid API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "52",
            "description": "<p>Deprecated API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "53",
            "description": "<p>Two Factor Auth Fail</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "100",
            "description": "<p>Session expired</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "101",
            "description": "<p>Invalid format</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "102",
            "description": "<p>ID is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "103",
            "description": "<p>Lack of Balance</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "104",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "105",
            "description": "<p>Price is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "106",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "107",
            "description": "<p>Parameter error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "111",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "112",
            "description": "<p>Cancel failed</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "113",
            "description": "<p>Quantity is too low(ETH, ETC &gt; 0.01)</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "120",
            "description": "<p>V2 API payload is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "121",
            "description": "<p>V2 API signature is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "122",
            "description": "<p>V2 API nonce is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "123",
            "description": "<p>V2 API signature is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "130",
            "description": "<p>V2 API Nonce value must be a positive integer</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "131",
            "description": "<p>V2 API Nonce is must be bigger then last nonce</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "132",
            "description": "<p>V2 API body is corrupted</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "150",
            "description": "<p>It's V1 API. V2 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "151",
            "description": "<p>It's V2 API. V1 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "200",
            "description": "<p>Wallet Error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "202",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "210",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "220",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "221",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "310",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "311",
            "description": "<p>Need mobile auth</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "312",
            "description": "<p>Name is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "330",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>Page not found error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "405",
            "description": "<p>Server error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "444",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "500",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "501",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "777",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "778",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1202",
            "description": "<p>App not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1203",
            "description": "<p>Already registered</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1204",
            "description": "<p>Invalid access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1205",
            "description": "<p>API Key error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1206",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1207",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1208",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1209",
            "description": "<p>User not found</p>"
          }
        ]
      }
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "ErrorCode"
  },
  {
    "type": "",
    "url": "ErrorCode",
    "title": "",
    "name": "ErrorCode",
    "group": "ErrorCode",
    "version": "0.1.3",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "11",
            "description": "<p>Access token is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "12",
            "description": "<p>Invalid access token</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "40",
            "description": "<p>Invalid API permission</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "50",
            "description": "<p>Authenticate error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "51",
            "description": "<p>Invalid API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "52",
            "description": "<p>Deprecated API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "100",
            "description": "<p>Session expired</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "101",
            "description": "<p>Invalid format</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "102",
            "description": "<p>ID is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "103",
            "description": "<p>Lack of Balance</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "104",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "105",
            "description": "<p>Price is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "106",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "107",
            "description": "<p>Parameter error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "111",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "112",
            "description": "<p>Cancel failed</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "113",
            "description": "<p>Quantity is too low(ETH, ETC &gt; 0.01 / XRP &gt; 1)</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "120",
            "description": "<p>V2 API payload is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "121",
            "description": "<p>V2 API signature is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "122",
            "description": "<p>V2 API nonce is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "123",
            "description": "<p>V2 API signature is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "130",
            "description": "<p>V2 API Nonce value must be a positive integer</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "131",
            "description": "<p>V2 API Nonce is must be bigger then last nonce</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "132",
            "description": "<p>V2 API body is corrupted</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "150",
            "description": "<p>It's V1 API. V2 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "151",
            "description": "<p>It's V2 API. V1 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "200",
            "description": "<p>Wallet Error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "202",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "210",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "220",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "221",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "310",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "311",
            "description": "<p>Need mobile auth</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "312",
            "description": "<p>Name is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "330",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>Page not found error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "405",
            "description": "<p>Server error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "444",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "500",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "501",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "777",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "778",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1202",
            "description": "<p>App not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1203",
            "description": "<p>Already registered</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1204",
            "description": "<p>Invalid access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1205",
            "description": "<p>API Key error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1206",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1207",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1208",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1209",
            "description": "<p>User not found</p>"
          }
        ]
      }
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "ErrorCode"
  },
  {
    "type": "",
    "url": "ErrorCode",
    "title": "",
    "name": "ErrorCode",
    "group": "ErrorCode",
    "version": "0.1.2",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "11",
            "description": "<p>Access token is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "12",
            "description": "<p>Invalid access token</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "40",
            "description": "<p>Invalid API permission</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "50",
            "description": "<p>Authenticate error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "51",
            "description": "<p>Invalid API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "100",
            "description": "<p>Session expired</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "101",
            "description": "<p>Invalid format</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "102",
            "description": "<p>ID is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "103",
            "description": "<p>Parameter error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "104",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "105",
            "description": "<p>Price is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "106",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "107",
            "description": "<p>Parameter error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "111",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "112",
            "description": "<p>Cancel failed</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "120",
            "description": "<p>V2 API payload is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "121",
            "description": "<p>V2 API signature is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "122",
            "description": "<p>V2 API nonce is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "123",
            "description": "<p>V2 API signature is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "130",
            "description": "<p>V2 API Nonce value must be a positive integer</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "131",
            "description": "<p>V2 API Nonce is must be bigger then last nonce</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "132",
            "description": "<p>V2 API body is corrupted</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "150",
            "description": "<p>It's V1 API. V2 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "151",
            "description": "<p>It's V2 API. V1 Access token is not acceptable</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "200",
            "description": "<p>Wallet Error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "202",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "210",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "220",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "221",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "310",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "311",
            "description": "<p>Need mobile auth</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "312",
            "description": "<p>Name is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "330",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>Page not found error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "405",
            "description": "<p>Server error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "444",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "500",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "501",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "777",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "778",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1202",
            "description": "<p>App not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1203",
            "description": "<p>Already registered</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1204",
            "description": "<p>Invalid access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1205",
            "description": "<p>API Key error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1206",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1207",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1208",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1209",
            "description": "<p>User not found</p>"
          }
        ]
      }
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "ErrorCode"
  },
  {
    "type": "",
    "url": "ErrorCode",
    "title": "",
    "name": "ErrorCode",
    "group": "ErrorCode",
    "version": "0.1.1",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "11",
            "description": "<p>Access token is missing</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "12",
            "description": "<p>Invalid access token</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "40",
            "description": "<p>Invalid API permission</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "50",
            "description": "<p>Authenticate error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "51",
            "description": "<p>Invalid API</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "100",
            "description": "<p>Session expired</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "101",
            "description": "<p>Invalid format</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "102",
            "description": "<p>ID is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "103",
            "description": "<p>Parameter error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "104",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "105",
            "description": "<p>Price is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "106",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "107",
            "description": "<p>Parameter is not valid</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "111",
            "description": "<p>Order id is not exist</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "112",
            "description": "<p>Cancel failed</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "200",
            "description": "<p>Wallet Error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "202",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "210",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "220",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "221",
            "description": "<p>Limitation error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "310",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "311",
            "description": "<p>Need mobile auth</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "312",
            "description": "<p>Name is not correct</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "330",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>Page not found error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "405",
            "description": "<p>Server error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "444",
            "description": "<p>Locking error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "500",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "501",
            "description": "<p>Email error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "777",
            "description": "<p>Mobile auth error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "778",
            "description": "<p>Phone number error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1202",
            "description": "<p>App not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1203",
            "description": "<p>Already registered</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1204",
            "description": "<p>Invalid access</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1205",
            "description": "<p>API Key error</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1206",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1207",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1208",
            "description": "<p>User not found</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "1209",
            "description": "<p>User not found</p>"
          }
        ]
      }
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "ErrorCode"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/oauth/delete_token/",
    "title": "Delete Access Token",
    "name": "DeleteAccessToken",
    "group": "OAuth",
    "version": "0.1.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/oauth/access_token/",
    "title": "Get Access Token",
    "name": "GetAccessToken",
    "group": "OAuth",
    "version": "0.1.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app_id",
            "description": "<p>App ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app_secret",
            "description": "<p>App Secret</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "request_token",
            "description": "<p>Request Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"accessToken\": \"b48144d5-ed96-471f-8214-75cxxxx0a7d4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "https://coinone.co.kr/account/login/",
    "title": "Get Request Token",
    "name": "GetRequest",
    "group": "OAuth",
    "version": "0.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app_id",
            "description": "<p>App ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/oauth/refresh_token/",
    "title": "Refresh Access Token",
    "name": "RefreshAccessToken",
    "group": "OAuth",
    "version": "0.1.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Old Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"accessToken\": \"b48144d5-ed96-471f-8214-75cxxxx0a7d4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/order/cancel_all/",
    "title": "Cancel All Order - Deprecated",
    "name": "CancelAllOrder",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.0",
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "successCanceledOrders",
            "description": "<p>The number of canceled orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "overallOrders",
            "description": "<p>The number of overall orders before canceled.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"successCanceledOrders\": \"4\",\n  \"overallOrders\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/order/cancel/",
    "title": "Cancel Order",
    "name": "CancelOrder",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "is_ask",
            "description": "<p>1 if order is sell.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/order/limit_buy/",
    "title": "Limit Buy",
    "name": "LimitBuy",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/order/limit_orders/",
    "title": "My Limit Orders",
    "name": "LimitOrders",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "limitOrders",
            "description": "<p>List of limit orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "limitOrders.index",
            "description": "<p>Index of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "limitOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "limitOrders.feeRate",
            "description": "<p>Fee rate</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"result\":\"success\",\n  \"limitOrders\":[\n    {\n      \"orderId\":\"68665943-1eb5-4e4b-9d76-845fc54f5489\",\n      \"index\":\"0\",\n      \"timestamp\":\"1449037367\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    },\n    {\n      \"orderId\":\"a20f6c76-c683-4511-9179-78ab73103a74\",\n      \"index\":\"1\",\n      \"timestamp\":\"1449036746\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/order/limit_orders/",
    "title": "My Limit Orders",
    "name": "LimitOrders",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "limitOrders",
            "description": "<p>List of limit orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "limitOrders.index",
            "description": "<p>Index of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "limitOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"result\":\"success\",\n  \"limitOrders\":[\n    {\n      \"orderId\":\"68665943-1eb5-4e4b-9d76-845fc54f5489\",\n      \"index\":\"0\",\n      \"timestamp\":\"1449037367\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\"\n    },\n    {\n      \"orderId\":\"a20f6c76-c683-4511-9179-78ab73103a74\",\n      \"index\":\"1\",\n      \"timestamp\":\"1449036746\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/order/limit_sell/",
    "title": "Limit Sell",
    "name": "LimitSell",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/order/market_buy/",
    "title": "Market Buy - Deprecated",
    "name": "MarketBuy",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.6",
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW quantity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/order/market_buy/",
    "title": "Market Buy",
    "name": "MarketBuy",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW quantity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/order/market_sell/",
    "title": "Market Sell - Deprecated",
    "name": "MarketSell",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.6",
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/order/market_sell/",
    "title": "Market Sell",
    "name": "MarketSell",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "description": "<p>Only the last 100 orders are shown.</p>",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.4",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.fee",
            "description": "<p>Fee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.orderId",
            "description": "<p>Order ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.0000015\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"0.0000002\",\n      \"orderId\": \"6C7A4A2D-C46E-4B99-ABC4-C517917B1FD9\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.000015\",\n      \"orderId\": \"E66ECAD0-4F89-46C6-98F2-9E5C18D3DC48\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"1\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.fee",
            "description": "<p>Fee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.0000015\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"0.0000002\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.000015\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"1\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "group": "Order",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/cancel_all/",
    "title": "Cancel All Order - Deprecated",
    "name": "CancelAllOrder",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.3",
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "successCanceledOrders",
            "description": "<p>The number of canceled orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "overallOrders",
            "description": "<p>The number of overall orders before canceled.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"successCanceledOrders\": \"4\",\n  \"overallOrders\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/cancel_all/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/cancel_all/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/cancel_all/",
    "title": "Cancel All Order",
    "name": "CancelAllOrder",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "successCanceledOrders",
            "description": "<p>The number of canceled orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "overallOrders",
            "description": "<p>The number of overall orders before canceled.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"successCanceledOrders\": \"4\",\n  \"overallOrders\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/cancel_all/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/cancel_all/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/cancel/",
    "title": "Cancel Order",
    "name": "CancelOrder",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/BCH/ETH/ETC/XRP/QTUM/IOTA/LTC/BTG/OMG/EOS/DATA quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "is_ask",
            "description": "<p>1 if order is sell.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/cancel/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"OrderID\",\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"is_ask\": 1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/cancel/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"OrderID\",\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"is_ask\": 1,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time() * 1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndef create_payload(data):\n  payload = get_base_payload()\n  payload.update(data)\n  return payload\n\n\ndata = get_response('v2/order/cancel/', create_payload({\n  'order_id': \"{order_id}\",\n  'price': 50000000,\n  'qty': 0.1,\n  'currency': 'btc',\n  'is_ask': 0,\n}))\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/cancel/",
    "title": "Cancel Order",
    "name": "CancelOrder",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/BCH/ETH/ETC/XRP/QTUM quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "is_ask",
            "description": "<p>1 if order is sell.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/cancel/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"OrderID\",\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"is_ask\": 1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/cancel/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"OrderID\",\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"is_ask\": 1,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/cancel/",
    "title": "Cancel Order",
    "name": "CancelOrder",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/ETH/ETC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "is_ask",
            "description": "<p>1 if order is sell.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/cancel/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"OrderID\",\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"is_ask\": 1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/cancel/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"OrderID\",\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"is_ask\": 1,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/cancel/",
    "title": "Cancel Order",
    "name": "CancelOrder",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "is_ask",
            "description": "<p>1 if order is sell.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/cancel/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"OrderID\",\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"is_ask\": 1,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/cancel/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"OrderID\",\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"is_ask\": 1,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_buy/",
    "title": "Limit Buy",
    "name": "LimitBuy",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/BCH/ETH/ETC/XRP/QTUM/IOTA/LTC/BTG/OMG/EOS/DATA quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_buy/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_buy/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time()*1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\npayload = get_base_payload()\npayload.update({\n  'price': 50000,\n  'qty': 0.1,\n  'currency': 'btc'\n})\ndata = get_response('v2/order/limit_buy/', payload)\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_buy/",
    "title": "Limit Buy",
    "name": "LimitBuy",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/BCH/ETH/ETC/XRP/QTUM quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_buy/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_buy/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\", \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_buy/",
    "title": "Limit Buy",
    "name": "LimitBuy",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/ETH/ETC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_buy/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_buy/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\", \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_buy/",
    "title": "Limit Buy",
    "name": "LimitBuy",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_buy/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_buy/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_orders/",
    "title": "My Limit Orders",
    "name": "LimitOrders",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "limitOrders",
            "description": "<p>List of limit orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "limitOrders.index",
            "description": "<p>Index of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "limitOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "limitOrders.feeRate",
            "description": "<p>Fee rate</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"result\":\"success\",\n  \"limitOrders\":[\n    {\n      \"orderId\":\"68665943-1eb5-4e4b-9d76-845fc54f5489\",\n      \"index\":\"0\",\n      \"timestamp\":\"1449037367\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    },\n    {\n      \"orderId\":\"a20f6c76-c683-4511-9179-78ab73103a74\",\n      \"index\":\"1\",\n      \"timestamp\":\"1449036746\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time() * 1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndef create_payload(data):\n  payload = get_base_payload()\n  payload.update(data)\n  return payload\n\n\ndata = get_response('v2/order/limit_orders/', create_payload({\n  'currency': 'btc',\n}))\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_orders/",
    "title": "My Limit Orders",
    "name": "LimitOrders",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "limitOrders",
            "description": "<p>List of limit orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "limitOrders.index",
            "description": "<p>Index of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "limitOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "limitOrders.feeRate",
            "description": "<p>Fee rate</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"result\":\"success\",\n  \"limitOrders\":[\n    {\n      \"orderId\":\"68665943-1eb5-4e4b-9d76-845fc54f5489\",\n      \"index\":\"0\",\n      \"timestamp\":\"1449037367\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    },\n    {\n      \"orderId\":\"a20f6c76-c683-4511-9179-78ab73103a74\",\n      \"index\":\"1\",\n      \"timestamp\":\"1449036746\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_orders/",
    "title": "My Limit Orders",
    "name": "LimitOrders",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "limitOrders",
            "description": "<p>List of limit orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "limitOrders.index",
            "description": "<p>Index of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "limitOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "limitOrders.feeRate",
            "description": "<p>Fee rate</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"result\":\"success\",\n  \"limitOrders\":[\n    {\n      \"orderId\":\"68665943-1eb5-4e4b-9d76-845fc54f5489\",\n      \"index\":\"0\",\n      \"timestamp\":\"1449037367\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    },\n    {\n      \"orderId\":\"a20f6c76-c683-4511-9179-78ab73103a74\",\n      \"index\":\"1\",\n      \"timestamp\":\"1449036746\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_orders/",
    "title": "My Limit Orders",
    "name": "LimitOrders",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "limitOrders",
            "description": "<p>List of limit orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "limitOrders.index",
            "description": "<p>Index of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "limitOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "limitOrders.feeRate",
            "description": "<p>Fee rate</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"result\":\"success\",\n  \"limitOrders\":[\n    {\n      \"orderId\":\"68665943-1eb5-4e4b-9d76-845fc54f5489\",\n      \"index\":\"0\",\n      \"timestamp\":\"1449037367\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    },\n    {\n      \"orderId\":\"a20f6c76-c683-4511-9179-78ab73103a74\",\n      \"index\":\"1\",\n      \"timestamp\":\"1449036746\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\",\n      \"feeRate\":\"-0.0015\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_orders/",
    "title": "My Limit Orders",
    "name": "LimitOrders",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "limitOrders",
            "description": "<p>List of limit orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "limitOrders.index",
            "description": "<p>Index of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "limitOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "limitOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "limitOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\":\"0\",\n  \"result\":\"success\",\n  \"limitOrders\":[\n    {\n      \"orderId\":\"68665943-1eb5-4e4b-9d76-845fc54f5489\",\n      \"index\":\"0\",\n      \"timestamp\":\"1449037367\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\"\n    },\n    {\n      \"orderId\":\"a20f6c76-c683-4511-9179-78ab73103a74\",\n      \"index\":\"1\",\n      \"timestamp\":\"1449036746\",\n      \"price\":\"444000\",\n      \"qty\":\"0.3456\",\n      \"type\":\"ask\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_sell/",
    "title": "Limit Sell",
    "name": "LimitSell",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/BCH/ETH/ETC/XRP/QTUM/IOTA/LTC/BTG/OMG/EOS/DATA quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_sell/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_sell/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time() * 1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndef create_payload(data):\n  payload = get_base_payload()\n  payload.update(data)\n  return payload\n\n\ndata = get_response('v2/order/limit_sell/', create_payload({\n  'price': 50000000,\n  'qty': 0.1,\n  'currency': 'btc',\n}))\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_sell/",
    "title": "Limit Sell",
    "name": "LimitSell",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/BCH/ETH/ETC/XRP/QTUM quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_sell/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_sell/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_sell/",
    "title": "Limit Sell",
    "name": "LimitSell",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/ETH/ETC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_sell/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_sell/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/limit_sell/",
    "title": "Limit Sell",
    "name": "LimitSell",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/limit_sell/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/limit_sell/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"qty\": 0.1,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/market_buy/",
    "title": "Market Buy - Deprecated",
    "name": "MarketBuy",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.7",
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/market_buy/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/market_buy/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/market_buy/",
    "title": "Market Buy",
    "name": "MarketBuy",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.6",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/market_buy/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/market_buy/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/market_buy/",
    "title": "Market Buy",
    "name": "MarketBuy",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "price",
            "description": "<p>KRW quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/market_buy/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/market_buy/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"price\": 500000,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/market_sell/",
    "title": "Market Sell - Deprecated",
    "name": "MarketSell",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.7",
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC/ETH/ETC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/market_sell/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"qty\": 0.1,\n  \"nonce\": Date.now(),\n  \"currency\": \"btc\"\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/market_sell/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"qty\": 0.1,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/market_sell/",
    "title": "Market Sell",
    "name": "MarketSell",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.6",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"orderId\": \"8a82c561-40b4-4cb3-9bc0-9ac9ffc1d63b\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/market_sell/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"qty\": 0.1,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/market_sell/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"qty\": 0.1,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/market_sell/",
    "title": "Market Sell",
    "name": "MarketSell",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/market_sell/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"qty\": 0.1,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/market_sell/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"qty\": 0.1,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/order_info/",
    "title": "My Order Information",
    "name": "MyOrderInfo",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>User's order id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of order. live, filled, partially_filled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "info",
            "description": "<p>Information of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "info.price",
            "description": "<p>Average price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "info.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "info.qty",
            "description": "<p>Original quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "info.remainQty",
            "description": "<p>Remain quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.type",
            "description": "<p>Order Type sell: 'ask', 'margin_ask', buy: 'bid', 'margin_bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.currency",
            "description": "<p>Currency. BTC/BCH/ETH/ETC/XRP/QTUM/IOTA/LTC/BTG/OMG/EOS/DATA</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "info.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "info.fee",
            "description": "<p>Fee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.orderId",
            "description": "<p>Order ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  'result': 'success',\n  'errorCode': '0',\n  'status': 'live',\n  'info': {\n    'orderId': '32FF744B-D501-423A-8BA1-05BB6BE7814A',\n    'currency': 'BTC',\n    'timestamp': '1499340941',\n    'price': '2922000',\n    'qty': '115.4950',\n    'remainQty': '45.4950',\n    'feeRate': '0.0003',\n    'fee': '0',\n    'type': 'bid'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/order_info/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"32FF744B-D501-423A-8BA1-05BB6BE7814A\",\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/order_info/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"32FF744B-D501-423A-8BA1-05BB6BE7814A\",\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time() * 1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndef create_payload(data):\n  payload = get_base_payload()\n  payload.update(data)\n  return payload\n\n\ndata = get_response('v2/order/order_info/', create_payload({\n  'order_id': 'a06de5d0-b2cd-4064-be88-334f06b0b0c9',\n  'currency': 'btc',\n}))\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/order_info/",
    "title": "My Order Information",
    "name": "MyOrderInfo",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>User's order id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of order. live, filled, partially_filled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "info",
            "description": "<p>Information of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "info.price",
            "description": "<p>Average price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "info.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "info.qty",
            "description": "<p>Original quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "info.remainQty",
            "description": "<p>Remain quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.type",
            "description": "<p>Order Type sell: 'ask', 'margin_ask', buy: 'bid', 'margin_bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.currency",
            "description": "<p>Currency. BTC/BCH/ETH/ETC/XRP/QTUM</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "info.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "info.fee",
            "description": "<p>Fee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.orderId",
            "description": "<p>Order ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    'result': 'success',\n    'errorCode': '0',\n    'status': 'live',\n    'info': {\n        'orderId': '32FF744B-D501-423A-8BA1-05BB6BE7814A',\n        'currency': 'BTC',\n        'timestamp': '1499340941',\n        'price': '2922000',\n        'qty': '115.4950',\n        'remainQty': '45.4950',\n        'feeRate': '0.0003',\n        'fee': '0',\n        'type': 'bid'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/order_info/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"32FF744B-D501-423A-8BA1-05BB6BE7814A\",\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/order_info/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"32FF744B-D501-423A-8BA1-05BB6BE7814A\",\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/order_info/",
    "title": "My Order Information",
    "name": "MyOrderInfo",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>User's order id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of order. live, filled, partially_filled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "info",
            "description": "<p>Information of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "info.price",
            "description": "<p>Average price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "info.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "info.qty",
            "description": "<p>Original quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "info.remainQty",
            "description": "<p>Remain quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.type",
            "description": "<p>Order Type sell: 'ask', 'margin_ask', buy: 'bid', 'margin_bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.currency",
            "description": "<p>Currency. BTC, ETH, ETC</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "info.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "info.fee",
            "description": "<p>Fee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info.orderId",
            "description": "<p>Order ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    'result': 'success',\n    'errorCode': '0',\n    'status': 'live',\n    'info': {\n        'orderId': '32FF744B-D501-423A-8BA1-05BB6BE7814A',\n        'currency': 'BTC',\n        'timestamp': '1499340941',\n        'price': '2922000',\n        'qty': '115.4950',\n        'remainQty': '45.4950',\n        'feeRate': '0.0003',\n        'fee': '0',\n        'type': 'bid'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/order_info/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"32FF744B-D501-423A-8BA1-05BB6BE7814A\",\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/order_info/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"order_id\": \"32FF744B-D501-423A-8BA1-05BB6BE7814A\",\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "group": "Order_V2",
    "description": "<p>Only the last 50 orders are shown.</p>",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.fee",
            "description": "<p>Fee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.orderId",
            "description": "<p>Order ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.0000015\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"0.0000002\",\n      \"orderId\": \"6C7A4A2D-C46E-4B99-ABC4-C517917B1FD9\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.000015\",\n      \"orderId\": \"E66ECAD0-4F89-46C6-98F2-9E5C18D3DC48\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"1\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/complete_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/complete_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time() * 1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndef create_payload(data):\n  payload = get_base_payload()\n  payload.update(data)\n  return payload\n\n\ndata = get_response('v2/order/complete_orders/', create_payload({\n  'currency': 'btc',\n}))\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/order.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "group": "Order_V2",
    "description": "<p>Only the last 50 orders are shown.</p>",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.fee",
            "description": "<p>Fee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.orderId",
            "description": "<p>Order ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.0000015\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"0.0000002\",\n      \"orderId\": \"6C7A4A2D-C46E-4B99-ABC4-C517917B1FD9\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.000015\",\n      \"orderId\": \"E66ECAD0-4F89-46C6-98F2-9E5C18D3DC48\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"1\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/complete_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/complete_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "group": "Order_V2",
    "description": "<p>Only the last 50 orders are shown.</p>",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.fee",
            "description": "<p>Fee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.orderId",
            "description": "<p>Order ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.0000015\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"0.0000002\",\n      \"orderId\": \"6C7A4A2D-C46E-4B99-ABC4-C517917B1FD9\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.000015\",\n      \"orderId\": \"E66ECAD0-4F89-46C6-98F2-9E5C18D3DC48\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"1\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/complete_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/complete_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.4",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.fee",
            "description": "<p>Fee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.orderId",
            "description": "<p>Order ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.0000015\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"0.0000002\",\n      \"orderId\": \"6C7A4A2D-C46E-4B99-ABC4-C517917B1FD9\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.000015\",\n      \"orderId\": \"E66ECAD0-4F89-46C6-98F2-9E5C18D3DC48\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"1\",\n      \"orderId\": \"E84A1AC2-8088-4FA0-B093-A3BCDB9B3C85\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/complete_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/complete_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.feeRate",
            "description": "<p>Fee rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "completeOrders.fee",
            "description": "<p>Fee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.0000015\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"0.0000002\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\",\n      \"feeRate\": \"-0.0015\",\n      \"fee\": \"-0.000015\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\",\n      \"feeRate\": \"0.002\",\n      \"fee\": \"1\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/complete_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/complete_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/order/complete_orders/",
    "title": "My Complete Orders",
    "name": "MyTransactions",
    "group": "Order_V2",
    "permission": [
      {
        "name": "Order API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>List of completed orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>price of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeOrders.type",
            "description": "<p>Order Type sell: 'ask', buy: 'bid'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416561032\",\n      \"price\": \"419000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.001\"\n    },\n    {\n      \"timestamp\": \"1416560777\",\n      \"price\": \"450000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.0001\"\n    },\n    {\n      \"timestamp\": \"1416560765\",\n      \"price\": \"420000\",\n      \"type\": \"bid\",\n      \"qty\": \"0.01\"\n    },\n    {\n      \"timestamp\": \"1416558690\",\n      \"price\": \"420000\",\n      \"type\": \"ask\",\n      \"qty\": \"0.0001\"\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/order/complete_orders/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/order/complete_orders/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Order_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/currency/",
    "title": "Currency - Deprecated",
    "name": "Currency",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.0",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/currency/"
      }
    ],
    "deprecated": {
      "content": "This API is no longer supported."
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency Rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currencyType",
            "description": "<p>Currency Type. Ex) USD, KRW..</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"success\",\n  \"errorCode\": \"0\",\n  \"currency\": \"1138.2\",\n  \"currencyType\": \"USD\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/orderbook/",
    "title": "Orderbook",
    "name": "Orderbook",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.9",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/orderbook/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ask",
            "description": "<p>Ask List.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "ask.price",
            "description": "<p>Ask KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "ask.qty",
            "description": "<p>Ask Coin quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "bid",
            "description": "<p>Bid List.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "bid.price",
            "description": "<p>Bid KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bid.qty",
            "description": "<p>Bid Coin quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"timestamp\": \"1416895635\",\n  \"currency\": \"btc\",\n  \"bid\":\n  [\n    {\n      \"price\": \"414000\",\n      \"qty\": \"11.4946\"\n    },\n    {\n      \"price\": \"413000\",\n      \"qty\": \"6.74\"\n    },\n    {\n      \"price\": \"412000\",\n      \"qty\": \"3.248\"\n    },\n    {\n      \"price\": \"411000\",\n      \"qty\": \"1.284\"\n    }\n  ],\n  \"ask\":\n  [\n    {\n      \"price\": \"420000\",\n      \"qty\": \"10.9186\"\n    },\n    {\n      \"price\": \"421000\",\n      \"qty\": \"7.32\"\n    },\n    {\n      \"price\": \"422000\",\n      \"qty\": \"5.004\"\n    },\n    {\n      \"price\": \"423000\",\n      \"qty\": \"3.726\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/orderbook/",
    "title": "Orderbook",
    "name": "Orderbook",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.8",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/orderbook/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ask",
            "description": "<p>Ask List.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "ask.price",
            "description": "<p>Ask KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "ask.qty",
            "description": "<p>Ask Coin quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "bid",
            "description": "<p>Bid List.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "bid.price",
            "description": "<p>Bid KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bid.qty",
            "description": "<p>Bid Coin quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"timestamp\": \"1416895635\",\n  \"currency\": \"btc\",\n  \"bid\":\n  [\n    {\n      \"price\": \"414000\",\n      \"qty\": \"11.4946\"\n    },\n    {\n      \"price\": \"413000\",\n      \"qty\": \"6.74\"\n    },\n    {\n      \"price\": \"412000\",\n      \"qty\": \"3.248\"\n    },\n    {\n      \"price\": \"411000\",\n      \"qty\": \"1.284\"\n    }\n  ],\n  \"ask\":\n  [\n    {\n      \"price\": \"420000\",\n      \"qty\": \"10.9186\"\n    },\n    {\n      \"price\": \"421000\",\n      \"qty\": \"7.32\"\n    },\n    {\n      \"price\": \"422000\",\n      \"qty\": \"5.004\"\n    },\n    {\n      \"price\": \"423000\",\n      \"qty\": \"3.726\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/orderbook/",
    "title": "Orderbook",
    "name": "Orderbook",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.7",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/orderbook/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc",
              "xrp"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ask",
            "description": "<p>Ask List.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "ask.price",
            "description": "<p>Ask KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "ask.qty",
            "description": "<p>Ask BTC quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "bid",
            "description": "<p>Bid List.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "bid.price",
            "description": "<p>Bid KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bid.qty",
            "description": "<p>Bid BTC quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"timestamp\": \"1416895635\",\n  \"currency\": \"btc\",\n  \"bid\":\n  [\n    {\n      \"price\": \"414000\",\n      \"qty\": \"11.4946\"\n    },\n    {\n      \"price\": \"413000\",\n      \"qty\": \"6.74\"\n    },\n    {\n      \"price\": \"412000\",\n      \"qty\": \"3.248\"\n    },\n    {\n      \"price\": \"411000\",\n      \"qty\": \"1.284\"\n    }\n  ],\n  \"ask\":\n  [\n    {\n      \"price\": \"420000\",\n      \"qty\": \"10.9186\"\n    },\n    {\n      \"price\": \"421000\",\n      \"qty\": \"7.32\"\n    },\n    {\n      \"price\": \"422000\",\n      \"qty\": \"5.004\"\n    },\n    {\n      \"price\": \"423000\",\n      \"qty\": \"3.726\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/orderbook/",
    "title": "Orderbook",
    "name": "Orderbook",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.0",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/orderbook/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ask",
            "description": "<p>Ask List.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "ask.price",
            "description": "<p>Ask KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "ask.qty",
            "description": "<p>Ask BTC quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "bid",
            "description": "<p>Bid List.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "bid.price",
            "description": "<p>Bid KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "bid.qty",
            "description": "<p>Bid BTC quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestmap",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"timestamp\": \"1416895635\",\n  \"bid\":\n  [\n    {\n      \"price\": \"414000\",\n      \"qty\": \"11.4946\"\n    },\n    {\n      \"price\": \"413000\",\n      \"qty\": \"6.74\"\n    },\n    {\n      \"price\": \"412000\",\n      \"qty\": \"3.248\"\n    },\n    {\n      \"price\": \"411000\",\n      \"qty\": \"1.284\"\n    }\n  ],\n  \"ask\":\n  [\n    {\n      \"price\": \"420000\",\n      \"qty\": \"10.9186\"\n    },\n    {\n      \"price\": \"421000\",\n      \"qty\": \"7.32\"\n    },\n    {\n      \"price\": \"422000\",\n      \"qty\": \"5.004\"\n    },\n    {\n      \"price\": \"423000\",\n      \"qty\": \"3.726\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/trades/",
    "title": "Recent Complete Orders",
    "name": "RecentTransactions",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.9",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/trades/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "ltc",
              "iota",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hour",
              "day"
            ],
            "optional": false,
            "field": "period",
            "defaultValue": "hour",
            "description": "<p>Period.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>Recent complete orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "completeOrders.is_ask",
            "description": "<p>1 if order is sell.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"timestamp\": \"1416895705\",\n  \"result\": \"success\",\n  \"currency\": \"btc\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416893212\",\n      \"price\": \"420000\",\n      \"qty\": \"0.0\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/trades/",
    "title": "Recent Complete Orders",
    "name": "RecentTransactions",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.8",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/trades/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hour",
              "day"
            ],
            "optional": false,
            "field": "period",
            "defaultValue": "hour",
            "description": "<p>Period.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>Recent complete orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"timestamp\": \"1416895705\",\n  \"result\": \"success\",\n  \"currency\": \"btc\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416893212\",\n      \"price\": \"420000\",\n      \"qty\": \"0.0\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/trades/",
    "title": "Recent Complete Orders",
    "name": "RecentTransactions",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.7",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/trades/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc",
              "xrp"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Currency.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hour",
              "day"
            ],
            "optional": false,
            "field": "period",
            "defaultValue": "hour",
            "description": "<p>Period.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>Recent complete orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"timestamp\": \"1416895705\",\n  \"result\": \"success\",\n  \"currency\": \"btc\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416893212\",\n      \"price\": \"420000\",\n      \"qty\": \"0.0\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/trades/",
    "title": "Recent Complete Orders",
    "name": "RecentTransactions",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.0",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/trades/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completeOrders",
            "description": "<p>Recent complete orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.price",
            "description": "<p>KRW price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "completeOrders.qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "completeOrders.timestamp",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"timestamp\": \"1416895705\",\n  \"result\": \"success\",\n  \"completeOrders\":\n  [\n    {\n      \"timestamp\": \"1416893212\",\n      \"price\": \"420000\",\n      \"qty\": \"0.0\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/ticker/",
    "title": "Ticker",
    "name": "Ticker",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.9",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/ticker/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz",
              "all"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Coin type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "high",
            "description": "<p>Highest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "low",
            "description": "<p>Lowest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "last",
            "description": "<p>Price at request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "first",
            "description": "<p>First price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "volume",
            "description": "<p>Coin volume of completed orders in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "yesterday_high",
            "description": "<p>Highest price during for 24 ~ 48 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "yesterday_low",
            "description": "<p>Lowest price during for 24 ~ 48 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "yesterday_last",
            "description": "<p>Price at request before 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "yesterday_first",
            "description": "<p>First price during for 24 ~ 48 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "yesterday_volume",
            "description": "<p>Coin volume of completed orders during for 24 ~ 48 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestmap",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"success\",\n  \"errorCode\": \"0\",\n  \"first\": \"13045000\",\n  \"last\": \"12749000\",\n  \"high\": \"13636000\",\n  \"low\": \"12350000\",\n  \"volume\": \"2081.0240\",\n  \"yesterday_first\": \"13320000\",\n  \"yesterday_last\": \"12912000\",\n  \"yesterday_high\": \"14079000\",\n  \"yesterday_low\": \"12350000\",\n  \"yesterday_volume\": \"2854.2456\",\n  \"timestamp\": \"1516785493\",\n  \"currency\": \"btc\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/ticker/",
    "title": "Ticker",
    "name": "Ticker",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.8",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/ticker/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "all"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Coin type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "high",
            "description": "<p>Highest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "low",
            "description": "<p>Lowest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "last",
            "description": "<p>Last completed price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "first",
            "description": "<p>First price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "volume",
            "description": "<p>Coin volume of completed orders in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestmap",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"volume\": \"0.0\",\n  \"last\": \"420000\",\n  \"timestamp\": \"1416895445\",\n  \"high\": \"420000\",\n  \"result\": \"success\",\n  \"errorCode\": \"0\",\n  \"first\": \"420000\",\n  \"low\": \"420000\",\n  \"currency\": \"btc\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/ticker/",
    "title": "Ticker",
    "name": "Ticker",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.7",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/ticker/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc",
              "xrp",
              "all"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Coin type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "high",
            "description": "<p>Highest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "low",
            "description": "<p>Lowest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "last",
            "description": "<p>Last completed price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "first",
            "description": "<p>First price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "volume",
            "description": "<p>BTC volume of completed orders in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestmap",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"volume\": \"0.0\",\n  \"last\": \"420000\",\n  \"timestamp\": \"1416895445\",\n  \"high\": \"420000\",\n  \"result\": \"success\",\n  \"errorCode\": \"0\",\n  \"first\": \"420000\",\n  \"low\": \"420000\",\n  \"currency\": \"btc\"\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/ticker/",
    "title": "Ticker",
    "name": "Ticker",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.5",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/ticker/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "defaultValue": "BTC",
            "description": "<p>Coin type. 'BTC' or 'ETH'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "high",
            "description": "<p>Highest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "low",
            "description": "<p>Lowest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "last",
            "description": "<p>Last completed price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "first",
            "description": "<p>First price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "volume",
            "description": "<p>BTC volume of completed orders in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestmap",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Coin type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"volume\": \"0.0\",\n  \"last\": \"420000\",\n  \"timestamp\": \"1416895445\",\n  \"high\": \"420000\",\n  \"result\": \"success\",\n  \"errorCode\": \"0\",\n  \"first\": \"420000\",\n  \"low\": \"420000\",\n  \"type\": \"btc\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/ticker/",
    "title": "Ticker",
    "name": "Ticker",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.0",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/ticker/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "high",
            "description": "<p>Highest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "low",
            "description": "<p>Lowest price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "last",
            "description": "<p>Last completed price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "first",
            "description": "<p>First price in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "volume",
            "description": "<p>BTC volume of completed orders in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestmap",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"volume\": \"0.0\",\n  \"last\": \"420000\",\n  \"timestamp\": \"1416895445\",\n  \"high\": \"420000\",\n  \"result\": \"success\",\n  \"errorCode\": \"0\",\n  \"first\": \"420000\",\n  \"low\": \"420000\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/ticker_utc/",
    "title": "Ticker UTC",
    "name": "Ticker_UTC",
    "group": "Public",
    "permission": [
      {
        "name": "Exchange API(Public)"
      }
    ],
    "version": "0.1.10",
    "description": "<p>Base Time UTC±00:00</p>",
    "sampleRequest": [
      {
        "url": "https://api.coinone.co.kr/ticker_utc/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc",
              "btg",
              "omg",
              "eos",
              "data",
              "zil",
              "knc",
              "zrx",
              "xtz",
              "all"
            ],
            "optional": false,
            "field": "currency",
            "defaultValue": "btc",
            "description": "<p>Coin type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "high",
            "description": "<p>Highest price in today.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "low",
            "description": "<p>Lowest price in today.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "last",
            "description": "<p>Price at request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "first",
            "description": "<p>First price in today.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "volume",
            "description": "<p>Coin volume of completed orders in 24 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "yesterday_high",
            "description": "<p>Highest price during for yesterday.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "yesterday_low",
            "description": "<p>Lowest price during for yesterday.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "yesterday_last",
            "description": "<p>Price at request before yesterday.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "yesterday_first",
            "description": "<p>First price during for yesterday.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "yesterday_volume",
            "description": "<p>Coin volume of completed orders during for 24 ~ 48 hours.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "timestmap",
            "description": "<p>Timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"success\",\n  \"errorCode\": \"0\",\n  \"first\": \"13045000\",\n  \"last\": \"12749000\",\n  \"high\": \"13636000\",\n  \"low\": \"12350000\",\n  \"volume\": \"2081.0240\",\n  \"yesterday_first\": \"13320000\",\n  \"yesterday_last\": \"12912000\",\n  \"yesterday_high\": \"14079000\",\n  \"yesterday_low\": \"12350000\",\n  \"yesterday_volume\": \"2854.2456\",\n  \"timestamp\": \"1516785493\",\n  \"currency\": \"btc\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/xbtc_api.py",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/transaction/auth_number/",
    "title": "2-Factor Authentication",
    "name": "2_Factor_Authentication",
    "group": "Transaction",
    "permission": [
      {
        "name": "Withdraw BTC, Withdraw KRW"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Authentication Type. 'btc' or 'krw'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/transaction/btc/",
    "title": "BTC Transactions History",
    "name": "BTCTransactions",
    "group": "Transaction",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "btcHistory",
            "description": "<p>BTC transactions history.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "btcHistory.transactionId",
            "description": "<p>BTC transaction id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "btcHistory.type",
            "description": "<p>Transaction type. send: &quot;send&quot;, receive: &quot;receive&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "btcHistory.from",
            "description": "<p>From address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "btcHistory.to",
            "description": "<p>To address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "btcHistory.confirmations",
            "description": "<p>Confirmations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btcHistory.quantity",
            "description": "<p>Transaction quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "btcHistory.timestamp",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"btcHistory\":\n  [\n    {\n      \"from\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"timestamp\": \"1416560844\",\n      \"to\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"confirmations\": \"3\",\n      \"transactionId\": \"bb1d723751cc4d312c38adc13d9a45b9a16608328d0b9a10f5e3ebc647d64506\",\n      \"type\": \"send\",\n      \"quantity\": \"0.0001\"\n    },\n    {\n      \"from\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"timestamp\": \"1416302576\",\n      \"to\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"confirmations\": \"3\",\n      \"transactionId\": \"9f0a5adf00beeaea935c8da9c73df5d5970d4c974cc5186857a86e0c23e61337\",\n      \"type\": \"receive\",\n      \"quantity\": \"0.0001\"\n    },\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "https://api.coinone.co.kr/v1/transaction/krw/",
    "title": "KRW Transactions History",
    "name": "KRWTransactions",
    "group": "Transaction",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "krwHistory",
            "description": "<p>KRW transactions history.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "krwHistory.bankCode",
            "description": "<p>Bank code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "krwHistory.accountNumber",
            "description": "<p>Bank account number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "krwHistory.depositor",
            "description": "<p>Depositor's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krwHistory.amount",
            "description": "<p>Transaction amount.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "krwHistory.processLevel",
            "description": "<p>KRW transaction's process level. 1: Deposit Completed, 2: Request Withdrawal, 3: Request Accepted, 4: Withrawal Canceled, 5: Withdrawal Completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krwHistory.timestamp",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"krwHistory\": [\n    {\n      \"accountNumber\": \"0123456789\", \n      \"timestamp\": \"1416884686\", \n      \"depositor\": \"John\", \n      \"amount\": \"10000\", \n      \"bankCode\": \"20\", \n      \"processLevel\": \"1\"\n    }, \n    {\n      \"accountNumber\": \"0123456789\", \n      \"timestamp\": \"1416884686\", \n      \"depositor\": \"John\", \n      \"amount\": \"10000\", \n      \"bankCode\": \"20\", \n      \"processLevel\": \"3\"\n    }, \n    {\n      \"accountNumber\": \"0123456789\", \n      \"timestamp\": \"1416884686\", \n      \"depositor\": \"John\", \n      \"amount\": \"10000\", \n      \"bankCode\": \"20\", \n      \"processLevel\": \"2\"\n    }, \n    {\n      \"accountNumber\": \"0123456789\", \n      \"timestamp\": \"1416884686\", \n      \"depositor\": \"John\", \n      \"amount\": \"10000\", \n      \"bankCode\": \"20\", \n      \"processLevel\": \"5\"\n    }\n  ], \n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/transaction/btc/",
    "title": "Send BTC",
    "name": "SendBTC",
    "group": "Transaction",
    "description": "<p>Send BTC. To use this request, a user should be given a 2-factor authentication's number from /v1/transaction/auth_number/ first.</p> <ul> <li>CAUTION: ONLY OTP USER CAN USE THIS API.</li> </ul>",
    "permission": [
      {
        "name": "Withdraw BTC"
      }
    ],
    "version": "0.1.8",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>BTC wallet address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "auth_number",
            "description": "<p>2-Factor Authentication number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of wallet. 'trade' or 'normal'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_address",
            "description": "<p>User's wallet address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_docs/v1/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/transaction/btc/",
    "title": "Send BTC",
    "name": "SendBTC",
    "group": "Transaction",
    "description": "<p>Send BTC. To use this request, a user should be given a 2-factor authentication's number from /v1/transaction/auth_number/ first. If a user doesn't mobile authentication, just put auth_number to 0. In other case, put auth_number to received 2-factor authentication's number.</p>",
    "permission": [
      {
        "name": "Withdraw BTC"
      }
    ],
    "version": "0.1.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>BTC wallet address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "auth_number",
            "description": "<p>2-Factor Authentication number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of wallet. 'trade' or 'normal'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_address",
            "description": "<p>User's wallet address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v1/transaction/btc/",
    "title": "Send BTC",
    "name": "SendBTC",
    "group": "Transaction",
    "description": "<p>Send BTC. To use this request, a user should be given a 2-factor authentication's number from /v1/transaction/auth_number/ first. If a user doesn't mobile authentication, just put auth_number to 0. In other case, put auth_number to received 2-factor authentication's number.</p>",
    "permission": [
      {
        "name": "Withdraw BTC"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>BTC wallet address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "auth_number",
            "description": "<p>2-Factor Authentication number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./old_api_docs.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/auth_number/",
    "title": "2-Factor Authentication",
    "name": "2_Factor_Authentication",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "Withdraw BTC, Withdraw KRW"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "krw",
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Authentication Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/auth_number/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"type\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/auth_number/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"type\": \"btc\",\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time() * 1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndef create_payload(data):\n  payload = get_base_payload()\n  payload.update(data)\n  return payload\n\n\ndata = get_response('v2/transaction/auth_number/', create_payload({\n  'type': 'btc',\n}))\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/transaction.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/auth_number/",
    "title": "2-Factor Authentication",
    "name": "2_Factor_Authentication",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "Withdraw BTC, Withdraw KRW"
      }
    ],
    "version": "0.1.4",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "krw",
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Authentication Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/auth_number/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"type\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/auth_number/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"type\": \"btc\",\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/auth_number/",
    "title": "2-Factor Authentication",
    "name": "2_Factor_Authentication",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "Withdraw BTC, Withdraw KRW"
      }
    ],
    "version": "0.1.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "krw",
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Authentication Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\", \n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/auth_number/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"type\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/auth_number/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"type\": \"btc\",\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/auth_number/",
    "title": "2-Factor Authentication",
    "name": "2_Factor_Authentication",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "Withdraw BTC, Withdraw KRW"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Authentication Type. 'btc' or 'krw'.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/auth_number/';\n  var payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"type\": \"btc or krw\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/auth_number/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"type\": \"btc or krw\",\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/btc/history/",
    "title": "BTC Transactions History - Deprecated",
    "name": "BTCTransactions",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.2",
    "deprecated": {
      "content": "This API is no longer supported. Now use 'Coin Transactions History'."
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "btcHistory",
            "description": "<p>BTC transactions history.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "btcHistory.transactionId",
            "description": "<p>BTC transaction id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "btcHistory.type",
            "description": "<p>Transaction type. send: &quot;send&quot;, receive: &quot;receive&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "btcHistory.from",
            "description": "<p>From address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "btcHistory.to",
            "description": "<p>To address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "btcHistory.confirmations",
            "description": "<p>Confirmations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "btcHistory.quantity",
            "description": "<p>Transaction quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "btcHistory.timestamp",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"btcHistory\":\n  [\n    {\n      \"from\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"timestamp\": \"1416560844\",\n      \"to\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"confirmations\": \"3\",\n      \"transactionId\": \"bb1d723751cc4d312c38adc13d9a45b9a16608328d0b9a10f5e3ebc647d64506\",\n      \"type\": \"send\",\n      \"quantity\": \"0.0001\"\n    },\n    {\n      \"from\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"timestamp\": \"1416302576\",\n      \"to\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"confirmations\": \"3\",\n      \"transactionId\": \"9f0a5adf00beeaea935c8da9c73df5d5970d4c974cc5186857a86e0c23e61337\",\n      \"type\": \"receive\",\n      \"quantity\": \"0.0001\"\n    },\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/btc/history/';\nvar payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/btc/history/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/transaction.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/history/",
    "title": "Coin Transactions History",
    "name": "CoinTransactions",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.9",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum",
              "iota",
              "ltc"
            ],
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "transactions",
            "description": "<p>Coin transactions history.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.txid",
            "description": "<p>Transaction ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.type",
            "description": "<p>Transaction type. send: &quot;send&quot;, receive: &quot;receive&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.from",
            "description": "<p>From address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.to",
            "description": "<p>To address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "transactions.confirmations",
            "description": "<p>Confirmations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "transactions.quantity",
            "description": "<p>Transaction quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "transactions.timestamp",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"currency\": \"btc\",\n  \"transactions\":\n  [\n    {\n      \"from\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"timestamp\": \"1416560844\",\n      \"to\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"confirmations\": \"3\",\n      \"txid\": \"bb1d723751cc4d312c38adc13d9a45b9a16608328d0b9a10f5e3ebc647d64506\",\n      \"type\": \"send\",\n      \"quantity\": \"0.0001\"\n    },\n    {\n      \"from\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"timestamp\": \"1416302576\",\n      \"to\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"confirmations\": \"3\",\n      \"txid\": \"9f0a5adf00beeaea935c8da9c73df5d5970d4c974cc5186857a86e0c23e61337\",\n      \"type\": \"receive\",\n      \"quantity\": \"0.0001\"\n    },\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/history/';\nvar payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/history/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time() * 1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndef create_payload(data):\n    payload = get_base_payload()\n    payload.update(data)\n    return payload\n\n\ndata = get_response('v2/transaction/history/', create_payload({\n  'currency': 'btc',\n}))\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/transaction.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/history/",
    "title": "Coin Transactions History",
    "name": "CoinTransactions",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.8",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "bch",
              "eth",
              "etc",
              "xrp",
              "qtum"
            ],
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "transactions",
            "description": "<p>Coin transactions history.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.txid",
            "description": "<p>Transaction ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.type",
            "description": "<p>Transaction type. send: &quot;send&quot;, receive: &quot;receive&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.from",
            "description": "<p>From address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.to",
            "description": "<p>To address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "transactions.confirmations",
            "description": "<p>Confirmations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "transactions.quantity",
            "description": "<p>Transaction quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "transactions.timestamp",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"currency\": \"btc\",\n  \"transactions\":\n  [\n    {\n      \"from\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"timestamp\": \"1416560844\",\n      \"to\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"confirmations\": \"3\",\n      \"txid\": \"bb1d723751cc4d312c38adc13d9a45b9a16608328d0b9a10f5e3ebc647d64506\",\n      \"type\": \"send\",\n      \"quantity\": \"0.0001\"\n    },\n    {\n      \"from\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"timestamp\": \"1416302576\",\n      \"to\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"confirmations\": \"3\",\n      \"txid\": \"9f0a5adf00beeaea935c8da9c73df5d5970d4c974cc5186857a86e0c23e61337\",\n      \"type\": \"receive\",\n      \"quantity\": \"0.0001\"\n    },\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/history/';\nvar payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/history/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/history/",
    "title": "Coin Transactions History",
    "name": "CoinTransactions",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "btc",
              "eth",
              "etc"
            ],
            "optional": false,
            "field": "currency",
            "description": "<p>Currency.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "transactions",
            "description": "<p>Coin transactions history.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.txid",
            "description": "<p>Transaction ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.type",
            "description": "<p>Transaction type. send: &quot;send&quot;, receive: &quot;receive&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.from",
            "description": "<p>From address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.to",
            "description": "<p>To address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "transactions.confirmations",
            "description": "<p>Confirmations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "transactions.quantity",
            "description": "<p>Transaction quantity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "transactions.timestamp",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"currency\": \"btc\",\n  \"transactions\":\n  [\n    {\n      \"from\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"timestamp\": \"1416560844\",\n      \"to\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"confirmations\": \"3\",\n      \"txid\": \"bb1d723751cc4d312c38adc13d9a45b9a16608328d0b9a10f5e3ebc647d64506\",\n      \"type\": \"send\",\n      \"quantity\": \"0.0001\"\n    },\n    {\n      \"from\": \"n4G1hT3egiBQ6uSU5pLkGjiKJ6XGjS5k1P\",\n      \"timestamp\": \"1416302576\",\n      \"to\": \"muQoJGAySUJsn1c9iaj9GQitdVLJhnQVnL\",\n      \"confirmations\": \"3\",\n      \"txid\": \"9f0a5adf00beeaea935c8da9c73df5d5970d4c974cc5186857a86e0c23e61337\",\n      \"type\": \"receive\",\n      \"quantity\": \"0.0001\"\n    },\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/history/';\nvar payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/history/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"currency\": \"btc\"\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/krw/history/",
    "title": "KRW Transactions History",
    "name": "KRWTransactions",
    "group": "Transaction_V2",
    "permission": [
      {
        "name": "User API"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "krwHistory",
            "description": "<p>KRW transactions history.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "krwHistory.bankCode",
            "description": "<p>Bank code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "krwHistory.accountNumber",
            "description": "<p>Bank account number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "krwHistory.depositor",
            "description": "<p>Depositor's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krwHistory.amount",
            "description": "<p>Transaction amount.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "krwHistory.processLevel",
            "description": "<p>KRW transaction's process level. 1: Deposit Completed, 2: Request Withdrawal, 3: Request Accepted, 4: Withrawal Canceled, 5: Withdrawal Completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "krwHistory.timestamp",
            "description": "<p>Timestamp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"krwHistory\": [\n    {\n      \"accountNumber\": \"0123456789\",\n      \"timestamp\": \"1416884686\",\n      \"depositor\": \"John\",\n      \"amount\": \"10000\",\n      \"bankCode\": \"20\",\n      \"processLevel\": \"1\"\n    },\n    {\n      \"accountNumber\": \"0123456789\",\n      \"timestamp\": \"1416884686\",\n      \"depositor\": \"John\",\n      \"amount\": \"10000\",\n      \"bankCode\": \"20\",\n      \"processLevel\": \"3\"\n    },\n    {\n      \"accountNumber\": \"0123456789\",\n      \"timestamp\": \"1416884686\",\n      \"depositor\": \"John\",\n      \"amount\": \"10000\",\n      \"bankCode\": \"20\",\n      \"processLevel\": \"2\"\n    },\n    {\n      \"accountNumber\": \"0123456789\",\n      \"timestamp\": \"1416884686\",\n      \"depositor\": \"John\",\n      \"amount\": \"10000\",\n      \"bankCode\": \"20\",\n      \"processLevel\": \"5\"\n    }\n  ],\n  \"result\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/krw/history/';\nvar payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python2",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/krw/history/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      },
      {
        "title": "python3.6+",
        "content": "import base64\nimport hashlib\nimport hmac\nimport json\nimport time\nfrom urllib.request import urlopen, Request\n\nACCESS_TOKEN = '{your_access_token}'\nSECRET_KEY = '{your_secret_key}'\nUPPERCASE_SECRET_KEY = SECRET_KEY.upper()\nHOST = 'https://api.coinone.co.kr/'\n\n\ndef get_base_payload():\n  return {\n    'access_token': ACCESS_TOKEN,\n  }\n\n\ndef str_2_byte(s, encode='utf-8'):\n  return bytes(s, encode)\n\n\ndef get_encoded_payload(payload):\n  payload['nonce'] = int(time.time() * 1000)\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(str_2_byte(dumped_json))\n  return encoded_json\n\n\ndef get_signature(encoded_payload):\n  signature = hmac.new(str_2_byte(UPPERCASE_SECRET_KEY), encoded_payload, hashlib.sha512)\n  return signature.hexdigest()\n\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  signature = get_signature(encoded_payload)\n  headers = {\n    'Content-Type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': signature,\n  }\n  api_url = HOST + url\n  req = Request(api_url, data=encoded_payload, headers=headers, method='POST')\n\n  with urlopen(req) as res:\n    data = res.read().decode('utf-8')\n    return json.loads(data)\n\n\ndef create_payload(data):\n  payload = get_base_payload()\n  payload.update(data)\n  return payload\n\n\ndata = get_response('v2/transaction/krw/history/', get_base_payload())\nprint(data)",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/transaction.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/btc/",
    "title": "Send BTC",
    "name": "SendBTC",
    "group": "Transaction_V2",
    "description": "<p>Sending BTC. To use this request, a user should be given a 2-factor authentication's number from /v2/transaction/auth_number/ first.</p> <ul> <li>CAUTION: ONLY OTP USER CAN USE THIS API.</li> </ul>",
    "permission": [
      {
        "name": "Withdraw BTC"
      }
    ],
    "version": "0.1.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>BTC wallet address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "auth_number",
            "description": "<p>2-Factor Authentication number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of wallet. 'trade' or 'normal'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_address",
            "description": "<p>User's wallet address</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/btc/';\nvar payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"address\": \"receiver address\",\n  \"auth_number\": 123456,\n  \"qty\": 0.1,\n  \"type\": \"trade\",\n  \"from_address\": \"trade wallet address\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/btc/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"address\": \"receiver address\",\n  \"auth_number\": 123456,\n  \"qty\": 0.1,\n  \"type\": \"trade\",\n  \"from_address\": \"trade wallet address\",\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(url, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./api_docs/v2/transaction.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://api.coinone.co.kr/v2/transaction/btc/",
    "title": "Send BTC - Will be deprecated",
    "name": "SendBTC",
    "group": "Transaction_V2",
    "description": "<p>Sending BTC. To use this request, a user should be given a 2-factor authentication's number from /v2/transaction/auth_number/ first. If a user doesn't mobile authentication, just put auth_number to 0. In other case, put auth_number to received 2-factor authentication's number.</p>",
    "permission": [
      {
        "name": "Withdraw BTC"
      }
    ],
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User's access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>BTC wallet address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "auth_number",
            "description": "<p>2-Factor Authentication number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "qty",
            "description": "<p>BTC quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of wallet. 'trade' or 'normal'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_address",
            "description": "<p>User's wallet address</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nonce",
            "description": "<p>Increasing any positive integer value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request's result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorCode\": \"0\",\n  \"result\": \"success\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "js",
        "content": "var crypto = require('crypto');\nvar request = require('request');\nvar ACCESS_TOKEN = '';\nvar SECRET_KEY = '';\nvar url = 'https://api.coinone.co.kr/v2/transaction/btc/';\nvar payload = {\n  \"access_token\": ACCESS_TOKEN,\n  \"address\": \"receiver address\",\n  \"auth_number\": 123456,\n  \"qty\": 0.1,\n  \"type\": \"trade\",\n  \"from_address\": \"trade wallet address\",\n  \"nonce\": Date.now()\n};\n\npayload = new Buffer(JSON.stringify(payload)).toString('base64');\n\nvar signature = crypto\n  .createHmac(\"sha512\", SECRET_KEY.toUpperCase())\n  .update(payload)\n  .digest('hex');\n\nvar headers = {\n  'content-type':'application/json',\n  'X-COINONE-PAYLOAD': payload,\n  'X-COINONE-SIGNATURE': signature\n};\n\nvar options = {\n  url: url,\n  headers: headers,\n  body: payload\n};\n\nrequest.post(options,\n  function(error, response, body) {\n    console.log(body);\n});",
        "type": "js"
      },
      {
        "title": "python",
        "content": "import base64\nimport simplejson as json\nimport hashlib\nimport hmac\nimport httplib2\nimport time\n\nACCESS_TOKEN = ''\nSECRET_KEY = ''\n\nURL = 'https://api.coinone.co.kr/v2/transaction/btc/'\nPAYLOAD = {\n  \"access_token\": ACCESS_TOKEN,\n  \"address\": \"receiver address\",\n  \"auth_number\": 123456,\n  \"qty\": 0.1,\n  \"type\": \"trade\",\n  \"from_address\": \"trade wallet address\",\n}\n\ndef get_encoded_payload(payload):\n  payload[u'nonce'] = int(time.time()*1000)\n\n  dumped_json = json.dumps(payload)\n  encoded_json = base64.b64encode(dumped_json)\n  return encoded_json\n\ndef get_signature(encoded_payload, secret_key):\n  signature = hmac.new(str(secret_key).upper(), str(encoded_payload), hashlib.sha512);\n  return signature.hexdigest()\n\ndef get_response(url, payload):\n  encoded_payload = get_encoded_payload(payload)\n  headers = {\n    'Content-type': 'application/json',\n    'X-COINONE-PAYLOAD': encoded_payload,\n    'X-COINONE-SIGNATURE': get_signature(encoded_payload, SECRET_KEY)\n  }\n  http = httplib2.Http()\n  response, content = http.request(URL, 'POST', headers=headers, body=encoded_payload)\n  return content\n\ndef get_result():\n  content = get_response(URL, PAYLOAD)\n  content = json.loads(content)\n\n  return content\n\nif __name__   == \"__main__\":\n    print get_result()",
        "type": "python"
      }
    ],
    "filename": "./old_api_docs.py",
    "groupTitle": "Transaction_V2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-PAYLOAD",
            "description": "<p>Parameter object -&gt; JSON string -&gt; base64</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "X-COINONE-SIGNATURE",
            "description": "<p>HMAC(X-COINONE-PAYLOAD, SECRET_KEY, SHA512).hexdigest()</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "accept",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./bank_av/docs/main.js",
    "group": "_var_product_XBTC_API_bank_av_docs_main_js",
    "groupTitle": "_var_product_XBTC_API_bank_av_docs_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_var_product_XBTC_API_doc_main_js",
    "groupTitle": "_var_product_XBTC_API_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_var_product_XBTC_API_docs_main_js",
    "groupTitle": "_var_product_XBTC_API_docs_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./frego/docs/en/main.js",
    "group": "_var_product_XBTC_API_frego_docs_en_main_js",
    "groupTitle": "_var_product_XBTC_API_frego_docs_en_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./frego/docs/kr/main.js",
    "group": "_var_product_XBTC_API_frego_docs_kr_main_js",
    "groupTitle": "_var_product_XBTC_API_frego_docs_kr_main_js",
    "name": ""
  }
] });
