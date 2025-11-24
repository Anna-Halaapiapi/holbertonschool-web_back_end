#!/usr/bin/env python3
"""
this module provides the type-annotaed asynchronous coroutine, wait_random.
"""

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    an asynchronous coroutine that waits for a random delay,
    between 0 and max_delay seconds and then returns it.
    """
    delay = random.uniform(0, max_delay)  # gets random float (a, b inclusive)
    await asyncio.sleep(delay)  # coroutine sleeps
    return delay
