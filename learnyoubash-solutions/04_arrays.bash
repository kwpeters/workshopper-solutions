#!/usr/bin/env bash

a=(I am ${*:2:2} and $4)
echo "${a[*]}"
