---
title: Tailwind 现代 CSS 样式前言
date: 2025-10-17 12:01:01
category: web
tags:
  - css
  - tailwind
prev:
  text: 'Tailwind 现代 CSS 样式 (第二版)'
  link: '/modern-css-with-tailwind/'
next:
  text: '简介'
  link: '/modern-css-with-tailwind/introduction'
---

# Tailwind 现代 CSS 样式前言

本书讲解的是 Tailwind 3.0，它显著改变了 Tailwind CSS 的工作方式以及大多数开发者与它的交互方式。

Tailwind 3.0 引入了即时编译（JIT）引擎，这改变了 Tailwind 决定生成哪些 CSS 代码并提供给浏览器的方式。Tailwind 是一大套 CSS 类，每个类对应一组 CSS 属性。在以前的版本中，Tailwind 会生成一份 CSS 类列表，然后允许你指定想要删除的类，以控制 Tailwind 文件的大小，从而提升性能。

JIT 引擎则颠倒了这个过程。现在，Tailwind 的命令行工具从一个空文件开始，根据匹配到的前端代码模式，将实用的 CSS 类动态添加到文件中。不再需要预先列出所有可能的 Tailwind 类，这使得工具变得更加灵活和强大。例如，Tailwind 现在允许你在一个类中同时指定背景颜色和透明度，如 `bg-yellow-700/50`，颜色在前，斜杠后为透明度。以前，这种语法可能产生的类数量太多，管理成本几乎不可承受。

Tailwind 提供了一系列修饰符，可以在特定条件下有选择地应用类，比如 hover 或 focus。在以前的 Tailwind 版本中，默认只启用了一小部分修饰符，因为每个修饰符都会增加一整套潜在的 Tailwind 类。而有了 JIT 引擎，不再需要从潜在类的列表开始，所有修饰符现在都默认启用，并且还新增了几个修饰符。

在 Tailwind 3.0 中，许多以前只能使用固定值的功能，现在允许使用任意值，比如 `m-[43px]` 可以设置精确的 43 像素边距。虽然不建议经常这样做——Tailwind 的一个优势就是度量单位的一致性——但有时候你确实需要一次性值，而 Tailwind 3.0 让这件事变得轻松多了。

由于 JIT 引擎的引入，几乎可以说你在 Tailwind 2.0 中使用的所有功能仍然存在，而且它们都变得更加灵活。
我在本书中尝试在讲解时注意到这一点，会标注哪些模式现在可以使用任意值，但并不提倡频繁使用这些模式。

另外，Tailwind 的安装方式也发生了变化，现在可以选择使用一个独立的命令行工具，不再依赖 NodeJS。正因为如此，我得以将本书的示例代码简化——现在只需一个静态 HTML 文件和一个对应的 Tailwind CSS 文件即可。Tailwind 的一些具体功能也有了显著变化，比如颜色相关的功能，同时配置选项也有一些调整。

所以，欢迎来到 Tailwind 3.0！如果这是你第一次接触 Tailwind，希望本书能帮你顺利掌握这个工具的复杂性；如果你已经读过第一版，希望在本版中能找到针对 Tailwind 最新版本的清晰指南。

