import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-B_6hSkLk.js";const e={},p=t(`<h2 id="result" tabindex="-1"><a class="header-anchor" href="#result"><span>Result</span></a></h2><p>Querying 1,000,000 times with 1,000,000 elements:</p><table><thead><tr><th style="text-align:left;">Container</th><th style="text-align:center;">Mean(ms)</th><th style="text-align:center;">Min(ms)</th><th style="text-align:center;">Max(ms)</th><th style="text-align:center;">Range</th><th style="text-align:center;">AllocatedBytes</th><th style="text-align:center;">Operations</th><th style="text-align:center;">Ratio of Mean(ms)</th></tr></thead><tbody><tr><td style="text-align:left;">Dictionary</td><td style="text-align:center;">34.72</td><td style="text-align:center;">30.65</td><td style="text-align:center;">36.33</td><td style="text-align:center;">16%</td><td style="text-align:center;">170</td><td style="text-align:center;">656</td><td style="text-align:center;">1.00x</td></tr><tr><td style="text-align:left;">ConcurrentDictionary</td><td style="text-align:center;">129.94</td><td style="text-align:center;">128.51</td><td style="text-align:center;">131.43</td><td style="text-align:center;">2%</td><td style="text-align:center;">542</td><td style="text-align:center;">60</td><td style="text-align:center;">3.74x</td></tr><tr><td style="text-align:left;">ConditionalWeakTable</td><td style="text-align:center;">168.45</td><td style="text-align:center;">150.94</td><td style="text-align:center;">184.17</td><td style="text-align:center;">20%</td><td style="text-align:center;">542</td><td style="text-align:center;">236</td><td style="text-align:center;">4.85x</td></tr></tbody></table><p>Querying 1,000,000 times with 1,000 elements:</p><table><thead><tr><th style="text-align:left;">Container</th><th style="text-align:center;">Mean(ms)</th><th style="text-align:center;">Min(ms)</th><th style="text-align:center;">Max(ms)</th><th style="text-align:center;">Range</th><th style="text-align:center;">AllocatedBytes</th><th style="text-align:center;">Operations</th><th style="text-align:center;">Ratio of Mean(ms)</th></tr></thead><tbody><tr><td style="text-align:left;">Dictionary</td><td style="text-align:center;">11.99</td><td style="text-align:center;">11.95</td><td style="text-align:center;">12.03</td><td style="text-align:center;">1%</td><td style="text-align:center;">86</td><td style="text-align:center;">960</td><td style="text-align:center;">1.00x</td></tr><tr><td style="text-align:left;">ConcurrentDictionary</td><td style="text-align:center;">10.14</td><td style="text-align:center;">9.95</td><td style="text-align:center;">10.22</td><td style="text-align:center;">3%</td><td style="text-align:center;">93</td><td style="text-align:center;">960</td><td style="text-align:center;">0.84x</td></tr><tr><td style="text-align:left;">ConditionalWeakTable</td><td style="text-align:center;">10.98</td><td style="text-align:center;">10.87</td><td style="text-align:center;">11.08</td><td style="text-align:center;">2%</td><td style="text-align:center;">93</td><td style="text-align:center;">960</td><td style="text-align:center;">0.91x</td></tr></tbody></table><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2><p>For queries with a large number of items within dictionaries, special dictionaries (<code>ConcurrentDictionary&lt;TKey, TValue&gt;</code>, <code>ConditionalWeakTable&lt;TKey, TValue&gt;</code>) are significantly slower than <code>Dictionary&lt;TKey, TValue&gt;</code>.</p><p>However, if there are not too many items (~ 1,000 in this benchmark) in the dictionaries, their query performance is almost identical.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h2><p>This is the code for benchmarking:</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token preprocessor property">#load </span><span class="token string">&quot;BenchmarkDotNet&quot;</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">RunBenchmark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">int</span></span> Count <span class="token operator">=</span> <span class="token number">1_000</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">int</span></span> Queries <span class="token operator">=</span> <span class="token number">1_000_000</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sample</span>
<span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> Name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span>Sample<span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> DictionaryData <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">ConcurrentDictionary<span class="token punctuation">&lt;</span>Sample<span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> ConcurrentDictionaryData <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">ConditionalWeakTable<span class="token punctuation">&lt;</span>Sample<span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> ConditionalWeakTableData <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HashSet<span class="token punctuation">&lt;</span>Sample<span class="token punctuation">&gt;</span></span> Keys <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">GlobalSetup</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> Count<span class="token punctuation">;</span> <span class="token operator">++</span>index<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">var</span></span> text <span class="token operator">=</span> <span class="token function">RandomString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name"><span class="token keyword">var</span></span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Sample</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			Name <span class="token operator">=</span> text
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		Keys<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
		DictionaryData<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">=</span> text<span class="token punctuation">;</span>
		ConcurrentDictionaryData<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">=</span> text<span class="token punctuation">;</span>
		ConditionalWeakTableData<span class="token punctuation">.</span><span class="token function">AddOrUpdate</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Keys Count: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Keys<span class="token punctuation">.</span>Count</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">RandomString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name"><span class="token keyword">var</span></span> length <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> chars <span class="token operator">=</span> <span class="token string">&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">(</span>Enumerable<span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span> chars<span class="token punctuation">[</span>random<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span>chars<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Benchmark</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Query_Dictionary</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// Benchmark methods must be public.</span>
<span class="token punctuation">{</span>
	<span class="token class-name"><span class="token keyword">var</span></span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HashSet<span class="token punctuation">&lt;</span>Sample<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> queries <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> queries <span class="token operator">&lt;</span> Queries<span class="token punctuation">;</span> queries <span class="token operator">+=</span> Keys<span class="token punctuation">.</span>Count<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> key <span class="token keyword">in</span> Keys<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>DictionaryData<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> text<span class="token punctuation">)</span> <span class="token operator">||</span> text <span class="token operator">!=</span> key<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
				error<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Benchmark</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Query_ConcurrentDictionary</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name"><span class="token keyword">var</span></span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HashSet<span class="token punctuation">&lt;</span>Sample<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> queries <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> queries <span class="token operator">&lt;</span> Queries<span class="token punctuation">;</span> queries <span class="token operator">+=</span> Keys<span class="token punctuation">.</span>Count<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> key <span class="token keyword">in</span> Keys<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ConcurrentDictionaryData<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> text<span class="token punctuation">)</span> <span class="token operator">||</span> text <span class="token operator">!=</span> key<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
				error<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Benchmark</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Query_ConditionalWeakTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name"><span class="token keyword">var</span></span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HashSet<span class="token punctuation">&lt;</span>Sample<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> queries <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> queries <span class="token operator">&lt;</span> Queries<span class="token punctuation">;</span> queries <span class="token operator">+=</span> Keys<span class="token punctuation">.</span>Count<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> key <span class="token keyword">in</span> Keys<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ConditionalWeakTableData<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> text<span class="token punctuation">)</span> <span class="token operator">||</span> text <span class="token operator">!=</span> key<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
				error<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","Benchmark of Querying Special Dictionary Containers.html.vue"]]),k=JSON.parse('{"path":"/posts/Benchmark%20of%20Querying%20Special%20Dictionary%20Containers.html","title":"Benchmark of Querying Special Dictionary Containers","lang":"en-US","frontmatter":{"title":"Benchmark of Querying Special Dictionary Containers","icon":"emojione:bar-chart","date":"2024-10-22T00:00:00.000Z","isOriginal":true,"tag":["CSharp","Fundamentals","Containers"],"description":"Result Querying 1,000,000 times with 1,000,000 elements: Querying 1,000,000 times with 1,000 elements: Conclusion For queries with a large number of items within dictionaries, s...","head":[["meta",{"property":"og:url","content":"https://oldvincent.github.io/posts/Benchmark%20of%20Querying%20Special%20Dictionary%20Containers.html"}],["meta",{"property":"og:site_name","content":"Code Enthusiast"}],["meta",{"property":"og:title","content":"Benchmark of Querying Special Dictionary Containers"}],["meta",{"property":"og:description","content":"Result Querying 1,000,000 times with 1,000,000 elements: Querying 1,000,000 times with 1,000 elements: Conclusion For queries with a large number of items within dictionaries, s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-22T06:17:16.000Z"}],["meta",{"property":"article:author","content":"Haoyu Jia"}],["meta",{"property":"article:tag","content":"CSharp"}],["meta",{"property":"article:tag","content":"Fundamentals"}],["meta",{"property":"article:tag","content":"Containers"}],["meta",{"property":"article:published_time","content":"2024-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-22T06:17:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Benchmark of Querying Special Dictionary Containers\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-22T06:17:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haoyu Jia\\",\\"url\\":\\"https://github.com/OldVincent\\"}]}"]]},"headers":[{"level":2,"title":"Result","slug":"result","link":"#result","children":[]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]},{"level":2,"title":"Code","slug":"code","link":"#code","children":[]}],"git":{"createdTime":1729577836000,"updatedTime":1729577836000,"contributors":[{"name":"Haoyu Jia","email":"jia_vincent@outlook.com","commits":1}]},"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"posts/Benchmark of Querying Special Dictionary Containers.md","localizedDate":"October 22, 2024","excerpt":"<h2>Result</h2>\\n<p>Querying 1,000,000 times with 1,000,000 elements:</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">Container</th>\\n<th style=\\"text-align:center\\">Mean(ms)</th>\\n<th style=\\"text-align:center\\">Min(ms)</th>\\n<th style=\\"text-align:center\\">Max(ms)</th>\\n<th style=\\"text-align:center\\">Range</th>\\n<th style=\\"text-align:center\\">AllocatedBytes</th>\\n<th style=\\"text-align:center\\">Operations</th>\\n<th style=\\"text-align:center\\">Ratio of Mean(ms)</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">Dictionary</td>\\n<td style=\\"text-align:center\\">34.72</td>\\n<td style=\\"text-align:center\\">30.65</td>\\n<td style=\\"text-align:center\\">36.33</td>\\n<td style=\\"text-align:center\\">16%</td>\\n<td style=\\"text-align:center\\">170</td>\\n<td style=\\"text-align:center\\">656</td>\\n<td style=\\"text-align:center\\">1.00x</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">ConcurrentDictionary</td>\\n<td style=\\"text-align:center\\">129.94</td>\\n<td style=\\"text-align:center\\">128.51</td>\\n<td style=\\"text-align:center\\">131.43</td>\\n<td style=\\"text-align:center\\">2%</td>\\n<td style=\\"text-align:center\\">542</td>\\n<td style=\\"text-align:center\\">60</td>\\n<td style=\\"text-align:center\\">3.74x</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">ConditionalWeakTable</td>\\n<td style=\\"text-align:center\\">168.45</td>\\n<td style=\\"text-align:center\\">150.94</td>\\n<td style=\\"text-align:center\\">184.17</td>\\n<td style=\\"text-align:center\\">20%</td>\\n<td style=\\"text-align:center\\">542</td>\\n<td style=\\"text-align:center\\">236</td>\\n<td style=\\"text-align:center\\">4.85x</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{d as comp,k as data};
