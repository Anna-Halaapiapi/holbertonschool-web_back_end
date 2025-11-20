#!/usr/bin/env python3
"""
This module provides the type-annotated function make_multiplier
with nested function call_me.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    returns function that multiplies float by multiplier arg.
    """
    def call_me(f: float):
        """
        returns f x multiplier
        """
        return f * multiplier
    return call_me
