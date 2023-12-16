# 二十个知识点，学前端必知！

## 一、HTML 1.对 HTML 语义化的理解

见标签知其意思 `header` `main` `nav` `aside` `footer` `h1`-`h6` `ul` `li`

::: tip
结构清晰、方便搜索引擎搜素（seo）、方便理解维护
:::

### 2.区别：src 和 href

- **src**

  比如常见的 这里的 src 所指的是这个图片的所在的位置路径，script 和 iframe 也是，src 被解析的时候，会进行下载并编译，同时会暂停该文档其他资源的下载和处理，所以 js 文件的载入最好在 body 中，而不是在 head 中。

- **href**

  href 被添加，元素会被识别为 css 文件进行处理，且不会停止其它资源的运行。所以建议用 link 加载 css 文件，而不是 @import。

常用的有：超链接、引用 css 样式

### 3.DOCTYPE 的作用

DOCTYPE 是文档类型 document type 的缩写。主要作用是告诉浏览器的解析器使用哪种 HTML 规范来解析页面。而如果 DOCTYPE 缺失，或形式不正确，会导致 html 文档或 HTML 文档不是以标准模式（浏览器对页面的渲染具有统一的规范）而是以混杂模式（不同浏览器有不同的的页面渲染）运行。

### 4.HTML5 的新特性

简化了文档声明，HTML5 的文档声明只需要

简化了编码声明，只需要

删除了一些能用 CSS 代替的就标签，比如

增加了一些新标签，改善文档结构的

增加了一些新的 JavaScript 的 API ，比如地理定位、请求动画帧、离线存储等

配合一些框架，例如 cordova 和 react 等，可以开发基于 HTML5 的移动应用。

### 5.script 标签中的 defer 和 async

作用：平常的 script 标签如果直接使用， html 会按顺序下载和执行脚本，并阻碍后续 DOM 的渲染。如果 script 发生延迟，就会阻碍后续的渲染，使得页面白屏。

**defer**

异步下载文件

不阻碍 dom 的渲染

如果有多个 defer 会按顺序执行

执行顺序：在文档渲染后执行，在 DOMContentLoader 事件调用前执行。

**async**

异步下载文件

不影响 dom

如果有多个 defer 谁快先执行谁

推荐的应用场景：

defer：如果你的脚本代码依赖于页面中的 dom 元素（文档是否解析完毕），并且也不会产生其他脚本需要的数据。

async：如果你的脚本并不关心页面中的 dom 元素（文档是否解析完毕），并且也不会产生其他脚本需要的数据。

### 6.行内元素 块级元素 空元素

行内元素：`a` `b` `span` `input` `img` `strong` `br` `em` `big` `small`

块元素：`div` `ul` `ol` `li` `h1`-`h6` `p` `dl` `dt` `address`

空元素：`img` `input` `link` `meta`

### 7.meta 标签

meta 元素被用于规定页面的描述、关键词、文档的作者、最后的修改时间以及其他元数据。标签始终位于 head 元素中。

meta 属性：必选属性 content-进行描述说明的， 相当于键值；可选属性 http-equiv、name 和 scheme, http-equiv-添加 http 头部内容，name-浏览器解析

包括：

- charset charset 定义使用的字符编码
- SEO #网页关键词 #网页描述
- viewport

### 8.JPG 和 PNG 的区别

1. JPG 是有损压缩格式，PNG 是无损压缩格式
2. JPG 图片没有透明背景，PNG 有透明背景

## 二、CSS

### 1.CSS 选择器，优先级

Import>内联 1000>id100>class==伪类==属性选择器 10>元素选择器 伪元素选择器

### 2.CSS 动画

`transition` 和 `animation` 的区别

大部分都是相同，都是随着时间改变元素的属性值，

他们的主要区别是 transition 需要触发一个事件才能改变属性，而 animation 不需要触发任何事件就可以实行。

transition 为两帧，从 from…to… 而 animation 可以一帧一帧的通过 keyframes。

### 3.CSS 选择器效率从高到低的排序如下：

Id>class>元素选择器>兄弟选择器>子代选择器>后代选择器>属性选择器>伪元素 伪类

ID 选择器 比如#header

类选择器 比如.promo

元素选择器 比如 div

兄弟选择器 比如 h2 + p

子选择器 比如 li > ul

后代选择器 比如 ul a 7. 通用选择器 比如 \*

属性选择器 比如 type = “text”

伪类/伪元素选择器 比如 a:hover

### 4.flex 布局

flex 是 css3 新增的一种布局方式,我们可以同时设置一个元素的 display 属性值设置为 flex,
从而使它成为一个 flex 容器，它的所有子元素都成为它的项目。

一个容器默认有两条轴，一个水平轴，一条是与主轴垂直的交叉轴

flex-direction 来指定主轴的方向。

justify-content 来指定标签在主轴的排列方式，

使用 align-items 来指定元素在交叉轴的排序方式。

还可以使用 flex-wrap 来规定当一行排列不下时的换行方式。

对于一个容器的项目，

使用 order 属性来指定项目的排列顺序，

flex-grow 来指定当前排序空间有剩余的时候，项目放大比例。

flex-shrink 来指定当前排序空间不足时， 项目缩小比例。

### 5.position 有几个值，absolute 是相对于谁的定位

absolute ：生成绝对定位的元素，相对于最近一级的父元素，且该父元素不能是 static，来进行定位。

fixed：（老 IE 不支持）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。

relative：生成相对定位的元素，相对于其在普通流中的位置进行定位。

static：默认值。没有定位，元素出现在正常的流中

## 三.Javascript

### 1.原始值和引用值类型及区别

原始值（简单数据类型）：存储在栈中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。

包含五种简单数据类型：undefined、null、boolean、number 和 string ；可以通过 typeof 运算符来判断一个值是否在某种类型的范围内，如果它是原始类型，还可以判断它表示哪种原始类型。

引用值（复杂数据类型）：存储在堆中的对象，放在变量的栈空间中的值是该对象存储在堆中的地址，也就是说，存储在变量处的值是一个指针（内存地址），指向存储对象的堆内存中。

包含：Object、function、array 等。

### 2.JavaScript 数据类型以及 typeof 返回值

数据类型：number、string、null、boolean、object、undefined、symbol

`typeof x undefined`

`typeof undefined undefined`

`typeof true boolean`

`function A() {}`

`typeof A function`

`const arr = []`

`const obj = {}`

`typeof arr object`

`typeof obj object`

### 3.类数组与数组的区别：

相同点：

都可用下标访问每个元素，都有 length 属性。

不同点：

数组对象的类型是 Array,类数组对象的类型是 object;

类数组不具有数组所具有的方法，

数组遍历可以用 for in 和 for 循环

类数组只能用 for 循环遍历。

常见的类数组有: 函数的参数 arguments，arguments 是一个类数组对象，包含着传入函数中的所有实参集合

### 4.数组常用的 api

字符转换 toString 方法将数组表示为字符串

`join()` 方法，将数组里 各元素组合成字符串，但连接符可自己指定

`unshift()` 方法，是将元素插入数组的首部。

`shift()` 方法移除数组的第一个元素并将其返回

`push()` 方法一次可添加单个或多个元素到数组末端，也可以添加数组。

`pop()` 方法的作用是移除数组末尾的一个元素

### 5.bind、call、apply 的区别：

三者都是用于改变函数体内 this 的指向，但是 bind 与 apply 和 call 的最大的区别是：bind 不会立即调用，而是返回一个新函数，称为绑定函数，其内的 this 指向为创建它时传入 bind 的第一个参数，而传入 bind 的第二个及以后的参数作为原函数的参数来调用原函数

apply 和 call 都是为了改变某个函数运行时的上下文而存在的（就是为了改变函数内部 this 的指向）；apply 和 call 的调用返回函数执行结果；

如果使用 apply 或 call 方法，那么 this 指向他们的第一个参数，apply 的第二个参数是一个参数数组，call 的第二个及其以后的参数都是数组里面的元素，就是说要全部列举出来；

**Bind:返回绑定函数，传入参数数列**

**Apply:传入参数数组**

**Call:传入参数数列**

### 6.new 原理

**mdn**上把内部操作大概分为 4 步：

创建一个空的简单 JavaScript 对象（即{ } ）；

链接该对象（即设置该对象的构造函数）到另一个对象 ；(因此 this 就指向了这个新对象)

执行构造函数中的代码（为这个新对象添加属性）；

如果该函数没有返回对象，则返回 this。

### 7.闭包

有权访问另一个函数作用域中的变量的函数；

第一，闭包是一个函数，而且存在于另一个函数当中

第二，闭包可以访问到父级函数的变量，且该变量不会销毁

作用 1：隐藏变量，避免全局污染

作用 2：可以读取函数内部的变量

### 8.浅拷贝与深拷贝

浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

**赋值和浅拷贝的区别**

当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。

浅拷贝是按位拷贝对象，它会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址（引用类型），拷贝的就是内存地址

**浅拷贝的实现方式**

Object.assign()

Object.assign() 进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。当 object 只有一层的时候，是**深拷贝的实现方式**

Array.prototype.concat()

修改新对象会改到源对象

### 9.作用域

为可访问变量，对象，函数的集合

作用域链是[[Scope]]中所存储的执行期上下文的集合

一个执行期上下文定义了一个函数执行的环境

### 10.ajax 的请求过程

## 一、原生 JS 中的 Ajax

### 1、使用 ajax 发送数据的步骤

#### 第一步：创建异步对象

```js
var xhr = new XMLHttpRequest(); // [!code  focus]
```

#### 第二步：设置 请求行 open(请求方式，请求 url):

```js
// get 请求如果有参数就需要在 url 后面拼接参数，

// post 如果有参数，就在请求体中传递 xhr.open("get","validate.php?username="+name)

xhr.open('post', 'validate.php'); // [!code focus]
```

#### 第三步：设置请求（GET 方式忽略此步骤）头:setRequestHeader()

```js
// 1.get 不需要设置

// 2.post 需要设置请求头：Content-Type:application/x-www-form-urlencoded

xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // [!code focus]
```

#### 第四步：设置请求体 send()

```js
// 1.get 的参数在 url 拼接了，所以不需要在这个函数中设置

// 2.post 的参数在这个函数中设置(如果有参数)

xhr.send(null) xhr.send("username="+name); // [!code focus]
```

#### 第五步：让异步对象接收服务器的响应数据
