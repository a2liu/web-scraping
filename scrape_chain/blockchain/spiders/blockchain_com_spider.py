import scrapy, re
from blockchain.spiders.api_spider import ApiSpider

# Values used in start_requests(self)
start = 501039
end = 555491+1

# Extract text from child element using css selector
def extract_text(child):
    return ''.join(child.css('::text').extract())

# Extract text, and then the correct value, from an element
get_val = re.compile(r'^(.+?)(( [\(a-zA-Z])|$)') # Regex we built on Wednesday
def extract_value(child):
    text = extract_text(child)
    clean = get_val.match( text.strip() ).group(1).replace(',','')
    return clean

# Based on docs, https://docs.scrapy.org/en/latest/intro/tutorial.html#intro-tutorial
class BCcomSpider(ApiSpider):

    name = "blockchain.com"

    def start_requests(self): # Generator func that says what url's to go to at start
        base_url = 'https://www.blockchain.com/btc/block-height/%s'
        urls = (base_url % i for i in range(start, end))
        for url in urls:
            yield self.get_request(url=url)

    def parse(self, response):
        table = response.css('table') # Table element
        keys = [extract_text(child).lower() for child in table.css('tr > td:first-child')]
        values = [extract_value(child) for child in table.css('tr > td:last-child')]
        yield { k:v for k,v in zip(keys,values) }
