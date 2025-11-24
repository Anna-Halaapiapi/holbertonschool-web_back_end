#!/usr/bin/env python3

import asyncio
import typing
wait_random = __import__('0-basic_async_syntax').wait_random

"""
this module provides the type-annotaed asynchronous coroutine, wait_n.
"""


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    """
    runs wait_random n times with the specified max_delay
    returns the list of all the delays.
    """
    delays = []
    for num in range(n):
        delay = await wait_random(max_delay)
        delays.append(delay)
    return delays
