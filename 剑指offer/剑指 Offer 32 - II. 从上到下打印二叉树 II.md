

## 题目描述




[原题地址](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/solution/mian-shi-ti-32-ii-cong-shang-dao-xia-da-yin-er-c-5/)

## 思路与想法


新建一个临时列表 tmp ，用于存储当前层打印结果；
当前层打印循环： 循环次数为当前层节点数（即队列 queue 长度）；
出队： 队首元素出队，记为 node；
打印： 将 node.val 添加至 tmp 尾部；
添加子节点： 若 node 的左（右）子节点不为空，则将左（右）子节点加入队列 queue ；
将当前层结果 tmp 添加入 res 。
返回值： 返回打印结果列表 res 即可。

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
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {

        Queue<TreeNode> queue = new LinkedList<>();
        ArrayList<List<Integer>> res = new ArrayList<>();
        if(root!=null) queue.add(root);
        while(!queue.isEmpty()){
            List<Integer> temp = new ArrayList<>();
            for(int i= queue.size();i>0;i--){
                TreeNode node =   queue.poll();
                temp.add(node.val);
                if(node.left!=null) queue.add(node.left);
                if(node.right!=null) queue.add(node.right);
            }
            res.add(temp);
        }
        return res;
    }
}

```

## 复杂度分析
时间复杂度 O(N)O(N) ： NN 为二叉树的节点数量，即 BFS 需循环 NN 次。
空间复杂度 O(N)O(N) ： 最差情况下，即当树为平衡二叉树时，最多有 N/2N/2 个树节点同时在 queue 中，使用 O(N)O(N) 大小的额外空间。

