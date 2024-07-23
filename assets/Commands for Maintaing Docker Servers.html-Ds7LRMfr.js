import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e as s}from"./app-TrO1wbCa.js";const t={},o=s(`<h1 id="useful-commands-for-maintaining-docker-servers" tabindex="-1"><a class="header-anchor" href="#useful-commands-for-maintaining-docker-servers"><span>Useful Commands for Maintaining Docker Servers</span></a></h1><p>Usually there will be containers and images which are no longer in use, yet their creators just forgot to remove them, left them to remain in servers as &#39;Status: Exited, Last Used: 3 Years Ago&#39;. Unused containers will hold up their images, and every image of those no longer used old versions will hold up 3~5GB disk space.</p><p>Do server maintainers need to manually remove these unattened containers and images? Do server maintainers need to write some automatic scripts for this boring operation? The answer is: probably no. Docker has already provided useful commands to cleanup these cyber waste and release unused resource.</p><h2 id="what-to-cleanup" tabindex="-1"><a class="header-anchor" href="#what-to-cleanup"><span>What to Cleanup</span></a></h2><p>Usually, containers that has exited naturally (not because of faults) and resource which is not used by any container should be considered as cyber waster.</p><p>Containers, images, custom networks and attached volumes for these unused containers should be cleaned up.</p><h2 id="how-to-cleanup" tabindex="-1"><a class="header-anchor" href="#how-to-cleanup"><span>How to Cleanup</span></a></h2><h3 id="all-in-one-command" tabindex="-1"><a class="header-anchor" href="#all-in-one-command"><span>All-In-One Command</span></a></h3><p>This command will remove all exited containers, images, networks, and volumes which are not being used by any running container.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> system prune <span class="token parameter variable">-a</span> <span class="token parameter variable">--volume</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Option &#39;-a&#39; for remove all unused images rather than only dangling images (images without tags); option &#39;--volume&#39; for clean up unused volumes.</p><p>There will be a confirmation which requires a human operator to type &#39;y&#39; to continue, and adding &#39;-f&#39; option will skip this confirmation process:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> system prune <span class="token parameter variable">-a</span> <span class="token parameter variable">--volume</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="individual-commands" tabindex="-1"><a class="header-anchor" href="#individual-commands"><span>Individual Commands</span></a></h3><p>Search and remove containers that exited naturally (with exit code 0):</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;Exited (0)&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remove all exited containers:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> container prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remove all unused images:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> image prune <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Option &#39;-a&#39; is for removing unused images, otherwise only images without tags will be removed.</p><p>Remove all unused networks:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remove all unused vloumes:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="best-practice" tabindex="-1"><a class="header-anchor" href="#best-practice"><span>Best Practice</span></a></h2><ol><li><p>Use <code>Crontab</code> (a tool in Linux to schedule scripts) to schedule a clean up operation every day, or week, or month, or year.</p></li><li><p>Force every user to release resource after they finish using containers.</p></li></ol>`,27),i=[o];function r(l,c){return a(),n("div",null,i)}const m=e(t,[["render",r],["__file","Commands for Maintaing Docker Servers.html.vue"]]),u=JSON.parse(`{"path":"/posts/Commands%20for%20Maintaing%20Docker%20Servers.html","title":"Useful Commands for Maintaining Docker Servers","lang":"en-US","frontmatter":{"title":"Useful Commands for Maintaining Docker Servers","icon":"emojione:recycling-symbol","date":"2024-03-21T00:00:00.000Z","isOriginal":true,"tag":["Docker","Server Maintaince"],"description":"Useful Commands for Maintaining Docker Servers Usually there will be containers and images which are no longer in use, yet their creators just forgot to remove them, left them t...","head":[["meta",{"property":"og:url","content":"https://oldvincent.github.io/posts/Commands%20for%20Maintaing%20Docker%20Servers.html"}],["meta",{"property":"og:site_name","content":"Code Enthusiast"}],["meta",{"property":"og:title","content":"Useful Commands for Maintaining Docker Servers"}],["meta",{"property":"og:description","content":"Useful Commands for Maintaining Docker Servers Usually there will be containers and images which are no longer in use, yet their creators just forgot to remove them, left them t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-23T14:03:10.000Z"}],["meta",{"property":"article:author","content":"Haoyu Jia"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"Server Maintaince"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-23T14:03:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Useful Commands for Maintaining Docker Servers\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-23T14:03:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haoyu Jia\\",\\"url\\":\\"https://github.com/OldVincent\\"}]}"]]},"headers":[{"level":2,"title":"What to Cleanup","slug":"what-to-cleanup","link":"#what-to-cleanup","children":[]},{"level":2,"title":"How to Cleanup","slug":"how-to-cleanup","link":"#how-to-cleanup","children":[{"level":3,"title":"All-In-One Command","slug":"all-in-one-command","link":"#all-in-one-command","children":[]},{"level":3,"title":"Individual Commands","slug":"individual-commands","link":"#individual-commands","children":[]}]},{"level":2,"title":"Best Practice","slug":"best-practice","link":"#best-practice","children":[]}],"git":{"createdTime":1721743390000,"updatedTime":1721743390000,"contributors":[{"name":"Haoyu Jia","email":"jia_vincent@outlook.com","commits":1}]},"readingTime":{"minutes":1.24,"words":372},"filePathRelative":"posts/Commands for Maintaing Docker Servers.md","localizedDate":"March 21, 2024","excerpt":"\\n<p>Usually there will be containers and images which are no longer in use, yet their creators just forgot to remove them, left them to remain in servers as 'Status: Exited, Last Used: 3 Years Ago'. Unused containers will hold up their images, and every image of those no longer used old versions will hold up 3~5GB disk space.</p>","autoDesc":true}`);export{m as comp,u as data};
