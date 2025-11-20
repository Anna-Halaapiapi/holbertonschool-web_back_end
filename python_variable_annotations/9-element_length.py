#!/usr/bin/env python3
"""
This module provides the type-annotated function element_length.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Loops over an iterable, returning a list of tuples.
    Each tuple contains a sequence from the list, and its length.
    """
    return [(i, len(i)) for i in lst]
