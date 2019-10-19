# Kucoin API Documentation <a name = "kucoin-api-documentation"></a>
<a name = "0"></a>
### Table of Contents
- [General](#general)
- [Authentication](#authentication)
    - [Signature Calculation](#signature-calculation)
    - [API KEY Permissions](#api-key-permissions)
- [Language Parameters](#language-parameters)
- [Tip](#tip)
- [Websocket](#websocket)
    - [Overview](#overview)
        - [Acquire Websocket servers](#acquire-websocket-servers)
        - [Establish connection](#establish-connection)
        - [Subscribe topic](#subscribe-topic)
        - [Unsubscribe topic](#unsubscribe-topic)
        - [Ping](#ping)
        - [Close](#close)
    - [Topics](#topics)
        - [Orderbook level](#orderbook-level)
        - [History](#history)
        - [Tick](#tick)
        - [Market](#market)

## Recent changes <a name = "recent-changes"></a>
[back to top](#0)
- 2018-09-15 : add new websocket API

## General <a name = "general"></a>
[back to top](#0)
All API requests are called by the standard `HTTPS`. All `POST` calls need to specify the parameters of the format to `x-www-form-urlencoded`.

API server: https://api.kucoin.com

## Authentication <a name = "authentication"></a>
[back to top](#0)
First create an API KEY in the account center. Each time you access the authorized protection API, you need add the following parameters to headers of request:

```json
{
    "KC-API-KEY": "59c5ecfe18497f5394ded813",  
    "KC-API-NONCE" : 1506219855000,
    "KC-API-SIGNATURE" : "fd83147802c361575bbe72fef32ba90dcb364d388d05cb909c1a6e832f6ca3ac"  
}
```

**Note**: `"KC-API-NONCE"` is the Client timestamp (exact to milliseconds); before using the calibration time, the server does not accept calls with a time difference of more than 3 seconds  
**Also**: `"KC-API-SIGNATURE"` is the signature after client encryption

### Signature Calculation <a name = "signature-calculation"></a>
[back to top](#0)
Example for Creating an buy order of KCS-BTC:

```java
String host = "https://api.kucoin.com";  
String endpoint = "/v1/KCS-BTC/order";  // API endpoint
String secret; //The secret assigned when the API created

/**
 *  POST parameters：
 *    type: BUY
 *    amount: 10
 *    price: 1.1
 *    Arrange the parameters in ascending alphabetical order (lower cases first), then combine them with & (don't urlencode them, don't add ?, don't add extra &), e.g. amount=10&price=1.1&type=BUY    
 *    将查询参数按照字母升序(小字母在前)排列后用&进行连接(请不要进行urlencode操作,开头不要带?,首位不要有额外的&符号)得到的queryString如:  amount=10&price=1.1&type=BUY
 */
String queryString;

//splice string for signing
String strForSign = endpoint + "/" + nonce +"/" + queryString;  

//Make a base64 encoding of the completed string
String signatureStr = Base64.getEncoder().encodeToString(strForSign.getBytes("UTF-8"));

Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
SecretKeySpec secretKeySpec = new SecretKeySpec(secret.getBytes("UTF-8"), "HmacSHA256");
sha256_HMAC.init(secretKeySpec);

//KC-API-SIGNATURE in header
String signatureResult =  Hex.encodeHexString(sha256_HMAC.doFinal(signatureStr.getBytes("UTF-8")));
```


## API KEY Permissions <a name = "api-key-permissions"></a>
[back to top](#0)
To be added

## Language Parameters <a name = "language-parameters"></a>
[back to top](#0)
Put it into headers
```json
{
    "Accept-Language": "zh_CN",  
}
```
## Tip <a name = "tip"></a>
[back to top](#0)
- API with `/open/` path can be accessed without authorized infomation.
- No more than 50,000 calls per 5 minutes for all user.
- For each user `/v1/order/cancel-all` and `/v1/cancel-order` cannot exceed 30,000 calls per day.

## Websocket <a name = "websocket"></a>
[back to top](#0)
### Overview <a name = "overview"></a>
[back to top](#0)
#### 1. Acquire Websocket servers <a name = "acquire-websocket-servers"></a>
[back to top](#0)
Request:
```shell
curl -X GET 'https://kitchen.kucoin.com/v1/bullet/usercenter/loginUser?protocol=websocket&encrypt=true'
```
Response:
```json
{
    "success": true,
    "code": "OK",
    "msg": "Operation succeeded",
    "timestamp": 1536740044535,
    "data": {
        "bulletToken": "nktVRMSDB6moX91Tb4m47bCrTSsnqi_DwvZiOtAl82eKTBa21Fsacg==.hAr1S067ew4UH-C8qB5QEw==",
        "instanceServers": [
            {
                "pingInterval": 40000,   
                "endpoint": "wss://push1.kucoin.com/endpoint",  
                "protocol": "websocket",
                "encrypt": true,
                "pingTimeout": 60000,
                "userType": "vip"
            },
            {
                "pingInterval": 40000,
                "endpoint": "wss://push1.kucoin.com/endpoint",
                "protocol": "websocket",
                "encrypt": true,
                "pingTimeout": 60000,
                "userType": "normal"
            }
        ],
        "historyServers": [
            {
                "endpoint": "https://kitchen.kucoin.com/v1/bullet/history",
                "encrypt": true,
                "userType": "vip"
            },
            {
                "endpoint": "https://kitchen.kucoin.com/v1/bullet/history",
                "encrypt": true,
                "userType": "normal"
            }
        ]
    }
}
```
**Note:**
- `bulletToken` is token used to link the server
- `PingInterval` is recommended ping intervals，The unit is ms
- `endpoint` is available server links
- `pingTimeout` is timeout intervals，The unit is ms


#### 2. Establish connection <a name = "establish-connection"></a>
[back to top](#0)
Request: The client can be linked to websocket via the HTTP upgrade protocol. JavaScript demo:
```javascript
var socket=
	new WebSocket(
		"wss://push1.kucoin.com/endpoint?" +
		"bulletToken=" +
		"VMW8akU53eI2d5mvRsUe1Jfy29RtrzhYkP7ghCHTEK-TfW1nXdcdOQ==.0VC3UBkT4flW7QPIbmvg7w==" +
		"&format=json&resource=api");
```
- bulletToken: token
- format: fixed value "json"
- resource: fixed value "api"
Response:
```json
{ "id":"218522904466685952", "type":"ack" }
```
#### 3. Subscribe topic <a name = "subscribe-topic"></a>
[back to top](#0)
We can send a json data to subscribe topic. Json Format:
```json
{ "id":123, "type":"subscribe", "topic":"topicName", "req":1 }
```
- id: A message that is uniquely tagged by the client and returned by the server.
- req: If the req is 1, it means that the client expects an ack return; if there's none req or the req is 0, it means the client does not need req return. This rule also applies to other messages.
- topicName (support four types of topics):
	- orderbook level 2
	- history
	- tick
	- market
Response:
```json
{"id":"218522904466685952","type":"ack"}
```
#### 4. Unsubscribe topic <a name = "unsubscribe-topic"></a>
[back to top](#0)
We can send json data to unsubscribe topic. Json Format:
```json
{"id":123, "type":"unsubscribe", "topic":"topicName", "req":1}
```
Response:
```json
{"id":"218522904466685952","type":"ack"}
```
#### 5.Ping <a name = "ping"></a>
[back to top](#0)
When there's no data needs to be transferred, we can send ping-pong message to keep the connection alive.
```json
{"id":123, "type":"ping"}
```
Response:
```json
{"id":123, "type":"pong"}
```
As the timeout setting in the sever is 60000ms, you are recommended to set the ping interval into 40000ms.

#### 6.Close <a name = "close"></a>
[back to top](#0)
The client can disconnect at its own discretion. JavaScript demo:
```js
var socket=
	new WebSocket("wss://push1.kucoin.com/endpoint?" +
	"bulletToken=" +
	"VMW8akU53eI2d5mvRsUe1Jfy29RtrzhYkP7ghCHTEK-TfW1nXdcdOQ==.0VC3UBkT4flW7QPIbmvg7w==" +
	"&format=json&resource=api");
/*

...

*/
socket.close();
```

### Topics <a name = "topics"></a>
[back to top](#0)
#### Orderbook level 2 <a name = "orderbook-level"></a>
[back to top](#0)
We can subscribe to `/trade/{symbol}_TRADE` to get orderbook level 2 incremental data. `{symbol}` can be replaced by `ETH-BTC` or `BTC-USDT` and so on. We need to get the initial data through the REST API before we can process the incremental data. In the future, we will limit REST API access frequency to 5 times per second per single IP.
```json
{"id":123, "type":"subscribe", "topic":"/trade/ETH-BTC_TRADE", "req":1}
```
Response:
```json
{
  "data":{
            "type":"BUY or SELL",
            "action":"ADD or CANCEL",
            "time":"timestamp",
            "price":"price",
            "count":"count",
            "volume":"ignore"
        }
}
```
#### History <a name = "history"></a>
[back to top](#0)
We can subscribe `/trade/{symbol}_HISTORY` to get history info. `{symbol}` can be replaced by `ETH-BTC` or `BTC-USDT` and so on. We need to get the initial data through the REST API before we can process the incremental data. In the future, we will limit REST API access frequency to 5 times per second per single IP.
```json
{"id":123, "type":"subscribe", "topic":"/trade/ETH-BTC_HISTORY", "req":1}
```
Response:
```json
{
    "data":
        {
            "oid":"id",
            "price":"price",
            "count":"count",
            "time":"timestamp",
            "direction":"buy or sell",
            "volValue":"this will be ignored"  
        }
}
```
#### Tick <a name = "tick"></a>
[back to top](#0)
We can subscribe to `/market/{symbol}_TICK` to get history info. `{symbol}` can be replaced by `ETH-BTC` or `BTC-USDT` and so on. We need to get the initial data through the REST API before we can process the incremental data. In the future, we will limit REST API access frequency to 5 times per second per single IP.
```json
{"id":123, "type":"subscribe", "topic":"/market/ETH-BTC_TICK", "req":1}
```
Response:
```json
{
    "data":
        {
            "symbol":"ETH-BTC",
            "buy":"buy price",
            "sell":"sell price",
            "low":"lowest price",
            "high":"highest price",
            "lastDealPrice":"last deal price",
            "feeRate":"fee rate",
            "changeRate":"change rate",
            "change":"chang value",
            "datetime":"timestamp",
            "volValue":"",
            "coinType":"coin",
            "coinTypePair":"symbol",
            "trading":"",
            "sort":""
        }
}
```
#### Market <a name = "market"></a>
[back to top](#0)
We can subscribe `/market/{market}` to get history info. `{market}` can be replaced by `ETH` or `USDT` and so on. We need to get the initial data through the REST API before we can process the incremental data. In the future, we will limit REST API access frequency to 5 times per second per single IP.
```json
{"id":123, "type":"subscribe", "topic":"/market/BTC", "req":1}
```
Response:
```json
{
    "data":
        {
            "symbol":"ETH-BTC",
            "buy":"buy price",
            "sell":"sell price",
            "low":"lowest price",
            "high":"highest price",
            "lastDealPrice":"last deal price",
            "feeRate":"fee rate",
            "changeRate":"change rate",
            "change":"chang value",
            "datetime":"timestamp",
            "volValue":"",
            "coinType":"coin",
            "coinTypePair":"symbol",
            "trading":"",
            "sort":""
        }
}
```
