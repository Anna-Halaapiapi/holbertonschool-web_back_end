#!/usr/bin/env python3
"""
this module provides the measure_time function.
"""

import typing
import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n

def measure_time(n: int, max_delay: int) -> float:
    """
    measures total execution time for wait_n(n, max_delay).
    returns total_time / n.
    """
    start_time = time.time() # gets current time in seconds

    asyncio.run(wait_n(n, max_delay)) # code to be measured

    end_time = time.time()
    total_time = end_time - start_time

    return total_time/n
