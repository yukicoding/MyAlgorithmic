## 题目描述
---

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

[原题地址](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

## 思路与想法
---

1. 判断是否两个链表都不为空
2. 注意顺序问题,val更小的应该优先
3. 如若一方为空，则优先另一方


## 代码  
---

```javascript
let now = new ListNode(0)
let ans = now;
while(l1!==null&&l1!==null){
    if(l1.val<l2.val){
        now.next = l1;
        l1 = l1.next;

    }else{
        now.next = l2;
        l2 = l2.next;
    }
    now = now.next
    if(l1===null){
        now.next = l2;
    }else{
        now.next = l1
    }
    return ans.next
}
```

## 复杂度分析

- 时间复杂度：O(n+m)
- 空间复杂度：O(n+m)

---
