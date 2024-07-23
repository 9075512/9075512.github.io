import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2caddb42.js";const m=JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"9-other/markdown-examples.md","filePath":"9-other/markdown-examples.md","lastUpdated":1702707121000}'),p={name:"9-other/markdown-examples.md"},e=l(`<h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-label="Permalink to &quot;Markdown Extension Examples&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#dbd7caee;">export default {</span></span>
<span class="line"><span style="color:#dbd7caee;">  data () {</span></span>
<span class="line"><span style="color:#dbd7caee;">    return {</span></span>
<span class="line"><span style="color:#dbd7caee;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#dbd7caee;">    }</span></span>
<span class="line"><span style="color:#dbd7caee;">  }</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">\`\`\`</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#393a34;">export default {</span></span>
<span class="line"><span style="color:#393a34;">  data () {</span></span>
<span class="line"><span style="color:#393a34;">    return {</span></span>
<span class="line"><span style="color:#393a34;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;">  }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">data</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line highlighted"><span style="color:#DBD7CAEE;">      </span><span style="color:#B8A965;">msg</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">Highlighted!</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">data</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line highlighted"><span style="color:#393A34;">      </span><span style="color:#998418;">msg</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">Highlighted!</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">::: info</span></span>
<span class="line"><span style="color:#DBD7CAEE;">This is an info box.</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">::: tip</span></span>
<span class="line"><span style="color:#DBD7CAEE;">This is a tip.</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">::: warning</span></span>
<span class="line"><span style="color:#DBD7CAEE;">This is a warning.</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">::: danger</span></span>
<span class="line"><span style="color:#DBD7CAEE;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">::: details</span></span>
<span class="line"><span style="color:#DBD7CAEE;">This is a details block.</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;">::: info</span></span>
<span class="line"><span style="color:#393A34;">This is an info box.</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">::: tip</span></span>
<span class="line"><span style="color:#393A34;">This is a tip.</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">::: warning</span></span>
<span class="line"><span style="color:#393A34;">This is a warning.</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">::: danger</span></span>
<span class="line"><span style="color:#393A34;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">::: details</span></span>
<span class="line"><span style="color:#393A34;">This is a details block.</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,19),o=[e];function i(r,c,t,d,b,y){return n(),a("div",null,o)}const u=s(p,[["render",i]]);export{m as __pageData,u as default};
