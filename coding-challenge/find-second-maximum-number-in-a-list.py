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
