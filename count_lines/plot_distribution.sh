#!/bin/bash

find . -name '*.c' | xargs wc -l > cfiles.txt
find . -name '*.h' | xargs wc -l > hfiles.txt
python3 plot_distribution.py
