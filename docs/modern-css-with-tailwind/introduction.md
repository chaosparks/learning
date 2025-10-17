---
prev:
  text: 'Tailwind 现代 CSS 样式 (第二版)'
  link: '/modern-css-with-tailwind/'
next:
  text: '第1章 Tailwind 入门'
  link: '/modern-css-with-tailwind/ch01'
---

# 简介

许多网页开发者低估了 CSS。

层叠样式表（CSS）让你可以控制信息的展示，并为页面增添视觉效果。CSS 非常强大，只需看看网站 [http://www.csszengarden.com](http://www.csszengarden.com) 就能明白。有了 CSS，你可以对网站上的基本文字和图片做出惊人的效果，再加上一点客户端代码来添加或移除 CSS 类，你能做的事情会呈指数级增长。

当然，CSS 也可能很难调试、编写复杂，甚至难以掌控。但其实不必如此。

这时，Tailwind 出场了。Tailwind CSS 是一个“实用优先”（utility-first）的 CSS 框架，让你“无需离开 HTML，就能快速构建现代网站”，它可以让你的网站 CSS 更易于控制和调试。在本书中，你将深入了解 Tailwind CSS 框架，探索它的排版、页面布局、响应式设计等内容。

## 为什么选择 Tailwind？

像 Bootstrap 这样的 CSS 框架提供的 CSS 类，其名字通常描述了它们的语义用途，比如 “button”（按钮）、“card”（卡片）或 “nav”（导航）。这些类往往会一次性定义一组 CSS 样式。

而 Tailwind 不同。

几乎所有基本的 Tailwind 工具类都是对单一 CSS 样式的薄封装，例如使用 `m-4` 设置 `margin: 1rem`，或 `text-lg` 改变文字大小为 `font-size: 1.125rem`。

举例来说，在 Bulma 框架中，一个按钮可能这样写：

```html
<button class="button is-primary">Click Me</button>
```

而在 Tailwind 中，可能会写成这样：

```html
<button class="bg-green-500 text-white font-bold py-3 px-4 rounded-lg text-center">
    Click Me
</button>
```

在 Tailwind 版本中，按钮的每个独立样式——绿色背景、白色文字、加粗字体、内边距、圆角和文字居中——都各自对应一个类，分别列在 class 列表中。


如果你像我一样，第一次看到那一长串类名时，可能会忍不住想：“啊——好烦啊。”确实，一开始要适应在 HTML 标记里放这么多小类名需要一些时间。如果你有这种反应，我完全理解。我只希望你给它一个机会，尝试一段时间后再判断感受。

Tailwind 的代码非常直观，仅通过查看 HTML 标记就能理解页面的展示效果。它也很适合那些前端框架，这些框架喜欢把大量 CSS 或 JavaScript 数据放在 HTML 标记中。如果你想打包一组类以便重复使用，Tailwind 提供了 `@apply` 指令，可以用它从 Tailwind 工具类创建新的 CSS 类。但通常建议，你还是用你所用的编程语言或框架的功能来管理重复代码。

Tailwind 的一个优势是，它让快速原型设计、迭代和自定义展示变得非常容易。比如，你想改变按钮的水平内边距，只需把 `px-4` 改成 `px-6` 就行。你无需猜测改动的范围，也不用担心页面其他部分会受到影响。你可以不断微调，直到展示效果完全满意。而且，你不必一直为可能不会复用的 CSS 属性组合去想名字。

另一个优势是，Tailwind 提供了一组修饰符，让你可以在特定情况下定义行为。例如，你可以加一个类 `hover:bg-blue-500`，其中 `hover` 修饰符表示只有当用户将鼠标悬停在按钮上时，背景颜色才会改变。Tailwind 还提供了一组修饰符，可以针对不同屏幕尺寸指定不同的行为。这些修饰符也是为什么使用 Tailwind 类如 `bg-blue-500` 比直接使用 DOM 样式属性（例如 `style="background-color: #cdcdcd"`）更好的原因之一。

最后但同样重要的是，使用 Tailwind 开发应用需要编写的 CSS 更少，大部分设计都来自 Tailwind 工具类的组合。这意味着你花在命名 CSS 和管理全局 CSS 上的时间更少，可以把更多精力放在网站的实际展示上。Tailwind 让你轻松进行渐进式修改、实时查看效果，并清楚了解改动的范围，这在新网站原型设计时尤其有用。

## 关于本书

本书将带你学习如何使用 Tailwind CSS 3.0 及以上版本设计网页。你将从单个元素的排版开始，然后了解“盒子”——每个元素所占的矩形空间——以及如何操作它。一旦你掌握了元素的盒子布局，就会进一步学习使用 flexbox 或网格（grid）进行页面布局。

之后，你会学习如何把单个页面组合成完整的网站。你还会了解常见的全站页面布局、在不同屏幕尺寸下管理设计，以及处理全站范围的样式和 CSS。

Tailwind 发展很快，所以自我写作本书以来，很可能已经新增了一些功能。Tailwind 官方文档提供了版本更新说明和升级指南页面。（抱歉，更新说明的 URL 会随版本变化，但可以在 Tailwind 官方文档 [https://tailwindcss.com/docs](https://tailwindcss.com/docs) 中找到链接。）建议查看这些页面，以了解最新变化。

## 适合读者

为了让本书简明扼要，我做了一些假设：

* 我假设你已经了解 CSS 的基础语法和概念。本书重点讲 Tailwind，而不是原生 CSS。如果你想更深入地理解 CSS 及其特性，可以参考 Julia Evans 的小册子 *Hell Yes! CSS!*。
* 我假设你能够访问 Tailwind 的参考文档。Tailwind 的官方文档非常完整，且易于浏览。本书不会成为 Tailwind 功能的完整参考，而是聚焦于最常用的功能以及如何成功使用它们。

## 运行示例应用

本书的示例代码非常简单，由几页静态 HTML 构成，并链接到使用 Tailwind CLI 生成的静态 CSS 文件，没有使用任何框架或动态内容。

要运行示例代码，你需要从 Pragmatic Bookshelf 网站上本书的页面下载它。要查看示例代码，只需在浏览器中以文件形式打开 `html` 目录下的任意 HTML 页面。页面会链接到 `css/output.css` 文件，该文件已使用 Tailwind CLI 预生成。（关于如何使用 Tailwind CLI 处理这些代码，请参考第 2 页的“使用示例代码”章节。）

请注意，自本书发布以来，世界可能已经发生变化，Tailwind CLI 的分发设置和命令也有所更新。如果这些说明不适用，请访问本书论坛获取更多讨论和支持。谢谢！