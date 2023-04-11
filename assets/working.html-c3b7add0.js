const t=JSON.parse(`{"key":"v-18e56ada","path":"/tutorial/ops/git/working.html","title":"Git 原理","lang":"zh-CN","frontmatter":{"title":"Git 原理","icon":"creative","order":13,"category":"Git","tag":["Git","软件"],"description":"Git 究竟是怎样的一个系统呢? 尽管 Git 用起来与其它的版本控制系统非常相似，但它在对信息的存储和认知方式上却有很大差异。 直接记录快照，而非差异比较 Git 和其它版本控制系统(包括 Subversion 和近似工具)的主要差别在于 Git 对待数据的方法。从概念上来说，其它大部分系统以文件变更列表的方式存储信息，这类系统(CVS、Subversion、Perforce、Bazaar 等等)将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 (它们通常称作 基于差异(delta-based) 的版本控制)。 基于差异","head":[["meta",{"property":"og:url","content":"https://leijue222.github.io/tutorial/ops/git/working.html"}],["meta",{"property":"og:site_name","content":"Yuze's Blog"}],["meta",{"property":"og:title","content":"Git 原理"}],["meta",{"property":"og:description","content":"Git 究竟是怎样的一个系统呢? 尽管 Git 用起来与其它的版本控制系统非常相似，但它在对信息的存储和认知方式上却有很大差异。 直接记录快照，而非差异比较 Git 和其它版本控制系统(包括 Subversion 和近似工具)的主要差别在于 Git 对待数据的方法。从概念上来说，其它大部分系统以文件变更列表的方式存储信息，这类系统(CVS、Subversion、Perforce、Bazaar 等等)将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 (它们通常称作 基于差异(delta-based) 的版本控制)。 基于差异"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://leijue222.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-11T02:47:21.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Git 原理"}],["meta",{"property":"article:author","content":"Yuze"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2023-04-11T02:47:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 原理\\",\\"image\\":[\\"https://leijue222.github.io/\\"],\\"dateModified\\":\\"2023-04-11T02:47:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Yuze\\",\\"url\\":\\"https://leijue222.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"直接记录快照，而非差异比较","slug":"直接记录快照-而非差异比较","link":"#直接记录快照-而非差异比较","children":[]},{"level":2,"title":"近乎所有操作都是本地执行","slug":"近乎所有操作都是本地执行","link":"#近乎所有操作都是本地执行","children":[]},{"level":2,"title":"Git 保证完整性","slug":"git-保证完整性","link":"#git-保证完整性","children":[]},{"level":2,"title":"Git 一般只添加数据","slug":"git-一般只添加数据","link":"#git-一般只添加数据","children":[]},{"level":2,"title":"三种状态","slug":"三种状态","link":"#三种状态","children":[]}],"git":{"createdTime":1681181241000,"updatedTime":1681181241000,"contributors":[{"name":"leijue222","email":"dyw222@foxmail.com","commits":1}]},"readingTime":{"minutes":4.88,"words":1465},"filePathRelative":"tutorial/ops/git/working.md","localizedDate":"2023年4月11日","excerpt":"<p>Git 究竟是怎样的一个系统呢? 尽管 Git 用起来与其它的版本控制系统非常相似，但它在对信息的存储和认知方式上却有很大差异。</p>\\n<h2> 直接记录快照，而非差异比较</h2>\\n<p>Git 和其它版本控制系统(包括 Subversion 和近似工具)的主要差别在于 Git 对待数据的方法。从概念上来说，其它大部分系统以文件变更列表的方式存储信息，这类系统(CVS、Subversion、Perforce、Bazaar 等等)将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 (它们通常称作 基于差异(delta-based) 的版本控制)。</p>\\n<figure><figcaption>基于差异</figcaption></figure>","autoDesc":true}`);export{t as data};
