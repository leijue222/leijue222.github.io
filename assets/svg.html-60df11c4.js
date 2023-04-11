import{_ as c,W as o,X as p,$ as e,a1 as l,a2 as s,C as u,Y as a,Z as n}from"./framework-7d1f27fd.js";const i={},r=s('<h2 id="矢量图形" tabindex="-1"><a class="header-anchor" href="#矢量图形" aria-hidden="true">#</a> 矢量图形</h2><p>在网上，您会和两种类型的图片打交道 — 位图和矢量图:</p><ul><li><p>位图使用像素网格来定义。</p><p>一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (.bmp), PNG (.png), JPEG (.jpg), and GIF (.gif.)</p></li><li><p>矢量图使用算法来定义。</p><p>一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 SVG 格式可以让我们创造用于 Web 的精彩的矢量图形。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>矢量图形相较于同样的位图，通常拥有更小的体积，因为它们仅需储存少量的算法，而不是逐个储存每个像素的信息。</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>SVG 是用于描述矢量图像的 XML 语言。它基本上是像 HTML 一样的标记，只是您有许多不同的元素来定义要显示在图像中的形状，以及要应用于这些形状的效果。 SVG 用于标记图形，而不是内容。您可以使用一些元素来创建简单图形，如 <code>&lt;circle&gt;</code> 和 <code>&lt;rect&gt;</code>。更高级的 SVG 功能包括 <code>&lt;feColorMatrix&gt;</code>(使用变换矩阵转换颜色)<code>&lt;animate&gt;</code> (矢量图形的动画部分)和 <code>&lt;mask&gt;</code>(在图像顶部应用模板)。</p>',6),d=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(`
  `),a("span",{class:"token attr-name"},"version"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("1.1"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"baseProfile"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("full"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("300"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"xmlns"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("http://www.w3.org/2000/svg"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("rect")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100%"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100%"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"fill"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("black"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("circle")]),n(),a("span",{class:"token attr-name"},"cx"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("150"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"cy"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"r"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("90"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"fill"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("blue"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),k=s('<p>从上面的例子可以看出，SVG 很容易人工编码。您可以在文本编辑器中手动编写简单的 SVG，但是对于复杂的图像，这就变得非常困难。</p><p>为了创建 SVG 图像，大多数人使用矢量图形编辑器，如 Inkscape 或 Illustrator。这些软件包允许您使用各种图形工具创建各种插图，并创建照片的近似值(例如 Inkscape 的跟踪位图功能)。</p><p>SVG 除了迄今为止所描述的以外还有其他优点:</p><ul><li>矢量图像中的文本仍然可访问(这也有利于 SEO)。</li><li>SVG 可以很好地适应样式/脚本，因为图像的每个组件都是可以通过 CSS 或通过 JavaScript 编写的样式的元素。</li></ul><p>SVG 也确实有一些缺点:</p><ul><li>SVG 非常容易变得复杂，这意味着文件大小会增加; 复杂的 SVG 也会在浏览器中占用很长的处理时间。</li><li>SVG 可能比栅格图像更难创建，具体取决于您尝试创建哪种图像。</li><li>旧版浏览器不支持 SVG，(非主要的原因，IE 8 及更低版本，Android 2.3 及更低版本)。</li></ul><p>由于上述原因，光栅图形更适合照片那样复杂精密的图像。</p><h2 id="添加到页面" tabindex="-1"><a class="header-anchor" href="#添加到页面" aria-hidden="true">#</a> 添加到页面</h2><h3 id="img" tabindex="-1"><a class="header-anchor" href="#img" aria-hidden="true">#</a> <code>&lt;img&gt;</code></h3><p>要通过 <code>&lt;img&gt;</code> 元素嵌入 SVG，您只需要按照预期的方式在 <code>src</code> 属性中引用它。您将需要一个 <code>height</code> 或 <code>width</code> 属性。</p>',10),m=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("img")]),n(`
  `),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/assets/img/vuepress-hope-logo.svg"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"alt"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("vuepress-theme-hope"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("87px"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100px"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},"/>")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),g=s('<p><strong>优点</strong>:</p><ul><li>快速，熟悉的图像语法与 <code>alt</code> 属性中提供的内置文本等效。</li><li>可以通过在 <code>&lt;a&gt;</code> 元素嵌套 <code>&lt;img&gt;</code>，使图像轻松地成为超链接。</li></ul><p><strong>缺点</strong>:</p><ul><li>无法使用 JavaScript 操作图像。</li><li>如果要使用 CSS 控制 SVG 内容，则必须在 SVG 代码中包含内联 CSS 样式。 (从 SVG 文件调用的外部样式表不起作用)</li><li>不能用 CSS 伪类来重设图像样式 (如 <code>:focus</code>)。</li></ul><h3 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容" aria-hidden="true">#</a> 兼容</h3><p>对于不支持 SVG (IE 8 及更低版本，Android 2.3 及更低版本) 的浏览器，您可以从 <code>src</code> 属性引用 PNG 或 JPG，并使用 <code>srcset</code> 属性来引用 SVG。 在这种情况下，支持的浏览器将加载 SVG，而较旧的浏览器将加载 PNG:</p>',6),h=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("img")]),n(`
  `),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/assets/img/vuepress-hope-logo.png"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"alt"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("vuepress-theme-hope"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"srcset"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("/assets/img/vuepress-hope-logo.svg"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100px"),a("span",{class:"token punctuation"},'"')]),n(`
`),a("span",{class:"token punctuation"},"/>")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),v=s(`<p>您还可以使用 SVG 作为 CSS 背景图像，如下所示。 在下面的代码中，旧版浏览器会坚持他们理解的 PNG，而较新的浏览器将加载 SVG:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;fallback.png&quot;</span><span class="token punctuation">)</span></span> no-repeat center<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;image.svg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>像上面描述的 <code>&lt;img&gt;</code> 方法一样，使用 CSS 背景图像插入 SVG 意味着它不能被 JavaScript 操作，并且也受到相同的 CSS 限制。</p><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3><p>您可以直接将 SVG 代码插入 HTML 文档中，这称为内联 SVG。确保您的 SVG 代码在 <code>&lt;svg&gt;&lt;/svg&gt;</code> 标签中(不要在外面添加任何内容)。</p>`,5),S=a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("svg")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("300"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("rect")]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100%"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("100%"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"fill"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("green"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("svg")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),b=s('<p><strong>优点</strong>:</p><ul><li>将 SVG 内联减少 HTTP 请求，可以减少加载时间。</li><li>您可以为 SVG 元素分配 class 和 id，并使用 CSS 修改样式，无论是在 SVG 中，还是 HTML 文档中的 CSS 样式规则。 实际上，您可以使用任何 SVG 外观属性 作为 CSS 属性。</li><li>内联 SVG 是唯一可以让您在 SVG 图像上使用 CSS 交互(如 <code>:focus</code>)和 CSS 动画的方法(即使在常规样式表中)。</li><li>您可以通过将 SVG 标记包在 <code>&lt;a&gt;</code> 元素中，使其成为超链接。</li></ul><p><strong>缺点</strong>:</p><ul><li>这种方法只适用于在一个地方使用的 SVG。多次使用会导致资源密集型维护(resource-intensive maintenance)。</li><li>额外的 SVG 代码会增加 HTML 文件的大小。</li><li>浏览器不能像缓存普通图片一样缓存内联 SVG。</li><li>您可能会在 <code>&lt;foreignObject&gt;</code> 元素中包含回退，但支持 SVG 的浏览器仍然会下载任何后备图像。您需要考虑仅仅为支持过时的浏览器，而增加额外开销是否真的值得。</li></ul><div class="hint-container tip"><p class="hint-container-title">总结</p><p>在 2023 年，显然内联 SVG 更加适合。</p></div>',5);function G(V,q){const t=u("CodeDemo");return o(),p("div",null,[r,e(t,{id:"code-demo-35",type:"normal",title:"%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%20SVG",code:"eJxFjkEOgjAQRa/SNHFLi8SFBD2DB+gGaqGNAzVtoRjj3Z2miKv5/+X/mXlTHUagNW38MoiJkEU5b+x0EbQsSkET6lqvbs72BhTifgbIPJp70EgqzjPQygw6IDn+yDrC5BHoEJ41YzHGIlaFdQPDCGfpJuauKdo4JcO+s+T8IOh/4+bxB0DXQSsfaFluSuMkKCLXFDzhaSJfuYPSoTonsXdntVWb9ABO+vkCsT9Q5g=="},{default:l(()=>[d]),_:1}),k,e(t,{id:"code-demo-91",type:"normal",title:"%E4%BD%BF%E7%94%A8%20img%20%E6%8F%92%E5%85%A5%20SVG",code:"eJw9yk0KhDAMQOGrSPZOndUMop6kG9HQFFpbTPwB8e5WC27f+w4g8Q5qaKw3eioKnodWg+qZUVilqNYF44zMJYWIpQsmfHg1Gm7dO0n6FULo8XF5E1pDt/j/4p7TZkehVL5VlZPq9ATnBbAsLo0="},{default:l(()=>[m]),_:1}),g,e(t,{id:"code-demo-135",type:"normal",title:"%E5%85%BC%E5%AE%B9%E4%B8%8A%E5%8F%A4%E6%B5%8F%E8%A7%88%E5%99%A8",code:"eJyFzDkKhUAQRdGtSOX+9qeirqQT0aJb6AmrHEDcu+WAqel7h7uBZe+ghGrwRocso7GrNaiWCJmUjGqeMI1IlNuYMHfRxF8KRsOpW8eiX8EWPV7uviUmme8ezU9vGXq24v9FkdZzUo0OsB8mUDpV"},{default:l(()=>[h]),_:1}),v,e(t,{id:"code-demo-151",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eJyrVsooyc1RslKyKS5LVyjPTCnJsI1RMjYwiFFSyEjNTM8oAXKNQFy7mDwFBZui1OQSuDJDAwNVZHVQflpmTg6Ql16UmpoH5OoDddroA40H0kq1ALHtIoA="},{default:l(()=>[S]),_:1}),b])}const E=c(i,[["render",G],["__file","svg.html.vue"]]);export{E as default};
