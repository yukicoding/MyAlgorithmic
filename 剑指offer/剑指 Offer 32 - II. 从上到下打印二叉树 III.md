

## 题目描述




[原题地址](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

## 思路与想法

与之前方法一致，只是需要判断奇数偶数层级
利用双端队列的两端皆可添加元素的特性，设打印列表（双端队列） tmp ，并规定：
奇数层 则添加至 tmp 尾部 ，
偶数层 则添加至 tmp 头部 。


## 代码  


```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        List<List<Integer>> res = new ArrayList<>();

        if(root!=null) queue.add(root);

        while(!queue.isEmpty()) {
            LinkedList<Integer> tmp = new LinkedList<>();
            for(int i = queue.size(); i > 0; i--) {
                TreeNode node = queue.poll();
                if(res.size() % 2 == 0) tmp.addLast(node.val); // 偶数层 -> 队列头部
                else tmp.addFirst(node.val); // 奇数层 -> 队列尾部
                if(node.left != null) queue.add(node.left);
                if(node.right != null) queue.add(node.right);
            }
            res.add(tmp);
        }

        return res;
    }
}

```

## 复杂度分析
时间复杂度 O(N)O(N) ： NN 为二叉树的节点数量，即 BFS 需循环 NN 次，占用 O(N)O(N) ；双端队列的队首和队尾的添加和删除操作的时间复杂度均为 O(1)O(1) 。
空间复杂度 O(N)O(N) ： 最差情况下，即当树为满二叉树时，最多有 N/2N/2 个树节点 同时 在 deque 中，使用 O(N)O(N) 大小的额外空间。


