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
