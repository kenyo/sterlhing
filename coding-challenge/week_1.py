n = 5
arr = [2, 3, 6, 6, 5]

# .sort() mutates original array
arr.sort()

max = arr[n - 1]

second_max = 0

for x in arr:
  if x < max:
    second_max = x

print(second_max)


# Complete the compareTriplets function below.
def compareTriplets(a, b):
    a_score = 0
    b_score = 0
    for i in range(3):
        if(a[i] > b[i]):
            a_score += 1
        elif(a[i] < b[i]):
            b_score += 1
        
    return (a_score, b_score)

  
import math
import os
import random
import re
import sys
import functools

# Complete the aVeryBigSum function below.
def aVeryBigSum(ar):
    return functools.reduce(lambda x, y: x + y, ar)
