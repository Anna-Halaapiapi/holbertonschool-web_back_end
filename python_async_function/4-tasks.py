#!/usr/bin/env python3
"""
this module provides the type-annotaed asynchronous coroutine, task_wait_n.
"""

import asyncio
import typing
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    """
    runs wait_random n times with the specified max_delay
    returns the list of all the delays.
    """
    # build list of coroutine objects
    tasks = []
    for num in range(n):
        task = task_wait_random(max_delay)
        tasks.append(task)

    delays = []
    # start all coros same time, get results back in completion order via loop
    for coroutine in asyncio.as_completed(tasks):
        delay = await coroutine
        delays.append(delay)

    return delays
