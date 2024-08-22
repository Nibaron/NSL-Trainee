**Sliding Window Technique** is a method used to efficiently solve problems that involve defining a **window** or    **range** in the input data (arrays or strings) and then moving that window across the data to perform some operation within the    window. This technique is commonly used in algorithms like finding    subarrays with a specific sum, finding the longest substring with    unique characters, or solving problems that require a fixed-size    window to process elements efficiently.

### Types of Sliding Windows:
#  **1. Fixed Sized Window**
![image](https://github.com/Nibaron/LEETCODER/assets/36547410/d35e6af4-dda7-4b0b-890e-ab9373da0adb)

### Template

![image](https://github.com/Nibaron/LEETCODER/assets/36547410/d7c546a6-1414-402a-9df5-19424a300487)
```cpp
       int n=s.size();
        int left=0, right=0;
        int sum=0,maxSum=0;

        while(right<n)
        {
            sum += nums[right];

            if(right-left + 1 == k)
            {
                maxSum= max(maxSum, sum);
                sum -= nums[left];
                left++;
            }
            right++;
        }
        return maxSum;
    }
```
Fixed Sliding Window:  
4)[https://leetcode.com/problems/maximum-average-subarray-i/](https://leetcode.com/problems/maximum-average-subarray-i/)(Leetcode 643)  
5)[https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)(Leetcode 1343)  
6)[https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/)(Leetcode 1461)  
7)[https://leetcode.com/problems/find-all-anagrams-in-a-string/](https://leetcode.com/problems/find-all-anagrams-in-a-string/)(Leetcode 438)  
8)[https://leetcode.com/problems/permutation-in-string/](https://leetcode.com/problems/permutation-in-string/)(Leetcode 567)  