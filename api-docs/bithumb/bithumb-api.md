<a name = "0"></a>
# Bithumb API Reference
This is the markdown version of the Bithumb API reference, with better formatting and a table of contents.

### Currencies <a name = "1"></a>
[back to top](#user-content-0)
The following is a list of offered currencies, as their `{currency}` code:

&nbsp;  | &nbsp;    | &nbsp;    | &nbsp;    | &nbsp;    | &nbsp;
---     | ---       | ---       | ---       | ---       | ---
BTC     | ETH       | DASH      | LTC       | ETC       | XRP
BCH     | XMR       | ZEC       | QTUM      | BTG       | EOS
ICX     | VET       | TRX       | ELF       | MITH      | MCO
OMG     | KNC       | GNT       | HSR       | ZIL       | ETHOS
PAY     | WAX       | POWR      | LRC       | GTO       | STEEM
STRAT   | ZRX       | REP       | AE        | XEM       | SNT
ADA     | PPT       | CTXC      | CMT       | THETA     | WTC
ITC     | TRUE      | ABT       | RNT       | PLY       | WAVES
LINK    | ENJ       | PST       | SALT      | RDN       | LOOM
BHPC    | PIVX      | INS       | BCD       | BZNT      | XLM
OCN     | BSV       | TMTG      | BAT

The default is `BTC` and the code `ALL` returns data for all currencies.

### Currency Defaults <a name = "2"></a>
[back to top](#user-content-0)

&nbsp;          | &nbsp;            | &nbsp;            | &nbsp;         | &nbsp;       |  &nbsp;
:--- 			| :---				| :---				| :---	         | :---          | :---
BTC: 300 		| ETH: 2,500 		| DASH: 4,000 		| LTC: 15,000    | ETC: 30,000    | XRP: 2,500,000
BCH: 1,200 		| XMR: 10,000 		| ZEC: 2,500 		| QTUM: 30,000   | BTG: 1,200       | EOS: 20,000
ICX: 250,000 	| VET: 10,000,000 	| TRX: 10,000,000 	| ELF: 800,000   | MITH: 1,000,000 | MCO: 100,000
OMG: 100,000 	| KNC: 500,000 		| GNT: 1,000,000 	| HSR: 100,000   | ZIL: 5,000,000  | ETHOS: 300,000
PAY: 1,000,000 	| WAX: 3,000,000 	| POWR: 2,000,000 	| LRC: 1,200,000 | GTO: 2,500,000  | STEEM: 250,000
STRAT: 120,000 	| ZRX: 700,000 		| REP: 20,000 		| AE: 250,000    | XEM: 2,500,000  | SNT: 7,000,000
ADA: 3,500,000 	| PPT: 200,000 		| CTXC: 2,700,000 	| CMT: 6,000,000 | THETA: 6,000,000 | WTC: 200,000
ITC: 200,000 	| TRUE: 1,500,000 	| ABT: 4,800,000 	| RNT: 1,000,000 | PLY: 4,000,000    | WAVES: 250,000
LINK: 200,000 	| ENJ: 10,000,000 	| PST: 400,000 		| SALT: 100,000  | RDN: 1,000,000    | LOOM: 5,000,000
BHPC: 70,000 	| PIVX: 700,000 	| INS: 1,000,000 	| BCD: 300,000   | BZNT: 10,000,000 | XLM: 2,000,000
OCN: 50,000,000 | BSV: 6,000 		| TMTG: 100,000,000 | BAT: 4,000,000

### Rate Limits <a name = "3"></a>
[back to top](#user-content-0)
- **The API will not be activated for members who created an account using Quick Signup without email verification.**
- **Public API**
	- 20 request available per second.
	- If the request exceeds 20 calls per second, API usage will be limited,
	and also the administrator's approval is required to remove the limitation.(Phone contact required)
- **Private API**
	- 10 request available per second.
	- If the request exceeds 10 calls, API usage will be limited for 5 minutes.

## Public API <a name = "4"></a>
[back to top](#user-content-0)
public API endpoints

### https://api.bithumb.com/public/ticker/{currency} <a name = "5"></a>
[back to top](#user-content-0)
Exchange last transaction information

#### Response
```json
{
    "status": "0000",
    "data": {
        "opening_price"     : "504000",
        "closing_price"     : "505000",
        "min_price"         : "504000",
        "max_price"         : "516000",
        "average_price"     : "509533.3333",
        "units_traded"      : "14.71960286",
        "volume_1day"       : "14.71960286",
        "volume_7day"       : "15.81960286",
        "buy_price"         : "505000",
        "sell_price"        : "504000",
        "24H_fluctate"      : "1000",
        "24H_fluctate_rate" : "0.19",
        "date"              : 1417141032622
    }
}
```
##### Explanation

Key Name		 | 	Description
:---			 |  :---
status			 | 	result status code (normal: 0000, refer to error code for codes other than the normal)
opening_price	 | 	transaction amount starting within the recent 24 hours
closing_price	 | 	last transaction amount within the recent 24 hours
min_price		 | 	lowest transaction amount within the recent 24 hours
max_price		 | 	highest transaction amount within the recent 24 hours
average_price	 | 	average transaction amount within the recent 24 hours
units_traded	 | 	Currency transactions in the recent 24 hours
volume_1day		 | 	Currency trading volume within the day
volume_7day		 | 	Currency trading volume within the recent 7 days
buy_price		 | 	maximum Buy amount on the standby
sell_price		 | 	minimum Sell amount on standby
24H_fluctate	 | 	24H change amount
24H_fluctate_rate | 	24H change rate
date			 | 	Timestamp on the current time

### https://api.bithumb.com/public/orderbook/{currency} <a name = "6"></a>
[back to top](#user-content-0)
Standby for the purchase/sales of bithumb exchange or history information for transactions

#### Request Payload
```json
{
	"group_orders": 1,
	"count": 30
}
```
##### Explanation

Parameter Name	 | 	Data Type	 | 	Description
:---  |   :---  |  :---
group_orders	 | 	Int	 | 	Value : 0 or 1 (Default : 1)
count	 | 	Int	 | 	Value : 1 ~ 50 (Default : 20), ALL : 1 ~ 5(Default : 5)

#### Response
```json
{
    "status"    : "0000",
    "data"      : {
        "timestamp"         : 1417142049868,
        "order_currency"    : "BTC",
        "payment_currency"  : "KRW",
        "bids": [
            {
                "quantity"  : "6.1189306",
                "price"     : "504000"
            },
            {
                "quantity"  : "10.35117828",
                "price"     : "503000"
            }
        ],
        "asks": [
            {
                "quantity"  : "2.67575",
                "price"     : "506000"
            },
            {
                "quantity"  : "3.54343",
                "price"     : "507000"
            }
        ]
    }
}
```
##### Explanation

Key Name	 | 	Description
 :---  |  :---
status	 | 	result status code (normal: 0000, refer to error code for codes other than the normal)
timestamp	 | 	Timestamp on the current time
order_currency	 | 	Order currency unit
payment_currency	 | 	Payment currency unit
bids	 | 	Buy request
asks	 | 	Sell request
quantity	 | 	Currency quantity
price	 | 	transaction amount per single unit of currency

### https://api.bithumb.com/public/transaction_history/{currency} <a name = "7"></a>
[back to top](#user-content-0)
History of completion for transactions in bithumb

#### Request Payload
```json
{
	"cont_no": 37417,
	"count": 39
}
```
##### Explanation

Parameter Name	 | 	Data Type	 | 	Description
 :---  |  :---  |  :---
cont_no	 | 	Int	 | 	Value :settlement number
count	 | 	Int	 | 	Value : 1 ~ 100 (Default : 20)
#### Response
```json
{
    "status"    : "0000",
    "data"      : [
        {
            "cont_no"           : "37417",
            "transaction_date"  : "2018-04-10 17:47:46",
            "type"              : "bid",
            "units_traded"      : "1.0",
            "price"             : "6779000",
            "total"             : "6779000"
        },
        {
            "cont_no"           : "37416",
            "transaction_date"  : "2018-04-10 17:43:38",
            "type"              : "bid",
            "units_traded"      : "0.1",
            "price"             : "6779000",
            "total"             : "677900"
        },
        {
            "cont_no"           : "37410",
            "transaction_date"  : "2018-04-10 14:13:25",
            "type"              : "ask",
            "units_traded"      : "0.0001",
            "price"             : "7575000",
            "total"             : "758"
        }
    ]
}
```
##### Explanation

Key Name	 | 	Description
 :---  |  :---
status	 | 	result status code (normal: 0000, refer to error code for codes other than the normal)
cont_no	 | 	Settlement Number
transaction_date	 | 	transaction settlement time
type	 | 	Buy/Sell (ask, bid)
units_traded	 | 	transaction currency quantity
price	 | 	1Currency transaction amount
total	 | 	total transaction amount

### https://api.bithumb.com/public/btci <a name = "8"></a>
[back to top](#user-content-0)
Bithumb Market index (BTMI,BTAI)

#### Response
```json
{
    "status": "0000",
    "data": {
        "btai"          : "1000",
        "btai_width"    : "0",
        "btai_rate"     : "0",
        "btmi"          : "1000",
        "btmi_width"    : "0",
        "btmi_rate"     : "0",
        "date"          : "1542002781568"
    }
}

```
##### Explanation

Key Name  |  Description
 :---  |  :---
btai  |  BTAI (Bithumb Altcoin Market Index)
btai_width  |  BTAI change amount
btai_rate  |  BTAI change rate
btmi  |  BTMI (Bithumb Market Index)
btmi_width  |  BTMI change amount
btmi_rate  |  BTMI change rate
date  |  Timestamp on the current time

## Private API <a name = "9"></a>
[back to top](#user-content-0)
Private API endpoints

### https://api.bithumb.com/info/account <a name = "10"></a>
[back to top](#user-content-0)
Bithumb exchange customer information

#### Request Payload
```json
{
	"apiKey": "3nDwl2EdnepqD194",
	"secretKey": "3ndD-w12.Do3",
	"currency": "BTC"
}
```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
currency  |  String  |  Currency code
#### Response
```json
{
    "status"    : "0000",
    "data"      : {
        "created"       : 1388118018000,
        "account_id"    : "A000105A",
        "trade_fee"     : "0.000",
        "balance"       : "665.40127447"
    }
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
created  |  Timestamp
account_id  |  user ID
trade_fee  |  transaction commission
balance  |  Currency balance for specified currency


### https://api.bithumb.com/info/balance <a name = "11"></a>
[back to top](#user-content-0)
Bithumb exchange customer wallet information

#### Request Payload
```json
{
	"apiKey": "3nDwl2EdnepqD194",
	"secretKey": "3ndD-w12.Do3",
	"currency": "BTC"
}
```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
currency  |  String  |  Currency Code

#### Response
```json

{
"status"    : "0000",
"data"      : {
	"total_btc"     : "665.40127447",
	"total_krw"     : "305507280",
	"in_use_btc"    : "127.43629364",
	"in_use_krw"    : "8839047.0000000000",
	"available_btc" : "537.96498083",
	"available_krw" : "294932685.000000000000",
	"xcoin_last"    : "505000"
}
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
total_{currency}  |  entire Currency
total_krw  |  entire KRW
in_use_{currency}  |  Currency in use
in_use_krw  |  KRW in use
available_{currency}  |  available currency
available_krw  |  available KRW
xcoin_last  |  bithumb last transaction amount

### https://api.bithumb.com/info/wallet_address <a name = "12"></a>
[back to top](#user-content-0)
Bithumb exchange user deposit address

#### Request Payload
```json
{

}
```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
currency  |  String The currency code
#### Response
```json
{
	"status"    : "0000",
	"data"      : {
		"wallet_address"    : "1H7WL8Lb8mxCTwpL1RN8yckL2gcPLgqtqD",
		"currency"          : "BTC"
	}
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
wallet_address  |  electronic wallet Address
currency  |  The currency code

### https://api.bithumb.com/info/ticker <a name = "13"></a>
[back to top](#user-content-0)
Customer last transaction information

#### Request Payload
```json

```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
order_currency  |  String  |  Currency code
payment_currency  |  String  |  KRW (currency currently provided by Bithumb KRW)
#### Response
```json
{
    "status"    : "0000",
    "data"      : {
        "opening_price" : "507000",
        "closing_price" : "516000",
        "min_price"     : "507000",
        "max_price"     : "516000",
        "average_price" : "513875.0000",
        "units_traded"  : "3.91960286",
        "volume_1day"   : "3.91960286",
        "volume_7day"   : "5.01960286",
        "date"          : 1417148471595
    }
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
opening_price  |  transaction amount starting within the recent 24 hours
closing_price  |  last transaction amount within the recent 24 hours
min_price  |  lowest transaction amount within the recent 24 hours
max_price  |  highest transaction amount within the recent 24 hours
average_price  |  average transaction amount within the recent 24 hours
units_traded  |  Currency transactions in the recent 24 hours
volume_1day  |  Currency trading volume within the day
volume_7day  |  Currency trading volume within the recent 7 days
date  |  Timestamp on the current time

### https://api.bithumb.com/info/orders <a name = "14"></a>
[back to top](#user-content-0)
Registration for order of purchase/sales or transactions in progress

#### Request Payload
```json
{

}
```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
order_id  |  String  |  order number registered for purchase/sales
type  |  String  |  transaction type(bid : purchase, ask : sell)
count  |  Int  |  Value : 1 ~1000 (default : 100)
after  |  Int  |  YYYY-MM-DD hh:mm:ss's UNIX Timestamp
(2014-11-28 16:40:01 = 1417160401000)
currency  |  String  |  Currency code
#### Response
```json
{
    "status"    : "0000",
    "data"      : [
        {
            "order_id"          : "1412562509982",
            "order_currency"    : "BTC",
            "order_date"        : 1412562509982,
            "payment_currency"  : "KRW",
            "type"              : "bid",
            "status"            : "placed",
            "units"             : "5.0",
            "units_remaining"   : null,
            "price"             : "501000",
            "fee"               : null,
            "total"             : null,
            "date_completed"    : null
        }
    ]
}
```
##### Explanation

Key Name  |  Description
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
order_currency  |  Order currency unit
order_date  |  order date Timestamp
payment_currency  |  Payment currency unit
type  |  classification of order request (bid : purchase, ask : sell)
status  |  order status (placed : transaction in progress)
units  |  Transaction request Currency
units_remaining  |  order balance
price  |  transaction amount per 1Currency
fee  |  transaction commission
total  |  NULL if it is not the total transaction amount or completed status from the transactions
date_completed  |  date of completion for transactions Timestamp, NULL if it is not completed

### https://api.bithumb.com/info/user_transactions <a name = "15"></a>
[back to top](#user-content-0)
Customer transaction history

#### Request Payload
```json
{

}
```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
offset  |  Int  |  Value : 0 ~ (default : 0)
count  |  Int  |  Value : 1 ~ 50 (default : 20)
searchGb  |  String  |  0 : entire, 1 : completed purchase, 2 : completed sales, 3 : withdrawing, 4 : deposit, 5 : withdrawal, 9 : KRW depositing
currency  |  String  |  Currency code

#### Response
```json
{
    "status"    : "0000",
    "data"      : [
        {
            "search"        : "2",
            "transfer_date" : 1417139122544,
            "units"         : "- 0.1",
            "price"         : "51600",
            "btc1krw"       : "516000",
            "fee"           : "0 KRW",
            "btc_remain"    : "665.40127447",
            "krw_remain"    : "305507280"
        },
        {
            "search"        : "2",
            "transfer_date" : 1417138805912,
            "units"         : "- 0.1",
            "price"         : "51600",
            "btc1krw"       : "516000",
            "fee"           : "0 KRW",
            "btc_remain"    : "665.50127447",
            "krw_remain"    : "305455680"
        }
    ]
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
search  |  search classification (0 : entire, 1 : purchase completed, 2 : sales completed, 3 : withdrawing, 4 : deposit, 5 : withdrawal, 9 : KRW depositing)
transfer_date  |  date of transaction Timestamp
units  |  transaction currency quantity
price  |  Executed Amount
{currency}1krw  |  transaction amount per 1Currency
fee  |  trading commission
{currency}_remain  |  Currency balance after transactions
krw_remain  |  KRW balance after transactions

### https://api.bithumb.com/trade/place <a name = "16"></a>
[back to top](#user-content-0)
Bithumb customer purchase/sales transaction order, registration, and settlement


#### Request Payload
```json

```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
order_currency  |  String  |  Currency code
Payment_currency  |  String  |  KRW (default value)
units  |  Float  |  Order quantity (See [defaults](#2) for details)
price  |  Int  |  transaction amount per 1Currency
type  |  String  |  transaction type(bid : purchase, ask : sales)

#### Response
```json
{
    "status"    : "0000",
    "order_id"  : "1428646963419",
    "data": [
        {
            "cont_id"   : "15313",
            "units"     : "0.61460000",
            "price"     : "284000",
            "total"     : 174546,
            "fee"       : "0.00061460"
        },
        {
            "cont_id"   : "15314",
            "units"     : "0.18540000",
            "price"     : "289000",
            "total"     : 53581,
            "fee"       : "0.00018540"
        }
    ]
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
order_id  |  order number
cont_id  |  Settlement Number
units  |  Settlement Quantity
price  |  Transaction price per 1Currency
total  |  KRW settled price
fee  |  Commission

### https://api.bithumb.com/info/order_detail <a name = "17"></a>
[back to top](#user-content-0)
Bithumb customer Buy/Sell history


#### Request Payload
```json

```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
order_id  |  String  |  order number registered for purchase/sales
type  |  String  |  transaction type(bid : purchase, ask : sales)
currency  |  String  |  Currency code

#### Response
```json
{
"status"    : "0000",
 "data"      : [
	 {
		 "transaction_date"  : "1428024598967",
		 "type"              : "ask",
		 "order_currency"    : "BTC",
		 "payment_currency"  : "KRW",
		 "units_traded"      : "0.0017",
		 "price"             : "264000",
		 "fee"               : "0.0000017",
		 "total"             : "449"
	 }
 ]
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
transaction_date  |  settlement period Timestamp
type  |  bid(Buy), ask(Sell)
order_currency  |  Currency code
payment_currency  |  KRW
units_traded  |  Settlement Quantity
price  |  Transaction price per 1Currency
fee  |  Commission
total  |  executed price

### https://api.bithumb.com/trade/cancel <a name = "18"></a>
[back to top](#user-content-0)
Bithumb customer purchase/sales transaction cancellation

#### Request Payload
```json

```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
type  |  String  |  transaction type(bid : purchase, ask : sales)
order_id  |  String  |  order number registered for purchase/sales
currency  |  String  |  Currency code

#### Response
A status object in the form of
```json
{
    "status"    : "0000"
}
```


### https://api.bithumb.com/trade/btc_withdrawal <a name = "19"></a>
[back to top](#user-content-0)
Bithumb customer Currency withdrawal

#### Request Payload
```json
{

}
```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
units  |  Float  |  quantity to withdraw currency
address  |  String  |  Currency withdrawing address
destination  |  Integer  |  Currency withdrawal Destination Tag (when withdraw XRP)
Integer  |  CurrencyWithdrawal deposit memo(MEMO) (STEEM During withdrawal)
String  |  Currency withdrawal Payment Id (when withdraw XMR)
currency  |  String  |  Currency code

- Minimum amount per transaction (BTC: 0.002  |  ETH: 0.01  |  DASH: 0.01  |  LTC: 0.1  |  ETC: 0.1  |  XRP: 21  |  XMR: 0.05  |  ZEC: 0.01  |  QTUM: 0.1  |  BTG: 0.002  |  EOS: 0.5  |  ICX: 4  |  TRX: 150  |  ELF: 5  |  MITH: 5  |  MCO: 0.5  |  OMG: 0.5  |  KNC: 4  |  GNT: 12  |  ZIL: 30  |  ZRX: 3.5  |  PPT: 3  |  CTXC: 3  |  THETA: 48  |  WTC: 1.4  |  ITC: 20  |  TRUE: 10  |  ABT: 30  |  RNT: 100  |  PLY: 30  |  WAVES: 2  |  LINK: 20  |  ENJ: 100  |  PST: 30  |  SALT: 10  |  RDN: 10  |  LOOM: 46  |  BHPC: 5  |  PIVX: 5  |  INS: 13  |  BCD: 2  |  BZNT: 100  |  XLM: 20  |  OCN: 400  |  TMTG: 100  |  BAT: 20)
- Maximum amount per transaction : quantity based on customer grade

#### Response
A status object in the form of
```json
{
    "status"    : "0000"
}
```

### https://api.bithumb.com/trade/krw_deposit <a name = "20"></a>
[back to top](#user-content-0)
Bithumb customer request for virtual account of KRW deposit

#### Request Payload
```json
{

}
```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
#### Response
```json
{
    "status"    : "0000",
    "account"   : "56208399422301",
    "bank"      : "Shinhan Bank",
    "BankUser"  : "BTC KoreaCom"
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
account  |  virtual bank account number
bank  |  Shinhan Bank (bank name)
BankUser  |  BTC KoreaCom (name of depositor)

### https://api.bithumb.com/trade/krw_withdrawal <a name = "21"></a>
[back to top](#user-content-0)
Bithumb customer KRW withdrawal request

#### Request Payload
```json
{

}
```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
bank  |  String  |  `bank-code_bank-name`
account  |  String  |  withdrawing bank account number
price  |  Int  |  withdrawing amount

#### Response
A status object of the form:
```json
{
    "status"    : "0000"
}
```

### https://api.bithumb.com/trade/market_buy <a name = "22"></a>
[back to top](#user-content-0)
Buy with market price

#### Request Payload
```json

```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
units  |  Float  |  - Amount threshold per transaction : 100 million KRW
currency  |  String  |  Currency code

#### Response
```json
{
    "status"    : "0000",
    "order_id"  : "1429500241523",
    "data": [
        {
            "cont_id"   : "15364",
            "units"     : "0.16789964",
            "price"     : "270000",
            "total"     : 45333,
            "fee"       : "0.00016790"
        },
        {
            "cont_id"   : "15365",
            "units"     : "0.08210036",
            "price"     : "289000",
            "total"     : 23727,
            "fee"       : "0.00008210"
        }
    ]
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
order_id  |  order number
cont_id  |  settlement number
units  |  Settlement Quantity (including fees)
price  |  KRW market price per 1 currency
total  |  purchase KRW
fee  |  Commission

### https://api.bithumb.com/trade/market_sell <a name = "23"></a>
[back to top](#user-content-0)
Sell with market price


#### Request Payload
```json

```
##### Explanation

Parameter Name  |  Data Type  |  Description
 :---  |  :---  |  :---
apiKey  |  String  |  apiKey
secretKey  |  String  |  scretKey
units  |  Float  |  - Amount threshold per transaction : 100 million KRW
currency  |  String  |  Currency code

#### Response
```json
{
"status"    : "0000",
"order_id"  : "1429500318982",
    "data"      : [
        {
            "cont_id"   : "15366",
            "units"     : "0.78230769",
            "price"     : "260000",
            "total"     : 203400,
            "fee"       : 203
        },
        {
            "cont_id"   : "15367",
            "units"     : "0.21769231",
            "price"     : "259500",
            "total"     : 56491,
            "fee"       : 56
        }
    ]
}
```
##### Explanation

Key Name  |  Description
 :---  |  :---
status  |  result status code (normal: 0000, refer to error code for codes other than the normal)
order_id  |  order number
cont_id  |  settlement number
units  |  Settlement Quantity (including fees)
price  |  KRW market price per 1 currency
total  |  sale KRW
fee  |  commission

## Status Codes <a name = "24"></a>
[back to top](#user-content-0)
The following are the status/error codes that the API will return:

CODE  | 	MESSAGE
---  |  ---
0000 | 	Success  
5100 | 	Bad Request
5200 | 	Not Member
5300 | 	Invalid Apikey
5302 | 	Method Not Allowed
5400 | 	Database Fail
5500 | 	Invalid Parameter
5600 | 	CUSTOM NOTICE (output the error message in each situation)
5900 | 	Unknown Error

Here's an example of one such status code:

```json
{
    "success" : 5600,
    "message" : "minimum quantity is 0001BTC"
}
```
## Sample Code <a name = "25"></a>
[back to top](#user-content-0)

1. PHP [Download][php]
2. Java [Download][java]
3. C++(Windows) [Download][cppw]
4. libcurl[Download][libc]
4. C++(Linux)[Download][cppl]
5. Node.js[Download][nodejs]
6. python3[Download][python3]
7. python[Download][python]
8. C#[Download][cs]
9. GO[Download][go]

[php]: https://en.bithumb.com/resources/data/Bithumb_20150824_RESTFulAPI-php.zip
[java]: https://en.bithumb.com/resources/data/Bithumb_20150824_RESTFulAPI-java.zip
[cppw]: https://en.bithumb.com/resources/data/Bithumb_20150824_RESTFulAPI-cpp_windows.zip
[libc]: https://en.bithumb.com/resources/data/libcurl.zip
[cppl]: https://en.bithumb.com/resources/data/Bithumb_20150824_RESTFulAPI-cpp_linux.zip
[nodejs]: https://en.bithumb.com/resources/data/Bithumb_20150824_RESTFulAPI-nodejs.zip
[python3]: https://en.bithumb.com/resources/data/Bithumb_20170412_RESTFulAPI-python3.zip
[python]: https://en.bithumb.com/resources/data/Bithumb_20170414_RESTFulAPI-python.zip
[cs]: https://en.bithumb.com/resources/data/Bithumb_20170414_RESTFulAPI-C_s.zip
[go]: https://en.bithumb.com/resources/data/Bithumb_20170414_RESTFulAPI-Go.zip
