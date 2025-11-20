#!/usr/bin/env python3
"""
This module provides the type-annotated function to_kv.
"""
from typing import List, Union, Tuple


# for v < 3.9: need to use typing library for all containers and also for Union
def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Args:
    k: a string
    v: an int or float
    Returns a tuple of k and v squared (annotated as float).
    """
    return (k, v ** 2)

# # for v 3.9: don't need typing library for containers, still need for Union
# def to_kv(k: str, v: Union[int, float]) -> tuple[str, float]:
#     """
#     Args:
#     k: a string
#     v: an int or float
#     Returns a tuple of k and v squared (annotated as float).
#     """
#     return(k, v ** 2)

# # for version 3.10: replaces typing.Union with pipeline
# def to_kv(k: str, v: int | float) -> tuple[str, float]:
#     """
#     Args:
#     k: a string
#     v: an int or float
#     Returns a tuple of k and v squared (annotated as float).
#     """
#     return(k, v ** 2)
