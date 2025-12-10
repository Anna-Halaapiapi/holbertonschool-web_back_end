#!/usr/bin/env python3
"""
script that provides stats about Nginx logs stored in MongoDB
"""

from pymongo import MongoClient

if __name__ == "__main__":

    # create the connection between Python script & MongoDB server
    client = MongoClient("mongodb://127.0.0.1:27017")
    # select 'nginx' coll from db 'logs'
    coll = client.logs.nginx

    # print total num of docs in nginx coll
    print(f"{coll.count_documents({})} logs")

    # get and print each stat
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        print(
            f"\tmethod {method}: "
            f"{coll.count_documents({'method': method})}"
        )

    # print num of docs where method is GET and path is /status
    print(
        f"{coll.count_documents({'method': 'GET', 'path': '/status'})}"
        f" status check"
        )
