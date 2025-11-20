#!/usr/bin/env python3
"""
This module provides the type-annotated function sum_list.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Takes a list of floats as argument,
    and returns their sum as a float.
    """
    return sum(input_list)
