#!/bin/bash

# Check if no arguments were supplied
if [ "$#" -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

# Loop through all arguments
for arg in "$@"
do
  mkdir "ex$arg"
done