def plusMinus(arr):
    arr_len = len(arr)
    plus = 0
    minus = 0
    zero = 0
    
    for x in arr:
        if(x > 0):
            plus += 1
        elif(x < 0):
            minus += 1
        else:
            zero += 1 
    
    print("{0:.6f}".format(plus/arr_len))
    print("{0:.6f}".format(minus/arr_len))
    print("{0:.6f}".format(zero/arr_len))

def staircase(n):
    for x in range(n):
        print(" " * (n-x-1) + "#" * (x+1))

        
def miniMaxSum(arr):
    arr.sort()
    mini_sum = 0 
    max_sum = 0
    
    for i, x in enumerate(arr):
        if i != 4:
            mini_sum += x
        if i != 0:
            max_sum += x
    
    print(str(mini_sum) + " " + str(max_sum))
    
def birthdayCakeCandles(candles):
    candles.sort()
    largest_candle = candles[candles_count - 1]
    
    large_count = 0
    
    for x in candles:
        if x == largest_candle:
            large_count += 1
    
    return(large_count)

def timeConversion(s):
    if(s[-2] == "A"):
        if s[0:2] == "12":
            return "00" + s[2:-2]
        else:
            return s[:-2]
    else:
        if s[0:2] == "12":
            return s[:-2]
        else:
            return str(int(s[0:2]) + 12) + s[2:-2]
