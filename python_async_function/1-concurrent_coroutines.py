#!/usr/bin/env python3
"""
this module provides the type-annotaed asynchronous coroutine, wait_n.
"""

import asyncio
import typing
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    """
    runs wait_random n times with the specified max_delay
    returns the list of all the delays.
    """
    # build list of coroutine objects
    tasks = []
    for num in range(n):
        task = wait_random(max_delay)
        tasks.append(task)

    delays = []
    # start all coros same time, get results back in completion order via loop
    for coroutine in asyncio.as_completed(tasks):
        delay = await coroutine
        delays.append(delay)

    return delays
