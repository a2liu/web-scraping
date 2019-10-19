# General

### SSL Websocket Connection

> wss://api.huobi.pro/ws

### Supported Pairs

> - BCCBTC
> - LTCBTC
> - ETHBTC
> - ETCBTC

### Data

All return data of websocket APIs needs to be unzipped

We recommend: [pako](https://github.com/nodeca/pako)

### Library

We recommend: [ws](https://github.com/websockets/ws) by Node.js

### Topic

Request and subscribe the data needs to use the `topic`

| type          | topic                        | description                              |
| ------------- | ---------------------------- | ---------------------------------------- |
| KLine         | market.$symbol.kline.$period | $period ：{ 1min, 5min, 15min, 30min, 60min, 1day, 1mon, 1week, 1year } |
| Market Depth  | market.$symbol.depth.$type   | $type ：{ step0, step1, step2, step3, step4, step5 } （depths 0-5）|
| Trade Detail  | market.$symbol.trade.detail  |                                          |
| Market Detail | market.$symbol.detail        |                                          |

`$symbol` ： { ethbtc, ltcbtc, etcbtc, bccbtc ... }


### Heartbeat

//WebSocket Client Request
```json
{
    "ping": 18212558000
}

//WebSocket Server response
{
    "pong": 18212558000
}
```

If the type of request message is not `LONG`, websocket server will response:

```json
{
  "ts": 1492420473027,
  "status": "error",
  "err-code": "bad-request",
  "err-msg": "invalid ping"
}
```

### Request


//request
```json
{
  "req": "topic to req",
  "id": "id generate by client"
}
```
`"req"` use the **topic**,as above "Topic"

**correct example**

//request
```json
{
  "req": "market.ethbtc.kline.1min",
  "id": "id10"
}
```


//response
```json
{
  "status": "ok",
  "rep": "market.btccny.kline.1min",
  "tick": [
    {
      "amount": 1.6206,
      "count":  3,
      "id":     1494465840,
      "open":   9887.00,
      "close":  9885.00,
      "low":    9885.00,
      "high":   9887.00,
      "vol":    16021.632026
    },
    {
      "amount": 2.2124,
      "count":  6,
      "id":     1494465900,
      "open":   9885.00,
      "close":  9880.00,
      "low":    9880.00,
      "high":   9885.00,
      "vol":    21859.023500
    }
  ]
}
```

**error request**

//request
```json
{
  "req": "market.invalidsymbo.kline.1min",
  "id": "id10"
}
```

//response
```json
{
  "status": "error",
  "id": "id10",
  "err-code": "bad-request",
  "err-msg": "invalid topic market.invalidsymbol.trade.detail",
  "ts": 1494483996521
}
```


### Subscribe

To receive data you have to send a "sub" message first.

//request
```json
{
  "sub": "topic to sub",
  "id": "id generate by client"
}
```

**correct sample**


//request
```json
{
  "sub": "market.btccny.kline.1min",
  "id": "id1"
}
```

`"req"` use the **topic**,as above "Topic".

//response
```json
{
  "id": "id1",
  "status": "ok",
  "subbed": "market.btccny.kline.1min",
  "ts": 1489474081631
}
```

After subscribe,you will receive updates upon any change.

//example
```json
{
  "ch": "market.btccny.kline.1min",
  "ts": 1489474082831,
  "tick": {
    "id": 1489464480,
    "amount": 0.0,
    "count": 0,
    "open": 7962.62,
    "close": 7962.62,
    "low": 7962.62,
    "high": 7962.62,
    "vol": 0.0
  }
}
```


**error example**

wrong symbol


//response
```json
{
  "id": "id2",
  "status": "error",
  "err-code": "bad-request",
  "err-msg": "invalid topic market.invalidsymbol.kline.1min",
  "ts": 1494301904959
}
```

wrong topic

//response
```json
{
  "id": "id3",
  "status": "error",
  "err-code": "bad-request",
  "err-msg": "invalid topic market.btccny.kline.3min",
  "ts": 1494310283622
}
```

### unsubscribe

To stop receiving data from a channel you have to send a "unsubscribe" message.

//request
```json
{
  "unsub": "topic to unsub",
  "id": "id generate by client"
}
```

**correct sample**

//request
```json
{
  "unsub": "market.btccny.trade.detail",
  "id": "id4"
}
```

//response
```json
{
  "id": "id4",
  "status": "ok",
  "unsubbed": "market.btccny.trade.detail",
  "ts": 1494326028889
}
```

**error unsubscribe**

Unsubscribe an unsubscribed topic

//response
```json
{
  "id": "id5",
  "status": "error",
  "err-code": "bad-request",
  "err-msg": "unsub with not subbed topic market.btccny.trade.detail",
  "ts": 1494326217428
}
```

Unsubscribe a nonexistent topic


//response
```json
{
  "id": "id5",
  "status": "error",
  "err-code": "bad-request",
  "err-msg": "unsub with not subbed topic not-exists-topic",
  "ts": 1494326318809
}
```
