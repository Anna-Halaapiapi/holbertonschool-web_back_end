#!/usr/bin/env python3
"""
This module provides the schools_by_topic function.
"""


def schools_by_topic(mongo_collection: object, topic: str):
    """
    returns the list of school (docs) having a specific topic
    """
    return list(mongo_collection.find({ "topics": topic }))
