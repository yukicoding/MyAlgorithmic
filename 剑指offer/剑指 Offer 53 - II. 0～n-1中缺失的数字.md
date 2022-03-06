## 题目描述




[原题地址](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

## 思路与想法


1. 遇到数组查询时使用二分法解决
2. 这是2个有序的数组，需要判断mid值是否大于right，如果大于，则表示mid右边是有序的且存在最小值的，反之左边有序。
3. 如果存在多个值相同的情况，需要暴力将right左移

## 代码  


```java

class Solution {
    public int minArray(int[] numbers) {
        //对数组进行索引取值用二分法1
        int left = 0;
        int right = numbers.length-1;
        while(left<right){
            int m = (left + right) / 2;
            //说明右边是有序的，且m一定不是最小的，所以最小的数在左边
            if(numbers[m]>numbers[right]){
              left = m+1;
               
            }else if(numbers[m]<numbers[right]){
               right = m;
            }else{
                right-=1;
            }
        }
        return numbers[left];
    }
}

```

## 复杂度分析
- 时间复杂度：O(log2n)
- 空间复杂度：O(1)