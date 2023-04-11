const e=JSON.parse(`{"key":"v-803a1cf6","path":"/tutorial/ops/linux/bash/archives/regex.html","title":"正则表达式","lang":"zh-CN","frontmatter":{"description":"正则表达式 正则表达式是表达文本模式的方法。 .: 匹配任何单个字符。 ?: 上一项是可选的，最多匹配一次。 *: 前一项将被匹配零次或多次。 +: 前一项将被匹配一次或多次。 {N}: 上一项完全匹配 N 次。 {N，}: 前一项匹配 N 次或多次。 {N，M}: 前一项至少匹配 N 次，但不超过 M 次。 --: 表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。 ^: 匹配行首的空字符串；也代表不在列表范围内的字符。 $: 匹配行尾的空字符串。 \\\\b: 匹配单词边缘的空字符串。 \\\\B: 匹配空字符串，前提是它不在单词的边缘。 \\\\&lt;: 匹配单词开头的空字符串。 \\\\&gt;: 匹配单词末尾的空字符串。","head":[["meta",{"property":"og:url","content":"https://leijue222.github.io/tutorial/ops/linux/bash/archives/regex.html"}],["meta",{"property":"og:site_name","content":"Yuze's Blog"}],["meta",{"property":"og:title","content":"正则表达式"}],["meta",{"property":"og:description","content":"正则表达式 正则表达式是表达文本模式的方法。 .: 匹配任何单个字符。 ?: 上一项是可选的，最多匹配一次。 *: 前一项将被匹配零次或多次。 +: 前一项将被匹配一次或多次。 {N}: 上一项完全匹配 N 次。 {N，}: 前一项匹配 N 次或多次。 {N，M}: 前一项至少匹配 N 次，但不超过 M 次。 --: 表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。 ^: 匹配行首的空字符串；也代表不在列表范围内的字符。 $: 匹配行尾的空字符串。 \\\\b: 匹配单词边缘的空字符串。 \\\\B: 匹配空字符串，前提是它不在单词的边缘。 \\\\&lt;: 匹配单词开头的空字符串。 \\\\&gt;: 匹配单词末尾的空字符串。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-11T02:47:21.000Z"}],["meta",{"property":"article:author","content":"Yuze"}],["meta",{"property":"article:modified_time","content":"2023-04-11T02:47:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"正则表达式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-11T02:47:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Yuze\\",\\"url\\":\\"https://leijue222.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"元字符","slug":"元字符","link":"#元字符","children":[]},{"level":2,"title":"方括号","slug":"方括号","link":"#方括号","children":[]},{"level":2,"title":"预定义字符类","slug":"预定义字符类","link":"#预定义字符类","children":[]},{"level":2,"title":"选择","slug":"选择","link":"#选择","children":[]},{"level":2,"title":"量词操作符","slug":"量词操作符","link":"#量词操作符","children":[]}],"git":{"createdTime":1681181241000,"updatedTime":1681181241000,"contributors":[{"name":"leijue222","email":"dyw222@foxmail.com","commits":1}]},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"tutorial/ops/linux/bash/archives/regex.md","localizedDate":"2023年4月11日","excerpt":"<h1> 正则表达式</h1>\\n<p><code>正则表达式</code>是表达文本模式的方法。</p>\\n<ul>\\n<li><code>.</code>: 匹配任何单个字符。</li>\\n<li><code>?</code>: 上一项是可选的，最多匹配一次。</li>\\n<li><code>*</code>: 前一项将被匹配零次或多次。</li>\\n<li><code>+</code>: 前一项将被匹配一次或多次。</li>\\n<li><code>{N}</code>: 上一项完全匹配 N 次。</li>\\n<li><code>{N，}</code>: 前一项匹配 N 次或多次。</li>\\n<li><code>{N，M}</code>: 前一项至少匹配 N 次，但不超过 M 次。</li>\\n<li><code>--</code>: 表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。</li>\\n<li><code>^</code>: 匹配行首的空字符串；也代表不在列表范围内的字符。</li>\\n<li><code>$</code>: 匹配行尾的空字符串。</li>\\n<li><code>\\\\b</code>: 匹配单词边缘的空字符串。</li>\\n<li><code>\\\\B</code>: 匹配空字符串，前提是它不在单词的边缘。</li>\\n<li><code>\\\\&lt;</code>: 匹配单词开头的空字符串。</li>\\n<li><code>\\\\&gt;</code>: 匹配单词末尾的空字符串。</li>\\n</ul>","autoDesc":true}`);export{e as data};
