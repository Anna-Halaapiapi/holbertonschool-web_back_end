#!/usr/bin/env python3
"""
this module provides the async_generator function.
"""

import asyncio
import random
import typing


async def async_generator() -> typing.Generator[float, NoneType, NoneType]:
    """
    for each loop, waits 1 second then yields a random number.
    repeats loop 10 times.
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.randint(0, 10)
