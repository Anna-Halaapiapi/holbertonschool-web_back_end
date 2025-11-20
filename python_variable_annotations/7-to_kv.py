#!/usr/bin/env python3
"""
This module provides the type-annotated function to_kv.
"""
from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Args:
    k: a string
    v: an int or float
    Returns a tuple of k and v squared (annotated as float).
    """
    return(k, v ** 2)
