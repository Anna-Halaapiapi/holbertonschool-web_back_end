#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """
        Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        gets page via index
        returns dict with hypermedia metadata of page
        """
        # verify that index is in a valid range
        last_index = max(self.__indexed_dataset)
        assert isinstance(index, int)
        assert index >= 0 and index <= last_index

        # get starting index
        current_index = index

        # build the data list skipping any deleted rows
        data_list = []
        while len(data_list) < page_size:
            # if index exists in dict, add it's value to list
            if current_index in self.__indexed_dataset:
                data_list.append(self.__indexed_dataset[current_index])
            # break loop if EOF reached
            if current_index > last_index:
                break
            current_index += 1

        # define the dict to return
        hypermedia_metadata = {
            "index": index,
            "next_index": current_index,
            "page_size": len(data_list),  # use actual page size
            "data": data_list
        }
        return hypermedia_metadata
