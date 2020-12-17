from functools import reduce

if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    
    print ("{:0.2f}".format(reduce(lambda x, y: x + y, student_marks[query_name]) / len(student_marks[query_name])))

    
if __name__ == '__main__':
    # function to get unique values 
    def unique(list1): 
      
        # intilize a null list 
        unique_list = [] 
          
        # traverse for all elements 
        for x in list1: 
            # check if exists in unique_list or not 
            if x not in unique_list: 
                unique_list.append(x)
        
        return unique_list
      
    nested_list = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        
        nested_list.append([name, score])
    
    nested_list.sort(key = lambda x: x[1])
    scores = unique(map(lambda x: x[1], nested_list))
    second_lowest_score = scores[1]
    
    second_lowest_students = []
    for pair in nested_list:
      if pair[1] == second_lowest_score:
        second_lowest_students.append(pair[0])
    
    second_lowest_students.sort()
    for s in second_lowest_students:
      print(s)    
