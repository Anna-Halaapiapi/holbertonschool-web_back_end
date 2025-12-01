#!/usr/bin/env python3
"""
this module provides the task_wait_random function.
"""

from asyncio import Task
import typing
import time
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> Task:
    """
    returns a asyncio.Task
    """
    return asyncio.create_task(wait_random(max_delay))