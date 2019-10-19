# -*- coding: utf-8 -*-
import pandas as pd
from blockchain.items import BlockchainItem
# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

# Based on docs, https://docs.scrapy.org/en/latest/topics/item-pipeline.html
class CSVWriterPipeline(object):

    # How many to store in the list before adding them to dataframe and then
    # writing to file
    save_threshold = 500

    def open_spider(self, spider):

        # self.list is here to reduce runtime costs
        self.list = []
        self.df = pd.DataFrame() # df stands for dataframe
        # Columns are stored as a dictionary of native C arrays
        # some, but not all, data formatting is done for you
        # if ur having pandas trouble, u can message me or ask Nicole maybe?

    def close_spider(self, spider):
        df = pd.DataFrame(self.list)
        self.df = pd.concat([self.df, df], ignore_index=True)
        self.df.to_csv(f'data/{spider.name}-data.csv', index=False)

    # Excuted every time the spider yields a result from its callback
    def process_item(self, item, spider):
        if 'data' in item and len(item.keys()) == 1:
            self.list+=item['data']
        else:
            self.list.append(item)

        # Make a checkpoint if rows are over threshold
        if len(self.list) >= CSVWriterPipeline.save_threshold:
            df = pd.DataFrame(self.list)
            self.df = pd.concat([self.df, df], ignore_index=True)
            self.df.to_csv(f'data/{spider.name}-chkpnt.csv', index=False)
            self.list = []
        # return BlockchainItem(height = item['height']) # Return an item representation for printing
