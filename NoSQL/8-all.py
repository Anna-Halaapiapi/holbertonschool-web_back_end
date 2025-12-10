#!/usr/bin/env python3
"""
This module provides the list_all function.
"""


def list_all(mongo_collection):
    """
    mongo_collection is the pymongo collection object
    returns list of all docs in mongo_collection
    or
    empty list if there are no docs
    """
    all_docs = list(mongo_collection.find())
    return all_docs
