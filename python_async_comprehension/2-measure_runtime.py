#!/usr/bin/env python3
"""
this module provides the measure_runtime function.
"""

import asyncio
import typing
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    coroutine that executes async_comprehension
    four times in parallel using asyncio.gather.
    measures and returns total runtime.
    """
    start_time = time.time()  # get current time in seconds

    # code to be measured
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
        )

    end_time = time.time()
    total_runtime = end_time - start_time
    return total_runtime
