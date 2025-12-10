#!/usr/bin/env python3
"""
This module provides the update_topics function.
"""

from typing import List


def update_topics(mongo_collection: object, name: str, topics: List[str]):
    """
    changes all topics of a school document based on the name.
    args:
    mongo_collection: pymongo collection object
    name: name of school to update
    topics: list of topics to update
    """
    # select all docs based on name of school
    query_filter = {"name": name}
    # build update operation
    update_op = {"$set": {"topics": topics}}
    # execute the update operation
    mongo_collection.update_many(query_filter, update_op)
