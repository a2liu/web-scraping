import scrapy, requests, json, requests
from datetime import datetime as dt, timedelta as ddt
from blockchain.spiders.api_spider import ApiSpider

# They have an API and I would have liked to explore Ethereum blockchain data.
# Ethereum has much more data points, because it's faster and each block
# takes a few seconds rather than minutes like Bitcoin. Therefore, we can focus on a month or two of data.
# I would like to start with Ethereum/blocks.  If you could put the data in a csv file that would be best.

base_url = 'https://api.blockchair.com'
eth_blocks_url = base_url+'/ethereum/blocks'
limit = 100
format = '%Y-%m-%d %H:%M:%S'
begin = dt.strptime('2018-12-01 00:00:00', format)
end = dt.strptime('2019-01-01 00:00:00', format)
step = ddt(minutes=20)

# Based on docs, https://docs.scrapy.org/en/latest/intro/tutorial.html#intro-tutorial
class BlockChairSpider(ApiSpider):

    name = "blockchair.eth.blocks"

    def start_requests(self): # Generator func that says what url's to go to at start
        current = begin
        switch = True
        while current < end:
            b = current.strftime(format)
            e = (current+step).strftime(format)
            if switch:
                yield self.request(url=eth_blocks_url+f'/?q=time({b}..{e})&limit=100')
            else:
                yield self.request(url=eth_blocks_url+f'/?q=time({b}...{e})&limit=100')
            switch = not switch
            current+=step
        if switch:
            yield self.request(url=eth_blocks_url+f'/?q=time({current})&limit=100')

    def parse(self, response):
        resp_dict = json.loads(response.text)
        yield from resp_dict['data']
