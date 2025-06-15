#!/bin/bash
# count=$(find . -maxdepth 1 \( -type f -o -type d \) | tail -n +2 | wc -l)
find . -maxdepth 1 \( -type f -o -type d \) | tail -n +2 | wc -l