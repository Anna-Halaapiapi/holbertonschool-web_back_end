#!/usr/bin/env python3
"""
script that provides stats about Nginx logs stored in MongoDB
"""

from pymongo import MongoClient

# create the connection between Python script & MongoDB server
client = MongoClient("mongodb://127.0.0.1:27017")
# select 'nginx' collection from db 'logs'
nginx_collection = client.logs.nginx

# print total num of docs in nginx collection
print(f"{nginx_collection.count_documents({})} logs")

# # get number of each request
# requests = {
# "GET": nginx_collection.count_documents({"method": "GET"}),
# "POST": nginx_collection.count_documents({"method": "POST"}),
# "PUT": nginx_collection.count_documents({"method": "PUT"}),
# "PATCH": nginx_collection.count_documents({"method": "PATCH"}),
# "DELETE": nginx_collection.count_documents({"method": "DELETE"})
# }

print("Methods:")
# for key, value in requests.items():
#     print(f"\tmethod {key}: {value}")

# get and print each stat
for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
    print(f"\tmethod {method}: {nginx_collection.count_documents({'method': method})}")

# print num of docs where method is GET and path is /status
print(f"{nginx_collection.count_documents({'method': 'GET', 'path': '/status'})} status check")
