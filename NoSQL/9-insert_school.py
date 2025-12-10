#!/usr/bin/env python3
"""
This module provides the insert_school function.
"""


def insert_school(mongo_collection, **kwargs):
    """
    mongo_collection is the pymongo collection object
    func inserts a new doc in a collection based on kwargs
    Returns the new _id
    """
    # insert doc
    result = mongo_collection.insert_one(kwargs)
    # return _id of inserted doc
    return result.inserted_id
