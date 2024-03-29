### API List

|**TYPE**|   **Market Type**   |**Context** |**Req Method**   |**Desc**                     |**Auth Required**        |
|----------- |------------------ |------------------------------------------------------------------------------------------------------------------------------------------------------------------- |---------- |---------------------------- |--------------|
|Websocket   |Market Interface |         market.$symbol.kline.$period|                                                                                                            sub        |Subscribe Candlestick Data              |No|
|Websocket   |Market Interface|           market.$symbol.kline.$period|                                                                                                                    req        |Request Candlestick Data              |No|
|Websocket   |Market Interface           |market.$symbol.depth.$type |                                                                                                                     sub        |Subscribe Market Depth Data        |No|
|Websocket   |Market Interface           |market.$symbol.detail |                                                                                                                     sub        |Subscribe Trade Detail Data       |No|
|Websocket   |Market Interface           |market.$symbol.trade.detail |                                                                                                                     req        |Request Trade Detail Data        |No|
|Websocket   |Market Interface           |market.$symbol.trade.detail|        sub |Subscribe Trade Detail Data   | No  |


Market Interface
--------

#### Subscribe Candlestick Data

After establish connection with WebSocket API, describing data formed as following to Server：

```json
{
    "sub": "market.$symbol.kline.$period",
    "id": "id generate by client"
}
```
|**Parameter**|   **Name**  | **Type**  | **Description** |  **Default Value**  | **Range**|
|--------------| -----------------| ---------- |----------| ------------| --------------------------------------------------------------------------------|
|symbol  |       true         |  string  |   Contract Symbol   |               |e.g. "BTC_CQ" represents BTC “this_week”、"BTC_CQ" represents BTC “next_week”、"BTC_CQ" represents BTC “quarter“|
|period    |     true          | string   | Kline Period |            |1min, 5min, 15min, 30min, 60min, 1day, 1mon, 1week, 1year|

Example for correct subscription parameter：

```json
{
"sub": "market.BTC_CQ.kline.1min",
"id": "id1"
}
```

Example for correct subscription return parameter

```json
{
"id": "id1",
"status": "ok",
"subbed": "market.BTC_CQ.kline.1min",
"ts": 1489474081631
}
```

whenever KLine updated，client will receive the data，for example

```json
{
 "ch": "market.BTC_CQ.kline.1min",
 "ts": 1489474082831,
 "tick":
    {
     "id": 1489464480,
     "vol": 100,
     "count": 0,
     "open": 7962.62,
     "close": 7962.62,
     "low": 7962.62,
     "high": 7962.62,
     "amount": 0.3
    }
}
`amount` is BTC quantity
tick 说明
```
```json
"tick":
  {
   "id": "Kline id",
   "vol": "transaction (contract)",
   "count": "transaction count",
   "open": "opening price",
   "close": "closing price, when Kline is the last one, the price is the latest price",
   "low": "lowest price",
   "high": "highest price",
   "amount": "BTC, sum(denomination of the contract* transaction amount/transaction price)"
}
```
**Example for mistaken subscription**

Mistaken subscription (mistaken symbol)
```json
{
    "sub": "market.invalidsymbol.kline.1min",
    "id": "id2"
}
```
Example for failed subscription and return parameter
```json
{
    "id": "id2",
    "status": "error",
    "err-code": "bad-request",
    "err-msg": "invalid topic market.invalidsymbol.kline.1min",
    "ts": 1494301904959
}
```
Mistaken subscription (mistaken topic)
```json
{
    "sub": "market.BTC_CQ.kline.3min",
    "id": "id3"
}
```
Example for failed subscription and return parameter
```json
{
    "id": "id3",
    "status": "error",
    "err-code": "bad-request",
    "err-msg": "invalid topic market.BTC_CQ.kline.3min",
    "ts": 1494310283622
}
```
#### Request Candlestick Data </a>

Response：

```json
{
    "req": "market.$symbol.kline.$period",
    "id": "id generated by client",
    "from": "optional, type: long, 2017-07-28T00:00:00+08:00 to 2050-01-01T00:00:00+08:00，unit：second",
    "to": "optional, type: long, 2017-07-28T00:00:00+08:00 to 2050-01-01T00:00:00+08:00，unit：second，must larger than from"
}
```
|**Parameter**|   **Name**  | **Type**  | **Description** |  **Default Value**  | **Range**|
| -------- | -------- | ------ | ------ | ------- |---------------------------------------- |
| symbol | true | string |Contract Code | |e.g. "BTC_CQ" represents BTC “this_week”、"BTC_CQ" represents BTC “next_week”、"BTC_CQ" represents BTC “quarter“|
| period | true | string | Kline Period | | 1min, 5min, 15min, 30min, 60min, 1hour,4hour,1day, 1mon |

    [t1, t5] assumes that there is Kline oft1 ~ t5 ：

    from: t1, to: t5, return [t1, t5].
    from: t5, to: t1, which t5  > t1, return [].
    from: t5, return [t5].
    from: t3, return [t3, t5].
    to: t5, return [t1, t5].
    from: t which t3  < t  <t4, return [t4, t5].
    to: t which t3  < t  <t4, return [t1, t3].
    from: t1 and to: t2, should satisfy 1325347200  < t1  < t2  < 2524579200.

**NOTE**：maximum 300 per time

Example for Requesting parameter of KLine data：
```json
{
    "req": "market.BTC_CQ.kline.1min",
    "id": "id4"
}
```
Example of successful requesting and return data：

```json
{
    "rep": "market.BTC_CQ.kline.1min",
    "status": "ok",
    "id": "id4",
    "tick": [
        {
            "vol": 100,
            "count": 27,
            "id": 1494478080,
            "open": 10050.00,
            "close": 10058.00,
            "low": 10050.00,
            "high": 10058.00,
            "amount": 175798.757708
        },
        {
            "vol": 300,
            "count": 28,
            "id": 1494478140,
            "open": 10058.00,
            "close": 10060.00,
            "low": 10056.00,
            "high": 10065.00,
            "amount": 158331.348600
        }
    ]
}
```

#### Subscribe Market Depth Data </a>

After establish connection with WebSocket API, describing data formed as following to Server：

```json
{
    "sub": "market.$symbol.depth.$type",
    "id": "id generated by client"
}
```

|**Parameter**|   **Name**  | **Type**  | **Description** |  **Default Value**  | **Range**|
|-------------- |-------------- |---------- |------------ |------------ |---------------------------------------------------------------------------------|
|symbol         |true           |string     |Contract Code            |        |e.g. "BTC_CQ" represents BTC “this_week”、"BTC_CQ" represents BTC “next_week”、"BTC_CQ" represents BTC “quarter“.|
|type           |true           |string     |Depth Type        |        |step0, step1, step2, step3, step4, step5（merged depth 0-5）；step0 means doesn’t merge|

**NOTE**：When the user selects “Merged Depth”, the market pending orders within the certain quotation accuracy will be combined and displayed. The merged depth only changes the display mode and does not change the actual order price。

Example of correct subscription of requesting parameter：
```json
{
    "sub": "market.BTC_CQ.depth.step0",
    "id": "id5"
}
```
example of successful subscription and returning parameter：
```json
{
    "id": "id5",
    "status": "ok",
    "subbed": "market.BTC_CQ.depth.step0",
    "ts": 1489474081631
}
```
Whenever depth updated，client will receive data，for example：
```json
{
    "ch": "market.BTC_CQ.depth.step0",
    "ts": 1489474082831,
    "tick":
    {
        "mrid": 269073229,
        "id": 1539843937,
        "bids": [
            [9999.9101,1],
            [9992.3089,2]
        ],
        "asks": [
            [10010.9800,10],
            [10011.3900,15]
        ],
        "ts": 1539843937417,
        "version": 1539843937,
        "ch": "market.BTC_CQ.depth.step0"
    }
}
```
tick illustration
```json
"tick": {
"bids": [
    ["price", "amount"],
    ["price", "amount"]
],
"asks": [
    ["price", "amount"]
    ["price", "amount"]
]
}
```
#### Subscribe Trade Detail Data</a>

After establish connection with WebSocket API, describing data formed as following to Server:
```json
{
    "sub": "market.$symbol.detail",
    "id": "id generated by client"
}
```
|**Parameter**|   **Name**  | **Type**  | **Description** |  **Default Value**  | **Range**|
|-------------- |-------------- |---------- |------------ |------------ |--------------------------------------------------------------------------------|
|symbol         |true           |string     |Contract Code      |              |e.g. "BTC_CQ" represents BTC “this_week”、"BTC_CQ" represents BTC “next_week”、"BTC_CQ" represents BTC “quarter“.|

Example of successful subscription of request parameter：
```json
{
    "sub": "market.BTC_CQ.detail",
    "id": "id6"
}
```
Example of successful subscription and return parameter：
```json
{
    "ch": "market.BTC_CW.detail",
    "ts": 1539842340724,
    "tick": {
        "id": 1539842340,
        "mrid": 268041138,
        "open": 6740.47,
        "close": 7800,
        "high": 7800,
        "low": 6726.13,
        "amount": 477.1200312075244664773339914558562673572,
        "vol": 32414,
        "count": 1716
    }
}
```
tick illustration：
```json
"tick":{
    "id":  "Kline id",
    "mrid": 1494496390000,
    "vol": "Trading volume",
    "count": "transaction count",
    "open": "opening price",
    "close": "closing price, when Kline is the last one, price is the latest price",
    "low": "Lowest Price",
    "high": "Highest Price",
    "amount": "Transaction amount(currency), sum(trading volume(amount)*denomination/transaction price)"
}
```
#### Request Trade Detail Data

Whenever depth updated，client will receive data，for example：
```json
{
    "req": "market.$symbol.trade.detail",
    "id": "id generated by client"
}
```
return Trade Detail

Example for request parameter of requesting Market Detail Data：
```json
{
    "req": "market.BTC_CQ.trade.detail",
    "id": "id8"
}
```
Example of successful request and return data：
```json
{
    "ch": "market.BTC_CQ.trade.detail",
    "ts": 1489474082831,
    "data": [
        {
            "id":601595424,
            "price":10195.64,
            "amount":100,
            "direction":"buy",
            "ts":1494495766000
        },
        {
            "id":601595423,
            "price":10195.64,
            "amount":200,
            "direction":"buy",
            "ts":1494495711000
        }
    ]
}
```
tick date illustration：
```json
"data": [
    {
        "id": "message ID",
        "price": "transaction price",
        "amount": "transaction amount",
        "direction": "transaction direction",
        "ts": "timestamp"
    }
]
```
#### Subscribe Trade Detail Data </a>

After establish connection with WebSocket API, describing data formed as following to Server：
```json
{
    "sub": "market.$symbol.trade.detail",
    "id": "id generated by client"
}
```
**NOTE**：Can only obtain the latest 300 Trade Detail Data。

|**Parameter**|   **Name**  | **Type**  | **Description** |  **Default Value**  | **Range**|
|-------------- |-------------- |---------- |---------- |------------ |--------------------------------------------------------------------------------|
|symbol         |true           |string     |Contract Name    |            |e.g. "BTC_CQ" represents BTC “This Week”、"BTC_CQ" represents BTC “Next Week”、"BTC_CQ" represents BTC “Quarter“.|

Example of successful subscription of request parameter：
```json
{
    "sub": "market.BTC_CQ.trade.detail",
    "id": "id7"
}
```
Example of successful subscription and return parameter：
```json
{
    "id": "id7",
    "status": "ok",
    "subbed": "market.BTC_CQ.trade.detail",
    "ts": 1489474081631
}
```
Whenever Trade Detail updated，client will receive data，for example：
```json
{
    "ch": "market.BTC_NW.trade.detail",
    "ts": 1539831709042,
    "tick": {
        "id": 265842227,
        "ts": 1539831709001,
        "data": [
            {
                "amount": 20,
                "ts": 1539831709001,
                "id": 265842227259096443,
                "price": 6742.25,
                "direction": "buy"
            }
        ]
    }
}
```
data illustration：
```json
"data": [
    {
        "id": "message ID",
        "price": "transaction price",
        "amount": "transaction amount",
        "direction": "transaction direction",
        "ts": "timestamp"
    }
]
```
