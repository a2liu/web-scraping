import scrapy, time
from blockchain.spiders.spider_utils import debug


# Based on docs, https://docs.scrapy.org/en/latest/intro/tutorial.html#intro-tutorial
class ApiSpider(scrapy.Spider):

    def log_failure(self, failure):
        # log all errback failures,
        # in case you want to do something special for some errors,
        # you may need the failure's type
        self.logger.error(repr(failure))
        response = failure.value.response
        status = response.status
        print()
        self.logger.error(f"Status code: {status}")
        self.logger.error(f"Response Headers: {repr(response.headers)}")
        self.logger.error(f"Response body: {response.text}")

        time.sleep(5)

    def crawl(self, request):
        self.crawler.engine.crawl(request, self.crawler.spider)

    # https://stackoverflow.com/questions/
    # 31146046/how-do-i-catch-errors-with-scrapy-so-i-can-do-something-when-i-get-user-timeout
    def errback(self, failure):
        self.log_failure(failure)
        self.crawl( self.request(url=failure.request.url, dont_filter = True) )

    def request(self, **kwargs):
        return scrapy.Request(**{'callback':self.parse, 'errback':self.errback,'dont_filter':True, **kwargs})
