Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.
珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.
珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.
珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。


Return the minimum integer K such that she can eat all the bananas within H hours.
返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。


- H 时间
- K  K*H
- k min  
    1吃不完
    20 H 就吃完了

1. 把香蕉表达一下
    .lenght H
    [3, 6, 7, 11] H = 8
    MAX = 11  MIN = 4

    [30, 11, 23, 4, 20] H = 5
    MAX = 30  
2. Max  规则 Max（arr）
3. Max-- 正好在H小时内吃完
    >H 这个就找到
4. 怎么可以高效解决  【二分查找】    

- JS数据类型
   基础数据类型： 整型 Number String Boolean Undefined Null Symbol
   复查数据类型：Object  [Array， Function， Math， Regexp， Date]
    Math.max()
- ...spread 展开数组
    ...reset 收起

- coco 
    while(1 -> Math.max(...piles)) 把吃每把香蕉花的小时数加起来
    piles -> pile -> Math.ceil(pile/low)
- 减少写尝试 
    1 ->  Max  二分查找