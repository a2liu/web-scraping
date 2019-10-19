# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

# https://stackoverflow.com/questions/14390945/suppress-scrapy-item-printed-in-logs-after-pipeline

import scrapy


class BlockchainItem(scrapy.Item):
    # define the fields for your item here like:
    height = scrapy.Field()

    # https://doc.scrapy.org/en/latest/topics/items.html
    def __repr__(self):
        return 'HEIGHT: %s' % self['height']
