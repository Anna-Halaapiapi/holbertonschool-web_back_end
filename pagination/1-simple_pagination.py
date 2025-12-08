#!/usr/bin/env python3
"""
This module provides the index_range function and Server class.
"""
from typing import Tuple, List
import csv
import math


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    page = page number to get
    page_size = size of each page
    return = start and end indexes of page
    """
    end_index = page * page_size
    start_index = end_index - page_size
    return (start_index, end_index)


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        gets page from dataset
        """
        # verifies that both args are ints greater than 0
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0 and page_size > 0

        # get data from csv (without header)
        data = self.dataset()

        # get start & end indexes for pagination of dataset
        indexes = index_range(page, page_size)

        # return empty list if start index is out of bounds, else return rows
        if indexes[0] >= len(data):
            page = []
        else:
            page = data[indexes[0]:indexes[1]]

        return page
