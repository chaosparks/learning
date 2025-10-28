<!-- test.md -->
---
title: 测试数据
---

<script setup>
import { data as posts } from './.vitepress/theme/posts.data'

console.log('加载的文章数据：', posts);
</script>

# 测试数据加载

<div>
  <p>共找到 {{ posts.length }} 篇文章</p>
  <pre>{{ JSON.stringify(posts, null, 2) }}</pre>
</div>