#!/usr/bin/env python3
"""
this module provides the async_comprehension function.
"""

import asyncio
import typing
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """
    collects 10 random numbers using an async comprehensing
    over async_generator, then return the 10 random numbers.
    """
    # nums = []
    # async for i in async_generator():
    #     nums.append(i)
    # return nums
    nums = [n async for n in async_generator()]
    return nums
