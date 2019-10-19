# API Reference
Composition rules of 'symbol' ： 'base-currency' + 'quote-currency'.For 'BTC/USDT' trading,the 'symbol' is btcusdt, and so on.


## List of Requests
| Content Type | Request Method | Request Type    | Description  | Signature Required |Sub-UID Allowed|
| ----------- | ----- | ------ | ----- | ----- | ---|
| Market Data       | [GET /market/history/kline](#get-markethistorykline--get-candlestick-data)  | GET | K-Line | N |Y|
| Market Data      | [GET /market/detail/merged](#get-marketdetailmerged-get-ticker)  | GET | 24 hours trade summary and best bid/ask for a symbol | N |Y|
|Market Data       | [GET /market/tickers](#get-markettickers)  | GET | Trade summary of a trading day for all symbols | N |Y|
|Market Data       | [GET /market/depth](#get-marketdepth---market-depth)  | GET | Market Depth of a symbol | N |Y|
|Market Data      | [GET /market/trade](#get-markettrade--trade-detail)  | GET | The last trade of a symbol | N |Y|
|Market Data      | [GET /market/history/trade](#get-markethistorytrade-orderbook)  | GET | Request a batch of trade records of a symbol, up to 2000 records| N |Y|
|Market Data      | [GET /market/detail](#get-marketdetail---market-detail-in-24-hours)  | GET | 24 hours trade summary of a symbol |N |Y|
| Symbols&Currency      | [GET /v1/common/symbols](#get-v1commonsymbols-----get-all-the-trading-assets-in-huobipro)  | GET | Reference information of trading instrument, including base currency, quote precision, etc.  |N |Y|
| Symbols&Currency       | [GET /v1/common/currencys](#get-v1commoncurrencys-----get-currencys-supported-in-huobipro)  | GET | The list of currencies available |N |Y|
|Account	|[GET /v1/account/accounts](#get-v1accountaccounts-get-all-the-accounts-pro-and-hadax-share-the-same-account-id)|	GET| get the status of an account| Y|Y|
|Account	|[GET /v1/account/accounts/{account-id}/balance](#get-v1accountaccountsaccount-idbalance-----get-balance-in-huobipro)|GET|	Get the balance of an account	|Y|Y|
|Trade	|[POST/v1/order/orders/place](#post-v1orderordersplace--make-an-order-in-huobipro)|POST|Place an order	|Y|Y|
|Trade	|[POST/v1/order/orders/{order-id}/submitcancel](#post-v1orderordersorder-idsubmitcancel--request-for-cancelling-an-order)|POST|	Request to cancel an order	|Y|Y|
|Trade	|[POST /v1/order/orders/batchcancel](#post-v1orderordersbatchcancel--batch-cancel)|POST|Request to cancel a batch of orders, up to 50 orders	|Y|Y|
|Trade	|[POST /v1/order/orders/batchCancelOpenOrders](#post--v1orderbatchcancelopenorders--cancel-a-batch-of-orders-with-certain-criteria)|POST|	Request to cancel a batch of orders, which meet certain criteria, up to 100 orders	|Y|Y|
|User Order Info	|[GET /v1/order/orders/{order-id}](#get-v1orderordersorder-id----get-order-info)|GET|Get the details of an order|Y|Y|
|User Order Info	|[GET /v1/order/orders/{order-id}/matchresults](#get-v1orderordersorder-idmatchresults--get-order-matchresult)	|GET| Get detail match results of an order	|Y|Y|
|User Order Info	|[GET /v1/order/orders](#get-v1orderorders--get-order-list)	|GET|Search for a group of orders, which meet certain criteria (up to 100)	|Y|Y|
|User Order Info	|[GET /v1/order/matchresults](#get-v1ordermatchresults----get-order-matchresults)	|GET|Search for the trade records of an account|Y|Y|
|User Order Info	|[GET /v1/order/openOrders](#get-v1orderopenorders-provide-open-orders-of-a-symbol-for-an-account)	|GET|Get the open orders of an account (up to 500)|Y|	Y|
|Withdraw/Deposit	|[POST /v1/dw/withdraw/api/create](#post-v1dwwithdrawapicreate---create-a-withdraw-application)	|POST|Submit a request to withdraw some asset from an account|	Y|N|
|Withdraw/Deposit	|[POST /v1/dw/withdraw-virtual/{withdraw-id}/cancel](#post-v1dwwithdraw-virtualwithdraw-idcancel-cancel-a-withdraw)|POST| 	Cancel an withdraw request|Y|N|
|Withdraw/Deposit	|[GET /v1/query/deposit-withdraw](#get-v1querydeposit-withdraw---get-deposit-or-withdraw-records)	|GET|Get the withdraw and deposit records of an account|Y|N|
|Margin Trade	|[POST /v1/dw/transfer-in/margin](#post-v1dwtransfer-inmargin--transfer-asset-from-spot-account-to-margin-account)|POST|Transfer asset from spot account to margin account of a user|Y|N|
|Margin Trade	|[POST /v1/dw/transfer-out/margin](#post-v1dwtransfer-outmargin--transfer-asset-from-margin-account-to-spot-account)|POST|Transfer asset from margin account to spot account of a user|Y|N|
|Margin Trade	|[POST /v1/margin/orders](#post-v1marginorders--margin-application)	|POST|Submit a request to borrow with margin account|Y|N|
|Margin Trade	|[POST /v1/margin/orders/{order-id}/repay](#post-v1marginordersorder-idrepay-----repayment)	|POST|Pay back the margin loan|Y|N|
|Margin Trade	|[GET /v1/margin/loan-orders](#get-v1marginloan-orders--margin-order-list)	|GET|Get the margin loan records|Y|N|
|Margin Trade	|[GET /v1/margin/accounts/balance](#get-v1marginaccountsbalancesymbolsymbol--margin-account-info)	|GET|Get the balance of a margin account|Y|N|
|ETF Swap in/out	|[GET /etf/swap/config](#get-etfswapconfig)|GET|Get the basic information of ETF creation and redemption, as well as ETF constituents.|Y|N|
|ETF Swap in/out	|[POST/etf/swap/in](#post-etfswapin)|POST|Request to create certain amount of a given ETF with corresponding underlying instruments.|Y|N|
|ETF Swap in/out	|[POST/etf/swap/out](#post-etfswapout)|POST|Request to redeem the underlying instruments via exchange with corresponding amount of a given ETF|Y|N|
|ETF Swap in/out	|[GET/etf/list](#get-etflist)|GET|Get the latest creation/redemption records, up to 100.|Y|N|
|ETF Swap in/out	|[GET/quotation/market/history/kline](#get-quotationmarkethistorykline--get-etf-net-asset-value-data)|GET|Get the open, high, low, close, amount, vol of the net asset value of an ETF|N|N|
|Master-Sub User|[POST /v1/subuser/transfer](#post-v1subusertransfer)|POST| Master UID to transfer fund between Master UID and Sub UID|Y|N|
|Master-Sub User|[GET /v1/subuser/aggregate-balance](#get-v1subuseraggregate-balance)|GET|Master UID to query aggregate balance of all sub-uid for each currency|Y|N|
|Master-Sub User|[GET /v1/account/accounts/{sub-uid}](#get-v1accountaccountssub-uid)|GET|Master UID to query account balances for a given sub-uid|Y|N|

### Market Data API

#### GET /market/history/kline  Get Candlestick Data

Request:

| Param | required  | data type      | description  | default   | value range  |
| ------------ | ----- | ------ | ----- | ----- | ------- |
| symbol       | true  | string | trading asset  |  | btcusdt, bccbtc, rcneth ...   |
| period       | true  | string |    |    | 1min, 5min, 15min, 30min, 60min, 1day, 1mon, 1week, 1year |
| size | false | integer |   | 150 | [1,2000] |

Response:

| Param   | required | data type    | description   | value range   |
| ------ | ---- | ------ | ----------- | ------ |
| status | true | string |      | "ok" , "error" |
| ts     | true | number | timestamp in millisecond  |    |
| tick   | true | object |     |      |
| ch     | true | string |   channel,format： market.$symbol.kline.$period |    |

data :

```json
"data": [
{
    "id": "kline id",
    "amount": "trading amount",
    "count":
    "open": "Open price",
    "close": "Closing price.If this is a latest kline,this shows the current price",
    "low": "low",
    "high": "high",
    "vol": "volume"
  }
]
```

Example:
GET /market/history/kline?period=1day&size=200&symbol=btcusdt
```json
{
  "status": "ok",
  "ch": "market.btcusdt.kline.1day",
  "ts": 1499223904680,
  "data": [
{
    "id": 1499184000,
    "amount": 37593.0266,
    "count": 0,
    "open": 1935.2000,
    "close": 1879.0000,
    "low": 1856.0000,
    "high": 1940.0000,
    "vol": 71031537.97866500
  },
]
}
```
GET /market/history/kline?period=not-exist&size=200&symbol=ethusdt
```json
{
  "ts": 1490758171271,
  "status": "error",
  "err-code": "invalid-parameter",
  "err-msg": "invalid period"
}
```

GET /market/history/kline?period=1day&size=not-exist&symbol=ethusdt
```json
{
  "ts": 1490758221221,
  "status": "error",
  "err-code": "bad-request",
  "err-msg": "invalid size, valid range: [1,2000]"
}
```
GET /market/history/kline?period=1day&size=200&symbol=not-exist
```json
{
  "ts": 1490758171271,
  "status": "error",
  "err-code": "invalid-parameter",
  "err-msg": "invalid symbol"
}
```

#### GET /market/detail/merged Get Ticker

Request:

| Param   | required  | data type      | description  | default   | value range   |
| ------------ | ----- | ------ | -----  | ---  |  ----------- |
| symbol    | true  | string | trading asset   |   | btcusdt, bccbtc, rcneth ...|

Response:

| Param   | required | data type    | description   | value range   |
| ------ | ---- | ------ | -------  | ----  |
| status | true | string |    | "ok" , "error" |
| ts     | true | number | timestamp in millisecond    |     |
| tick   | true | object | kline data    |      |
| ch     | true | string | channel, format： market.$symbol.detail.merged |     |

tick :

```json
  "tick": {
    "id":  "",
    "amount":  "",
    "count":  "",
    "open":  "",
    "close": "Closing price.If this is a latest kline,this shows the current price",
    "low":  "",
    "high":  "",
    "vol":  "volume",
    "bid": ["bid1 price", "volume"],
    "ask": ["ask1 price", "volume"]
  }

```

Example:
GET /market/detail/merged?symbol=ethusdt
```json
{
"status":"ok",
"ch":"market.ethusdt.detail.merged",
"ts":1499225276950,
"tick":{
  "id":1499225271,
  "ts":1499225271000,
  "close":1885.0000,
  "open":1960.0000,
  "high":1985.0000,
  "low":1856.0000,
  "amount":81486.2926,
  "count":42122,
  "vol":157052744.85708200,
  "ask":[1885.0000,21.8804],
  "bid":[1884.0000,1.6702]
  }
}
```
GET /market/detail/merged?symbol=not-exist
```json
{
  "ts": 1490758171271,
  "status": "error",
  "err-code": "invalid-parameter",
  "err-msg": "invalid symbol"
}
```

#### GET /market/tickers
will get something like this
open - // daily Kline,opening price
close - // daily Kline,closing price
low -  // daily Kline,the minimum price
high -  // daily Kline,the maximum price
```json
{  
    "status":"ok",
    "ts":1510885463001,
    "data":[  
        {  
            "open":0.044297,      
            "close":0.042178,     
            "low":0.040110,      
            "high":0.045255,     
            "amount":12880.8510,  
            "count":12838,        
            "vol":563.0388715740,
            "symbol":"ethbtc"     
        },
        {  
            "open":0.008545,
            "close":0.008656,
            "low":0.008088,
            "high":0.009388,
            "amount":88056.1860,
            "count":16077,
            "vol":771.7975953754,
            "symbol":"ltcbtc"
        }
    ]
}
```
#### GET /market/depth   Market Depth  

Request:

| Param   | required  | data type      | description    | default   | value range   |
| ------  | ----- | ------ | ------  | ----- | -------  |
| symbol     | true  | string | trading asset    |       | btcusdt, bccbtc, rcneth ... |
| type    | true  | string | Depth data type      |       | step0, step1, step2, step3, step4, step5 |


Response:

| Param   | required | data type    | description    | value range    |
| ------ | ---- | ------ | -------  | ---  |
| status | true | string |       | "ok" or "error" |
| ts     | true | number | timestamp in millisecond    |     |
| tick   | true | object | Depth     |     |
| ch     | true | string | channel, format： market.$symbol.depth.$type |  |

tick :

```json
  "tick": {
    "id":
    "ts": "millisecond",
    "bids":  ["price" , "amount" ],
    "asks":  ["price" , "amount" ]
  }
```

Example:
GET /market/depth?symbol=ethusdt&type=step1
bids are in form [price, amount]
```json
{
  "status": "ok",
  "ch": "market.btcusdt.depth.step1",
  "ts": 1489472598812,
  "tick": {
    "id": 1489464585407,
    "ts": 1489464585407,
    "bids": [
      [7964, 0.0678],
      [7963, 0.9162],
      [7961, 0.1],
      [7960, 12.8898],
      [7958, 1.2],
      [7955, 2.1009],
      [7954, 0.4708],
      [7953, 0.0564],
      [7951, 2.8031],
      [7950, 13.7785],
      [7949, 0.125],
      [7948, 4],
      [7942, 0.4337],
      [7940, 6.1612],
      [7936, 0.02],
      [7935, 1.3575],
      [7933, 2.002],
      [7932, 1.3449],
      [7930, 10.2974],
      [7929, 3.2226]
    ],
    "asks": [
      [7979, 0.0736],
      [7980, 1.0292],
      [7981, 5.5652],
      [7986, 0.2416],
      [7990, 1.9970],
      [7995, 0.88],
      [7996, 0.0212],
      [8000, 9.2609],
      [8002, 0.02],
      [8008, 1],
      [8010, 0.8735],
      [8011, 2.36],
      [8012, 0.02],
      [8014, 0.1067],
      [8015, 12.9118],
      [8016, 2.5206],
      [8017, 0.0166],
      [8018, 1.3218],
      [8019, 0.01],
      [8020, 13.6584]
    ]
  }
}
```
GET /market/depth?symbol=ethusdt&type=not-exist
```json
{
  "ts": 1490759358099,
  "status": "error",
  "err-code": "invalid-parameter",
  "err-msg": "invalid type"
}
```


#### GET /market/trade  Trade Detail

Request:

| Param   | required  | data type   | description   | default   | value range  |
| -------  | ----- | ------ | ------ | ----- | ---- |
| symbol   | true  | string | trading asset   |   | btcusdt, bccbtc, rcneth ... |

Response:

| Param   | required | data type    | description   | value range    |
| ------ | ---- | ------ | ----------| --------------- |
| status | true | string |    | "ok" or "error" |
| ts     | true | number | timestamp in millisecond    |      |
| tick   | true | object | Trade        |     |
| ch     | true | string | channel, format： market.$symbol.trade.detail |     |

tick ：

```json
  "tick": {
    "id":  "",
    "ts": "millisecond",
    "data": [
      {
        "id":  "",
        "price":  "",
        "amount":  "",
        "direction":  "",
        "ts":  ""
      }
    ]
  }
```

Example:
GET /market/trade?symbol=ethusdt
```json
{
  "status": "ok",
  "ch": "market.btcusdt.trade.detail",
  "ts": 1489473346905,
  "tick": {
    "id": 600848670,
    "ts": 1489464451000,
    "data": [
      {
        "id": 600848670,
        "price": 7962.62,
        "amount": 0.0122,
        "direction": "buy",
        "ts": 1489464451000
      }
    ]
  }
}
```
GET /market/trade?symbol=not-exist
```json
{
  "ts": 1490759506429,
  "status": "error",
  "err-code": "invalid-parameter",
  "err-msg": "invalid symbol"
}
```
#### GET /market/history/trade orderbook

Request:

| Param   | required  | data type    | description   | default   | value range    |
| ------- | ----- | ------ | ---- | ----- | ---  |
| symbol   | true  | string | trading asset   |       | btcusdt, bccbtc, rcneth ... |
| size  | false  |integer|      |  1   | [1, 2000]    |

Response:

| Param   | required  | data type   | description  | default   | value range   |
| -------- | ----- | ------ | --------  | ----- | ----  |
| status   | true  | string |    |    | ok, error   |
| ch     | true | string | channel, format： market.$symbol.trade.detail  |    |
| ts    | true  |integer|  timestamp  |    |      |
| data  | true  | object |     |    |    |

data ：

```json
  "data": {
    "id":  
    "ts":  
    "data": [
      {
        "id":  
        "price":  
        "amount":  
        "direction":  
        "ts":  
      }
    ]
  }
```

Example:

```
/* GET /market/history/trade?symbol=ethusdt */
{
    "status": "ok",
    "ch": "market.ethusdt.trade.detail",
    "ts": 1502448925216,
    "data": [
        {
            "id": 31459998,
            "ts": 1502448920106,
            "data": [
                {
                    "id": 17592256642623,
                    "amount": 0.04,
                    "price": 1997,
                    "direction": "buy",
                    "ts": 1502448920106
                }
            ]
        }
    ]
}
```

#### GET /market/detail   Market Detail in 24 hours

 Request:

| Param    | required  | data type   | description    | default   | value range  |
| ------- | ----- | ------ | ----- | ----- | ----  |
| symbol    | true  | string | trading asset   |    | btcusdt, bccbtc, rcneth ...|

 Response:

| Param   | required | data type    | description     | value range     |
| ------ | ---- | ------ | ------- | ------  |
| status | true | string |     | "ok" or "error" |
| ts     | true | number | timestamp in millisecond     |      |
| tick   | true | object | Detail      |    |
| ch     | true | string | channel, format： market.$symbol.depth.$type |    |

tick :

```
  "tick": {
    "id":  
    "ts":  
    "amount":  
    "open":  
    "close":  
    "high":  
    "low":  
    "count":  
    "vol":  
  }
```


Example

```
/* GET /market/detail?symbol=ethusdt */
{
  "status": "ok",
  "ch": "market.btcusdt.detail",
  "ts": 1489473538996,
  "tick": {
    "amount": 4316.4346,
    "open": 8090.54,
    "close": 7962.62,
    "high": 8119.00,
    "ts": 1489464451000,
    "id": 1489464451,
    "count": 9595,
    "low": 7875.00,
    "vol": 34497276.905760
  }
}

/* GET /market/detail?symbol=not-exists */
{
  "ts": 1490759594752,
  "status": "error",
  "err-code": "invalid-parameter",
  "err-msg": "invalid symbol"
}
```

### Public API


####  GET /v1/common/symbols     Get all the trading assets in huobi.pro
####  GET /v1/hadax/common/symbols  Get all the trading assets in hadax.com

Request:
none

Response:

| Param    | required | data type    | description    | value range |
| -------------- | ---- | ------ | ----- | ---- |
| base-currency  | true | string |    |      |
| quote-currency | true | string |   |      |
| price-precision | true | string |   |      |
| amount-precision | true | string |   |      |
| symbol-partition | true | string |   | main ,innovation ,bifurcation  |

 Example:

```
/* GET /v1/common/symbols */
{
  "status": "ok",
  "data": [
    {
      "base-currency": "eth",
      "quote-currency": "usdt",
      "symbol": "ethusdt"
    }
    {
      "base-currency": "etc",
      "quote-currency": "usdt",
      "symbol": "etcusdt"
    }
  ]
}
```

####  GET /v1/common/currencys     Get currencys supported in huobi.pro
####  GET /v1/hadax/common/currencys    Get currencys supported in hadax.com

 Request:

none

 Response:

```
currency list
```

Example:

```
/* GET /v1/common/currencys */
{
  "status": "ok",
  "data": [
    "usdt",
    "eth",
    "etc"
  ]
}
```

####  GET /v1/common/timestamp    Get system timestamp

Request:

none

 Response:

```
system timestamp
```

Example

```
/* GET /v1/timestamp */
{
  "status": "ok",
  "data": 1494900087029
}
```

### Account API

####  GET /v1/account/accounts Get all the accounts (Pro and HADAX share the same account-id)

Request:



Response:

| Param  | required | data type    | description   | value range    |
| ----- | ---- | ------ | ----- | ----  |
| id    | true | long   | account-id |    |
| state | true | string |    | working , lock  |
| type  | true | string |     | spot, margin    |

Example:

```
/* GET /v1/account/accounts */
{
  "status": "ok",
  "data": [
    {
      "id": 100009,
      "type": "spot",
      "state": "working",
      "user-id": 1000
    }
  ]
}
```

####  GET /v1/account/accounts/{account-id}/balance     Get balance in huobi.pro
####  GET /v1/hadax/account/accounts/{account-id}/balance    Get balance in hadax.com

Request

| Param   | required | data type    | description   | default  | value range |
| ---------- | ---- | ------ | --------------- | ---- | ---- |
| account-id | true | string | account-id, not UID, filled in the methos path |      |      |

* Please get your accountid by 'GET /v1/account/accounts'.

Response:

| Param  | required  | data type    | description    | value range   |
| ----- | ----- | ------ | ----- | ----- |
| id    | true  | long   |   |      |
| state | true  | string |    | working, lock  |
| type  | true  | string |     | spot, margin             |
| list  | false | Array  |   |     |

list

| Param   | required | data type    | description   | value range    |
| -------- | ---- | ------ | ---- |  ------ |
| balance  | true | string |     |    |
| currency | true | string |     |    |
| type     | true | string |      | trade ,frozen  |

Example:
GET /v1/account/accounts/{account-id}/balance
```json
{
  "status": "ok",
  "data": {
    "id": 100009,
    "type": "spot",
    "state": "working",
    "list": [
      {
        "currency": "usdt",
        "type": "trade",
        "balance": "500009195917.4362872650"
      },
      {
        "currency": "usdt",
        "type": "frozen",
        "balance": "328048.1199920000"
      },
     {
        "currency": "etc",
        "type": "trade",
        "balance": "499999894616.1302471000"
      },
      {
        "currency": "etc",
        "type": "frozen",
        "balance": "9786.6783000000"
      }
     {
        "currency": "eth",
        "type": "trade",
        "balance": "499999894616.1302471000"
      },
      {
        "currency": "eth",
        "type": "frozen",
        "balance": "9786.6783000000"
      }
    ],
    "user-id": 1000
  }
}
```

## Trade API

#### POST /v1/order/orders/place  Make an order in huobi.pro
#### POST /v1/hadax/order/orders/place Make an order in hadax.com

Request

| Param   | required  | data type      | description    | default  | value range    |
| ----- | ----- | ------ | --------  | ---- | -------  |
| account-id | true  | string |  accountid in ‘spot’ for spot trade, ‘margin’ for margin trade |      |     |
| amount     | true  | string | Amount in buy-limit or sell-limitorder. It presents how much quote-currency you trade in buy-market order, and how many base-currency you trade in sell-market order |   |   |
| price      | false | string | don't use this param in buy-market or sell-market order   |      |       |
| source     | false | string |  'api' for spot trade and 'margin-api' for margin trade |    |
| symbol     | true  | string | trading asset    |      | btcusdt, bccbtc, rcneth ...   |
| type       | true  | string |      |    | buy-market , sell-market , buy-limit , sell-limit , buy-ioc, sell-ioc,  buy-limit-maker, sell-limit-maker |

**buy-limit-maker**

When a user place a buy_limit_maker order, if the order price >= the actual top sell price, the order will be submitted and then be rejected by the system. If the order price < the actual top sell price, then the order will be submitted and accepted by the system.

**sell-limit-maker**

When a user place a sell_limit_maker order, if the order price <= the actual top buy price, the order will be submitted and then be rejected by the system. If the order price > the actual top buy price, then the order will be submitted and accepted by the system.


Response:

| Param | required | data type  | description   | value range |
| ---- | ---- | ---- | ---- | ---- |
| data | false | string | order id  |      |

Example:  
POST /v1/order/orders/place
```json
{
   "account-id": "100009",
   "amount": "10.1",
   "price": "100.1",
   "source": "api",
   "symbol": "ethusdt",
   "type": "buy-limit"
 } */
{
  "status": "ok",
  "data": "59378"
}
```

####  GET /v1/order/openOrders Provide open orders of a symbol for an account

#### Request parameter(s):
When neither account-id nor symbol defined in the request, the system will return all open orders (max 500) for all symbols and all accounts of the user, sorted by order ID in descending

| Parameter     | Required | Data Type    | Description      | default value  | Value Range |
| -------- | ---- | ------ | ------------ | ---- | ---- |
| account-id | true | string | Account ID |      |  |
| symbol | true | string | Instrument symbol |      |    |
| side | false | string | The side of the orders |      |   “buy” or “sell”, if no side defined, will return all open orders of the account  |
| size | false | int | The number of records to return |   10   |    [0,500]  |

####  Response:

| Parameter | Required | Data Type   | Description    | Value Range |
| ---- | ---- | ------ | ----- | ---- |
| id | true | long | Order ID |  |
| symbol| true | string | Instrument symbol |     |
| account-id| true | string | Account ID |     |
| price | true | string | Order price |    |
| created-at | true | int | Order Created Time (ms) |  |
| type | true | string | Order type |  buy-market, sell-market, buy-limit, sell-limit, buy-ioc, sell-ioc  |
| filled-amount | true | string | The order filled amount. When an order is partially matched, this field will be the filled amount. And amount-filledAmount would be the order remaining amount. |  For the orders not partial filled, the value will be 0.   |
| filled-cash-amount | true | string | The order filled value. (filled amount*order price) |  For the orders not partial filled, the value will be 0.   |
| filled-fees | true | string | The fee for the filled amount. |  For the orders not partial filled, the value will be 0.  |
| source | true | string | Order source type |  sys, web, api, app  |
| state | true | string | Current Order state |  Submitted, partial-filled, cancelling. ** Cancelling is an interim state between cancel request submitted and cancel confirmed. Once cancellation confirmed, the order is no longer an ‘open’ order, so will not be included in the response.  |

####  Response Sample:
GET /v1/orders/openOrders
```json

{
  "status": "ok",
  "data": [
    {
      "id": 5454937,
      "symbol": "ethusdt",
      "account-id": 30925,
      "amount": "1.000000000000000000",
      "price": "0.453000000000000000",
      "created-at": 1530604762277,
      "type": "sell-limit",
      "filled-amount": "0.0",
      "filled-cash-amount": "0.0",
      "filled-fees": "0.0",
      "source": "web",
      "state": "submitted"
    }
  ]
}
```

####  POST /v1/order/orders/{order-id}/submitcancel  Request for cancelling an order

Request:

| Param     | required | data type      | description           | default  | value range |
| -------- | ---- | ------ | ------------ | ---- | ---- |
| order-id | true | string | order id,filled in method path  |      |      |

Response:

| Param | required | data type    | description    | value range |
| ---- | ---- | ------ | ----- | ---- |
| data | true | string | order id |      |

Example:
POST /v1/order/orders/{order-id}/submitcancel
```json
{
  "status": "ok",
  "data": "59378"
}
```

#### POST /v1/order/orders/batchcancel  Batch Cancel

Request:

| Param  | required | data type    | description   | default  | value range |
| ---- | ---- | ---- | ----  | ---- | ---- |
| order-ids | true | list | order id list |  | maximum is 50 |

Response:

| Param | required  | data type  | description    | value range |
| ---- | ----- | ---- | ----- | ---- |
| data | false | map | status list |      |

Example:
POST /v1/order/orders/batchcancel
```json
{
  "order-ids": [
    "1", "2", "3"
  ]
}

-----

{
  "status": "ok",
  "data": {
    "success": [
      "1",
      "3"
    ],
    "failed": [
      {
        "err-msg": "记录无效",
        "order-id": "2",
        "err-code": "base-record-invalid"
      }
    ]
  }
}
```

####  POST  /v1/order/orders/batchCancelOpenOrders  Cancel a batch of orders with certain criteria

Request Parameter(s):

| Parameter | Required | Data Type   | Description   | Default Value | Value Range |
| -------- | ---- | ------ | ------------ | ---- | ---- |
| account-id | true  | string | Account ID     |     |      |
| symbol     | false | string | Instrument symbol  |      |   One instrument symbol. When no symbol defined, will return open orders of the account for all symbols.  |
| side | false | string | The side of the orders |      |   “buy” or “sell”, if no side defined, will return all open orders of the account  |
| size | false | int | The number of records to return |  100 |   [0,100]   |

Response:

| Param     | required  | data type    | description   | value range     |
| ---- | ---- | ------ | ----- | ---- |
| success-count | true | int | Number of orders successfully cancelled. |     |
| failed-count | true | int | Number of orders failed in cancellation |     |
| next-id | true | long | The next order id which meets cancellation request criteria |    |

####  Response Example:
POST /v1/order/orders/batchCancelOpenOrders
```json
{
  "status": "ok",
  "data": {
    "success-count": 2,
    "failed-count": 0,
    "next-id": 5454600
  }
}
```


####  GET /v1/order/orders/{order-id}    Get Order Info

Request:

| Param     | required | data type   | description   | default  | value range |
| -------- | ---- | ------ | -----  | ---- | ---- |
| order-id | true | string | order id,filled in method path |      |      |

Response:

| Param     | required  | data type    | description   | value range     |
| ----------------- | ----- | ------ | -------  | ----  |
| account-id        | true  | long   |      |       |
| amount            | true  | string |               |    |
| canceled-at       | false | long   |     |     |
| created-at        | true  | long   |    |   |
| field-amount      | true  | string |     |     |
| field-cash-amount | true  | string |       |      |
| field-fees        | true  | string |   |     |
| finished-at       | false | long   |      |     |
| id                | true  | long   |     |     |
| price             | true  | string |         |     |
| source            | true  | string |   | api |
| state             | true  | string |     | pre-submitted , submitting , submitted , partial-filled , partial-canceled , filled, canceled |
| symbol            | true  | string | trading asset   | btcusdt, bccbtc, rcneth ... |
| type              | true  | string |      | buy-market, sell-market, buy-limit, sell-limit, buy-ioc, sell-ioc |


Example:

```
/* GET /v1/order/orders/{order-id} */
{
  "status": "ok",
  "data": {
    "id": 59378,
    "symbol": "ethusdt",
    "account-id": 100009,
    "amount": "10.1000000000",
    "price": "100.1000000000",
    "created-at": 1494901162595,
    "type": "buy-limit",
    "field-amount": "10.1000000000",
    "field-cash-amount": "1011.0100000000",
    "field-fees": "0.0202000000",
    "finished-at": 1494901400468,
    "user-id": 1000,
    "source": "api",
    "state": "filled",
    "canceled-at": 0,
    "exchange": "huobi",
    "batch": ""
  }
}
```

####  GET /v1/order/orders/{order-id}/matchresults  Get Order matchresult

Request:

| Param  | required | data type   | description  | default  | value range |
| -------- | ---- | ------ | -----  | ---- | ---- |
| order-id | true | string | order id,filled in method path |      |      |

Response:

| Param    | required | data type    | description   | value range     |
| ------------- | ---- | ------ | -------- | -------- |
| created-at    | true | long   |      |    |
| filled-amount | true | string |     |    |
| filled-fees   | true | string |     |     |
| id            | true | long   |   |     |
| match-id      | true | long   |    |     |
| order-id      | true | long   |    |      |
| price         | true | string |   |    |
| source        | true | string |   | api      |
| symbol        | true | string | trading asset   | btcusdt, bccbtc, rcneth ...  |
| type          | true | string |     | buy-market, sell-market, buy-limit, sell-limit, buy-ioc, sell-ioc |

Example:

```
/* GET /v1/order/orders/{order-id}/matchresults */
{
  "status": "ok",
  "data": [
    {
      "id": 29553,
      "order-id": 59378,
      "match-id": 59335,
      "symbol": "ethusdt",
      "type": "buy-limit",
      "source": "api",
      "price": "100.1000000000",
      "filled-amount": "9.1155000000",
      "filled-fees": "0.0182310000",
      "created-at": 1494901400435
    }
  ]
}
```

####  GET /v1/order/orders  Get Order list

Request:

| Param   | required  | data type      | description   | default  | value range   |
| ---------- | ----- | ------ | ------  | ---- | ----  |
| symbol     | true  | string | trading asset      |      |btcusdt, bccbtc, rcneth ...  |
| types      | false | string | separate by ',' |      | buy-market, sell-market, buy-limit, sell-limit, buy-ioc, sell-ioc |
| start-date | false | string | yyyy-mm-dd |      |      |
| end-date   | false | string |  yyyy-mm-dd |      |    |
| states     | true  | string | separate by ','  |      | pre-submitted, submitted , partial-filled , partial-canceled , filled , canceled |
| from       | false | string |    |      |    |
| direct     | false | string |    |      | prev  ,next      |
| size       | false | string |        |      |         |

Response:

| Param    | required  | data type    | description   | value range   |
| ----------------- | ----- | ------ | ----------------- | ----  |
| account-id        | true  | long   |    |     |
| amount            | true  | string |    |   |
| canceled-at       | false | long   |   |    |
| created-at        | true  | long   |  |    |
| field-amount      | true  | string |    |    |
| field-cash-amount | true  | string |    |    |
| field-fees        | true  | string |   |       |
| finished-at       | false | long   |      |   |
| id                | true  | long   |      |    |
| price             | true  | string |    |    |
| source            | true  | string |     | api  |
| state             | true  | string |      | pre-submitted , submitting , submitted , partial-filled , partial-canceled , filled, canceled |
| symbol            | true  | string | trading asset    | btcusdt, bccbtc, rcneth ... |
| type              | true  | string |     | submit-cancel  ,buy-market, sell-market, buy-limit, sell-limit, buy-ioc, sell-ioc |


Example:

```
/* GET /v1/order/orders */
{
  "status": "ok",
  "data": [
    {
      "id": 59378,
      "symbol": "ethusdt",
      "account-id": 100009,
      "amount": "10.1000000000",
      "price": "100.1000000000",
      "created-at": 1494901162595,
      "type": "buy-limit",
      "field-amount": "10.1000000000",
      "field-cash-amount": "1011.0100000000",
      "field-fees": "0.0202000000",
      "finished-at": 1494901400468,
      "user-id": 1000,
      "source": "api",
      "state": "filled",
      "canceled-at": 0,
      "exchange": "huobi",
      "batch": ""
    }
  ]
}
```

####  GET /v1/order/matchresults    Get order matchresults

Request:

| Param   | required  | data type   | description   | default  | value range    |
| ---------- | ----- | ------ | ------ | ---- | ----------- |
| symbol     | true  | string | trading asset   | btcusdt, bccbtc, rcneth ... |    |
| types      | false | string | separate by ','   |   All   | buy-market, sell-market, buy-limit, sell-limit, buy-ioc, sell-ioc |
| start-date | false | string |  yyyy-mm-dd |   -61 days   | [-61day, now] |
| end-date   | false | string |  yyyy-mm-dd |   Now   |  [start-date, now]   |
| from       | false | string |    |  max ID(order record ID)   |     |
| direct     | false | string |    |   next   | prev ,next   |
| size       | false | string |    |   100   |   <=100   |

Response:

| Param   | required | data type    | description   | value range   |
| ------------- | ---- | ------ | -------- | ------- |
| created-at    | true | long   |    |    |
| filled-amount | true | string |    |    |
| filled-fees   | true | string |     |    |
| id            | true | long   |   |    |
| match-id      | true | long   |  |    |
| order-id      | true | long   |  |    |
| price         | true | string |    |    |
| source        | true | string |    | api   |
| symbol        | true | string | trading asset      | btcusdt, bccbtc, rcneth ...  |
| type          | true | string |      | buy-market, sell-market, buy-limit, sell-limit, buy-ioc, sell-ioc |

Example:

```
/* GET /v1/orders/matchresults */
{
  "status": "ok",
  "data": [
    {
      "id": 29555,
      "order-id": 59378,
      "match-id": 59335,
      "symbol": "ethusdt",
      "type": "buy-limit",
      "source": "api",
      "price": "100.1000000000",
      "filled-amount": "0.9845000000",
      "filled-fees": "0.0019690000",
      "created-at": 1494901400487
    }
  ]
}
```

## MARGIN API (Please fill in the field 'source' in method '/v1/order/orders/place' with 'margin-api', and the field 'accountid' should be a 'margin' accountid queried in method '/v1/account/accounts')

` only usdt-trading assets(except btc) are supported  `

#### POST /v1/dw/transfer-in/margin  Transfer asset from spot account to margin account
#### POST /v1/dw/transfer-out/margin  Transfer asset from margin account to spot account

Request

| Param  | required  | data type      | description     | default  | value range |
| ----- | ----- | ------ | ----- | ---- | -------- |
| symbol | true  | string | trading asset like 'btcusdt'  |      |      |
| currency  | true  | string |   |      |    |
| amount      | true | string |      |      |    |


Response:

| Param | required | data type  | description   | value range |
| ---- | ---- | ---- | ---- | ---- |
| data | true | long | transfer id |      |

Example:

```
/* POST /v1/dw/transfer-in/margin
{
  "symbol": "ethusdt",
  "currency": "eth",
  "amount": "1.0"
} */
{
  "status": "ok",
  "data": 1000
}
```


#### POST /v1/margin/orders  Margin application

Request

| Param   | required  | data type      | description    | default  | value range  |
| ----- | ----- | ------ |  --------------- | ---- | -------- |
| symbol | true  | string |    |      |      |
| currency  | true  | string |   |      |    |
| amount  | true | string |        |      |   |


Response:

| Param | required | data type  | description   | value range |
| ---- | ---- | ---- | ---- | ---- |
| data | true | long | margin order id |      |

Example:

```
/* POST /v1/margin/orders {
   "amount": "10.1",
   "symbol": "ethusdt",
   "currency": "eth"
} */
{
  "status": "ok",
  "data": 59378
}
```


#### POST /v1/margin/orders/{order-id}/repay     Repayment

Request

| Param       | required  | data type      | description   | default  | value range   |
| ----- | ----- | ------ | -----  | ---- | --------- |
| order-id | true  | long | margin order id, filled in method path  |      |      |
| amount   | true | string |   |      |       |


Response:

| Param | required | data type  | description   | value range |
| ---- | ---- | ---- | ---- | ---- |
| data | true | long | margin order id  |      |

Example:

```
/* POST /v1/margin/orders/59378/repay {
   "amount": "10.1"
}*/
{
  "status": "ok",
  "data": 59378
}
```


#### GET /v1/margin/loan-orders  Margin order list

Request

| Param       | required  | data type      | description    | default  | value range   |
| ----- | ----- | ------ |  -------  | ---- |  ----  |
| symbol | true | string |    |  |  |
| start-date | false | string |  yyyy-mm-dd  |     |    |
| end-date | false | string |  yyyy-mm-dd  |    |    |
| states | false | string |   |     |   |
| from   | false | string |    |    |     |
| direct | false | string |      |    | prev  ,next  |
| size   | false | string |    |    |     |


Response:

| Param | required | data type  | description | value range |
|-----|-----|-----|-----|------|
|   id  |  true  |  long  |    | |
|   user-id  |  true  |  long  |  | |
|   account-id  |  true  |  long  |    | |
|   symbol  |  true  |  string  |    | |
|   currency  |  true  |  string  |    | |
| loan-amount | true |string |   | |
| loan-balance | true | string |   | |
| interest-rate | true | string |   | |
| interest-amount | true | string |   | |
| interest-balance | true | string |   | |
| created-at | true | long |   | |
| accrued-at | true | long |   | |
| state | true | string |   |created  ,accrual ,cleared ,invalid |

Example:

```
/* GET /v1/margin/orders?symbol=btcusdt

*/
{
    "status": "ok",
    "data": [
        {
            "currency": "btc",
            "symbol": "btcusdt",
            "accrued-at": 1511760873587,
            "loan-amount": "0.333000000000000000",
            "loan-balance": "0.333000000000000000",
            "interest-balance": "0.000000000000000000",//unrepaid
            "created-at": 1511762673587,
            "interest-amount": "0.000000000000000000",
            "interest-rate": "0.000000000000000000",
            "account-id": 18298,
            "user-id": 111899,
            "updated-at": 1511762673654,
            "id": 232,
            "state": "accrual"
        }
      ]
}

```


#### GET /v1/margin/accounts/balance?symbol={symbol}  Margin account info

Request

| Param | required | data type  | description | default | value range |
|-----|-----|-----|-----|-----|-----|
| symbol | false | string |  filled in method path   |  |  |


Response:

| Param | required | data type  | description | value range |
|-----|-----|-----|-----|------|
| symbol  |  true  |  string  |  trading asset | |
| state  |  true  |  string  |    |working,fl-sys,fl-mgt,fl-end |
| risk-rate | true | object |   | |
| fl-price | true | string |   | |
| list | true | array | subaccount list   | |

Example:

```
/* GET /v1/margin/accounts/balance?symbol=btcusdt

*/
{
    "status": "ok",
    "data": [
        {
            "id": 18264,
            "type": "margin",
            "state": "working",
            "symbol": "btcusdt",
            "fl-price": "0",
            "fl-type": "safe",
            "risk-rate": "475.952571086994250554",
            "list": [
                {
                    "currency": "btc",
                    "type": "trade",
                    "balance": "1168.533000000000000000"
                },
                {
                    "currency": "btc",
                    "type": "frozen",
                    "balance": "0.000000000000000000"
                },
                {
                    "currency": "btc",
                    "type": "loan",
                    "balance": "-2.433000000000000000"
                },
                {
                    "currency": "btc",
                    "type": "interest",
                    "balance": "-0.000533000000000000"
                },
                {
                    "currency": "usdt",
                    "type": "trade",
                    "balance": "1313.534000000000000000"
                },
                {
                    "currency": "usdt",
                    "type": "frozen",
                    "balance": "0.000000000000000000"
                },
                {
                    "currency": "usdt",
                    "type": "loan",
                    "balance": "-140.234099999999999920"
                },
                {
                    "currency": "usdt",
                    "type": "interest",
                    "balance": "-0.931206660000000000"
                },
                {
                    "currency": "btc",
                    "type": "transfer-out-available",
                    "balance": "1163.872174670000000000"
                },
                { "currency": "usdt",
                    "type": "transfer-out-available",
                    "balance": "1313.534000000000000000"
                },
                {
                    "currency": "btc",
                    "type": "loan-available",
                    "balance": "8161.876538350676000000"
                },
                {
                    "currency": "usdt",
                    "type": "loan-available",
                    "balance": "49859.765900000000000080"
                }
            ]
        }
    ]
}

```


## Withdraw API

> **Only supported the existed addresses in your withdraw address list**


####  POST /v1/dw/withdraw/api/create   Create a withdraw application

Request:

| Param       | required | data type      | description     | default  | value range |
| ---------- | ---- | ------ | ------ | ---- | ---- |
| address | true | string   |   |      |      |
| amount     | true | string |    |      |      |
| currency | true | string |      |   |  btc, ltc, bcc, eth, etc ...  |
| fee     | false | string |    |      |      |
| addr-tag|false | string | only in xrp，xem，bts，steem，eos，xmr |  | example, "123" |

Response:

| Param | required  | data type  | description   | value range |
| ---- | ----- | ---- | ---- | ---- |
| data | false | long | withdraw id |      |

Example:
/* POST /v1/dw/withdraw-virtual/create \*/
```json

{
  "address": "0xde709f2102306220921060314715629080e2fb77",
  "amount": "0.05",
  "currency": "eth",
  "fee": "0.01"
}
{
  "status": "ok",
  "data": 700
}
```

####  POST /v1/dw/withdraw-virtual/{withdraw-id}/cancel Cancel a withdraw

Request:

| Param        | required | data type    | description | default  | value range |
| ----------- | ---- | ---- | ------------ | ---- | ---- |
| withdraw-id | true | long | withdraw id,filled in method path |      |      |

Response:

| Param | required  | data type  | description    | value range |
| ---- | ----- | ---- | ----- | ---- |
| data | false | long | withdraw id |      |

Example:
/* POST /v1/dw/withdraw-virtual/{withdraw-id}/cancel \*/
```json

{
  "status": "ok",
  "data": 700
}
```

####  GET /v1/query/deposit-withdraw   Get Deposit Or Withdraw Records

Request:

| Param        | required | data type    | description | default  | value range |
| ----------- | ---- | ---- | ------------ | ---- | ---- |
| currency | true | string |   |  |  |
| type | true | string | 'deposit' or 'withdraw'  |     |    |
| from   | true | string |   ID  |    |     |
| size   | true | string |    |    |     |

Response:

| Param | required  | data type  | description    | value range |
|-----|-----|-----|-----|------|
|   id  |  true  |  long  |   | |
|   type  |  true  |  long  |   | 'deposit' 'withdraw' |
|   currency  |  true  |  string  |    | |
| tx-hash | true |string |   | |
| amount | true | long |   | |
| address | true | string |   | |
| address-tag | true | string |   | |
| fee | true | long |   | |
| state | true | string |   |  meanings of states as following tables |
| created-at | true | long |   | |
| updated-at | true | long |   | |

###### withdraw states：

| state | description  |
|--|--|
| submitted |   |
| reexamine |   |
| canceled  |   |
| pass    |   |
| reject  |   |
| pre-transfer | dealing |
| wallet-transfer | sending |
| wallet-reject   |   |
| confirmed      |   |
| confirm-error  |   |
| repealed       |   |

###### deposit states：

| state | description  |
|--|--|
|unknown| |
|confirming| |
|confirmed| |
|safe| |
|orphan| |

Example:
/* GET /v1/query/deposit-withdraw?currency=xrp&type=deposit&from=5&size=12 \*/
```json


{

    "status": "ok",
    "data": [
      {
        "id": 1171,
        "type": "deposit",
        "currency": "xrp",
        "tx-hash": "ed03094b84eafbe4bc16e7ef766ee959885ee5bcb265872baaa9c64e1cf86c2b",
        "amount": 7.457467,
        "address": "rae93V8d2mdoUQHwBDBdM4NHCMehRJAsbm",
        "address-tag": "100040",
        "fee": 0,
        "state": "safe",
        "created-at": 1510912472199,
        "updated-at": 1511145876575
      },

    ]
}

```

### API enhancements to support HB10 ETF purchase and redemption
#### Why change?

The deviations between an ETF’s market price and its underlying value create opportunities for arbitrage for the participants. So, following the launching of HB10 ETF trading, Huobi Pro will launch the ability to create and redeem ETF shares on the effective date.  

#### What are changes?

Method | API |  Description|
-------|------|---------|
GET | /etf/swap/config | New API. This API will support the user to get the basic information of ETF creation and redemption, as well as ETF constituents, including max amount of creation, min amount of creation, max amount of redemption, min amount of redemption, creation fee rate, redemption fee rate, eft create/redeem status, and the constituents. |
POST |  /etf/swap/in | New API. This API is to create certain amount of a given ETF via exchange with corresponding underlying instruments, and user can define the amount and the ETF symbol. |
POST |  /etf/swap/out| New API. This API is to redeem the underlying instruments via exchange with corresponding amount of a given ETF and user can define the amount and the ETF symbol.  |
GET  |  /etf/swap/list| New API. This API will support the user to get the latest creation/redemption transactions, up to 100 records.  |
GET| /quotation/market/history/kline | Exiting API. When symbol=hb10, it will return the open, high, low, close, amount, vol of the net asset value of hb10 ETF, where the amount and vol will be 0. The net asset value of hb10 ETF is calculated every 15 seconds. Other request parameters (period, size) will remain the same.  |

#### DETAILS

#### GET /etf/swap/config

* Request parameter(s)

Parameter| Required| Data Type | Length| Description| Value Range|
-----|-----|-----|------|-------|------|
etf_name| True | String |- | ETF symbol  | hb10|

* Response

Parameter| Required| Data Type | Length| Description| Value Range|
-----------|------------|-----------|------------|----------|--|
purchase_min_amount | True| Int | - | Minimum creation amounts per request |      |
purchase_max_amount  | False| Int | - | Max creation amounts per request  |      |
redemption_min_amount  | True| Int | - |Minimum redemption amounts per request  |      |
redemption_max_amount  | False| Int | - | Max redemption amounts per request  |      |
purchase_fee_rate  | True| double | (5,4)  | Creation fee rate  |      |
redemption_fee_rate  | True| double | (5,4) | Redemption fee rate |      |
etf_status  | True| Int | - | ETF current status | Status: Normal – 1,  Rebalancing Start - 2, Creation and Redemption Suspended-3, Creation Suspended -4, Redemption Suspended – 5  |
unit_price  | True| Array | - | ETF constituents, include the underlying instrument symbols and their respective amounts which compose a unit of ETF.  | The constituents may be adjusted after rebalancing.   |

unit_price

Parameter| Required| Data Type | Length| Description|
-----|-----|-----|------|-------|
currency| True | String |- | Underlying instrument symbol.  |
amount| True | Double |- | Constitutes amount  |

* Response Sample
```json
{
  "code": 200,
  "data": {
    "purchase_min_amount": 10000,
    "purchase_max_amount": 100000,
    "redemption_min_amount": 10000,
    "redemption_max_amount": 10000,
    "purchase_fee_rate": 0.001,
    "redemption_fee_rate": 0.002,
    "etf_status":1,
    "unit_price": [
      {
        "currency": "eth",
        "amount": 19.9
      },
      {
        "currency": "btc",
        "amount": 9.9
      }
    ]
  },
  "message": null,
  "success": true
}
```
#### POST /etf/swap/in          
#### POST /etf/swap/out
* Request Parameter(s)

Parameter| Required| Data Type | Length| Description| Value Range|
-----------|------------|-----------|------------|----------|--|
etf_name  | True| String | - | ETF symbol|    hb10  |
amount  | True| Int | - | Creation amount  (POST /etf/open/purchase_redemption/purchase/save) OR Redemption amount  (POST /etf/open/purchase_redemption/redemption/save) | Please refer to min/max creation amount and min/max redemption amount as indicated in the response of GET /etf/open/purchase_redemption/config/info  for a given ETF  |

* Response

Parameter| Required| Data Type | Length| Description| Value Range|
-----------|------------|-----------|------------|----------|--|
code | True| Int | - | Response code|   Please refer to code table below  |
data | True|   | - |  |     |
message | True|   | - |  |     |
success | True| Boolean | - | The POST request results | True or false. If it’s false, please refer to code for reasons  |

* Response Sample
```json
{
    "code": 200,
    "data": null,
    "message": null,
    "success": true
}
```

* Code Table

Code | Description |
--|--|
200| Normal |
10404|Invalid ETF Symbol |
13403|Insufficient Remaining amount |
13404|etf is not ready for trade |
13405|etf is not available for trade due to config error |
|13406|Not an API user
|13410|Incorrect API Signature
|13500|System Error
|13601|Rebalance：Creation/Redemption Suspended
|13603|Creation/Redemption Suspended – Other reasons
|13604|Creation Suspended
|13605|Redemption Suspended
|13606| Amount incorrect. For the cases when creation amount or redemption amount is not in the range of min/max amount, this code will be returned.

#### GET /etf/list
* Request Parameter(s)

Parameter| Required| Data Type | Length| Description| Value Range|
-----------|------------|-----------|------------|----------|--|
etf_name | True| String | - | ETF symbol |   hb10 |
offset | True|  Int | - | The response starting point (# of records)   | >=0. e.g. when offset=0, it means starting from the latest record|
limit | True|  Int  | - |The records to return |  >0 and <=100  |

* Response

Parameter| Required| Data Type | Length| Description| Value Range|
-----------|------------|-----------|------------|----------|--|
id | True| Long | - |Action ID  |     |
gmt_created | True| Long | - |Action Timestamp (ms) |     |
currency | True| String | - |ETF symbol  |     |
amount | True| Double | - |ETF amount  |     |
type | True| Int | - |Action Type|    Creation – 1, Redemption – 2  |
status | True| Int | - |Action status |   Success – 2  |
detail | True| Detail[] | - |The action details  |     |

Detail

Parameter| Required| Data Type | Length| Description|
-----|-----|-----|------|-------|
used_ currency_list| Ture| Currency[]| -| If ‘Type’ = 1 (creation), then this parameter is the list and amount of underlying assets used for ETF creation. If ‘Type’=2 (redemption), then this parameter is the amount of ETF used for redemption.  |
rate|Ture| double| -|Fee Rate |
fee|Ture| double| -|The actual fee amount |
point_card_amount| Ture| double|-|Discount from point card |
obtain_ currency_list| Ture| Currency[]| -|If ‘Type’ = 1 (creation), then this parameter is the amount for ETF created.  If ‘Type’=2 (redemption), then this parameter is the list and amount of underlying assets obtained. |

Currency

Parameter| Required| Data Type | Length| Description|
-----|-----|-----|------|-------|
currency| True | String |- | Asset Symbol  |
amount| True | Double |- | Asset Amount  |

* Response Sample
```json
{
  "code": 200,
  "data": [
    {
      "id": 112222,
      "gmt_created": 1528855872323,
      "currency": "hb10",
      "amount": 11.5,
      "type": 1,
      "status": 2,
      "detail": {
        "used_ currency_list": [
          {
            "currency": "btc",
            "amount": 0.666
          },
          {
            "currency": "eth",
            "amount": 0.666
          }
        ],
        "rate": 0.002,
        "fee": 100.11,
        "point_card_amount":1.0,
        "obtain_ currency_list": [
          {
            "currency": "hb10",
            "amount": 1000
          }
        ]
      }
    },
    {
      "id": 112223,
      "gmt_created": 1528855872323,
      "currency": "hb10",
      "amount": 11.5,
      "type": 2,
      "status": 1,
      "detail": {
        "used_ currency_list": [
          {
            "currency": "btc",
            "amount": 0.666
          },
          {
            "currency": "eth",
            "amount": 0.666
          }
        ],
        "rate": 0.002,
        "fee": 100.11,
        "point_card_amount":1.0,
        "obtain_ currency_list": [
          {
            "currency": "hb10",
            "amount": 1000
          }
        ]
      }
    }
  ],
  "message": null,
  "success": true
}
```
#### GET /quotation/market/history/kline  Get ETF net asset value Data

Request:

| Param | required  | data type      | description  | default   | value range  |
| ------------ | ----- | ------ | ----- | ----- | ------- |
| symbol       | true  | string | trading asset  |  | hb10   |
| period       | true  | string |    |    | 1min, 5min, 15min, 30min, 60min, 1day, 1mon, 1week, 1year |
| limit | false | integer |   | 150 | [1,2000] |

Response:

| Param   | required | data type    | description   | value range   |
| ------ | ---- | ------ | ----------- | ------ |
| status | true | string |      | "ok" , "error" |
| ts     | true | number | timestamp in millisecond  |    |
| tick   | true | object |     |      |
| ch     | true | string |   channel,format： market.$symbol.kline.$period |    |

data :

```json
  "data": [
{
    "id": "kline id",
    "amount": "trading amount = 0",
    "open": "Open price",
    "close": "Closing price.If this is a latest kline,this shows the current price",
    "low":  "",
    "high":"",
    "vol": "volume = 0"
  }
]
```

Example:
/* GET /quotation/market/history/kline?period=1day&limit=200&symbol=hb10\*/
```json

{
  "status": "ok",
  "ch": "market.hb10.kline.1day",
  "ts": 1499223904680,
  "data": [
{
    "id": 1499184000,
    "amount": 0,
    "open": 0.7724,
    "close": 0.7707,
    "low": 0.7693,
    "high": 0.7707,
    "vol": 0
  },

]
}
```

## SUB-UID Related

#### POST /v1/subuser/transfer
#### Master UID to transfer funds between Master UID and SUB-UID.
* Request Parameter(s)

| Param   | required | data type    | description   | value range   |
| ------ | ---- | ------ | ----------- | ------ |
sub-uid	|True|	Long|sub user id	|-|
currency|True|	String|currency type	|-|
amount|True|	Decimal|transfer amount|-|
type|True|String|transfer type|"master-transfer-in"（transfer fund from sub user spot account to the master user spot account)/ "master-transfer-out" （transfer fund from the master user spot account to sub users spot account）/ "master-point-transfer-in" （transfer Huobi Points from a sub user to master user)/ "master-point-transfer-out"（transfer Huobi Points from a sub user to master user）|


* Response

| Param   | required | data type    | description   | value range   |
| ------ | ---- | ------ | ----------- | ------ |
data | True| Int | - | Transfer order id|   - |
status | True|   | - |  status | "OK" or "Error"    |

* Response Sample
```json
{
"data":123456,
 "status":"ok"
}

```
* Error code description

error_code|	Description|	Type|
------------------|------------|-----------|
account-transfer-balance-insufficient-error|	insufficient balance|	String|
base-operation-forbidden|Operations not allowed due to the wrong relationship between master and sub user|String|

#### GET /v1/subuser/aggregate-balance
#### Master UID to query the aggregate balance of all sub-uid for each currency type.  

* Request Parameter

N/A

* Response

Param   | required | data type    | description   | value range   |
-----------|------------|-----------|------------|----------|
status | True|   | Status| "OK" or "Error"    |
data | True| list | - |   - |

data

Param   | required | data type    | description   | value range   |
-----------|------------|-----------|------------|----------|
currency|	True|	String|	Currency type |-|
balance|	True|	String|	Aggregate Balance of all sub-uids (including frozen and trade balance)|-|

* Response Sample
```json
{
  "status": "ok",
  "data": [
      {
        "currency": "eos",
        "balance": "1954559.809500000000000000"
      },
      {
        "currency": "btc",
        "balance": "0.000000000000000000"
      },
      {
        "currency": "usdt",
        "balance": "2925209.411300000000000000"
      },

   ]
}
```

#### GET /v1/account/accounts/{sub-uid}
#### Master UID to query account balance of a specific sub-uid

* Request Parameter(s)

Param   | required | data type    | description   | value range   |
-----------|------------|-----------|------------|----------|
sub-uid|True|	Long|sub user UID|-|

* Response

Param   | required | data type    | description   | value range   |
-----------|------------|-----------|------------|----------|
id|	-	|Long|	account id|-|
type|	-	|String|account type|	"spot" or "point"|
list|	-	|Object|-|-|

list

| Param   | required | data type    | description   | value range   |
|-----------|------------|-----------|------------|----------|
currency|	-	|String|currency type	|-|
type|	-	|String|sub account type	|"trade" or "frozen"|
balance|-|Decimal|account balance	|-|

* Response sample

```json
{
       "status": "ok",
	"data": [
	{
	   "id": 9910049,
	   "type": "spot",
	   "list": [
             {
	       "currency": "btc",
	        "type": "trade",
	        "balance": "1.00"
	     },
	     {
	       "currency": "eth",
	       "type": "trade",
	       "balance": "1934.00"
	     }
	     ]
	},
	{
	"id": 9910050,
	"type": "point",
	"list": []
	}
	]
}
```
