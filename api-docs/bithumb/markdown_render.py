import requests
from requests.auth import HTTPBasicAuth
import json
import re

ul_re = re.compile("<ul>")
ul_format = lambda x: ul_re.sub("<ul style=\"margin-left: 10px;\">",x)
pre_re = re.compile("(<|</)pre>")
pre_format = lambda x: pre_re.sub(r"\1pre>\1code class = \"json\">",x)
with open('.env') as f:
    user,psswd = f.read().split('\n')

with open('bithumb-api.md','r') as f:
    api = f.read()
with open('bithumb-api-toc.md','r') as f:
    toc = f.read()
with open('bithumb-api-src.html','r') as f:
    txt = f.read()
r = requests.post("https://api.github.com/markdown",data = json.dumps({"text":api,"mode":"gfm"}), auth=(user, passwd) )
api = pre_format(r.text)
r = requests.post("https://api.github.com/markdown",data = json.dumps({"text":toc,"mode":"gfm"})  )
toc = ul_format(r.text)
fmt = "<html><body>{}</body><html>"
# with open('bithumb-api-docs.html','w') as f:
#     f.write(fmt.format(api))
# with open('bithumb-api-toc.html','w') as f:
#     f.write(fmt.format(toc))
with open('bithumb-api.html','w') as f:
    f.write(txt.format(toc,api))
