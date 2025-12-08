#!/usr/bin/env python3
"""
This module provides the index_range function.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    page = page number to get
    page_size = size of each page
    return = start and end indexes of page
    """
    end_index = page * page_size
    start_index = end_index - page_size
    return (start_index, end_index)
