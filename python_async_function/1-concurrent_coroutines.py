#!/usr/bin/env python3
"""
this module provides the type-annotaed asynchronous coroutine, wait_n.
"""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random
from typing import List


async def wait_n(n: int, max_delay: int) -> list[float]:
    """
    runs wait_random n times with the specified max_delay
    returns the list of all the delays.
    """
    delays = []
    for num in range(n):
        delay = await wait_random(max_delay)
        delays.append(delay)
    return delays
