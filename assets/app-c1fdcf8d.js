import{d as defineAsyncComponent,r as ref,a as readonly,b as reactive,c as defineComponent,i as isString$1,e as isArray,f as dedupeHead,g as resolveLocalePath,o as onMounted,h as computed,j as h$2,k as isLinkHttp,l as removeLeadingSlash,m as inject,n as getCurrentInstance,p as camelize,q as capitalize,s as nextTick,u as unref,t as isRef,w as watch,v as getCurrentScope,x as onScopeDispose,y as shallowRef,z as watchEffect,T as Transition,A as useRouter,B as onBeforeUnmount,R as RouterLink,C as resolveComponent,D as isPlainObject,E as onUnmounted,F as useRoute,G as isLinkMailto,H as toRef,I as isLinkTel,J as ensureEndingSlash,K as isLinkExternal,L as provide,M as TransitionGroup,N as removeEndingSlash,O as useLink,P as createRouter,S as START_LOCATION_NORMALIZED,Q as createSSRApp,U as createWebHistory,V as RouterView}from"./framework-7d1f27fd.js";const scriptRel="modulepreload",assetsURL=function(Q){return"/"+Q},seen={},__vitePreload=function(de,ue,pe){if(!ue||ue.length===0)return de();const ve=document.getElementsByTagName("link");return Promise.all(ue.map(me=>{if(me=assetsURL(me),me in seen)return;seen[me]=!0;const _e=me.endsWith(".css"),he=_e?'[rel="stylesheet"]':"";if(!!pe)for(let be=ve.length-1;be>=0;be--){const Pe=ve[be];if(Pe.href===me&&(!_e||Pe.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${me}"]${he}`))return;const fe=document.createElement("link");if(fe.rel=_e?"stylesheet":scriptRel,_e||(fe.as="script",fe.crossOrigin=""),fe.href=me,document.head.appendChild(fe),_e)return new Promise((be,Pe)=>{fe.addEventListener("load",be),fe.addEventListener("error",()=>Pe(new Error(`Unable to preload CSS for ${me}`)))})})).then(()=>de())},pagesData$1={"v-8daa1a0e":()=>__vitePreload(()=>import("./index.html-2e980c36.js"),[]).then(({data:Q})=>Q),"v-184f4da6":()=>__vitePreload(()=>import("./intro.html-5e734330.js"),[]).then(({data:Q})=>Q),"v-2e3eac9e":()=>__vitePreload(()=>import("./slides.html-8723d877.js"),[]).then(({data:Q})=>Q),"v-f87bb1e8":()=>__vitePreload(()=>import("./index.html-a2c533cf.js"),[]).then(({data:Q})=>Q),"v-4e230683":()=>__vitePreload(()=>import("./ddpTest.html-4dae1453.js"),[]).then(({data:Q})=>Q),"v-639495b8":()=>__vitePreload(()=>import("./index.html-8c4bc917.js"),[]).then(({data:Q})=>Q),"v-20b9cb4a":()=>__vitePreload(()=>import("./firewalld.html-c671e56f.js"),[]).then(({data:Q})=>Q),"v-06a095cd":()=>__vitePreload(()=>import("./linuxCMD.html-74090130.js"),[]).then(({data:Q})=>Q),"v-66e23684":()=>__vitePreload(()=>import("./dockerCMD.html-8d2a6dae.js"),[]).then(({data:Q})=>Q),"v-17486eac":()=>__vitePreload(()=>import("./dockerMake.html-a57317ab.js"),[]).then(({data:Q})=>Q),"v-41f0a814":()=>__vitePreload(()=>import("./frp.html-9528f52d.js"),[]).then(({data:Q})=>Q),"v-24c105bc":()=>__vitePreload(()=>import("./READMD.html-3ced9e53.js"),[]).then(({data:Q})=>Q),"v-04ca4ab7":()=>__vitePreload(()=>import("./READMD.html-e88aafe9.js"),[]).then(({data:Q})=>Q),"v-eff713c6":()=>__vitePreload(()=>import("./index.html-f666342a.js"),[]).then(({data:Q})=>Q),"v-82995f58":()=>__vitePreload(()=>import("./index.html-5456a70f.js"),[]).then(({data:Q})=>Q),"v-4501a698":()=>__vitePreload(()=>import("./qr-code.html-13154406.js"),[]).then(({data:Q})=>Q),"v-0585156a":()=>__vitePreload(()=>import("./index.html-c4556dde.js"),[]).then(({data:Q})=>Q),"v-01646db8":()=>__vitePreload(()=>import("./cjs.html-37244d82.js"),[]).then(({data:Q})=>Q),"v-46aae1f1":()=>__vitePreload(()=>import("./environment.html-0f96b803.js"),[]).then(({data:Q})=>Q),"v-42b240e9":()=>__vitePreload(()=>import("./install.html-b3418c1b.js"),[]).then(({data:Q})=>Q),"v-7c2edd10":()=>__vitePreload(()=>import("./intro.html-8da5087a.js"),[]).then(({data:Q})=>Q),"v-154571a0":()=>__vitePreload(()=>import("./program.html-b6b1b855.js"),[]).then(({data:Q})=>Q),"v-967efbc0":()=>__vitePreload(()=>import("./index.html-1719a93b.js"),[]).then(({data:Q})=>Q),"v-f4af920e":()=>__vitePreload(()=>import("./index.html-ec6b923e.js"),[]).then(({data:Q})=>Q),"v-231456e6":()=>__vitePreload(()=>import("./compare.html-4d399f9b.js"),[]).then(({data:Q})=>Q),"v-debe8af8":()=>__vitePreload(()=>import("./index.html-4e5f861d.js"),[]).then(({data:Q})=>Q),"v-5460422c":()=>__vitePreload(()=>import("./js.html-47059d64.js"),[]).then(({data:Q})=>Q),"v-28806cdc":()=>__vitePreload(()=>import("./index.html-479dfdb7.js"),[]).then(({data:Q})=>Q),"v-373337a5":()=>__vitePreload(()=>import("./branch.html-ceb321a5.js"),[]).then(({data:Q})=>Q),"v-0fb3e257":()=>__vitePreload(()=>import("./change.html-882a6f7e.js"),[]).then(({data:Q})=>Q),"v-87fbcab0":()=>__vitePreload(()=>import("./create-repo.html-4b2361c3.js"),[]).then(({data:Q})=>Q),"v-085e1b36":()=>__vitePreload(()=>import("./custom.html-e978467d.js"),[]).then(({data:Q})=>Q),"v-c750f140":()=>__vitePreload(()=>import("./gitLFS.html-19b96253.js"),[]).then(({data:Q})=>Q),"v-63f40516":()=>__vitePreload(()=>import("./ignore.html-c38a16a0.js"),[]).then(({data:Q})=>Q),"v-baa53aa0":()=>__vitePreload(()=>import("./install.html-bed0962a.js"),[]).then(({data:Q})=>Q),"v-4bff78ff":()=>__vitePreload(()=>import("./intro.html-b1e80831.js"),[]).then(({data:Q})=>Q),"v-7ff40a9a":()=>__vitePreload(()=>import("./merge.html-6f318af1.js"),[]).then(({data:Q})=>Q),"v-dbb97386":()=>__vitePreload(()=>import("./proxy.html-9b3b9ea1.js"),[]).then(({data:Q})=>Q),"v-3a6e98d4":()=>__vitePreload(()=>import("./recall.html-077b9cb7.js"),[]).then(({data:Q})=>Q),"v-11f528fe":()=>__vitePreload(()=>import("./remote.html-d1dce66c.js"),[]).then(({data:Q})=>Q),"v-c5bad008":()=>__vitePreload(()=>import("./reset.html-00c2f799.js"),[]).then(({data:Q})=>Q),"v-451a0aa4":()=>__vitePreload(()=>import("./server.html-dfe55b0f.js"),[]).then(({data:Q})=>Q),"v-3d327f55":()=>__vitePreload(()=>import("./status.html-f3c64551.js"),[]).then(({data:Q})=>Q),"v-52a16dde":()=>__vitePreload(()=>import("./tag.html-d2c3f339.js"),[]).then(({data:Q})=>Q),"v-ff1bae8c":()=>__vitePreload(()=>import("./working-directory.html-a7c39554.js"),[]).then(({data:Q})=>Q),"v-18e56ada":()=>__vitePreload(()=>import("./working.html-c3b7add0.js"),[]).then(({data:Q})=>Q),"v-037a4370":()=>__vitePreload(()=>import("./index.html-55957be0.js"),[]).then(({data:Q})=>Q),"v-ade64d4e":()=>__vitePreload(()=>import("./WSL.html-7e522a0e.js"),[]).then(({data:Q})=>Q),"v-3beb415d":()=>__vitePreload(()=>import("./centos.html-e1153784.js"),[]).then(({data:Q})=>Q),"v-5b86497e":()=>__vitePreload(()=>import("./ssh.html-22b2c9a0.js"),[]).then(({data:Q})=>Q),"v-7093596a":()=>__vitePreload(()=>import("./index.html-992d2dc7.js"),[]).then(({data:Q})=>Q),"v-2b223df7":()=>__vitePreload(()=>import("./block.html-c66772b2.js"),[]).then(({data:Q})=>Q),"v-12f7a9eb":()=>__vitePreload(()=>import("./demo.html-bda07d03.js"),[]).then(({data:Q})=>Q),"v-17ff21d4":()=>__vitePreload(()=>import("./extend.html-6cfa3a9c.js"),[]).then(({data:Q})=>Q),"v-406cd496":()=>__vitePreload(()=>import("./inline.html-7207f2ed.js"),[]).then(({data:Q})=>Q),"v-2963ef78":()=>__vitePreload(()=>import("./intro.html-a5d13819.js"),[]).then(({data:Q})=>Q),"v-7f0a4545":()=>__vitePreload(()=>import("./index.html-35569bbd.js"),[]).then(({data:Q})=>Q),"v-c7895d9e":()=>__vitePreload(()=>import("./demo.html-2e809c06.js"),[]).then(({data:Q})=>Q),"v-bd140ff6":()=>__vitePreload(()=>import("./page.html-21704d8d.js"),[]).then(({data:Q})=>Q),"v-878aea88":()=>__vitePreload(()=>import("./simple-debug.html-555779e1.js"),[]).then(({data:Q})=>Q),"v-177a413a":()=>__vitePreload(()=>import("./tag-list.html-95b13d04.js"),[]).then(({data:Q})=>Q),"v-9e3033f2":()=>__vitePreload(()=>import("./index.html-fccd7c9e.js"),[]).then(({data:Q})=>Q),"v-334b99da":()=>__vitePreload(()=>import("./env.html-c0e20e41.js"),[]).then(({data:Q})=>Q),"v-41cd4a50":()=>__vitePreload(()=>import("./file-structure.html-075d5a74.js"),[]).then(({data:Q})=>Q),"v-727599f0":()=>__vitePreload(()=>import("./index.html-3b35d881.js"),[]).then(({data:Q})=>Q),"v-6d70dee6":()=>__vitePreload(()=>import("./audit.html-97a136c9.js"),[]).then(({data:Q})=>Q),"v-ca40a124":()=>__vitePreload(()=>import("./debug.html-0a30a42c.js"),[]).then(({data:Q})=>Q),"v-466f7448":()=>__vitePreload(()=>import("./interface.html-d9f413f1.js"),[]).then(({data:Q})=>Q),"v-0b8b4854":()=>__vitePreload(()=>import("./npm.html-8bbab78a.js"),[]).then(({data:Q})=>Q),"v-66f7568f":()=>__vitePreload(()=>import("./score.html-63060ba3.js"),[]).then(({data:Q})=>Q),"v-53c64ef4":()=>__vitePreload(()=>import("./index.html-eb4ffc83.js"),[]).then(({data:Q})=>Q),"v-00a665cb":()=>__vitePreload(()=>import("./axois.html-5fdd629b.js"),[]).then(({data:Q})=>Q),"v-21906d6f":()=>__vitePreload(()=>import("./app.html-69bf2828.js"),[]).then(({data:Q})=>Q),"v-050f65b4":()=>__vitePreload(()=>import("./get-started.html-160dae59.js"),[]).then(({data:Q})=>Q),"v-50860a96":()=>__vitePreload(()=>import("./install.html-97196fb8.js"),[]).then(({data:Q})=>Q),"v-48384480":()=>__vitePreload(()=>import("./sfc.html-c07d7e44.js"),[]).then(({data:Q})=>Q),"v-94472630":()=>__vitePreload(()=>import("./template.html-2967fd50.js"),[]).then(({data:Q})=>Q),"v-296b00ed":()=>__vitePreload(()=>import("./index.html-e325d93c.js"),[]).then(({data:Q})=>Q),"v-3c6d60fc":()=>__vitePreload(()=>import("./get-started.html-29f9bcb3.js"),[]).then(({data:Q})=>Q),"v-f5b2d1e0":()=>__vitePreload(()=>import("./index.html-2bc78119.js"),[]).then(({data:Q})=>Q),"v-fa847f90":()=>__vitePreload(()=>import("./index.html-ac74964f.js"),[]).then(({data:Q})=>Q),"v-7d25ed06":()=>__vitePreload(()=>import("./https.html-e24dded7.js"),[]).then(({data:Q})=>Q),"v-8f38c826":()=>__vitePreload(()=>import("./mime.html-882f8b21.js"),[]).then(({data:Q})=>Q),"v-fdd48258":()=>__vitePreload(()=>import("./seo.html-4a5b5428.js"),[]).then(({data:Q})=>Q),"v-1367f1b6":()=>__vitePreload(()=>import("./uri.html-0e0d57b1.js"),[]).then(({data:Q})=>Q),"v-092addfc":()=>__vitePreload(()=>import("./url.html-2a18104c.js"),[]).then(({data:Q})=>Q),"v-4e1f5402":()=>__vitePreload(()=>import("./index.html-6f203767.js"),[]).then(({data:Q})=>Q),"v-086d6fb5":()=>__vitePreload(()=>import("./css.html-f9d81f63.js"),[]).then(({data:Q})=>Q),"v-7ba844ef":()=>__vitePreload(()=>import("./html.html-b68f1b52.js"),[]).then(({data:Q})=>Q),"v-1ff325e0":()=>__vitePreload(()=>import("./index.html-660e70bb.js"),[]).then(({data:Q})=>Q),"v-1e429e6d":()=>__vitePreload(()=>import("./index.html-0c95b647.js"),[]).then(({data:Q})=>Q),"v-2efa2eec":()=>__vitePreload(()=>import("./ajax.html-79fca0e5.js"),[]).then(({data:Q})=>Q),"v-57c91382":()=>__vitePreload(()=>import("./animation.html-e7ef014e.js"),[]).then(({data:Q})=>Q),"v-776998ac":()=>__vitePreload(()=>import("./event.html-36d4dcdf.js"),[]).then(({data:Q})=>Q),"v-fa04251c":()=>__vitePreload(()=>import("./extend.html-108166dc.js"),[]).then(({data:Q})=>Q),"v-f0a38fcc":()=>__vitePreload(()=>import("./intro.html-bb2ce34c.js"),[]).then(({data:Q})=>Q),"v-068b0a7d":()=>__vitePreload(()=>import("./modify-dom.html-b99dfacb.js"),[]).then(({data:Q})=>Q),"v-0e25c76d":()=>__vitePreload(()=>import("./operate-dom.html-b9e4f1bf.js"),[]).then(({data:Q})=>Q),"v-27d8db0d":()=>__vitePreload(()=>import("./selector.html-692196be.js"),[]).then(({data:Q})=>Q),"v-3229366b":()=>__vitePreload(()=>import("./index.html-cf61dec6.js"),[]).then(({data:Q})=>Q),"v-f826aeb8":()=>__vitePreload(()=>import("./arithmetic.html-33365d7e.js"),[]).then(({data:Q})=>Q),"v-fd906a6a":()=>__vitePreload(()=>import("./array.html-8b9dac80.js"),[]).then(({data:Q})=>Q),"v-7386ebc9":()=>__vitePreload(()=>import("./condition.html-8b38863f.js"),[]).then(({data:Q})=>Q),"v-5bcd1311":()=>__vitePreload(()=>import("./debug.html-d180b94c.js"),[]).then(({data:Q})=>Q),"v-1bbdb2a5":()=>__vitePreload(()=>import("./expansion.html-b0931f5f.js"),[]).then(({data:Q})=>Q),"v-00624376":()=>__vitePreload(()=>import("./function.html-8ede7188.js"),[]).then(({data:Q})=>Q),"v-991b1106":()=>__vitePreload(()=>import("./grammar.html-291579c0.js"),[]).then(({data:Q})=>Q),"v-146d6a98":()=>__vitePreload(()=>import("./intro.html-640dab70.js"),[]).then(({data:Q})=>Q),"v-0db2d2aa":()=>__vitePreload(()=>import("./loop.html-d32104c4.js"),[]).then(({data:Q})=>Q),"v-a5b86348":()=>__vitePreload(()=>import("./mktemp.html-1e3f047f.js"),[]).then(({data:Q})=>Q),"v-190d4eaa":()=>__vitePreload(()=>import("./prompt.html-90b263b7.js"),[]).then(({data:Q})=>Q),"v-186b61f8":()=>__vitePreload(()=>import("./quotation.html-9a64a027.js"),[]).then(({data:Q})=>Q),"v-7f7046f8":()=>__vitePreload(()=>import("./read.html-cbaba90e.js"),[]).then(({data:Q})=>Q),"v-31b34804":()=>__vitePreload(()=>import("./readline.html-5bbc7abf.js"),[]).then(({data:Q})=>Q),"v-b69340ba":()=>__vitePreload(()=>import("./script.html-d77eb74c.js"),[]).then(({data:Q})=>Q),"v-9a54e5bc":()=>__vitePreload(()=>import("./set.html-584ce3fa.js"),[]).then(({data:Q})=>Q),"v-42df3ffc":()=>__vitePreload(()=>import("./stack.html-cbf11de2.js"),[]).then(({data:Q})=>Q),"v-14a0f267":()=>__vitePreload(()=>import("./startup.html-7387e3bb.js"),[]).then(({data:Q})=>Q),"v-5d9b6c1d":()=>__vitePreload(()=>import("./string.html-2344a707.js"),[]).then(({data:Q})=>Q),"v-549b295c":()=>__vitePreload(()=>import("./variable.html-add4bcd5.js"),[]).then(({data:Q})=>Q),"v-e6e44498":()=>__vitePreload(()=>import("./index.html-218e353c.js"),[]).then(({data:Q})=>Q),"v-91c422e8":()=>__vitePreload(()=>import("./add.html-b09495ff.js"),[]).then(({data:Q})=>Q),"v-63ad2822":()=>__vitePreload(()=>import("./command.html-9e1b35b7.js"),[]).then(({data:Q})=>Q),"v-0f247620":()=>__vitePreload(()=>import("./dir.html-a1fdd87b.js"),[]).then(({data:Q})=>Q),"v-47576740":()=>__vitePreload(()=>import("./excu.html-c05842f8.js"),[]).then(({data:Q})=>Q),"v-1b31a5a9":()=>__vitePreload(()=>import("./file.html-4a991085.js"),[]).then(({data:Q})=>Q),"v-28726463":()=>__vitePreload(()=>import("./ln.html-c96274f9.js"),[]).then(({data:Q})=>Q),"v-11d6f87d":()=>__vitePreload(()=>import("./other.html-5b20a918.js"),[]).then(({data:Q})=>Q),"v-5324f8a0":()=>__vitePreload(()=>import("./path.html-009b0752.js"),[]).then(({data:Q})=>Q),"v-41d2e35e":()=>__vitePreload(()=>import("./temp.html-474f8437.js"),[]).then(({data:Q})=>Q),"v-32651cc3":()=>__vitePreload(()=>import("./index.html-7369452a.js"),[]).then(({data:Q})=>Q),"v-754f362f":()=>__vitePreload(()=>import("./dir.html-94ab0dba.js"),[]).then(({data:Q})=>Q),"v-7a5ee77a":()=>__vitePreload(()=>import("./file.html-d1d08138.js"),[]).then(({data:Q})=>Q),"v-1f4c1d3a":()=>__vitePreload(()=>import("./mount.html-09b10b21.js"),[]).then(({data:Q})=>Q),"v-1fa756b3":()=>__vitePreload(()=>import("./index.html-165ee18f.js"),[]).then(({data:Q})=>Q),"v-2a4505fe":()=>__vitePreload(()=>import("./advantage.html-6147dd45.js"),[]).then(({data:Q})=>Q),"v-40417720":()=>__vitePreload(()=>import("./desktop.html-1c39ebd3.js"),[]).then(({data:Q})=>Q),"v-2f48faf8":()=>__vitePreload(()=>import("./history.html-ef6ef8bb.js"),[]).then(({data:Q})=>Q),"v-3315d0e0":()=>__vitePreload(()=>import("./intro.html-dce421d3.js"),[]).then(({data:Q})=>Q),"v-1c3d68ae":()=>__vitePreload(()=>import("./language.html-cda87917.js"),[]).then(({data:Q})=>Q),"v-2ac8e6af":()=>__vitePreload(()=>import("./startup.html-121fd71f.js"),[]).then(({data:Q})=>Q),"v-3ba080b8":()=>__vitePreload(()=>import("./index.html-29fad211.js"),[]).then(({data:Q})=>Q),"v-20f9a11e":()=>__vitePreload(()=>import("./debug.html-6ba846d4.js"),[]).then(({data:Q})=>Q),"v-7c5381f3":()=>__vitePreload(()=>import("./lang.html-8dae346e.js"),[]).then(({data:Q})=>Q),"v-cd3ed248":()=>__vitePreload(()=>import("./manage.html-469340b5.js"),[]).then(({data:Q})=>Q),"v-ef5ccb4c":()=>__vitePreload(()=>import("./webserver.html-d7a370af.js"),[]).then(({data:Q})=>Q),"v-7e6cf7b4":()=>__vitePreload(()=>import("./index.html-edd38936.js"),[]).then(({data:Q})=>Q),"v-73aef744":()=>__vitePreload(()=>import("./nature.html-2ed5bc8d.js"),[]).then(({data:Q})=>Q),"v-06b2bcc6":()=>__vitePreload(()=>import("./object.html-4013779a.js"),[]).then(({data:Q})=>Q),"v-d2138114":()=>__vitePreload(()=>import("./people.html-379bc8e2.js"),[]).then(({data:Q})=>Q),"v-a3c04a34":()=>__vitePreload(()=>import("./place.html-21449468.js"),[]).then(({data:Q})=>Q),"v-3f2c7a0d":()=>__vitePreload(()=>import("./symbol.html-e3e3c860.js"),[]).then(({data:Q})=>Q),"v-8d744168":()=>__vitePreload(()=>import("./index.html-00432561.js"),[]).then(({data:Q})=>Q),"v-bb8e529c":()=>__vitePreload(()=>import("./debug.html-bdd91daa.js"),[]).then(({data:Q})=>Q),"v-d7116ef6":()=>__vitePreload(()=>import("./file-system.html-9015d0fc.js"),[]).then(({data:Q})=>Q),"v-31173e92":()=>__vitePreload(()=>import("./network.html-d6bd69dd.js"),[]).then(({data:Q})=>Q),"v-1e1ba08a":()=>__vitePreload(()=>import("./storage.html-9a75733c.js"),[]).then(({data:Q})=>Q),"v-2b627946":()=>__vitePreload(()=>import("./index.html-b45318d6.js"),[]).then(({data:Q})=>Q),"v-d9aa29b6":()=>__vitePreload(()=>import("./app-config.html-c8ad595c.js"),[]).then(({data:Q})=>Q),"v-e39a8c42":()=>__vitePreload(()=>import("./page-config.html-6718a65b.js"),[]).then(({data:Q})=>Q),"v-1ba75a8e":()=>__vitePreload(()=>import("./sitemap-config.html-4d32080f.js"),[]).then(({data:Q})=>Q),"v-e4f6e8f2":()=>__vitePreload(()=>import("./index.html-e93e094b.js"),[]).then(({data:Q})=>Q),"v-1d61d9a0":()=>__vitePreload(()=>import("./behavior.html-735dc78f.js"),[]).then(({data:Q})=>Q),"v-6ae00d43":()=>__vitePreload(()=>import("./component.html-5b9212da.js"),[]).then(({data:Q})=>Q),"v-72660cb4":()=>__vitePreload(()=>import("./intro.html-1e640128.js"),[]).then(({data:Q})=>Q),"v-2fcf188f":()=>__vitePreload(()=>import("./style.html-8850561f.js"),[]).then(({data:Q})=>Q),"v-27b18929":()=>__vitePreload(()=>import("./index.html-cbba9275.js"),[]).then(({data:Q})=>Q),"v-7030d796":()=>__vitePreload(()=>import("./env.html-5125c6ca.js"),[]).then(({data:Q})=>Q),"v-fa183054":()=>__vitePreload(()=>import("./intro.html-31c2f4f9.js"),[]).then(({data:Q})=>Q),"v-6bf63fb6":()=>__vitePreload(()=>import("./js-support.html-bd709bcb.js"),[]).then(({data:Q})=>Q),"v-4a6ada89":()=>__vitePreload(()=>import("./mechanism.html-ecd8c926.js"),[]).then(({data:Q})=>Q),"v-97f2ec94":()=>__vitePreload(()=>import("./scene.html-a954b892.js"),[]).then(({data:Q})=>Q),"v-10871e32":()=>__vitePreload(()=>import("./update.html-ce98234b.js"),[]).then(({data:Q})=>Q),"v-949401be":()=>__vitePreload(()=>import("./index.html-4204ba4c.js"),[]).then(({data:Q})=>Q),"v-8a057d0e":()=>__vitePreload(()=>import("./app.html-801c2ed9.js"),[]).then(({data:Q})=>Q),"v-7c8b712f":()=>__vitePreload(()=>import("./lifetime.html-2edb37f4.js"),[]).then(({data:Q})=>Q),"v-82489fa8":()=>__vitePreload(()=>import("./module.html-aff0eaa6.js"),[]).then(({data:Q})=>Q),"v-85f0d4ae":()=>__vitePreload(()=>import("./page.html-44132c50.js"),[]).then(({data:Q})=>Q),"v-a771c2d6":()=>__vitePreload(()=>import("./register.html-6296f550.js"),[]).then(({data:Q})=>Q),"v-0aadde11":()=>__vitePreload(()=>import("./route.html-dd48bd0c.js"),[]).then(({data:Q})=>Q),"v-b3f29962":()=>__vitePreload(()=>import("./run.html-96462829.js"),[]).then(({data:Q})=>Q),"v-54b9e083":()=>__vitePreload(()=>import("./index.html-cbfe10f7.js"),[]).then(({data:Q})=>Q),"v-878011d0":()=>__vitePreload(()=>import("./animation.html-0a18df55.js"),[]).then(({data:Q})=>Q),"v-642ef93f":()=>__vitePreload(()=>import("./component.html-fc86c6c4.js"),[]).then(({data:Q})=>Q),"v-3c404aa4":()=>__vitePreload(()=>import("./condition-render.html-0ba7003a.js"),[]).then(({data:Q})=>Q),"v-4d6a3f9c":()=>__vitePreload(()=>import("./data-bind.html-3cc75abb.js"),[]).then(({data:Q})=>Q),"v-06ddb742":()=>__vitePreload(()=>import("./event.html-9f153015.js"),[]).then(({data:Q})=>Q),"v-30eeccd7":()=>__vitePreload(()=>import("./list-render.html-cc2d58c9.js"),[]).then(({data:Q})=>Q),"v-49aa3013":()=>__vitePreload(()=>import("./model.html-8b289fe6.js"),[]).then(({data:Q})=>Q),"v-9e4aad0a":()=>__vitePreload(()=>import("./rendering-cache.html-26128ff5.js"),[]).then(({data:Q})=>Q),"v-b0c3df5e":()=>__vitePreload(()=>import("./resizable.html-2bc682dc.js"),[]).then(({data:Q})=>Q),"v-01cc2cb7":()=>__vitePreload(()=>import("./selector.html-496c7161.js"),[]).then(({data:Q})=>Q),"v-775d7cfc":()=>__vitePreload(()=>import("./template.html-0de54894.js"),[]).then(({data:Q})=>Q),"v-0e5f8376":()=>__vitePreload(()=>import("./wxml.html-c2cdfee1.js"),[]).then(({data:Q})=>Q),"v-8c9bce86":()=>__vitePreload(()=>import("./wxs-event.html-ad941799.js"),[]).then(({data:Q})=>Q),"v-286cdfea":()=>__vitePreload(()=>import("./wxs.html-083cf3d9.js"),[]).then(({data:Q})=>Q),"v-57b6d355":()=>__vitePreload(()=>import("./wxss.html-6440e9b4.js"),[]).then(({data:Q})=>Q),"v-62622fc3":()=>__vitePreload(()=>import("./index.html-1c7bcd37.js"),[]).then(({data:Q})=>Q),"v-372d329e":()=>__vitePreload(()=>import("./box.html-891474b6.js"),[]).then(({data:Q})=>Q),"v-6ef62430":()=>__vitePreload(()=>import("./cascade.html-a4901ca0.js"),[]).then(({data:Q})=>Q),"v-9ecc0baa":()=>__vitePreload(()=>import("./common.html-c968501e.js"),[]).then(({data:Q})=>Q),"v-6e8b1d3c":()=>__vitePreload(()=>import("./declaration.html-e1efc55e.js"),[]).then(({data:Q})=>Q),"v-7ae2b4b1":()=>__vitePreload(()=>import("./import.html-e9958242.js"),[]).then(({data:Q})=>Q),"v-4dcea577":()=>__vitePreload(()=>import("./selector.html-3b5e141b.js"),[]).then(({data:Q})=>Q),"v-656e7253":()=>__vitePreload(()=>import("./index.html-86741a76.js"),[]).then(({data:Q})=>Q),"v-4830b9aa":()=>__vitePreload(()=>import("./background-and-border.html-e28a9e00.js"),[]).then(({data:Q})=>Q),"v-26921941":()=>__vitePreload(()=>import("./box.html-9343957b.js"),[]).then(({data:Q})=>Q),"v-600108f7":()=>__vitePreload(()=>import("./font.html-23478e4c.js"),[]).then(({data:Q})=>Q),"v-fad3f3f0":()=>__vitePreload(()=>import("./media.html-235065b3.js"),[]).then(({data:Q})=>Q),"v-7d84eaa4":()=>__vitePreload(()=>import("./overflow.html-5495790c.js"),[]).then(({data:Q})=>Q),"v-969c3194":()=>__vitePreload(()=>import("./replaced.html-92b7c06d.js"),[]).then(({data:Q})=>Q),"v-4e01e632":()=>__vitePreload(()=>import("./selector.html-86bef5b9.js"),[]).then(({data:Q})=>Q),"v-2b666a30":()=>__vitePreload(()=>import("./sizing.html-4b45ff0d.js"),[]).then(({data:Q})=>Q),"v-7d8aa827":()=>__vitePreload(()=>import("./text-direction.html-292724c3.js"),[]).then(({data:Q})=>Q),"v-ee7e56ca":()=>__vitePreload(()=>import("./value.html-6860e5a7.js"),[]).then(({data:Q})=>Q),"v-5dae7d96":()=>__vitePreload(()=>import("./index.html-825f860e.js"),[]).then(({data:Q})=>Q),"v-30097a28":()=>__vitePreload(()=>import("./exercise.html-49f8f979.js"),[]).then(({data:Q})=>Q),"v-fc27c22a":()=>__vitePreload(()=>import("./flex.html-652451f5.js"),[]).then(({data:Q})=>Q),"v-7df0baf2":()=>__vitePreload(()=>import("./float.html-c0f9cf4f.js"),[]).then(({data:Q})=>Q),"v-dd94d254":()=>__vitePreload(()=>import("./flow.html-97ddaa8f.js"),[]).then(({data:Q})=>Q),"v-36ef9bbe":()=>__vitePreload(()=>import("./grid.html-9265d100.js"),[]).then(({data:Q})=>Q),"v-057d80e2":()=>__vitePreload(()=>import("./intro.html-4bebcb55.js"),[]).then(({data:Q})=>Q),"v-641c6293":()=>__vitePreload(()=>import("./index.html-4c4b3b2c.js"),[]).then(({data:Q})=>Q),"v-a4b15ddc":()=>__vitePreload(()=>import("./tag.html-42de3416.js"),[]).then(({data:Q})=>Q),"v-6728a523":()=>__vitePreload(()=>import("./index.html-3d3d06eb.js"),[]).then(({data:Q})=>Q),"v-11ecaece":()=>__vitePreload(()=>import("./basic.html-4e898283.js"),[]).then(({data:Q})=>Q),"v-2a262703":()=>__vitePreload(()=>import("./embed.html-109d5923.js"),[]).then(({data:Q})=>Q),"v-1e1efb82":()=>__vitePreload(()=>import("./format.html-2f31c617.js"),[]).then(({data:Q})=>Q),"v-5becdd94":()=>__vitePreload(()=>import("./head.html-e85fcaa8.js"),[]).then(({data:Q})=>Q),"v-facfbd30":()=>__vitePreload(()=>import("./history.html-019c7db9.js"),[]).then(({data:Q})=>Q),"v-0227e47e":()=>__vitePreload(()=>import("./image.html-7b667b8d.js"),[]).then(({data:Q})=>Q),"v-11e686ec":()=>__vitePreload(()=>import("./layout.html-bd9024d7.js"),[]).then(({data:Q})=>Q),"v-7e42ef5c":()=>__vitePreload(()=>import("./link.html-e639d53f.js"),[]).then(({data:Q})=>Q),"v-6eea1650":()=>__vitePreload(()=>import("./media.html-75ee5a54.js"),[]).then(({data:Q})=>Q),"v-425c99d0":()=>__vitePreload(()=>import("./svg.html-ebc61790.js"),[]).then(({data:Q})=>Q),"v-0981e9a4":()=>__vitePreload(()=>import("./table.html-565a3cd1.js"),[]).then(({data:Q})=>Q),"v-f1be8366":()=>__vitePreload(()=>import("./archiving.html-efe37a02.js"),[]).then(({data:Q})=>Q),"v-ae500f20":()=>__vitePreload(()=>import("./async.html-8286c9b7.js"),[]).then(({data:Q})=>Q),"v-341a277e":()=>__vitePreload(()=>import("./command.html-640fa702.js"),[]).then(({data:Q})=>Q),"v-1371a5e0":()=>__vitePreload(()=>import("./file-operation.html-c7cb3d21.js"),[]).then(({data:Q})=>Q),"v-6cb46dea":()=>__vitePreload(()=>import("./file.html-570cda0d.js"),[]).then(({data:Q})=>Q),"v-1dd2927e":()=>__vitePreload(()=>import("./hardware.html-6c7a0abd.js"),[]).then(({data:Q})=>Q),"v-df2ead84":()=>__vitePreload(()=>import("./host.html-56480465.js"),[]).then(({data:Q})=>Q),"v-59928cb8":()=>__vitePreload(()=>import("./named-pipe.html-1022db45.js"),[]).then(({data:Q})=>Q),"v-2facf8c6":()=>__vitePreload(()=>import("./process.html-9a40ecb9.js"),[]).then(({data:Q})=>Q),"v-39414800":()=>__vitePreload(()=>import("./redirection.html-a51535c8.js"),[]).then(({data:Q})=>Q),"v-803a1cf6":()=>__vitePreload(()=>import("./regex.html-f2bc2f6d.js"),[]).then(({data:Q})=>Q),"v-6bb7d9d7":()=>__vitePreload(()=>import("./system.html-9f38f066.js"),[]).then(({data:Q})=>Q),"v-7d5144d9":()=>__vitePreload(()=>import("./text.html-f5e02da5.js"),[]).then(({data:Q})=>Q),"v-854e898e":()=>__vitePreload(()=>import("./time.html-1494a61d.js"),[]).then(({data:Q})=>Q),"v-6133de0a":()=>__vitePreload(()=>import("./user.html-3e69d7c9.js"),[]).then(({data:Q})=>Q),"v-42c56014":()=>__vitePreload(()=>import("./index.html-b586b2ba.js"),[]).then(({data:Q})=>Q),"v-bff027a6":()=>__vitePreload(()=>import("./interact.html-57ab46b6.js"),[]).then(({data:Q})=>Q),"v-78262261":()=>__vitePreload(()=>import("./network.html-e2d44687.js"),[]).then(({data:Q})=>Q),"v-4e0c2eb4":()=>__vitePreload(()=>import("./route.html-a683c3a8.js"),[]).then(({data:Q})=>Q),"v-a2653b98":()=>__vitePreload(()=>import("./storage.html-1fd17648.js"),[]).then(({data:Q})=>Q),"v-b46fe358":()=>__vitePreload(()=>import("./system.html-8d731267.js"),[]).then(({data:Q})=>Q),"v-a7b53186":()=>__vitePreload(()=>import("./alias.html-40d17a8e.js"),[]).then(({data:Q})=>Q),"v-58c6beb8":()=>__vitePreload(()=>import("./awk.html-c83df72e.js"),[]).then(({data:Q})=>Q),"v-c3164d02":()=>__vitePreload(()=>import("./cal.html-f1751713.js"),[]).then(({data:Q})=>Q),"v-a7c8c312":()=>__vitePreload(()=>import("./cat.html-332a49dd.js"),[]).then(({data:Q})=>Q),"v-19028540":()=>__vitePreload(()=>import("./clear.html-8d606457.js"),[]).then(({data:Q})=>Q),"v-1bc87b50":()=>__vitePreload(()=>import("./cp.html-89f3e11a.js"),[]).then(({data:Q})=>Q),"v-63cf80ea":()=>__vitePreload(()=>import("./cut.html-8b8f1114.js"),[]).then(({data:Q})=>Q),"v-737f0692":()=>__vitePreload(()=>import("./date.html-ca2c1f60.js"),[]).then(({data:Q})=>Q),"v-1287d625":()=>__vitePreload(()=>import("./dd.html-c46eda75.js"),[]).then(({data:Q})=>Q),"v-15f18763":()=>__vitePreload(()=>import("./df.html-71a1c784.js"),[]).then(({data:Q})=>Q),"v-2f8a38b4":()=>__vitePreload(()=>import("./du.html-47693aea.js"),[]).then(({data:Q})=>Q),"v-0d59f7b2":()=>__vitePreload(()=>import("./egrep.html-9d2a4d10.js"),[]).then(({data:Q})=>Q),"v-c9dd2d1e":()=>__vitePreload(()=>import("./export.html-2f171005.js"),[]).then(({data:Q})=>Q),"v-f2be30ae":()=>__vitePreload(()=>import("./file.html-49bd1305.js"),[]).then(({data:Q})=>Q),"v-228ef4e8":()=>__vitePreload(()=>import("./find.html-97055bbe.js"),[]).then(({data:Q})=>Q),"v-5e89ec20":()=>__vitePreload(()=>import("./fmt.html-f13ccc9b.js"),[]).then(({data:Q})=>Q),"v-62499a8f":()=>__vitePreload(()=>import("./grep.html-1a791123.js"),[]).then(({data:Q})=>Q),"v-53371364":()=>__vitePreload(()=>import("./gunzip.html-958987e4.js"),[]).then(({data:Q})=>Q),"v-1409eb6a":()=>__vitePreload(()=>import("./gzcat.html-f88df157.js"),[]).then(({data:Q})=>Q),"v-74ebee8b":()=>__vitePreload(()=>import("./gzip.html-323d13ec.js"),[]).then(({data:Q})=>Q),"v-77e8ff07":()=>__vitePreload(()=>import("./kill.html-70adf916.js"),[]).then(({data:Q})=>Q),"v-f147e22c":()=>__vitePreload(()=>import("./killall.html-29345e49.js"),[]).then(({data:Q})=>Q),"v-4d166acf":()=>__vitePreload(()=>import("./last.html-991954ad.js"),[]).then(({data:Q})=>Q),"v-67652140":()=>__vitePreload(()=>import("./lpq.html-52f37985.js"),[]).then(({data:Q})=>Q),"v-6919f9df":()=>__vitePreload(()=>import("./lpr.html-63ead1aa.js"),[]).then(({data:Q})=>Q),"v-595b3d04":()=>__vitePreload(()=>import("./ls.html-94fe37ea.js"),[]).then(({data:Q})=>Q),"v-312ceba7":()=>__vitePreload(()=>import("./nl.html-4b583074.js"),[]).then(({data:Q})=>Q),"v-b22962fc":()=>__vitePreload(()=>import("./ps.html-7633fdcd.js"),[]).then(({data:Q})=>Q),"v-e5b0ff26":()=>__vitePreload(()=>import("./scp.html-7e7187ec.js"),[]).then(({data:Q})=>Q),"v-3b0c610a":()=>__vitePreload(()=>import("./sed.html-9a125e20.js"),[]).then(({data:Q})=>Q),"v-5740a672":()=>__vitePreload(()=>import("./sort.html-e2614429.js"),[]).then(({data:Q})=>Q),"v-78cf62e7":()=>__vitePreload(()=>import("./tr.html-c5c2c969.js"),[]).then(({data:Q})=>Q),"v-0e48a30d":()=>__vitePreload(()=>import("./uname.html-479bbb59.js"),[]).then(({data:Q})=>Q),"v-985e8278":()=>__vitePreload(()=>import("./uniq.html-b6d18b28.js"),[]).then(({data:Q})=>Q),"v-06c3e1bd":()=>__vitePreload(()=>import("./uptime.html-379b9a7f.js"),[]).then(({data:Q})=>Q),"v-bb709114":()=>__vitePreload(()=>import("./w.html-3a763e3f.js"),[]).then(({data:Q})=>Q),"v-042d394e":()=>__vitePreload(()=>import("./wc.html-cca65cab.js"),[]).then(({data:Q})=>Q),"v-27278cdc":()=>__vitePreload(()=>import("./whereis.html-7f9d489c.js"),[]).then(({data:Q})=>Q),"v-9f2ae8e0":()=>__vitePreload(()=>import("./which.html-d096c4fc.js"),[]).then(({data:Q})=>Q),"v-3376838f":()=>__vitePreload(()=>import("./who.html-8fcd2eaf.js"),[]).then(({data:Q})=>Q),"v-9b139d8e":()=>__vitePreload(()=>import("./stdio.html-f28e023c.js"),[]).then(({data:Q})=>Q),"v-3706649a":()=>__vitePreload(()=>import("./404.html-f9767bdf.js"),[]).then(({data:Q})=>Q),"v-16ae08e6":()=>__vitePreload(()=>import("./index.html-c6ce69e2.js"),[]).then(({data:Q})=>Q),"v-1891b76b":()=>__vitePreload(()=>import("./index.html-948d5041.js"),[]).then(({data:Q})=>Q),"v-24a9acdf":()=>__vitePreload(()=>import("./index.html-fdd1230c.js"),[]).then(({data:Q})=>Q),"v-04e71790":()=>__vitePreload(()=>import("./index.html-01ff8631.js"),[]).then(({data:Q})=>Q),"v-90d1bd16":()=>__vitePreload(()=>import("./index.html-e838985a.js"),[]).then(({data:Q})=>Q),"v-d0d0fdd2":()=>__vitePreload(()=>import("./index.html-7be8e802.js"),[]).then(({data:Q})=>Q),"v-61399853":()=>__vitePreload(()=>import("./index.html-533f1322.js"),[]).then(({data:Q})=>Q),"v-648c5bb4":()=>__vitePreload(()=>import("./index.html-6ecfa522.js"),[]).then(({data:Q})=>Q),"v-05a52eee":()=>__vitePreload(()=>import("./index.html-3bec187c.js"),[]).then(({data:Q})=>Q),"v-5bc93818":()=>__vitePreload(()=>import("./index.html-e5fc5458.js"),[]).then(({data:Q})=>Q),"v-744d024e":()=>__vitePreload(()=>import("./index.html-1d0e996c.js"),[]).then(({data:Q})=>Q),"v-e52c881c":()=>__vitePreload(()=>import("./index.html-0c75963c.js"),[]).then(({data:Q})=>Q),"v-154dc4c4":()=>__vitePreload(()=>import("./index.html-885f2bc9.js"),[]).then(({data:Q})=>Q),"v-01560935":()=>__vitePreload(()=>import("./index.html-6044d020.js"),[]).then(({data:Q})=>Q),"v-5e3b6d77":()=>__vitePreload(()=>import("./index.html-795546c2.js"),[]).then(({data:Q})=>Q),"v-b313b4e6":()=>__vitePreload(()=>import("./index.html-31911a7b.js"),[]).then(({data:Q})=>Q),"v-506407f4":()=>__vitePreload(()=>import("./index.html-fc49a5d5.js"),[]).then(({data:Q})=>Q),"v-37a8c5a0":()=>__vitePreload(()=>import("./index.html-2df19d9c.js"),[]).then(({data:Q})=>Q),"v-0379cba1":()=>__vitePreload(()=>import("./index.html-c71f3e41.js"),[]).then(({data:Q})=>Q),"v-767189a0":()=>__vitePreload(()=>import("./index.html-f19c91ff.js"),[]).then(({data:Q})=>Q),"v-762b4219":()=>__vitePreload(()=>import("./index.html-53535fd5.js"),[]).then(({data:Q})=>Q),"v-e9c7e408":()=>__vitePreload(()=>import("./index.html-3dbc34cc.js"),[]).then(({data:Q})=>Q),"v-0cc92656":()=>__vitePreload(()=>import("./index.html-7b0cc60c.js"),[]).then(({data:Q})=>Q),"v-0e452818":()=>__vitePreload(()=>import("./index.html-7bef5e02.js"),[]).then(({data:Q})=>Q),"v-211f44ee":()=>__vitePreload(()=>import("./index.html-1454741f.js"),[]).then(({data:Q})=>Q),"v-b749fb9c":()=>__vitePreload(()=>import("./index.html-46bab83a.js"),[]).then(({data:Q})=>Q),"v-6106c001":()=>__vitePreload(()=>import("./index.html-c7b02694.js"),[]).then(({data:Q})=>Q),"v-65f6d381":()=>__vitePreload(()=>import("./index.html-ccc3f8e7.js"),[]).then(({data:Q})=>Q),"v-b3117a4e":()=>__vitePreload(()=>import("./index.html-e84c7eb1.js"),[]).then(({data:Q})=>Q),"v-e2bac56c":()=>__vitePreload(()=>import("./index.html-0c9e5a60.js"),[]).then(({data:Q})=>Q),"v-5aaac2db":()=>__vitePreload(()=>import("./index.html-8b4ccc86.js"),[]).then(({data:Q})=>Q),"v-65efd6b5":()=>__vitePreload(()=>import("./index.html-1db10417.js"),[]).then(({data:Q})=>Q),"v-60379330":()=>__vitePreload(()=>import("./index.html-ea1ee5d1.js"),[]).then(({data:Q})=>Q),"v-9c48d85a":()=>__vitePreload(()=>import("./index.html-a8671635.js"),[]).then(({data:Q})=>Q),"v-17343014":()=>__vitePreload(()=>import("./index.html-59b6fa00.js"),[]).then(({data:Q})=>Q),"v-2ae54282":()=>__vitePreload(()=>import("./index.html-758f06f4.js"),[]).then(({data:Q})=>Q),"v-755965f0":()=>__vitePreload(()=>import("./index.html-7c213434.js"),[]).then(({data:Q})=>Q),"v-d37ff7f0":()=>__vitePreload(()=>import("./index.html-9e7480f1.js"),[]).then(({data:Q})=>Q),"v-a0ba2788":()=>__vitePreload(()=>import("./index.html-7de083fc.js"),[]).then(({data:Q})=>Q),"v-65ee2aa4":()=>__vitePreload(()=>import("./index.html-c523af1f.js"),[]).then(({data:Q})=>Q),"v-56fbf552":()=>__vitePreload(()=>import("./index.html-1be46fe3.js"),[]).then(({data:Q})=>Q),"v-581e04cc":()=>__vitePreload(()=>import("./index.html-16a3efb3.js"),[]).then(({data:Q})=>Q),"v-0d223344":()=>__vitePreload(()=>import("./index.html-b5cdab44.js"),[]).then(({data:Q})=>Q),"v-b3bd56da":()=>__vitePreload(()=>import("./index.html-e8e21a0e.js"),[]).then(({data:Q})=>Q),"v-b302da92":()=>__vitePreload(()=>import("./index.html-0f6faf8b.js"),[]).then(({data:Q})=>Q),"v-2dcc8639":()=>__vitePreload(()=>import("./index.html-267f9301.js"),[]).then(({data:Q})=>Q),"v-551fb564":()=>__vitePreload(()=>import("./index.html-efbda93b.js"),[]).then(({data:Q})=>Q),"v-5decfa84":()=>__vitePreload(()=>import("./index.html-b8b8fa39.js"),[]).then(({data:Q})=>Q),"v-551de488":()=>__vitePreload(()=>import("./index.html-83404e99.js"),[]).then(({data:Q})=>Q),"v-b310d42a":()=>__vitePreload(()=>import("./index.html-012a2904.js"),[]).then(({data:Q})=>Q),"v-484552dc":()=>__vitePreload(()=>import("./index.html-807d757e.js"),[]).then(({data:Q})=>Q),"v-1daa6b4d":()=>__vitePreload(()=>import("./index.html-b4602a8e.js"),[]).then(({data:Q})=>Q),"v-14748cc9":()=>__vitePreload(()=>import("./index.html-646ad23a.js"),[]).then(({data:Q})=>Q),"v-3fb58c9e":()=>__vitePreload(()=>import("./index.html-7426f081.js"),[]).then(({data:Q})=>Q),"v-c7bf80f0":()=>__vitePreload(()=>import("./index.html-63fe5adc.js"),[]).then(({data:Q})=>Q),"v-288e2c56":()=>__vitePreload(()=>import("./index.html-f9d3d2fe.js"),[]).then(({data:Q})=>Q),"v-2831124d":()=>__vitePreload(()=>import("./index.html-86a366cf.js"),[]).then(({data:Q})=>Q),"v-3891cf12":()=>__vitePreload(()=>import("./index.html-9b6ab383.js"),[]).then(({data:Q})=>Q),"v-b3142c4c":()=>__vitePreload(()=>import("./index.html-da8b43b5.js"),[]).then(({data:Q})=>Q),"v-075c6c62":()=>__vitePreload(()=>import("./index.html-a1fb2efa.js"),[]).then(({data:Q})=>Q)},siteData$1=JSON.parse(`{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"Yuze's Blog","description":"丁煜赜的博客"},"/en/":{"lang":"en-US","title":"Yuze's Blog","description":"Yuze's Blog powered by vuepress-theme-hope"}}}`),pagesComponents={"v-8daa1a0e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-028c5e9d.js"),["assets/index.html-028c5e9d.js","assets/framework-7d1f27fd.js"])),"v-184f4da6":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-96ce5b03.js"),["assets/intro.html-96ce5b03.js","assets/framework-7d1f27fd.js"])),"v-2e3eac9e":defineAsyncComponent(()=>__vitePreload(()=>import("./slides.html-a507219a.js"),["assets/slides.html-a507219a.js","assets/framework-7d1f27fd.js"])),"v-f87bb1e8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9bd8bc24.js"),["assets/index.html-9bd8bc24.js","assets/framework-7d1f27fd.js"])),"v-4e230683":defineAsyncComponent(()=>__vitePreload(()=>import("./ddpTest.html-fb828157.js"),["assets/ddpTest.html-fb828157.js","assets/framework-7d1f27fd.js"])),"v-639495b8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9b1b7380.js"),["assets/index.html-9b1b7380.js","assets/framework-7d1f27fd.js"])),"v-20b9cb4a":defineAsyncComponent(()=>__vitePreload(()=>import("./firewalld.html-b5bc10db.js"),["assets/firewalld.html-b5bc10db.js","assets/framework-7d1f27fd.js"])),"v-06a095cd":defineAsyncComponent(()=>__vitePreload(()=>import("./linuxCMD.html-6181ff50.js"),["assets/linuxCMD.html-6181ff50.js","assets/framework-7d1f27fd.js"])),"v-66e23684":defineAsyncComponent(()=>__vitePreload(()=>import("./dockerCMD.html-b57a96e3.js"),["assets/dockerCMD.html-b57a96e3.js","assets/framework-7d1f27fd.js"])),"v-17486eac":defineAsyncComponent(()=>__vitePreload(()=>import("./dockerMake.html-97e68960.js"),["assets/dockerMake.html-97e68960.js","assets/framework-7d1f27fd.js"])),"v-41f0a814":defineAsyncComponent(()=>__vitePreload(()=>import("./frp.html-5afe3244.js"),["assets/frp.html-5afe3244.js","assets/framework-7d1f27fd.js"])),"v-24c105bc":defineAsyncComponent(()=>__vitePreload(()=>import("./READMD.html-79a6064d.js"),["assets/READMD.html-79a6064d.js","assets/framework-7d1f27fd.js"])),"v-04ca4ab7":defineAsyncComponent(()=>__vitePreload(()=>import("./READMD.html-170264cf.js"),["assets/READMD.html-170264cf.js","assets/framework-7d1f27fd.js"])),"v-eff713c6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-596ebab7.js"),["assets/index.html-596ebab7.js","assets/framework-7d1f27fd.js"])),"v-82995f58":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a8b8f55c.js"),["assets/index.html-a8b8f55c.js","assets/framework-7d1f27fd.js"])),"v-4501a698":defineAsyncComponent(()=>__vitePreload(()=>import("./qr-code.html-44182daa.js"),["assets/qr-code.html-44182daa.js","assets/framework-7d1f27fd.js"])),"v-0585156a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-16243ab6.js"),["assets/index.html-16243ab6.js","assets/framework-7d1f27fd.js"])),"v-01646db8":defineAsyncComponent(()=>__vitePreload(()=>import("./cjs.html-e6327902.js"),["assets/cjs.html-e6327902.js","assets/framework-7d1f27fd.js"])),"v-46aae1f1":defineAsyncComponent(()=>__vitePreload(()=>import("./environment.html-bc549f35.js"),["assets/environment.html-bc549f35.js","assets/framework-7d1f27fd.js"])),"v-42b240e9":defineAsyncComponent(()=>__vitePreload(()=>import("./install.html-8255f91c.js"),["assets/install.html-8255f91c.js","assets/framework-7d1f27fd.js"])),"v-7c2edd10":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-e15530ab.js"),["assets/intro.html-e15530ab.js","assets/framework-7d1f27fd.js"])),"v-154571a0":defineAsyncComponent(()=>__vitePreload(()=>import("./program.html-c1958dc8.js"),["assets/program.html-c1958dc8.js","assets/framework-7d1f27fd.js"])),"v-967efbc0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cb13b766.js"),["assets/index.html-cb13b766.js","assets/framework-7d1f27fd.js"])),"v-f4af920e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-56700d33.js"),["assets/index.html-56700d33.js","assets/framework-7d1f27fd.js"])),"v-231456e6":defineAsyncComponent(()=>__vitePreload(()=>import("./compare.html-53e901a8.js"),["assets/compare.html-53e901a8.js","assets/framework-7d1f27fd.js"])),"v-debe8af8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e41b656b.js"),["assets/index.html-e41b656b.js","assets/framework-7d1f27fd.js"])),"v-5460422c":defineAsyncComponent(()=>__vitePreload(()=>import("./js.html-1039db1c.js"),["assets/js.html-1039db1c.js","assets/framework-7d1f27fd.js"])),"v-28806cdc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9675fea5.js"),["assets/index.html-9675fea5.js","assets/framework-7d1f27fd.js"])),"v-373337a5":defineAsyncComponent(()=>__vitePreload(()=>import("./branch.html-02defc75.js"),["assets/branch.html-02defc75.js","assets/framework-7d1f27fd.js"])),"v-0fb3e257":defineAsyncComponent(()=>__vitePreload(()=>import("./change.html-a3cb4050.js"),["assets/change.html-a3cb4050.js","assets/framework-7d1f27fd.js"])),"v-87fbcab0":defineAsyncComponent(()=>__vitePreload(()=>import("./create-repo.html-43cd7ab3.js"),["assets/create-repo.html-43cd7ab3.js","assets/framework-7d1f27fd.js"])),"v-085e1b36":defineAsyncComponent(()=>__vitePreload(()=>import("./custom.html-70ac0aaf.js"),["assets/custom.html-70ac0aaf.js","assets/framework-7d1f27fd.js"])),"v-c750f140":defineAsyncComponent(()=>__vitePreload(()=>import("./gitLFS.html-2463822b.js"),["assets/gitLFS.html-2463822b.js","assets/framework-7d1f27fd.js"])),"v-63f40516":defineAsyncComponent(()=>__vitePreload(()=>import("./ignore.html-3b0c4d82.js"),["assets/ignore.html-3b0c4d82.js","assets/framework-7d1f27fd.js"])),"v-baa53aa0":defineAsyncComponent(()=>__vitePreload(()=>import("./install.html-0d36f583.js"),["assets/install.html-0d36f583.js","assets/framework-7d1f27fd.js"])),"v-4bff78ff":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-8707592b.js"),["assets/intro.html-8707592b.js","assets/framework-7d1f27fd.js"])),"v-7ff40a9a":defineAsyncComponent(()=>__vitePreload(()=>import("./merge.html-a774bfd2.js"),["assets/merge.html-a774bfd2.js","assets/framework-7d1f27fd.js"])),"v-dbb97386":defineAsyncComponent(()=>__vitePreload(()=>import("./proxy.html-1fc80181.js"),["assets/proxy.html-1fc80181.js","assets/framework-7d1f27fd.js"])),"v-3a6e98d4":defineAsyncComponent(()=>__vitePreload(()=>import("./recall.html-4d1e90bc.js"),["assets/recall.html-4d1e90bc.js","assets/framework-7d1f27fd.js"])),"v-11f528fe":defineAsyncComponent(()=>__vitePreload(()=>import("./remote.html-2c8b438e.js"),["assets/remote.html-2c8b438e.js","assets/framework-7d1f27fd.js"])),"v-c5bad008":defineAsyncComponent(()=>__vitePreload(()=>import("./reset.html-8764f689.js"),["assets/reset.html-8764f689.js","assets/framework-7d1f27fd.js"])),"v-451a0aa4":defineAsyncComponent(()=>__vitePreload(()=>import("./server.html-13611303.js"),["assets/server.html-13611303.js","assets/framework-7d1f27fd.js"])),"v-3d327f55":defineAsyncComponent(()=>__vitePreload(()=>import("./status.html-1f35a631.js"),["assets/status.html-1f35a631.js","assets/framework-7d1f27fd.js"])),"v-52a16dde":defineAsyncComponent(()=>__vitePreload(()=>import("./tag.html-ee923fa5.js"),["assets/tag.html-ee923fa5.js","assets/framework-7d1f27fd.js"])),"v-ff1bae8c":defineAsyncComponent(()=>__vitePreload(()=>import("./working-directory.html-c0e5ae9f.js"),["assets/working-directory.html-c0e5ae9f.js","assets/framework-7d1f27fd.js"])),"v-18e56ada":defineAsyncComponent(()=>__vitePreload(()=>import("./working.html-9c3d5115.js"),["assets/working.html-9c3d5115.js","assets/framework-7d1f27fd.js"])),"v-037a4370":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8bcae870.js"),["assets/index.html-8bcae870.js","assets/framework-7d1f27fd.js"])),"v-ade64d4e":defineAsyncComponent(()=>__vitePreload(()=>import("./WSL.html-1375aa20.js"),["assets/WSL.html-1375aa20.js","assets/framework-7d1f27fd.js"])),"v-3beb415d":defineAsyncComponent(()=>__vitePreload(()=>import("./centos.html-6a35b9b0.js"),["assets/centos.html-6a35b9b0.js","assets/framework-7d1f27fd.js"])),"v-5b86497e":defineAsyncComponent(()=>__vitePreload(()=>import("./ssh.html-816fee49.js"),["assets/ssh.html-816fee49.js","assets/framework-7d1f27fd.js"])),"v-7093596a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-42c5b54e.js"),["assets/index.html-42c5b54e.js","assets/framework-7d1f27fd.js"])),"v-2b223df7":defineAsyncComponent(()=>__vitePreload(()=>import("./block.html-826093b1.js"),["assets/block.html-826093b1.js","assets/framework-7d1f27fd.js"])),"v-12f7a9eb":defineAsyncComponent(()=>__vitePreload(()=>import("./demo.html-75a086aa.js"),["assets/demo.html-75a086aa.js","assets/framework-7d1f27fd.js"])),"v-17ff21d4":defineAsyncComponent(()=>__vitePreload(()=>import("./extend.html-d764a749.js"),["assets/extend.html-d764a749.js","assets/framework-7d1f27fd.js"])),"v-406cd496":defineAsyncComponent(()=>__vitePreload(()=>import("./inline.html-1515df0a.js"),["assets/inline.html-1515df0a.js","assets/framework-7d1f27fd.js"])),"v-2963ef78":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-bcc76195.js"),["assets/intro.html-bcc76195.js","assets/framework-7d1f27fd.js"])),"v-7f0a4545":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-771dc583.js"),["assets/index.html-771dc583.js","assets/framework-7d1f27fd.js"])),"v-c7895d9e":defineAsyncComponent(()=>__vitePreload(()=>import("./demo.html-72c401e1.js"),["assets/demo.html-72c401e1.js","assets/framework-7d1f27fd.js"])),"v-bd140ff6":defineAsyncComponent(()=>__vitePreload(()=>import("./page.html-565e46d1.js"),["assets/page.html-565e46d1.js","assets/framework-7d1f27fd.js"])),"v-878aea88":defineAsyncComponent(()=>__vitePreload(()=>import("./simple-debug.html-07ea7e94.js"),["assets/simple-debug.html-07ea7e94.js","assets/framework-7d1f27fd.js"])),"v-177a413a":defineAsyncComponent(()=>__vitePreload(()=>import("./tag-list.html-bca8a146.js"),["assets/tag-list.html-bca8a146.js","assets/framework-7d1f27fd.js"])),"v-9e3033f2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-045844ff.js"),["assets/index.html-045844ff.js","assets/framework-7d1f27fd.js"])),"v-334b99da":defineAsyncComponent(()=>__vitePreload(()=>import("./env.html-0135afc2.js"),["assets/env.html-0135afc2.js","assets/framework-7d1f27fd.js"])),"v-41cd4a50":defineAsyncComponent(()=>__vitePreload(()=>import("./file-structure.html-4ee934de.js"),["assets/file-structure.html-4ee934de.js","assets/framework-7d1f27fd.js"])),"v-727599f0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-31bc09b7.js"),["assets/index.html-31bc09b7.js","assets/framework-7d1f27fd.js"])),"v-6d70dee6":defineAsyncComponent(()=>__vitePreload(()=>import("./audit.html-9be277f2.js"),["assets/audit.html-9be277f2.js","assets/framework-7d1f27fd.js"])),"v-ca40a124":defineAsyncComponent(()=>__vitePreload(()=>import("./debug.html-9a7bc6ed.js"),["assets/debug.html-9a7bc6ed.js","assets/framework-7d1f27fd.js"])),"v-466f7448":defineAsyncComponent(()=>__vitePreload(()=>import("./interface.html-7c9804df.js"),["assets/interface.html-7c9804df.js","assets/framework-7d1f27fd.js"])),"v-0b8b4854":defineAsyncComponent(()=>__vitePreload(()=>import("./npm.html-6f42bb87.js"),["assets/npm.html-6f42bb87.js","assets/framework-7d1f27fd.js"])),"v-66f7568f":defineAsyncComponent(()=>__vitePreload(()=>import("./score.html-2ce83a75.js"),["assets/score.html-2ce83a75.js","assets/framework-7d1f27fd.js"])),"v-53c64ef4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a2f4689b.js"),["assets/index.html-a2f4689b.js","assets/framework-7d1f27fd.js"])),"v-00a665cb":defineAsyncComponent(()=>__vitePreload(()=>import("./axois.html-cf585764.js"),["assets/axois.html-cf585764.js","assets/framework-7d1f27fd.js"])),"v-21906d6f":defineAsyncComponent(()=>__vitePreload(()=>import("./app.html-9b294993.js"),["assets/app.html-9b294993.js","assets/framework-7d1f27fd.js"])),"v-050f65b4":defineAsyncComponent(()=>__vitePreload(()=>import("./get-started.html-eef3102b.js"),["assets/get-started.html-eef3102b.js","assets/framework-7d1f27fd.js"])),"v-50860a96":defineAsyncComponent(()=>__vitePreload(()=>import("./install.html-5c14b31b.js"),["assets/install.html-5c14b31b.js","assets/framework-7d1f27fd.js"])),"v-48384480":defineAsyncComponent(()=>__vitePreload(()=>import("./sfc.html-0f503625.js"),["assets/sfc.html-0f503625.js","assets/framework-7d1f27fd.js"])),"v-94472630":defineAsyncComponent(()=>__vitePreload(()=>import("./template.html-132acf11.js"),["assets/template.html-132acf11.js","assets/framework-7d1f27fd.js"])),"v-296b00ed":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1948cf1b.js"),["assets/index.html-1948cf1b.js","assets/framework-7d1f27fd.js"])),"v-3c6d60fc":defineAsyncComponent(()=>__vitePreload(()=>import("./get-started.html-4ec06833.js"),["assets/get-started.html-4ec06833.js","assets/framework-7d1f27fd.js"])),"v-f5b2d1e0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5954cfe9.js"),["assets/index.html-5954cfe9.js","assets/framework-7d1f27fd.js"])),"v-fa847f90":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-34932acf.js"),["assets/index.html-34932acf.js","assets/framework-7d1f27fd.js"])),"v-7d25ed06":defineAsyncComponent(()=>__vitePreload(()=>import("./https.html-7272e0e8.js"),["assets/https.html-7272e0e8.js","assets/framework-7d1f27fd.js"])),"v-8f38c826":defineAsyncComponent(()=>__vitePreload(()=>import("./mime.html-4400626e.js"),["assets/mime.html-4400626e.js","assets/framework-7d1f27fd.js"])),"v-fdd48258":defineAsyncComponent(()=>__vitePreload(()=>import("./seo.html-c76ad9ef.js"),["assets/seo.html-c76ad9ef.js","assets/framework-7d1f27fd.js"])),"v-1367f1b6":defineAsyncComponent(()=>__vitePreload(()=>import("./uri.html-51c2f330.js"),["assets/uri.html-51c2f330.js","assets/framework-7d1f27fd.js"])),"v-092addfc":defineAsyncComponent(()=>__vitePreload(()=>import("./url.html-ff678155.js"),["assets/url.html-ff678155.js","assets/framework-7d1f27fd.js"])),"v-4e1f5402":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e9cf775f.js"),["assets/index.html-e9cf775f.js","assets/framework-7d1f27fd.js"])),"v-086d6fb5":defineAsyncComponent(()=>__vitePreload(()=>import("./css.html-6b6db8fb.js"),["assets/css.html-6b6db8fb.js","assets/framework-7d1f27fd.js"])),"v-7ba844ef":defineAsyncComponent(()=>__vitePreload(()=>import("./html.html-e7d17cf5.js"),["assets/html.html-e7d17cf5.js","assets/framework-7d1f27fd.js"])),"v-1ff325e0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0914b415.js"),["assets/index.html-0914b415.js","assets/framework-7d1f27fd.js"])),"v-1e429e6d":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-49bdefc5.js"),["assets/index.html-49bdefc5.js","assets/framework-7d1f27fd.js"])),"v-2efa2eec":defineAsyncComponent(()=>__vitePreload(()=>import("./ajax.html-bdd4c1bc.js"),["assets/ajax.html-bdd4c1bc.js","assets/framework-7d1f27fd.js"])),"v-57c91382":defineAsyncComponent(()=>__vitePreload(()=>import("./animation.html-25e4bc61.js"),["assets/animation.html-25e4bc61.js","assets/framework-7d1f27fd.js"])),"v-776998ac":defineAsyncComponent(()=>__vitePreload(()=>import("./event.html-16d4fcc4.js"),["assets/event.html-16d4fcc4.js","assets/framework-7d1f27fd.js"])),"v-fa04251c":defineAsyncComponent(()=>__vitePreload(()=>import("./extend.html-05a3fca9.js"),["assets/extend.html-05a3fca9.js","assets/framework-7d1f27fd.js"])),"v-f0a38fcc":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-53e6cb63.js"),["assets/intro.html-53e6cb63.js","assets/framework-7d1f27fd.js"])),"v-068b0a7d":defineAsyncComponent(()=>__vitePreload(()=>import("./modify-dom.html-1b8c9ba2.js"),["assets/modify-dom.html-1b8c9ba2.js","assets/framework-7d1f27fd.js"])),"v-0e25c76d":defineAsyncComponent(()=>__vitePreload(()=>import("./operate-dom.html-7a294dac.js"),["assets/operate-dom.html-7a294dac.js","assets/framework-7d1f27fd.js"])),"v-27d8db0d":defineAsyncComponent(()=>__vitePreload(()=>import("./selector.html-fc303280.js"),["assets/selector.html-fc303280.js","assets/framework-7d1f27fd.js"])),"v-3229366b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e24755d7.js"),["assets/index.html-e24755d7.js","assets/framework-7d1f27fd.js"])),"v-f826aeb8":defineAsyncComponent(()=>__vitePreload(()=>import("./arithmetic.html-817c6548.js"),["assets/arithmetic.html-817c6548.js","assets/framework-7d1f27fd.js"])),"v-fd906a6a":defineAsyncComponent(()=>__vitePreload(()=>import("./array.html-f4973a9a.js"),["assets/array.html-f4973a9a.js","assets/framework-7d1f27fd.js"])),"v-7386ebc9":defineAsyncComponent(()=>__vitePreload(()=>import("./condition.html-bf62eb2e.js"),["assets/condition.html-bf62eb2e.js","assets/framework-7d1f27fd.js"])),"v-5bcd1311":defineAsyncComponent(()=>__vitePreload(()=>import("./debug.html-e42c23ec.js"),["assets/debug.html-e42c23ec.js","assets/framework-7d1f27fd.js"])),"v-1bbdb2a5":defineAsyncComponent(()=>__vitePreload(()=>import("./expansion.html-bb29dbe7.js"),["assets/expansion.html-bb29dbe7.js","assets/framework-7d1f27fd.js"])),"v-00624376":defineAsyncComponent(()=>__vitePreload(()=>import("./function.html-0edc00c9.js"),["assets/function.html-0edc00c9.js","assets/framework-7d1f27fd.js"])),"v-991b1106":defineAsyncComponent(()=>__vitePreload(()=>import("./grammar.html-71b04d96.js"),["assets/grammar.html-71b04d96.js","assets/framework-7d1f27fd.js"])),"v-146d6a98":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-96e9f5ad.js"),["assets/intro.html-96e9f5ad.js","assets/framework-7d1f27fd.js"])),"v-0db2d2aa":defineAsyncComponent(()=>__vitePreload(()=>import("./loop.html-bf273678.js"),["assets/loop.html-bf273678.js","assets/framework-7d1f27fd.js"])),"v-a5b86348":defineAsyncComponent(()=>__vitePreload(()=>import("./mktemp.html-77720082.js"),["assets/mktemp.html-77720082.js","assets/framework-7d1f27fd.js"])),"v-190d4eaa":defineAsyncComponent(()=>__vitePreload(()=>import("./prompt.html-36320ce2.js"),["assets/prompt.html-36320ce2.js","assets/framework-7d1f27fd.js"])),"v-186b61f8":defineAsyncComponent(()=>__vitePreload(()=>import("./quotation.html-f43ac88c.js"),["assets/quotation.html-f43ac88c.js","assets/framework-7d1f27fd.js"])),"v-7f7046f8":defineAsyncComponent(()=>__vitePreload(()=>import("./read.html-f292931f.js"),["assets/read.html-f292931f.js","assets/framework-7d1f27fd.js"])),"v-31b34804":defineAsyncComponent(()=>__vitePreload(()=>import("./readline.html-1e7f6325.js"),["assets/readline.html-1e7f6325.js","assets/framework-7d1f27fd.js"])),"v-b69340ba":defineAsyncComponent(()=>__vitePreload(()=>import("./script.html-be29ef02.js"),["assets/script.html-be29ef02.js","assets/framework-7d1f27fd.js"])),"v-9a54e5bc":defineAsyncComponent(()=>__vitePreload(()=>import("./set.html-7b8015ad.js"),["assets/set.html-7b8015ad.js","assets/framework-7d1f27fd.js"])),"v-42df3ffc":defineAsyncComponent(()=>__vitePreload(()=>import("./stack.html-6ca8f7eb.js"),["assets/stack.html-6ca8f7eb.js","assets/framework-7d1f27fd.js"])),"v-14a0f267":defineAsyncComponent(()=>__vitePreload(()=>import("./startup.html-dbb6041c.js"),["assets/startup.html-dbb6041c.js","assets/framework-7d1f27fd.js"])),"v-5d9b6c1d":defineAsyncComponent(()=>__vitePreload(()=>import("./string.html-8de435be.js"),["assets/string.html-8de435be.js","assets/framework-7d1f27fd.js"])),"v-549b295c":defineAsyncComponent(()=>__vitePreload(()=>import("./variable.html-5e276af9.js"),["assets/variable.html-5e276af9.js","assets/framework-7d1f27fd.js"])),"v-e6e44498":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-929290ad.js"),["assets/index.html-929290ad.js","assets/framework-7d1f27fd.js"])),"v-91c422e8":defineAsyncComponent(()=>__vitePreload(()=>import("./add.html-ccbb76f4.js"),["assets/add.html-ccbb76f4.js","assets/framework-7d1f27fd.js"])),"v-63ad2822":defineAsyncComponent(()=>__vitePreload(()=>import("./command.html-ba8be410.js"),["assets/command.html-ba8be410.js","assets/framework-7d1f27fd.js"])),"v-0f247620":defineAsyncComponent(()=>__vitePreload(()=>import("./dir.html-62485652.js"),["assets/dir.html-62485652.js","assets/framework-7d1f27fd.js"])),"v-47576740":defineAsyncComponent(()=>__vitePreload(()=>import("./excu.html-e630b728.js"),["assets/excu.html-e630b728.js","assets/framework-7d1f27fd.js"])),"v-1b31a5a9":defineAsyncComponent(()=>__vitePreload(()=>import("./file.html-e1b20a04.js"),["assets/file.html-e1b20a04.js","assets/framework-7d1f27fd.js"])),"v-28726463":defineAsyncComponent(()=>__vitePreload(()=>import("./ln.html-66347810.js"),["assets/ln.html-66347810.js","assets/framework-7d1f27fd.js"])),"v-11d6f87d":defineAsyncComponent(()=>__vitePreload(()=>import("./other.html-f047630d.js"),["assets/other.html-f047630d.js","assets/framework-7d1f27fd.js"])),"v-5324f8a0":defineAsyncComponent(()=>__vitePreload(()=>import("./path.html-7c3e5245.js"),["assets/path.html-7c3e5245.js","assets/framework-7d1f27fd.js"])),"v-41d2e35e":defineAsyncComponent(()=>__vitePreload(()=>import("./temp.html-e8452993.js"),["assets/temp.html-e8452993.js","assets/framework-7d1f27fd.js"])),"v-32651cc3":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-353f8b06.js"),["assets/index.html-353f8b06.js","assets/framework-7d1f27fd.js"])),"v-754f362f":defineAsyncComponent(()=>__vitePreload(()=>import("./dir.html-f7692a55.js"),["assets/dir.html-f7692a55.js","assets/framework-7d1f27fd.js"])),"v-7a5ee77a":defineAsyncComponent(()=>__vitePreload(()=>import("./file.html-01a94499.js"),["assets/file.html-01a94499.js","assets/framework-7d1f27fd.js"])),"v-1f4c1d3a":defineAsyncComponent(()=>__vitePreload(()=>import("./mount.html-ced4cdd8.js"),["assets/mount.html-ced4cdd8.js","assets/framework-7d1f27fd.js"])),"v-1fa756b3":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-730bdd29.js"),["assets/index.html-730bdd29.js","assets/framework-7d1f27fd.js"])),"v-2a4505fe":defineAsyncComponent(()=>__vitePreload(()=>import("./advantage.html-d11efb09.js"),["assets/advantage.html-d11efb09.js","assets/framework-7d1f27fd.js"])),"v-40417720":defineAsyncComponent(()=>__vitePreload(()=>import("./desktop.html-7ff08a8b.js"),["assets/desktop.html-7ff08a8b.js","assets/framework-7d1f27fd.js"])),"v-2f48faf8":defineAsyncComponent(()=>__vitePreload(()=>import("./history.html-c21a4ea7.js"),["assets/history.html-c21a4ea7.js","assets/framework-7d1f27fd.js"])),"v-3315d0e0":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-71b1bb2e.js"),["assets/intro.html-71b1bb2e.js","assets/framework-7d1f27fd.js"])),"v-1c3d68ae":defineAsyncComponent(()=>__vitePreload(()=>import("./language.html-cce0a536.js"),["assets/language.html-cce0a536.js","assets/framework-7d1f27fd.js"])),"v-2ac8e6af":defineAsyncComponent(()=>__vitePreload(()=>import("./startup.html-f51d5aeb.js"),["assets/startup.html-f51d5aeb.js","assets/framework-7d1f27fd.js"])),"v-3ba080b8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-756924f1.js"),["assets/index.html-756924f1.js","assets/framework-7d1f27fd.js"])),"v-20f9a11e":defineAsyncComponent(()=>__vitePreload(()=>import("./debug.html-9fb0542e.js"),["assets/debug.html-9fb0542e.js","assets/framework-7d1f27fd.js"])),"v-7c5381f3":defineAsyncComponent(()=>__vitePreload(()=>import("./lang.html-6c0e1b16.js"),["assets/lang.html-6c0e1b16.js","assets/framework-7d1f27fd.js"])),"v-cd3ed248":defineAsyncComponent(()=>__vitePreload(()=>import("./manage.html-9aba7cb8.js"),["assets/manage.html-9aba7cb8.js","assets/framework-7d1f27fd.js"])),"v-ef5ccb4c":defineAsyncComponent(()=>__vitePreload(()=>import("./webserver.html-ab362d75.js"),["assets/webserver.html-ab362d75.js","assets/framework-7d1f27fd.js"])),"v-7e6cf7b4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a4e210f3.js"),["assets/index.html-a4e210f3.js","assets/framework-7d1f27fd.js"])),"v-73aef744":defineAsyncComponent(()=>__vitePreload(()=>import("./nature.html-15950a15.js"),["assets/nature.html-15950a15.js","assets/framework-7d1f27fd.js"])),"v-06b2bcc6":defineAsyncComponent(()=>__vitePreload(()=>import("./object.html-ae298d68.js"),["assets/object.html-ae298d68.js","assets/framework-7d1f27fd.js"])),"v-d2138114":defineAsyncComponent(()=>__vitePreload(()=>import("./people.html-9de0bafa.js"),["assets/people.html-9de0bafa.js","assets/framework-7d1f27fd.js"])),"v-a3c04a34":defineAsyncComponent(()=>__vitePreload(()=>import("./place.html-b6b6cda1.js"),["assets/place.html-b6b6cda1.js","assets/framework-7d1f27fd.js"])),"v-3f2c7a0d":defineAsyncComponent(()=>__vitePreload(()=>import("./symbol.html-30cc96a5.js"),["assets/symbol.html-30cc96a5.js","assets/framework-7d1f27fd.js"])),"v-8d744168":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-694ef5db.js"),["assets/index.html-694ef5db.js","assets/framework-7d1f27fd.js"])),"v-bb8e529c":defineAsyncComponent(()=>__vitePreload(()=>import("./debug.html-4767d226.js"),["assets/debug.html-4767d226.js","assets/framework-7d1f27fd.js"])),"v-d7116ef6":defineAsyncComponent(()=>__vitePreload(()=>import("./file-system.html-4aaa887f.js"),["assets/file-system.html-4aaa887f.js","assets/framework-7d1f27fd.js"])),"v-31173e92":defineAsyncComponent(()=>__vitePreload(()=>import("./network.html-ce555648.js"),["assets/network.html-ce555648.js","assets/framework-7d1f27fd.js"])),"v-1e1ba08a":defineAsyncComponent(()=>__vitePreload(()=>import("./storage.html-64ec9ecb.js"),["assets/storage.html-64ec9ecb.js","assets/framework-7d1f27fd.js"])),"v-2b627946":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-41004827.js"),["assets/index.html-41004827.js","assets/framework-7d1f27fd.js"])),"v-d9aa29b6":defineAsyncComponent(()=>__vitePreload(()=>import("./app-config.html-ee9bb074.js"),["assets/app-config.html-ee9bb074.js","assets/framework-7d1f27fd.js"])),"v-e39a8c42":defineAsyncComponent(()=>__vitePreload(()=>import("./page-config.html-2e3aa81d.js"),["assets/page-config.html-2e3aa81d.js","assets/framework-7d1f27fd.js"])),"v-1ba75a8e":defineAsyncComponent(()=>__vitePreload(()=>import("./sitemap-config.html-f2e8a35f.js"),["assets/sitemap-config.html-f2e8a35f.js","assets/framework-7d1f27fd.js"])),"v-e4f6e8f2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5fc83a4d.js"),["assets/index.html-5fc83a4d.js","assets/framework-7d1f27fd.js"])),"v-1d61d9a0":defineAsyncComponent(()=>__vitePreload(()=>import("./behavior.html-5f4ca870.js"),["assets/behavior.html-5f4ca870.js","assets/framework-7d1f27fd.js"])),"v-6ae00d43":defineAsyncComponent(()=>__vitePreload(()=>import("./component.html-ee268784.js"),["assets/component.html-ee268784.js","assets/framework-7d1f27fd.js"])),"v-72660cb4":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-f1e54a73.js"),["assets/intro.html-f1e54a73.js","assets/framework-7d1f27fd.js"])),"v-2fcf188f":defineAsyncComponent(()=>__vitePreload(()=>import("./style.html-98efb825.js"),["assets/style.html-98efb825.js","assets/framework-7d1f27fd.js"])),"v-27b18929":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-aa3e815d.js"),["assets/index.html-aa3e815d.js","assets/framework-7d1f27fd.js"])),"v-7030d796":defineAsyncComponent(()=>__vitePreload(()=>import("./env.html-dee5de9e.js"),["assets/env.html-dee5de9e.js","assets/framework-7d1f27fd.js"])),"v-fa183054":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-8ed48d93.js"),["assets/intro.html-8ed48d93.js","assets/framework-7d1f27fd.js"])),"v-6bf63fb6":defineAsyncComponent(()=>__vitePreload(()=>import("./js-support.html-8594413d.js"),["assets/js-support.html-8594413d.js","assets/framework-7d1f27fd.js"])),"v-4a6ada89":defineAsyncComponent(()=>__vitePreload(()=>import("./mechanism.html-1f742dd2.js"),["assets/mechanism.html-1f742dd2.js","assets/framework-7d1f27fd.js"])),"v-97f2ec94":defineAsyncComponent(()=>__vitePreload(()=>import("./scene.html-85e83d70.js"),["assets/scene.html-85e83d70.js","assets/framework-7d1f27fd.js"])),"v-10871e32":defineAsyncComponent(()=>__vitePreload(()=>import("./update.html-14aa3250.js"),["assets/update.html-14aa3250.js","assets/framework-7d1f27fd.js"])),"v-949401be":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0ddec4cd.js"),["assets/index.html-0ddec4cd.js","assets/framework-7d1f27fd.js"])),"v-8a057d0e":defineAsyncComponent(()=>__vitePreload(()=>import("./app.html-fc13ea8e.js"),["assets/app.html-fc13ea8e.js","assets/framework-7d1f27fd.js"])),"v-7c8b712f":defineAsyncComponent(()=>__vitePreload(()=>import("./lifetime.html-1eb510f7.js"),["assets/lifetime.html-1eb510f7.js","assets/framework-7d1f27fd.js"])),"v-82489fa8":defineAsyncComponent(()=>__vitePreload(()=>import("./module.html-6b17f365.js"),["assets/module.html-6b17f365.js","assets/framework-7d1f27fd.js"])),"v-85f0d4ae":defineAsyncComponent(()=>__vitePreload(()=>import("./page.html-2bbe7ef1.js"),["assets/page.html-2bbe7ef1.js","assets/framework-7d1f27fd.js"])),"v-a771c2d6":defineAsyncComponent(()=>__vitePreload(()=>import("./register.html-35d41005.js"),["assets/register.html-35d41005.js","assets/framework-7d1f27fd.js"])),"v-0aadde11":defineAsyncComponent(()=>__vitePreload(()=>import("./route.html-32ab96dd.js"),["assets/route.html-32ab96dd.js","assets/framework-7d1f27fd.js"])),"v-b3f29962":defineAsyncComponent(()=>__vitePreload(()=>import("./run.html-f2854efe.js"),["assets/run.html-f2854efe.js","assets/framework-7d1f27fd.js"])),"v-54b9e083":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1264de56.js"),["assets/index.html-1264de56.js","assets/framework-7d1f27fd.js"])),"v-878011d0":defineAsyncComponent(()=>__vitePreload(()=>import("./animation.html-76a61ecf.js"),["assets/animation.html-76a61ecf.js","assets/framework-7d1f27fd.js"])),"v-642ef93f":defineAsyncComponent(()=>__vitePreload(()=>import("./component.html-fe7fa760.js"),["assets/component.html-fe7fa760.js","assets/framework-7d1f27fd.js"])),"v-3c404aa4":defineAsyncComponent(()=>__vitePreload(()=>import("./condition-render.html-0776c4de.js"),["assets/condition-render.html-0776c4de.js","assets/framework-7d1f27fd.js"])),"v-4d6a3f9c":defineAsyncComponent(()=>__vitePreload(()=>import("./data-bind.html-1ca1df79.js"),["assets/data-bind.html-1ca1df79.js","assets/framework-7d1f27fd.js"])),"v-06ddb742":defineAsyncComponent(()=>__vitePreload(()=>import("./event.html-b4193cb2.js"),["assets/event.html-b4193cb2.js","assets/framework-7d1f27fd.js"])),"v-30eeccd7":defineAsyncComponent(()=>__vitePreload(()=>import("./list-render.html-0736dead.js"),["assets/list-render.html-0736dead.js","assets/framework-7d1f27fd.js"])),"v-49aa3013":defineAsyncComponent(()=>__vitePreload(()=>import("./model.html-0b27cb1f.js"),["assets/model.html-0b27cb1f.js","assets/framework-7d1f27fd.js"])),"v-9e4aad0a":defineAsyncComponent(()=>__vitePreload(()=>import("./rendering-cache.html-f91dda1d.js"),["assets/rendering-cache.html-f91dda1d.js","assets/framework-7d1f27fd.js"])),"v-b0c3df5e":defineAsyncComponent(()=>__vitePreload(()=>import("./resizable.html-5999f898.js"),["assets/resizable.html-5999f898.js","assets/framework-7d1f27fd.js"])),"v-01cc2cb7":defineAsyncComponent(()=>__vitePreload(()=>import("./selector.html-bb42f501.js"),["assets/selector.html-bb42f501.js","assets/framework-7d1f27fd.js"])),"v-775d7cfc":defineAsyncComponent(()=>__vitePreload(()=>import("./template.html-09e931bf.js"),["assets/template.html-09e931bf.js","assets/framework-7d1f27fd.js"])),"v-0e5f8376":defineAsyncComponent(()=>__vitePreload(()=>import("./wxml.html-47a09958.js"),["assets/wxml.html-47a09958.js","assets/framework-7d1f27fd.js"])),"v-8c9bce86":defineAsyncComponent(()=>__vitePreload(()=>import("./wxs-event.html-1356247f.js"),["assets/wxs-event.html-1356247f.js","assets/framework-7d1f27fd.js"])),"v-286cdfea":defineAsyncComponent(()=>__vitePreload(()=>import("./wxs.html-9565b557.js"),["assets/wxs.html-9565b557.js","assets/framework-7d1f27fd.js"])),"v-57b6d355":defineAsyncComponent(()=>__vitePreload(()=>import("./wxss.html-3bf981d6.js"),["assets/wxss.html-3bf981d6.js","assets/framework-7d1f27fd.js"])),"v-62622fc3":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-84f8e019.js"),["assets/index.html-84f8e019.js","assets/framework-7d1f27fd.js"])),"v-372d329e":defineAsyncComponent(()=>__vitePreload(()=>import("./box.html-68a3edbe.js"),["assets/box.html-68a3edbe.js","assets/framework-7d1f27fd.js"])),"v-6ef62430":defineAsyncComponent(()=>__vitePreload(()=>import("./cascade.html-1d020522.js"),["assets/cascade.html-1d020522.js","assets/framework-7d1f27fd.js"])),"v-9ecc0baa":defineAsyncComponent(()=>__vitePreload(()=>import("./common.html-93baa862.js"),["assets/common.html-93baa862.js","assets/framework-7d1f27fd.js"])),"v-6e8b1d3c":defineAsyncComponent(()=>__vitePreload(()=>import("./declaration.html-5ad25e98.js"),["assets/declaration.html-5ad25e98.js","assets/framework-7d1f27fd.js"])),"v-7ae2b4b1":defineAsyncComponent(()=>__vitePreload(()=>import("./import.html-28e32ac1.js"),["assets/import.html-28e32ac1.js","assets/framework-7d1f27fd.js"])),"v-4dcea577":defineAsyncComponent(()=>__vitePreload(()=>import("./selector.html-23dbc1d9.js"),["assets/selector.html-23dbc1d9.js","assets/framework-7d1f27fd.js"])),"v-656e7253":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b890800d.js"),["assets/index.html-b890800d.js","assets/framework-7d1f27fd.js"])),"v-4830b9aa":defineAsyncComponent(()=>__vitePreload(()=>import("./background-and-border.html-a550678f.js"),["assets/background-and-border.html-a550678f.js","assets/framework-7d1f27fd.js"])),"v-26921941":defineAsyncComponent(()=>__vitePreload(()=>import("./box.html-03ed6e77.js"),["assets/box.html-03ed6e77.js","assets/framework-7d1f27fd.js"])),"v-600108f7":defineAsyncComponent(()=>__vitePreload(()=>import("./font.html-0fc74fe7.js"),["assets/font.html-0fc74fe7.js","assets/framework-7d1f27fd.js"])),"v-fad3f3f0":defineAsyncComponent(()=>__vitePreload(()=>import("./media.html-0144ce91.js"),["assets/media.html-0144ce91.js","assets/framework-7d1f27fd.js"])),"v-7d84eaa4":defineAsyncComponent(()=>__vitePreload(()=>import("./overflow.html-27b88f95.js"),["assets/overflow.html-27b88f95.js","assets/framework-7d1f27fd.js"])),"v-969c3194":defineAsyncComponent(()=>__vitePreload(()=>import("./replaced.html-551be551.js"),["assets/replaced.html-551be551.js","assets/framework-7d1f27fd.js"])),"v-4e01e632":defineAsyncComponent(()=>__vitePreload(()=>import("./selector.html-9b028f08.js"),["assets/selector.html-9b028f08.js","assets/framework-7d1f27fd.js"])),"v-2b666a30":defineAsyncComponent(()=>__vitePreload(()=>import("./sizing.html-d3752671.js"),["assets/sizing.html-d3752671.js","assets/framework-7d1f27fd.js"])),"v-7d8aa827":defineAsyncComponent(()=>__vitePreload(()=>import("./text-direction.html-545c8e7a.js"),["assets/text-direction.html-545c8e7a.js","assets/framework-7d1f27fd.js"])),"v-ee7e56ca":defineAsyncComponent(()=>__vitePreload(()=>import("./value.html-46234272.js"),["assets/value.html-46234272.js","assets/framework-7d1f27fd.js"])),"v-5dae7d96":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a35cdce2.js"),["assets/index.html-a35cdce2.js","assets/framework-7d1f27fd.js"])),"v-30097a28":defineAsyncComponent(()=>__vitePreload(()=>import("./exercise.html-e2648f60.js"),["assets/exercise.html-e2648f60.js","assets/framework-7d1f27fd.js"])),"v-fc27c22a":defineAsyncComponent(()=>__vitePreload(()=>import("./flex.html-2b921fbd.js"),["assets/flex.html-2b921fbd.js","assets/framework-7d1f27fd.js"])),"v-7df0baf2":defineAsyncComponent(()=>__vitePreload(()=>import("./float.html-8f14d929.js"),["assets/float.html-8f14d929.js","assets/framework-7d1f27fd.js"])),"v-dd94d254":defineAsyncComponent(()=>__vitePreload(()=>import("./flow.html-ac83b89b.js"),["assets/flow.html-ac83b89b.js","assets/framework-7d1f27fd.js"])),"v-36ef9bbe":defineAsyncComponent(()=>__vitePreload(()=>import("./grid.html-b4ad10fe.js"),["assets/grid.html-b4ad10fe.js","assets/framework-7d1f27fd.js"])),"v-057d80e2":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-b2bc3eb8.js"),["assets/intro.html-b2bc3eb8.js","assets/framework-7d1f27fd.js"])),"v-641c6293":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1466c609.js"),["assets/index.html-1466c609.js","assets/framework-7d1f27fd.js"])),"v-a4b15ddc":defineAsyncComponent(()=>__vitePreload(()=>import("./tag.html-3e2ec723.js"),["assets/tag.html-3e2ec723.js","assets/framework-7d1f27fd.js"])),"v-6728a523":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-42b5c468.js"),["assets/index.html-42b5c468.js","assets/framework-7d1f27fd.js"])),"v-11ecaece":defineAsyncComponent(()=>__vitePreload(()=>import("./basic.html-d83f5820.js"),["assets/basic.html-d83f5820.js","assets/framework-7d1f27fd.js"])),"v-2a262703":defineAsyncComponent(()=>__vitePreload(()=>import("./embed.html-8af7f376.js"),["assets/embed.html-8af7f376.js","assets/framework-7d1f27fd.js"])),"v-1e1efb82":defineAsyncComponent(()=>__vitePreload(()=>import("./format.html-f8f10e8d.js"),["assets/format.html-f8f10e8d.js","assets/framework-7d1f27fd.js"])),"v-5becdd94":defineAsyncComponent(()=>__vitePreload(()=>import("./head.html-40a784d0.js"),["assets/head.html-40a784d0.js","assets/framework-7d1f27fd.js"])),"v-facfbd30":defineAsyncComponent(()=>__vitePreload(()=>import("./history.html-5b82609a.js"),["assets/history.html-5b82609a.js","assets/framework-7d1f27fd.js"])),"v-0227e47e":defineAsyncComponent(()=>__vitePreload(()=>import("./image.html-8202141a.js"),["assets/image.html-8202141a.js","assets/framework-7d1f27fd.js"])),"v-11e686ec":defineAsyncComponent(()=>__vitePreload(()=>import("./layout.html-1f3f3287.js"),["assets/layout.html-1f3f3287.js","assets/framework-7d1f27fd.js"])),"v-7e42ef5c":defineAsyncComponent(()=>__vitePreload(()=>import("./link.html-4fd02add.js"),["assets/link.html-4fd02add.js","assets/framework-7d1f27fd.js"])),"v-6eea1650":defineAsyncComponent(()=>__vitePreload(()=>import("./media.html-dc112dce.js"),["assets/media.html-dc112dce.js","assets/framework-7d1f27fd.js"])),"v-425c99d0":defineAsyncComponent(()=>__vitePreload(()=>import("./svg.html-60df11c4.js"),["assets/svg.html-60df11c4.js","assets/framework-7d1f27fd.js"])),"v-0981e9a4":defineAsyncComponent(()=>__vitePreload(()=>import("./table.html-b4dcef8a.js"),["assets/table.html-b4dcef8a.js","assets/framework-7d1f27fd.js"])),"v-f1be8366":defineAsyncComponent(()=>__vitePreload(()=>import("./archiving.html-12067250.js"),["assets/archiving.html-12067250.js","assets/framework-7d1f27fd.js"])),"v-ae500f20":defineAsyncComponent(()=>__vitePreload(()=>import("./async.html-6c074351.js"),["assets/async.html-6c074351.js","assets/framework-7d1f27fd.js"])),"v-341a277e":defineAsyncComponent(()=>__vitePreload(()=>import("./command.html-49785691.js"),["assets/command.html-49785691.js","assets/framework-7d1f27fd.js"])),"v-1371a5e0":defineAsyncComponent(()=>__vitePreload(()=>import("./file-operation.html-f412ae88.js"),["assets/file-operation.html-f412ae88.js","assets/framework-7d1f27fd.js"])),"v-6cb46dea":defineAsyncComponent(()=>__vitePreload(()=>import("./file.html-43d584de.js"),["assets/file.html-43d584de.js","assets/framework-7d1f27fd.js"])),"v-1dd2927e":defineAsyncComponent(()=>__vitePreload(()=>import("./hardware.html-aac0df53.js"),["assets/hardware.html-aac0df53.js","assets/framework-7d1f27fd.js"])),"v-df2ead84":defineAsyncComponent(()=>__vitePreload(()=>import("./host.html-c4f9680b.js"),["assets/host.html-c4f9680b.js","assets/framework-7d1f27fd.js"])),"v-59928cb8":defineAsyncComponent(()=>__vitePreload(()=>import("./named-pipe.html-e1065b0b.js"),["assets/named-pipe.html-e1065b0b.js","assets/framework-7d1f27fd.js"])),"v-2facf8c6":defineAsyncComponent(()=>__vitePreload(()=>import("./process.html-189cfbb4.js"),["assets/process.html-189cfbb4.js","assets/framework-7d1f27fd.js"])),"v-39414800":defineAsyncComponent(()=>__vitePreload(()=>import("./redirection.html-b4d1e260.js"),["assets/redirection.html-b4d1e260.js","assets/framework-7d1f27fd.js"])),"v-803a1cf6":defineAsyncComponent(()=>__vitePreload(()=>import("./regex.html-a2073d64.js"),["assets/regex.html-a2073d64.js","assets/framework-7d1f27fd.js"])),"v-6bb7d9d7":defineAsyncComponent(()=>__vitePreload(()=>import("./system.html-1ca3a75b.js"),["assets/system.html-1ca3a75b.js","assets/framework-7d1f27fd.js"])),"v-7d5144d9":defineAsyncComponent(()=>__vitePreload(()=>import("./text.html-6fb9c40a.js"),["assets/text.html-6fb9c40a.js","assets/framework-7d1f27fd.js"])),"v-854e898e":defineAsyncComponent(()=>__vitePreload(()=>import("./time.html-aa71f272.js"),["assets/time.html-aa71f272.js","assets/framework-7d1f27fd.js"])),"v-6133de0a":defineAsyncComponent(()=>__vitePreload(()=>import("./user.html-64855521.js"),["assets/user.html-64855521.js","assets/framework-7d1f27fd.js"])),"v-42c56014":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8cfc6dde.js"),["assets/index.html-8cfc6dde.js","assets/framework-7d1f27fd.js"])),"v-bff027a6":defineAsyncComponent(()=>__vitePreload(()=>import("./interact.html-2af7e6d5.js"),["assets/interact.html-2af7e6d5.js","assets/framework-7d1f27fd.js"])),"v-78262261":defineAsyncComponent(()=>__vitePreload(()=>import("./network.html-3a7641b5.js"),["assets/network.html-3a7641b5.js","assets/framework-7d1f27fd.js"])),"v-4e0c2eb4":defineAsyncComponent(()=>__vitePreload(()=>import("./route.html-0ba51eb5.js"),["assets/route.html-0ba51eb5.js","assets/framework-7d1f27fd.js"])),"v-a2653b98":defineAsyncComponent(()=>__vitePreload(()=>import("./storage.html-94f5a768.js"),["assets/storage.html-94f5a768.js","assets/framework-7d1f27fd.js"])),"v-b46fe358":defineAsyncComponent(()=>__vitePreload(()=>import("./system.html-b9b31e88.js"),["assets/system.html-b9b31e88.js","assets/framework-7d1f27fd.js"])),"v-a7b53186":defineAsyncComponent(()=>__vitePreload(()=>import("./alias.html-9bcd77bd.js"),["assets/alias.html-9bcd77bd.js","assets/framework-7d1f27fd.js"])),"v-58c6beb8":defineAsyncComponent(()=>__vitePreload(()=>import("./awk.html-c12e25e8.js"),["assets/awk.html-c12e25e8.js","assets/framework-7d1f27fd.js"])),"v-c3164d02":defineAsyncComponent(()=>__vitePreload(()=>import("./cal.html-33354174.js"),["assets/cal.html-33354174.js","assets/framework-7d1f27fd.js"])),"v-a7c8c312":defineAsyncComponent(()=>__vitePreload(()=>import("./cat.html-09b34a95.js"),["assets/cat.html-09b34a95.js","assets/framework-7d1f27fd.js"])),"v-19028540":defineAsyncComponent(()=>__vitePreload(()=>import("./clear.html-6f2809c4.js"),["assets/clear.html-6f2809c4.js","assets/framework-7d1f27fd.js"])),"v-1bc87b50":defineAsyncComponent(()=>__vitePreload(()=>import("./cp.html-26f270b0.js"),["assets/cp.html-26f270b0.js","assets/framework-7d1f27fd.js"])),"v-63cf80ea":defineAsyncComponent(()=>__vitePreload(()=>import("./cut.html-d990ce68.js"),["assets/cut.html-d990ce68.js","assets/framework-7d1f27fd.js"])),"v-737f0692":defineAsyncComponent(()=>__vitePreload(()=>import("./date.html-5284a2c0.js"),["assets/date.html-5284a2c0.js","assets/framework-7d1f27fd.js"])),"v-1287d625":defineAsyncComponent(()=>__vitePreload(()=>import("./dd.html-ca7db65d.js"),["assets/dd.html-ca7db65d.js","assets/framework-7d1f27fd.js"])),"v-15f18763":defineAsyncComponent(()=>__vitePreload(()=>import("./df.html-798b5b95.js"),["assets/df.html-798b5b95.js","assets/framework-7d1f27fd.js"])),"v-2f8a38b4":defineAsyncComponent(()=>__vitePreload(()=>import("./du.html-83c3d4d5.js"),["assets/du.html-83c3d4d5.js","assets/framework-7d1f27fd.js"])),"v-0d59f7b2":defineAsyncComponent(()=>__vitePreload(()=>import("./egrep.html-6fc31931.js"),["assets/egrep.html-6fc31931.js","assets/framework-7d1f27fd.js"])),"v-c9dd2d1e":defineAsyncComponent(()=>__vitePreload(()=>import("./export.html-57a2a8a9.js"),["assets/export.html-57a2a8a9.js","assets/framework-7d1f27fd.js"])),"v-f2be30ae":defineAsyncComponent(()=>__vitePreload(()=>import("./file.html-6e568d3f.js"),["assets/file.html-6e568d3f.js","assets/framework-7d1f27fd.js"])),"v-228ef4e8":defineAsyncComponent(()=>__vitePreload(()=>import("./find.html-caae0685.js"),["assets/find.html-caae0685.js","assets/framework-7d1f27fd.js"])),"v-5e89ec20":defineAsyncComponent(()=>__vitePreload(()=>import("./fmt.html-68e244f5.js"),["assets/fmt.html-68e244f5.js","assets/framework-7d1f27fd.js"])),"v-62499a8f":defineAsyncComponent(()=>__vitePreload(()=>import("./grep.html-832524a9.js"),["assets/grep.html-832524a9.js","assets/framework-7d1f27fd.js"])),"v-53371364":defineAsyncComponent(()=>__vitePreload(()=>import("./gunzip.html-44cef493.js"),["assets/gunzip.html-44cef493.js","assets/framework-7d1f27fd.js"])),"v-1409eb6a":defineAsyncComponent(()=>__vitePreload(()=>import("./gzcat.html-bd83c889.js"),["assets/gzcat.html-bd83c889.js","assets/framework-7d1f27fd.js"])),"v-74ebee8b":defineAsyncComponent(()=>__vitePreload(()=>import("./gzip.html-0e33e408.js"),["assets/gzip.html-0e33e408.js","assets/framework-7d1f27fd.js"])),"v-77e8ff07":defineAsyncComponent(()=>__vitePreload(()=>import("./kill.html-366e97f7.js"),["assets/kill.html-366e97f7.js","assets/framework-7d1f27fd.js"])),"v-f147e22c":defineAsyncComponent(()=>__vitePreload(()=>import("./killall.html-14a2647c.js"),["assets/killall.html-14a2647c.js","assets/framework-7d1f27fd.js"])),"v-4d166acf":defineAsyncComponent(()=>__vitePreload(()=>import("./last.html-65903b22.js"),["assets/last.html-65903b22.js","assets/framework-7d1f27fd.js"])),"v-67652140":defineAsyncComponent(()=>__vitePreload(()=>import("./lpq.html-cf89bdb9.js"),["assets/lpq.html-cf89bdb9.js","assets/framework-7d1f27fd.js"])),"v-6919f9df":defineAsyncComponent(()=>__vitePreload(()=>import("./lpr.html-92af6563.js"),["assets/lpr.html-92af6563.js","assets/framework-7d1f27fd.js"])),"v-595b3d04":defineAsyncComponent(()=>__vitePreload(()=>import("./ls.html-85c0fa19.js"),["assets/ls.html-85c0fa19.js","assets/framework-7d1f27fd.js"])),"v-312ceba7":defineAsyncComponent(()=>__vitePreload(()=>import("./nl.html-6a783ccc.js"),["assets/nl.html-6a783ccc.js","assets/framework-7d1f27fd.js"])),"v-b22962fc":defineAsyncComponent(()=>__vitePreload(()=>import("./ps.html-a3590daa.js"),["assets/ps.html-a3590daa.js","assets/framework-7d1f27fd.js"])),"v-e5b0ff26":defineAsyncComponent(()=>__vitePreload(()=>import("./scp.html-5f7571be.js"),["assets/scp.html-5f7571be.js","assets/framework-7d1f27fd.js"])),"v-3b0c610a":defineAsyncComponent(()=>__vitePreload(()=>import("./sed.html-d050813e.js"),["assets/sed.html-d050813e.js","assets/framework-7d1f27fd.js"])),"v-5740a672":defineAsyncComponent(()=>__vitePreload(()=>import("./sort.html-b4669cc3.js"),["assets/sort.html-b4669cc3.js","assets/framework-7d1f27fd.js"])),"v-78cf62e7":defineAsyncComponent(()=>__vitePreload(()=>import("./tr.html-421eeacf.js"),["assets/tr.html-421eeacf.js","assets/framework-7d1f27fd.js"])),"v-0e48a30d":defineAsyncComponent(()=>__vitePreload(()=>import("./uname.html-100335c2.js"),["assets/uname.html-100335c2.js","assets/framework-7d1f27fd.js"])),"v-985e8278":defineAsyncComponent(()=>__vitePreload(()=>import("./uniq.html-ff1008ad.js"),["assets/uniq.html-ff1008ad.js","assets/framework-7d1f27fd.js"])),"v-06c3e1bd":defineAsyncComponent(()=>__vitePreload(()=>import("./uptime.html-3a21312d.js"),["assets/uptime.html-3a21312d.js","assets/framework-7d1f27fd.js"])),"v-bb709114":defineAsyncComponent(()=>__vitePreload(()=>import("./w.html-dcfb4468.js"),["assets/w.html-dcfb4468.js","assets/framework-7d1f27fd.js"])),"v-042d394e":defineAsyncComponent(()=>__vitePreload(()=>import("./wc.html-c3f59f42.js"),["assets/wc.html-c3f59f42.js","assets/framework-7d1f27fd.js"])),"v-27278cdc":defineAsyncComponent(()=>__vitePreload(()=>import("./whereis.html-c5f7022b.js"),["assets/whereis.html-c5f7022b.js","assets/framework-7d1f27fd.js"])),"v-9f2ae8e0":defineAsyncComponent(()=>__vitePreload(()=>import("./which.html-80d0e509.js"),["assets/which.html-80d0e509.js","assets/framework-7d1f27fd.js"])),"v-3376838f":defineAsyncComponent(()=>__vitePreload(()=>import("./who.html-c2e94428.js"),["assets/who.html-c2e94428.js","assets/framework-7d1f27fd.js"])),"v-9b139d8e":defineAsyncComponent(()=>__vitePreload(()=>import("./stdio.html-ea051625.js"),["assets/stdio.html-ea051625.js","assets/framework-7d1f27fd.js"])),"v-3706649a":defineAsyncComponent(()=>__vitePreload(()=>import("./404.html-1ed69777.js"),["assets/404.html-1ed69777.js","assets/framework-7d1f27fd.js"])),"v-16ae08e6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d07e794b.js"),["assets/index.html-d07e794b.js","assets/framework-7d1f27fd.js"])),"v-1891b76b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2ce538db.js"),["assets/index.html-2ce538db.js","assets/framework-7d1f27fd.js"])),"v-24a9acdf":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b95e8205.js"),["assets/index.html-b95e8205.js","assets/framework-7d1f27fd.js"])),"v-04e71790":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1b4b8332.js"),["assets/index.html-1b4b8332.js","assets/framework-7d1f27fd.js"])),"v-90d1bd16":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b013da19.js"),["assets/index.html-b013da19.js","assets/framework-7d1f27fd.js"])),"v-d0d0fdd2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-049919d4.js"),["assets/index.html-049919d4.js","assets/framework-7d1f27fd.js"])),"v-61399853":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8c70ec0e.js"),["assets/index.html-8c70ec0e.js","assets/framework-7d1f27fd.js"])),"v-648c5bb4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f4830c44.js"),["assets/index.html-f4830c44.js","assets/framework-7d1f27fd.js"])),"v-05a52eee":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9a5bacf1.js"),["assets/index.html-9a5bacf1.js","assets/framework-7d1f27fd.js"])),"v-5bc93818":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-deca0967.js"),["assets/index.html-deca0967.js","assets/framework-7d1f27fd.js"])),"v-744d024e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-638cc543.js"),["assets/index.html-638cc543.js","assets/framework-7d1f27fd.js"])),"v-e52c881c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c39223fe.js"),["assets/index.html-c39223fe.js","assets/framework-7d1f27fd.js"])),"v-154dc4c4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a35a11db.js"),["assets/index.html-a35a11db.js","assets/framework-7d1f27fd.js"])),"v-01560935":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-70882417.js"),["assets/index.html-70882417.js","assets/framework-7d1f27fd.js"])),"v-5e3b6d77":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2cccdde9.js"),["assets/index.html-2cccdde9.js","assets/framework-7d1f27fd.js"])),"v-b313b4e6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3ce5a650.js"),["assets/index.html-3ce5a650.js","assets/framework-7d1f27fd.js"])),"v-506407f4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-726ad471.js"),["assets/index.html-726ad471.js","assets/framework-7d1f27fd.js"])),"v-37a8c5a0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8d7dbb96.js"),["assets/index.html-8d7dbb96.js","assets/framework-7d1f27fd.js"])),"v-0379cba1":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4d28d112.js"),["assets/index.html-4d28d112.js","assets/framework-7d1f27fd.js"])),"v-767189a0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d7002d0b.js"),["assets/index.html-d7002d0b.js","assets/framework-7d1f27fd.js"])),"v-762b4219":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-72e75607.js"),["assets/index.html-72e75607.js","assets/framework-7d1f27fd.js"])),"v-e9c7e408":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1fb5c28d.js"),["assets/index.html-1fb5c28d.js","assets/framework-7d1f27fd.js"])),"v-0cc92656":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4fc065df.js"),["assets/index.html-4fc065df.js","assets/framework-7d1f27fd.js"])),"v-0e452818":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e0874e12.js"),["assets/index.html-e0874e12.js","assets/framework-7d1f27fd.js"])),"v-211f44ee":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0d6471e4.js"),["assets/index.html-0d6471e4.js","assets/framework-7d1f27fd.js"])),"v-b749fb9c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c12daede.js"),["assets/index.html-c12daede.js","assets/framework-7d1f27fd.js"])),"v-6106c001":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b6f84061.js"),["assets/index.html-b6f84061.js","assets/framework-7d1f27fd.js"])),"v-65f6d381":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a9c041db.js"),["assets/index.html-a9c041db.js","assets/framework-7d1f27fd.js"])),"v-b3117a4e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ef8d16ea.js"),["assets/index.html-ef8d16ea.js","assets/framework-7d1f27fd.js"])),"v-e2bac56c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-21035c4f.js"),["assets/index.html-21035c4f.js","assets/framework-7d1f27fd.js"])),"v-5aaac2db":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3e38071b.js"),["assets/index.html-3e38071b.js","assets/framework-7d1f27fd.js"])),"v-65efd6b5":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-17ffefa8.js"),["assets/index.html-17ffefa8.js","assets/framework-7d1f27fd.js"])),"v-60379330":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a6ede0c3.js"),["assets/index.html-a6ede0c3.js","assets/framework-7d1f27fd.js"])),"v-9c48d85a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6ff992de.js"),["assets/index.html-6ff992de.js","assets/framework-7d1f27fd.js"])),"v-17343014":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8bf40825.js"),["assets/index.html-8bf40825.js","assets/framework-7d1f27fd.js"])),"v-2ae54282":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-16339c08.js"),["assets/index.html-16339c08.js","assets/framework-7d1f27fd.js"])),"v-755965f0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-279064b9.js"),["assets/index.html-279064b9.js","assets/framework-7d1f27fd.js"])),"v-d37ff7f0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-26cf5403.js"),["assets/index.html-26cf5403.js","assets/framework-7d1f27fd.js"])),"v-a0ba2788":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-59843dc4.js"),["assets/index.html-59843dc4.js","assets/framework-7d1f27fd.js"])),"v-65ee2aa4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a38b968d.js"),["assets/index.html-a38b968d.js","assets/framework-7d1f27fd.js"])),"v-56fbf552":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cc4739f0.js"),["assets/index.html-cc4739f0.js","assets/framework-7d1f27fd.js"])),"v-581e04cc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-603529f5.js"),["assets/index.html-603529f5.js","assets/framework-7d1f27fd.js"])),"v-0d223344":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f895ef87.js"),["assets/index.html-f895ef87.js","assets/framework-7d1f27fd.js"])),"v-b3bd56da":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-eaec9cef.js"),["assets/index.html-eaec9cef.js","assets/framework-7d1f27fd.js"])),"v-b302da92":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c3da39fc.js"),["assets/index.html-c3da39fc.js","assets/framework-7d1f27fd.js"])),"v-2dcc8639":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6bc72d59.js"),["assets/index.html-6bc72d59.js","assets/framework-7d1f27fd.js"])),"v-551fb564":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0ed1d19d.js"),["assets/index.html-0ed1d19d.js","assets/framework-7d1f27fd.js"])),"v-5decfa84":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e0b72606.js"),["assets/index.html-e0b72606.js","assets/framework-7d1f27fd.js"])),"v-551de488":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a72bb14f.js"),["assets/index.html-a72bb14f.js","assets/framework-7d1f27fd.js"])),"v-b310d42a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-45eadec6.js"),["assets/index.html-45eadec6.js","assets/framework-7d1f27fd.js"])),"v-484552dc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5d474e89.js"),["assets/index.html-5d474e89.js","assets/framework-7d1f27fd.js"])),"v-1daa6b4d":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c0f16ba8.js"),["assets/index.html-c0f16ba8.js","assets/framework-7d1f27fd.js"])),"v-14748cc9":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a345109b.js"),["assets/index.html-a345109b.js","assets/framework-7d1f27fd.js"])),"v-3fb58c9e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c1b2131a.js"),["assets/index.html-c1b2131a.js","assets/framework-7d1f27fd.js"])),"v-c7bf80f0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cefe03d1.js"),["assets/index.html-cefe03d1.js","assets/framework-7d1f27fd.js"])),"v-288e2c56":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ea196bd2.js"),["assets/index.html-ea196bd2.js","assets/framework-7d1f27fd.js"])),"v-2831124d":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a19fd568.js"),["assets/index.html-a19fd568.js","assets/framework-7d1f27fd.js"])),"v-3891cf12":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-fb392158.js"),["assets/index.html-fb392158.js","assets/framework-7d1f27fd.js"])),"v-b3142c4c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0eaa2abd.js"),["assets/index.html-0eaa2abd.js","assets/framework-7d1f27fd.js"])),"v-075c6c62":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-49d77a02.js"),["assets/index.html-49d77a02.js","assets/framework-7d1f27fd.js"]))};var layoutsSymbol=Symbol(""),pagesData=ref(pagesData$1),pageDataEmpty=readonly({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),pageData=ref(pageDataEmpty),usePageData=()=>pageData,pageFrontmatterSymbol=Symbol(""),usePageFrontmatter=()=>{const Q=inject(pageFrontmatterSymbol);if(!Q)throw new Error("usePageFrontmatter() is called without provider.");return Q},pageHeadSymbol=Symbol(""),usePageHead=()=>{const Q=inject(pageHeadSymbol);if(!Q)throw new Error("usePageHead() is called without provider.");return Q},pageHeadTitleSymbol=Symbol(""),usePageHeadTitle=()=>{const Q=inject(pageHeadTitleSymbol);if(!Q)throw new Error("usePageHeadTitle() is called without provider.");return Q},pageLangSymbol=Symbol(""),usePageLang=()=>{const Q=inject(pageLangSymbol);if(!Q)throw new Error("usePageLang() is called without provider.");return Q},pageLayoutSymbol=Symbol(""),usePageLayout=()=>{const Q=inject(pageLayoutSymbol);if(!Q)throw new Error("usePageLayout() is called without provider.");return Q},routeLocaleSymbol=Symbol(""),useRouteLocale=()=>{const Q=inject(routeLocaleSymbol);if(!Q)throw new Error("useRouteLocale() is called without provider.");return Q},siteData=ref(siteData$1),useSiteData=()=>siteData,siteLocaleDataSymbol=Symbol(""),useSiteLocaleData=()=>{const Q=inject(siteLocaleDataSymbol);if(!Q)throw new Error("useSiteLocaleData() is called without provider.");return Q},updateHeadSymbol=Symbol(""),LAYOUT_NAME_DEFAULT="Layout",LAYOUT_NAME_NOT_FOUND="NotFound",resolvers=reactive({resolveLayouts:Q=>Q.reduce((de,ue)=>({...de,...ue.layouts}),{}),resolvePageData:async Q=>{const de=pagesData.value[Q];return await(de==null?void 0:de())??pageDataEmpty},resolvePageFrontmatter:Q=>Q.frontmatter,resolvePageHead:(Q,de,ue)=>{const pe=isString$1(de.description)?de.description:ue.description,ve=[...isArray(de.head)?de.head:[],...ue.head,["title",{},Q],["meta",{name:"description",content:pe}]];return dedupeHead(ve)},resolvePageHeadTitle:(Q,de)=>[Q.title,de.title].filter(ue=>!!ue).join(" | "),resolvePageLang:Q=>Q.lang||"en",resolvePageLayout:(Q,de)=>{let ue;if(Q.path){const pe=Q.frontmatter.layout;isString$1(pe)?ue=pe:ue=LAYOUT_NAME_DEFAULT}else ue=LAYOUT_NAME_NOT_FOUND;return de[ue]},resolveRouteLocale:(Q,de)=>resolveLocalePath(Q,de),resolveSiteLocaleData:(Q,de)=>({...Q,...Q.locales[de]})}),ClientOnly=defineComponent({name:"ClientOnly",setup(Q,de){const ue=ref(!1);return onMounted(()=>{ue.value=!0}),()=>{var pe,ve;return ue.value?(ve=(pe=de.slots).default)==null?void 0:ve.call(pe):null}}}),Content=defineComponent({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(Q){const de=usePageData(),ue=computed(()=>pagesComponents[Q.pageKey||de.value.key]);return()=>ue.value?h$2(ue.value):h$2("div","404 Not Found")}}),defineClientConfig=(Q={})=>Q,withBase=Q=>isLinkHttp(Q)?Q:`/${removeLeadingSlash(Q)}`;const hopeInject="",clientConfig0={};var u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(Q,de){for(var ue=new u16(31),pe=0;pe<31;++pe)ue[pe]=de+=1<<Q[pe-1];for(var ve=new u32(ue[30]),pe=1;pe<30;++pe)for(var me=ue[pe];me<ue[pe+1];++me)ve[me]=me-ue[pe]<<5|pe;return[ue,ve]},_a$1=freb(fleb,2),fl=_a$1[0],revfl=_a$1[1];fl[28]=258,revfl[258]=28;var _b=freb(fdeb,0),fd=_b[0],rev=new u16(32768);for(var i$2=0;i$2<32768;++i$2){var x$3=(i$2&43690)>>>1|(i$2&21845)<<1;x$3=(x$3&52428)>>>2|(x$3&13107)<<2,x$3=(x$3&61680)>>>4|(x$3&3855)<<4,rev[i$2]=((x$3&65280)>>>8|(x$3&255)<<8)>>>1}var hMap=function(Q,de,ue){for(var pe=Q.length,ve=0,me=new u16(de);ve<pe;++ve)Q[ve]&&++me[Q[ve]-1];var _e=new u16(de);for(ve=0;ve<de;++ve)_e[ve]=_e[ve-1]+me[ve-1]<<1;var he;if(ue){he=new u16(1<<de);var ge=15-de;for(ve=0;ve<pe;++ve)if(Q[ve])for(var fe=ve<<4|Q[ve],be=de-Q[ve],Pe=_e[Q[ve]-1]++<<be,we=Pe|(1<<be)-1;Pe<=we;++Pe)he[rev[Pe]>>>ge]=fe}else for(he=new u16(pe),ve=0;ve<pe;++ve)Q[ve]&&(he[ve]=rev[_e[Q[ve]-1]++]>>>15-Q[ve]);return he},flt=new u8(288);for(var i$2=0;i$2<144;++i$2)flt[i$2]=8;for(var i$2=144;i$2<256;++i$2)flt[i$2]=9;for(var i$2=256;i$2<280;++i$2)flt[i$2]=7;for(var i$2=280;i$2<288;++i$2)flt[i$2]=8;var fdt=new u8(32);for(var i$2=0;i$2<32;++i$2)fdt[i$2]=5;var flrm=hMap(flt,9,1),fdrm=hMap(fdt,5,1),max=function(Q){for(var de=Q[0],ue=1;ue<Q.length;++ue)Q[ue]>de&&(de=Q[ue]);return de},bits=function(Q,de,ue){var pe=de/8|0;return(Q[pe]|Q[pe+1]<<8)>>(de&7)&ue},bits16=function(Q,de){var ue=de/8|0;return(Q[ue]|Q[ue+1]<<8|Q[ue+2]<<16)>>(de&7)},shft=function(Q){return(Q+7)/8|0},slc=function(Q,de,ue){(de==null||de<0)&&(de=0),(ue==null||ue>Q.length)&&(ue=Q.length);var pe=new(Q.BYTES_PER_ELEMENT==2?u16:Q.BYTES_PER_ELEMENT==4?u32:u8)(ue-de);return pe.set(Q.subarray(de,ue)),pe},ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(Q,de,ue){var pe=new Error(de||ec[Q]);if(pe.code=Q,Error.captureStackTrace&&Error.captureStackTrace(pe,err),!ue)throw pe;return pe},inflt=function(Q,de,ue){var pe=Q.length;if(!pe||ue&&ue.f&&!ue.l)return de||new u8(0);var ve=!de||ue,me=!ue||ue.i;ue||(ue={}),de||(de=new u8(pe*3));var _e=function(rn){var sn=de.length;if(rn>sn){var dn=new u8(Math.max(sn*2,rn));dn.set(de),de=dn}},he=ue.f||0,ge=ue.p||0,fe=ue.b||0,be=ue.l,Pe=ue.d,we=ue.m,De=ue.n,Ce=pe*8;do{if(!be){he=bits(Q,ge,1);var Oe=bits(Q,ge+1,3);if(ge+=3,Oe)if(Oe==1)be=flrm,Pe=fdrm,we=9,De=5;else if(Oe==2){var Fe=bits(Q,ge,31)+257,Ge=bits(Q,ge+10,15)+4,We=Fe+bits(Q,ge+5,31)+1;ge+=14;for(var je=new u8(We),Me=new u8(19),Be=0;Be<Ge;++Be)Me[clim[Be]]=bits(Q,ge+Be*3,7);ge+=Ge*3;for(var qe=max(Me),Ue=(1<<qe)-1,cn=hMap(Me,qe,1),Be=0;Be<We;){var tn=cn[bits(Q,ge,Ue)];ge+=tn&15;var Re=tn>>>4;if(Re<16)je[Be++]=Re;else{var Je=0,Ke=0;for(Re==16?(Ke=3+bits(Q,ge,3),ge+=2,Je=je[Be-1]):Re==17?(Ke=3+bits(Q,ge,7),ge+=3):Re==18&&(Ke=11+bits(Q,ge,127),ge+=7);Ke--;)je[Be++]=Je}}var an=je.subarray(0,Fe),Qe=je.subarray(Fe);we=max(an),De=max(Qe),be=hMap(an,we,1),Pe=hMap(Qe,De,1)}else err(1);else{var Re=shft(ge)+4,Ve=Q[Re-4]|Q[Re-3]<<8,He=Re+Ve;if(He>pe){me&&err(0);break}ve&&_e(fe+Ve),de.set(Q.subarray(Re,He),fe),ue.b=fe+=Ve,ue.p=ge=He*8,ue.f=he;continue}if(ge>Ce){me&&err(0);break}}ve&&_e(fe+131072);for(var un=(1<<we)-1,pn=(1<<De)-1,Ze=ge;;Ze=ge){var Je=be[bits16(Q,ge)&un],Xe=Je>>>4;if(ge+=Je&15,ge>Ce){me&&err(0);break}if(Je||err(2),Xe<256)de[fe++]=Xe;else if(Xe==256){Ze=ge,be=null;break}else{var on=Xe-254;if(Xe>264){var Be=Xe-257,Ye=fleb[Be];on=bits(Q,ge,(1<<Ye)-1)+fl[Be],ge+=Ye}var en=Pe[bits16(Q,ge)&pn],nn=en>>>4;en||err(3),ge+=en&15;var Qe=fd[nn];if(nn>3){var Ye=fdeb[nn];Qe+=bits16(Q,ge)&(1<<Ye)-1,ge+=Ye}if(ge>Ce){me&&err(0);break}ve&&_e(fe+131072);for(var ln=fe+on;fe<ln;fe+=4)de[fe]=de[fe-Qe],de[fe+1]=de[fe+1-Qe],de[fe+2]=de[fe+2-Qe],de[fe+3]=de[fe+3-Qe];fe=ln}}ue.l=be,ue.p=Ze,ue.b=fe,ue.f=he,be&&(he=1,ue.m=we,ue.d=Pe,ue.n=De)}while(!he);return fe==de.length?de:slc(de,0,fe)},et=new u8(0),zlv=function(Q){((Q[0]&15)!=8||Q[0]>>>4>7||(Q[0]<<8|Q[1])%31)&&err(6,"invalid zlib data"),Q[1]&32&&err(6,"invalid zlib data: preset dictionaries not supported")};function unzlibSync(Q,de){return inflt((zlv(Q),Q.subarray(2,-4)),de)}var te$1=typeof TextEncoder<"u"&&new TextEncoder,td=typeof TextDecoder<"u"&&new TextDecoder,tds=0;try{td.decode(et,{stream:!0}),tds=1}catch{}var dutf8=function(Q){for(var de="",ue=0;;){var pe=Q[ue++],ve=(pe>127)+(pe>223)+(pe>239);if(ue+ve>Q.length)return[de,slc(Q,ue-1)];ve?ve==3?(pe=((pe&15)<<18|(Q[ue++]&63)<<12|(Q[ue++]&63)<<6|Q[ue++]&63)-65536,de+=String.fromCharCode(55296|pe>>10,56320|pe&1023)):ve&1?de+=String.fromCharCode((pe&31)<<6|Q[ue++]&63):de+=String.fromCharCode((pe&15)<<12|(Q[ue++]&63)<<6|Q[ue++]&63):de+=String.fromCharCode(pe)}};function strToU8(Q,de){if(de){for(var ue=new u8(Q.length),pe=0;pe<Q.length;++pe)ue[pe]=Q.charCodeAt(pe);return ue}if(te$1)return te$1.encode(Q);for(var ve=Q.length,me=new u8(Q.length+(Q.length>>1)),_e=0,he=function(be){me[_e++]=be},pe=0;pe<ve;++pe){if(_e+5>me.length){var ge=new u8(_e+8+(ve-pe<<1));ge.set(me),me=ge}var fe=Q.charCodeAt(pe);fe<128||de?he(fe):fe<2048?(he(192|fe>>6),he(128|fe&63)):fe>55295&&fe<57344?(fe=65536+(fe&1023<<10)|Q.charCodeAt(++pe)&1023,he(240|fe>>18),he(128|fe>>12&63),he(128|fe>>6&63),he(128|fe&63)):(he(224|fe>>12),he(128|fe>>6&63),he(128|fe&63))}return slc(me,0,_e)}function strFromU8(Q,de){if(de){for(var ue="",pe=0;pe<Q.length;pe+=16384)ue+=String.fromCharCode.apply(null,Q.subarray(pe,pe+16384));return ue}else{if(td)return td.decode(Q);var ve=dutf8(Q),me=ve[0],_e=ve[1];return _e.length&&err(8),me}}const c$3=({name:Q="",color:de="currentColor"},{slots:ue})=>{var pe;return h$2("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${Q}-icon`],viewBox:"0 0 1024 1024",fill:de,"aria-label":`${Q} icon`},(pe=ue.default)==null?void 0:pe.call(ue))};c$3.displayName="IconBase";const I$2=({size:Q=48,stroke:de=4,wrapper:ue=!0,height:pe=2*Q})=>{const ve=h$2("svg",{xmlns:"http://www.w3.org/2000/svg",width:Q,height:Q,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[h$2("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),h$2("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":de,"stroke-linecap":"round"},[h$2("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),h$2("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return ue?h$2("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${pe}px`},ve):ve};I$2.displayName="LoadingIcon";const J$1=(Q,{slots:de})=>{var ue;return((ue=de.default)==null?void 0:ue.call(de))||null},O$2=()=>h$2(c$3,{name:"github"},()=>h$2("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));O$2.displayName="GitHubIcon";const _$1=()=>h$2(c$3,{name:"gitlab"},()=>h$2("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));_$1.displayName="GitLabIcon";const k$2=()=>h$2(c$3,{name:"gitee"},()=>h$2("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));k$2.displayName="GiteeIcon";const S$4=()=>h$2(c$3,{name:"bitbucket"},()=>h$2("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));S$4.displayName="BitbucketIcon";const x$2=()=>h$2(c$3,{name:"source"},()=>h$2("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));x$2.displayName="SourceIcon";const m$3=Array.isArray,X=Q=>typeof Q=="function",r$2=Q=>typeof Q=="string";var C$2=Q=>/^(https?:)?\/\//.test(Q),u$1=Q=>Object.prototype.toString.call(Q)==="[object Object]";const Z=(Q,de)=>{const ue=de?de._instance:getCurrentInstance();return u$1(ue==null?void 0:ue.appContext.components)&&(Q in ue.appContext.components||camelize(Q)in ue.appContext.components||capitalize(camelize(Q))in ue.appContext.components)};function ee(Q){return Q}function te(Q,de=!0){getCurrentInstance()?onMounted(Q):de?Q():nextTick(Q)}function ne(Q,de=!1){const ue=ref(),pe=()=>ue.value=!!Q();return pe(),te(pe,de),ue}const z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__";z[N]=z[N]||{};var L$1;(function(Q){Q.UP="UP",Q.RIGHT="RIGHT",Q.DOWN="DOWN",Q.LEFT="LEFT",Q.NONE="NONE"})(L$1||(L$1={}));var oe=Object.defineProperty,M$1=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,P$1=(Q,de,ue)=>de in Q?oe(Q,de,{enumerable:!0,configurable:!0,writable:!0,value:ue}):Q[de]=ue,ae=(Q,de)=>{for(var ue in de||(de={}))se.call(de,ue)&&P$1(Q,ue,de[ue]);if(M$1)for(var ue of M$1(de))ie.call(de,ue)&&P$1(Q,ue,de[ue]);return Q};const re={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ae({linear:ee},re);const T$4=()=>ne(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),ce=()=>{const Q=T$4();return computed(()=>Q.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},le=Q=>{const de=useRouteLocale();return computed(()=>Q[de.value])},ye=(Q="")=>{if(Q){if(typeof Q=="number")return new Date(Q);const de=Date.parse(Q.toString());if(!Number.isNaN(de))return new Date(de)}return null},Ee=(Q,de)=>{let ue=1;for(let pe=0;pe<Q.length;pe++)ue+=Q.charCodeAt(pe),ue+=ue<<10,ue^=ue>>6;return ue+=ue<<3,ue^=ue>>11,ue%de},A$1=(Q,de)=>r$2(Q)&&Q.startsWith(de),Ie=(Q,de)=>r$2(Q)&&Q.endsWith(de),$$1=Object.entries,h$1=Object.keys,f$1=(Q,...de)=>{if(de.length===0)return Q;const ue=de.shift()||null;return ue&&$$1(ue).forEach(([pe,ve])=>{pe==="__proto__"||pe==="constructor"||(u$1(Q[pe])&&u$1(ve)?f$1(Q[pe],ve):m$3(ve)?Q[pe]=[...ve]:u$1(ve)?Q[pe]={...ve}:Q[pe]=ue[pe])}),f$1(Q,...de)},B$1=Q=>u$1(Q)&&r$2(Q.name),ke=(Q,de=!1)=>Q?m$3(Q)?Q.map(ue=>r$2(ue)?{name:ue}:B$1(ue)?ue:null).filter(ue=>ue!==null):r$2(Q)?[{name:Q}]:B$1(Q)?[Q]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${de?"":"| false"} | undefined\`, but got`,Q),[]):[],g$1=(Q,de)=>{if(Q){if(m$3(Q)&&Q.every(r$2))return Q;if(r$2(Q))return[Q];console.error(`Expect ${de||"value"} to be \`string[] | string | undefined\`, but got`,Q)}return[]},Se=Q=>g$1(Q,"category"),xe=Q=>g$1(Q,"tag"),ze=Q=>A$1(Q,"/");class Ne{constructor(){this.messageElements={};const de="message-container",ue=document.getElementById(de);ue?this.containerElement=ue:(this.containerElement=document.createElement("div"),this.containerElement.id=de,document.body.appendChild(this.containerElement))}pop(de,ue=2e3){const pe=document.createElement("div"),ve=Date.now();return pe.className="message move-in",pe.innerHTML=de,this.containerElement.appendChild(pe),this.messageElements[ve]=pe,ue>0&&setTimeout(()=>{this.close(ve)},ue),ve}close(de){if(de){const ue=this.messageElements[de];ue.classList.remove("move-in"),ue.classList.add("move-out"),ue.addEventListener("animationend",()=>{ue.remove(),delete this.messageElements[de]})}else h$1(this.messageElements).forEach(ue=>this.close(Number(ue)))}destroy(){document.body.removeChild(this.containerElement)}}const H$2=/#.*$/u,R=Q=>{const de=H$2.exec(Q);return de?de[0]:""},b$2=Q=>decodeURI(Q).replace(H$2,"").replace(/(index)?\.(md|html)$/,""),Le=(Q,de)=>{if(de===void 0)return!1;const ue=b$2(Q.path),pe=b$2(de),ve=R(de);return ve?ve===Q.hash&&(!pe||ue===pe):ue===pe},Te=Q=>{const de=atob(Q);return strFromU8(unzlibSync(strToU8(de,!0)))},Ae=Q=>C$2(Q)?Q:`https://github.com/${Q}`,$e=Q=>!C$2(Q)||/github\.com/.test(Q)?"GitHub":/bitbucket\.org/.test(Q)?"Bitbucket":/gitlab\.com/.test(Q)?"GitLab":/gitee\.com/.test(Q)?"Gitee":null,j=(Q,...de)=>{const ue=Q.resolve(...de),pe=ue.matched[ue.matched.length-1];if(!(pe!=null&&pe.redirect))return ue;const{redirect:ve}=pe,me=X(ve)?ve(ue):ve,_e=r$2(me)?{path:me}:me;return j(Q,{hash:ue.hash,query:ue.query,params:ue.params,..._e})};var _a;const isClient=typeof window<"u",isFunction=Q=>typeof Q=="function",isString=Q=>typeof Q=="string",noop=()=>{},isIOS=isClient&&((_a=window==null?void 0:window.navigator)==null?void 0:_a.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function resolveUnref(Q){return typeof Q=="function"?Q():unref(Q)}function createFilterWrapper(Q,de){function ue(...pe){return new Promise((ve,me)=>{Promise.resolve(Q(()=>de.apply(this,pe),{fn:de,thisArg:this,args:pe})).then(ve).catch(me)})}return ue}const bypassFilter=Q=>Q();function debounceFilter(Q,de={}){let ue,pe,ve=noop;const me=he=>{clearTimeout(he),ve(),ve=noop};return he=>{const ge=resolveUnref(Q),fe=resolveUnref(de.maxWait);return ue&&me(ue),ge<=0||fe!==void 0&&fe<=0?(pe&&(me(pe),pe=null),Promise.resolve(he())):new Promise((be,Pe)=>{ve=de.rejectOnCancel?Pe:be,fe&&!pe&&(pe=setTimeout(()=>{ue&&me(ue),pe=null,be(he())},fe)),ue=setTimeout(()=>{pe&&me(pe),pe=null,be(he())},ge)})}}function throttleFilter(Q,de=!0,ue=!0,pe=!1){let ve=0,me,_e=!0,he=noop,ge;const fe=()=>{me&&(clearTimeout(me),me=void 0,he(),he=noop)};return Pe=>{const we=resolveUnref(Q),De=Date.now()-ve,Ce=()=>ge=Pe();return fe(),we<=0?(ve=Date.now(),Ce()):(De>we&&(ue||!_e)?(ve=Date.now(),Ce()):de&&(ge=new Promise((Oe,Re)=>{he=pe?Re:Oe,me=setTimeout(()=>{ve=Date.now(),_e=!0,Oe(Ce()),fe()},Math.max(0,we-De))})),!ue&&!me&&(me=setTimeout(()=>_e=!0,we)),_e=!1,ge)}}function pausableFilter(Q=bypassFilter){const de=ref(!0);function ue(){de.value=!1}function pe(){de.value=!0}const ve=(...me)=>{de.value&&Q(...me)};return{isActive:readonly(de),pause:ue,resume:pe,eventFilter:ve}}function identity(Q){return Q}function tryOnScopeDispose(Q){return getCurrentScope()?(onScopeDispose(Q),!0):!1}function useDebounceFn(Q,de=200,ue={}){return createFilterWrapper(debounceFilter(de,ue),Q)}function useThrottleFn(Q,de=200,ue=!1,pe=!0,ve=!1){return createFilterWrapper(throttleFilter(de,ue,pe,ve),Q)}function resolveRef(Q){return typeof Q=="function"?computed(Q):ref(Q)}function tryOnMounted(Q,de=!0){getCurrentInstance()?onMounted(Q):de?Q():nextTick(Q)}function useTimeoutFn(Q,de,ue={}){const{immediate:pe=!0}=ue,ve=ref(!1);let me=null;function _e(){me&&(clearTimeout(me),me=null)}function he(){ve.value=!1,_e()}function ge(...fe){_e(),ve.value=!0,me=setTimeout(()=>{ve.value=!1,me=null,Q(...fe)},resolveUnref(de))}return pe&&(ve.value=!0,isClient&&ge()),tryOnScopeDispose(he),{isPending:readonly(ve),start:ge,stop:he}}function useToggle(Q=!1,de={}){const{truthyValue:ue=!0,falsyValue:pe=!1}=de,ve=isRef(Q),me=ref(Q);function _e(he){if(arguments.length)return me.value=he,me.value;{const ge=resolveUnref(ue);return me.value=me.value===ge?resolveUnref(pe):ge,me.value}}return ve?_e:[me,_e]}var __getOwnPropSymbols$6=Object.getOwnPropertySymbols,__hasOwnProp$6=Object.prototype.hasOwnProperty,__propIsEnum$6=Object.prototype.propertyIsEnumerable,__objRest$5=(Q,de)=>{var ue={};for(var pe in Q)__hasOwnProp$6.call(Q,pe)&&de.indexOf(pe)<0&&(ue[pe]=Q[pe]);if(Q!=null&&__getOwnPropSymbols$6)for(var pe of __getOwnPropSymbols$6(Q))de.indexOf(pe)<0&&__propIsEnum$6.call(Q,pe)&&(ue[pe]=Q[pe]);return ue};function watchWithFilter(Q,de,ue={}){const pe=ue,{eventFilter:ve=bypassFilter}=pe,me=__objRest$5(pe,["eventFilter"]);return watch(Q,createFilterWrapper(ve,de),me)}var __defProp$2=Object.defineProperty,__defProps$2=Object.defineProperties,__getOwnPropDescs$2=Object.getOwnPropertyDescriptors,__getOwnPropSymbols$2=Object.getOwnPropertySymbols,__hasOwnProp$2=Object.prototype.hasOwnProperty,__propIsEnum$2=Object.prototype.propertyIsEnumerable,__defNormalProp$2=(Q,de,ue)=>de in Q?__defProp$2(Q,de,{enumerable:!0,configurable:!0,writable:!0,value:ue}):Q[de]=ue,__spreadValues$2=(Q,de)=>{for(var ue in de||(de={}))__hasOwnProp$2.call(de,ue)&&__defNormalProp$2(Q,ue,de[ue]);if(__getOwnPropSymbols$2)for(var ue of __getOwnPropSymbols$2(de))__propIsEnum$2.call(de,ue)&&__defNormalProp$2(Q,ue,de[ue]);return Q},__spreadProps$2=(Q,de)=>__defProps$2(Q,__getOwnPropDescs$2(de)),__objRest$1$1=(Q,de)=>{var ue={};for(var pe in Q)__hasOwnProp$2.call(Q,pe)&&de.indexOf(pe)<0&&(ue[pe]=Q[pe]);if(Q!=null&&__getOwnPropSymbols$2)for(var pe of __getOwnPropSymbols$2(Q))de.indexOf(pe)<0&&__propIsEnum$2.call(Q,pe)&&(ue[pe]=Q[pe]);return ue};function watchPausable(Q,de,ue={}){const pe=ue,{eventFilter:ve}=pe,me=__objRest$1$1(pe,["eventFilter"]),{eventFilter:_e,pause:he,resume:ge,isActive:fe}=pausableFilter(ve);return{stop:watchWithFilter(Q,de,__spreadProps$2(__spreadValues$2({},me),{eventFilter:_e})),pause:he,resume:ge,isActive:fe}}function unrefElement(Q){var de;const ue=resolveUnref(Q);return(de=ue==null?void 0:ue.$el)!=null?de:ue}const defaultWindow=isClient?window:void 0,defaultDocument=isClient?window.document:void 0,defaultNavigator=isClient?window.navigator:void 0;function useEventListener(...Q){let de,ue,pe,ve;if(isString(Q[0])||Array.isArray(Q[0])?([ue,pe,ve]=Q,de=defaultWindow):[de,ue,pe,ve]=Q,!de)return noop;Array.isArray(ue)||(ue=[ue]),Array.isArray(pe)||(pe=[pe]);const me=[],_e=()=>{me.forEach(be=>be()),me.length=0},he=(be,Pe,we,De)=>(be.addEventListener(Pe,we,De),()=>be.removeEventListener(Pe,we,De)),ge=watch(()=>[unrefElement(de),resolveUnref(ve)],([be,Pe])=>{_e(),be&&me.push(...ue.flatMap(we=>pe.map(De=>he(be,we,De,Pe))))},{immediate:!0,flush:"post"}),fe=()=>{ge(),_e()};return tryOnScopeDispose(fe),fe}let _iOSWorkaround=!1;function onClickOutside(Q,de,ue={}){const{window:pe=defaultWindow,ignore:ve=[],capture:me=!0,detectIframe:_e=!1}=ue;if(!pe)return;isIOS&&!_iOSWorkaround&&(_iOSWorkaround=!0,Array.from(pe.document.body.children).forEach(we=>we.addEventListener("click",noop)));let he=!0;const ge=we=>ve.some(De=>{if(typeof De=="string")return Array.from(pe.document.querySelectorAll(De)).some(Ce=>Ce===we.target||we.composedPath().includes(Ce));{const Ce=unrefElement(De);return Ce&&(we.target===Ce||we.composedPath().includes(Ce))}}),be=[useEventListener(pe,"click",we=>{const De=unrefElement(Q);if(!(!De||De===we.target||we.composedPath().includes(De))){if(we.detail===0&&(he=!ge(we)),!he){he=!0;return}de(we)}},{passive:!0,capture:me}),useEventListener(pe,"pointerdown",we=>{const De=unrefElement(Q);De&&(he=!we.composedPath().includes(De)&&!ge(we))},{passive:!0}),_e&&useEventListener(pe,"blur",we=>{var De;const Ce=unrefElement(Q);((De=pe.document.activeElement)==null?void 0:De.tagName)==="IFRAME"&&!(Ce!=null&&Ce.contains(pe.document.activeElement))&&de(we)})].filter(Boolean);return()=>be.forEach(we=>we())}function useSupported(Q,de=!1){const ue=ref(),pe=()=>ue.value=Boolean(Q());return pe(),tryOnMounted(pe,de),ue}function useMediaQuery(Q,de={}){const{window:ue=defaultWindow}=de,pe=useSupported(()=>ue&&"matchMedia"in ue&&typeof ue.matchMedia=="function");let ve;const me=ref(!1),_e=()=>{ve&&("removeEventListener"in ve?ve.removeEventListener("change",he):ve.removeListener(he))},he=()=>{pe.value&&(_e(),ve=ue.matchMedia(resolveRef(Q).value),me.value=ve.matches,"addEventListener"in ve?ve.addEventListener("change",he):ve.addListener(he))};return watchEffect(he),tryOnScopeDispose(()=>_e()),me}function useClipboard(Q={}){const{navigator:de=defaultNavigator,read:ue=!1,source:pe,copiedDuring:ve=1500,legacy:me=!1}=Q,_e=["copy","cut"],he=useSupported(()=>de&&"clipboard"in de),ge=computed(()=>he.value||me),fe=ref(""),be=ref(!1),Pe=useTimeoutFn(()=>be.value=!1,ve);function we(){he.value?de.clipboard.readText().then(Re=>{fe.value=Re}):fe.value=Oe()}if(ge.value&&ue)for(const Re of _e)useEventListener(Re,we);async function De(Re=resolveUnref(pe)){ge.value&&Re!=null&&(he.value?await de.clipboard.writeText(Re):Ce(Re),fe.value=Re,be.value=!0,Pe.start())}function Ce(Re){const Ve=document.createElement("textarea");Ve.value=Re??"",Ve.style.position="absolute",Ve.style.opacity="0",document.body.appendChild(Ve),Ve.select(),document.execCommand("copy"),Ve.remove()}function Oe(){var Re,Ve,He;return(He=(Ve=(Re=document==null?void 0:document.getSelection)==null?void 0:Re.call(document))==null?void 0:Ve.toString())!=null?He:""}return{isSupported:ge,text:fe,copied:be,copy:De}}const _global=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},globalKey="__vueuse_ssr_handlers__";_global[globalKey]=_global[globalKey]||{};const handlers=_global[globalKey];function getSSRHandler(Q,de){return handlers[Q]||de}function guessSerializerType(Q){return Q==null?"any":Q instanceof Set?"set":Q instanceof Map?"map":Q instanceof Date?"date":typeof Q=="boolean"?"boolean":typeof Q=="string"?"string":typeof Q=="object"?"object":Number.isNaN(Q)?"any":"number"}var __defProp$k=Object.defineProperty,__getOwnPropSymbols$m=Object.getOwnPropertySymbols,__hasOwnProp$m=Object.prototype.hasOwnProperty,__propIsEnum$m=Object.prototype.propertyIsEnumerable,__defNormalProp$k=(Q,de,ue)=>de in Q?__defProp$k(Q,de,{enumerable:!0,configurable:!0,writable:!0,value:ue}):Q[de]=ue,__spreadValues$k=(Q,de)=>{for(var ue in de||(de={}))__hasOwnProp$m.call(de,ue)&&__defNormalProp$k(Q,ue,de[ue]);if(__getOwnPropSymbols$m)for(var ue of __getOwnPropSymbols$m(de))__propIsEnum$m.call(de,ue)&&__defNormalProp$k(Q,ue,de[ue]);return Q};const StorageSerializers={boolean:{read:Q=>Q==="true",write:Q=>String(Q)},object:{read:Q=>JSON.parse(Q),write:Q=>JSON.stringify(Q)},number:{read:Q=>Number.parseFloat(Q),write:Q=>String(Q)},any:{read:Q=>Q,write:Q=>String(Q)},string:{read:Q=>Q,write:Q=>String(Q)},map:{read:Q=>new Map(JSON.parse(Q)),write:Q=>JSON.stringify(Array.from(Q.entries()))},set:{read:Q=>new Set(JSON.parse(Q)),write:Q=>JSON.stringify(Array.from(Q))},date:{read:Q=>new Date(Q),write:Q=>Q.toISOString()}},customStorageEventName="vueuse-storage";function useStorage(Q,de,ue,pe={}){var ve;const{flush:me="pre",deep:_e=!0,listenToStorageChanges:he=!0,writeDefaults:ge=!0,mergeDefaults:fe=!1,shallow:be,window:Pe=defaultWindow,eventFilter:we,onError:De=Be=>{console.error(Be)}}=pe,Ce=(be?shallowRef:ref)(de);if(!ue)try{ue=getSSRHandler("getDefaultStorage",()=>{var Be;return(Be=defaultWindow)==null?void 0:Be.localStorage})()}catch(Be){De(Be)}if(!ue)return Ce;const Oe=resolveUnref(de),Re=guessSerializerType(Oe),Ve=(ve=pe.serializer)!=null?ve:StorageSerializers[Re],{pause:He,resume:Fe}=watchPausable(Ce,()=>Ge(Ce.value),{flush:me,deep:_e,eventFilter:we});return Pe&&he&&(useEventListener(Pe,"storage",Me),useEventListener(Pe,customStorageEventName,je)),Me(),Ce;function Ge(Be){try{if(Be==null)ue.removeItem(Q);else{const qe=Ve.write(Be),Ue=ue.getItem(Q);Ue!==qe&&(ue.setItem(Q,qe),Pe&&Pe.dispatchEvent(new CustomEvent(customStorageEventName,{detail:{key:Q,oldValue:Ue,newValue:qe,storageArea:ue}})))}}catch(qe){De(qe)}}function We(Be){const qe=Be?Be.newValue:ue.getItem(Q);if(qe==null)return ge&&Oe!==null&&ue.setItem(Q,Ve.write(Oe)),Oe;if(!Be&&fe){const Ue=Ve.read(qe);return isFunction(fe)?fe(Ue,Oe):Re==="object"&&!Array.isArray(Ue)?__spreadValues$k(__spreadValues$k({},Oe),Ue):Ue}else return typeof qe!="string"?qe:Ve.read(qe)}function je(Be){Me(Be.detail)}function Me(Be){if(!(Be&&Be.storageArea!==ue)){if(Be&&Be.key==null){Ce.value=Oe;return}if(!(Be&&Be.key!==Q)){He();try{Ce.value=We(Be)}catch(qe){De(qe)}finally{Be?nextTick(Fe):Fe()}}}}}function usePreferredDark(Q){return useMediaQuery("(prefers-color-scheme: dark)",Q)}const functionsMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function useFullscreen(Q,de={}){const{document:ue=defaultDocument,autoExit:pe=!1}=de,ve=Q||(ue==null?void 0:ue.querySelector("html")),me=ref(!1);let _e=functionsMap[0];const he=useSupported(()=>{if(ue){for(const Oe of functionsMap)if(Oe[1]in ue)return _e=Oe,!0}else return!1;return!1}),[ge,fe,be,,Pe]=_e;async function we(){he.value&&(ue!=null&&ue[be]&&await ue[fe](),me.value=!1)}async function De(){if(!he.value)return;await we();const Oe=unrefElement(ve);Oe&&(await Oe[ge](),me.value=!0)}async function Ce(){me.value?await we():await De()}return ue&&useEventListener(ue,Pe,()=>{me.value=!!(ue!=null&&ue[be])},!1),pe&&tryOnScopeDispose(we),{isSupported:he,isFullscreen:me,enter:De,exit:we,toggle:Ce}}var __getOwnPropSymbols$8=Object.getOwnPropertySymbols,__hasOwnProp$8=Object.prototype.hasOwnProperty,__propIsEnum$8=Object.prototype.propertyIsEnumerable,__objRest$1=(Q,de)=>{var ue={};for(var pe in Q)__hasOwnProp$8.call(Q,pe)&&de.indexOf(pe)<0&&(ue[pe]=Q[pe]);if(Q!=null&&__getOwnPropSymbols$8)for(var pe of __getOwnPropSymbols$8(Q))de.indexOf(pe)<0&&__propIsEnum$8.call(Q,pe)&&(ue[pe]=Q[pe]);return ue};function useMutationObserver(Q,de,ue={}){const pe=ue,{window:ve=defaultWindow}=pe,me=__objRest$1(pe,["window"]);let _e;const he=useSupported(()=>ve&&"MutationObserver"in ve),ge=()=>{_e&&(_e.disconnect(),_e=void 0)},fe=watch(()=>unrefElement(Q),Pe=>{ge(),he.value&&ve&&Pe&&(_e=new MutationObserver(de),_e.observe(Pe,me))},{immediate:!0}),be=()=>{ge(),fe()};return tryOnScopeDispose(be),{isSupported:he,stop:be}}var SwipeDirection;(function(Q){Q.UP="UP",Q.RIGHT="RIGHT",Q.DOWN="DOWN",Q.LEFT="LEFT",Q.NONE="NONE"})(SwipeDirection||(SwipeDirection={}));function checkOverflowScroll(Q){const de=window.getComputedStyle(Q);if(de.overflowX==="scroll"||de.overflowY==="scroll"||de.overflowX==="auto"&&Q.clientHeight<Q.scrollHeight||de.overflowY==="auto"&&Q.clientWidth<Q.scrollWidth)return!0;{const ue=Q.parentNode;return!ue||ue.tagName==="BODY"?!1:checkOverflowScroll(ue)}}function preventDefault(Q){const de=Q||window.event,ue=de.target;return checkOverflowScroll(ue)?!1:de.touches.length>1?!0:(de.preventDefault&&de.preventDefault(),!1)}function useScrollLock(Q,de=!1){const ue=ref(de);let pe=null,ve;watch(resolveRef(Q),he=>{if(he){const ge=he;ve=ge.style.overflow,ue.value&&(ge.style.overflow="hidden")}},{immediate:!0});const me=()=>{const he=resolveUnref(Q);!he||ue.value||(isIOS&&(pe=useEventListener(he,"touchmove",ge=>{preventDefault(ge)},{passive:!1})),he.style.overflow="hidden",ue.value=!0)},_e=()=>{const he=resolveUnref(Q);!he||!ue.value||(isIOS&&(pe==null||pe()),he.style.overflow=ve,ue.value=!1)};return tryOnScopeDispose(_e),computed({get(){return ue.value},set(he){he?me():_e()}})}let _id=0;function useStyleTag(Q,de={}){const ue=ref(!1),{document:pe=defaultDocument,immediate:ve=!0,manual:me=!1,id:_e=`vueuse_styletag_${++_id}`}=de,he=ref(Q);let ge=()=>{};const fe=()=>{if(!pe)return;const Pe=pe.getElementById(_e)||pe.createElement("style");Pe.isConnected||(Pe.type="text/css",Pe.id=_e,de.media&&(Pe.media=de.media),pe.head.appendChild(Pe)),!ue.value&&(ge=watch(he,we=>{Pe.textContent=we},{immediate:!0}),ue.value=!0)},be=()=>{!pe||!ue.value||(ge(),pe.head.removeChild(pe.getElementById(_e)),ue.value=!1)};return ve&&!me&&tryOnMounted(fe),me||tryOnScopeDispose(be),{id:_e,css:he,unload:be,load:fe,isLoaded:readonly(ue)}}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(Q,de,ue)=>de in Q?__defProp(Q,de,{enumerable:!0,configurable:!0,writable:!0,value:ue}):Q[de]=ue,__spreadValues=(Q,de)=>{for(var ue in de||(de={}))__hasOwnProp.call(de,ue)&&__defNormalProp(Q,ue,de[ue]);if(__getOwnPropSymbols)for(var ue of __getOwnPropSymbols(de))__propIsEnum.call(de,ue)&&__defNormalProp(Q,ue,de[ue]);return Q};const _TransitionPresets={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};__spreadValues({linear:identity},_TransitionPresets);function useWindowScroll({window:Q=defaultWindow}={}){if(!Q)return{x:ref(0),y:ref(0)};const de=ref(Q.scrollX),ue=ref(Q.scrollY);return useEventListener(Q,"scroll",()=>{de.value=Q.scrollX,ue.value=Q.scrollY},{capture:!1,passive:!0}),{x:de,y:ue}}const badge="",t$1=({type:Q="info",text:de="",vertical:ue="top",color:pe},{slots:ve})=>{var me;return h$2("span",{class:["badge",Q,{diy:pe}],style:{verticalAlign:ue,...pe?{backgroundColor:pe}:{}}},de||((me=ve.default)==null?void 0:me.call(ve)))};t$1.displayName="Badge";const fontIcon="";var m$2=defineComponent({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(Q){const de=computed(()=>{const pe=["font-icon icon"],ve=`iconfont icon-${Q.icon}`;return pe.push(ve),pe}),ue=computed(()=>{const pe={};return Q.color&&(pe.color=Q.color),Q.size&&(pe["font-size"]=Number.isNaN(Number(Q.size))?Q.size:`${Q.size}px`),h$1(pe).length?pe:null});return()=>Q.icon?h$2("span",{key:Q.icon,class:de.value,style:ue.value}):null}});const l$2=()=>h$2(c$3,{name:"back-to-top"},()=>[h$2("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),h$2("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);l$2.displayName="BackToTopIcon";const balloon="",backToTop="";var T$3=defineComponent({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup(Q){const de=usePageFrontmatter(),ue=le({"/en/":{backToTop:"Back to top"},"/":{backToTop:"返回顶部"}}),{y:pe}=useWindowScroll(),ve=computed(()=>de.value.backToTop!==!1&&pe.value>Q.threshold);return()=>h$2(Transition,{name:"fade"},()=>ve.value?h$2("button",{type:"button",class:"back-to-top","aria-label":ue.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},h$2(l$2)):null)}});const srOnly="",clientConfig1=defineClientConfig({enhance:({app:Q})=>{Z("Badge")||Q.component("Badge",t$1),Z("FontIcon")||Q.component("FontIcon",m$2)},setup:()=>{useStyleTag(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `)},rootComponents:[()=>h$2(T$3,{threshold:300})]});function r$1(Q,de,ue){var pe,ve,me;de===void 0&&(de=50),ue===void 0&&(ue={});var _e=(pe=ue.isImmediate)!=null&&pe,he=(ve=ue.callback)!=null&&ve,ge=ue.maxWait,fe=Date.now(),be=[];function Pe(){if(ge!==void 0){var De=Date.now()-fe;if(De+de>=ge)return ge-De}return de}var we=function(){var De=[].slice.call(arguments),Ce=this;return new Promise(function(Oe,Re){var Ve=_e&&me===void 0;if(me!==void 0&&clearTimeout(me),me=setTimeout(function(){if(me=void 0,fe=Date.now(),!_e){var Fe=Q.apply(Ce,De);he&&he(Fe),be.forEach(function(Ge){return(0,Ge.resolve)(Fe)}),be=[]}},Pe()),Ve){var He=Q.apply(Ce,De);return he&&he(He),Oe(He)}be.push({resolve:Oe,reject:Re})})};return we.cancel=function(De){me!==void 0&&clearTimeout(me),be.forEach(function(Ce){return(0,Ce.reject)(De)}),be=[]},we}const useActiveHeaderLinks=({headerLinkSelector:Q,headerAnchorSelector:de,delay:ue,offset:pe=5})=>{const ve=useRouter(),_e=r$1(()=>{var Oe,Re;const he=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(he-0)<pe){updateHash(ve,"");return}const fe=window.innerHeight+he,be=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),Pe=Math.abs(be-fe)<pe,we=Array.from(document.querySelectorAll(Q)),Ce=Array.from(document.querySelectorAll(de)).filter(Ve=>we.some(He=>He.hash===Ve.hash));for(let Ve=0;Ve<Ce.length;Ve++){const He=Ce[Ve],Fe=Ce[Ve+1],Ge=he>=(((Oe=He.parentElement)==null?void 0:Oe.offsetTop)??0)-pe,We=!Fe||he<(((Re=Fe.parentElement)==null?void 0:Re.offsetTop)??0)-pe;if(!(Ge&&We))continue;const Me=decodeURIComponent(ve.currentRoute.value.hash),Be=decodeURIComponent(He.hash);if(Me===Be)return;if(Pe){for(let qe=Ve+1;qe<Ce.length;qe++)if(Me===decodeURIComponent(Ce[qe].hash))return}updateHash(ve,Be);return}},ue);onMounted(()=>{window.addEventListener("scroll",_e)}),onBeforeUnmount(()=>{window.removeEventListener("scroll",_e)})},updateHash=async(Q,de)=>{const{scrollBehavior:ue}=Q.options;Q.options.scrollBehavior=void 0,await Q.replace({query:Q.currentRoute.value.query,hash:de,force:!0}).finally(()=>Q.options.scrollBehavior=ue)},headerLinkSelector=".sidebar-link, .toc-link",headerAnchorSelector=".header-anchor",delay=200,offset=5,clientConfig2=defineClientConfig({setup(){useActiveHeaderLinks({headerLinkSelector,headerAnchorSelector,delay,offset})}}),autoCatalog="";var D=defineComponent({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(Q,{slots:de}){const ue=le({"/en/":{title:"Catalog"},"/":{title:"目录"}}),pe=usePageData(),ve=useRouter(),me=useSiteData(),_e=fe=>{const be=fe.I;return typeof be>"u"||be},he=()=>{const fe=Q.base||pe.value.path.replace(/\/[^/]+$/,"/"),be=ve.getRoutes(),Pe=[];return be.filter(({meta:we,path:De})=>{if(!A$1(De,fe)||De===fe)return!1;if(fe==="/"){const Ce=h$1(me.value.locales).filter(Oe=>Oe!=="/");if(De==="/404.html"||Ce.some(Oe=>A$1(De,Oe)))return!1}return(Ie(De,".html")&&!Ie(De,"/index.html")||Ie(De,"/"))&&_e(we)}).map(({path:we,meta:De})=>{const Ce=we.substring(fe.length).split("/").length;return{title:De.t||"",icon:De.i,base:we.replace(/\/[^/]+\/?$/,"/"),order:De.O||null,level:Ie(we,"/")?Ce-1:Ce,path:we}}).filter(({title:we,level:De})=>typeof we=="string"&&we&&De<=Q.level).sort(({title:we,level:De,path:Ce,order:Oe},{title:Re,level:Ve,path:He,order:Fe})=>De-Ve||(Ie(Ce,"/index.html")?-1:Ie(He,"/index.html")?1:Oe===null?Fe===null?we.localeCompare(Re):Fe:Fe===null?Oe:Oe>0?Fe>0?Oe-Fe:-1:Fe<0?Oe-Fe:1)).forEach(we=>{var De;const{base:Ce,level:Oe}=we;switch(Oe){case 1:Pe.push(we);break;case 2:{const Re=Pe.find(Ve=>Ve.path===Ce);Re&&(Re.children??(Re.children=[])).push(we);break}default:{const Re=Pe.find(Ve=>Ve.path===Ce.replace(/\/[^/]+\/$/,"/"));if(Re){const Ve=(De=Re.children)==null?void 0:De.find(He=>He.path===Ce);Ve&&(Ve.children??(Ve.children=[])).push(we)}}}}),Pe},ge=computed(()=>he());return()=>h$2("div",{class:"auto-catalog-wrapper"},[h$2("h2",{class:"main-title"},ue.value.title),...ge.value.map(({children:fe=[],icon:be,path:Pe,title:we},De)=>[h$2("h3",{id:we,class:["child-title",{"has-children":fe.length}]},[h$2("a",{href:`#${we}`,class:"header-anchor"},"#"),h$2(RouterLink,{class:"catalog-title",to:Pe},()=>[Q.index?`${De+1}.`:null,be&&de.icon?de.icon({icon:be}):null,we||"Unknown"])]),fe.length?h$2("ul",{class:"child-catalog-wrapper"},fe.map(({children:Ce=[],icon:Oe,path:Re,title:Ve},He)=>h$2("li",{class:"child-catalog-item"},[h$2("div",{class:["sub-title",{"has-children":Ce.length}]},[h$2("a",{href:`#${Ve}`,class:"header-anchor"},"#"),h$2(RouterLink,{class:"catalog-title",to:Re},()=>[Q.index?`${De+1}.${He+1}`:null,Oe&&de.icon?de.icon({icon:Oe}):null,Ve||"Unknown"])]),Ce.length?h$2("div",{class:"sub-catalog-wrapper"},Ce.map(({icon:Fe,path:Ge,title:We},je)=>h$2(RouterLink,{class:"sub-catalog-item",to:Ge},()=>[Q.index?`${De+1}.${He+1}.${je+1}`:null,Fe&&de.icon?de.icon({icon:Fe}):null,We||"Unknown"]))):null]))):null])])}}),K$1=defineClientConfig({enhance:({app:Q})=>{Z("AutoCatalog",Q)||Q.component("AutoCatalog",de=>h$2(D,de,{icon:({icon:ue})=>h$2(resolveComponent("HopeIcon"),{icon:ue})}))}});const vars$1="",externalLinkIcon="",svg=h$2("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[h$2("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),h$2("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ExternalLinkIcon=defineComponent({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(Q){const de=useRouteLocale(),ue=computed(()=>Q.locales[de.value]??{openInNewWindow:"open in new window"});return()=>h$2("span",[svg,h$2("span",{class:"external-link-icon-sr-only"},ue.value.openInNewWindow)])}}),locales={},clientConfig4=defineClientConfig({enhance({app:Q}){Q.component("ExternalLinkIcon",h$2(ExternalLinkIcon,{locales}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const nprogress$1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:Q=>{const de=nprogress$1.isStarted();Q=clamp(Q,nprogress$1.settings.minimum,1),nprogress$1.status=Q===1?null:Q;const ue=nprogress$1.render(!de),pe=ue.querySelector(nprogress$1.settings.barSelector),ve=nprogress$1.settings.speed,me=nprogress$1.settings.easing;return ue.offsetWidth,queue(_e=>{css(pe,{transform:"translate3d("+toBarPerc(Q)+"%,0,0)",transition:"all "+ve+"ms "+me}),Q===1?(css(ue,{transition:"none",opacity:"1"}),ue.offsetWidth,setTimeout(function(){css(ue,{transition:"all "+ve+"ms linear",opacity:"0"}),setTimeout(function(){nprogress$1.remove(),_e()},ve)},ve)):setTimeout(()=>_e(),ve)}),nprogress$1},isStarted:()=>typeof nprogress$1.status=="number",start:()=>{nprogress$1.status||nprogress$1.set(0);const Q=()=>{setTimeout(()=>{nprogress$1.status&&(nprogress$1.trickle(),Q())},nprogress$1.settings.trickleSpeed)};return nprogress$1.settings.trickle&&Q(),nprogress$1},done:Q=>!Q&&!nprogress$1.status?nprogress$1:nprogress$1.inc(.3+.5*Math.random()).set(1),inc:Q=>{let de=nprogress$1.status;return de?(typeof Q!="number"&&(Q=(1-de)*clamp(Math.random()*de,.1,.95)),de=clamp(de+Q,0,.994),nprogress$1.set(de)):nprogress$1.start()},trickle:()=>nprogress$1.inc(Math.random()*nprogress$1.settings.trickleRate),render:Q=>{if(nprogress$1.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");const de=document.createElement("div");de.id="nprogress",de.innerHTML=nprogress$1.settings.template;const ue=de.querySelector(nprogress$1.settings.barSelector),pe=Q?"-100":toBarPerc(nprogress$1.status||0),ve=document.querySelector(nprogress$1.settings.parent);return css(ue,{transition:"all 0 linear",transform:"translate3d("+pe+"%,0,0)"}),ve!==document.body&&addClass(ve,"nprogress-custom-parent"),ve==null||ve.appendChild(de),de},remove:()=>{removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(nprogress$1.settings.parent),"nprogress-custom-parent");const Q=document.getElementById("nprogress");Q&&removeElement(Q)},isRendered:()=>!!document.getElementById("nprogress")},clamp=(Q,de,ue)=>Q<de?de:Q>ue?ue:Q,toBarPerc=Q=>(-1+Q)*100,queue=function(){const Q=[];function de(){const ue=Q.shift();ue&&ue(de)}return function(ue){Q.push(ue),Q.length===1&&de()}}(),css=function(){const Q=["Webkit","O","Moz","ms"],de={};function ue(_e){return _e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(he,ge){return ge.toUpperCase()})}function pe(_e){const he=document.body.style;if(_e in he)return _e;let ge=Q.length;const fe=_e.charAt(0).toUpperCase()+_e.slice(1);let be;for(;ge--;)if(be=Q[ge]+fe,be in he)return be;return _e}function ve(_e){return _e=ue(_e),de[_e]||(de[_e]=pe(_e))}function me(_e,he,ge){he=ve(he),_e.style[he]=ge}return function(_e,he){for(const ge in he){const fe=he[ge];fe!==void 0&&Object.prototype.hasOwnProperty.call(he,ge)&&me(_e,ge,fe)}}}(),hasClass=(Q,de)=>(typeof Q=="string"?Q:classList(Q)).indexOf(" "+de+" ")>=0,addClass=(Q,de)=>{const ue=classList(Q),pe=ue+de;hasClass(ue,de)||(Q.className=pe.substring(1))},removeClass=(Q,de)=>{const ue=classList(Q);if(!hasClass(Q,de))return;const pe=ue.replace(" "+de+" "," ");Q.className=pe.substring(1,pe.length-1)},classList=Q=>(" "+(Q.className||"")+" ").replace(/\s+/gi," "),removeElement=Q=>{Q&&Q.parentNode&&Q.parentNode.removeChild(Q)},vars="",nprogress="",useNprogress=()=>{onMounted(()=>{const Q=useRouter(),de=new Set;de.add(Q.currentRoute.value.path),Q.beforeEach(ue=>{de.has(ue.path)||nprogress$1.start()}),Q.afterEach(ue=>{de.add(ue.path),nprogress$1.done()})})},clientConfig5=defineClientConfig({setup(){useNprogress()}}),themeData$1=JSON.parse(`{"encrypt":{},"author":{"name":"Yuze","url":"https://leijue222.github.io/"},"logo":"/logo.svg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"docs","blog":{"medias":{"Email":"dyw222@foxmail.com","GitHub":"https://github.com/leijue222/","Gmail":"leijue222@gmail.com","Resume":"https://yiweiding.netlify.app/","MrHope":"https://mrhope.site"}},"locales":{"/en/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"}},"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"深度学习","icon":"discover","link":"/deeplearning/"},{"text":"工程研发","icon":"edit","prefix":"/develop/","children":[{"text":"常用工具","icon":"tool","prefix":"tools/","children":[{"text":"Dokcer镜像的制作","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 640 512\\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z\\"/></svg>","link":"dockerMake"},{"text":"Docker常用命令","icon":"shell","link":"dockerCMD"},{"text":"frp内网穿透","icon":"tool","link":"frp"}]},{"text":"Linux","icon":"linux","prefix":"linux/","children":[{"text":"Linux常用命令","icon":"shell","link":"linuxCMD"},{"text":"防火墙","icon":"animation","link":"firewalld"}]}]},{"text":"教程","icon":"study","prefix":"/tutorial/","children":[{"text":"前端开发","children":["/front-end/"]},{"text":"后端工具","children":["/ops/"]}]}],"sidebar":{"/zh/":["",{"text":"如何使用","icon":"creative","prefix":"demo/","link":"demo/","children":"structure"},{"text":"文章","icon":"note","prefix":"posts/","children":"structure"},"intro","slides"]},"footer":"主题使用 <a href=\\"https://theme-hope.vuejs.press/zh/\\">VuePress Theme Hope</a> | <a href=\\"https://leijue222.github.io/about/site.html\\" target=\\"_blank\\">关于网站</a>","copyright":"基于 MIT 协议，© 2023-至今 Yuze","displayFooter":true,"blog":{"description":"计算机视觉工程师","intro":"/zh/intro.html"}}}}`),themeData=ref(themeData$1),useThemeData$1=()=>themeData,themeLocaleDataSymbol=Symbol(""),useThemeLocaleData$1=()=>{const Q=inject(themeLocaleDataSymbol);if(!Q)throw new Error("useThemeLocaleData() is called without provider.");return Q},resolveThemeLocaleData=(Q,de)=>{var ue;return{...Q,...(ue=Q.locales)==null?void 0:ue[de]}},clientConfig6=defineClientConfig({enhance({app:Q}){const de=useThemeData$1(),ue=Q._context.provides[routeLocaleSymbol],pe=computed(()=>resolveThemeLocaleData(de.value,ue.value));Q.provide(themeLocaleDataSymbol,pe),Object.defineProperties(Q.config.globalProperties,{$theme:{get(){return de.value}},$themeLocale:{get(){return pe.value}}})}}),button="",S$3=800,u=2e3,M={"/en/":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"},"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},n=!1,P=['.theme-hope-content div[class*="language-"] pre'],m$1=!1,l$1=new Map,T$2=()=>{const{copy:Q}=useClipboard({legacy:!0}),de=le(M),ue=usePageData(),pe=ce(),ve=he=>{if(!he.hasAttribute("copy-code-registered")){const ge=document.createElement("button");ge.type="button",ge.classList.add("copy-code-button"),ge.innerHTML='<div class="copy-icon" />',ge.setAttribute("aria-label",de.value.copy),ge.setAttribute("data-copied",de.value.copied),he.parentElement&&he.parentElement.insertBefore(ge,he),he.setAttribute("copy-code-registered","")}},me=()=>nextTick().then(()=>new Promise(he=>{setTimeout(()=>{P.forEach(ge=>{document.querySelectorAll(ge).forEach(ve)}),he()},S$3)})),_e=(he,ge,fe)=>{let{innerText:be=""}=ge;/language-(shellscript|shell|bash|sh|zsh)/.test(he.classList.toString())&&(be=be.replace(/^ *(\$|>) /gm,"")),Q(be).then(()=>{fe.classList.add("copied"),clearTimeout(l$1.get(fe));const Pe=setTimeout(()=>{fe.classList.remove("copied"),fe.blur(),l$1.delete(fe)},u);l$1.set(fe,Pe)})};onMounted(()=>{(!pe.value||m$1)&&me(),useEventListener("click",he=>{const ge=he.target;if(ge.matches('div[class*="language-"] > button.copy')){const fe=ge.parentElement,be=ge.nextElementSibling;be&&_e(fe,be,ge)}else if(ge.matches('div[class*="language-"] div.copy-icon')){const fe=ge.parentElement,be=fe.parentElement,Pe=fe.nextElementSibling;Pe&&_e(be,Pe,fe)}}),watch(()=>ue.value.path,()=>{(!pe.value||m$1)&&me()})})};var Y$1=defineClientConfig({setup:()=>{T$2()}});const chart="",parseChartConfig=(config,type)=>{if(type==="json")return JSON.parse(config);const exports={},module={exports};return eval(config),module.exports};var ChartJS=defineComponent({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(Q){const de=ref(),ue=ref(),pe=ref(!0);return onMounted(async()=>{const[{default:ve}]=await Promise.all([__vitePreload(()=>import("./auto-ba5ecab5.js"),[]),new Promise(he=>setTimeout(he,800))]);ve.defaults.maintainAspectRatio=!1;const me=parseChartConfig(Te(Q.config),Q.type),_e=ue.value.getContext("2d");new ve(_e,me),pe.value=!1}),()=>[Q.title?h$2("div",{class:"chart-title"},decodeURIComponent(Q.title)):null,pe.value?h$2(I$2,{class:"chart-loading",height:192}):null,h$2("div",{ref:de,class:"chart-wrapper",id:Q.id,style:{display:pe.value?"none":"block"}},h$2("canvas",{ref:ue,height:400}))]}});const codeTabs="",o$2=useStorage("VUEPRESS_CODE_TAB_STORE",{});var S$2=defineComponent({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(Q,{slots:de}){const ue=ref(Q.active),pe=ref([]),ve=()=>{if(Q.tabId){const{title:fe,id:be=fe}=Q.data[ue.value];o$2.value[Q.tabId]=be}},me=(fe=ue.value)=>{ue.value=fe<pe.value.length-1?fe+1:0,pe.value[ue.value].focus()},_e=(fe=ue.value)=>{ue.value=fe>0?fe-1:pe.value.length-1,pe.value[ue.value].focus()},he=(fe,be)=>{if(fe.key===" "||fe.key==="Enter"?(fe.preventDefault(),ue.value=be):fe.key==="ArrowRight"?(fe.preventDefault(),me()):fe.key==="ArrowLeft"&&(fe.preventDefault(),_e()),Q.tabId){const{title:Pe,id:we=Pe}=Q.data[ue.value];o$2.value[Q.tabId]=we}},ge=()=>{if(Q.tabId){const fe=Q.data.findIndex(({title:be,id:Pe=be})=>o$2.value[Q.tabId]===Pe);if(fe!==-1)return fe}return Q.active};return onMounted(()=>{ue.value=ge(),watch(()=>o$2.value[Q.tabId],(fe,be)=>{if(Q.tabId&&fe!==be){const Pe=Q.data.findIndex(({title:we,id:De=we})=>De===fe);Pe!==-1&&(ue.value=Pe)}})}),()=>Q.data.length?h$2("div",{class:"code-tabs"},[h$2("div",{class:"code-tabs-nav",role:"tablist"},Q.data.map(({title:fe},be)=>{const Pe=be===ue.value;return h$2("button",{type:"button",ref:we=>{we&&(pe.value[be]=we)},class:["code-tabs-nav-tab",{active:Pe}],role:"tab","aria-controls":`codetab-${Q.id}-${be}`,"aria-selected":Pe,onClick:()=>{ue.value=be,ve()},onKeydown:we=>he(we,be)},fe)})),Q.data.map(({title:fe,id:be=fe},Pe)=>{var we;const De=Pe===ue.value;return h$2("div",{class:["code-tab",{active:De}],id:`codetab-${Q.id}-${Pe}`,role:"tabpanel","aria-expanded":De},(we=de[`tab${Pe}`])==null?void 0:we.call(de,{title:fe,value:be,isActive:De}))})]):null}});const codeGroup="",c$2=({active:Q=!1},{slots:de})=>{var ue;return h$2("div",{class:["code-group-item",{active:Q}],"aria-selected":Q},(ue=de.default)==null?void 0:ue.call(de))};c$2.displayName="CodeGroupItem";const h=defineComponent({name:"CodeGroup",setup(Q,{slots:de}){const ue=ref(-1),pe=ref([]),ve=(he=ue.value)=>{ue.value=he<pe.value.length-1?he+1:0,pe.value[ue.value].focus()},me=(he=ue.value)=>{ue.value=he>0?he-1:pe.value.length-1,pe.value[ue.value].focus()},_e=(he,ge)=>{he.key===" "||he.key==="Enter"?(he.preventDefault(),ue.value=ge):he.key==="ArrowRight"?(he.preventDefault(),ve(ge)):he.key==="ArrowLeft"&&(he.preventDefault(),me(ge))};return()=>{var he;const ge=(((he=de.default)==null?void 0:he.call(de))||[]).filter(fe=>fe.type.name==="CodeGroupItem").map(fe=>(fe.props===null&&(fe.props={}),fe));return ge.length===0?null:(ue.value<0||ue.value>ge.length-1?(ue.value=ge.findIndex(fe=>"active"in fe.props),ue.value===-1&&(ue.value=0)):ge.forEach((fe,be)=>{fe.props.active=be===ue.value}),h$2("div",{class:"code-group"},[h$2("div",{class:"code-group-nav"},ge.map((fe,be)=>{const Pe=be===ue.value;return h$2("button",{type:"button",ref:we=>{we&&(pe.value[be]=we)},class:["code-group-nav-tab",{active:Pe}],"aria-pressed":Pe,"aria-expanded":Pe,onClick:()=>{ue.value=be},onKeydown:we=>_e(we,be)},fe.props.title)})),ge]))}}}),index$2="",q$1=()=>h$2(c$3,{name:"back"},()=>h$2("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),a$1=()=>h$2(c$3,{name:"home"},()=>h$2("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"})),o$1='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',v$2='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',l='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>',codeDemo="",L={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},E={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},B=(Q,de,ue)=>{const pe=document.createElement(Q);return isPlainObject(de)&&h$1(de).forEach(ve=>{if(ve.indexOf("data"))pe[ve]=de[ve];else{const me=ve.replace("data","");pe.dataset[me]=de[ve]}}),ue&&ue.forEach(ve=>{pe.appendChild(ve)}),pe},w=Q=>({...L,...Q,jsLib:Array.from(new Set([...L.jsLib||[],...Q.jsLib||[]])),cssLib:Array.from(new Set([...L.cssLib||[],...Q.cssLib||[]]))}),m=(Q,de)=>{if(Q[de]!==void 0)return Q[de];const ue=new Promise(pe=>{var ve;const me=document.createElement("script");me.src=de,(ve=document.querySelector("body"))==null||ve.appendChild(me),me.onload=()=>{pe()}});return Q[de]=ue,ue},k$1=(Q,de)=>{if(de.css&&Array.from(Q.childNodes).every(ue=>ue.nodeName!=="STYLE")){const ue=B("style",{innerHTML:de.css});Q.appendChild(ue)}},V=(Q,de,ue)=>{const pe=ue.getScript();if(pe&&Array.from(de.childNodes).every(ve=>ve.nodeName!=="SCRIPT")){const ve=document.createElement("script");ve.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${Q} .code-demo-container').shadowRoot;
${pe}}`)),de.appendChild(ve)}},H$1=Q=>{const de=h$1(Q),ue={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(pe=>{const ve=de.filter(me=>E[pe].types.includes(me));if(ve.length){const me=ve[0];ue[pe]=[Q[me].replace(/^\n|\n$/g,""),E[pe].map[me]||me]}}),ue.isLegal=(!ue.html.length||ue.html[1]==="none")&&(!ue.js.length||ue.js[1]==="none")&&(!ue.css.length||ue.css[1]==="none"),ue},$=Q=>Q.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),x$1=Q=>`<div id="app">
${$(Q)}
</div>`,I$1=Q=>`${Q.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,J=Q=>Q.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),O$1=Q=>`(function(exports){var module={};module.exports=exports;${Q};return module.exports.__esModule?module.exports.default:module.exports;})({})`,q=(Q,de)=>{const ue=w(de),pe=Q.js[0]||"";return{...ue,html:$(Q.html[0]||""),js:pe,css:Q.css[0]||"",isLegal:Q.isLegal,getScript:()=>{var ve;return ue.useBabel?((ve=window.Babel.transform(pe,{presets:["es2015"]}))==null?void 0:ve.code)||"":pe}}},F$1=(Q,de)=>{const ue=w(de),pe=Q.html[0]||"",ve=/<template>([\s\S]+)<\/template>/u.exec(pe),me=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(pe),_e=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(pe),he=ve?ve[1].replace(/^\n|\n$/g,""):"",[ge="",fe=""]=me?[me[4].replace(/^\n|\n$/g,""),me[3]]:[],[be="",Pe=""]=_e?[_e[4].replace(/^\n|\n$/g,""),_e[3]]:[],we=fe===""&&(Pe===""||Pe==="css");return{...ue,html:x$1(he),js:J(ge),css:be,isLegal:we,jsLib:[ue.vue,...ue.jsLib],getScript:()=>{var De,Ce;const Oe=de.useBabel?((Ce=(De=window.Babel)==null?void 0:De.transform(ge,{presets:["es2015"]}))==null?void 0:Ce.code)||"":ge.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${O$1(Oe)};appOptions.template=\`${he.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},G=(Q,de)=>{const ue=w(de);return{...ue,html:x$1(""),js:I$1(Q.js[0]||""),css:Q.css[0]||(Q.js[0]?Q.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:Q.isLegal,jsLib:[ue.react,ue.reactDOM,...ue.jsLib],jsx:!0,getScript:()=>{var pe,ve;const me=((ve=(pe=window.Babel)==null?void 0:pe.transform(Q.js[0]||"",{presets:["es2015","react"]}))==null?void 0:ve.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${O$1(me)}))`}}},v$1={},Y=Q=>Promise.all([m(v$1,Q.babel),m(v$1,Q.react),m(v$1,Q.reactDOM)]),K=Q=>{const de=[m(v$1,Q.vue)];return Q.useBabel&&de.push(m(v$1,Q.babel)),Promise.all(de)},U=Q=>Q.useBabel?m(v$1,Q.babel):Promise.resolve();var W=defineComponent({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(Q,{slots:de}){const[ue,pe]=useToggle(!1),ve=ref(),me=ref(),_e=ref("0"),he=ref(!1),ge=computed(()=>JSON.parse(Q.config?Te(Q.config):"{}")),fe=computed(()=>{const Ce=JSON.parse(Te(Q.code));return H$1(Ce)}),be=computed(()=>Q.type==="react"?G(fe.value,ge.value):Q.type==="vue"?F$1(fe.value,ge.value):q(fe.value,ge.value)),Pe=computed(()=>be.value.isLegal),we=(Ce=!1)=>{const Oe=ve.value.attachShadow({mode:"open"}),Re=document.createElement("div");Re.classList.add("code-demo-app"),Oe.appendChild(Re),Pe.value?(Ce&&(Re.innerHTML=be.value.html),k$1(Oe,be.value),V(Q.id,Oe,be.value),_e.value="0"):_e.value="auto",he.value=!0},De=()=>{switch(Q.type){case"react":return Y(be.value).then(()=>we());case"vue":return K(be.value).then(()=>we());default:return U(be.value).then(()=>we(!0))}};return onMounted(()=>{setTimeout(()=>{De()},800)}),()=>{var Ce;return h$2("div",{class:"code-demo-wrapper",id:Q.id},[h$2("div",{class:"code-demo-header"},[be.value.isLegal?h$2("button",{type:"button",title:"toggle","aria-hidden":!0,class:["toggle-button",ue.value?"down":"end"],onClick:()=>{_e.value=ue.value?"0":`${me.value.clientHeight+13.8}px`,pe()}}):null,Q.title?h$2("span",{class:"title"},decodeURIComponent(Q.title)):null,be.value.isLegal&&be.value.jsfiddle!==!1?h$2("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[h$2("input",{type:"hidden",name:"html",value:be.value.html}),h$2("input",{type:"hidden",name:"js",value:be.value.js}),h$2("input",{type:"hidden",name:"css",value:be.value.css}),h$2("input",{type:"hidden",name:"wrap",value:"1"}),h$2("input",{type:"hidden",name:"panel_js",value:"3"}),h$2("input",{type:"hidden",name:"resources",value:[...be.value.cssLib,...be.value.jsLib].join(",")}),h$2("button",{type:"submit",class:"jsfiddle-button",innerHTML:v$2,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!be.value.isLegal||be.value.codepen!==!1?h$2("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[h$2("input",{type:"hidden",name:"data",value:JSON.stringify({html:be.value.html,js:be.value.js,css:be.value.css,js_external:be.value.jsLib.join(";"),css_external:be.value.cssLib.join(";"),layout:be.value.codepenLayout,html_pre_processor:fe.value?fe.value.html[1]:"none",js_pre_processor:fe.value?fe.value.js[1]:be.value.jsx?"babel":"none",css_pre_processor:fe.value?fe.value.css[1]:"none",editors:be.value.codepenEditors})}),h$2("button",{type:"submit",innerHTML:o$1,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),he.value?null:h$2(I$2,{class:"code-demo-loading"}),h$2("div",{ref:ve,class:"code-demo-container",style:{display:Pe.value&&he.value?"block":"none"}}),h$2("div",{class:"code-demo-code-wrapper",style:{height:_e.value}},h$2("div",{ref:me,class:"code-demo-codes"},(Ce=de.default)==null?void 0:Ce.call(de)))])}}});const echarts="",parseEChartsConfig=(config,type)=>{if(type==="js"){const exports={},module={exports};return eval(config),module.exports}return JSON.parse(config)};var ECharts=defineComponent({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(Q){const de=ref();let ue;const pe=ref(!0);return useEventListener("resize",useDebounceFn(()=>ue==null?void 0:ue.resize(),100)),onMounted(()=>{Promise.all([__vitePreload(()=>import("./index-b03bef79.js"),[]),new Promise(ve=>setTimeout(ve,800))]).then(([ve])=>{const me=parseEChartsConfig(Te(Q.config),Q.type);ue=ve.init(de.value),ue.setOption(me),pe.value=!1})}),onUnmounted(()=>{ue==null||ue.dispose()}),()=>[Q.title?h$2("div",{class:"echarts-title"},decodeURIComponent(Q.title)):null,h$2("div",{class:"echarts-wrapper"},[h$2("div",{ref:de,class:"echarts-container",id:Q.id}),pe.value?h$2(I$2,{class:"echarts-loading",height:360}):null])]}});const figure="",flowchart="";var f={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},F={...f,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},b$1={...f,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"}}},y={...f,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}},s={ant:F,vue:y,pie:b$1},g=defineComponent({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(Q){let de=null;const ue=ref(),pe=ref(!0),ve=ref(1),me=computed(()=>s[Q.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${Q.preset}`),s.vue)),_e=he=>he<419?.8:he>1280?1:.9;return onMounted(()=>{Promise.all([__vitePreload(()=>import("./flowchart-35969cab.js"),[]),new Promise(he=>setTimeout(he,800))]).then(([{parse:he}])=>{de=he(Te(Q.code)),ve.value=_e(window.innerWidth),pe.value=!1,de.draw(Q.id,{...me.value,scale:ve.value})}),useEventListener("resize",useDebounceFn(()=>{if(de){const he=_e(window.innerWidth);ve.value!==he&&(ve.value=he,de.draw(Q.id,{...me.value,scale:he}))}},100))}),()=>[pe.value?h$2(I$2,{class:"flowchart-loading",height:192}):null,h$2("div",{ref:ue,class:["flowchart-wrapper",Q.preset],id:Q.id,style:{display:pe.value?"none":"block"}})]}});const footnote="",imageMark="",mermaid="",b=Q=>({dark:Q,background:Q?"#1e1e1e":"#fff",primaryColor:Q?"#389d70":"#4abf8a",primaryBorderColor:Q?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:Q?"#fff":"#000",secondaryTextColor:Q?"#ddd":"#333",tertiaryColor:Q?"#282828":"#efeef4",tertiaryBorderColor:Q?"#bbb":"#242424",tertiaryTextColor:Q?"#ddd":"#333",noteBkgColor:Q?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:Q?"#f6d365":"#333",lineColor:Q?"#d3d3d3":"#333",textColor:Q?"#fff":"#242424",mainBkg:Q?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:Q?"#389d70":"#4abf8a",nodeTextColor:Q?"#fff":"#242424",signalTextColor:Q?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:Q?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var T$1=defineComponent({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(Q){const de=ref(),ue=ref(""),pe=ref(!1),ve=computed(()=>Te(Q.code)),me=async()=>Promise.all([__vitePreload(()=>import("./mermaid.core-0b9fc772.js").then(_e=>_e.aK),[]),new Promise(_e=>setTimeout(_e,800))]).then(async([{default:_e}])=>{const he={useMaxWidth:!1};_e.initialize({theme:"base",themeVariables:b(pe.value),flowchart:he,sequence:he,journey:he,gantt:he,er:he,pie:he,startOnLoad:!1}),ue.value=(await _e.render(Q.id,ve.value)).svg});return onMounted(()=>{const _e=document.documentElement,he=()=>_e.classList.contains("dark")||_e.getAttribute("data-theme")==="dark";pe.value=he(),me(),useMutationObserver(_e,()=>{pe.value=he()},{attributeFilter:["class","data-theme"],attributes:!0}),watch(pe,()=>me())}),()=>h$2("div",{ref:de,class:"mermaid-wrapper"},ue.value?h$2("div",{class:"mermaid-content",innerHTML:ue.value}):h$2(I$2,{class:"mermaid-loading",height:96}))}});const o=()=>__vitePreload(()=>import("./highlight.esm-a794bb63.js"),[]),t=()=>__vitePreload(()=>import("./markdown.esm-d92a2fc9.js"),[]),e=()=>__vitePreload(()=>import("./math.esm-70a288c8.js"),[]),r=()=>__vitePreload(()=>import("./notes.esm-224f94d9.js"),[]),a=()=>__vitePreload(()=>import("./reveal.esm-e5069ce0.js"),[]),i$1=()=>__vitePreload(()=>import("./search.esm-2c3fba7d.js"),[]),c$1=()=>__vitePreload(()=>import("./zoom.esm-b83b91d0.js"),[]),useReveal=()=>[a(),t(),o(),e(),i$1(),r(),c$1()],index$1="",leagueGothic="",sourceSansPro="";var S$1=defineComponent({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(Q){const de=usePageFrontmatter(),ue=ref(""),pe=ref(!0),ve=ref();let me=null;const _e=async he=>{const ge=[new Promise(we=>setTimeout(we,800)),...useReveal()],[,fe,...be]=await Promise.all(ge),Pe=new fe.default(he,{plugins:be.map(({default:we})=>we)});return await Pe.initialize({backgroundTransition:"slide",hash:de.value.layout==="Slide",mouseWheel:de.value.layout==="Slide",transition:"slide",slideNumber:!0,...de.value.reveal||{},embedded:de.value.layout!=="Slide"}),Pe.configure({backgroundTransition:"slide"}),Pe};return onMounted(async()=>{const he=ve.value;he&&(ue.value=Te(Q.code),he.setAttribute("id",Q.id),he.setAttribute("data-theme",Q.theme),me=await _e(he),pe.value=!1)}),onUnmounted(()=>{me==null||me.destroy()}),()=>h$2("div",{class:"presentation-wrapper"},[h$2("div",{ref:ve,class:["reveal","reveal-viewport"]},h$2("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${ue.value}<\/script></section>`})),pe.value?h$2(I$2,{class:"reveal-loading",height:400}):null])}});const playground="";var i=defineComponent({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(Q){return()=>[h$2("div",{class:"playground-wrapper"},[h$2("div",{class:"title-wrapper"},[Q.title?h$2("div",{class:"title"},decodeURIComponent(Q.title)):null,h$2("div",{class:"actions"},[h$2("a",{class:"action",href:decodeURIComponent(Q.link),target:"_blank",innerHTML:l})])]),h$2("div",{class:"playground-container"},h$2("iframe",{src:decodeURIComponent(Q.link)}))])]}});const tabs="",v=useStorage("VUEPRESS_TAB_STORE",{});var S=defineComponent({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(Q,{slots:de}){const ue=ref(Q.active),pe=ref([]),ve=()=>{if(Q.tabId){const{title:fe,id:be=fe}=Q.data[ue.value];v.value[Q.tabId]=be}},me=(fe=ue.value)=>{ue.value=fe<pe.value.length-1?fe+1:0,pe.value[ue.value].focus()},_e=(fe=ue.value)=>{ue.value=fe>0?fe-1:pe.value.length-1,pe.value[ue.value].focus()},he=(fe,be)=>{fe.key===" "||fe.key==="Enter"?(fe.preventDefault(),ue.value=be):fe.key==="ArrowRight"?(fe.preventDefault(),me()):fe.key==="ArrowLeft"&&(fe.preventDefault(),_e()),ve()},ge=()=>{if(Q.tabId){const fe=Q.data.findIndex(({title:be,id:Pe=be})=>v.value[Q.tabId]===Pe);if(fe!==-1)return fe}return Q.active};return onMounted(()=>{ue.value=ge(),watch(()=>v.value[Q.tabId],(fe,be)=>{if(Q.tabId&&fe!==be){const Pe=Q.data.findIndex(({title:we,id:De=we})=>De===fe);Pe!==-1&&(ue.value=Pe)}})}),()=>Q.data.length?h$2("div",{class:"tab-list"},[h$2("div",{class:"tab-list-nav",role:"tablist"},Q.data.map(({title:fe},be)=>{const Pe=be===ue.value;return h$2("button",{type:"button",ref:we=>{we&&(pe.value[be]=we)},class:["tab-list-nav-item",{active:Pe}],role:"tab","aria-controls":`tab-${Q.id}-${be}`,"aria-selected":Pe,onClick:()=>{ue.value=be,ve()},onKeydown:we=>he(we,be)},fe)})),Q.data.map(({title:fe,id:be=fe},Pe)=>{var we;const De=Pe===ue.value;return h$2("div",{class:["tab-item",{active:De}],id:`tab-${Q.id}-${Pe}`,role:"tabpanel","aria-expanded":De},(we=de[`tab${Pe}`])==null?void 0:we.call(de,{title:fe,value:be,isActive:De}))})]):null}});const tasklist="",katex_min="",katex="",clientConfig8=defineClientConfig({enhance:({app:Q})=>{Q.component("ChartJS",ChartJS),Q.component("CodeTabs",S$2),Z("CodeGroup",Q)||Q.component("CodeGroup",h),Z("CodeGroupItem",Q)||Q.component("CodeGroupItem",c$2),Q.component("CodeDemo",W),Q.component("ECharts",ECharts),Q.component("FlowChart",g),Q.component("Mermaid",T$1),Q.component("Presentation",S$1),Q.component("Playground",i),Q.component("Tabs",S),Q.component("VuePlayground",defineAsyncComponent(()=>__vitePreload(()=>import("./VuePlayground-f9799afd.js"),["assets/VuePlayground-f9799afd.js","assets/framework-7d1f27fd.js"])))}}),photoswipe="",photoSwipe="",T=".theme-hope-content :not(a) > img:not([no-view])",C$1={"/en/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"},"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},O=800,x={},A=Q=>isString$1(Q)?Array.from(document.querySelectorAll(Q)):Q.map(de=>Array.from(document.querySelectorAll(de))).flat(),p=Q=>new Promise((de,ue)=>{Q.complete?de({src:Q.src,width:Q.naturalWidth,height:Q.naturalHeight,alt:Q.alt}):(Q.onload=()=>de(p(Q)),Q.onerror=pe=>ue(pe))}),H=()=>{const{isSupported:Q,toggle:de}=useFullscreen(),ue=le(C$1),pe=usePageData(),ve=()=>Promise.all([__vitePreload(()=>import("./photoswipe.esm-36cd6c3c.js"),[]),nextTick().then(()=>new Promise(me=>setTimeout(me,O)).then(()=>A(T)))]).then(([{default:me},_e])=>{const he='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';_e.forEach((ge,fe)=>{const be=()=>{const Pe=Array(_e.length).fill({html:he}),we=new me({dataSource:Pe,preloaderDelay:0,...ue.value,...x,index:fe});we.on("uiRegister",()=>{Q&&we.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{de()}}),we.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(De,Ce)=>{De.setAttribute("download",""),De.setAttribute("target","_blank"),De.setAttribute("rel","noopener"),Ce.on("change",()=>{De.href=Ce.currSlide.data.src})}})}),we.init(),_e.forEach((De,Ce)=>{p(De).then(Oe=>{Pe.splice(Ce,1,Oe),we.refreshSlideContent(Ce)})})};ge.style.cursor="zoom-in",ge.addEventListener("click",()=>{be()}),ge.addEventListener("keypress",({key:Pe})=>{Pe==="Enter"&&be()})})});onMounted(()=>{ve(),watch(()=>pe.value.path,()=>ve())})};var I=defineClientConfig({setup:()=>{H()}});const HopeIcon=Q=>{const{icon:de=""}=Q;return isLinkHttp(de)?h$2("img",{class:"icon",src:de,"no-view":""}):ze(de)?h$2("img",{class:"icon",src:withBase(de),"no-view":""}):h$2(resolveComponent("FontIcon"),Q)};HopeIcon.displayName="HopeIcon";const useAutoLink=(Q,de=!1)=>{const ue=useRouter(),{fullPath:pe,meta:ve,name:me}=j(ue,encodeURI(Q));return{text:!de&&ve.s?ve.s:ve.t||Q,link:me==="404"?Q:pe,...ve.i?{icon:ve.i}:{}}},useNavigate=()=>{const Q=useRouter(),de=useRoute();return ue=>{if(ue)if(ze(ue))de.path!==ue&&Q.push(ue);else if(isLinkHttp(ue)||isLinkMailto(ue))window&&window.open(ue);else{const pe=de.path.slice(0,de.path.lastIndexOf("/"));Q.push(`${pe}/${encodeURI(ue)}`)}}},useThemeData=()=>useThemeData$1(),useThemeLocaleData=()=>useThemeLocaleData$1(),usePure=()=>computed(()=>Boolean(useThemeData().value.pure)),usePageAuthor=()=>{const Q=useThemeLocaleData(),de=usePageFrontmatter();return computed(()=>{const{author:ue}=de.value;return ue?ke(ue):ue===!1?[]:ke(Q.value.author,!1)})},usePageCategory=()=>{const Q=usePageFrontmatter();return computed(()=>Se(Q.value.category).map(de=>{var ue,pe;return{name:de,path:((pe=(ue=inject(Symbol.for("categoryMap")))==null?void 0:ue.value.map[de])==null?void 0:pe.path)||""}}))},usePageTag=()=>{const Q=usePageFrontmatter();return computed(()=>xe(Q.value.tag).map(de=>{var ue,pe;return{name:de,path:((pe=(ue=inject(Symbol.for("tagMap")))==null?void 0:ue.value.map[de])==null?void 0:pe.path)||""}}))},usePageDate=()=>{const Q=usePageFrontmatter(),de=usePageData();return computed(()=>{const ue=ye(Q.value.date);if(ue)return ue;const{createdTime:pe}=de.value.git||{};return pe?new Date(pe):null})},usePageInfo=()=>{const Q=useThemeLocaleData(),de=usePageData(),ue=usePageFrontmatter(),pe=usePageAuthor(),ve=usePageCategory(),me=usePageTag(),_e=usePageDate(),he=computed(()=>({author:pe.value,category:ve.value,date:_e.value,localizedDate:de.value.localizedDate,tag:me.value,isOriginal:ue.value.isOriginal||!1,readingTime:de.value.readingTime||null,pageview:"pageview"in ue.value?ue.value.pageview:!0})),ge=computed(()=>"pageInfo"in ue.value?ue.value.pageInfo:"pageInfo"in Q.value?Q.value.pageInfo:null);return{info:he,items:ge}};let promise=null,promiseResolve=null;const scrollPromise={wait:()=>promise,pending:()=>{promise=new Promise(Q=>promiseResolve=Q)},resolve:()=>{promiseResolve==null||promiseResolve(),promise=null,promiseResolve=null}},useScrollPromise=()=>scrollPromise,useWindowSize=()=>{const Q=useThemeData(),de=ref(!1),ue=ref(!1),pe=()=>{de.value=window.innerWidth<=(Q.value.mobileBreakPoint||719),ue.value=window.innerWidth>=(Q.value.pcBreakPoint||1440)};return onMounted(()=>{pe(),useEventListener("resize",pe,!1),useEventListener("orientationchange",pe,!1)}),{isMobile:de,isPC:ue}},darkModeSymbol=Symbol(""),useDarkmode=()=>{const Q=inject(darkModeSymbol);if(!Q)throw new Error("useDarkmode() is called without provider.");return Q},injectDarkmode=Q=>{const de=useThemeData(),ue=usePreferredDark(),pe=useStorage("vuepress-theme-hope-scheme","auto"),ve=computed(()=>de.value.darkmode||"switch"),me=computed(()=>{const he=ve.value;return he==="disable"?!1:he==="enable"?!0:he==="auto"?ue.value:he==="toggle"?pe.value==="dark":pe.value==="dark"||pe.value==="auto"&&ue.value}),_e=computed(()=>{const he=ve.value;return he==="switch"||he==="toggle"});Q.provide(darkModeSymbol,{canToggle:_e,config:ve,isDarkmode:me,status:pe}),Object.defineProperties(Q.config.globalProperties,{$isDarkmode:{get:()=>me.value}})},setupDarkmode=()=>{const{isDarkmode:Q}=useDarkmode(),de=(ue=Q.value)=>document.documentElement.setAttribute("data-theme",ue?"dark":"light");onMounted(()=>{watch(Q,de,{immediate:!0})})},AutoLink=defineComponent({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],setup(Q,{attrs:de,emit:ue,slots:pe}){const ve=useRoute(),me=useSiteData(),_e=toRef(Q,"config"),he=computed(()=>isLinkHttp(_e.value.link)),ge=computed(()=>isLinkMailto(_e.value.link)||isLinkTel(_e.value.link)),fe=computed(()=>ge.value?void 0:_e.value.target||(he.value?"_blank":void 0)),be=computed(()=>fe.value==="_blank"),Pe=computed(()=>!he.value&&!ge.value&&!be.value),we=computed(()=>ge.value?void 0:_e.value.rel||(be.value?"noopener noreferrer":void 0)),De=computed(()=>_e.value.ariaLabel||_e.value.text),Ce=computed(()=>{if(Q.exact)return!1;const Re=h$1(me.value.locales);return Re.length?Re.every(Ve=>Ve!==_e.value.link):_e.value.link!=="/"}),Oe=computed(()=>Pe.value?_e.value.activeMatch?new RegExp(_e.value.activeMatch).test(ve.path):Ce.value?A$1(ve.path,_e.value.link):ve.path===_e.value.link:!1);return()=>{var Fe,Ge,We;const{text:Re,icon:Ve,link:He}=_e.value;return Pe.value?h$2(RouterLink,{to:He,"aria-label":De.value,...de,class:["nav-link",{active:Oe.value},de.class],onFocusout:()=>ue("focusout")},()=>{var je,Me,Be;return((je=pe.default)==null?void 0:je.call(pe))||[((Me=pe.before)==null?void 0:Me.call(pe))||h$2(HopeIcon,{icon:Ve}),Re,(Be=pe.after)==null?void 0:Be.call(pe)]}):h$2("a",{href:He,rel:we.value,target:fe.value,"aria-label":De.value,...de,class:["nav-link",de.class],onFocusout:()=>ue("focusout")},((Fe=pe.default)==null?void 0:Fe.call(pe))||[((Ge=pe.before)==null?void 0:Ge.call(pe))||h$2(HopeIcon,{icon:Ve}),Re,Q.noExternalLinkIcon?null:h$2(ExternalLinkIcon),(We=pe.after)==null?void 0:We.call(pe)])}}}),isActiveSidebarItem=(Q,de,ue=!1)=>"activeMatch"in de?new RegExp(de.activeMatch).test(Q.path):Le(Q,de.link)?!0:de.children&&!ue?de.children.some(pe=>isActiveSidebarItem(Q,pe)):!1,isMatchedSidebarItem=(Q,de)=>de.type==="group"?de.children.some(ue=>ue.type==="group"?isMatchedSidebarItem(Q,ue):ue.type==="page"&&isActiveSidebarItem(Q,ue,!0))||"prefix"in de&&Le(Q,de.prefix):!1,renderItem=(Q,de)=>isString$1(Q.link)?h$2(AutoLink,{...de,config:Q}):h$2("p",de,[h$2(HopeIcon,{icon:Q.icon}),Q.text]),renderChildren$1=Q=>{const de=useRoute();return Q?h$2("ul",{class:"sidebar-sub-headers"},Q.map(ue=>{const pe=isActiveSidebarItem(de,ue,!0);return h$2("li",{class:"sidebar-sub-header"},[renderItem(ue,{class:["sidebar-link","heading",{active:pe}]}),renderChildren$1(ue.children)])})):null},sidebarData={"/en/":[],"/zh/demo/":[],"/zh/posts/":[]},resolvePrefix=(Q="",de="")=>ze(de)?de:`${ensureEndingSlash(Q)}${de}`,headerToSidebarItem=(Q,de)=>{const ue=usePageData();return{type:"heading",text:Q.title,link:`${ue.value.path}#${Q.slug}`,children:headersToSidebarItemChildren(Q.children,de)}},headersToSidebarItemChildren=(Q,de)=>de>0?Q.map(ue=>headerToSidebarItem(ue,de-1)):[],resolveHeadingSidebarItems=Q=>{const de=usePageData();return headersToSidebarItemChildren(de.value.headers,Q)},resolveArraySidebarItems=(Q,de,ue="")=>{const pe=usePageData(),ve=(me,_e=ue)=>{var ge;const he=isString$1(me)?useAutoLink(resolvePrefix(_e,me)):me.link?{...me,...isLinkExternal(me.link)?{}:{link:useAutoLink(resolvePrefix(_e,me.link)).link}}:me;if("children"in he){const fe=resolvePrefix(_e,he.prefix),be=he.children==="structure"?sidebarData[fe]:he.children;return{type:"group",...he,prefix:fe,children:be.map(Pe=>ve(Pe,fe))}}return{type:"page",...he,children:he.link===pe.value.path?headersToSidebarItemChildren(((ge=pe.value.headers[0])==null?void 0:ge.level)===1?pe.value.headers[0].children:pe.value.headers,de):[]}};return Q.map(me=>ve(me))},resolveMultiSidebarItems=(Q,de)=>{const ue=usePageData(),pe=h$1(Q).sort((ve,me)=>me.length-ve.length);for(const ve of pe)if(A$1(decodeURI(ue.value.path),ve)){const me=Q[ve];return me?resolveArraySidebarItems(me==="structure"?sidebarData[ve]:me==="heading"?resolveHeadingSidebarItems(de):me,de,ve):[]}return console.warn(`${ue.value.path} is missing sidebar config.`),[]},resolveSidebarItems=()=>{const Q=useRouteLocale(),de=usePageFrontmatter(),ue=useThemeLocaleData(),pe=de.value.home?!1:de.value.sidebar??ue.value.sidebar??"structure",ve=de.value.headerDepth??ue.value.headerDepth??2;return pe===!1?[]:pe==="heading"?resolveHeadingSidebarItems(ve):pe==="structure"?resolveArraySidebarItems(sidebarData[Q.value],ve,Q.value):isArray(pe)?resolveArraySidebarItems(pe,ve):isPlainObject(pe)?resolveMultiSidebarItems(pe,ve):[]},sidebarItemsSymbol=Symbol(""),setupSidebarItems=()=>{const Q=computed(()=>resolveSidebarItems());provide(sidebarItemsSymbol,Q)},useSidebarItems=()=>{const Q=inject(sidebarItemsSymbol);if(!Q)throw new Error("useSidebarItems() is called without provider.");return Q},footer="",PageFooter=defineComponent({name:"PageFooter",setup(){const Q=usePageFrontmatter(),de=useThemeLocaleData(),ue=usePageAuthor(),pe=computed(()=>{const{copyright:_e,footer:he}=Q.value;return he!==!1&&Boolean(_e||he||de.value.displayFooter)}),ve=computed(()=>{const{footer:_e}=Q.value;return _e===!1?!1:isString$1(_e)?_e:de.value.footer||""}),me=computed(()=>"copyright"in Q.value?Q.value.copyright:"copyright"in de.value?de.value.copyright:ue.value.length?`Copyright © ${new Date().getFullYear()} ${ue.value[0].name}`:!1);return()=>pe.value?h$2("footer",{class:"footer-wrapper"},[ve.value?h$2("div",{class:"footer",innerHTML:ve.value}):null,me.value?h$2("div",{class:"copyright",innerHTML:me.value}):null]):null}}),dropdownLink="",DropdownLink=defineComponent({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(Q,{slots:de}){const ue=usePageData(),pe=toRef(Q,"config"),ve=computed(()=>pe.value.ariaLabel||pe.value.text),me=ref(!1);watch(()=>ue.value.path,()=>{me.value=!1});const _e=he=>{he.detail===0&&(me.value=!me.value)};return()=>{var he;return h$2("div",{class:["dropdown-wrapper",{open:me.value}]},[h$2("button",{type:"button",class:"dropdown-title","aria-label":ve.value,onClick:_e},[((he=de.title)==null?void 0:he.call(de))||h$2("span",{class:"title"},[h$2(HopeIcon,{icon:pe.value.icon}),Q.config.text]),h$2("span",{class:"arrow"}),h$2("ul",{class:"nav-dropdown"},pe.value.children.map((ge,fe)=>{const be=fe===pe.value.children.length-1;return h$2("li",{class:"dropdown-item"},"children"in ge?[h$2("h4",{class:"dropdown-subtitle"},ge.link?h$2(AutoLink,{config:ge,onFocusout:()=>{ge.children.length===0&&be&&(me.value=!1)}}):h$2("span",ge.text)),h$2("ul",{class:"dropdown-subitem-wrapper"},ge.children.map((Pe,we)=>h$2("li",{class:"dropdown-subitem"},h$2(AutoLink,{config:Pe,onFocusout:()=>{we===ge.children.length-1&&be&&(me.value=!1)}}))))]:h$2(AutoLink,{config:ge,onFocusout:()=>{be&&(me.value=!1)}}))}))])])}}}),I18nIcon=()=>h$2(c$3,{name:"i18n"},()=>[h$2("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);I18nIcon.displayName="I18nIcon";const resolveNavbarItem=(Q,de="")=>isString$1(Q)?useAutoLink(`${de}${Q}`):"children"in Q?{...Q,...Q.link&&!isLinkExternal(Q.link)?useAutoLink(`${de}${Q.link}`):{},children:Q.children.map(ue=>resolveNavbarItem(ue,`${de}${Q.prefix||""}`))}:{...Q,link:isLinkExternal(Q.link)?Q.link:useAutoLink(`${de}${Q.link}`).link},useNavbarConfig=()=>computed(()=>(useThemeLocaleData().value.navbar||[]).map(Q=>resolveNavbarItem(Q))),useNavbarLanguageDropdown=()=>{const Q=useRouter(),de=useRoute(),ue=useRouteLocale(),pe=useSiteLocaleData(),ve=useThemeData(),me=useThemeLocaleData();return computed(()=>{const _e=h$1(pe.value.locales);if(_e.length<2)return null;const{path:he,fullPath:ge}=Q.currentRoute.value,{navbarLocales:fe}=me.value;return{text:"",ariaLabel:fe==null?void 0:fe.selectLangAriaLabel,children:[..._e.map(Pe=>{var Ve,He,Fe;const we=((Ve=pe.value.locales)==null?void 0:Ve[Pe])??{},De=((He=ve.value.locales)==null?void 0:He[Pe])??{},Ce=we.lang||"",Oe=((Fe=De.navbarLocales)==null?void 0:Fe.langName)??Ce;let Re;if(Ce===pe.value.lang)Re=he;else{const Ge=he.replace(ue.value,Pe);Re=Q.getRoutes().some(We=>We.path===Ge)?ge.replace(he,Ge):De.home??Pe}return{text:Oe,link:Re}}),...$$1(ve.value.extraLocales||{}).map(([Pe,we])=>({text:Pe,link:we.replace(":route",de.path.replace(ue.value,""))}))]}})},useNavbarRepo=()=>{const Q=useThemeLocaleData(),de=computed(()=>Q.value.repo||null),ue=computed(()=>de.value?Ae(de.value):null),pe=computed(()=>de.value?$e(de.value):null),ve=computed(()=>ue.value?Q.value.repoLabel??(pe.value===null?"Source":pe.value):null);return computed(()=>!ue.value||!ve.value||Q.value.repoDisplay===!1?null:{type:pe.value||"Source",label:ve.value,link:ue.value})},LanguageDropdown=defineComponent({name:"LanguageDropdown",setup(){const Q=useNavbarLanguageDropdown();return()=>Q.value?h$2("div",{class:"nav-item"},h$2(DropdownLink,{class:"i18n-dropdown",config:Q.value},{title:()=>{var de;return h$2(I18nIcon,{"aria-label":(de=Q.value)==null?void 0:de.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),navScreenDropdown="",NavScreenDropdown=defineComponent({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(Q){const de=usePageData(),ue=toRef(Q,"config"),pe=computed(()=>ue.value.ariaLabel||ue.value.text),ve=ref(!1);watch(()=>de.value.path,()=>{ve.value=!1});const me=(_e,he)=>he[he.length-1]===_e;return()=>[h$2("button",{type:"button",class:["nav-screen-dropdown-title",{active:ve.value}],"aria-label":pe.value,onClick:()=>{ve.value=!ve.value}},[h$2("span",{class:"title"},[h$2(HopeIcon,{icon:ue.value.icon}),Q.config.text]),h$2("span",{class:["arrow",ve.value?"down":"end"]})]),h$2("ul",{class:["nav-screen-dropdown",{hide:!ve.value}]},ue.value.children.map(_e=>h$2("li",{class:"dropdown-item"},"children"in _e?[h$2("h4",{class:"dropdown-subtitle"},_e.link?h$2(AutoLink,{config:_e,onFocusout:()=>{me(_e,ue.value.children)&&_e.children.length===0&&(ve.value=!1)}}):h$2("span",_e.text)),h$2("ul",{class:"dropdown-subitem-wrapper"},_e.children.map(he=>h$2("li",{class:"dropdown-subitem"},h$2(AutoLink,{config:he,onFocusout:()=>{me(he,_e.children)&&me(_e,ue.value.children)&&(ve.value=!1)}}))))]:h$2(AutoLink,{config:_e,onFocusout:()=>{me(_e,ue.value.children)&&(ve.value=!1)}}))))]}}),navScreenLinks="",NavScreenLinks=defineComponent({name:"NavScreenLinks",setup(){const Q=useNavbarConfig();return()=>Q.value.length?h$2("nav",{class:"nav-screen-links"},Q.value.map(de=>h$2("div",{class:"navbar-links-item"},"children"in de?h$2(NavScreenDropdown,{config:de}):h$2(AutoLink,{config:de})))):null}}),DarkIcon=()=>h$2(c$3,{name:"dark"},()=>h$2("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));DarkIcon.displayName="DarkIcon";const LightIcon=()=>h$2(c$3,{name:"light"},()=>h$2("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));LightIcon.displayName="LightIcon";const AutoIcon=()=>h$2(c$3,{name:"auto"},()=>h$2("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));AutoIcon.displayName="AutoIcon";const EnterFullScreenIcon=()=>h$2(c$3,{name:"enter-fullscreen"},()=>h$2("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));EnterFullScreenIcon.displayName="EnterFullScreenIcon";const CancelFullScreenIcon=()=>h$2(c$3,{name:"cancel-fullscreen"},()=>h$2("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));CancelFullScreenIcon.displayName="CancelFullScreenIcon";const OutlookIcon=()=>h$2(c$3,{name:"outlook"},()=>[h$2("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);OutlookIcon.displayName="OutlookIcon";const appearanceSwitch="",AppearanceSwitch=defineComponent({name:"AppearanceSwitch",setup(){const{config:Q,status:de}=useDarkmode(),ue=()=>{Q.value==="switch"?de.value={light:"dark",dark:"auto",auto:"light"}[de.value]:de.value=de.value==="light"?"dark":"light"};return()=>h$2("button",{type:"button",id:"appearance-switch",onClick:()=>ue()},[h$2(AutoIcon,{style:{display:de.value==="auto"?"block":"none"}}),h$2(DarkIcon,{style:{display:de.value==="dark"?"block":"none"}}),h$2(LightIcon,{style:{display:de.value==="light"?"block":"none"}})])}}),AppearanceMode=defineComponent({name:"AppearanceMode",setup(){const Q=useThemeLocaleData(),{canToggle:de}=useDarkmode(),ue=computed(()=>Q.value.outlookLocales.darkmode);return()=>de.value?h$2("div",{class:"appearance-wrapper"},[h$2("label",{class:"appearance-title",for:"appearance-switch"},ue.value),h$2(AppearanceSwitch)]):null}}),themeColorPicker="",ThemeColorPicker=defineComponent({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(Q){const de=(ue="")=>{const pe=document.documentElement.classList,ve=h$1(Q.themeColor).map(me=>`theme-${me}`);if(!ue){localStorage.removeItem("theme"),pe.remove(...ve);return}pe.remove(...ve.filter(me=>me!==`theme-${ue}`)),pe.add(`theme-${ue}`),localStorage.setItem("theme",ue)};return onMounted(()=>{const ue=localStorage.getItem("theme");ue&&de(ue)}),()=>h$2("ul",{id:"theme-color-picker"},[h$2("li",h$2("span",{class:"theme-color",onClick:()=>de()})),...$$1(Q.themeColor).map(([ue,pe])=>h$2("li",h$2("span",{style:{background:pe},onClick:()=>de(ue)})))])}}),ThemeColor=defineComponent({name:"ThemeColor",setup(){const Q=useThemeData(),de=useThemeLocaleData(),ue=computed(()=>de.value.outlookLocales.themeColor),pe=computed(()=>{const{themeColor:ve}=Q.value;return ve===!1?null:ve});return()=>pe.value?h$2("div",{class:"theme-color-wrapper"},[h$2("label",{class:"theme-color-title",for:"theme-color-picker"},ue.value),h$2(ThemeColorPicker,{themeColor:pe.value})]):null}}),toggleFullScreenButton="",ToggleFullScreenButton=defineComponent({name:"ToggleFullScreenButton",setup(){const Q=useThemeLocaleData(),{isSupported:de,isFullscreen:ue,toggle:pe}=useFullscreen(),ve=computed(()=>Q.value.outlookLocales.fullscreen);return()=>de?h$2("div",{class:"full-screen-wrapper"},[h$2("label",{class:"full-screen-title",for:"full-screen-switch"},ve.value),h$2("button",{type:"button",class:"full-screen",id:"full-screen-switch",ariaPressed:ue.value,onClick:()=>pe()},ue.value?h$2(CancelFullScreenIcon):h$2(EnterFullScreenIcon))]):null}}),OutlookSettings=defineComponent({name:"OutlookSettings",setup(){const Q=useThemeData(),de=usePure(),ue=computed(()=>!de.value&&Boolean(Q.value.themeColor)),pe=computed(()=>!de.value&&Q.value.fullscreen);return()=>h$2(ClientOnly,()=>[ue.value?h$2(ThemeColor):null,h$2(AppearanceMode),pe.value?h$2(ToggleFullScreenButton):null])}}),navScreen="",NavScreen=defineComponent({name:"NavScreen",props:{show:Boolean},emits:["close"],setup(Q,{emit:de,slots:ue}){const pe=usePageData(),{isMobile:ve}=useWindowSize(),me=ref(),_e=useScrollLock(me);return onMounted(()=>{me.value=document.body,watch(ve,he=>{!he&&Q.show&&(_e.value=!1,de("close"))}),watch(()=>pe.value.path,()=>{_e.value=!1,de("close")})}),onUnmounted(()=>{_e.value=!1}),()=>h$2(Transition,{name:"fade",onEnter:()=>{_e.value=!0},onAfterLeave:()=>{_e.value=!1}},()=>{var he,ge;return Q.show?h$2("div",{id:"nav-screen"},h$2("div",{class:"container"},[(he=ue.before)==null?void 0:he.call(ue),h$2(NavScreenLinks),h$2("div",{class:"outlook-wrapper"},h$2(OutlookSettings)),(ge=ue.after)==null?void 0:ge.call(ue)])):null})}}),navbarBrand="",NavbarBrand=defineComponent({name:"NavbarBrand",setup(){const Q=useRouteLocale(),de=useSiteLocaleData(),ue=useThemeLocaleData(),pe=computed(()=>ue.value.home||Q.value),ve=computed(()=>de.value.title),me=computed(()=>ue.value.logo?withBase(ue.value.logo):null),_e=computed(()=>ue.value.logoDark?withBase(ue.value.logoDark):null);return()=>h$2(RouterLink,{to:pe.value,class:"brand"},()=>[me.value?h$2("img",{class:["logo",{light:Boolean(_e.value)}],src:me.value,alt:ve.value}):null,_e.value?h$2("img",{class:["logo dark"],src:_e.value,alt:ve.value}):null,ve.value?h$2("span",{class:["site-name",{"hide-in-pad":me.value&&ue.value.hideSiteNameOnMobile!==!1}]},ve.value):null])}}),navbarLinks="",NavbarLinks=defineComponent({name:"NavbarLinks",setup(){const Q=useNavbarConfig();return()=>Q.value.length?h$2("nav",{class:"nav-links"},[...Q.value.map(de=>h$2("div",{class:"nav-item hide-in-mobile"},"children"in de?h$2(DropdownLink,{config:de}):h$2(AutoLink,{config:de})))]):null}}),repoLink="",RepoLink=defineComponent({name:"RepoLink",components:{BitbucketIcon:S$4,GiteeIcon:k$2,GitHubIcon:O$2,GitLabIcon:_$1,SourceIcon:x$2},setup(){const Q=useNavbarRepo();return()=>Q.value?h$2("div",{class:"nav-item"},h$2("a",{class:"repo-link",href:Q.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":Q.value.label},h$2(resolveComponent(`${Q.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}}),toggleNavbarButton="",ToggleNavbarButton=({active:Q=!1},{emit:de})=>h$2("button",{type:"button",class:["toggle-navbar-button",{"is-active":Q}],"aria-label":"Toggle Navbar","aria-expanded":Q,"aria-controls":"nav-screen",onClick:()=>de("toggle")},h$2("span",{class:"button-container"},[h$2("span",{class:"button-top"}),h$2("span",{class:"button-middle"}),h$2("span",{class:"button-bottom"})]));ToggleNavbarButton.displayName="ToggleNavbarButton";const toggleSidebarButton="",ToggleSidebarButton=(Q,{emit:de})=>h$2("button",{type:"button",class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>de("toggle")},h$2("span",{class:"icon"}));ToggleSidebarButton.displayName="ToggleSidebarButton";ToggleSidebarButton.emits=["toggle"];const outlookButton="",OutlookButton=defineComponent({name:"OutlookButton",setup(){const{isSupported:Q}=useFullscreen(),de=useThemeData(),ue=usePure(),pe=usePageData(),{canToggle:ve}=useDarkmode(),me=ref(!1),_e=computed(()=>!ue.value&&Boolean(de.value.themeColor)),he=computed(()=>!ue.value&&de.value.fullscreen&&Q);return watch(()=>pe.value.path,()=>{me.value=!1}),()=>ve.value||he.value||_e.value?h$2("div",{class:"nav-item hide-in-mobile"},ve.value&&!he.value&&!_e.value?h$2(AppearanceSwitch):he.value&&!ve.value&&!_e.value?h$2(ToggleFullScreenButton):h$2("button",{type:"button",class:["outlook-button",{open:me.value}],tabindex:"-1","aria-hidden":!0},[h$2(OutlookIcon),h$2("div",{class:"outlook-dropdown"},h$2(OutlookSettings))])):null}}),navbar="",Navbar=defineComponent({name:"NavBar",emits:["toggleSidebar"],setup(Q,{emit:de,slots:ue}){const pe=useThemeLocaleData(),{isMobile:ve}=useWindowSize(),me=ref(!1),_e=computed(()=>{const{navbarAutoHide:ge="mobile"}=pe.value;return ge!=="none"&&(ge==="always"||ve.value)}),he=computed(()=>pe.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]});return()=>{var fe,be,Pe,we,De,Ce;const ge={Brand:h$2(NavbarBrand),Language:h$2(LanguageDropdown),Links:h$2(NavbarLinks),Repo:h$2(RepoLink),Outlook:h$2(OutlookButton),Search:Z("Docsearch")?h$2(resolveComponent("Docsearch")):Z("SearchBox")?h$2(resolveComponent("SearchBox")):Z("SearchBox")?h$2(resolveComponent("SearchBox")):null};return[h$2("header",{class:["navbar",{"auto-hide":_e.value,"hide-icon":pe.value.navbarIcon===!1}],id:"navbar"},[h$2("div",{class:"navbar-start"},[h$2(ToggleSidebarButton,{onToggle:()=>{me.value&&(me.value=!1),de("toggleSidebar")}}),(fe=ue.startBefore)==null?void 0:fe.call(ue),...(he.value.start||[]).map(Oe=>ge[Oe]),(be=ue.startAfter)==null?void 0:be.call(ue)]),h$2("div",{class:"navbar-center"},[(Pe=ue.centerBefore)==null?void 0:Pe.call(ue),...(he.value.center||[]).map(Oe=>ge[Oe]),(we=ue.centerAfter)==null?void 0:we.call(ue)]),h$2("div",{class:"navbar-end"},[(De=ue.endBefore)==null?void 0:De.call(ue),...(he.value.end||[]).map(Oe=>ge[Oe]),(Ce=ue.endAfter)==null?void 0:Ce.call(ue),h$2(ToggleNavbarButton,{active:me.value,onToggle:()=>{me.value=!me.value}})])]),h$2(NavScreen,{show:me.value,onClose:()=>{me.value=!1}},{before:()=>{var Oe;return(Oe=ue.screenTop)==null?void 0:Oe.call(ue)},after:()=>{var Oe;return(Oe=ue.screenBottom)==null?void 0:Oe.call(ue)}})]}}}),sidebarChild="",SidebarChild=defineComponent({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(Q){const de=useRoute();return()=>[renderItem(Q.config,{class:["sidebar-link",`sidebar-${Q.config.type}`,{active:isActiveSidebarItem(de,Q.config,!0)}],exact:!0}),renderChildren$1(Q.config.children)]}}),sidebarGroup="",SidebarGroup=defineComponent({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(Q,{emit:de}){const ue=useRoute(),pe=computed(()=>isActiveSidebarItem(ue,Q.config)),ve=computed(()=>isActiveSidebarItem(ue,Q.config,!0));return()=>{const{collapsible:me,children:_e=[],icon:he,prefix:ge,link:fe,text:be}=Q.config;return h$2("section",{class:"sidebar-group"},[h$2(me?"button":"p",{class:["sidebar-heading",{clickable:me||fe,exact:ve.value,active:pe.value}],...me?{type:"button",onClick:()=>de("toggle"),onKeydown:Pe=>{Pe.key==="Enter"&&de("toggle")}}:{}},[h$2(HopeIcon,{icon:he}),fe?h$2(RouterLink,{to:fe,class:"title"},()=>be):h$2("span",{class:"title"},be),me?h$2("span",{class:["arrow",Q.open?"down":"end"]}):null]),Q.open||!me?h$2(SidebarLinks,{key:ge,config:_e}):null])}}}),sidebarLinks="",SidebarLinks=defineComponent({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(Q){const de=useRoute(),ue=ref(-1),pe=ve=>{ue.value=ve===ue.value?-1:ve};return watch(()=>de.path,()=>{const ve=Q.config.findIndex(me=>isMatchedSidebarItem(de,me));ue.value=ve},{immediate:!0,flush:"post"}),()=>h$2("ul",{class:"sidebar-links"},Q.config.map((ve,me)=>h$2("li",ve.type==="group"?h$2(SidebarGroup,{config:ve,open:me===ue.value,onToggle:()=>pe(me)}):h$2(SidebarChild,{config:ve}))))}}),sidebar="",Sidebar=defineComponent({name:"SideBar",setup(Q,{slots:de}){const ue=useRoute(),pe=useThemeLocaleData(),ve=useSidebarItems(),me=ref();return onMounted(()=>{watch(()=>ue.hash,_e=>{const he=document.querySelector(`.sidebar a.sidebar-link[href="${ue.path}${_e}"]`);if(!he)return;const{top:ge,height:fe}=me.value.getBoundingClientRect(),{top:be,height:Pe}=he.getBoundingClientRect();be<ge?he.scrollIntoView(!0):be+Pe>ge+fe&&he.scrollIntoView(!1)})}),()=>{var _e,he,ge;return h$2("aside",{class:["sidebar",{"hide-icon":pe.value.sidebarIcon===!1}],id:"sidebar",ref:me},[(_e=de.top)==null?void 0:_e.call(de),((he=de.default)==null?void 0:he.call(de))||h$2(SidebarLinks,{config:ve.value}),(ge=de.bottom)==null?void 0:ge.call(de)])}}}),common="",CommonWrapper=defineComponent({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup(Q,{slots:de}){const ue=useRouter(),pe=usePageData(),ve=usePageFrontmatter(),me=useThemeLocaleData(),{isMobile:_e,isPC:he}=useWindowSize(),[ge,fe]=useToggle(!1),[be,Pe]=useToggle(!1),we=useSidebarItems(),De=ref(!1),Ce=computed(()=>Q.noNavbar||ve.value.navbar===!1||me.value.navbar===!1?!1:Boolean(pe.value.title||me.value.logo||me.value.repo||me.value.navbar)),Oe=computed(()=>Q.noSidebar?!1:ve.value.sidebar!==!1&&we.value.length!==0&&!ve.value.home),Re={x:0,y:0},Ve=je=>{Re.x=je.changedTouches[0].clientX,Re.y=je.changedTouches[0].clientY},He=je=>{const Me=je.changedTouches[0].clientX-Re.x,Be=je.changedTouches[0].clientY-Re.y;Math.abs(Me)>Math.abs(Be)*1.5&&Math.abs(Me)>40&&(Me>0&&Re.x<=80?fe(!0):fe(!1))},Fe=computed(()=>ve.value.home?!1:ve.value.toc||me.value.toc!==!1&&ve.value.toc!==!1),Ge=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let We=0;return useEventListener("scroll",useThrottleFn(()=>{const je=Ge();je<=58||je<We?De.value=!1:We+200<je&&!ge.value&&(De.value=!0),We=je},300,!0)),watch(_e,je=>{je||fe(!1)}),onMounted(()=>{const je=useScrollLock(document.body);watch(ge,Be=>{je.value=Be});const Me=ue.afterEach(()=>{fe(!1)});onUnmounted(()=>{je.value=!1,Me()})}),()=>h$2(Z("GlobalEncrypt")?resolveComponent("GlobalEncrypt"):J$1,()=>{var je;return h$2("div",{class:["theme-container",{"no-navbar":!Ce.value,"no-sidebar":!Oe.value&&!(de.sidebar||de.sidebarTop||de.sidebarBottom),"has-toc":Fe.value,"hide-navbar":De.value,"sidebar-collapsed":!_e.value&&!he.value&&be.value,"sidebar-open":_e.value&&ge.value},ve.value.containerClass||""],onTouchStart:Ve,onTouchEnd:He},[Ce.value?h$2(Navbar,{onToggleSidebar:()=>fe()},{startBefore:()=>{var Me;return(Me=de.navbarStartBefore)==null?void 0:Me.call(de)},startAfter:()=>{var Me;return(Me=de.navbarStartAfter)==null?void 0:Me.call(de)},centerBefore:()=>{var Me;return(Me=de.navbarCenterBefore)==null?void 0:Me.call(de)},centerAfter:()=>{var Me;return(Me=de.navbarCenterAfter)==null?void 0:Me.call(de)},endBefore:()=>{var Me;return(Me=de.navbarEndBefore)==null?void 0:Me.call(de)},endAfter:()=>{var Me;return(Me=de.navbarEndAfter)==null?void 0:Me.call(de)},screenTop:()=>{var Me;return(Me=de.navScreenTop)==null?void 0:Me.call(de)},screenBottom:()=>{var Me;return(Me=de.navScreenBottom)==null?void 0:Me.call(de)}}):null,h$2(Transition,{name:"fade"},()=>ge.value?h$2("div",{class:"sidebar-mask",onClick:()=>fe(!1)}):null),h$2(Transition,{name:"fade"},()=>_e.value?null:h$2("div",{class:"toggle-sidebar-wrapper",onClick:()=>Pe()},h$2("span",{class:["arrow",be.value?"end":"start"]}))),h$2(Sidebar,{},{...de.sidebar?{default:()=>{var Me;return(Me=de.sidebar)==null?void 0:Me.call(de)}}:{},top:()=>{var Me;return(Me=de.sidebarTop)==null?void 0:Me.call(de)},bottom:()=>{var Me;return(Me=de.sidebarBottom)==null?void 0:Me.call(de)}}),(je=de.default)==null?void 0:je.call(de),h$2(PageFooter)])})}}),featurePanel="",FeaturePanel=defineComponent({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup(Q){return()=>h$2("div",{class:"feature-panel"},[Q.header?h$2("h2",{class:"feature-header"},Q.header):null,Q.items.length?h$2("div",{class:"feature-wrapper"},Q.items.map(de=>{const ue=[h$2("h3",[h$2(HopeIcon,{icon:de.icon}),h$2("span",{innerHTML:de.title})]),h$2("p",{innerHTML:de.details})];return de.link?isLinkExternal(de.link)?h$2("a",{class:"feature-item link",href:de.link,role:"navigation","aria-label":de.title,target:"_blank"},ue):h$2(RouterLink,{class:"feature-item link",to:de.link,role:"navigation","aria-label":de.title},()=>ue):h$2("div",{class:"feature-item"},ue)})):null])}}),DropTransition=defineComponent({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(Q,{slots:de}){const ue=ve=>{ve.style.transition=`transform ${Q.duration}s ease-in-out ${Q.delay}s, opacity ${Q.duration}s ease-in-out ${Q.delay}s`,ve.style.transform="translateY(-20px)",ve.style.opacity="0"},pe=ve=>{ve.style.transform="translateY(0)",ve.style.opacity="1"};return()=>h$2(Q.type==="single"?Transition:TransitionGroup,{name:"drop",appear:Q.appear,onAppear:ue,onAfterAppear:pe,onEnter:ue,onAfterEnter:pe,onBeforeLeave:ue},()=>{var ve;return(ve=de.default)==null?void 0:ve.call(de)})}}),heroInfo="",HeroInfo=defineComponent({name:"HeroInfo",setup(Q,{slots:de}){const ue=usePageFrontmatter(),pe=useSiteLocaleData(),ve=computed(()=>ue.value.heroText===!1?!1:ue.value.heroText||pe.value.title||"Hello"),me=computed(()=>ue.value.tagline===!1?!1:ue.value.tagline||pe.value.description||"Welcome to your VuePress site"),_e=computed(()=>ue.value.heroImage?withBase(ue.value.heroImage):null),he=computed(()=>ue.value.heroImageDark?withBase(ue.value.heroImageDark):null),ge=computed(()=>ue.value.heroAlt||ve.value||"hero"),fe=computed(()=>ue.value.actions??[]);return()=>{var be,Pe;return h$2("header",{class:"hero-info-wrapper"},[((be=de.heroImage)==null?void 0:be.call(de))||h$2(DropTransition,{appear:!0,type:"group"},()=>[_e.value?h$2("img",{key:"light",class:{light:he.value},src:_e.value,alt:ge.value}):null,he.value?h$2("img",{key:"dark",class:"dark",src:he.value,alt:ge.value}):null]),((Pe=de.heroInfo)==null?void 0:Pe.call(de))||h$2("div",{class:"hero-info"},[ve.value?h$2(DropTransition,{appear:!0,delay:.04},()=>h$2("h1",{id:"main-title"},ve.value)):null,me.value?h$2(DropTransition,{appear:!0,delay:.08},()=>h$2("p",{class:"description"},me.value)):null,fe.value.length?h$2(DropTransition,{appear:!0,delay:.12},()=>h$2("p",{class:"actions"},fe.value.map(we=>h$2(AutoLink,{class:["action-button",we.type||"default"],config:we,noExternalLinkIcon:!0})))):null])])}}}),MarkdownContent=({custom:Q})=>h$2(Content,{class:["theme-hope-content",{custom:Q}]});MarkdownContent.displayName="MarkdownContent";MarkdownContent.props={custom:Boolean};const homePage="",HomePage=defineComponent({name:"HopePage",setup(Q,{slots:de}){const ue=usePure(),pe=usePageFrontmatter(),ve=computed(()=>{const{features:me}=pe.value;return isArray(me)?me.some(_e=>!("items"in _e))?[{items:me}]:me:[]});return()=>{var me,_e,he;return h$2("main",{class:["home project",{pure:ue.value}],id:"main-content","aria-labelledby":pe.value.heroText===null?void 0:"main-title"},[(me=de.top)==null?void 0:me.call(de),h$2(HeroInfo),ve.value.map(({header:ge="",items:fe},be)=>h$2(DropTransition,{appear:!0,delay:.16+be*.08},()=>h$2(FeaturePanel,{header:ge,items:fe}))),(_e=de.center)==null?void 0:_e.call(de),h$2(DropTransition,{appear:!0,delay:.16+ve.value.length*.08},()=>h$2(MarkdownContent)),(he=de.bottom)==null?void 0:he.call(de)])}}}),getAncestorLinks=(Q,de)=>{const ue=Q.replace(de,"/").split("/"),pe=[];let ve=removeEndingSlash(de);return ue.forEach((me,_e)=>{_e!==ue.length-1?(ve+=`${me}/`,pe.push(ve)):me!==""&&(ve+=me,pe.push(ve))}),pe},breadcrumb="",BreadCrumb=defineComponent({name:"BreadCrumb",setup(){const Q=useRouter(),de=usePageData(),ue=useRouteLocale(),pe=usePageFrontmatter(),ve=useThemeLocaleData(),me=ref([]),_e=computed(()=>(pe.value.breadcrumb||pe.value.breadcrumb!==!1&&ve.value.breadcrumb!==!1)&&me.value.length>1),he=computed(()=>pe.value.breadcrumbIcon||pe.value.breadcrumbIcon!==!1&&ve.value.breadcrumbIcon!==!1),ge=()=>{const fe=Q.getRoutes(),be=getAncestorLinks(de.value.path,ue.value).map(Pe=>{const we=fe.find(De=>De.path===Pe);if(we){const{meta:De,path:Ce}=j(Q,we.path),Oe=De.s||De.t;if(Oe)return{title:Oe,icon:De.i,path:Ce}}return null}).filter(Pe=>Pe!==null);be.length>1&&(me.value=be)};return onMounted(()=>{ge(),watch(()=>de.value.path,ge)}),()=>h$2("nav",{class:["breadcrumb",{disable:!_e.value}]},_e.value?h$2("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},me.value.map((fe,be)=>h$2("li",{class:{"is-active":me.value.length-1===be},property:"itemListElement",typeof:"ListItem"},[h$2(RouterLink,{to:fe.path,property:"item",typeof:"WebPage"},()=>[he.value?h$2(HopeIcon,{icon:fe.icon}):null,h$2("span",{property:"name"},fe.title||"Unknown")]),h$2("meta",{property:"position",content:be+1})]))):[])}}),pageNav="",resolveFromFrontmatterConfig=Q=>Q===!1?!1:isString$1(Q)?useAutoLink(Q,!0):isPlainObject(Q)?Q:null,resolveFromSidebarItems=(Q,de,ue)=>{const pe=Q.findIndex(ve=>ve.link===de);if(pe!==-1){const ve=Q[pe+ue];return ve!=null&&ve.link?ve:null}for(const ve of Q)if(ve.children){const me=resolveFromSidebarItems(ve.children,de,ue);if(me)return me}return null},PageNav=defineComponent({name:"PageNav",setup(){const Q=useThemeLocaleData(),de=usePageFrontmatter(),ue=useSidebarItems(),pe=usePageData(),ve=useNavigate(),me=computed(()=>{const he=resolveFromFrontmatterConfig(de.value.prev);return he===!1?null:he||(Q.value.prevLink===!1?null:resolveFromSidebarItems(ue.value,pe.value.path,-1))}),_e=computed(()=>{const he=resolveFromFrontmatterConfig(de.value.next);return he===!1?null:he||(Q.value.nextLink===!1?null:resolveFromSidebarItems(ue.value,pe.value.path,1))});return useEventListener("keydown",he=>{he.altKey&&(he.key==="ArrowRight"?_e.value&&(ve(_e.value.link),he.preventDefault()):he.key==="ArrowLeft"&&me.value&&(ve(me.value.link),he.preventDefault()))}),()=>me.value||_e.value?h$2("nav",{class:"page-nav"},[me.value?h$2(AutoLink,{class:"prev",config:me.value},()=>{var he,ge;return[h$2("div",{class:"hint"},[h$2("span",{class:"arrow start"}),Q.value.metaLocales.prev]),h$2("div",{class:"link"},[h$2(HopeIcon,{icon:(he=me.value)==null?void 0:he.icon}),(ge=me.value)==null?void 0:ge.text])]}):null,_e.value?h$2(AutoLink,{class:"next",config:_e.value},()=>{var he,ge;return[h$2("div",{class:"hint"},[Q.value.metaLocales.next,h$2("span",{class:"arrow end"})]),h$2("div",{class:"link"},[(he=_e.value)==null?void 0:he.text,h$2(HopeIcon,{icon:(ge=_e.value)==null?void 0:ge.icon})])]}):null]):null}}),AuthorIcon=()=>h$2(c$3,{name:"author"},()=>h$2("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));AuthorIcon.displayName="AuthorIcon";const CalendarIcon=()=>h$2(c$3,{name:"calendar"},()=>h$2("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));CalendarIcon.displayName="CalendarIcon";const CategoryIcon$1=()=>h$2(c$3,{name:"category"},()=>h$2("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon$1.displayName="CategoryIcon";const EyeIcon=()=>h$2(c$3,{name:"eye"},()=>h$2("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));EyeIcon.displayName="EyeIcon";const FireIcon=()=>h$2(c$3,{name:"fire"},()=>h$2("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));FireIcon.displayName="FireIcon";const PrintIcon=()=>h$2(c$3,{name:"print"},()=>h$2("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));PrintIcon.displayName="PrintIcon";const TagIcon$1=()=>h$2(c$3,{name:"tag"},()=>h$2("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon$1.displayName="TagIcon";const TimerIcon=()=>h$2(c$3,{name:"timer"},()=>h$2("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));TimerIcon.displayName="TimerIcon";const WordIcon=()=>h$2(c$3,{name:"word"},()=>[h$2("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),h$2("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);WordIcon.displayName="WordIcon";const useMetaLocale=()=>{const Q=useThemeLocaleData();return computed(()=>Q.value.metaLocales)},readingTimeLocales={"/en/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"},"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLink=({docsRepo:Q,docsBranch:de,docsDir:ue,filePathRelative:pe,editLinkPattern:ve})=>{if(!pe)return null;const me=$e(Q);let _e;return ve?_e=ve:me!==null&&(_e=editLinkPatterns[me]),_e?_e.replace(/:repo/,isLinkHttp(Q)?Q:`https://github.com/${Q}`).replace(/:branch/,de).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(ue)}/${pe}`)):null},useEditLink=()=>{const Q=useThemeLocaleData(),de=usePageData(),ue=usePageFrontmatter();return computed(()=>{const{repo:pe,docsRepo:ve=pe,docsBranch:me="main",docsDir:_e="",editLink:he,editLinkPattern:ge=""}=Q.value;if(!(ue.value.editLink??he??!0)||!ve)return null;const be=resolveEditLink({docsRepo:ve,docsBranch:me,docsDir:_e,editLinkPattern:ge,filePathRelative:de.value.filePathRelative});return be?{text:Q.value.metaLocales.editLink,link:be}:null})},useUpdateTime=()=>{const Q=useSiteLocaleData(),de=useThemeLocaleData(),ue=usePageData(),pe=usePageFrontmatter();return computed(()=>{var _e,he;return!(pe.value.lastUpdated??de.value.lastUpdated??!0)||!((_e=ue.value.git)!=null&&_e.updatedTime)?null:new Date((he=ue.value.git)==null?void 0:he.updatedTime).toLocaleString(Q.value.lang)})},useContributors=()=>{const Q=useThemeLocaleData(),de=usePageData(),ue=usePageFrontmatter();return computed(()=>{var ve;return ue.value.contributors??Q.value.contributors??!0?((ve=de.value.git)==null?void 0:ve.contributors)??null:null})},authorInfo="",AuthorInfo=defineComponent({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(Q){const de=useMetaLocale();return()=>Q.author.length?h$2("span",{class:"page-author-info","aria-label":`${de.value.author}${Q.pure?"":"🖊"}`,...Q.pure?{}:{"data-balloon-pos":"down"}},[h$2(AuthorIcon),h$2("span",Q.author.map(ue=>ue.url?h$2("a",{class:"page-author-item",href:ue.url,target:"_blank",rel:"noopener noreferrer"},ue.name):h$2("span",{class:"page-author-item"},ue.name))),h$2("span",{property:"author",content:Q.author.map(ue=>ue.name).join(", ")})]):null}}),categoryInfo="",CategoryInfo=defineComponent({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(Q){const de=useRouter(),ue=usePageData(),pe=useMetaLocale(),ve=(me,_e="")=>{_e&&ue.value.path!==_e&&(me.preventDefault(),de.push(_e))};return()=>Q.category.length?h$2("span",{class:"page-category-info","aria-label":`${pe.value.category}${Q.pure?"":"🌈"}`,...Q.pure?{}:{"data-balloon-pos":"down"}},[h$2(CategoryIcon$1),...Q.category.map(({name:me,path:_e})=>h$2("span",{class:["page-category-item",{[`category${Ee(me,9)}`]:!Q.pure,clickable:_e}],role:_e?"navigation":"",onClick:he=>ve(he,_e)},me)),h$2("meta",{property:"articleSection",content:Q.category.map(({name:me})=>me).join(",")})]):null}}),DateInfo=defineComponent({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(Q){const de=usePageLang(),ue=useMetaLocale();return()=>Q.date?h$2("span",{class:"page-date-info","aria-label":`${ue.value.date}${Q.pure?"":"📅"}`,...Q.pure?{}:{"data-balloon-pos":"down"}},[h$2(CalendarIcon),h$2("span",h$2(ClientOnly,()=>Q.localizedDate||Q.date.toLocaleDateString(de.value))),h$2("meta",{property:"datePublished",content:Q.date.toISOString()||""})]):null}}),originalInfo="",OriginalInfo=defineComponent({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(Q){const de=useMetaLocale();return()=>Q.isOriginal?h$2("span",{class:"page-original-info"},de.value.origin):null}});defineComponent({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(Q){const de=useRoute(),ue=useMetaLocale(),pe=ref(),ve=ref(0);return useMutationObserver(pe,()=>{const me=pe.value.textContent;me&&!isNaN(Number(me))&&(ve.value=Number(me))},{childList:!0}),()=>Q.pageview?h$2("span",{class:"page-pageview-info","aria-label":`${ue.value.views}${Q.pure?"":"🔢"}`,...Q.pure?{}:{"data-balloon-pos":"down"}},[h$2(ve.value<1e3?EyeIcon:FireIcon),h$2("span",{ref:pe,class:"waline-pageview-count",id:"ArtalkPV","data-path":isString$1(Q.pageview)?Q.pageview:withBase(de.path)},"...")]):null}});const ReadingTimeInfo=defineComponent({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(Q){const de=useMetaLocale(),ue=le(readingTimeLocales),pe=computed(()=>{if(!Q.readingTime)return null;const{minutes:ve}=Q.readingTime;return ve<1?{text:ue.value.less1Minute,time:"PT1M"}:{text:ue.value.time.replace("$time",Math.round(ve).toString()),time:`PT${Math.round(ve)}M`}});return()=>pe.value?h$2("span",{class:"page-reading-time-info","aria-label":`${de.value.readingTime}${Q.pure?"":"⌛"}`,...Q.pure?{}:{"data-balloon-pos":"down"}},[h$2(TimerIcon),h$2("span",pe.value.text),h$2("meta",{property:"timeRequired",content:pe.value.time})]):null}}),tagInfo="",TagInfo=defineComponent({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(Q){const de=useRouter(),ue=usePageData(),pe=useMetaLocale(),ve=(me,_e="")=>{_e&&ue.value.path!==_e&&(me.preventDefault(),de.push(_e))};return()=>Q.tag.length?h$2("span",{class:"page-tag-info","aria-label":`${pe.value.tag}${Q.pure?"":"🏷"}`,...Q.pure?{}:{"data-balloon-pos":"down"}},[h$2(TagIcon$1),...Q.tag.map(({name:me,path:_e})=>h$2("span",{class:["page-tag-item",{[`tag${Ee(me,9)}`]:!Q.pure,clickable:_e}],role:_e?"navigation":"",onClick:he=>ve(he,_e)},me)),h$2("meta",{property:"keywords",content:Q.tag.map(({name:me})=>me).join(",")})]):null}}),WordInfo=defineComponent({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(Q){const de=useMetaLocale(),ue=le(readingTimeLocales),pe=computed(()=>{var me;return(me=Q.readingTime)==null?void 0:me.words.toString()}),ve=computed(()=>ue.value.word.replace("$word",pe.value||""));return()=>pe.value?h$2("span",{class:"page-word-info","aria-label":`${de.value.words}${Q.pure?"":"🔠"}`,...Q.pure?{}:{"data-balloon-pos":"down"}},[h$2(WordIcon),h$2("span",ve.value),h$2("meta",{property:"wordCount",content:pe.value})]):null}}),pageInfo="",PageInfo=defineComponent({name:"PageInfo",components:{AuthorInfo,CategoryInfo,DateInfo,OriginalInfo,PageViewInfo:()=>null,ReadingTimeInfo,TagInfo,WordInfo},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(Q){const de=usePure();return()=>Q.items?h$2("div",{class:"page-info"},Q.items.map(ue=>h$2(resolveComponent(`${ue}Info`),{...Q.info,pure:de.value}))):null}}),pageTitle="",PageTitle=defineComponent({name:"PageTitle",setup(){const Q=usePageData(),de=usePageFrontmatter(),ue=useThemeLocaleData(),{info:pe,items:ve}=usePageInfo();return()=>h$2("div",{class:"page-title"},[h$2("h1",[ue.value.titleIcon===!1?null:h$2(HopeIcon,{icon:de.value.icon}),Q.value.title]),h$2(PageInfo,{info:pe.value,...ve.value===null?{}:{items:ve.value}}),h$2("hr")])}}),EditIcon=()=>h$2(c$3,{name:"edit"},()=>[h$2("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),h$2("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);EditIcon.displayName="EditIcon";const pageMeta="",PageMeta=defineComponent({name:"PageMeta",setup(){const Q=useThemeLocaleData(),de=useEditLink(),ue=useUpdateTime(),pe=useContributors();return()=>{const{metaLocales:ve}=Q.value;return h$2("footer",{class:"page-meta"},[de.value?h$2("div",{class:"meta-item edit-link"},h$2(AutoLink,{class:"label",config:de.value},{before:()=>h$2(EditIcon)})):null,h$2("div",{class:"meta-item git-info"},[ue.value?h$2("div",{class:"update-time"},[h$2("span",{class:"label"},`${ve.lastUpdated}: `),h$2(ClientOnly,()=>h$2("span",{class:"info"},ue.value))]):null,pe.value&&pe.value.length?h$2("div",{class:"contributors"},[h$2("span",{class:"label"},`${ve.contributors}: `),pe.value.map(({email:me,name:_e},he)=>[h$2("span",{class:"contributor",title:`email: ${me}`},_e),he!==pe.value.length-1?",":""])]):null])])}}}),printButton="",PrintButton=defineComponent({name:"PrintButton",setup(){const Q=useThemeData(),de=useThemeLocaleData();return()=>Q.value.print===!1?null:h$2("button",{type:"button",class:"print-button",title:de.value.metaLocales.print,onClick:()=>{window.print()}},h$2(PrintIcon))}}),toc="",renderHeader=({title:Q,level:de,slug:ue})=>h$2(RouterLink,{to:`#${ue}`,class:["toc-link",`level${de}`]},()=>Q),renderChildren=(Q,de)=>{const ue=useRoute();return Q.length&&de>0?h$2("ul",{class:"toc-list"},Q.map(pe=>{const ve=renderChildren(pe.children,de-1);return[h$2("li",{class:["toc-item",{active:Le(ue,`#${pe.slug}`)}]},renderHeader(pe)),ve?h$2("li",ve):null]})):null},TOC=defineComponent({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(Q,{slots:de}){const ue=useRoute(),pe=usePageData(),ve=useMetaLocale(),me=ref(),_e=he=>{var ge;(ge=me.value)==null||ge.scrollTo({top:he,behavior:"smooth"})};return onMounted(()=>{watch(()=>ue.hash,he=>{if(me.value){const ge=document.querySelector(`#toc a.toc-link[href$="${he}"]`);if(!ge)return;const{top:fe,height:be}=me.value.getBoundingClientRect(),{top:Pe,height:we}=ge.getBoundingClientRect();Pe<fe?_e(me.value.scrollTop+Pe-fe):Pe+we>fe+be&&_e(me.value.scrollTop+Pe+we-fe-be)}})}),()=>{var ge,fe;const he=Q.items.length?renderChildren(Q.items,Q.headerDepth):pe.value.headers?renderChildren(pe.value.headers,Q.headerDepth):null;return he?h$2("div",{class:"toc-place-holder"},[h$2("aside",{id:"toc"},[(ge=de.before)==null?void 0:ge.call(de),h$2("div",{class:"toc-header"},[ve.value.toc,h$2(PrintButton)]),h$2("div",{class:"toc-wrapper",ref:me},he),(fe=de.after)==null?void 0:fe.call(de)])]):null}}}),page$1="",NormalPage=defineComponent({name:"NormalPage",setup(Q,{slots:de}){const ue=usePageFrontmatter(),{isDarkmode:pe}=useDarkmode(),ve=useThemeLocaleData(),me=computed(()=>ue.value.toc||ue.value.toc!==!1&&ve.value.toc!==!1);return()=>h$2("main",{class:"page",id:"main-content"},h$2(Z("LocalEncrypt")?resolveComponent("LocalEncrypt"):J$1,()=>{var _e,he,ge,fe;return[(_e=de.top)==null?void 0:_e.call(de),h$2(BreadCrumb),h$2(PageTitle),me.value?h$2(TOC,{headerDepth:ue.value.headerDepth??ve.value.headerDepth??2},{before:()=>{var be;return(be=de.tocBefore)==null?void 0:be.call(de)},after:()=>{var be;return(be=de.tocAfter)==null?void 0:be.call(de)}}):null,(he=de.contentBefore)==null?void 0:he.call(de),h$2(MarkdownContent),(ge=de.contentAfter)==null?void 0:ge.call(de),h$2(PageMeta),h$2(PageNav),Z("CommentService")?h$2(resolveComponent("CommentService"),{darkmode:pe.value}):null,(fe=de.bottom)==null?void 0:fe.call(de)]}))}}),skipLink="",SkipLink=defineComponent({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(Q){const de=usePageData(),ue=useThemeLocaleData(),pe=ref(),ve=({target:me})=>{const _e=document.querySelector(me.hash);if(_e){const he=()=>{_e.removeAttribute("tabindex"),_e.removeEventListener("blur",he)};_e.setAttribute("tabindex","-1"),_e.addEventListener("blur",he),_e.focus(),window.scrollTo(0,0)}};return onMounted(()=>{watch(()=>de.value.path,()=>pe.value.focus())}),()=>[h$2("span",{ref:pe,tabindex:"-1"}),h$2("a",{href:`#${Q.content}`,class:"skip-link sr-only",onClick:ve},ue.value.routeLocales.skipToContent)]}}),fadeSlideY="",FadeSlideY=defineComponent({name:"FadeSlideY",setup(Q,{slots:de}){const{resolve:ue,pending:pe}=useScrollPromise();return()=>h$2(Transition,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:ue,onBeforeLeave:pe},()=>{var ve;return(ve=de.default)==null?void 0:ve.call(de)})}}),Layout=defineComponent({name:"Layout",setup(){const Q=useThemeData(),de=useThemeLocaleData(),ue=usePageData(),pe=usePageFrontmatter(),{isMobile:ve}=useWindowSize(),me=computed(()=>{var _e,he;return((_e=de.value.blog)==null?void 0:_e.sidebarDisplay)||((he=Q.value.blog)==null?void 0:he.sidebarDisplay)||"mobile"});return()=>[h$2(SkipLink),h$2(CommonWrapper,{},{default:()=>pe.value.home?h$2(HomePage):h$2(FadeSlideY,()=>h$2(NormalPage,{key:ue.value.path})),...me.value!=="none"?{navScreenBottom:()=>h$2(resolveComponent("BloggerInfo"))}:{},...!ve.value&&me.value==="always"?{sidebar:()=>h$2(resolveComponent("BloggerInfo"))}:{}})]}}),notFoundHint="",NotFoundHint=defineComponent({name:"NotFoundHint",setup(){const Q=useThemeLocaleData(),de=()=>{const ue=Q.value.routeLocales.notFoundMsg;return ue[Math.floor(Math.random()*ue.length)]};return()=>h$2("div",{class:"not-found-hint"},[h$2("p",{class:"error-code"},"404"),h$2("h1",{class:"error-title"},Q.value.routeLocales.notFoundTitle),h$2("p",{class:"error-hint"},de())])}}),notFound="",NotFound=defineComponent({name:"NotFound",setup(Q,{slots:de}){const ue=useRouteLocale(),pe=useThemeLocaleData(),{navigate:ve}=useLink({to:pe.value.home??ue.value});return()=>[h$2(SkipLink),h$2(CommonWrapper,{noSidebar:!0},()=>{var me;return h$2("main",{class:"page not-found",id:"main-content"},((me=de.default)==null?void 0:me.call(de))||[h$2(NotFoundHint),h$2("div",{class:"actions"},[h$2("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},pe.value.routeLocales.back),h$2("button",{type:"button",class:"action-button",onClick:()=>ve()},pe.value.routeLocales.home)])])})]}}),icons={Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gmail:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>',Resume:'<svg t="1680677846794" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7838" width="200" height="200"><path d="M139.636364 24.54497h548.305454L1008.484848 297.053091v572.136727a124.121212 124.121212 0 0 1-124.121212 124.121212H139.636364a124.121212 124.121212 0 0 1-124.121212-124.121212V148.666182a124.121212 124.121212 0 0 1 124.121212-124.121212z" fill="#2D6AEA" p-id="7839"></path><path d="M687.569455 20.417939v273.221819H1006.312727z" fill="#BED7FF" p-id="7840"></path><path d="M15.515152 496.826182h992.969696v496.484848H15.515152z" fill="#CEDBF8" p-id="7841"></path><path d="M233.472 630.008242m30.285576 0l363.271757 0q30.285576 0 30.285576 30.285576l0-0.03103q0 30.285576-30.285576 30.285576l-363.271757 0q-30.285576 0-30.285576-30.285576l0 0.03103q0-30.285576 30.285576-30.285576Z" fill="#FFFFFF" p-id="7842"></path><path d="M242.998303 172.032A98.924606 98.924606 0 0 1 341.829818 73.169455 98.924606 98.924606 0 0 1 440.630303 172.032a98.924606 98.924606 0 0 1-98.800485 98.800485A98.924606 98.924606 0 0 1 242.967273 172.032z m-82.168242 255.069091c2.110061-23.893333 13.591273-108.606061 101.779394-153.910303a127.906909 127.906909 0 0 0 158.81309-0.310303c88.529455 45.180121 99.234909 129.241212 101.376 154.220606-0.527515 0.496485-361.44097 0-361.968484 0z" fill="#CEDBF8" p-id="7843"></path><path d="M233.472 739.017697m30.285576 0l363.271757 0q30.285576 0 30.285576 30.285576l0-0.031031q0 30.285576-30.285576 30.285576l-363.271757 0q-30.285576 0-30.285576-30.285576l0 0.031031q0-30.285576 30.285576-30.285576Z" fill="#FFFFFF" p-id="7844"></path><path d="M233.472 847.996121m30.285576 0l435.913697 0q30.285576 0 30.285575 30.285576l0-0.03103q0 30.285576-30.285575 30.285575l-435.913697 0q-30.285576 0-30.285576-30.285575l0 0.03103q0-30.285576 30.285576-30.285576Z" fill="#FFFFFF" p-id="7845"></path></svg>',MrHope:'<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>'},categoryMap={category:{"/":{path:"/category/",map:{深度学习:{path:"/category/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/",keys:["v-4e230683"]},常用工具:{path:"/category/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7/",keys:["v-17486eac","v-20b9cb4a","v-06a095cd","v-66e23684","v-41f0a814"]},前端:{path:"/category/%E5%89%8D%E7%AB%AF/",keys:["v-967efbc0","v-eff713c6","v-debe8af8"]},小程序:{path:"/category/%E5%B0%8F%E7%A8%8B%E5%BA%8F/",keys:["v-4501a698","v-7f0a4545","v-c7895d9e","v-bd140ff6","v-878aea88","v-177a413a","v-334b99da","v-41cd4a50","v-727599f0","v-6d70dee6","v-ca40a124","v-466f7448","v-0b8b4854","v-66f7568f","v-8d744168","v-bb8e529c","v-d7116ef6","v-31173e92","v-1e1ba08a","v-2b627946","v-d9aa29b6","v-e39a8c42","v-1ba75a8e","v-e4f6e8f2","v-1d61d9a0","v-6ae00d43","v-72660cb4","v-2fcf188f","v-27b18929","v-7030d796","v-fa183054","v-6bf63fb6","v-4a6ada89","v-97f2ec94","v-10871e32","v-949401be","v-8a057d0e","v-7c8b712f","v-82489fa8","v-85f0d4ae","v-a771c2d6","v-0aadde11","v-b3f29962","v-54b9e083","v-878011d0","v-642ef93f","v-3c404aa4","v-4d6a3f9c","v-06ddb742","v-30eeccd7","v-49aa3013","v-9e4aad0a","v-b0c3df5e","v-01cc2cb7","v-775d7cfc","v-0e5f8376","v-8c9bce86","v-286cdfea","v-57b6d355","v-42c56014","v-bff027a6","v-78262261","v-4e0c2eb4","v-a2653b98","v-b46fe358","v-82995f58","v-9e3033f2"]},"Node.js":{path:"/category/node.js/",keys:["v-0585156a","v-01646db8","v-46aae1f1","v-42b240e9","v-7c2edd10","v-154571a0","v-00a665cb"]},Vue:{path:"/category/vue/",keys:["v-f4af920e","v-231456e6","v-050f65b4","v-50860a96","v-48384480","v-296b00ed","v-3c6d60fc"]},JavaScript:{path:"/category/javascript/",keys:["v-5460422c"]},Git:{path:"/category/git/",keys:["v-28806cdc","v-373337a5","v-0fb3e257","v-87fbcab0","v-085e1b36","v-c750f140","v-63f40516","v-baa53aa0","v-4bff78ff","v-7ff40a9a","v-dbb97386","v-3a6e98d4","v-11f528fe","v-c5bad008","v-451a0aa4","v-3d327f55","v-52a16dde","v-ff1bae8c","v-18e56ada"]},Linux:{path:"/category/linux/",keys:["v-3229366b","v-f826aeb8","v-fd906a6a","v-7386ebc9","v-5bcd1311","v-1bbdb2a5","v-00624376","v-991b1106","v-146d6a98","v-0db2d2aa","v-a5b86348","v-190d4eaa","v-186b61f8","v-7f7046f8","v-31b34804","v-b69340ba","v-9a54e5bc","v-42df3ffc","v-14a0f267","v-5d9b6c1d","v-549b295c","v-41d2e35e","v-ade64d4e","v-3beb415d","v-7c5381f3","v-3ba080b8","v-20f9a11e","v-cd3ed248","v-91c422e8","v-47576740","v-28726463","v-5324f8a0","v-1b31a5a9","v-11d6f87d","v-e6e44498","v-63ad2822","v-0f247620","v-32651cc3","v-754f362f","v-7a5ee77a","v-1f4c1d3a","v-2a4505fe","v-40417720","v-1c3d68ae","v-037a4370","v-1fa756b3","v-2f48faf8","v-3315d0e0"]},基础:{path:"/category/%E5%9F%BA%E7%A1%80/",keys:["v-5b86497e"]},Markdown:{path:"/category/markdown/",keys:["v-7093596a","v-2b223df7","v-12f7a9eb","v-17ff21d4","v-406cd496","v-2963ef78","v-7e6cf7b4","v-73aef744","v-06b2bcc6","v-d2138114","v-a3c04a34","v-3f2c7a0d"]},CSS:{path:"/category/css/",keys:["v-30097a28","v-36ef9bbe","v-372d329e","v-6ef62430","v-9ecc0baa","v-656e7253","v-4830b9aa","v-26921941","v-7d84eaa4","v-969c3194","v-2b666a30","v-7d8aa827","v-ee7e56ca","v-5dae7d96","v-fc27c22a","v-7df0baf2","v-dd94d254","v-057d80e2","v-f5b2d1e0","v-62622fc3","v-6e8b1d3c","v-7ae2b4b1","v-4dcea577","v-600108f7","v-fad3f3f0","v-4e01e632"]},HTML:{path:"/category/html/",keys:["v-fa847f90","v-8f38c826","v-fdd48258","v-1367f1b6","v-092addfc","v-6728a523","v-11ecaece","v-2a262703","v-1e1efb82","v-5becdd94","v-facfbd30","v-0227e47e","v-11e686ec","v-7e42ef5c","v-6eea1650","v-425c99d0","v-0981e9a4","v-1ff325e0","v-641c6293","v-a4b15ddc"]},Emmet:{path:"/category/emmet/",keys:["v-4e1f5402","v-086d6fb5","v-7ba844ef"]},jQuery:{path:"/category/jquery/",keys:["v-2efa2eec","v-fa04251c","v-57c91382","v-776998ac","v-068b0a7d","v-0e25c76d","v-27d8db0d","v-1e429e6d","v-f0a38fcc"]}}},"/en/":{path:"/en/category/",map:{}}},tag:{"/":{path:"/tag/",map:{DDP:{path:"/tag/ddp/",keys:["v-4e230683"]},firewalld:{path:"/tag/firewalld/",keys:["v-20b9cb4a"]},iptables:{path:"/tag/iptables/",keys:["v-20b9cb4a"]},linux:{path:"/tag/linux/",keys:["v-06a095cd"]},docker:{path:"/tag/docker/",keys:["v-17486eac","v-66e23684"]},frp:{path:"/tag/frp/",keys:["v-41f0a814"]},Angular:{path:"/tag/angular/",keys:["v-eff713c6"]},"Node.js":{path:"/tag/node.js/",keys:["v-0585156a","v-01646db8","v-46aae1f1","v-42b240e9","v-7c2edd10","v-154571a0","v-00a665cb"]},软件:{path:"/tag/%E8%BD%AF%E4%BB%B6/",keys:["v-0585156a","v-01646db8","v-46aae1f1","v-42b240e9","v-7c2edd10","v-154571a0","v-28806cdc","v-373337a5","v-0fb3e257","v-87fbcab0","v-085e1b36","v-c750f140","v-63f40516","v-baa53aa0","v-4bff78ff","v-7ff40a9a","v-dbb97386","v-3a6e98d4","v-11f528fe","v-c5bad008","v-451a0aa4","v-3d327f55","v-52a16dde","v-ff1bae8c","v-18e56ada"]},安装:{path:"/tag/%E5%AE%89%E8%A3%85/",keys:["v-42b240e9","v-baa53aa0","v-50860a96"]},介绍:{path:"/tag/%E4%BB%8B%E7%BB%8D/",keys:["v-7c2edd10","v-2f48faf8","v-3315d0e0","v-f0a38fcc","v-f5b2d1e0","v-facfbd30","v-debe8af8","v-1ff325e0"]},网页:{path:"/tag/%E7%BD%91%E9%A1%B5/",keys:["v-967efbc0","v-debe8af8"]},React:{path:"/tag/react/",keys:["v-967efbc0"]},Vue:{path:"/tag/vue/",keys:["v-231456e6"]},小程序:{path:"/tag/%E5%B0%8F%E7%A8%8B%E5%BA%8F/",keys:["v-231456e6"]},对比:{path:"/tag/%E5%AF%B9%E6%AF%94/",keys:["v-231456e6"]},Git:{path:"/tag/git/",keys:["v-28806cdc","v-373337a5","v-0fb3e257","v-87fbcab0","v-085e1b36","v-c750f140","v-63f40516","v-baa53aa0","v-4bff78ff","v-7ff40a9a","v-dbb97386","v-3a6e98d4","v-11f528fe","v-c5bad008","v-451a0aa4","v-3d327f55","v-52a16dde","v-ff1bae8c","v-18e56ada"]},Markdown:{path:"/tag/markdown/",keys:["v-7093596a","v-2b223df7","v-12f7a9eb","v-17ff21d4","v-406cd496","v-2963ef78","v-7e6cf7b4","v-73aef744","v-06b2bcc6","v-d2138114","v-a3c04a34","v-3f2c7a0d"]},快速上手:{path:"/tag/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/",keys:["v-050f65b4","v-3c6d60fc","v-372d329e","v-6ef62430","v-9ecc0baa","v-62622fc3","v-6e8b1d3c","v-7ae2b4b1","v-4dcea577","v-641c6293","v-a4b15ddc"]},基础:{path:"/tag/%E5%9F%BA%E7%A1%80/",keys:["v-050f65b4","v-50860a96"]},"Vue Router":{path:"/tag/vue-router/",keys:["v-296b00ed","v-3c6d60fc"]},快捷键:{path:"/tag/%E5%BF%AB%E6%8D%B7%E9%94%AE/",keys:["v-4e1f5402","v-086d6fb5","v-7ba844ef"]},HTML:{path:"/tag/html/",keys:["v-086d6fb5","v-7ba844ef","v-11ecaece"]},Bash:{path:"/tag/bash/",keys:["v-3229366b","v-f826aeb8","v-fd906a6a","v-7386ebc9","v-5bcd1311","v-1bbdb2a5","v-00624376","v-991b1106","v-146d6a98","v-0db2d2aa","v-a5b86348","v-190d4eaa","v-186b61f8","v-7f7046f8","v-31b34804","v-b69340ba","v-9a54e5bc","v-42df3ffc","v-14a0f267","v-5d9b6c1d","v-549b295c"]},Emoji:{path:"/tag/emoji/",keys:["v-7e6cf7b4","v-73aef744","v-06b2bcc6","v-d2138114","v-a3c04a34","v-3f2c7a0d"]},CSS:{path:"/tag/css/",keys:["v-fad3f3f0","v-4e01e632"]}}},"/en/":{path:"/en/tag/",map:{}}}},typeMap={article:{"/":{path:"/article/",keys:["v-639495b8","v-24c105bc","v-04ca4ab7","v-f87bb1e8","v-4501a698","v-0585156a","v-01646db8","v-46aae1f1","v-42b240e9","v-7c2edd10","v-154571a0","v-f4af920e","v-231456e6","v-28806cdc","v-373337a5","v-0fb3e257","v-87fbcab0","v-085e1b36","v-c750f140","v-63f40516","v-baa53aa0","v-4bff78ff","v-7ff40a9a","v-dbb97386","v-3a6e98d4","v-11f528fe","v-c5bad008","v-451a0aa4","v-3d327f55","v-52a16dde","v-ff1bae8c","v-18e56ada","v-7093596a","v-2b223df7","v-12f7a9eb","v-17ff21d4","v-406cd496","v-2963ef78","v-7f0a4545","v-c7895d9e","v-bd140ff6","v-878aea88","v-177a413a","v-334b99da","v-41cd4a50","v-727599f0","v-6d70dee6","v-ca40a124","v-466f7448","v-0b8b4854","v-66f7568f","v-00a665cb","v-21906d6f","v-050f65b4","v-50860a96","v-48384480","v-94472630","v-296b00ed","v-3c6d60fc","v-3229366b","v-f826aeb8","v-fd906a6a","v-7386ebc9","v-5bcd1311","v-1bbdb2a5","v-00624376","v-991b1106","v-146d6a98","v-0db2d2aa","v-a5b86348","v-190d4eaa","v-186b61f8","v-7f7046f8","v-31b34804","v-b69340ba","v-9a54e5bc","v-42df3ffc","v-14a0f267","v-5d9b6c1d","v-549b295c","v-41d2e35e","v-2ac8e6af","v-7e6cf7b4","v-73aef744","v-06b2bcc6","v-d2138114","v-a3c04a34","v-3f2c7a0d","v-8d744168","v-bb8e529c","v-d7116ef6","v-31173e92","v-1e1ba08a","v-2b627946","v-d9aa29b6","v-e39a8c42","v-1ba75a8e","v-e4f6e8f2","v-1d61d9a0","v-6ae00d43","v-72660cb4","v-2fcf188f","v-27b18929","v-7030d796","v-fa183054","v-6bf63fb6","v-4a6ada89","v-97f2ec94","v-10871e32","v-949401be","v-8a057d0e","v-7c8b712f","v-82489fa8","v-85f0d4ae","v-a771c2d6","v-0aadde11","v-b3f29962","v-54b9e083","v-878011d0","v-642ef93f","v-3c404aa4","v-4d6a3f9c","v-06ddb742","v-30eeccd7","v-49aa3013","v-9e4aad0a","v-b0c3df5e","v-01cc2cb7","v-775d7cfc","v-0e5f8376","v-8c9bce86","v-286cdfea","v-57b6d355","v-f1be8366","v-ae500f20","v-341a277e","v-1371a5e0","v-6cb46dea","v-1dd2927e","v-df2ead84","v-59928cb8","v-2facf8c6","v-39414800","v-803a1cf6","v-6bb7d9d7","v-7d5144d9","v-854e898e","v-6133de0a","v-42c56014","v-bff027a6","v-78262261","v-4e0c2eb4","v-a2653b98","v-b46fe358","v-a7b53186","v-58c6beb8","v-c3164d02","v-a7c8c312","v-19028540","v-1bc87b50","v-63cf80ea","v-737f0692","v-1287d625","v-15f18763","v-2f8a38b4","v-0d59f7b2","v-c9dd2d1e","v-f2be30ae","v-228ef4e8","v-5e89ec20","v-62499a8f","v-53371364","v-1409eb6a","v-74ebee8b","v-77e8ff07","v-f147e22c","v-4d166acf","v-67652140","v-6919f9df","v-595b3d04","v-312ceba7","v-b22962fc","v-e5b0ff26","v-3b0c610a","v-5740a672","v-78cf62e7","v-0e48a30d","v-985e8278","v-06c3e1bd","v-bb709114","v-042d394e","v-27278cdc","v-9f2ae8e0","v-3376838f","v-9b139d8e","v-184f4da6","v-2e3eac9e","v-17486eac","v-4e230683","v-20b9cb4a","v-06a095cd","v-66e23684","v-41f0a814","v-30097a28","v-36ef9bbe","v-967efbc0","v-eff713c6","v-82995f58","v-9e3033f2","v-ade64d4e","v-3beb415d","v-5b86497e","v-7c5381f3","v-ef5ccb4c","v-3ba080b8","v-20f9a11e","v-cd3ed248","v-91c422e8","v-47576740","v-28726463","v-5324f8a0","v-1b31a5a9","v-11d6f87d","v-e6e44498","v-63ad2822","v-0f247620","v-32651cc3","v-754f362f","v-7a5ee77a","v-1f4c1d3a","v-2a4505fe","v-40417720","v-1c3d68ae","v-037a4370","v-1fa756b3","v-2f48faf8","v-3315d0e0","v-2efa2eec","v-fa04251c","v-57c91382","v-776998ac","v-7d25ed06","v-068b0a7d","v-0e25c76d","v-27d8db0d","v-1e429e6d","v-f0a38fcc","v-372d329e","v-6ef62430","v-9ecc0baa","v-656e7253","v-4830b9aa","v-26921941","v-7d84eaa4","v-969c3194","v-2b666a30","v-7d8aa827","v-ee7e56ca","v-5dae7d96","v-fc27c22a","v-7df0baf2","v-dd94d254","v-057d80e2","v-f5b2d1e0","v-62622fc3","v-6e8b1d3c","v-7ae2b4b1","v-4dcea577","v-600108f7","v-fad3f3f0","v-4e01e632","v-4e1f5402","v-086d6fb5","v-7ba844ef","v-fa847f90","v-8f38c826","v-fdd48258","v-1367f1b6","v-092addfc","v-6728a523","v-11ecaece","v-2a262703","v-1e1efb82","v-5becdd94","v-facfbd30","v-0227e47e","v-11e686ec","v-7e42ef5c","v-6eea1650","v-425c99d0","v-0981e9a4","v-debe8af8","v-5460422c","v-1ff325e0","v-641c6293","v-a4b15ddc"]},"/en/":{path:"/en/article/",keys:[]}},star:{"/":{path:"/star/",keys:["v-f87bb1e8","v-639495b8","v-24c105bc","v-04ca4ab7","v-82995f58","v-037a4370","v-f5b2d1e0","v-debe8af8","v-1ff325e0"]},"/en/":{path:"/en/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-639495b8","v-24c105bc","v-04ca4ab7","v-4501a698","v-0585156a","v-01646db8","v-46aae1f1","v-42b240e9","v-7c2edd10","v-154571a0","v-f4af920e","v-231456e6","v-28806cdc","v-373337a5","v-0fb3e257","v-87fbcab0","v-085e1b36","v-c750f140","v-63f40516","v-baa53aa0","v-4bff78ff","v-7ff40a9a","v-dbb97386","v-3a6e98d4","v-11f528fe","v-c5bad008","v-451a0aa4","v-3d327f55","v-52a16dde","v-ff1bae8c","v-18e56ada","v-7093596a","v-2b223df7","v-12f7a9eb","v-17ff21d4","v-406cd496","v-2963ef78","v-7f0a4545","v-c7895d9e","v-bd140ff6","v-878aea88","v-177a413a","v-334b99da","v-41cd4a50","v-727599f0","v-6d70dee6","v-ca40a124","v-466f7448","v-0b8b4854","v-66f7568f","v-00a665cb","v-21906d6f","v-050f65b4","v-50860a96","v-48384480","v-94472630","v-296b00ed","v-3c6d60fc","v-3229366b","v-f826aeb8","v-fd906a6a","v-7386ebc9","v-5bcd1311","v-1bbdb2a5","v-00624376","v-991b1106","v-146d6a98","v-0db2d2aa","v-a5b86348","v-190d4eaa","v-186b61f8","v-7f7046f8","v-31b34804","v-b69340ba","v-9a54e5bc","v-42df3ffc","v-14a0f267","v-5d9b6c1d","v-549b295c","v-41d2e35e","v-2ac8e6af","v-7e6cf7b4","v-73aef744","v-06b2bcc6","v-d2138114","v-a3c04a34","v-3f2c7a0d","v-8d744168","v-bb8e529c","v-d7116ef6","v-31173e92","v-1e1ba08a","v-2b627946","v-d9aa29b6","v-e39a8c42","v-1ba75a8e","v-e4f6e8f2","v-1d61d9a0","v-6ae00d43","v-72660cb4","v-2fcf188f","v-27b18929","v-7030d796","v-fa183054","v-6bf63fb6","v-4a6ada89","v-97f2ec94","v-10871e32","v-949401be","v-8a057d0e","v-7c8b712f","v-82489fa8","v-85f0d4ae","v-a771c2d6","v-0aadde11","v-b3f29962","v-54b9e083","v-878011d0","v-642ef93f","v-3c404aa4","v-4d6a3f9c","v-06ddb742","v-30eeccd7","v-49aa3013","v-9e4aad0a","v-b0c3df5e","v-01cc2cb7","v-775d7cfc","v-0e5f8376","v-8c9bce86","v-286cdfea","v-57b6d355","v-f1be8366","v-ae500f20","v-341a277e","v-1371a5e0","v-6cb46dea","v-1dd2927e","v-df2ead84","v-59928cb8","v-2facf8c6","v-39414800","v-803a1cf6","v-6bb7d9d7","v-7d5144d9","v-854e898e","v-6133de0a","v-42c56014","v-bff027a6","v-78262261","v-4e0c2eb4","v-a2653b98","v-b46fe358","v-a7b53186","v-58c6beb8","v-c3164d02","v-a7c8c312","v-19028540","v-1bc87b50","v-63cf80ea","v-737f0692","v-1287d625","v-15f18763","v-2f8a38b4","v-0d59f7b2","v-c9dd2d1e","v-f2be30ae","v-228ef4e8","v-5e89ec20","v-62499a8f","v-53371364","v-1409eb6a","v-74ebee8b","v-77e8ff07","v-f147e22c","v-4d166acf","v-67652140","v-6919f9df","v-595b3d04","v-312ceba7","v-b22962fc","v-e5b0ff26","v-3b0c610a","v-5740a672","v-78cf62e7","v-0e48a30d","v-985e8278","v-06c3e1bd","v-bb709114","v-042d394e","v-27278cdc","v-9f2ae8e0","v-3376838f","v-9b139d8e","v-f87bb1e8","v-184f4da6","v-2e3eac9e","v-17486eac","v-4e230683","v-20b9cb4a","v-06a095cd","v-66e23684","v-41f0a814","v-30097a28","v-36ef9bbe","v-967efbc0","v-eff713c6","v-82995f58","v-9e3033f2","v-ade64d4e","v-3beb415d","v-5b86497e","v-7c5381f3","v-ef5ccb4c","v-3ba080b8","v-20f9a11e","v-cd3ed248","v-91c422e8","v-47576740","v-28726463","v-5324f8a0","v-1b31a5a9","v-11d6f87d","v-e6e44498","v-63ad2822","v-0f247620","v-32651cc3","v-754f362f","v-7a5ee77a","v-1f4c1d3a","v-2a4505fe","v-40417720","v-1c3d68ae","v-037a4370","v-1fa756b3","v-2f48faf8","v-3315d0e0","v-2efa2eec","v-fa04251c","v-57c91382","v-776998ac","v-7d25ed06","v-068b0a7d","v-0e25c76d","v-27d8db0d","v-1e429e6d","v-f0a38fcc","v-372d329e","v-6ef62430","v-9ecc0baa","v-656e7253","v-4830b9aa","v-26921941","v-7d84eaa4","v-969c3194","v-2b666a30","v-7d8aa827","v-ee7e56ca","v-5dae7d96","v-fc27c22a","v-7df0baf2","v-dd94d254","v-057d80e2","v-f5b2d1e0","v-62622fc3","v-6e8b1d3c","v-7ae2b4b1","v-4dcea577","v-600108f7","v-fad3f3f0","v-4e01e632","v-4e1f5402","v-086d6fb5","v-7ba844ef","v-fa847f90","v-8f38c826","v-fdd48258","v-1367f1b6","v-092addfc","v-6728a523","v-11ecaece","v-2a262703","v-1e1efb82","v-5becdd94","v-facfbd30","v-0227e47e","v-11e686ec","v-7e42ef5c","v-6eea1650","v-425c99d0","v-0981e9a4","v-debe8af8","v-5460422c","v-1ff325e0","v-641c6293","v-a4b15ddc"]},"/en/":{path:"/en/timeline/",keys:[]}}},_=ref(categoryMap),k=(Q="")=>{const de=usePageData(),ue=useRouter(),pe=useRouteLocale();return computed(()=>{var ve;const me=Q||((ve=usePageFrontmatter().value.blog)==null?void 0:ve.key)||"";if(!me)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const _e=ue.getRoutes();if(!_.value[me])throw new Error(`useBlogCategory: key ${me} is invalid`);const he=_.value[me][pe.value],ge={path:he.path,map:{}};for(const fe in he.map){const be=he.map[fe];ge.map[fe]={path:be.path,items:[]};for(const Pe of be.keys){const we=_e.find(({name:De})=>De===Pe);if(we){const De=j(ue,we.path);ge.map[fe].items.push({path:De.path,info:De.meta})}}de.value.path===be.path&&(ge.currentItems=ge.map[fe].items)}return ge})},c=ref(typeMap),C=(Q="")=>{const de=useRouter(),ue=useRouteLocale();return computed(()=>{var pe;const ve=Q||((pe=usePageFrontmatter().value.blog)==null?void 0:pe.key)||"";if(!ve)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!c.value[ve])throw new Error(`useBlogType: key ${Q} is invalid`);const me=de.getRoutes(),_e=c.value[ve][ue.value],he={path:_e.path,items:[]};for(const ge of _e.keys){const fe=me.find(({name:be})=>be===ge);if(fe){const be=j(de,fe.path);he.items.push({path:be.path,info:be.meta})}}return he})},categoryMapSymbol=Symbol.for("categoryMap"),useCategoryMap=()=>{const Q=inject(categoryMapSymbol);if(!Q)throw new Error("useCategoryMap() is called without provider.");return Q},setupCategoryMap=()=>{const Q=k("category");provide(categoryMapSymbol,Q)},useBlogOptions=()=>{const Q=useThemeData(),de=useThemeLocaleData();return computed(()=>({...Q.value.blog,...de.value.blog}))},tagMapSymbol=Symbol.for("tagMap"),useTagMap=()=>{const Q=inject(tagMapSymbol);if(!Q)throw new Error("useTagMap() is called without provider.");return Q},setupTagMap=()=>{const Q=k("tag");provide(tagMapSymbol,Q)},useArticleAuthor=Q=>{const de=useThemeLocaleData();return computed(()=>{const{["a"]:ue}=Q.value;return ue?ke(ue):ue===!1?[]:ke(de.value.author,!1)})},useArticleCategory=Q=>{const de=useCategoryMap();return computed(()=>Se(Q.value.c).map(ue=>({name:ue,path:de.value.map[ue].path})))},useArticleTag=Q=>{const de=useTagMap();return computed(()=>xe(Q.value.g).map(ue=>({name:ue,path:de.value.map[ue].path})))},useArticleDate=Q=>computed(()=>{const{["d"]:de}=Q.value;return ye(de)}),useArticleInfo=Q=>{const de=toRef(Q,"info"),ue=useBlogOptions(),pe=useArticleAuthor(de),ve=useArticleCategory(de),me=useArticleTag(de),_e=useArticleDate(de),he=computed(()=>({author:pe.value,category:ve.value,date:_e.value,localizedDate:de.value.l||"",tag:me.value,isOriginal:de.value.o||!1,readingTime:de.value.r||null,pageview:Q.path})),ge=computed(()=>ue.value.articleInfo);return{info:he,items:ge}},articlesSymbol=Symbol(""),useArticles=()=>{const Q=inject(articlesSymbol);if(!Q)throw new Error("useArticles() is called without provider.");return Q},setupArticles=()=>{const Q=C("article");provide(articlesSymbol,Q)},starsSymbol=Symbol(""),useStars=()=>{const Q=inject(starsSymbol);if(!Q)throw new Error("useStars() is called without provider.");return Q},setupStars=()=>{const Q=C("star");provide(starsSymbol,Q)},timelinesSymbol=Symbol(""),useTimelines=()=>{const Q=inject(timelinesSymbol);if(!Q)throw new Error("useTimelines() is called without provider.");return Q},setupTimelines=()=>{const Q=C("timeline"),de=computed(()=>{const ue=[];return Q.value.items.forEach(({info:pe,path:ve})=>{const me=ye(pe.d),_e=me==null?void 0:me.getFullYear(),he=me?me.getMonth()+1:null,ge=me==null?void 0:me.getDate();_e&&he&&ge&&((!ue[0]||ue[0].year!==_e)&&ue.unshift({year:_e,items:[]}),ue[0].items.push({date:`${he}/${ge}`,info:pe,path:ve}))}),{...Q.value,config:ue.reverse()}});provide(timelinesSymbol,de)},setupBlog=()=>{setupArticles(),setupCategoryMap(),setupStars(),setupTagMap(),setupTimelines()},socialMedia="",SocialMedia=defineComponent({name:"SocialMedia",setup(){const Q=useBlogOptions(),de=usePure(),ue=computed(()=>{const pe=Q.value.medias;return pe?$$1(pe).map(([ve,me])=>({name:ve,icon:icons[ve],url:me})):[]});return()=>ue.value.length?h$2("div",{class:"social-media-wrapper"},ue.value.map(({name:pe,icon:ve,url:me})=>h$2("a",{class:"social-media",href:me,rel:"noopener noreferrer",target:"_blank","aria-label":pe,...de.value?{}:{"data-balloon-pos":"up"},innerHTML:ve}))):null}}),bloggerInfo="",BloggerInfo=defineComponent({name:"BloggerInfo",setup(){const Q=useBlogOptions(),de=useSiteLocaleData(),ue=useThemeLocaleData(),pe=useArticles(),ve=useCategoryMap(),me=useTagMap(),_e=useTimelines(),he=useNavigate(),ge=computed(()=>{var we;return Q.value.name||((we=ke(ue.value.author)[0])==null?void 0:we.name)||de.value.title}),fe=computed(()=>Q.value.avatar||ue.value.logo),be=computed(()=>ue.value.blogLocales),Pe=computed(()=>Q.value.intro);return()=>h$2("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[h$2("div",{class:"blogger",...Pe.value?{style:{cursor:"pointer"},"aria-label":be.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>he(Pe.value)}:{}},[fe.value?h$2("img",{class:["blogger-avatar",{round:Q.value.roundAvatar}],src:withBase(fe.value),property:"image",alt:"Blogger Avatar"}):null,ge.value?h$2("div",{class:"blogger-name",property:"name"},ge.value):null,Q.value.description?h$2("div",{class:"blogger-description",innerHTML:Q.value.description}):null,Pe.value?h$2("meta",{property:"url",content:withBase(Pe.value)}):null]),h$2("div",{class:"num-wrapper"},[h$2("div",{onClick:()=>he(pe.value.path)},[h$2("div",{class:"num"},pe.value.items.length),h$2("div",be.value.article)]),h$2("div",{onClick:()=>he(ve.value.path)},[h$2("div",{class:"num"},h$1(ve.value.map).length),h$2("div",be.value.category)]),h$2("div",{onClick:()=>he(me.value.path)},[h$2("div",{class:"num"},h$1(me.value.map).length),h$2("div",be.value.tag)]),h$2("div",{onClick:()=>he(_e.value.path)},[h$2("div",{class:"num"},_e.value.items.length),h$2("div",be.value.timeline)])]),h$2(SocialMedia)])}}),CategoryIcon=()=>h$2(c$3,{name:"category"},()=>h$2("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon.displayName="CategoryIcon";const TagIcon=()=>h$2(c$3,{name:"tag"},()=>h$2("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon.displayName="TagIcon";const TimelineIcon=()=>h$2(c$3,{name:"timeline"},()=>h$2("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));TimelineIcon.displayName="TimelineIcon";const SlideIcon=()=>h$2(c$3,{name:"slides"},()=>h$2("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));SlideIcon.displayName="SlideIcon";const StickyIcon=()=>h$2(c$3,{name:"sticky"},()=>[h$2("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);StickyIcon.displayName="StickyIcon";const ArticleIcon=()=>h$2(c$3,{name:"article"},()=>h$2("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ArticleIcon.displayName="ArticleIcon";const BookIcon=()=>h$2(c$3,{name:"book"},()=>h$2("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));BookIcon.displayName="BookIcon";const LinkIcon=()=>h$2(c$3,{name:"link"},()=>h$2("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));LinkIcon.displayName="LinkIcon";const ProjectIcon=()=>h$2(c$3,{name:"project"},()=>h$2("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ProjectIcon.displayName="ProjectIcon";const FriendIcon=()=>h$2(c$3,{name:"friend"},()=>h$2("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));FriendIcon.displayName="FriendIcon";const SlideDownIcon=()=>h$2(c$3,{name:"slide-down"},()=>h$2("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));SlideDownIcon.displayName="SlideDownIcon";const emptyIcon="",EmptyIcon=()=>h$2("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});EmptyIcon.displayName="EmptyIcon";const LockIcon=()=>h$2(c$3,{name:"lock"},()=>h$2("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));LockIcon.displayName="LockIcon";const articleItem="",ArticleItem=defineComponent({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(Q){const de=toRef(Q,"info"),{info:ue,items:pe}=useArticleInfo(Q);return()=>h$2("div",{class:"article-item"},h$2("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[de.value.u?h$2(StickyIcon):null,h$2(RouterLink,{to:Q.path},()=>[h$2("header",{class:"title"},[de.value.n?h$2(LockIcon):null,de.value.y==="s"?h$2(SlideIcon):null,h$2("span",{property:"headline"},de.value.t),de.value.v?h$2("meta",{property:"image",content:withBase(de.value.v)}):null])]),de.value.e?h$2("div",{class:"article-excerpt",innerHTML:de.value.e}):null,h$2("hr",{class:"hr"}),h$2(PageInfo,{info:ue.value,...pe.value?{items:pe.value}:{}})]))}}),message="",pagination="",Pagination=defineComponent({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(Q,{emit:de}){let ue;const pe=useThemeLocaleData(),ve=ref(""),me=computed(()=>pe.value.paginationLocales),_e=computed(()=>Math.ceil(Q.total/Q.perPage)),he=computed(()=>Boolean(_e.value)&&_e.value!==1),ge=computed(()=>_e.value<7?!1:Q.current>4),fe=computed(()=>_e.value<7?!1:Q.current<_e.value-3),be=computed(()=>{const{current:De}=Q;let Ce=1,Oe=_e.value;const Re=[];_e.value>=7&&(De<=4&&De<_e.value-3?(Ce=1,Oe=5):De>4&&De>=_e.value-3?(Oe=_e.value,Ce=_e.value-4):_e.value>7&&(Ce=De-2,Oe=De+2));for(let Ve=Ce;Ve<=Oe;Ve++)Re.push(Ve);return Re}),Pe=De=>de("updateCurrentPage",De),we=De=>{const Ce=parseInt(De);Ce<=_e.value&&Ce>0?Pe(Ce):ue.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${me.value.errorText.replace(/\$page/g,_e.value.toString())}`)};return onMounted(()=>{ue=new Ne}),()=>h$2("div",{class:"pagination-wrapper"},he.value?h$2("div",{class:"pagination-list"},[h$2("div",{class:"page-number"},[Q.current>1?h$2("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>Pe(Q.current-1)},me.value.prev):null,...ge.value?[h$2("div",{role:"navigation",onClick:()=>Pe(1)},1),h$2("div",{class:"ellipsis"},"...")]:[],...be.value.map(De=>h$2("div",{key:De,class:{active:Q.current===De},role:"navigation",onClick:()=>Pe(De)},De)),...fe.value?[h$2("div",{class:"ellipsis"},"..."),h$2("div",{role:"navigation",onClick:()=>Pe(_e.value)},_e.value)]:[],Q.current<_e.value?h$2("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>Pe(Q.current+1)},me.value.next):null]),h$2("div",{class:"navigate-wrapper"},[h$2("label",{for:"navigation-text"},`${me.value.navigate}: `),h$2("input",{id:"navigation-text",value:ve.value,onInput:({target:De})=>{ve.value=De.value},onKeydown:De=>{De.key==="Enter"&&(De.preventDefault(),we(ve.value))}}),h$2("button",{class:"navigate",role:"navigation",title:me.value.action,onClick:()=>we(ve.value)},me.value.action)])]):[])}}),articleList="",ArticleList=defineComponent({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(Q){const de=useRoute(),ue=useRouter(),pe=useBlogOptions(),ve=ref(1),me=computed(()=>pe.value.articlePerPage||10),_e=computed(()=>Q.items.slice((ve.value-1)*me.value,ve.value*me.value)),he=ge=>{ve.value=ge;const fe={...de.query};fe.page===ge.toString()||ge===1&&!fe.page||(ge===1?delete fe.page:fe.page=ge.toString(),ue.push({path:de.path,query:fe}))};return onMounted(()=>{const{page:ge}=de.query;he(ge?Number(ge):1),watch(ve,()=>{const fe=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,fe)},100)})}),()=>h$2("div",{id:"article-list",class:"article-wrapper"},_e.value.length?[..._e.value.map(({info:ge,path:fe},be)=>h$2(DropTransition,{appear:!0,delay:be*.04},()=>h$2(ArticleItem,{key:fe,info:ge,path:fe}))),h$2(Pagination,{current:ve.value,perPage:me.value,total:Q.items.length,onUpdateCurrentPage:he})]:h$2(EmptyIcon))}}),categoryList="",CategoryList=defineComponent({name:"CategoryList",setup(){const Q=usePageData(),de=useCategoryMap();return()=>h$2("ul",{class:"category-list-wrapper"},$$1(de.value.map).map(([ue,{path:pe,items:ve}])=>h$2("li",{class:["category",`category${Ee(ue,9)}`,{active:pe===Q.value.path}]},h$2(RouterLink,{to:pe},()=>[ue,h$2("span",{class:"category-num"},ve.length)]))))}}),tagList="",TagList=defineComponent({name:"TagList",setup(){const Q=usePageFrontmatter(),de=useTagMap(),ue=pe=>{var ve;return pe===((ve=Q.value.blog)==null?void 0:ve.name)};return()=>h$2("ul",{class:"tag-list-wrapper"},$$1(de.value.map).map(([pe,{path:ve,items:me}])=>h$2("li",{class:["tag",`tag${Ee(pe,9)}`,{active:ue(pe)}]},h$2(RouterLink,{to:ve},()=>[pe,h$2("span",{class:"tag-num"},me.length)]))))}}),timelineList="",TimelineList=defineComponent({name:"TimelineList",setup(){const Q=useThemeLocaleData(),de=useTimelines(),ue=useNavigate(),pe=computed(()=>Q.value.blogLocales.timeline);return()=>h$2("div",{class:"timeline-list-wrapper"},[h$2("div",{class:"timeline-list-title",onClick:()=>ue(de.value.path)},[h$2(TimelineIcon),h$2("span",{class:"num"},de.value.items.length),pe.value]),h$2("hr"),h$2("div",{class:"timeline-content"},h$2("ul",{class:"timeline-list"},de.value.config.map(({year:ve,items:me},_e)=>h$2(DropTransition,{appear:!0,delay:.08*(_e+1)},()=>h$2("li",[h$2("h3",{class:"timeline-year"},ve),h$2("ul",{class:"timeline-year-wrapper"},me.map(({date:he,info:ge,path:fe})=>h$2("li",{class:"timeline-item"},[h$2("span",{class:"timeline-date"},he),h$2(RouterLink,{class:"timeline-title",to:fe},()=>ge.t)])))])))))])}}),infoList="",InfoList=defineComponent({name:"InfoList",setup(){const Q=useThemeLocaleData(),de=useArticles(),ue=useCategoryMap(),pe=computed(()=>h$1(ue.value.map).length),ve=useStars(),me=useTagMap(),_e=computed(()=>h$1(me.value.map).length),he=useNavigate(),ge=ref("article"),fe=computed(()=>Q.value.blogLocales),be=[["article",ArticleIcon],["category",CategoryIcon],["tag",TagIcon],["timeline",TimelineIcon]];return()=>h$2("div",{class:"blog-info-list"},[h$2("div",{class:"blog-type-wrapper"},be.map(([Pe,we])=>h$2("button",{type:"button",class:"blog-type-button",onClick:()=>{ge.value=Pe}},h$2("div",{class:["icon-wrapper",{active:ge.value===Pe}],"aria-label":fe.value[Pe],"data-balloon-pos":"up"},h$2(we))))),h$2(DropTransition,()=>ge.value==="article"?h$2("div",{class:"sticky-article-wrapper"},[h$2("div",{class:"title",onClick:()=>he(de.value.path)},[h$2(ArticleIcon),h$2("span",{class:"num"},de.value.items.length),fe.value.article]),h$2("hr"),h$2("ul",{class:"sticky-article-list"},ve.value.items.map(({info:Pe,path:we},De)=>h$2(DropTransition,{appear:!0,delay:.08*(De+1)},()=>h$2("li",{class:"sticky-article"},h$2(RouterLink,{to:we},()=>Pe.t)))))]):ge.value==="category"?h$2("div",{class:"category-wrapper"},[pe.value?h$2("div",{class:"title",onClick:()=>he(ue.value.path)},[h$2(CategoryIcon),h$2("span",{class:"num"},pe.value),fe.value.category]):null,h$2("hr"),h$2(DropTransition,{delay:.04},()=>h$2(CategoryList))]):ge.value==="tag"?h$2("div",{class:"tag-wrapper"},[_e.value?h$2("div",{class:"title",onClick:()=>he(me.value.path)},[h$2(TagIcon),h$2("span",{class:"num"},_e.value),fe.value.tag]):null,h$2("hr"),h$2(DropTransition,{delay:.04},()=>h$2(TagList))]):h$2(DropTransition,()=>h$2(TimelineList)))])}}),page="",BlogWrapper=defineComponent({name:"BlogWrapper",setup(Q,{slots:de}){const{isMobile:ue}=useWindowSize();return()=>[h$2(SkipLink),h$2(CommonWrapper,{noSidebar:!0},{default:()=>{var pe;return(pe=de.default)==null?void 0:pe.call(de)},navScreenBottom:()=>h$2(BloggerInfo),...ue.value?{sidebar:()=>h$2(InfoList)}:{}})]}}),infoPanel="",InfoPanel=()=>h$2("aside",{class:"blog-info-wrapper"},[h$2(DropTransition,()=>h$2(BloggerInfo)),h$2(DropTransition,{delay:.04},()=>h$2(InfoList))]);InfoPanel.displayName="InfoPanel";const BlogCategory=defineComponent({name:"BlogPage",components:{CategoryList,TagList},setup(){const Q=usePageData(),de=usePageFrontmatter(),ue=useCategoryMap(),pe=useTagMap(),ve=computed(()=>de.value.blog||{}),me=computed(()=>{const{key:he=""}=ve.value;return he==="category"?"CategoryList":he==="tag"?"TagList":null}),_e=computed(()=>{const{name:he="",key:ge=""}=ve.value;return ge==="category"?he?ue.value.map[he].items:[]:ge==="tag"?he?pe.value.map[he].items:[]:[]});return()=>h$2(BlogWrapper,()=>h$2("div",{class:"page blog"},h$2("div",{class:"blog-page-wrapper"},[h$2("main",{class:"blog-main",id:"main-content"},[h$2(DropTransition,()=>me.value?h$2(resolveComponent(me.value)):null),ve.value.name?h$2(DropTransition,{appear:!0,delay:.24},()=>h$2(ArticleList,{key:Q.value.path,items:_e.value})):null]),h$2(DropTransition,{delay:.16},()=>h$2(InfoPanel))])))}}),defaultHeroBgImagePath="/assets/hero-197a9d2d.jpg",blogHero="",BlogHero=defineComponent({name:"BlogHero",setup(){const Q=usePageHeadTitle(),de=usePageFrontmatter(),ue=ref(),pe=computed(()=>de.value.heroImage||null),ve=computed(()=>de.value.heroFullScreen||!1),me=computed(()=>{const{bgImage:_e}=de.value;return isString$1(_e)?withBase(_e):_e===!1?null:defaultHeroBgImagePath});return()=>de.value.hero===!1?null:h$2("div",{ref:ue,class:["blog-hero",{fullscreen:ve.value,"no-bg":!me.value}]},[me.value?h$2("div",{class:"mask",style:[{background:`url(${me.value}) center/cover no-repeat`},de.value.bgImageStyle]}):null,h$2(DropTransition,{appear:!0,delay:.04},()=>pe.value?h$2("img",{class:"hero-image",style:de.value.heroImageStyle,src:withBase(pe.value),alt:de.value.heroAlt||"hero image"}):null),h$2(DropTransition,{appear:!0,delay:.08},()=>de.value.heroText===!1?null:h$2("h1",de.value.heroText||Q.value)),h$2(DropTransition,{appear:!0,delay:.12},()=>de.value.tagline?h$2("p",{class:"description",innerHTML:de.value.tagline}):null),ve.value?h$2("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:ue.value.clientHeight,behavior:"smooth"})}},[h$2(SlideDownIcon),h$2(SlideDownIcon)]):null])}}),projectPanel="",AVAILABLE_PROJECT_TYPES=["link","article","book","project","friend"],ProjectPanel=defineComponent({name:"ProjectPanel",components:{ArticleIcon,BookIcon,FriendIcon,LinkIcon,ProjectIcon},setup(){const Q=usePageFrontmatter(),de=usePure(),ue=useNavigate(),pe=(ve="",me="icon")=>AVAILABLE_PROJECT_TYPES.includes(ve)?h$2(resolveComponent(`${ve}-icon`)):isLinkHttp(ve)?h$2("img",{src:ve,alt:me,class:"image"}):ze(ve)?h$2("img",{src:withBase(ve),alt:me,class:"image"}):h$2(HopeIcon,{icon:ve});return()=>{var ve;return(ve=Q.value.projects)!=null&&ve.length?h$2("div",{class:"project-panel"},Q.value.projects.map(({icon:me,link:_e,name:he,desc:ge},fe)=>h$2("div",{class:["project",{[`project${fe%9}`]:!de.value}],onClick:()=>ue(_e)},[pe(me,he),h$2("div",{class:"name"},he),h$2("div",{class:"desc"},ge)]))):null}}}),home="",BlogHome$1=defineComponent({name:"BlogHome",setup(){const Q=useArticles();return()=>h$2("div",{class:"page blog"},[h$2(BlogHero),h$2("div",{class:"blog-page-wrapper"},[h$2("main",{class:"blog-home",id:"main-content"},[h$2(DropTransition,{appear:!0,delay:.16},()=>h$2(ProjectPanel)),h$2(DropTransition,{appear:!0,delay:.24},()=>h$2(ArticleList,{items:Q.value.items}))]),h$2(DropTransition,{appear:!0,delay:.16},()=>h$2(InfoPanel))]),h$2(DropTransition,{appear:!0,delay:.28},()=>h$2(MarkdownContent))])}}),BlogHome=defineComponent({name:"BlogHome",setup(){return()=>h$2(BlogWrapper,()=>h$2(BlogHome$1))}}),articleType="",ArticleType=defineComponent({name:"ArticleType",setup(){const Q=usePageData(),de=useRouteLocale(),ue=useThemeLocaleData(),pe=useArticles(),ve=useStars(),me=computed(()=>{const _e=ue.value.blogLocales;return[{text:_e.all,path:pe.value.path},{text:_e.star,path:ve.value.path},...[].map(({key:he,path:ge})=>({text:_e[he],path:ge.replace(/^\//,de.value)}))]});return()=>h$2("ul",{class:"article-type-wrapper"},me.value.map(_e=>h$2("li",{class:["article-type",{active:_e.path===Q.value.path}]},h$2(RouterLink,{to:_e.path},()=>_e.text))))}}),BlogType=defineComponent({name:"BlogPage",setup(){const Q=C(),de=usePageFrontmatter(),ue=usePageData(),pe=useArticles(),ve=useStars(),me=computed(()=>{const{key:_e="",type:he}=de.value.blog||{};return _e==="star"?ve.value.items:he==="type"&&_e?Q.value.items:pe.value.items});return()=>h$2(BlogWrapper,()=>h$2("div",{class:"page blog"},h$2("div",{class:"blog-page-wrapper"},[h$2("main",{class:"blog-main",id:"main-content"},[h$2(DropTransition,()=>h$2(ArticleType)),h$2(DropTransition,{appear:!0,delay:.24},()=>h$2(ArticleList,{key:ue.value.path,items:me.value}))]),h$2(DropTransition,{delay:.16},()=>h$2(InfoPanel))])))}}),timelineItems="",TimelineItems=defineComponent({name:"TimelineItems",setup(){const Q=useBlogOptions(),de=useThemeLocaleData(),ue=useTimelines(),pe=computed(()=>Q.value.timeline||de.value.blogLocales.timelineTitle),ve=computed(()=>ue.value.config.map(({year:me})=>({title:me.toString(),level:2,slug:me.toString(),children:[]})));return()=>h$2("div",{class:"timeline-wrapper"},h$2("ul",{class:"timeline-content"},[h$2(DropTransition,()=>h$2("li",{class:"motto"},pe.value)),h$2(TOC,{items:ve.value}),...ue.value.config.map(({year:me,items:_e},he)=>h$2(DropTransition,{appear:!0,delay:.08*(he+1),type:"group"},()=>[h$2("h3",{key:"title",id:me,class:"timeline-year-title"},h$2("span",me)),h$2("li",{key:"content",class:"timeline-year-list"},[h$2("ul",{class:"timeline-year-wrapper"},_e.map(({date:ge,info:fe,path:be})=>h$2("li",{class:"timeline-item"},[h$2("span",{class:"timeline-date"},ge),h$2(RouterLink,{class:"timeline-title",to:be},()=>fe.t)])))])]))]))}}),Timeline=defineComponent({name:"Timeline",components:{ArticleType,CategoryList,TagList},setup(){return()=>h$2(BlogWrapper,()=>h$2("div",{class:"page blog"},h$2("div",{class:"blog-page-wrapper"},[h$2("main",{class:"blog-main",id:"main-content"},[h$2(DropTransition,{appear:!0,delay:.24},()=>h$2(TimelineItems))]),h$2(DropTransition,{delay:.16},()=>h$2(InfoPanel))])))}}),layout="",slidePage="";var d=defineComponent({name:"SlidePage",setup(){const Q=useRouter(),de=ref(!1),ue=ref(),pe=()=>{de.value=!de.value},ve=()=>{de.value=!1},me=()=>{ve(),window.history.go(-1)},_e=()=>{ve(),Q.push("/")};return onClickOutside(ue,ve),()=>h$2("div",{class:"presentation"},[h$2(Content),h$2("div",{ref:ue,class:["menu",{active:de.value}]},[h$2("button",{type:"button",class:"menu-button",onClick:()=>pe()},h$2("span",{class:"icon"})),h$2("button",{type:"button",class:"back-button",onClick:()=>me()},h$2(q$1)),h$2("button",{type:"button",class:"home-button",onClick:()=>_e()},h$2(a$1))])])}});const index="",clientConfig10=defineClientConfig({enhance:({app:Q,router:de})=>{const{scrollBehavior:ue}=de.options;de.options.scrollBehavior=async(...pe)=>(await useScrollPromise().wait(),ue(...pe)),injectDarkmode(Q),Q.component("HopeIcon",HopeIcon),Q.component("BloggerInfo",BloggerInfo)},setup:()=>{setupDarkmode(),setupSidebarItems(),setupBlog()},layouts:{Layout,NotFound,BlogCategory,BlogHome,BlogType,Timeline,Slide:d}}),clientConfigs=[clientConfig0,clientConfig1,clientConfig2,K$1,clientConfig4,clientConfig5,clientConfig6,Y$1,clientConfig8,I,clientConfig10],pagesRoutes=[["v-8daa1a0e","/",{y:"h",t:"主页",i:"home"},["/index.html","/README.md"]],["v-184f4da6","/intro.html",{d:1680667661e3,e:`<h1> Intro Page</h1>
<p>Place your introduction and profile here.</p>
`,r:{minutes:.03,words:10},y:"a",t:"Intro Page",i:"info"},["/intro","/intro.md"]],["v-2e3eac9e","/slides.html",{d:1680667661e3,e:`<!-- markdownlint-disable MD024 MD033 MD051 -->
`,r:{minutes:3.24,words:971},y:"s",t:"Slide page",i:"slides"},["/slides","/slides.md"]],["v-f87bb1e8","/deeplearning/",{d:1680837802e3,u:9,e:`<h2> DDP</h2>
<ul>
<li><a href="/deeplearning/ddpTest.html" target="blank">DDP TEST</a></li>
</ul>
`,r:{minutes:.05,words:15},y:"a",t:"深度学习",i:"study"},["/deeplearning/index.html","/deeplearning/README.md"]],["v-4e230683","/deeplearning/ddpTest.html",{d:16574976e5,l:"2022年7月11日",c:["深度学习"],g:["DDP"],e:`<h1> DDP Test</h1>
<ol>
<li>DDP每张卡计算特征</li>
<li>把每张卡返回的结果进行gather，返回List列表</li>
<li>把gather的结果放在主卡用于指标评估</li>
</ol>
<p>gather代码如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def all_gather(data):
    """
    Run all_gather on arbitrary picklable data (not necessarily tensors)
    Args:
        data: any picklable object
    Returns:
        list[data]: list of data gathered from each rank
    """
    world_size = comm.world_size
    if world_size == 1:
        return [data]

    # serialized to a Tensor
    buffer = pickle.dumps(data)
    storage = torch.ByteStorage.from_buffer(buffer)
    tensor = torch.ByteTensor(storage).to("cuda")

    # obtain Tensor size of each rank
    local_size = torch.LongTensor([tensor.numel()]).to("cuda")
    size_list = [torch.LongTensor([0]).to("cuda") for _ in range(world_size)]
    dist.all_gather(size_list, local_size)
    size_list = [int(size.item()) for size in size_list]
    max_size = max(size_list)

    # receiving Tensor from all ranks
    # we pad the tensor because torch all_gather does not support
    # gathering tensors of different shapes
    tensor_list = []
    for _ in size_list:
        tensor_list.append(torch.ByteTensor(size=(max_size,)).to("cuda"))
    if local_size != max_size:
        padding = torch.ByteTensor(size=(max_size - local_size,)).to("cuda")
        tensor = torch.cat((tensor, padding), dim=0)
    dist.all_gather(tensor_list, tensor)

    data_list = []
    for size, tensor in zip(size_list, tensor_list):
        buffer = tensor.cpu().numpy().tobytes()[:size]
        data_list.append(pickle.loads(buffer))

    return data_list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.71,words:214},y:"a",t:"DDP Test",i:"edit"},["/deeplearning/ddpTest","/deeplearning/ddpTest.md"]],["v-639495b8","/tutorial/",{d:1681181241e3,u:20,e:`<p>此处是一些教程收藏，部分为直接搬运，部位为自助整理。</p>
`,r:{minutes:.64,words:191},y:"a",t:"教程目录",i:"study"},["/tutorial/index.html","/tutorial/README.md"]],["v-20b9cb4a","/develop/linux/firewalld.html",{d:1652832e6,l:"2022年5月18日",c:["常用工具"],g:["firewalld","iptables"],e:`<h1> 防火墙（firewalld、iptables）的使用</h1>
<h2> 防火墙（firewalld、iptables）</h2>
<blockquote>
<p>推荐使用iptables，并关闭系统默认的firewalld。</p>
</blockquote>
<ol>
<li><strong>关闭firewalld防火墙和开机自启动</strong></li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.39,words:117},y:"a",t:"防火墙（firewalld、iptables）的使用",i:"edit"},["/develop/linux/firewalld","/develop/linux/firewalld.md"]],["v-06a095cd","/develop/linux/linuxCMD.html",{d:1652832e6,l:"2022年5月18日",c:["常用工具"],g:["linux"],e:`<h1> Liunx常用命令</h1>
<blockquote>
<p>不断更新中...</p>
</blockquote>
<h2> 复制（可看进度）</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync -av --progress /root/vox2_dev_wav.zip /dockerdata/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.6,words:181},y:"a",t:"Liunx常用命令",i:"edit"},["/develop/linux/linuxCMD","/develop/linux/linuxCMD.md"]],["v-66e23684","/develop/tools/dockerCMD.html",{d:1652832e6,l:"2022年5月18日",c:["常用工具"],g:["docker"],e:`<h1> Docker常用操作命令</h1>
<p><strong>1. 拉取镜像</strong>（如拉取 Halo 镜像）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull halohub/halo:1.5.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 创建一个新的容器并运行。</strong></p>`,r:{minutes:2.06,words:618},y:"a",t:"Docker常用操作命令",i:"edit"},["/develop/tools/dockerCMD","/develop/tools/dockerCMD.md"]],["v-17486eac","/develop/tools/dockerMake.html",{d:16612992e5,l:"2022年8月24日",c:["常用工具"],g:["docker"],e:`<h1> Docker镜像制作</h1>
<h2> 推荐方法：启动容器，在容器中配好所有环境，再把容器到出成镜像</h2>
<ol>
<li>启动容器：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -d --name demo mirrors.tencent.com/ailab_sv/ubuntu18.04:conda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:3.6,words:1081},y:"a",t:"Docker镜像制作",i:"edit"},["/develop/tools/dockerMake","/develop/tools/dockerMake.md"]],["v-41f0a814","/develop/tools/frp.html",{d:1652832e6,l:"2022年5月18日",c:["常用工具"],g:["frp"],e:`<h1> frp内网穿透</h1>
<h2> 内网穿透（frp）教程，分为云服务器端（frps）和本地电脑端（frpc）</h2>
<blockquote>
<p>留意<strong>7000和7500</strong>端口要开放<strong>安全组和防火墙</strong>。配置防火墙可参考<a href="https://blog.yiweiding.cn/archives/%E9%98%B2%E7%81%AB%E5%A2%99firewalldiptables%E7%9A%84%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">此处</a></p>
</blockquote>`,r:{minutes:.57,words:171},y:"a",t:"frp内网穿透",i:"edit"},["/develop/tools/frp","/develop/tools/frp.md"]],["v-24c105bc","/tutorial/front-end/READMD.html",{d:1681181241e3,u:20,e:"目录 前端开发 网站相关 (website/README.md); 小程序 (mini-app/README.md); Vue (vue/README.md); React (react/README.md); Angular (angular/README.md); Node.js (node-js/README.md);",r:{minutes:.12,words:37},y:"a",t:"目录",i:"study"},["/tutorial/front-end/READMD","/tutorial/front-end/READMD.md"]],["v-04ca4ab7","/tutorial/ops/READMD.html",{d:1681181241e3,u:20,e:"目录 运维工具 Linux (linux/README.md); Git (git/README.md); Markdown (markdown/README.md);",r:{minutes:.08,words:24},y:"a",t:"目录",i:"study"},["/tutorial/ops/READMD","/tutorial/ops/READMD.md"]],["v-eff713c6","/tutorial/front-end/angular/",{d:15887232e5,l:"2020年5月6日",c:"前端",g:["Angular"],e:`<p>Angular 是 Google 官方在 2016 年 9 月出品的一款框架。</p>
<p>框架强制 Typescript，更倾向于大型项目。</p>
`,r:{minutes:1.44,words:431},y:"a",t:"Angular",i:"angular"},["/tutorial/front-end/angular/index.html","/tutorial/front-end/angular/README.md"]],["v-82995f58","/tutorial/front-end/mini-app/",{d:157464e7,l:"2019年11月25日",c:"小程序",e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在开发小程序之前。应当掌握 <a href="/tutorial/front-end/website/html/" target="blank">HTML</a>、<a href="/tutorial/front-end/website/css/" target="blank">CSS</a>、<a href="/tutorial/front-end/language/js/guide/" target="blank">JavaScript 基础</a> 以及 <a href="/tutorial/front-end/language/js/es6/" target="blank">ES6</a>。</p>
</div>
`,r:{minutes:2.62,words:786},y:"a",t:"小程序",i:"mini-app"},["/tutorial/front-end/mini-app/index.html","/tutorial/front-end/mini-app/README.md"]],["v-4501a698","/tutorial/front-end/mini-app/qr-code.html",{d:1681181241e3,c:"小程序",e:`<h2> 二维码生成</h2>
<p>目前小程序二维码生成选用的是<a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html" target="_blank" rel="noopener noreferrer">无限制生成二维码</a>。</p>
<p>我们使用 Postman 软件进行二维码的获取。</p>
<h3> 调用凭据获取</h3>
<p>获取任何二维码都需要先获取 <code>access_token</code>，这是小程序全局唯一后台接口调用凭据。<a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html" target="_blank" rel="noopener noreferrer">文档地址</a></p>`,r:{minutes:1.1,words:329},y:"a",t:"小程序分享",i:"share"},["/tutorial/front-end/mini-app/qr-code","/tutorial/front-end/mini-app/qr-code.md"]],["v-0585156a","/tutorial/front-end/node-js/",{d:1681181241e3,c:"Node.js",g:["Node.js","软件"],e:`<p>Node.js 是一款全球使用广泛的框架，可以用在前端与后端上，拥有大量的模块。Node.js 主要以其丰富并及其容易导入的 Node.js package，以及其方便管理 npm (Node.js Package Manager)闻名。</p>
`,r:{minutes:1.17,words:352},y:"a",t:"Node.js",i:"nodeJS"},["/tutorial/front-end/node-js/index.html","/tutorial/front-end/node-js/README.md"]],["v-01646db8","/tutorial/front-end/node-js/cjs.html",{d:1681181241e3,c:"Node.js",g:["Node.js","软件"],e:`<p>在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。</p>
<p>为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Node.js 环境中，一个 <code>.js</code> 文件就称之为一个模块(module)。</p>
<p>使用模块有什么好处?</p>
<p>最大的好处是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括 Node.js 内置的模块和来自第三方的模块。</p>
<p>使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。</p>
`,r:{minutes:7.41,words:2222},y:"a",t:"模块",i:"module"},["/tutorial/front-end/node-js/cjs","/tutorial/front-end/node-js/cjs.md"]],["v-46aae1f1","/tutorial/front-end/node-js/environment.html",{d:1681181241e3,c:"Node.js",g:["Node.js","软件"],e:`<p>由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: <strong>Visual Studio Code</strong>。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。</p>
`,r:{minutes:1.16,words:347},y:"a",t:"搭建 Node 开发环境",i:"leaf",O:3},["/tutorial/front-end/node-js/environment","/tutorial/front-end/node-js/environment.md"]],["v-42b240e9","/tutorial/front-end/node-js/install.html",{d:1681181241e3,c:"Node.js",g:["Node.js","软件","安装"],e:`<p>由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node.js 环境。</p>
`,r:{minutes:4.13,words:1239},y:"a",t:"安装 Node.js",i:"install",O:2},["/tutorial/front-end/node-js/install","/tutorial/front-end/node-js/install.md"]],["v-7c2edd10","/tutorial/front-end/node-js/intro.html",{d:1681181241e3,c:"Node.js",g:["Node.js","软件","介绍"],e:`<p>从本章开始，我们就正式开启 JavaScript 的后端开发之旅。</p>
<p>Node.js 是目前非常火热的技术，但是它的诞生经历却很奇特。</p>
`,r:{minutes:4.18,words:1254},y:"a",t:"Node.js",i:"creative",O:1},["/tutorial/front-end/node-js/intro","/tutorial/front-end/node-js/intro.md"]],["v-154571a0","/tutorial/front-end/node-js/program.html",{d:1681181241e3,c:"Node.js",g:["Node.js","软件"],e:`<p>在前面的所有章节中，我们编写的 JavaScript 代码都是在浏览器中运行的，因此，我们可以直接在浏览器中敲代码，然后直接运行。</p>
<p>从本章开始，我们编写的 JavaScript 代码将不能在浏览器环境中执行了，而是在 Node.js 环境中执行，因此，JavaScript 代码将直接在您的计算机上以命令行的方式运行，所以，我们要先选择一个文本编辑器来编写 JavaScript 代码，并且把它保存到本地硬盘的某个目录，才能够执行。</p>
`,r:{minutes:3.94,words:1182},y:"a",t:"第一个 Node 程序",i:"shell"},["/tutorial/front-end/node-js/program","/tutorial/front-end/node-js/program.md"]],["v-967efbc0","/tutorial/front-end/react/",{d:1588896e6,l:"2020年5月8日",c:"前端",g:["网页","React"],e:`<h2> 创建 React 项目</h2>
<p>使用 <code>create-react-app</code> 工具。</p>
<p>创建普通模板:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx create-react-app xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 TS 模板:</p>`,r:{minutes:.23,words:69},y:"a",t:"React",i:"react"},["/tutorial/front-end/react/index.html","/tutorial/front-end/react/README.md"]],["v-f4af920e","/tutorial/front-end/vue/",{d:1681181241e3,c:"Vue",e:`<h2> 简介</h2>
<p>Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</p>
<h2> 渐进式框架</h2>
<p>Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：</p>`,r:{minutes:1.42,words:425},y:"a",t:"Vue.js",i:"vue"},["/tutorial/front-end/vue/index.html","/tutorial/front-end/vue/README.md"]],["v-231456e6","/tutorial/front-end/vue/compare.html",{d:1681181241e3,c:"Vue",g:["Vue","小程序","对比"],e:"优缺点比较 优点 缺点 ------ --------------------------------------------------------------------------------------------------------------------------------------------------------------...",r:{minutes:3.09,words:928},y:"a",t:"Vue 与小程序的异同",i:"compare"},["/tutorial/front-end/vue/compare","/tutorial/front-end/vue/compare.md"]],["v-debe8af8","/tutorial/front-end/website/",{d:1567296e6,l:"2019年9月1日",c:"前端",g:["网页","介绍"],e:`<p>网页需要三件套: <strong>HTML</strong>、<strong>CSS</strong> 和 <strong>JavaScript</strong>。</p>
<ol>
<li>HTML 定义了网页的内容</li>
<li>CSS 描述了网页的样式</li>
<li>JavaScript 编写网页的行为</li>
</ol>
`,r:{minutes:2.73,words:819},y:"a",t:"网页入门",i:"network"},["/tutorial/front-end/website/index.html","/tutorial/front-end/website/README.md"]],["v-5460422c","/tutorial/front-end/website/js.html",{d:1567296e6,l:"2019年9月1日",c:"JavaScript",e:`<h2> 初学者教程</h2>
<ul>
<li><a href="/tutorial/front-end/language/js/guide/" target="blank">快速上手</a></li>
</ul>
<h3> JavaScript 手册</h3>
<ul>
<li><a href="/tutorial/front-end/language/js/" target="blank">JavaScript 学习教程</a></li>
</ul>
<h3> 在线教程</h3>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN 教程</a></p>
</li>
<li>
<p><a href="http://www.w3school.com.cn/js/index.asp" target="_blank" rel="noopener noreferrer">W3School 教程</a></p>
</li>
<li>
<p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank" rel="noopener noreferrer">菜鸟教程</a></p>
</li>
</ul>`,r:{minutes:.5,words:151},y:"a",t:"JavaScript 教程",i:"javascript"},["/tutorial/front-end/website/js","/tutorial/front-end/website/js.md"]],["v-28806cdc","/tutorial/ops/git/",{d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。在开发中分布式文件管理系统，可以便于多人协作开发。</p>
<div class="hint-container info">
<p class="hint-container-title">交互式学习</p>
<p>如果您觉得本文太枯燥，这里有一个 <a href="http://learngitbranching.js.org/" target="_blank" rel="noopener noreferrer">交互式的分支演示与学习网站</a>。您可以在这里领略 Git 的魅力。</p>
<p>但 Mr.Hope 仍建议您操作完再系统的学习并阅读以下内容。</p>
</div>
`,r:{minutes:1.01,words:302},y:"a",t:"Git",i:"git"},["/tutorial/ops/git/index.html","/tutorial/ops/git/README.md"]],["v-373337a5","/tutorial/ops/git/branch.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<h2> 概述</h2>
<p>分支就是科幻电影里面的平行宇宙，当您正在电脑前努力学习 Git 的时候，另一个您正在另一个平行宇宙里努力学习 SVN。</p>
<p>如果两个平行宇宙互不干扰，那对现在的您也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，您既学会了 Git 又学会了 SVN!</p>
<figure><figcaption>Learn branches</figcaption></figure>
<p>分支在实际中有什么用呢? 假设您准备开发一个新功能，但是需要两周才能完成，第一周您写了 50% 的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。</p>`,r:{minutes:22.91,words:6874},y:"a",t:"分支管理",i:"branch",O:10},["/tutorial/ops/git/branch","/tutorial/ops/git/branch.md"]],["v-0fb3e257","/tutorial/ops/git/change.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<h2> 管理修改</h2>
<p>Git 比其他版本控制系统设计得优秀，因为 Git 跟踪并管理的是修改，而非文件。</p>
<p>您会问，什么是修改? 比如您新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。</p>
<p>为什么说 Git 管理的是修改，而不是文件呢? 我们还是做实验。第一步，对 readme.txt 做一个修改，比如加一行内容:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.84,words:2353},y:"a",t:"修改管理",i:"change",O:8},["/tutorial/ops/git/change","/tutorial/ops/git/change.md"]],["v-87fbcab0","/tutorial/ops/git/create-repo.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>什么是仓库呢? 英文名<strong>repository</strong>，您可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。</p>
`,r:{minutes:3.88,words:1163},y:"a",t:"Git 仓库",i:"repo",O:3},["/tutorial/ops/git/create-repo","/tutorial/ops/git/create-repo.md"]],["v-085e1b36","/tutorial/ops/git/custom.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>在安装 Git 一节中，我们已经配置了 <code>user.name</code> 和 <code>user.email</code>，实际上，Git 还有很多可配置项。</p>
<p>比如，让 Git 显示颜色，会让命令输出看起来更醒目:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.56,words:767},y:"a",t:"自定义 Git",i:"skin",O:14},["/tutorial/ops/git/custom","/tutorial/ops/git/custom.md"]],["v-c750f140","/tutorial/ops/git/gitLFS.html",{d:1681181241e3,c:"Git",g:["Git","软件"],e:`<h1> Git Large File Storage</h1>
<p>Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like <a href="http://GitHub.com" target="_blank" rel="noopener noreferrer">GitHub.com</a> or GitHub Enterprise.</p>`,r:{minutes:.43,words:129},y:"a",t:"Git Large File Storage",i:"Github",O:null},["/tutorial/ops/git/gitLFS","/tutorial/ops/git/gitLFS.md"]],["v-63f40516","/tutorial/ops/git/ignore.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次 <code>git status</code> 都会显示 <code>Untracked files</code> ...，有强迫症的童鞋心里肯定不爽。</p>
<p>好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的 <code>.gitignore</code> 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。</p>
<p>忽略文件的原则是:</p>
<ul>
<li>忽略操作系统自动生成的文件，比如缩略图等；</li>
<li>忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 <code>.class</code> 文件；</li>
<li>忽略您自己的带有敏感信息的配置文件，比如存放口令的配置文件。</li>
</ul>`,r:{minutes:4.19,words:1257},y:"a",t:"忽略特殊文件",i:"skin",O:12},["/tutorial/ops/git/ignore","/tutorial/ops/git/ignore.md"]],["v-baa53aa0","/tutorial/ops/git/install.html",{d:1681181241e3,c:"Git",g:["Git","软件","安装"],e:`<h2> Git 下载</h2>
<p>官网在国外，网速较慢。在安装 Git 前推荐安装好 <a href="/tutorial/ops/vscode/" target="blank">VS Code</a>。</p>
<ul>
<li><a href="https://git-scm.com/downloads/" target="_blank" rel="noopener noreferrer">官网下载</a></li>
</ul>
<h2> Git 的安装</h2>
<ol>
<li>
<p>同意协议并选择安装位置 (不建议更改安装位置)</p>
<figure><figcaption>安装协议</figcaption></figure>
<figure><figcaption>安装位置</figcaption></figure>
</li>
<li>
<p>启用 LFS 支持，其他随意 (影响不大)</p>
<figure><figcaption>组件选择</figcaption></figure>
</li>
<li>
<p>自行决定是否创建启动菜单</p>
<figure><figcaption>是否创建启动菜</figcaption></figure>
</li>
<li>
<p>选择使用 VS Code 作为 git 的默认编辑器。</p>
<figure><figcaption>设置默认编辑器</figcaption></figure>
</li>
<li>
<p>选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。</p>
<figure><figcaption>设置默认分支名称</figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。</p>
</div>
</li>
<li>
<p>选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。</p>
<figure><figcaption>Git 命令行</figcaption></figure>
</li>
<li>
<p>使用 OpenSSL Library</p>
<figure><figcaption>Git SSL</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。</p>
</div>
</li>
<li>
<p>务必选择最后一项 “原样检出与提交”</p>
<figure><figcaption>Git 行尾设置</figcaption></figure>
</li>
<li>
<p>选择 Git 终端</p>
<figure><figcaption>Git 终端</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。</p>
</div>
</li>
<li>
<p>选择 <code>git pull</code> 的默认行为，保持默认不要改动</p>
<figure><figcaption>Git Pull Action</figcaption></figure>
</li>
<li>
<p>选择凭据储存管理器，请选择第一个跨平台管理器</p>
<figure><figcaption>凭据储存管理器设置</figcaption></figure>
</li>
<li>
<p>额外的选项确认，均勾选即可</p>
<figure><figcaption>额外选项</figcaption></figure>
</li>
<li>
<p>一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定</p>
<figure><figcaption>实验性功能</figcaption></figure>
</li>
</ol>`,r:{minutes:3.51,words:1054},y:"a",t:"安装与配置",i:"install",O:1},["/tutorial/ops/git/install","/tutorial/ops/git/install.md"]],["v-4bff78ff","/tutorial/ops/git/intro.html",{a:"Mr.Hope & 廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>Git 是什么?</p>
<p>Git 是目前世界上最先进的分布式版本控制系统(没有之一)。</p>
`,r:{minutes:7.08,words:2123},y:"a",t:"Git 介绍",i:"creative",O:2},["/tutorial/ops/git/intro","/tutorial/ops/git/intro.md"]],["v-7ff40a9a","/tutorial/ops/git/merge.html",{d:1681181241e3,c:"Git",g:["Git","软件"],e:`<h2> Squash merge</h2>
<p>通过使用 <code>--squash</code> 选项，你可以在合并中将多个 commit 合并为一个。</p>
<p>也就是对于以下的例子</p>
<p><code>git merge feature</code> 得到的结果为:</p>
<p>而如果 <code>feature</code> 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 <code>git merge --squash feature</code> 得到:</p>
<h2> Cherry pick</h2>
<p>有些时候，我们可能需要提取其他分支的某个 commit，这个时候我们可以用 cherry pick 进行操作。</p>`,r:{minutes:1.36,words:407},y:"a",t:"高级合并",i:"merge",O:17},["/tutorial/ops/git/merge","/tutorial/ops/git/merge.md"]],["v-dbb97386","/tutorial/ops/git/proxy.html",{d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。</p>
<h2> 代理设置</h2>
<p>通常情况下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p>
<p>在 Windows 下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p>
<details class="hint-container details"><summary>Windows 例子</summary>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
<span class="token builtin class-name">set</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>`,r:{minutes:1.54,words:462},y:"a",t:"Git 代理",i:"git"},["/tutorial/ops/git/proxy","/tutorial/ops/git/proxy.md"]],["v-3a6e98d4","/tutorial/ops/git/recall.html",{d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>在任何一个阶段，您都有可能想要撤消某些操作。这里，我们将会学习几个撤消您所做修改的基本工具。注
意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个
地方之一。</p>
<p>有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以运行带有 <code>--amend</code> 选
项的提交命令来重新提交:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.59,words:476},y:"a",t:"撤销操作",i:"return",O:5},["/tutorial/ops/git/recall","/tutorial/ops/git/recall.md"]],["v-11f528fe","/tutorial/ops/git/remote.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<h2> 什么是远程仓库</h2>
<p>Git 是分布式版本控制系统，同一个 Git 仓库，可以分布到不同的机器上。怎么分布呢? 最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。</p>
<p>实际情况往往是这样，找一台电脑充当服务器的角色，每天 24 小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。</p>
<p>完全可以自己搭建一台运行 Git 的服务器，不过现阶段，为了学 Git 先搭个服务器绝对是小题大作。好在这个世界上有个叫 GitHub 的神奇的网站，从名字就可以看出，这个网站就是提供 Git 仓库托管服务的，所以，只要注册一个 GitHub 账号，就可以免费获得 Git 远程仓库。</p>`,r:{minutes:10.72,words:3217},y:"a",t:"远程仓库",i:"remote",O:9},["/tutorial/ops/git/remote","/tutorial/ops/git/remote.md"]],["v-c5bad008","/tutorial/ops/git/reset.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>修改 readme.txt 文件如下:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software distributed under the GPL.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.92,words:1477},y:"a",t:"版本回退",i:"return",O:6},["/tutorial/ops/git/reset","/tutorial/ops/git/reset.md"]],["v-451a0aa4","/tutorial/ops/git/server.html",{d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。</p>
<p>GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。</p>
`,r:{minutes:2.87,words:860},y:"a",t:"服务器搭建",i:"network",O:16},["/tutorial/ops/git/server","/tutorial/ops/git/server.md"]],["v-3d327f55","/tutorial/ops/git/status.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>我们已经成功地添加并提交了一个 readme.txt 文件，继续修改 readme.txt 文件，改成如下内容:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.67,words:801},y:"a",t:"纵向查看",i:"list",O:4},["/tutorial/ops/git/status","/tutorial/ops/git/status.md"]],["v-52a16dde","/tutorial/ops/git/tag.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<h2> 为什么要有 tag</h2>
<p>发布一个版本时，我们通常先在版本库中打一个标签 (<code>tag</code>)，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。</p>
<p>Git 的标签虽然是版本库的快照，但其实它就是指向某个 <code>commit</code> 的指针(跟分支很像对不对? 但是分支可以移动，标签不能移动)，所以，创建和删除标签都是瞬间完成的。</p>
<p>Git 有 <code>commit</code>，为什么还要引入 <code>tag</code>?</p>`,r:{minutes:3.98,words:1193},y:"a",t:"标签管理",i:"tag",O:11},["/tutorial/ops/git/tag","/tutorial/ops/git/tag.md"]],["v-ff1bae8c","/tutorial/ops/git/working-directory.html",{a:"廖雪峰",d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。</p>
`,r:{minutes:2.21,words:662},y:"a",t:"工作区和暂存区",i:"workingDirectory",O:7},["/tutorial/ops/git/working-directory","/tutorial/ops/git/working-directory.md"]],["v-18e56ada","/tutorial/ops/git/working.html",{d:1681181241e3,c:"Git",g:["Git","软件"],e:`<p>Git 究竟是怎样的一个系统呢? 尽管 Git 用起来与其它的版本控制系统非常相似，但它在对信息的存储和认知方式上却有很大差异。</p>
<h2> 直接记录快照，而非差异比较</h2>
<p>Git 和其它版本控制系统(包括 Subversion 和近似工具)的主要差别在于 Git 对待数据的方法。从概念上来说，其它大部分系统以文件变更列表的方式存储信息，这类系统(CVS、Subversion、Perforce、Bazaar 等等)将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 (它们通常称作 基于差异(delta-based) 的版本控制)。</p>
<figure><figcaption>基于差异</figcaption></figure>`,r:{minutes:4.88,words:1465},y:"a",t:"Git 原理",i:"creative",O:13},["/tutorial/ops/git/working","/tutorial/ops/git/working.md"]],["v-037a4370","/tutorial/ops/linux/",{d:1573776e6,l:"2019年11月15日",c:"Linux",e:`<h2> Linux 教程</h2>
<ul>
<li>
<p><a href="/tutorial/ops/linux/intro/" target="blank">Linux 介绍</a></p>
<ul>
<li>
<p><a href="/tutorial/ops/linux/intro/intro.html" target="blank">Linux 介绍</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/intro/history.html" target="blank">Linux 历史</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/intro/language.html" target="blank">Linux 编写语言</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/intro/advantage.html" target="blank">Linux 优势</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/intro/desktop.html" target="blank">Linux 桌面环境</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/tutorial/ops/linux/file/" target="blank">Linux 文件</a></p>
<ul>
<li>
<p><a href="/tutorial/ops/linux/file/file.html" target="blank">Linux 文件</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/file/dir.html" target="blank">Linux 目录</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/file/mount.html" target="blank">挂载</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/" target="blank">Linux 命令</a></p>
<ul>
<li>
<p><a href="/tutorial/ops/linux/command/command.html" target="blank">命令格式简介</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/dir.html" target="blank">目录相关</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/file.html" target="blank">文件相关</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/other.html" target="blank">其他命令</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/add.html" target="blank">命令的自动补全</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/excu.html" target="blank">命令的执行</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/path.html" target="blank">环境变量</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/ln.html" target="blank">创建链接</a></p>
</li>
</ul>
</li>
</ul>`,r:{minutes:.42,words:126},y:"a",t:"Linux",i:"linux"},["/tutorial/ops/linux/index.html","/tutorial/ops/linux/README.md"]],["v-ade64d4e","/tutorial/ops/linux/WSL.html",{d:15744672e5,l:"2019年11月23日",c:"Linux",e:`<p>WSL 可以直接在 Windows 系统上安装并运行 Linux。目前最新的版本是 WSL2。</p>
`,r:{minutes:.27,words:82},y:"a",t:"WSL",i:"api"},["/tutorial/ops/linux/WSL","/tutorial/ops/linux/WSL.md"]],["v-3beb415d","/tutorial/ops/linux/centos.html",{d:15744672e5,l:"2019年11月23日",c:"Linux",e:`<h2> 管理工具</h2>
<ul>
<li>yum (Centos 7)</li>
<li>dnf (Centos 8)</li>
</ul>
<h2> yarn</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--silent</span> <span class="token parameter variable">--location</span> https://dl.yarnpkg.com/rpm/yarn.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/yarn.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">yarn</span>
<span class="token comment">## OR ##</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.17,words:52},y:"a",t:"CentOS 教程",i:"centos"},["/tutorial/ops/linux/centos","/tutorial/ops/linux/centos.md"]],["v-5b86497e","/tutorial/ops/linux/ssh.html",{d:15744672e5,l:"2019年11月23日",c:"基础",e:`<h2> 使用密码登录</h2>
<ol>
<li>
<p>执行以下命令，连接 Linux 云服务器。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>hostname or IP address<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>username 即为前提条件中获得的默认帐号。</li>
<li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li>
</ul>
</li>
<li>
<p>输入已获取的密码，按 Enter，即可完成登录。</p>
</li>
</ol>`,r:{minutes:.8,words:241},y:"a",t:"ssh",i:"mount"},["/tutorial/ops/linux/ssh","/tutorial/ops/linux/ssh.md"]],["v-7093596a","/tutorial/ops/markdown/",{d:1681181241e3,c:"Markdown",g:["Markdown"],e:`<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>
<p>Markdown 的目标是实现「易读易写」。</p>
<p>Markdown 的主要目的是用来作为一种网络内容的<strong>写作用语言</strong>。</p>
`,r:{minutes:.41,words:123},y:"a",t:"Markdown",i:"markdown"},["/tutorial/ops/markdown/index.html","/tutorial/ops/markdown/README.md"]],["v-2b223df7","/tutorial/ops/markdown/block.html",{d:1681181241e3,c:"Markdown",g:["Markdown"],e:`<h2> 段落和换行</h2>
<p>一个段落由一个及以上相连接的行句组成。</p>
<p>一个即以上的空行则会切分出不同的段落，一般的段落不需要用空白或断行缩进。</p>
<div class="hint-container tip">
<p class="hint-container-title">空行</p>
<p>空行的定义是显示上看起来像是空行，便会被视为空行。</p>
<p>也就是若某一行只包含空白和 tab，则该行也会被视为空行。</p>
</div>
<p>「一个及以上相连接的行句组成」这句话其实暗示了 Markdown 允许段落内的强迫断行，其它的格式会把每个断行都转成 <code>&lt;br /&gt;</code> 标签。</p>`,r:{minutes:9.73,words:2920},y:"a",t:"Markdown 块元素",i:"markdown"},["/tutorial/ops/markdown/block","/tutorial/ops/markdown/block.md"]],["v-12f7a9eb","/tutorial/ops/markdown/demo.html",{d:1681181241e3,c:"Markdown",g:["Markdown"],e:`<!-- markdownlint-disable -->
<h1> 一级标题</h1>
<!-- markdownlint-restore -->
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 一级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.8,words:839},y:"a",t:"Markdown示例",i:"markdown"},["/tutorial/ops/markdown/demo","/tutorial/ops/markdown/demo.md"]],["v-17ff21d4","/tutorial/ops/markdown/extend.html",{d:1681181241e3,c:"Markdown",g:["Markdown"],e:`<h2> 其他特性</h2>
<h3> 自动链接</h3>
<p>Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;http://example.com/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.66,words:1399},y:"a",t:"Markdown 扩展",i:"plugin"},["/tutorial/ops/markdown/extend","/tutorial/ops/markdown/extend.md"]],["v-406cd496","/tutorial/ops/markdown/inline.html",{d:1681181241e3,c:"Markdown",g:["Markdown"],e:`<h2> 链接</h2>
<p>Markdown 支持两种形式的链接语法: <em>行内</em>和<em>参考</em>。</p>
<p>不管是哪一种，链接的文字都是用 <code>[方括号]</code> 来标记。</p>
<h3> 行内链接</h3>
<p>要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。</p>
<details class="hint-container details"><summary>例子</summary>
<p><strong>输入</strong>:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>This is <span class="token url">[<span class="token content">an example</span>](<span class="token url">http://example.com/</span> <span class="token string">"Title"</span>)</span> inline link.

<span class="token url">[<span class="token content">This link</span>](<span class="token url">http://example.net/</span>)</span> has no title attribute.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>渲染结果</strong>:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  This is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://example.com/<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> an example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> inline
  link.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://example.net/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> has no title attribute.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong>:</p>
<p>This is <a href="http://example.com/" title="Title" target="_blank" rel="noopener noreferrer">an example</a> inline link.</p>
<p><a href="http://example.net/" target="_blank" rel="noopener noreferrer">This link</a> has no title attribute.</p>
</details>`,r:{minutes:6.9,words:2069},y:"a",t:"Markdown 行内元素",i:"markdown"},["/tutorial/ops/markdown/inline","/tutorial/ops/markdown/inline.md"]],["v-2963ef78","/tutorial/ops/markdown/intro.html",{d:1681181241e3,c:"Markdown",g:["Markdown"],e:`<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>
<p>Markdown 的目标是实现「易读易写」。它的扩展名为 <code>.md</code>。</p>
`,r:{minutes:4.8,words:1440},y:"a",t:"Markdown 介绍",i:"info"},["/tutorial/ops/markdown/intro","/tutorial/ops/markdown/intro.md"]],["v-7f0a4545","/tutorial/front-end/mini-app/framework/",{d:1681181241e3,c:"小程序",e:`<h2> 开发框架优点</h2>
<ol>
<li>
<p>将界面开发的复杂过程转换为编写简单的 yaml 文件。开发门槛低，</p>
</li>
<li>
<p>拥有详细的开发文档说明，简单易懂，页面文件自述性高，没有开发基础的人也可以经过简单阅读后看懂页面文件大体描述内容。<a href="/tutorial/front-end/mini-app/framework/demo.html" target="blank">查看例子点这里</a></p>
</li>
<li>
<p>开发者无需着眼于界面样式或是功能的实现，只需着眼于在 yaml 文件中添加渲染界面所需参数并赋值，即可完成界面编写。开发者只需在开发过程中按照开发说明录入参数，并注意格式即可。</p>
</li>
</ol>`,r:{minutes:.63,words:188},y:"a",t:"小程序框架说明",i:"info"},["/tutorial/front-end/mini-app/framework/index.html","/tutorial/front-end/mini-app/framework/README.md"]],["v-c7895d9e","/tutorial/front-end/mini-app/framework/demo.html",{d:1681181241e3,c:"小程序",e:`<h2> 账户页面</h2>
<figure><figcaption>账户页面二维码</figcaption></figure>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 统一身份认证
<span class="token key atrule">grey</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
    <span class="token key atrule">type</span><span class="token punctuation">:</span> p
    <span class="token key atrule">heading</span><span class="token punctuation">:</span> 统一身份认证介绍
    <span class="token key atrule">text</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 学校为每个人分配了一个统一身份，这个身份就是您的邮箱账号和密码。
      <span class="token punctuation">-</span> 无论您登录校园网、进入内网查看通知、查看是否欠书未还、查看校园卡余额以及消费记录、进入本科生或研究生选课平台、查成绩、查课表、访问 BB 平台、本科教学服务系统等等，各种与信息查询提交的有关的操作都需要这个统一身份。

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> list
    <span class="token key atrule">header</span><span class="token punctuation">:</span> 了解更多
    <span class="token key atrule">content</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 统一身份认证
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> apply
        <span class="token key atrule">path</span><span class="token punctuation">:</span> authorize

      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 校园邮箱
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> email
        <span class="token key atrule">path</span><span class="token punctuation">:</span> mail

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> footer
    <span class="token key atrule">author</span><span class="token punctuation">:</span> Mr.Hope
    <span class="token key atrule">time</span><span class="token punctuation">:</span> 2020年7月17日

<span class="token key atrule">shareable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.25,words:676},y:"a",t:"YAML 文件案例",i:"discover"},["/tutorial/front-end/mini-app/framework/demo","/tutorial/front-end/mini-app/framework/demo.md"]],["v-bd140ff6","/tutorial/front-end/mini-app/framework/page.html",{d:1681181241e3,c:"小程序",e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><code>page.ts</code> 用于小程序页面渲染。</p>
</div>
`,r:{minutes:1.58,words:475},y:"a",t:"Page 插件",i:"page"},["/tutorial/front-end/mini-app/framework/page","/tutorial/front-end/mini-app/framework/page.md"]],["v-878aea88","/tutorial/front-end/mini-app/framework/simple-debug.html",{d:1681181241e3,c:"小程序",e:`<p>这里是开发前应当了解的内容，阅读时长大约为五分钟。</p>
<h2> json 文件中合法的值有哪些</h2>
<p>合法的值大家编辑用到的一共有五种:
<strong>number</strong>(数字)、<strong>boolean</strong>(布尔值)、<strong>string</strong>(字符串)、<strong>array</strong>(数组)和<strong>object</strong>(对象)。</p>
<h2> json 介绍</h2>
<h3> 对象</h3>
<p>对象的一组键值对，使用冒号结构表示。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> pets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.25,words:1276},y:"a",t:"小程序简易开发指南",i:"creative"},["/tutorial/front-end/mini-app/framework/simple-debug","/tutorial/front-end/mini-app/framework/simple-debug.md"]],["v-177a413a","/tutorial/front-end/mini-app/framework/tag-list.html",{d:1681181241e3,c:"小程序",e:`<figure><img src="https://img.shields.io/badge/版本-V5-blue.svg?style=for-the-badge" alt="版本: V5" tabindex="0" loading="lazy"><figcaption>版本: V5</figcaption></figure>
<h2> 总体结构</h2>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">必填</th>
<th style="text-align:center">值类型</th>
<th>内容</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">title</td>
<td style="text-align:center">是</td>
<td style="text-align:center"><code>string</code></td>
<td>导航栏标题</td>
<td>一般不超过八个字，六字及以下为佳</td>
</tr>
<tr>
<td style="text-align:center">desc</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面描述</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">author</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面的作者</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">time</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面更新时间</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">grey</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>使用灰色背景</td>
<td>默认为白色背景</td>
</tr>
<tr>
<td style="text-align:center">cite</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string | string[]</code></td>
<td>页面引用链接</td>
<td></td>
</tr>
<tr>
<td style="text-align:center">content</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>ComponentConfig[]</code></td>
<td>页面的内容</td>
<td>数组的每个对象会最终渲染为一个组件</td>
</tr>
<tr>
<td style="text-align:center">from</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>左上角返回按钮文字</td>
<td>设置左上角文字，默认为上一级页面标题</td>
</tr>
<tr>
<td style="text-align:center">outdated</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>是否已过时</td>
<td>可展示一条“页面过时”提示</td>
</tr>
<tr>
<td style="text-align:center">shareable</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>是否可被分享</td>
<td>是否可以使用小程序的界面分享，默认为 <code>false</code></td>
</tr>
<tr>
<td style="text-align:center">contact</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>“联系开发者”按钮</td>
<td>是否在分享菜单中显示“联系开发者”，默认为 <code>true</code></td>
</tr>
</tbody>
</table>`,r:{minutes:14.01,words:4202},y:"a",t:"小程序页面参数表",i:"list"},["/tutorial/front-end/mini-app/framework/tag-list","/tutorial/front-end/mini-app/framework/tag-list.md"]],["v-9e3033f2","/tutorial/front-end/mini-app/guide/",{d:157464e7,l:"2019年11月25日",c:"小程序",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/file-structure.html" target="blank">文件结构</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/env.html" target="blank">运行环境</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/config/" target="blank">小程序配置</a></p>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/config/app-config.html" target="blank">全局配置</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/config/page-config.html" target="blank">页面配置</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/config/sitemap-config.html" target="blank">sitemap 配置</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/" target="blank">小程序框架</a></p>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/intro.html" target="blank">框架介绍</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/scene.html" target="blank">场景值</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/env.html" target="blank">运行环境</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/mechanism.html" target="blank">运行机制</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/update.html" target="blank">更新机制</a> </p>
</li>
</ul>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/" target="blank">逻辑层</a></p>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/lifetime.html" target="blank">生命周期</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/route.html" target="blank">路由</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/register.html" target="blank">注册</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/app.html" target="blank">App()</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/page.html" target="blank">Page()</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/run.html" target="blank">运行</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/module.html" target="blank">模块化</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/service/api/" target="blank">API</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/" target="blank">视图层</a></p>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/wxml.html" target="blank">WXML</a></p>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/data-bind.html" target="blank">数据绑定</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/condition-render.html" target="blank">条件渲染</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/list-render.html" target="blank">列表渲染</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/template.html" target="blank">模板</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/wxss.html" target="blank">WXSS</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/wxs.html" target="blank">WXS</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/event.html" target="blank">事件</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/component.html" target="blank">基础组件</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/animation.html" target="blank">动画</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/wxs.html" target="blank">WXS</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/wxs-event.html" target="blank">WXS 事件</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/model.html" target="blank">建议双向绑定</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/selector.html" target="blank">获取界面上的节点信息</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/selector.html" target="blank">相应显示区域变化</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/view/rendering-cache.html" target="blank">初始渲染缓存</a> </p>
</li>
</ul>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/" target="blank">小程序能力</a></p>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/network.html" target="blank">网络请求</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/storage.html" target="blank">存储</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/file-system.html" target="blank">文件系统</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/debug.html" target="blank">调试</a></p>
</li>
</ul>
</li>
</ul>`,r:{minutes:.98,words:294},y:"a",t:"小程序指南",i:"creative"},["/tutorial/front-end/mini-app/guide/index.html","/tutorial/front-end/mini-app/guide/README.md"]],["v-334b99da","/tutorial/front-end/mini-app/guide/env.html",{d:1681181241e3,c:"小程序",e:`<p>宿主环境是微信客户端给小程序所提供的环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。</p>
`,r:{minutes:3.96,words:1188},y:"a",t:"宿主环境",i:"leaf"},["/tutorial/front-end/mini-app/guide/env","/tutorial/front-end/mini-app/guide/env.md"]],["v-41cd4a50","/tutorial/front-end/mini-app/guide/file-structure.html",{d:1681181241e3,c:"小程序",e:`<h2> 文件组成 </h2>
<p>小程序的代码由四种文件组成:</p>
<ul>
<li><code>.json</code> 后缀的 JSON 配置文件，主要用作小程序配置</li>
<li><code>.wxml</code> 后缀的 WXML 模板文件，为视图层，相当于 HTML</li>
<li><code>.wxss</code> 后缀的 WXSS 样式文件，为样式部分，相当于 CSS</li>
<li><code>.js</code> 后缀的 JS 脚本逻辑文件，为脚本部分，处理小程序逻辑与行为</li>
</ul>
<h2> 目录结构 </h2>
<p>小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。</p>`,r:{minutes:6.59,words:1977},y:"a",t:"代码构成",i:"tree"},["/tutorial/front-end/mini-app/guide/file-structure","/tutorial/front-end/mini-app/guide/file-structure.md"]],["v-727599f0","/tutorial/front-end/mini-app/tools/",{d:1681181241e3,c:"小程序",e:`<h2> 工具</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/tools/interface.html" target="blank">工具页面简介</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/tools/debug.html" target="blank">调试</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/tools/npm.html" target="blank">npm</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/tools/audit.html" target="blank">体验评分</a></p>
</li>
</ul>`,r:{minutes:.1,words:30},y:"a",t:"工具使用",i:"tool"},["/tutorial/front-end/mini-app/tools/index.html","/tutorial/front-end/mini-app/tools/README.md"]],["v-6d70dee6","/tutorial/front-end/mini-app/tools/audit.html",{d:1681181241e3,c:"小程序",e:`<p>这是一项给小程序的体验好坏打分的功能，它会在小程序运行过程中实时检查，分析出一些可能导致体验不好的地方，并且定位出哪里有问题，以及给出一些优化建议。</p>
`,r:{minutes:1.53,words:458},y:"a",t:"体验评分",i:"tool"},["/tutorial/front-end/mini-app/tools/audit","/tutorial/front-end/mini-app/tools/audit.md"]],["v-ca40a124","/tutorial/front-end/mini-app/tools/debug.html",{d:1681181241e3,c:"小程序",e:`<p>程序调试主要有三大功能区: 模拟器、调试工具和小程序操作区</p>
`,r:{minutes:10.69,words:3206},y:"a",t:"调试",i:"debug"},["/tutorial/front-end/mini-app/tools/debug","/tutorial/front-end/mini-app/tools/debug.md"]],["v-466f7448","/tutorial/front-end/mini-app/tools/interface.html",{d:1681181241e3,c:"小程序",e:`<h2> 启动页</h2>
<h2> 登录页</h2>
<p>在登录页，可以使用微信扫码登陆开发者工具，开发者工具将使用这个微信帐号的信息进行小程序的开发和调试。</p>
<figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/login.b4162666.png" alt="login" tabindex="0" loading="lazy"><figcaption>login</figcaption></figure>
<h2> 项目列表</h2>
<p>登录成功后，会看到已经存在的项目列表和代码片段列表，</p>
<p>在项目列表可以选择公众号网页调试，进入到公众号网页调试模式。</p>`,r:{minutes:4.41,words:1323},y:"a",t:"界面",i:"layout"},["/tutorial/front-end/mini-app/tools/interface","/tutorial/front-end/mini-app/tools/interface.md"]],["v-0b8b4854","/tutorial/front-end/mini-app/tools/npm.html",{d:1681181241e3,c:"小程序",e:`<p>从小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。</p>
<p>此文档要求开发者们对 npm 有一定的了解，因此不会再去介绍 npm 的基本功能。如若之前未接触过 npm，请翻阅官方 npm 文档进行学习。</p>
`,r:{minutes:4.47,words:1342},y:"a",t:"npm 支持",i:"npm"},["/tutorial/front-end/mini-app/tools/npm","/tutorial/front-end/mini-app/tools/npm.md"]],["v-66f7568f","/tutorial/front-end/mini-app/tools/score.html",{d:1681181241e3,c:"小程序",e:`<p>目前体验评分共有 27 条规则，共分为三类: 性能、体验、最佳实践，满足规则要求得分(100 分)，否则不得分(0 分)，最后根据各规则权重和公式计算出总得分。</p>
`,r:{minutes:7.25,words:2175},y:"a",t:"评分方法",i:"rank"},["/tutorial/front-end/mini-app/tools/score","/tutorial/front-end/mini-app/tools/score.md"]],["v-53c64ef4","/tutorial/front-end/node-js/package/",{y:"p",t:"常见 Node 库"},["/tutorial/front-end/node-js/package/index.html","/tutorial/front-end/node-js/package/README.md"]],["v-00a665cb","/tutorial/front-end/node-js/package/axois.html",{d:1681181241e3,c:"Node.js",g:["Node.js"],e:`<blockquote>
<p>GitHub 地址: <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">https://github.com/axios/axios</a></p>
</blockquote>
<p>axois 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 node.js</p>
`,r:{minutes:9.54,words:2863},y:"a",t:"axios"},["/tutorial/front-end/node-js/package/axois","/tutorial/front-end/node-js/package/axois.md"]],["v-21906d6f","/tutorial/front-end/vue/core/app.html",{d:1681181241e3,e:`<h2> 应用实例</h2>
<p>每个 Vue 应用都是通过 <code>createApp</code> 函数创建一个新的<strong>应用实例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">/* 根组件选项 */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.64,words:793},y:"a",t:"创建 Vue 应用",i:"app",O:3},["/tutorial/front-end/vue/core/app","/tutorial/front-end/vue/core/app.md"]],["v-050f65b4","/tutorial/front-end/vue/core/get-started.html",{d:1681181241e3,c:"Vue",g:["快速上手","基础"],e:`<h2> Vue.js 是什么</h2>
<h2> 起步</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>您应当已了解关于 HTML、CSS 和 JavaScript 的中级知识。</p>
</div>
<p><a href="https://cn.vuejs.org/guide/quick-start.html" target="_blank" rel="noopener noreferrer">安装</a></p>
<p>尝试 Vue.js 最简单的方法是使用 <a href="https://sfc.vuejs.org/" target="_blank" rel="noopener noreferrer">SFC Playground</a>。您可以在浏览器新标签页中打开它，跟着例子自己进行一些尝试。</p>`,r:{minutes:.77,words:232},y:"a",t:"快速上手 Vue.js",i:"creative",O:2},["/tutorial/front-end/vue/core/get-started","/tutorial/front-end/vue/core/get-started.md"]],["v-50860a96","/tutorial/front-end/vue/core/install.html",{d:1681181241e3,c:"Vue",g:["安装","基础"],e:`<h2> 环境准备</h2>
<h3> VS Code 安装</h3>
<ul>
<li><a href="/tutorial/software/vscode/install.html" target="blank">安装 VS Code</a></li>
</ul>
<h4> 开发指南</h4>
<ol>
<li>
<p>使用 VS Code 打开项目文件夹。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请打开 VS Code 选择菜单栏中的 “文件-打开文件夹”，或在文件夹上 “右键——使用 VS Code 打开” 或在文件夹内部空白处 “右键——使用 VS Code 打开”。</p>
</div>
</li>
<li>
<p>打开终端(快捷键 <code>Ctrl + \`</code> )。</p>
</li>
<li>
<p>在终端中输入相关指令即可执行相关功能。</p>
</li>
</ol>`,r:{minutes:.79,words:237},y:"a",t:"开发环境安装",i:"install",O:1},["/tutorial/front-end/vue/core/install","/tutorial/front-end/vue/core/install.md"]],["v-48384480","/tutorial/front-end/vue/core/sfc.html",{d:1681181241e3,c:"Vue",e:`<h2> 介绍</h2>
<p>Vue 的单文件组件 (即 <code>*.vue</code> 文件，简称 <strong>SFC</strong>) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">greeting</span><span class="token operator">:</span> <span class="token string">"Hello World!"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>greeting<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{ greeting }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.greeting</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.08,words:1224},y:"a",t:"Vue 单文件组件",i:"vue"},["/tutorial/front-end/vue/core/sfc","/tutorial/front-end/vue/core/sfc.md"]],["v-94472630","/tutorial/front-end/vue/core/template.html",{d:1681181241e3,e:`<p>Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。</p>
<p>在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。</p>
<p>如果你对虚拟 DOM 的概念比较熟悉，并且偏好直接使用 JavaScript，你也可以结合可选的 JSX 支持直接手写渲染函数而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。</p>`,r:{minutes:8.01,words:2402},y:"a",t:"模板语法",i:"object",O:4},["/tutorial/front-end/vue/core/template","/tutorial/front-end/vue/core/template.md"]],["v-296b00ed","/tutorial/front-end/vue/router/",{d:1681181241e3,c:"Vue",g:["Vue Router"],e:`<p>Vue Router 是 Vue 官方出品的路由组件，托管整个 Vue 项目路由。</p>
`,r:{minutes:.22,words:67},y:"a",t:"Vue Router",i:"router"},["/tutorial/front-end/vue/router/index.html","/tutorial/front-end/vue/router/README.md"]],["v-3c6d60fc","/tutorial/front-end/vue/router/get-started.html",{d:1681181241e3,c:"Vue",g:["Vue Router","快速上手"],e:`<h2> 介绍</h2>
<p>Vue Router 是 Vue 官方出品的路由组件，托管整个 Vue 项目路由。</p>
<h2> Route 属性</h2>
<p>在日常开发中，我们主要关注选项中的 <code>routes</code> 属性。<code>routes</code> 属性是一个数组，其每一个元素是一个对象，对象会包含 <code>path</code>，<code>component</code> 两个必填属性与 <code>meta</code> 和 <code>name</code> 两个可选属性。</p>
<ul>
<li>
<p><code>path</code>: 填入需要配置的网站页面的 <code>url</code></p>
</li>
<li>
<p><code>conponent</code>: 导入需要显示的 Vue 文件组件</p>
</li>
<li>
<p><code>name</code> (可选): 指定该组件与 <code>url</code> 的别名</p>
</li>
<li>
<p><code>meta</code> (可选): 该属性可以填入该界面的额外信息 (比如 <code>title</code>、<code>author</code> 等)</p>
</li>
</ul>`,r:{minutes:3.4,words:1020},y:"a",t:"快速上手",i:"router"},["/tutorial/front-end/vue/router/get-started","/tutorial/front-end/vue/router/get-started.md"]],["v-f5b2d1e0","/tutorial/front-end/website/css/",{d:15676416e5,l:"2019年9月5日",c:"CSS",g:["介绍"],e:`<p>CSS 指层叠样式表 (<strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets)，它负责描述网页元素的具体样式。</p>
<p>CSS3 是最新的 CSS 标准，被拆分为"模块"。模块包括: 选择器、盒模型、背景和边框、文字特效、2D/3D 转换、动画、多列布局、用户界面。</p>
`,r:{minutes:1.2,words:359},y:"a",t:"CSS",i:"css"},["/tutorial/front-end/website/css/index.html","/tutorial/front-end/website/css/README.md"]],["v-fa847f90","/tutorial/front-end/website/definition/",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> 定义列表</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/website/definition/uri.html" target="blank">URI 统一资源标识符</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/definition/url.html" target="blank">URL 统一资源定位符</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/definition/seo.html" target="blank">SEO 搜索引擎优化</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/definition/mime.html" target="blank">MIME Type 媒体类型</a></p>
</li>
</ul>`,r:{minutes:.16,words:48},y:"a",t:"定义",i:"info"},["/tutorial/front-end/website/definition/index.html","/tutorial/front-end/website/definition/README.md"]],["v-7d25ed06","/tutorial/front-end/website/definition/https.html",{a:"小灰",d:15727392e5,l:"2019年11月3日",e:`<h2> 什么是 HTTP 协议</h2>
<p>HTTP 协议全称 Hyper Text Transfer Protocol，翻译过来就是超文本传输协议，位于 TCP/IP 四层模型当中的应用层。</p>
<figure><figcaption>Http 漫画</figcaption></figure>
<p>HTTP 协议通过 <strong>请求/响应</strong> 的方式，在客户端和服务端之间进行通信。</p>
<figure><figcaption>Http 漫画</figcaption></figure>
<p>这一切看起来很美好，但是 HTTP 协议有一个致命的缺点: <strong>不够安全</strong>。</p>`,r:{minutes:5.5,words:1650},y:"a",t:"Http 与 Https 介绍",i:"http"},["/tutorial/front-end/website/definition/https","/tutorial/front-end/website/definition/https.md"]],["v-8f38c826","/tutorial/front-end/website/definition/mime.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<p>MIME type，即媒体类型(media type) (有时是“内容类型(content type)”) 是指示文件类型的字符串，与文件一起发送。</p>
<p>例如，一个声音文件可能被标记为 <code>audio/ogg</code> ，一个图像文件可能是 <code>image/png</code>。</p>
<p>它与传统 Windows 上的文件扩展名有相同目的。</p>
`,r:{minutes:.3,words:89},y:"a",t:"MIME type",i:"info"},["/tutorial/front-end/website/definition/mime","/tutorial/front-end/website/definition/mime.md"]],["v-fdd48258","/tutorial/front-end/website/definition/seo.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> 简介</h2>
<p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。</p>
<p>所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p>`,r:{minutes:1.33,words:400},y:"a",t:"SEO",i:"info"},["/tutorial/front-end/website/definition/seo","/tutorial/front-end/website/definition/seo.md"]],["v-1367f1b6","/tutorial/front-end/website/definition/uri.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> 简介</h2>
<p><strong>统一资源标识符</strong>(英语: Uniform Resource Identifier，缩写: URI)在电脑术语中是一个用于标识某一互联网资源名称的字符串。</p>
<p>该种标识允许用户对网络中(一般指万维网)的资源通过特定的协议进行交互操作。URI 的最常见的形式是统一资源定位符(URL)，经常指定为非正式的网址。更罕见的用法是统一资源名称(URN)，其目的是通过提供一种途径。用于在特定的名字空间资源的标识，以补充网址。</p>
<h2> 与 URL 和 URN 的关系</h2>
<h3> URN</h3>
<p><strong>统一资源名称</strong>(英语: Uniform Resource Name，缩写: URN)是统一资源标识(URI)的历史名字，它使用 <code>urn:</code> 作为 URI scheme。</p>`,r:{minutes:3.44,words:1031},y:"a",t:"URI",i:"info"},["/tutorial/front-end/website/definition/uri","/tutorial/front-end/website/definition/uri.md"]],["v-092addfc","/tutorial/front-end/website/definition/url.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> 简介</h2>
<p><strong>统一资源定位符</strong>(英语: Uniform Resource Locator，缩写: URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址)是因特网上标准的资源的地址(Address)，如同在网络上的门牌。</p>
<p>统一资源定位符的标准格式如下:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[协议类型]://[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.21,words:664},y:"a",t:"URL",i:"info"},["/tutorial/front-end/website/definition/url","/tutorial/front-end/website/definition/url.md"]],["v-4e1f5402","/tutorial/front-end/website/emmet/",{d:15674688e5,l:"2019年9月3日",c:"Emmet",g:["快捷键"],e:`<div class="hint-container tip">
<p class="hint-container-title">简介</p>
<p>所有操作按下 “tab” 键即可瞬间完成</p>
</div>
<p>Emmet 是一个快速创建 HTML 和 CSS 的方式，如果您想要成为一个高级 Web 开发者，为了工作效率，您应该掌握 Emmet 语法。</p>
`,r:{minutes:.47,words:141},y:"a",t:"Emmet 语法",i:"emmet"},["/tutorial/front-end/website/emmet/index.html","/tutorial/front-end/website/emmet/README.md"]],["v-086d6fb5","/tutorial/front-end/website/emmet/css.html",{d:15674688e5,l:"2019年9月3日",c:"Emmet",g:["快捷键","HTML"],e:`<p>对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。</p>
<h2> 添加属性</h2>
<p>您可以使用缩写来生成 CSS 属性。如 <code>m</code> 会生成 <code>margin: ;</code>，同时光标会自动置于值处。</p>
<h2> 同时添加属性与值值</h2>
<p>您可以将值直接输入缩写的后面，如果有多个值，您需要用 <code>-</code> 将它们分开，多余的 <code>-</code> 将会被理解为负值。</p>
<div class="hint-container tip">
<p class="hint-container-title">案例</p>
<ul>
<li><code>m10</code>: <code>margin: 10px;</code></li>
<li><code>m10-20</code>: <code>margin: 10px 20px;</code></li>
<li><code>m-10--20</code>: <code>margin: -10px -20px;</code></li>
</ul>
</div>`,r:{minutes:1.75,words:526},y:"a",t:"CSS Emmet",i:"css"},["/tutorial/front-end/website/emmet/css","/tutorial/front-end/website/emmet/css.md"]],["v-7ba844ef","/tutorial/front-end/website/emmet/html.html",{d:15674688e5,l:"2019年9月3日",c:"Emmet",g:["快捷键","HTML"],e:`<h2> 元素创建</h2>
<ol>
<li>在编辑器中输入元素名称之后按下 tab 即可自动补全生成 HTML 标签，即使不是标准的 HTML 标签。</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">创建文档</p>
<p>输入: <code>!</code> 或者 <code>html:5</code> 将创建 HTML 基本结构。</p>
</div>
<h2> 结构操作</h2>
<h3> 子元素</h3>
<p>使用 <code>&gt;</code> 生成子元素</p>
<details class="hint-container details"><summary>案例</summary>
<p><code>div&gt;ul&gt;li</code>:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,r:{minutes:4.31,words:1293},y:"a",t:"HTML Emmet",i:"html"},["/tutorial/front-end/website/emmet/html","/tutorial/front-end/website/emmet/html.md"]],["v-1ff325e0","/tutorial/front-end/website/html/",{d:1567296e6,l:"2019年9月1日",c:"HTML",g:["介绍"],e:`<p>HTML 指的是超文本标记语言 (Hyper Text Markup Language)，它不是一种编程语言，而是一种标记语言 (markup language)，它使用标记标签来描述网页。HTML5 是 HTML 最新的修订版本。</p>
`,r:{minutes:1.02,words:306},y:"a",t:"HTML",i:"html"},["/tutorial/front-end/website/html/index.html","/tutorial/front-end/website/html/README.md"]],["v-1e429e6d","/tutorial/front-end/website/jQuery/",{d:15726528e5,l:"2019年11月2日",c:"jQuery",e:`<p>jQuery 是一款能够方便快捷的操作 DOM，并兼容所有主流浏览器的框架，目前最新版本是 3.5.1。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>由于目前前端应用的愈加复杂，前端开发者大多数转向 MVVM 框架，目前世界比较流行的三大 MVVM 框架是 Vue React Angular。可以说，在 2023 年，<strong>jQuery 已经过时了</strong>!</p>
<p>不过 jQuery 无论说从代码实现还是从写法上，到今天都是值得借鉴的。</p>
<p>所以如果您只想简单了解并掌握前端开发，而不是深入地从事相关行业，您可以直接 <a href="/tutorial/front-end/vue/" target="blank">跳过本章节</a>。</p>
<p>本章节应以理解写法与思路为主，无需刻意记忆。</p>
</div>
`,r:{minutes:.75,words:226},y:"a",t:"jQuery",i:"jQuery"},["/tutorial/front-end/website/jQuery/index.html","/tutorial/front-end/website/jQuery/README.md"]],["v-2efa2eec","/tutorial/front-end/website/jQuery/ajax.html",{d:1572912e6,l:"2019年11月5日",c:"jQuery",e:`<div class="hint-container tip">
<p class="hint-container-title">章节过时</p>
<p>目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 <a href="/tutorial/front-end/node-js/package/axois.html" target="blank">axios</a> 来进行请求。</p>
</div>
`,r:{minutes:2.75,words:825},y:"a",t:"AJAX",i:"ajax"},["/tutorial/front-end/website/jQuery/ajax","/tutorial/front-end/website/jQuery/ajax.md"]],["v-57c91382","/tutorial/front-end/website/jQuery/animation.html",{d:15728256e5,l:"2019年11月4日",c:"jQuery",e:`<div class="hint-container tip">
<p class="hint-container-title">章节过时</p>
<p>大部分动画都能够通过 CSS3 的 transition 实现，且 CSS3 开销更小。在复杂动画下，jQuery 更容易触发性能瓶颈。</p>
<p>2023 年浏览器对 CSS3 已经支持的特别良好，所以目前大多数的动画都直接使用 CSS3 的动画库。本章以学习思路为主即可。</p>
</div>
`,r:{minutes:3.51,words:1052},y:"a",t:"动画",i:"animation"},["/tutorial/front-end/website/jQuery/animation","/tutorial/front-end/website/jQuery/animation.md"]],["v-776998ac","/tutorial/front-end/website/jQuery/event.html",{d:15728256e5,l:"2019年11月4日",c:"jQuery",e:`<div class="hint-container tip">
<p class="hint-container-title">章节过时</p>
<p>由于目前各浏览器 API 已经基本统一，无需使用 jQuery 绑定事件了。</p>
</div>
`,r:{minutes:5.14,words:1543},y:"a",t:"事件",i:"activity"},["/tutorial/front-end/website/jQuery/event","/tutorial/front-end/website/jQuery/event.md"]],["v-fa04251c","/tutorial/front-end/website/jQuery/extend.html",{d:1572912e6,l:"2019年11月5日",c:"jQuery",e:`<p>当我们使用 jQuery 对象的方法时，由于 jQuery 对象可以操作一组 DOM，而且支持链式操作，所以用起来非常方便。</p>
<p>但是 jQuery 内置的方法永远不可能满足所有的需求。比如，我们想要高亮显示某些 DOM 元素，用 jQuery 可以这么实现:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"span.hl"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"backgroundColor"</span><span class="token punctuation">,</span> <span class="token string">"#fffceb"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"#d85030"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p a.hl"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"backgroundColor"</span><span class="token punctuation">,</span> <span class="token string">"#fffceb"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"#d85030"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.13,words:1539},y:"a",t:"扩展",i:"plugin"},["/tutorial/front-end/website/jQuery/extend","/tutorial/front-end/website/jQuery/extend.md"]],["v-f0a38fcc","/tutorial/front-end/website/jQuery/intro.html",{d:15726528e5,l:"2019年11月2日",c:"jQuery",g:["介绍"],e:`<p>jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。</p>
<p>jQuery 能帮我们干这些事情:</p>
<ul>
<li>消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；</li>
<li>简洁的操作 DOM 的方法: 写 <code>$('#test')</code> 肯定比 <code>document.getElementById('test')</code> 来得简洁；</li>
<li>轻松实现动画、修改 CSS 等各种操作。</li>
<li>jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!</li>
</ul>
`,r:{minutes:2.04,words:613},y:"a",t:"jQuery 介绍",i:"creative"},["/tutorial/front-end/website/jQuery/intro","/tutorial/front-end/website/jQuery/intro.md"]],["v-068b0a7d","/tutorial/front-end/website/jQuery/modify-dom.html",{d:15727392e5,l:"2019年11月3日",c:"jQuery",e:`<div class="hint-container tip">
<p class="hint-container-title">章节过时</p>
<p>而且目前浏览器 API 已经基本统一，除非兼容旧版本 IE，否则无需针对不同浏览器写不同的代码。</p>
</div>
`,r:{minutes:1.93,words:580},y:"a",t:"修改 DOM 结构",i:"edit"},["/tutorial/front-end/website/jQuery/modify-dom","/tutorial/front-end/website/jQuery/modify-dom.md"]],["v-0e25c76d","/tutorial/front-end/website/jQuery/operate-dom.html",{d:15727392e5,l:"2019年11月3日",c:"jQuery",e:`<div class="hint-container tip">
<p class="hint-container-title">章节过时</p>
<p>目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。</p>
</div>
`,r:{minutes:5.01,words:1503},y:"a",t:"操作 DOM",i:"operate"},["/tutorial/front-end/website/jQuery/operate-dom","/tutorial/front-end/website/jQuery/operate-dom.md"]],["v-27d8db0d","/tutorial/front-end/website/jQuery/selector.html",{d:15727392e5,l:"2019年11月3日",c:"jQuery",e:`<p>选择器是 jQuery 的核心。一个选择器写出来类似 <code>$('#dom-id')</code>。</p>
`,r:{minutes:8.58,words:2574},y:"a",t:"选择器",i:"list"},["/tutorial/front-end/website/jQuery/selector","/tutorial/front-end/website/jQuery/selector.md"]],["v-3229366b","/tutorial/ops/linux/bash/",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/ops/linux/bash/intro.html" target="blank">简介</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/grammar.html" target="blank">基本语法</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/expansion.html" target="blank">模式扩展</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/quotation.html" target="blank">引号和转义</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/variable.html" target="blank">变量</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/string.html" target="blank">字符串操作</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/arithmetic.html" target="blank">算术运算</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/readline.html" target="blank">行操作</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/stack.html" target="blank">目录堆栈</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/script.html" target="blank">脚本入门</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/read.html" target="blank">read 命令</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/condition.html" target="blank">条件判断</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/loop.html" target="blank">循环</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/function.html" target="blank">函数</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/array.html" target="blank">数组</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/set.html" target="blank">set 命令</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/debug.html" target="blank">脚本除错</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/mktemp.html" target="blank">mktemp 命令，trap 命令</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/startup.html" target="blank">启动环境</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/bash/prompt.html" target="blank">命令提示符</a></p>
</li>
</ul>`,r:{minutes:.47,words:140},y:"a",t:"Bash 教程",i:"shell"},["/tutorial/ops/linux/bash/index.html","/tutorial/ops/linux/bash/README.md"]],["v-f826aeb8","/tutorial/ops/linux/bash/arithmetic.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<h2> 算术表达式</h2>
<p><code>((...))</code> 语法可以进行整数的算术运算。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token variable"><span class="token punctuation">((</span>foo <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">))</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.86,words:1759},y:"a",t:"Bash 的算术运算",i:"calculate"},["/tutorial/ops/linux/bash/arithmetic","/tutorial/ops/linux/bash/arithmetic.md"]],["v-fd906a6a","/tutorial/ops/linux/bash/array.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>数组(array)是一个包含多个值的变量。成员的编号从 0 开始，数量没有上限，也没有要求成员被连续索引。</p>
`,r:{minutes:6.73,words:2020},y:"a",t:"数组",i:"array"},["/tutorial/ops/linux/bash/array","/tutorial/ops/linux/bash/array.md"]],["v-7386ebc9","/tutorial/ops/linux/bash/condition.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>本章介绍 Bash 脚本的条件判断语法。</p>
`,r:{minutes:13.9,words:4171},y:"a",t:"条件判断",i:"condition"},["/tutorial/ops/linux/bash/condition","/tutorial/ops/linux/bash/condition.md"]],["v-5bcd1311","/tutorial/ops/linux/bash/debug.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>本章介绍如何对 Shell 脚本除错。</p>
`,r:{minutes:4.38,words:1314},y:"a",t:"脚本除错",i:"debug"},["/tutorial/ops/linux/bash/debug","/tutorial/ops/linux/bash/debug.md"]],["v-1bbdb2a5","/tutorial/ops/linux/bash/expansion.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<h2> 简介</h2>
<p>Shell 接收到用户输入的命令以后，会根据空格将用户的输入，拆分成一个个词元(token)。然后，Shell 会扩展词元里面的特殊字符，扩展完成后才会调用相应的命令。</p>
<p>这种特殊字符的扩展，称为模式扩展(globbing)。其中有些用到通配符，又称为通配符扩展(wildcard expansion)。Bash 一共提供八种扩展。</p>
<ul>
<li>波浪线扩展</li>
<li><code>?</code> 字符扩展</li>
<li><code>*</code> 字符扩展</li>
<li>方括号扩展</li>
<li>大括号扩展</li>
<li>变量扩展</li>
<li>子命令扩展</li>
<li>算术扩展</li>
</ul>`,r:{minutes:16.34,words:4901},y:"a",t:"Bash 的模式扩展",i:"expansion"},["/tutorial/ops/linux/bash/expansion","/tutorial/ops/linux/bash/expansion.md"]],["v-00624376","/tutorial/ops/linux/bash/function.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>本章介绍 Bash 函数的用法。</p>
`,r:{minutes:3.89,words:1166},y:"a",t:"Bash 函数",i:"function"},["/tutorial/ops/linux/bash/function","/tutorial/ops/linux/bash/function.md"]],["v-991b1106","/tutorial/ops/linux/bash/grammar.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>本章介绍 Bash 的最基本语法。</p>
`,r:{minutes:5.88,words:1764},y:"a",t:"Bash 的基本语法",i:"quote"},["/tutorial/ops/linux/bash/grammar","/tutorial/ops/linux/bash/grammar.md"]],["v-146d6a98","/tutorial/ops/linux/bash/intro.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>Bash 是 Unix 系统和 Linux 系统的一种 Shell(命令行环境)，是目前绝大多数 Linux 发行版的默认 Shell。</p>
`,r:{minutes:5.73,words:1720},y:"a",t:"Bash 简介",i:"info"},["/tutorial/ops/linux/bash/intro","/tutorial/ops/linux/bash/intro.md"]],["v-0db2d2aa","/tutorial/ops/linux/bash/loop.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>Bash 提供三种循环语法 <code>for</code>、<code>while</code> 和 <code>until</code>。</p>
`,r:{minutes:6.77,words:2031},y:"a",t:"循环",i:"loop"},["/tutorial/ops/linux/bash/loop","/tutorial/ops/linux/bash/loop.md"]],["v-a5b86348","/tutorial/ops/linux/bash/mktemp.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 <code>/tmp</code> 目录里面创建文件或目录，这样做有很多弊端，使用 <code>mktemp</code> 命令是最安全的做法。</p>
`,r:{minutes:4.89,words:1466},y:"a",t:"mktemp 命令，trap 命令",i:"shell"},["/tutorial/ops/linux/bash/mktemp","/tutorial/ops/linux/bash/mktemp.md"]],["v-190d4eaa","/tutorial/ops/linux/bash/prompt.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>用户进入 Bash 以后，Bash 会显示一个命令提示符，用来提示用户在该位置后面输入命令。</p>
`,r:{minutes:3.85,words:1156},y:"a",t:"命令提示符",i:"shell"},["/tutorial/ops/linux/bash/prompt","/tutorial/ops/linux/bash/prompt.md"]],["v-186b61f8","/tutorial/ops/linux/bash/quotation.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>Bash 只有一种数据类型，就是字符串。不管用户输入什么数据，Bash 都视为字符串。因此，字符串相关的引号和转义，对 Bash 来说就非常重要。</p>
`,r:{minutes:7.02,words:2106},y:"a",t:"引号和转义",i:"quote"},["/tutorial/ops/linux/bash/quotation","/tutorial/ops/linux/bash/quotation.md"]],["v-7f7046f8","/tutorial/ops/linux/bash/read.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<h2> 用法</h2>
<p>有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 <code>read</code> 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。</p>
<p><code>read</code> 命令的格式如下。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> <span class="token punctuation">[</span>variable<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:5.18,words:1553},y:"a",t:"read 命令",i:"read"},["/tutorial/ops/linux/bash/read","/tutorial/ops/linux/bash/read.md"]],["v-31b34804","/tutorial/ops/linux/bash/readline.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<h2> 简介</h2>
<p>Bash 内置了 Readline 库，具有这个库提供的很多“行操作”功能，比如命令的自动补全，可以大大加快操作速度。</p>
<p>这个库默认采用 Emacs 快捷键，也可以改成 Vi 快捷键。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:7.23,words:2168},y:"a",t:"Bash 行操作",i:"line"},["/tutorial/ops/linux/bash/readline","/tutorial/ops/linux/bash/readline.md"]],["v-b69340ba","/tutorial/ops/linux/bash/script.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>脚本(script)就是包含一系列命令的一个文本文件。Shell 读取这个文件，依次执行里面的所有命令，就好像这些命令直接输入到命令行一样。所有能够在命令行完成的任务，都能够用脚本完成。</p>
<p>脚本的好处是可以重复使用，也可以指定在特定场合自动调用，比如系统启动或关闭时自动执行脚本。</p>
`,r:{minutes:12.47,words:3741},y:"a",t:"Bash 脚本入门",i:"code"},["/tutorial/ops/linux/bash/script","/tutorial/ops/linux/bash/script.md"]],["v-9a54e5bc","/tutorial/ops/linux/bash/set.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p><code>set</code> 命令是 Bash 脚本的重要环节，却常常被忽视，导致脚本的安全性和可维护性出问题。本章介绍 <code>set</code> 的基本用法，帮助您写出更安全的 Bash 脚本。</p>
`,r:{minutes:7.38,words:2214},y:"a",t:"set 命令",i:"set"},["/tutorial/ops/linux/bash/set","/tutorial/ops/linux/bash/set.md"]],["v-42df3ffc","/tutorial/ops/linux/bash/stack.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>为了方便用户在不同目录之间切换，Bash 提供了目录堆栈功能。</p>
`,r:{minutes:2.97,words:891},y:"a",t:"目录堆栈",i:"stack"},["/tutorial/ops/linux/bash/stack","/tutorial/ops/linux/bash/stack.md"]],["v-14a0f267","/tutorial/ops/linux/bash/startup.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<h2> Session</h2>
<p>用户每次使用 Shell，都会开启一个与 Shell 的 Session(对话)。</p>
<p>Session 有两种类型: 登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。</p>
<h3> 登录 Session</h3>
<p>登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，通常需要用户输入用户名和密码进行登录。</p>
<p>登录 Session 一般进行整个系统环境的初始化，启动的初始化脚本依次如下。</p>
<ul>
<li><code>/etc/profile</code>: 所有用户的全局配置脚本。</li>
<li><code>/etc/profile.d</code> 目录里面所有 <code>.sh</code> 文件</li>
<li><code>~/.bash_profile</code>: 用户的个人配置脚本。如果该脚本存在，则执行完就不再往下执行。</li>
<li><code>~/.bash_login</code>: 如果 <code>~/.bash_profile</code> 没找到，则尝试执行这个脚本(C shell 的初始化脚本)。如果该脚本存在，则执行完就不再往下执行。</li>
<li><code>~/.profile</code>: 如果<code>~/.bash_profile</code> 和 <code>~/.bash_login</code> 都没找到，则尝试读取这个脚本(Bourne shell 和 Korn shell 的初始化脚本)。</li>
</ul>`,r:{minutes:3.27,words:981},y:"a",t:"Bash 启动环境",i:"leaf"},["/tutorial/ops/linux/bash/startup","/tutorial/ops/linux/bash/startup.md"]],["v-5d9b6c1d","/tutorial/ops/linux/bash/string.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>本章介绍 Bash 字符串操作的语法。</p>
`,r:{minutes:6.34,words:1902},y:"a",t:"字符串操作",i:"string"},["/tutorial/ops/linux/bash/string","/tutorial/ops/linux/bash/string.md"]],["v-549b295c","/tutorial/ops/linux/bash/variable.html",{a:"阮一峰",d:1681181241e3,c:"Linux",g:["Bash"],e:`<p>Bash 变量分成环境变量和自定义变量两类。</p>
`,r:{minutes:11.45,words:3434},y:"a",t:"Bash 变量",i:"variable"},["/tutorial/ops/linux/bash/variable","/tutorial/ops/linux/bash/variable.md"]],["v-e6e44498","/tutorial/ops/linux/command/",{d:15740352e5,l:"2019年11月18日",c:"Linux",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/ops/linux/command/command.html" target="blank">命令格式简介</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/dir.html" target="blank">目录相关</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/file.html" target="blank">文件相关</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/other.html" target="blank">其他命令</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/add.html" target="blank">命令的自动补全</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/excu.html" target="blank">命令的执行</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/path.html" target="blank">环境变量</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/command/ln.html" target="blank">创建链接</a></p>
</li>
</ul>`,r:{minutes:.21,words:62},y:"a",t:"Linux 命令格式",i:"shell"},["/tutorial/ops/linux/command/index.html","/tutorial/ops/linux/command/README.md"]],["v-91c422e8","/tutorial/ops/linux/command/add.html",{d:1574208e6,l:"2019年11月20日",c:"Linux",e:`<p>文件名(或者目录名)是执行 Linux 命令中最常见的参数，例如前面介绍的 <code>cd</code>、<code>mkdir</code>、<code>cp</code> 等命令，都涉及到了文件名。然而对初学者来说，输入完整的文件名感觉很麻烦，尤其面临文件名(目录名)特别长的时候。</p>
<p>考虑到这种情况，Shell (Bash) 提供了一种称为“命令行自动补全”的功能，即在输入文件名的时候，只需要输入该文件名的前几个字符，然后按 Tab 键，Shell 就可以自动将文件名补全。</p>
`,r:{minutes:3.85,words:1156},y:"a",t:"命令补全",i:"square-check"},["/tutorial/ops/linux/command/add","/tutorial/ops/linux/command/add.md"]],["v-63ad2822","/tutorial/ops/linux/command/command.html",{d:15740352e5,l:"2019年11月18日",c:"Linux",e:`<h2> 命令提示符</h2>
<p>登录系统后，第一眼看到的内容是:</p>
<div class="language-shell-session line-numbers-mode" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token output">[root@localhost ~]#
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:3.23,words:968},y:"a",t:"基本格式",i:"shell"},["/tutorial/ops/linux/command/command","/tutorial/ops/linux/command/command.md"]],["v-0f247620","/tutorial/ops/linux/command/dir.html",{d:15740352e5,l:"2019年11月18日",c:"Linux",e:`<h2> pwd 命令</h2>
<p>由于 Linux 文件系统中有许多目录，当用户执行一条 Linux 命令又没有指定该命令或参数所在的目录时，Linux 系统就会首先在当前目录(目前的工作目录)搜寻这个命令或它的参数。因此，用户在执行命令之前，常常需要确定目前所在的工作目录，即当前目录。</p>
<p>当用户登陆 Linux 系统之后，其当前目录就是它的主目录。那么，如何确定当前目录呢? 可以使用 Linux 系统的 pwd 命令来显示当前目录的绝对路径。</p>
<p>pwd 命令，是 Print Working Directory (打印工作目录)的缩写，功能是显示用户当前所处的工作目录。该命令的基本格式为:</p>`,r:{minutes:5.3,words:1589},y:"a",t:"文件夹",i:"tree"},["/tutorial/ops/linux/command/dir","/tutorial/ops/linux/command/dir.md"]],["v-47576740","/tutorial/ops/linux/command/excu.html",{d:1574208e6,l:"2019年11月20日",c:"Linux",e:`<p>前面讲过，在 Linux 系统中“一切皆文件”，Linux 命令也不例外。那么，当编辑完成 Linux 命令并回车后，系统底层到底发生了什么事情呢?</p>
<p>简单来说，Linux 命令的执行过程分为如下 4 个步骤。</p>
<ol>
<li>
<p>判断路径</p>
<p>判断用户是否以绝对路径或相对路径的方式输入命令(如 <code>/bin/ls</code>)，如果是的话直接执行。</p>
</li>
<li>
<p>检查别名</p>
<p>Linux 系统会检查用户输入的命令是否为 “别名命令”。要知道，通过 alias 命令是可以给现有命令自定义别名的，即用一个自定义的命令名称来替换原本的命令名称。</p>
<p>例如，我们经常使用的 <code>rm</code> 命令，其实就是 <code>rm -i</code> 这个整体的别名:</p>
<div class="language-shell-session line-numbers-mode" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">alias</span> <span class="token function">rm</span></span></span>
<span class="token output">alias rm='rm -i'
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这使得当使用 rm 命令删除指定文件时，Linux 系统会要求我们再次确认是否执行删除操作。例如:</p>
<div class="language-shell-session line-numbers-mode" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">rm</span> a.txt <span class="token operator">&lt;</span>-- 假定当前目录中已经存在 a.txt 文件</span></span>
<span class="token output">rm: remove regular file 'a.txt'? y  &lt;-- 手动输入 y，即确定删除
[root@localhost ~]#
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以使用 <code>unalias</code> 命令，将 Linux 系统设置的 <code>rm</code> 别名删除掉，执行命令如下:</p>
<div class="language-shell-session line-numbers-mode" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">alias</span> <span class="token function">rm</span></span></span>
<span class="token output">alias rm='rm -i'
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">unalias</span> <span class="token function">rm</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">rm</span> a.txt</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span>  <span class="token bash language-bash"><span class="token operator">&lt;</span>--直接删除，不再询问</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>判断是内部命令还是外部命令</p>
<p>Linux 命令行解释器 (又称为 Shell) 会判断用户输入的命令是内部命令还是外部命令。其中，内部命令指的是解释器内部的命令，会被直接执行；而用户通常输入的命令都是外部命令，这些命令交给步骤四继续处理。
内部命令由 Shell 自带，会随着系统启动，可以直接从内存中读取；而外部命令仅是在系统中有对应的可执行文件，执行时需要读取该文件。</p>
<p>判断一个命令属于内部命令还是外部命令，可以使用 <code>type</code> 命令实现。例如:</p>
<div class="language-shell-session line-numbers-mode" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">type</span> <span class="token builtin class-name">pwd</span></span></span>
<span class="token output">pwd is a shell builtin  &lt;-- pwd是内部命令
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">type</span> <span class="token function">top</span></span></span>
<span class="token output">top is /usr/bin/top  &lt;-- top是外部命令
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查找外部命令对应的可执行文件</p>
<p>当用户执行的是外部命令时，系统会在指定的多个路径中查找该命令的可执行文件，而定义这些路径的变量，就称为 PATH 环境变量，其作用就是告诉 Shell 待执行命令的可执行文件可能存放的位置，也就是说，Shell 会在 PATH 变量包含的多个路径中逐个查找，直到找到为止(如果找不到，Shell 会提供用户“找不到此命令”)。</p>
</li>
</ol>`,r:{minutes:2.33,words:699},y:"a",t:"命令执行",i:"play"},["/tutorial/ops/linux/command/excu","/tutorial/ops/linux/command/excu.md"]],["v-1b31a5a9","/tutorial/ops/linux/command/file.html",{d:15741216e5,l:"2019年11月19日",c:"Linux",e:`<h2> touch 命令</h2>
<p>需要注意的是，touch 命令不光可以用来创建文件(当指定操作文件不存在时，该命令会在当前位置建立一个空文件)，此命令更重要的功能是修改文件的时间参数(但当文件存在时，会修改此文件的时间参数)。</p>
<p>Linux 系统中，每个文件主要拥有 3 个时间参数(通过 stat 命令进行查看)，分别是文件的访问时间、数据修改时间以及状态修改时间:</p>
<ul>
<li>访问时间 (Access Time，简称 atime): 只要文件的内容被读取，访问时间就会更新。例如，使用 <code>cat</code> 命令可以查看文件的内容，此时文件的访问时间就会发生改变。</li>
<li>数据修改时间 (Modify Time，简称 mtime): 当文件的内容数据发生改变，此文件的数据修改时间就会跟着相应改变。</li>
<li>状态修改时间 (Change Time，简称 ctime): 当文件的状态发生变化，就会相应改变这个时间。比如说，如果文件的权限或者属性发生改变，此时间就会相应改变。</li>
</ul>`,r:{minutes:4.3,words:1289},y:"a",t:"文件",i:"file"},["/tutorial/ops/linux/command/file","/tutorial/ops/linux/command/file.md"]],["v-28726463","/tutorial/ops/linux/command/ln.html",{d:1574208e6,l:"2019年11月20日",c:"Linux",e:`<p>建立硬链接和软链接非常简单，那这两种链接有什么区别? 它们都有什么作用? 这才是链接文件最不容易理解的地方，我们分别来讲讲。</p>
`,r:{minutes:7.46,words:2237},y:"a",t:"链接",i:"ask"},["/tutorial/ops/linux/command/ln","/tutorial/ops/linux/command/ln.md"]],["v-11d6f87d","/tutorial/ops/linux/command/other.html",{d:15741216e5,l:"2019年11月19日",c:"Linux",e:`<h2> cp 命令</h2>
<p>cp 命令，主要用来复制文件和目录，同时借助某些选项，还可以实现复制整个目录，以及比对两文件的新旧而予以升级等功能。</p>
<p>cp 命令的基本格式如下:</p>
<div class="language-shell-session line-numbers-mode" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">cp</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 源文件 目标文件</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:10.53,words:3159},y:"a",t:"其他文件命令",i:"sort"},["/tutorial/ops/linux/command/other","/tutorial/ops/linux/command/other.md"]],["v-5324f8a0","/tutorial/ops/linux/command/path.html",{d:1574208e6,l:"2019年11月20日",c:"Linux",e:`<h1> 环境变量</h1>
<h2> 变量</h2>
<p>变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。
值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。</p>
<p>我们可以使用 env 命令来查看到 Linux 系统中所有的环境变量，执行命令如下:</p>
<div class="language-shell-session line-numbers-mode" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">env</span></span></span>
<span class="token output">ORBIT_SOCKETDIR=/tmp/orbit-root
HOSTNAME=livecd.centos
GIO_LAUNCHED_DESKTOP_FILE_PID=2065
TERM=xterm
SHELL=/bin/bash
......
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.85,words:1454},y:"a",t:"环境变量",i:"shell"},["/tutorial/ops/linux/command/path","/tutorial/ops/linux/command/path.md"]],["v-41d2e35e","/tutorial/ops/linux/command/temp.html",{d:1681181241e3,c:"Linux",e:`<h1> 其他指令</h1>
<h2> 文件</h2>
<h3> 创建文件</h3>
<ul>
<li>touch</li>
<li>vi</li>
</ul>
<h3> 编辑文件</h3>
<ul>
<li>vi</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用 vi 命令后，默认进入浏览模式。</p>
<p>按 <code>i</code> 进入 insert 模式， 按 <code>ESC</code> 退出。</p>
<ol>
<li>
<p>命令模式下，输入: <code>/</code> 字符串</p>
<p>比如搜索 user, 输入 <code>/user</code></p>
<p>按下回车之后，可以看到 vim 已经把光标移动到该字符处和高亮了匹配的字符串</p>
</li>
<li>
<p>查看下一个匹配，按下 n(小写 n)</p>
</li>
<li>
<p>跳转到上一个匹配，按下 N(大写 N)</p>
</li>
<li>
<p>搜索后，我们打开别的文件，发现也被高亮了，怎么关闭高亮?</p>
</li>
</ol>
<p>命令模式下，输入 <code>:nohlsearch</code> 也可以 <code>:set nohlsearch</code>；当然，可以简写，<code>noh</code> 或者 <code>set noh</code>。</p>
</div>`,r:{minutes:3.63,words:1088},y:"a",t:"其他指令"},["/tutorial/ops/linux/command/temp","/tutorial/ops/linux/command/temp.md"]],["v-32651cc3","/tutorial/ops/linux/file/",{d:15739488e5,l:"2019年11月17日",c:"Linux",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/ops/linux/file/file.html" target="blank">Linux 文件</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/file/dir.html" target="blank">Linux 目录</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/file/mount.html" target="blank">挂载</a></p>
</li>
</ul>
`,r:{minutes:.08,words:24},y:"a",t:"文件",i:"file"},["/tutorial/ops/linux/file/index.html","/tutorial/ops/linux/file/README.md"]],["v-754f362f","/tutorial/ops/linux/file/dir.html",{d:15739488e5,l:"2019年11月17日",c:"Linux",e:`<h2> Linux 文件目录结构</h2>
<p>学习 Linux，不仅限于学习各种命令，了解整个 Linux 文件系统的目录结构以及各个目录的功能同样至关重要。</p>
<p>使用 Linux 时，通过命令行输入 <code>ls -l /</code> 可以看到，在 Linux 根目录 (/) 下包含很多的子目录(称为一级目录)，例如 <code>bin</code>、<code>boot</code>、<code>dev</code> 等。同时，各一级目录下还含有很多子目录(称为二级目录)，比如 <code>/bin/bash</code>、<code>/bin/ed</code> 等。Linux 文件系统目录总体呈现树形结构，<code>/</code> 根目录就相当于树根。</p>`,r:{minutes:8.5,words:2549},y:"a",t:"目录",i:"tree"},["/tutorial/ops/linux/file/dir","/tutorial/ops/linux/file/dir.md"]],["v-7a5ee77a","/tutorial/ops/linux/file/file.html",{d:15739488e5,l:"2019年11月17日",c:"Linux",e:`<h2> 文件系统</h2>
<p>目录就相当于 Windows 中的文件夹，目录中存放的既可以是文件，也可以是其他的子目录，而文件中存储的是真正的信息。</p>
<p>文件系统的最顶层是由根目录开始的，系统使用“<code>/</code>”来表示根目录，在根目录之下的既可以是目录，也可以是文件，而每一个目录中又可以包含(子)目录或文件。如此反复就可以构成一个庞大的文件系统。
其实，使用这种树状、具有层次的文件结构主要目的是方便文件系统的管理和维护，想象一下，如果所有的文件都放在一个目录下，其文件系统的管理和维护将变成一场噩梦。</p>
<p>现实中也有许多类似的例子，例如在整个行政管理体制中，村民就相当于文件，他们住在一个村庄中，村庄就是存储村民的目录。许多村又组成了个乡，这个乡就相当于存储村的目录，依此类推，最终就构建出了一个庞大的行政区域管理结构图。</p>`,r:{minutes:5.19,words:1558},y:"a",t:"文件",i:"file"},["/tutorial/ops/linux/file/file","/tutorial/ops/linux/file/file.md"]],["v-1f4c1d3a","/tutorial/ops/linux/file/mount.html",{d:15739488e5,l:"2019年11月17日",c:"Linux",e:`<h1> Linux 挂载</h1>
<p>前面讲过，Linux 系统中“一切皆文件”，所有文件都放置在以根目录为树根的树形目录结构中。在 Linux 看来，任何硬件设备也都是文件，它们各有自己的一套文件系统(文件目录结构)。</p>
<p>因此产生的问题是，当在 Linux 系统中使用这些硬件设备时，只有将 Linux 本身的文件目录与硬件设备的文件目录合二为一，硬件设备才能为我们所用。合二为一的过程称为“挂载”。</p>
<p>如果不挂载，通过 Linux 系统中的图形界面系统可以查看找到硬件设备，但命令行方式无法找到。</p>
<p>挂载，指的就是将设备文件中的顶级目录连接到 Linux 根目录下的某一目录(最好是空目录)，访问此目录就等同于访问设备文件。</p>`,r:{minutes:2.1,words:630},y:"a",t:"Linux 挂载",i:"mount"},["/tutorial/ops/linux/file/mount","/tutorial/ops/linux/file/mount.md"]],["v-1fa756b3","/tutorial/ops/linux/intro/",{d:1573776e6,l:"2019年11月15日",c:"Linux",e:`<h1> Linux 简介</h1>
<ul>
<li>
<p><a href="/tutorial/ops/linux/intro/intro.html" target="blank">Linux 介绍</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/intro/history.html" target="blank">Linux 历史</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/intro/language.html" target="blank">Linux 编写语言</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/intro/advantage.html" target="blank">Linux 优势</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/intro/desktop.html" target="blank">Linux 桌面环境</a></p>
</li>
</ul>`,r:{minutes:.12,words:35},y:"a",t:"Linux 简介",i:"info"},["/tutorial/ops/linux/intro/index.html","/tutorial/ops/linux/intro/README.md"]],["v-2a4505fe","/tutorial/ops/linux/intro/advantage.html",{d:15738624e5,l:"2019年11月16日",c:"Linux",e:`<h1> Linux 的优点</h1>
<p>相比 Windows 系统，Linux 系统有更好的稳定性。此外，Linux 还有如下优点:</p>
<ol>
<li>
<p>大量的可用软件及免费软件</p>
<p>Linux 系统上有着大量的可用软件，且绝大多数是免费的，比如声名赫赫的 Apache、Samba、PHP、MySQL 等，构建成本低廉，是 Linux 被众多企业青睐的原因之一。当然，这和 Linux 出色的性能是分不开的，否则，节约成本就没有任何意义。</p>
<p>但不可否认的是，Linux 在办公应用和游戏娱乐方面的软件相比 Windows 系统还很匮乏，所以，即便打游戏、看影片用的也是 Windows，至于 Linux，就把它用在擅长的服务器领域吧。</p>
</li>
<li>
<p>良好的可移植性及灵活注
Linux 系统有良好的可移植性，它几乎支持所有的 CPU 平台，这使得它便于裁剪和定制。我们可以把 Linux 放在 U 盘、光盘等存储介质中，也可以在嵌入式领域广泛应用。</p>
<p>如果读者希望不进行安装就体验 Linux 系统，则可以在网上下载一个 Live DVD 版的 Linux 镜像，刻成光盘放入光驱或者用虚拟机软件直接载入镜像文件，设置 CMOS/BIOS 为光盘启动，系统就会自动载入光盘文件，启动进入 Linux 系统。</p>
</li>
<li>
<p>优良的稳定性和安全性</p>
<p>著名的黑客埃里克•雷蒙德(EricS.Raymond)有一句名言: “足够多的眼睛，就可让所有问题浮现”。举个例子，假如笔者在演讲，台下人山人海，明哥中午吃饭不小心，有几个饭粒粘在衣领上了，分分钟就会被大家发现，因为看的人太多了；如果台下就稀稀落落两三个人且离得很远，那就算明哥衣领上有一大块油渍也不会被发现。</p>
<p>Linux 开放源代码，将所有代码放在网上，全世界的程序员都看得到，有什么缺陷和漏洞，很快就会被发现，从而成就了它的稳定性和安全注。</p>
</li>
<li>
<p>支持几乎所有的网络协议及开发语言</p>
<p>经常有初学的朋友问我，Linux 是不是对 TCP/IP 协议支持不好、是不是 Java 开发环境不灵之类的问题。前面在 UNIX 发展史中已经介绍了，UNIX 系统是与 C 语言、TCP/IP 协议一同发展起来的，而 Linux 是 UNIX 的一种，C 语言又衍生出了现今主流的语言 PHP、Java、C++ 等，而哪一个网络协议与 TCP/IP 无关呢? 所以，Linux 对网络协议和开发语言的支持很好。</p>
</li>
</ol>`,r:{minutes:2.3,words:689},y:"a",t:"Linux 的优点",i:"compare"},["/tutorial/ops/linux/intro/advantage","/tutorial/ops/linux/intro/advantage.md"]],["v-40417720","/tutorial/ops/linux/intro/desktop.html",{d:15738624e5,l:"2019年11月16日",c:"Linux",e:`<h1> 桌面系统</h1>
<h2> KDE 桌面系统</h2>
<p>KDE 是 K Desktop Environment 的缩写，中文译为“K 桌面环境”。</p>
<p>KDE 是基于大名鼎鼎的 Qt 的，最初于 1996 年作为开源项目公布，并在 1998 年发布了第一个版本，现在 KDE 几乎是排名第一的桌面环境了。</p>
<p>许多流行的 Linux 发行版都提供了 KDE 桌面环境，比如 Ubuntu、Linux Mint、OpenSUSE、Fedora、Kubuntu、PC Linux OS 等。</p>
<p>KDE 和 Windows 比较类似，各位初学者相信都是 Windows 的用户，所以切换到 KDE 也不会有太大的障碍。</p>`,r:{minutes:6.54,words:1961},y:"a",t:"桌面系统",i:"computer"},["/tutorial/ops/linux/intro/desktop","/tutorial/ops/linux/intro/desktop.md"]],["v-2f48faf8","/tutorial/ops/linux/intro/history.html",{d:1573776e6,l:"2019年11月15日",c:"Linux",g:["介绍"],e:`<h1> Linux 和 UNIX</h1>
<p>UNIX 与 Linux 之间的关系是一个很有意思的话题。在目前主流的服务器端操作系统中，UNIX 诞生于 20 世纪 60 年代末，Windows 诞生于 20 世纪 80 年代中期，Linux 诞生于 20 世纪 90 年代初，可以说 UNIX 是操作系统中的"老大哥"，后来的 Windows 和 Linux 都参考了 UNIX。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>现代的 Windows 系统已经朝着“图形界面”的方向发展了，和 UNIX 系统有了巨大的差异，从表面上甚至看不出两者的关联。</p>
</div>`,r:{minutes:12.46,words:3738},y:"a",t:"Linux 和 UNIX",i:"time"},["/tutorial/ops/linux/intro/history","/tutorial/ops/linux/intro/history.md"]],["v-3315d0e0","/tutorial/ops/linux/intro/intro.html",{d:1573776e6,l:"2019年11月15日",c:"Linux",g:["介绍"],e:`<h1> Linux 简介</h1>
<p>Linux 内核最初只是由芬兰人林纳斯·托瓦兹 (Linus Torvalds) 在赫尔辛基大学上学时出于个人爱好而编写的。</p>
<p>Linux 是一套免费使用和自由传播的类 Unix 操作系统，是一个基于 POSIX 和 UNIX 的多用户、多任务、支持多线程和多 CPU 的操作系统。</p>
<p>Linux 能运行主要的 UNIX 工具软件、应用程序和网络协议。它支持 32 位和 64 位硬件。Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。</p>
<p>Linux 让开展各种实际有用且具有创造性的事情成为可能。例如，您可以在一个 U 盘上装载 Linux 的自生系统引导映像 (live boot image)，启动一台硬盘已经崩溃的计算机，之后査找并解决该问题。或者，因为 Linux 是一个真正的多用户操作系统，它具有非常好的私密性和稳定性，整个团队可以同时从本地或远程登录进行工作。</p>`,r:{minutes:6.47,words:1941},y:"a",t:"Linux 简介",i:"info"},["/tutorial/ops/linux/intro/intro","/tutorial/ops/linux/intro/intro.md"]],["v-1c3d68ae","/tutorial/ops/linux/intro/language.html",{d:15738624e5,l:"2019年11月16日",c:"Linux",e:`<p>Linux 中大量使用脚本语言，而不是 C 语言!</p>
`,r:{minutes:7.31,words:2194},y:"a",t:"语言",i:"language"},["/tutorial/ops/linux/intro/language","/tutorial/ops/linux/intro/language.md"]],["v-2ac8e6af","/tutorial/ops/linux/intro/startup.html",{d:1681181241e3,e:`<h1> Linux 系统启动过程</h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>本篇教程以 CentOS 为例介绍系统的启动过程。</p>
</div>
<p>Linux 启动时我们会看到许多启动信息。</p>
<p>Linux 系统的启动过程并不是大家想象中的那么复杂，其过程可以分为 5 个阶段:</p>
<ul>
<li>内核的引导。</li>
<li>运行 init。</li>
<li>系统初始化。</li>
<li>建立终端 。</li>
<li>用户登录系统。</li>
</ul>`,r:{minutes:3.37,words:1010},y:"a",t:"Linux 系统启动过程"},["/tutorial/ops/linux/intro/startup","/tutorial/ops/linux/intro/startup.md"]],["v-3ba080b8","/tutorial/ops/linux/ubuntu/",{d:15742944e5,l:"2019年11月21日",c:"Linux",e:`<h1> ubuntu</h1>
<ul>
<li>
<p><a href="/tutorial/ops/linux/ubuntu/manage.html" target="blank">管理包</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/ubuntu/debug.html" target="blank">开发软件</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/ubuntu/webserver.html" target="blank">网络服务器相关</a></p>
</li>
<li>
<p><a href="/tutorial/ops/linux/ubuntu/lang.html" target="blank">语言切换</a></p>
</li>
</ul>`,r:{minutes:.1,words:31},y:"a",t:"ubuntu",i:"ubuntu"},["/tutorial/ops/linux/ubuntu/index.html","/tutorial/ops/linux/ubuntu/README.md"]],["v-20f9a11e","/tutorial/ops/linux/ubuntu/debug.html",{d:15742944e5,l:"2019年11月21日",c:"Linux",e:`<h1> 开发软件</h1>
<h2> 安装 VS Code</h2>
<ul>
<li>
<p>使用 snap</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">&gt;</span> packages.microsoft.gpg
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> root <span class="token parameter variable">-g</span> root <span class="token parameter variable">-m</span> <span class="token number">644</span> packages.microsoft.gpg /usr/share/keyrings/
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" &gt; /etc/apt/sources.list.d/vscode.list'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后正常安装:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> code <span class="token comment"># or code-insiders</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:.83,words:250},y:"a",t:"开发软件",i:"debug"},["/tutorial/ops/linux/ubuntu/debug","/tutorial/ops/linux/ubuntu/debug.md"]],["v-7c5381f3","/tutorial/ops/linux/ubuntu/lang.html",{d:15743808e5,l:"2019年11月22日",c:"Linux",e:`<h1> 语言切换</h1>
<p>查看当前语言包: <code>locale -a</code></p>
<p>中文语言是: <code>zh_CN.utf8</code></p>
<h2> 安装中文语言包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> language-pack-zh-hans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.18,words:53},y:"a",t:"语言切换",i:"language"},["/tutorial/ops/linux/ubuntu/lang","/tutorial/ops/linux/ubuntu/lang.md"]],["v-cd3ed248","/tutorial/ops/linux/ubuntu/manage.html",{d:15742944e5,l:"2019年11月21日",c:"Linux",e:`<h1> 管理工具</h1>
<h2> apt-get</h2>
<p><code>apt-get</code> 命令默认的源在国内访问很慢，可以考虑换源。</p>
<ul>
<li>
<p>获取软件包更新:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>更新软件包:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>其他命令<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><a class="footnote-anchor" id="footnote-ref1">
</a></li><a class="footnote-anchor" id="footnote-ref1">
</a></ul>`,r:{minutes:1.15,words:344},y:"a",t:"管理工具",i:"tool"},["/tutorial/ops/linux/ubuntu/manage","/tutorial/ops/linux/ubuntu/manage.md"]],["v-ef5ccb4c","/tutorial/ops/linux/ubuntu/webserver.html",{d:15743808e5,l:"2019年11月22日",e:`<h1> 网络服务器相关</h1>
<h2> ftp</h2>
<h3> vsftpd</h3>
<ul>
<li>
<p>安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> vsftpd <span class="token function">ftp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>配置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至少要更改:</p>
<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">write_enable</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token key attr-name">utf8_filesystem</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:1.13,words:339},y:"a",t:"网络服务器相关",i:"network"},["/tutorial/ops/linux/ubuntu/webserver","/tutorial/ops/linux/ubuntu/webserver.md"]],["v-7e6cf7b4","/tutorial/ops/markdown/emoji/",{d:1681181241e3,c:"Markdown",g:["Markdown","Emoji"],e:`<h2> 人物</h2>
<ul>
<li><a href="/tutorial/ops/markdown/emoji/people.html" target="blank">点击前往</a></li>
</ul>
<h2> 自然</h2>
<ul>
<li><a href="/tutorial/ops/markdown/emoji/nature.html" target="blank">点击前往</a></li>
</ul>
<h2> 对象</h2>
<ul>
<li><a href="/tutorial/ops/markdown/emoji/object.html" target="blank">点击前往</a></li>
</ul>`,r:{minutes:.15,words:46},y:"a",t:"Emoji 列表",i:"emoji"},["/tutorial/ops/markdown/emoji/index.html","/tutorial/ops/markdown/emoji/README.md"]],["v-73aef744","/tutorial/ops/markdown/emoji/nature.html",{d:1681181241e3,c:"Markdown",g:["Markdown","Emoji"],e:`<ul>
<li>☀️ <code>:sunny:</code></li>
<li>☔ <code>:umbrella:</code></li>
<li>☁️ <code>:cloud:</code></li>
<li>❄️ <code>:snowflake:</code></li>
<li>⛄ <code>:snowman:</code></li>
<li>⚡ <code>:zap:</code></li>
<li>🌀 <code>:cyclone:</code></li>
<li>🌁 <code>:foggy:</code></li>
<li>🌊 <code>:ocean:</code></li>
<li>🐱 <code>:cat:</code></li>
<li>🐶 <code>:dog:</code></li>
<li>🐭 <code>:mouse:</code></li>
<li>🐹 <code>:hamster:</code></li>
<li>🐰 <code>:rabbit:</code></li>
<li>🐺 <code>:wolf:</code></li>
<li>🐸 <code>:frog:</code></li>
<li>🐯 <code>:tiger:</code></li>
<li>🐨 <code>:koala:</code></li>
<li>🐻 <code>:bear:</code></li>
<li>🐷 <code>:pig:</code></li>
<li>🐽 <code>:pig_nose:</code></li>
<li>🐮 <code>:cow:</code></li>
<li>🐗 <code>:boar:</code></li>
<li>🐵 <code>:monkey_face:</code></li>
<li>🐒 <code>:monkey:</code></li>
<li>🐴 <code>:horse:</code></li>
<li>🐎 <code>:racehorse:</code></li>
<li>🐫 <code>:camel:</code></li>
<li>🐑 <code>:sheep:</code></li>
<li>🐘 <code>:elephant:</code></li>
<li>🐼 <code>:panda_face:</code></li>
<li>🐍 <code>:snake:</code></li>
<li>🐦 <code>:bird:</code></li>
<li>🐤 <code>:baby_chick:</code></li>
<li>🐥 <code>:hatched_chick:</code></li>
<li>🐣 <code>:hatching_chick:</code></li>
<li>🐔 <code>:chicken:</code></li>
<li>🐧 <code>:penguin:</code></li>
<li>🐢 <code>:turtle:</code></li>
<li>🐛 <code>:bug:</code></li>
<li>🐝 <code>:honeybee:</code></li>
<li>🐜 <code>:ant:</code></li>
<li>🪲 <code>:beetle:</code></li>
<li>🐌 <code>:snail:</code></li>
<li>🐙 <code>:octopus:</code></li>
<li>🐠 <code>:tropical_fish:</code></li>
<li>🐟 <code>:fish:</code></li>
<li>🐳 <code>:whale:</code></li>
<li>🐋 <code>:whale2:</code></li>
<li>🐬 <code>:dolphin:</code></li>
<li>🐄 <code>:cow2:</code></li>
<li>🐏 <code>:ram:</code></li>
<li>🐀 <code>:rat:</code></li>
<li>🐃 <code>:water_buffalo:</code></li>
<li>🐅 <code>:tiger2:</code></li>
<li>🐇 <code>:rabbit2:</code></li>
<li>🐉 <code>:dragon:</code></li>
<li>🐐 <code>:goat:</code></li>
<li>🐓 <code>:rooster:</code></li>
<li>🐕 <code>:dog2:</code></li>
<li>🐖 <code>:pig2:</code></li>
<li>🐁 <code>:mouse2:</code></li>
<li>🐂 <code>:ox:</code></li>
<li>🐲 <code>:dragon_face:</code></li>
<li>🐡 <code>:blowfish:</code></li>
<li>🐊 <code>:crocodile:</code></li>
<li>🐪 <code>:dromedary_camel:</code></li>
<li>🐆 <code>:leopard:</code></li>
<li>🐈 <code>:cat2:</code></li>
<li>🐩 <code>:poodle:</code></li>
<li>🐾 <code>:paw_prints:</code></li>
<li>💐 <code>:bouquet:</code></li>
<li>🌸 <code>:cherry_blossom:</code></li>
<li>🌷 <code>:tulip:</code></li>
<li>🍀 <code>:four_leaf_clover:</code></li>
<li>🌹 <code>:rose:</code></li>
<li>🌻 <code>:sunflower:</code></li>
<li>🌺 <code>:hibiscus:</code></li>
<li>🍁 <code>:maple_leaf:</code></li>
<li>🍃 <code>:leaves:</code></li>
<li>🍂 <code>:fallen_leaf:</code></li>
<li>🌿 <code>:herb:</code></li>
<li>🍄 <code>:mushroom:</code></li>
<li>🌵 <code>:cactus:</code></li>
<li>🌴 <code>:palm_tree:</code></li>
<li>🌲 <code>:evergreen_tree:</code></li>
<li>🌳 <code>:deciduous_tree:</code></li>
<li>🌰 <code>:chestnut:</code></li>
<li>🌱 <code>:seedling:</code></li>
<li>🌼 <code>:blossom:</code></li>
<li>🌾 <code>:ear_of_rice:</code></li>
<li>🐚 <code>:shell:</code></li>
<li>🌐 <code>:globe_with_meridians:</code></li>
<li>🌞 <code>:sun_with_face:</code></li>
<li>🌝 <code>:full_moon_with_face:</code></li>
<li>🌚 <code>:new_moon_with_face:</code></li>
<li>🌑 <code>:new_moon:</code></li>
<li>🌒 <code>:waxing_crescent_moon:</code></li>
<li>🌓 <code>:first_quarter_moon:</code></li>
<li>🌔 <code>:waxing_gibbous_moon:</code></li>
<li>🌕 <code>:full_moon:</code></li>
<li>🌖 <code>:waning_gibbous_moon:</code></li>
<li>🌗 <code>:last_quarter_moon:</code></li>
<li>🌘 <code>:waning_crescent_moon:</code></li>
<li>🌜 <code>:last_quarter_moon_with_face:</code></li>
<li>🌛 <code>:first_quarter_moon_with_face:</code></li>
<li>🌙 <code>:crescent_moon:</code></li>
<li>🌍 <code>:earth_africa:</code></li>
<li>🌎 <code>:earth_americas:</code></li>
<li>🌏 <code>:earth_asia:</code></li>
<li>🌋 <code>:volcano:</code></li>
<li>🌌 <code>:milky_way:</code></li>
<li>⛅ <code>:partly_sunny:</code></li>
</ul>`,r:{minutes:.79,words:236},y:"a",t:"自然",i:"emoji"},["/tutorial/ops/markdown/emoji/nature","/tutorial/ops/markdown/emoji/nature.md"]],["v-06b2bcc6","/tutorial/ops/markdown/emoji/object.html",{d:1681181241e3,c:"Markdown",g:["Markdown","Emoji"],e:`<ul>
<li>🎍 <code>:bamboo:</code></li>
<li>💝 <code>:gift_heart:</code></li>
<li>🎎 <code>:dolls:</code></li>
<li>🎒 <code>:school_satchel:</code></li>
<li>🎓 <code>:mortar_board:</code></li>
<li>🎏 <code>:flags:</code></li>
<li>🎆 <code>:fireworks:</code></li>
<li>🎇 <code>:sparkler:</code></li>
<li>🎐 <code>:wind_chime:</code></li>
<li>🎑 <code>:rice_scene:</code></li>
<li>🎃 <code>:jack_o_lantern:</code></li>
<li>👻 <code>:ghost:</code></li>
<li>🎅 <code>:santa:</code></li>
<li>🎄 <code>:christmas_tree:</code></li>
<li>🎁 <code>:gift:</code></li>
<li>🔔 <code>:bell:</code></li>
<li>🔕 <code>:no_bell:</code></li>
<li>🎋 <code>:tanabata_tree:</code></li>
<li>🎉 <code>:tada:</code></li>
<li>🎊 <code>:confetti_ball:</code></li>
<li>🎈 <code>:balloon:</code></li>
<li>🔮 <code>:crystal_ball:</code></li>
<li>💿 <code>:cd:</code></li>
<li>📀 <code>:dvd:</code></li>
<li>💾 <code>:floppy_disk:</code></li>
<li>📷 <code>:camera:</code></li>
<li>📹 <code>:video_camera:</code></li>
<li>🎥 <code>:movie_camera:</code></li>
<li>💻 <code>:computer:</code></li>
<li>📺 <code>:tv:</code></li>
<li>📱 <code>:iphone:</code></li>
<li>☎️ <code>:phone:</code></li>
<li>☎️ <code>:telephone:</code></li>
<li>📞 <code>:telephone_receiver:</code></li>
<li>📟 <code>:pager:</code></li>
<li>📠 <code>:fax:</code></li>
<li>💽 <code>:minidisc:</code></li>
<li>📼 <code>:vhs:</code></li>
<li>🔉 <code>:sound:</code></li>
<li>🔈 <code>:speaker:</code></li>
<li>🔇 <code>:mute:</code></li>
<li>📢 <code>:loudspeaker:</code></li>
<li>📣 <code>:mega:</code></li>
<li>⌛ <code>:hourglass:</code></li>
<li>⏳ <code>:hourglass_flowing_sand:</code></li>
<li>⏰ <code>:alarm_clock:</code></li>
<li>⌚ <code>:watch:</code></li>
<li>📻 <code>:radio:</code></li>
<li>📡 <code>:satellite:</code></li>
<li>➿ <code>:loop:</code></li>
<li>🔍 <code>:mag:</code></li>
<li>🔎 <code>:mag_right:</code></li>
<li>🔓 <code>:unlock:</code></li>
<li>🔒 <code>:lock:</code></li>
<li>🔏 <code>:lock_with_ink_pen:</code></li>
<li>🔐 <code>:closed_lock_with_key:</code></li>
<li>🔑 <code>:key:</code></li>
<li>💡 <code>:bulb:</code></li>
<li>🔦 <code>:flashlight:</code></li>
<li>🔆 <code>:high_brightness:</code></li>
<li>🔅 <code>:low_brightness:</code></li>
<li>🔌 <code>:electric_plug:</code></li>
<li>🔋 <code>:battery:</code></li>
<li>📲 <code>:calling:</code></li>
<li>📧 <code>:email:</code></li>
<li>📫 <code>:mailbox:</code></li>
<li>📮 <code>:postbox:</code></li>
<li>🛀 <code>:bath:</code></li>
<li>🛁 <code>:bathtub:</code></li>
<li>🚿 <code>:shower:</code></li>
<li>🚽 <code>:toilet:</code></li>
<li>🔧 <code>:wrench:</code></li>
<li>🔩 <code>:nut_and_bolt:</code></li>
<li>🔨 <code>:hammer:</code></li>
<li>💺 <code>:seat:</code></li>
<li>💰 <code>:moneybag:</code></li>
<li>💴 <code>:yen:</code></li>
<li>💵 <code>:dollar:</code></li>
<li>💷 <code>:pound:</code></li>
<li>💶 <code>:euro:</code></li>
<li>💳 <code>:credit_card:</code></li>
<li>💸 <code>:money_with_wings:</code></li>
<li>📧 <code>:e-mail:</code></li>
<li>📥 <code>:inbox_tray:</code></li>
<li>📤 <code>:outbox_tray:</code></li>
<li>✉️ <code>:envelope:</code></li>
<li>📨 <code>:incoming_envelope:</code></li>
<li>📯 <code>:postal_horn:</code></li>
<li>📪 <code>:mailbox_closed:</code></li>
<li>📬 <code>:mailbox_with_mail:</code></li>
<li>📭 <code>:mailbox_with_no_mail:</code></li>
<li>📦 <code>:package:</code></li>
<li>🚪 <code>:door:</code></li>
<li>🚬 <code>:smoking:</code></li>
<li>💣 <code>:bomb:</code></li>
<li>🔫 <code>:gun:</code></li>
<li>🔪 <code>:hocho:</code></li>
<li>💊 <code>:pill:</code></li>
<li>💉 <code>:syringe:</code></li>
<li>📄 <code>:page_facing_up:</code></li>
<li>📃 <code>:page_with_curl:</code></li>
<li>📑 <code>:bookmark_tabs:</code></li>
<li>📊 <code>:bar_chart:</code></li>
<li>📈 <code>:chart_with_upwards_trend:</code></li>
<li>📉 <code>:chart_with_downwards_trend:</code></li>
<li>📜 <code>:scroll:</code></li>
<li>📋 <code>:clipboard:</code></li>
<li>📆 <code>:calendar:</code></li>
<li>📅 <code>:date:</code></li>
<li>📇 <code>:card_index:</code></li>
<li>📁 <code>:file_folder:</code></li>
<li>📂 <code>:open_file_folder:</code></li>
<li>✂️ <code>:scissors:</code></li>
<li>📌 <code>:pushpin:</code></li>
<li>📎 <code>:paperclip:</code></li>
<li>✒️ <code>:black_nib:</code></li>
<li>✏️ <code>:pencil2:</code></li>
<li>📏 <code>:straight_ruler:</code></li>
<li>📐 <code>:triangular_ruler:</code></li>
<li>📕 <code>:closed_book:</code></li>
<li>📗 <code>:green_book:</code></li>
<li>📘 <code>:blue_book:</code></li>
<li>📙 <code>:orange_book:</code></li>
<li>📓 <code>:notebook:</code></li>
<li>📔 <code>:notebook_with_decorative_cover:</code></li>
<li>📒 <code>:ledger:</code></li>
<li>📚 <code>:books:</code></li>
<li>🔖 <code>:bookmark:</code></li>
<li>📛 <code>:name_badge:</code></li>
<li>🔬 <code>:microscope:</code></li>
<li>🔭 <code>:telescope:</code></li>
<li>📰 <code>:newspaper:</code></li>
<li>🏈 <code>:football:</code></li>
<li>🏀 <code>:basketball:</code></li>
<li>⚽ <code>:soccer:</code></li>
<li>⚾ <code>:baseball:</code></li>
<li>🎾 <code>:tennis:</code></li>
<li>🎱 <code>:8ball:</code></li>
<li>🏉 <code>:rugby_football:</code></li>
<li>🎳 <code>:bowling:</code></li>
<li>⛳ <code>:golf:</code></li>
<li>🚵 <code>:mountain_bicyclist:</code></li>
<li>🚴 <code>:bicyclist:</code></li>
<li>🏇 <code>:horse_racing:</code></li>
<li>🏂 <code>:snowboarder:</code></li>
<li>🏊 <code>:swimmer:</code></li>
<li>🏄 <code>:surfer:</code></li>
<li>🎿 <code>:ski:</code></li>
<li>♠️ <code>:spades:</code></li>
<li>♥️ <code>:hearts:</code></li>
<li>♣️ <code>:clubs:</code></li>
<li>♦️ <code>:diamonds:</code></li>
<li>💎 <code>:gem:</code></li>
<li>💍 <code>:ring:</code></li>
<li>🏆 <code>:trophy:</code></li>
<li>🎼 <code>:musical_score:</code></li>
<li>🎹 <code>:musical_keyboard:</code></li>
<li>🎻 <code>:violin:</code></li>
<li>👾 <code>:space_invader:</code></li>
<li>🎮 <code>:video_game:</code></li>
<li>🃏 <code>:black_joker:</code></li>
<li>🎴 <code>:flower_playing_cards:</code></li>
<li>🎲 <code>:game_die:</code></li>
<li>🎯 <code>:dart:</code></li>
<li>🀄 <code>:mahjong:</code></li>
<li>🎬 <code>:clapper:</code></li>
<li>📝 <code>:memo:</code></li>
<li>📝 <code>:pencil:</code></li>
<li>📖 <code>:book:</code></li>
<li>🎨 <code>:art:</code></li>
<li>🎤 <code>:microphone:</code></li>
<li>🎧 <code>:headphones:</code></li>
<li>🎺 <code>:trumpet:</code></li>
<li>🎷 <code>:saxophone:</code></li>
<li>🎸 <code>:guitar:</code></li>
<li>👞 <code>:shoe:</code></li>
<li>👡 <code>:sandal:</code></li>
<li>👠 <code>:high_heel:</code></li>
<li>💄 <code>:lipstick:</code></li>
<li>👢 <code>:boot:</code></li>
<li>👕 <code>:shirt:</code></li>
<li>👕 <code>:tshirt:</code></li>
<li>👔 <code>:necktie:</code></li>
<li>👚 <code>:womans_clothes:</code></li>
<li>👗 <code>:dress:</code></li>
<li>🎽 <code>:running_shirt_with_sash:</code></li>
<li>👖 <code>:jeans:</code></li>
<li>👘 <code>:kimono:</code></li>
<li>👙 <code>:bikini:</code></li>
<li>🎀 <code>:ribbon:</code></li>
<li>🎩 <code>:tophat:</code></li>
<li>👑 <code>:crown:</code></li>
<li>👒 <code>:womans_hat:</code></li>
<li>👞 <code>:mans_shoe:</code></li>
<li>🌂 <code>:closed_umbrella:</code></li>
<li>💼 <code>:briefcase:</code></li>
<li>👜 <code>:handbag:</code></li>
<li>👝 <code>:pouch:</code></li>
<li>👛 <code>:purse:</code></li>
<li>👓 <code>:eyeglasses:</code></li>
<li>🎣 <code>:fishing_pole_and_fish:</code></li>
<li>☕ <code>:coffee:</code></li>
<li>🍵 <code>:tea:</code></li>
<li>🍶 <code>:sake:</code></li>
<li>🍼 <code>:baby_bottle:</code></li>
<li>🍺 <code>:beer:</code></li>
<li>🍻 <code>:beers:</code></li>
<li>🍸 <code>:cocktail:</code></li>
<li>🍹 <code>:tropical_drink:</code></li>
<li>🍷 <code>:wine_glass:</code></li>
<li>🍴 <code>:fork_and_knife:</code></li>
<li>🍕 <code>:pizza:</code></li>
<li>🍔 <code>:hamburger:</code></li>
<li>🍟 <code>:fries:</code></li>
<li>🍗 <code>:poultry_leg:</code></li>
<li>🍖 <code>:meat_on_bone:</code></li>
<li>🍝 <code>:spaghetti:</code></li>
<li>🍛 <code>:curry:</code></li>
<li>🍤 <code>:fried_shrimp:</code></li>
<li>🍱 <code>:bento:</code></li>
<li>🍣 <code>:sushi:</code></li>
<li>🍥 <code>:fish_cake:</code></li>
<li>🍙 <code>:rice_ball:</code></li>
<li>🍘 <code>:rice_cracker:</code></li>
<li>🍚 <code>:rice:</code></li>
<li>🍜 <code>:ramen:</code></li>
<li>🍲 <code>:stew:</code></li>
<li>🍢 <code>:oden:</code></li>
<li>🍡 <code>:dango:</code></li>
<li>🥚 <code>:egg:</code></li>
<li>🍞 <code>:bread:</code></li>
<li>🍩 <code>:doughnut:</code></li>
<li>🍮 <code>:custard:</code></li>
<li>🍦 <code>:icecream:</code></li>
<li>🍨 <code>:ice_cream:</code></li>
<li>🍧 <code>:shaved_ice:</code></li>
<li>🎂 <code>:birthday:</code></li>
<li>🍰 <code>:cake:</code></li>
<li>🍪 <code>:cookie:</code></li>
<li>🍫 <code>:chocolate_bar:</code></li>
<li>🍬 <code>:candy:</code></li>
<li>🍭 <code>:lollipop:</code></li>
<li>🍯 <code>:honey_pot:</code></li>
<li>🍎 <code>:apple:</code></li>
<li>🍏 <code>:green_apple:</code></li>
<li>🍊 <code>:tangerine:</code></li>
<li>🍋 <code>:lemon:</code></li>
<li>🍒 <code>:cherries:</code></li>
<li>🍇 <code>:grapes:</code></li>
<li>🍉 <code>:watermelon:</code></li>
<li>🍓 <code>:strawberry:</code></li>
<li>🍑 <code>:peach:</code></li>
<li>🍈 <code>:melon:</code></li>
<li>🍌 <code>:banana:</code></li>
<li>🍐 <code>:pear:</code></li>
<li>🍍 <code>:pineapple:</code></li>
<li>🍠 <code>:sweet_potato:</code></li>
<li>🍆 <code>:eggplant:</code></li>
<li>🍅 <code>:tomato:</code></li>
<li>🌽 <code>:corn:</code></li>
</ul>`,r:{minutes:1.77,words:532},y:"a",t:"对象",i:"emoji"},["/tutorial/ops/markdown/emoji/object","/tutorial/ops/markdown/emoji/object.md"]],["v-d2138114","/tutorial/ops/markdown/emoji/people.html",{d:1681181241e3,c:"Markdown",g:["Markdown","Emoji"],e:`<ul>
<li>😄 <code>:smile:</code></li>
<li>😆 <code>:laughing:</code></li>
<li>😊 <code>:blush:</code></li>
<li>😃 <code>:smiley:</code></li>
<li>😏 <code>:smirk:</code></li>
<li>😍 <code>:heart_eyes:</code></li>
<li>😘 <code>:kissing_heart:</code></li>
<li>😚 <code>:kissing_closed_eyes:</code></li>
<li>😳 <code>:flushed:</code></li>
<li>😌 <code>:relieved:</code></li>
<li>😆 <code>:satisfied:</code></li>
<li>😁 <code>:grin:</code></li>
<li>😉 <code>:wink:</code></li>
<li>😜 <code>:stuck_out_tongue_winking_eye:</code></li>
<li>😝 <code>:stuck_out_tongue_closed_eyes:</code></li>
<li>😀 <code>:grinning:</code></li>
<li>😗 <code>:kissing:</code></li>
<li>😙 <code>:kissing_smiling_eyes:</code></li>
<li>😛 <code>:stuck_out_tongue:</code></li>
<li>😴 <code>:sleeping:</code></li>
<li>😟 <code>:worried:</code></li>
<li>😦 <code>:frowning:</code></li>
<li>😧 <code>:anguished:</code></li>
<li>😮 <code>:open_mouth:</code></li>
<li>😬 <code>:grimacing:</code></li>
<li>😕 <code>:confused:</code></li>
<li>😯 <code>:hushed:</code></li>
<li>😑 <code>:expressionless:</code></li>
<li>😒 <code>:unamused:</code></li>
<li>😅 <code>:sweat_smile:</code></li>
<li>😓 <code>:sweat:</code></li>
<li>😥 <code>:disappointed_relieved:</code></li>
<li>😩 <code>:weary:</code></li>
<li>😔 <code>:pensive:</code></li>
<li>😞 <code>:disappointed:</code></li>
<li>😖 <code>:confounded:</code></li>
<li>😨 <code>:fearful:</code></li>
<li>😰 <code>:cold_sweat:</code></li>
<li>😣 <code>:persevere:</code></li>
<li>😢 <code>:cry:</code></li>
<li>😭 <code>:sob:</code></li>
<li>😂 <code>:joy:</code></li>
<li>😲 <code>:astonished:</code></li>
<li>😱 <code>:scream:</code></li>
<li>😫 <code>:tired_face:</code></li>
<li>😠 <code>:angry:</code></li>
<li>😡 <code>:rage:</code></li>
<li>😤 <code>:triumph:</code></li>
<li>😪 <code>:sleepy:</code></li>
<li>😋 <code>:yum:</code></li>
<li>😷 <code>:mask:</code></li>
<li>😎 <code>:sunglasses:</code></li>
<li>😵 <code>:dizzy_face:</code></li>
<li>👿 <code>:imp:</code></li>
<li>😈 <code>:smiling_imp:</code></li>
<li>😐 <code>:neutral_face:</code></li>
<li>😶 <code>:no_mouth:</code></li>
<li>😇 <code>:innocent:</code></li>
<li>👽 <code>:alien:</code></li>
<li>💛 <code>:yellow_heart:</code></li>
<li>💙 <code>:blue_heart:</code></li>
<li>💜 <code>:purple_heart:</code></li>
<li>❤️ <code>:heart:</code></li>
<li>💚 <code>:green_heart:</code></li>
<li>💔 <code>:broken_heart:</code></li>
<li>💓 <code>:heartbeat:</code></li>
<li>💗 <code>:heartpulse:</code></li>
<li>💕 <code>:two_hearts:</code></li>
<li>💞 <code>:revolving_hearts:</code></li>
<li>💘 <code>:cupid:</code></li>
<li>💖 <code>:sparkling_heart:</code></li>
<li>✨ <code>:sparkles:</code></li>
<li>⭐ <code>:star:</code></li>
<li>🌟 <code>:star2:</code></li>
<li>💫 <code>:dizzy:</code></li>
<li>💥 <code>:boom:</code></li>
<li>💥 <code>:collision:</code></li>
<li>💢 <code>:anger:</code></li>
<li>❗ <code>:exclamation:</code></li>
<li>❓ <code>:question:</code></li>
<li>❕ <code>:grey_exclamation:</code></li>
<li>❔ <code>:grey_question:</code></li>
<li>💤 <code>:zzz:</code></li>
<li>💨 <code>:dash:</code></li>
<li>💦 <code>:sweat_drops:</code></li>
<li>🎶 <code>:notes:</code></li>
<li>🎵 <code>:musical_note:</code></li>
<li>🔥 <code>:fire:</code></li>
<li>💩 <code>:hankey:</code></li>
<li>💩 <code>:poop:</code></li>
<li>💩 <code>:shit:</code></li>
<li>👍 <code>:+1:</code></li>
<li>👍 <code>:thumbsup:</code></li>
<li>👎 <code>:-1:</code></li>
<li>👎 <code>:thumbsdown:</code></li>
<li>👌 <code>:ok_hand:</code></li>
<li>👊 <code>:punch:</code></li>
<li>👊 <code>:facepunch:</code></li>
<li>✊ <code>:fist:</code></li>
<li>✌️ <code>:v:</code></li>
<li>👋 <code>:wave:</code></li>
<li>✋ <code>:hand:</code></li>
<li>✋ <code>:raised_hand:</code></li>
<li>👐 <code>:open_hands:</code></li>
<li>☝️ <code>:point_up:</code></li>
<li>👇 <code>:point_down:</code></li>
<li>👈 <code>:point_left:</code></li>
<li>👉 <code>:point_right:</code></li>
<li>🙌 <code>:raised_hands:</code></li>
<li>🙏 <code>:pray:</code></li>
<li>👆 <code>:point_up_2:</code></li>
<li>👏 <code>:clap:</code></li>
<li>💪 <code>:muscle:</code></li>
<li>🤘 <code>:metal:</code></li>
<li>🖕 <code>:fu:</code></li>
<li>🏃 <code>:runner:</code></li>
<li>🏃 <code>:running:</code></li>
<li>👫 <code>:couple:</code></li>
<li>👪 <code>:family:</code></li>
<li>👬 <code>:two_men_holding_hands:</code></li>
<li>👭 <code>:two_women_holding_hands:</code></li>
<li>💃 <code>:dancer:</code></li>
<li>👯 <code>:dancers:</code></li>
<li>🙆‍♀️ <code>:ok_woman:</code></li>
<li>🙅 <code>:no_good:</code></li>
<li>💁 <code>:information_desk_person:</code></li>
<li>🙋 <code>:raising_hand:</code></li>
<li>👰‍♀️ <code>:bride_with_veil:</code></li>
<li>:person_with_pouting_face: <code>:person_with_pouting_face:</code></li>
<li>:person_frowning: <code>:person_frowning:</code></li>
<li>🙇 <code>:bow:</code></li>
<li>💑 <code>:couple_with_heart:</code></li>
<li>💆 <code>:massage:</code></li>
<li>💇 <code>:haircut:</code></li>
<li>💅 <code>:nail_care:</code></li>
<li>👦 <code>:boy:</code></li>
<li>👧 <code>:girl:</code></li>
<li>👩 <code>:woman:</code></li>
<li>👨 <code>:man:</code></li>
<li>👶 <code>:baby:</code></li>
<li>👵 <code>:older_woman:</code></li>
<li>👴 <code>:older_man:</code></li>
<li>:person_with_blond_hair: <code>:person_with_blond_hair:</code></li>
<li>👲 <code>:man_with_gua_pi_mao:</code></li>
<li>👳‍♂️ <code>:man_with_turban:</code></li>
<li>👷 <code>:construction_worker:</code></li>
<li>👮 <code>:cop:</code></li>
<li>👼 <code>:angel:</code></li>
<li>👸 <code>:princess:</code></li>
<li>😺 <code>:smiley_cat:</code></li>
<li>😸 <code>:smile_cat:</code></li>
<li>😻 <code>:heart_eyes_cat:</code></li>
<li>😽 <code>:kissing_cat:</code></li>
<li>😼 <code>:smirk_cat:</code></li>
<li>🙀 <code>:scream_cat:</code></li>
<li>😿 <code>:crying_cat_face:</code></li>
<li>😹 <code>:joy_cat:</code></li>
<li>😾 <code>:pouting_cat:</code></li>
<li>👹 <code>:japanese_ogre:</code></li>
<li>👺 <code>:japanese_goblin:</code></li>
<li>🙈 <code>:see_no_evil:</code></li>
<li>🙉 <code>:hear_no_evil:</code></li>
<li>🙊 <code>:speak_no_evil:</code></li>
<li>💂‍♂️ <code>:guardsman:</code></li>
<li>💀 <code>:skull:</code></li>
<li>🐾 <code>:feet:</code></li>
<li>👄 <code>:lips:</code></li>
<li>💋 <code>:kiss:</code></li>
<li>💧 <code>:droplet:</code></li>
<li>👂 <code>:ear:</code></li>
<li>👀 <code>:eyes:</code></li>
<li>👃 <code>:nose:</code></li>
<li>👅 <code>:tongue:</code></li>
<li>💌 <code>:love_letter:</code></li>
<li>👤 <code>:bust_in_silhouette:</code></li>
<li>👥 <code>:busts_in_silhouette:</code></li>
<li>💬 <code>:speech_balloon:</code></li>
<li>💭 <code>:thought_balloon:</code></li>
</ul>`,r:{minutes:1.22,words:366},y:"a",t:"人物",i:"emoji"},["/tutorial/ops/markdown/emoji/people","/tutorial/ops/markdown/emoji/people.md"]],["v-a3c04a34","/tutorial/ops/markdown/emoji/place.html",{d:1681181241e3,c:"Markdown",g:["Markdown","Emoji"],e:`<ul>
<li>🏠 <code>:house:</code></li>
<li>🏡 <code>:house_with_garden:</code></li>
<li>🏫 <code>:school:</code></li>
<li>🏢 <code>:office:</code></li>
<li>🏣 <code>:post_office:</code></li>
<li>🏥 <code>:hospital:</code></li>
<li>🏦 <code>:bank:</code></li>
<li>🏪 <code>:convenience_store:</code></li>
<li>🏩 <code>:love_hotel:</code></li>
<li>🏨 <code>:hotel:</code></li>
<li>💒 <code>:wedding:</code></li>
<li>⛪ <code>:church:</code></li>
<li>🏬 <code>:department_store:</code></li>
<li>🏤 <code>:european_post_office:</code></li>
<li>🌇 <code>:city_sunrise:</code></li>
<li>🌆 <code>:city_sunset:</code></li>
<li>🏯 <code>:japanese_castle:</code></li>
<li>🏰 <code>:european_castle:</code></li>
<li>⛺ <code>:tent:</code></li>
<li>🏭 <code>:factory:</code></li>
<li>🗼 <code>:tokyo_tower:</code></li>
<li>🗾 <code>:japan:</code></li>
<li>🗻 <code>:mount_fuji:</code></li>
<li>🌄 <code>:sunrise_over_mountains:</code></li>
<li>🌅 <code>:sunrise:</code></li>
<li>🌠 <code>:stars:</code></li>
<li>🗽 <code>:statue_of_liberty:</code></li>
<li>🌉 <code>:bridge_at_night:</code></li>
<li>🎠 <code>:carousel_horse:</code></li>
<li>🌈 <code>:rainbow:</code></li>
<li>🎡 <code>:ferris_wheel:</code></li>
<li>⛲ <code>:fountain:</code></li>
<li>🎢 <code>:roller_coaster:</code></li>
<li>🚢 <code>:ship:</code></li>
<li>🚤 <code>:speedboat:</code></li>
<li>⛵ <code>:boat:</code></li>
<li>⛵ <code>:sailboat:</code></li>
<li>🚣 <code>:rowboat:</code></li>
<li>⚓ <code>:anchor:</code></li>
<li>🚀 <code>:rocket:</code></li>
<li>✈️ <code>:airplane:</code></li>
<li>🚁 <code>:helicopter:</code></li>
<li>🚂 <code>:steam_locomotive:</code></li>
<li>🚊 <code>:tram:</code></li>
<li>🚞 <code>:mountain_railway:</code></li>
<li>🚲 <code>:bike:</code></li>
<li>🚡 <code>:aerial_tramway:</code></li>
<li>🚟 <code>:suspension_railway:</code></li>
<li>🚠 <code>:mountain_cableway:</code></li>
<li>🚜 <code>:tractor:</code></li>
<li>🚙 <code>:blue_car:</code></li>
<li>🚘 <code>:oncoming_automobile:</code></li>
<li>🚗 <code>:car:</code></li>
<li>🚗 <code>:red_car:</code></li>
<li>🚕 <code>:taxi:</code></li>
<li>🚖 <code>:oncoming_taxi:</code></li>
<li>🚛 <code>:articulated_lorry:</code></li>
<li>🚌 <code>:bus:</code></li>
<li>🚍 <code>:oncoming_bus:</code></li>
<li>🚨 <code>:rotating_light:</code></li>
<li>🚓 <code>:police_car:</code></li>
<li>🚔 <code>:oncoming_police_car:</code></li>
<li>🚒 <code>:fire_engine:</code></li>
<li>🚑 <code>:ambulance:</code></li>
<li>🚐 <code>:minibus:</code></li>
<li>🚚 <code>:truck:</code></li>
<li>🚋 <code>:train:</code></li>
<li>🚉 <code>:station:</code></li>
<li>🚆 <code>:train2:</code></li>
<li>🚅 <code>:bullettrain_front:</code></li>
<li>🚄 <code>:bullettrain_side:</code></li>
<li>🚈 <code>:light_rail:</code></li>
<li>🚝 <code>:monorail:</code></li>
<li>🚃 <code>:railway_car:</code></li>
<li>🚎 <code>:trolleybus:</code></li>
<li>🎫 <code>:ticket:</code></li>
<li>⛽ <code>:fuelpump:</code></li>
<li>🚦 <code>:vertical_traffic_light:</code></li>
<li>🚥 <code>:traffic_light:</code></li>
<li>⚠️ <code>:warning:</code></li>
<li>🚧 <code>:construction:</code></li>
<li>🔰 <code>:beginner:</code></li>
<li>🏧 <code>:atm:</code></li>
<li>🎰 <code>:slot_machine:</code></li>
<li>🚏 <code>:busstop:</code></li>
<li>💈 <code>:barber:</code></li>
<li>♨️ <code>:hotsprings:</code></li>
<li>🏁 <code>:checkered_flag:</code></li>
<li>🎌 <code>:crossed_flags:</code></li>
<li>🏮 <code>:izakaya_lantern:</code></li>
<li>🗿 <code>:moyai:</code></li>
<li>🎪 <code>:circus_tent:</code></li>
<li>🎭 <code>:performing_arts:</code></li>
<li>📍 <code>:round_pushpin:</code></li>
<li>🚩 <code>:triangular_flag_on_post:</code></li>
</ul>`,r:{minutes:.67,words:200},y:"a",t:"地点",i:"emoji"},["/tutorial/ops/markdown/emoji/place","/tutorial/ops/markdown/emoji/place.md"]],["v-3f2c7a0d","/tutorial/ops/markdown/emoji/symbol.html",{d:1681181241e3,c:"Markdown",g:["Markdown","Emoji"],e:`<ul>
<li>1️⃣ <code>:one:</code></li>
<li>2️⃣ <code>:two:</code></li>
<li>3️⃣ <code>:three:</code></li>
<li>4️⃣ <code>:four:</code></li>
<li>5️⃣ <code>:five:</code></li>
<li>6️⃣ <code>:six:</code></li>
<li>7️⃣ <code>:seven:</code></li>
<li>8️⃣ <code>:eight:</code></li>
<li>9️⃣ <code>:nine:</code></li>
<li>🔟 <code>:keycap_ten:</code></li>
<li>🔢 <code>:1234:</code></li>
<li>0️⃣ <code>:zero:</code></li>
<li>#️⃣ <code>:hash:</code></li>
<li>🔣 <code>:symbols:</code></li>
<li>◀️ <code>:arrow_backward:</code></li>
<li>⬇️ <code>:arrow_down:</code></li>
<li>▶️ <code>:arrow_forward:</code></li>
<li>⬅️ <code>:arrow_left:</code></li>
<li>🔠 <code>:capital_abcd:</code></li>
<li>🔡 <code>:abcd:</code></li>
<li>🔤 <code>:abc:</code></li>
<li>↙️ <code>:arrow_lower_left:</code></li>
<li>↘️ <code>:arrow_lower_right:</code></li>
<li>➡️ <code>:arrow_right:</code></li>
<li>⬆️ <code>:arrow_up:</code></li>
<li>↖️ <code>:arrow_upper_left:</code></li>
<li>↗️ <code>:arrow_upper_right:</code></li>
<li>⏬ <code>:arrow_double_down:</code></li>
<li>⏫ <code>:arrow_double_up:</code></li>
<li>🔽 <code>:arrow_down_small:</code></li>
<li>⤵️ <code>:arrow_heading_down:</code></li>
<li>⤴️ <code>:arrow_heading_up:</code></li>
<li>↩️ <code>:leftwards_arrow_with_hook:</code></li>
<li>↪️ <code>:arrow_right_hook:</code></li>
<li>↔️ <code>:left_right_arrow:</code></li>
<li>↕️ <code>:arrow_up_down:</code></li>
<li>🔼 <code>:arrow_up_small:</code></li>
<li>🔃 <code>:arrows_clockwise:</code></li>
<li>🔄 <code>:arrows_counterclockwise:</code></li>
<li>⏪ <code>:rewind:</code></li>
<li>⏩ <code>:fast_forward:</code></li>
<li>ℹ️ <code>:information_source:</code></li>
<li>🆗 <code>:ok:</code></li>
<li>🔀 <code>:twisted_rightwards_arrows:</code></li>
<li>🔁 <code>:repeat:</code></li>
<li>🔂 <code>:repeat_one:</code></li>
<li>🆕 <code>:new:</code></li>
<li>🔝 <code>:top:</code></li>
<li>🆙 <code>:up:</code></li>
<li>🆒 <code>:cool:</code></li>
<li>🆓 <code>:free:</code></li>
<li>🆖 <code>:ng:</code></li>
<li>🎦 <code>:cinema:</code></li>
<li>🈁 <code>:koko:</code></li>
<li>📶 <code>:signal_strength:</code></li>
<li>🈂️ <code>:sa:</code></li>
<li>🚻 <code>:restroom:</code></li>
<li>🚹 <code>:mens:</code></li>
<li>🚺 <code>:womens:</code></li>
<li>🚼 <code>:baby_symbol:</code></li>
<li>🚭 <code>:no_smoking:</code></li>
<li>🅿️ <code>:parking:</code></li>
<li>♿ <code>:wheelchair:</code></li>
<li>🚇 <code>:metro:</code></li>
<li>🛄 <code>:baggage_claim:</code></li>
<li>🉑 <code>:accept:</code></li>
<li>🚾 <code>:wc:</code></li>
<li>🚰 <code>:potable_water:</code></li>
<li>🚮 <code>:put_litter_in_its_place:</code></li>
<li>㊙️ <code>:secret:</code></li>
<li>㊗️ <code>:congratulations:</code></li>
<li>Ⓜ️ <code>:m:</code></li>
<li>🛂 <code>:passport_control:</code></li>
<li>🛅 <code>:left_luggage:</code></li>
<li>🛃 <code>:customs:</code></li>
<li>🉐 <code>:ideograph_advantage:</code></li>
<li>🆑 <code>:cl:</code></li>
<li>🆘 <code>:sos:</code></li>
<li>🆔 <code>:id:</code></li>
<li>🚫 <code>:no_entry_sign:</code></li>
<li>🔞 <code>:underage:</code></li>
<li>📵 <code>:no_mobile_phones:</code></li>
<li>🚯 <code>:do_not_litter:</code></li>
<li>🚱 <code>:non-potable_water:</code></li>
<li>🚳 <code>:no_bicycles:</code></li>
<li>🚷 <code>:no_pedestrians:</code></li>
<li>🚸 <code>:children_crossing:</code></li>
<li>⛔ <code>:no_entry:</code></li>
<li>✳️ <code>:eight_spoked_asterisk:</code></li>
<li>❇️ <code>:sparkle:</code></li>
<li>✴️ <code>:eight_pointed_black_star:</code></li>
<li>💟 <code>:heart_decoration:</code></li>
<li>🆚 <code>:vs:</code></li>
<li>📳 <code>:vibration_mode:</code></li>
<li>📴 <code>:mobile_phone_off:</code></li>
<li>💹 <code>:chart:</code></li>
<li>💱 <code>:currency_exchange:</code></li>
<li>♈ <code>:aries:</code></li>
<li>♉ <code>:taurus:</code></li>
<li>♊ <code>:gemini:</code></li>
<li>♋ <code>:cancer:</code></li>
<li>♌ <code>:leo:</code></li>
<li>♍ <code>:virgo:</code></li>
<li>♎ <code>:libra:</code></li>
<li>♏ <code>:scorpius:</code></li>
<li>♐ <code>:sagittarius:</code></li>
<li>♑ <code>:capricorn:</code></li>
<li>♒ <code>:aquarius:</code></li>
<li>♓ <code>:pisces:</code></li>
<li>⛎ <code>:ophiuchus:</code></li>
<li>🔯 <code>:six_pointed_star:</code></li>
<li>❎ <code>:negative_squared_cross_mark:</code></li>
<li>🅰️ <code>:a:</code></li>
<li>🅱️ <code>:b:</code></li>
<li>🆎 <code>:ab:</code></li>
<li>🅾️ <code>:o2:</code></li>
<li>💠 <code>:diamond_shape_with_a_dot_inside:</code></li>
<li>♻️ <code>:recycle:</code></li>
<li>🔚 <code>:end:</code></li>
<li>🔙 <code>:back:</code></li>
<li>🔛 <code>:on:</code></li>
<li>🔜 <code>:soon:</code></li>
<li>🕐 <code>:clock1:</code></li>
<li>🕜 <code>:clock130:</code></li>
<li>🕙 <code>:clock10:</code></li>
<li>🕥 <code>:clock1030:</code></li>
<li>🕚 <code>:clock11:</code></li>
<li>🕦 <code>:clock1130:</code></li>
<li>🕛 <code>:clock12:</code></li>
<li>🕧 <code>:clock1230:</code></li>
<li>🕑 <code>:clock2:</code></li>
<li>🕝 <code>:clock230:</code></li>
<li>🕒 <code>:clock3:</code></li>
<li>🕞 <code>:clock330:</code></li>
<li>🕓 <code>:clock4:</code></li>
<li>🕟 <code>:clock430:</code></li>
<li>🕔 <code>:clock5:</code></li>
<li>🕠 <code>:clock530:</code></li>
<li>🕕 <code>:clock6:</code></li>
<li>🕡 <code>:clock630:</code></li>
<li>🕖 <code>:clock7:</code></li>
<li>🕢 <code>:clock730:</code></li>
<li>🕗 <code>:clock8:</code></li>
<li>🕣 <code>:clock830:</code></li>
<li>🕘 <code>:clock9:</code></li>
<li>🕤 <code>:clock930:</code></li>
<li>💲 <code>:heavy_dollar_sign:</code></li>
<li>©️ <code>:copyright:</code></li>
<li>®️ <code>:registered:</code></li>
<li>™️ <code>:tm:</code></li>
<li>❌ <code>:x:</code></li>
<li>❗ <code>:heavy_exclamation_mark:</code></li>
<li>‼️ <code>:bangbang:</code></li>
<li>⁉️ <code>:interrobang:</code></li>
<li>⭕ <code>:o:</code></li>
<li>✖️ <code>:heavy_multiplication_x:</code></li>
<li>➕ <code>:heavy_plus_sign:</code></li>
<li>➖ <code>:heavy_minus_sign:</code></li>
<li>➗ <code>:heavy_division_sign:</code></li>
<li>💮 <code>:white_flower:</code></li>
<li>💯 <code>:100:</code></li>
<li>✔️ <code>:heavy_check_mark:</code></li>
<li>☑️ <code>:ballot_box_with_check:</code></li>
<li>🔘 <code>:radio_button:</code></li>
<li>🔗 <code>:link:</code></li>
<li>➰ <code>:curly_loop:</code></li>
<li>〰️ <code>:wavy_dash:</code></li>
<li>〽️ <code>:part_alternation_mark:</code></li>
<li>🔱 <code>:trident:</code></li>
<li>▪️ <code>:black_small_square:</code></li>
<li>▫️ <code>:white_small_square:</code></li>
<li>◾ <code>:black_medium_small_square:</code></li>
<li>◽ <code>:white_medium_small_square:</code></li>
<li>◼️ <code>:black_medium_square:</code></li>
<li>◻️ <code>:white_medium_square:</code></li>
<li>⬛ <code>:black_large_square:</code></li>
<li>⬜ <code>:white_large_square:</code></li>
<li>✅ <code>:white_check_mark:</code></li>
<li>🔲 <code>:black_square_button:</code></li>
<li>🔳 <code>:white_square_button:</code></li>
<li>⚫ <code>:black_circle:</code></li>
<li>⚪ <code>:white_circle:</code></li>
<li>🔴 <code>:red_circle:</code></li>
<li>🔵 <code>:large_blue_circle:</code></li>
<li>🔷 <code>:large_blue_diamond:</code></li>
<li>🔶 <code>:large_orange_diamond:</code></li>
<li>🔹 <code>:small_blue_diamond:</code></li>
<li>🔸 <code>:small_orange_diamond:</code></li>
<li>🔺 <code>:small_red_triangle:</code></li>
<li>🔻 <code>:small_red_triangle_down:</code></li>
</ul>`,r:{minutes:1.31,words:392},y:"a",t:"符号",i:"emoji"},["/tutorial/ops/markdown/emoji/symbol","/tutorial/ops/markdown/emoji/symbol.md"]],["v-8d744168","/tutorial/front-end/mini-app/guide/ability/",{d:1681181241e3,c:"小程序",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/network.html" target="blank">网络请求</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/storage.html" target="blank">存储</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/file-system.html" target="blank">文件系统</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/ability/debug.html" target="blank">调试</a></p>
</li>
</ul>`,r:{minutes:.1,words:31},y:"a",t:"小程序能力",i:"ability"},["/tutorial/front-end/mini-app/guide/ability/index.html","/tutorial/front-end/mini-app/guide/ability/README.md"]],["v-bb8e529c","/tutorial/front-end/mini-app/guide/ability/debug.html",{d:1681181241e3,c:"小程序",e:`<h2> vConsole </h2>
<p>在真机上，如果想要查看 <code>console</code> API 输出的日志内容和额外的调试信息，需要在点击屏幕右上角的按钮打开的菜单里选择「打开调试」。此时小程序/小游戏会退出，重新打开后会右下角会出现一个 <code>vConsole</code> 按钮。点击 <code>vConsole</code> 按钮可以打开日志面板。</p>
<figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/vConsole-app.19b93c1e.jpg#width:350px" alt="Vconsole" tabindex="0" loading="lazy"><figcaption>Vconsole</figcaption></figure>`,r:{minutes:2.13,words:639},y:"a",t:"调试",i:"debug"},["/tutorial/front-end/mini-app/guide/ability/debug","/tutorial/front-end/mini-app/guide/ability/debug.md"]],["v-d7116ef6","/tutorial/front-end/mini-app/guide/ability/file-system.html",{d:1681181241e3,c:"小程序",e:`<p>文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 <code>wx.getFileSystemManager()</code> 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getFileSystemManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件主要分为两大类:</p>
<ul>
<li>代码包文件: 代码包文件指的是在项目目录中添加的文件。</li>
<li>本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。</li>
</ul>
`,r:{minutes:4.45,words:1334},y:"a",t:"文件系统",i:"file"},["/tutorial/front-end/mini-app/guide/ability/file-system","/tutorial/front-end/mini-app/guide/ability/file-system.md"]],["v-31173e92","/tutorial/front-end/mini-app/guide/ability/network.html",{d:1681181241e3,c:"小程序",e:`<p>在小程序中使用网络相关的 API 时，需要注意下列问题，请开发者提前了解。</p>
<h2> 1. 服务器域名配置</h2>
<p>每个微信小程序需要事先设置一个通讯域名，小程序只可以跟指定的域名与进行网络通信。包括普通 HTTPS 请求(<code>wx.request</code>)、上传文件(<code>wx.uploadFile</code>)、下载文件(<code>wx.downloadFile</code>) 和 WebSocket 通信(<code>wx.connectSocket</code>)</p>
<h3> 配置流程</h3>
<p>服务器域名请在 「小程序后台-设置-开发设置-服务器域名」 中进行配置，配置时需要注意:</p>`,r:{minutes:3.74,words:1121},y:"a",t:"网络",i:"network"},["/tutorial/front-end/mini-app/guide/ability/network","/tutorial/front-end/mini-app/guide/ability/network.md"]],["v-1e1ba08a","/tutorial/front-end/mini-app/guide/ability/storage.html",{d:1681181241e3,c:"小程序",e:`<p>每个微信小程序都可以有自己的本地缓存，可以通过 <code>wx.setStorage</code> / <code>wx.setStorageSync</code>、<code>wx.getStorage</code> / <code>wx.getStorageSync</code>、<code>wx.clearStorage</code> / <code>wx.clearStorageSync</code>，<code>wx.removeStorage</code> / <code>wx.removeStorageSync</code> 对本地缓存进行读写和清理。</p>
<p>同一个微信用户，同一个小程序 storage 上限为 10MB。Storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。</p>
`,r:{minutes:.58,words:174},y:"a",t:"存储",i:"storage"},["/tutorial/front-end/mini-app/guide/ability/storage","/tutorial/front-end/mini-app/guide/ability/storage.md"]],["v-2b627946","/tutorial/front-end/mini-app/guide/config/",{d:1681181241e3,c:"小程序",e:`<p>小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。</p>
</div>
`,r:{minutes:1.97,words:592},y:"a",t:"配置",i:"config"},["/tutorial/front-end/mini-app/guide/config/index.html","/tutorial/front-end/mini-app/guide/config/README.md"]],["v-d9aa29b6","/tutorial/front-end/mini-app/guide/config/app-config.html",{d:1681181241e3,c:"小程序",e:`<p>小程序根目录下的 app.json 文件用来对微信小程序进行全局配置。文件内容为一个 JSON 对象，有以下属性:</p>
`,r:{minutes:8.58,words:2573},y:"a",t:"全局配置文档",i:"app"},["/tutorial/front-end/mini-app/guide/config/app-config","/tutorial/front-end/mini-app/guide/config/app-config.md"]],["v-e39a8c42","/tutorial/front-end/mini-app/guide/config/page-config.html",{d:1681181241e3,c:"小程序",e:`<p>每一个小程序页面也可以使用 <code>.json</code> 文件来对本页面的窗口表现进行配置。</p>
`,r:{minutes:1.94,words:581},y:"a",t:"页面配置",i:"page"},["/tutorial/front-end/mini-app/guide/config/page-config","/tutorial/front-end/mini-app/guide/config/page-config.md"]],["v-1ba75a8e","/tutorial/front-end/mini-app/guide/config/sitemap-config.html",{d:1681181241e3,c:"小程序",e:`<p>微信现已开放小程序内搜索，开发者可以通过 <code>sitemap.json</code> 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code>user-agent: mpcrawler</code> 及场景值: <code>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p>
<p>小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 <code>sitemap.json</code> ，则默认为所有页面都允许被索引。</p>
`,r:{minutes:2.8,words:839},y:"a",t:"小程序内索引",i:"search"},["/tutorial/front-end/mini-app/guide/config/sitemap-config","/tutorial/front-end/mini-app/guide/config/sitemap-config.md"]],["v-e4f6e8f2","/tutorial/front-end/mini-app/guide/custom-component/",{d:1681181241e3,c:"小程序",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/custom-component/intro.html" target="blank">自定义组件介绍</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/custom-component/component.html" target="blank">构造器</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/custom-component/style.html" target="blank">组件模板和样式</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/custom-component/behavior.html" target="blank">Behavior</a> </p>
</li>
</ul>`,r:{minutes:.14,words:41},y:"a",t:"自定义组件"},["/tutorial/front-end/mini-app/guide/custom-component/index.html","/tutorial/front-end/mini-app/guide/custom-component/README.md"]],["v-1d61d9a0","/tutorial/front-end/mini-app/guide/custom-component/behavior.html",{d:1681181241e3,c:"小程序",e:`<p><code>Behavior</code> 注册一个 behavior，接受一个 Object 类型的参数。</p>
<h2> 参数</h2>
<table>
<thead>
<tr>
<th>定义段</th>
<th>类型</th>
<th>是否必填</th>
<th>描述</th>
<th>最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>properties</td>
<td>Object Map</td>
<td>否</td>
<td>同组件的属性</td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>否</td>
<td>同组件的数据</td>
<td></td>
</tr>
<tr>
<td>methods</td>
<td>Object</td>
<td>否</td>
<td>同自定义组件的方法</td>
<td></td>
</tr>
<tr>
<td>behaviors</td>
<td>String Array</td>
<td>否</td>
<td>引入其它的 behavior</td>
<td></td>
</tr>
<tr>
<td>created</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
<tr>
<td>attached</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
<tr>
<td>ready</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
<tr>
<td>moved</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
<tr>
<td>detached</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:.49,words:146},y:"a",t:"Behavior"},["/tutorial/front-end/mini-app/guide/custom-component/behavior","/tutorial/front-end/mini-app/guide/custom-component/behavior.md"]],["v-6ae00d43","/tutorial/front-end/mini-app/guide/custom-component/component.html",{d:1681181241e3,c:"小程序",e:`<p><code>Component</code> 构造器用于创建自定义组件，接受一个 Object 类型的参数。</p>
`,r:{minutes:6.22,words:1866},y:"a",t:"框架接口"},["/tutorial/front-end/mini-app/guide/custom-component/component","/tutorial/front-end/mini-app/guide/custom-component/component.md"]],["v-72660cb4","/tutorial/front-end/mini-app/guide/custom-component/intro.html",{d:1681181241e3,c:"小程序",e:`<h2> 用途</h2>
<ul>
<li>将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用</li>
<li>将复杂的页面拆分成多个低耦合的模块，有助于代码维护。</li>
</ul>
<h2> 创建自定义组件</h2>
<p>类似于页面，一个自定义组件由 <code>json</code> <code>wxml</code> <code>wxss</code> <code>js</code> 4 个文件组成。</p>
<p>要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 <code>component</code> 字段设为 <code>true</code> 可将这一组文件设为自定义组件):</p>`,r:{minutes:3.2,words:960},y:"a",t:"自定义组件",i:"info"},["/tutorial/front-end/mini-app/guide/custom-component/intro","/tutorial/front-end/mini-app/guide/custom-component/intro.md"]],["v-2fcf188f","/tutorial/front-end/mini-app/guide/custom-component/style.html",{d:1681181241e3,c:"小程序",e:`<p>类似于页面，自定义组件拥有自己的 wxml 模板和 wxss 样式。</p>
<h2> 组件模板</h2>
<p>组件模板的写法与页面模板相同。组件模板与组件数据结合后生成的节点树，将被插入到组件的引用位置上。</p>
<p>在组件模板中可以提供一个 <code>&lt;slot&gt;</code> 节点，用于承载组件引用时提供的子节点。</p>
<details class="hint-container details"><summary>代码示例</summary>
<p><a href="https://developers.weixin.qq.com/s/1udXLnmi6KY2" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 组件模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>这里是组件的内部节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引用组件的页面模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 这部分内容将被放置在组件 &lt;slot&gt; 的位置上 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>这里是插入到组件slot中的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,r:{minutes:8.88,words:2665},y:"a",t:"组件模板和样式",i:"decorate"},["/tutorial/front-end/mini-app/guide/custom-component/style","/tutorial/front-end/mini-app/guide/custom-component/style.md"]],["v-27b18929","/tutorial/front-end/mini-app/guide/frame/",{d:1681181241e3,c:"小程序",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/intro.html" target="blank">小程序框架介绍</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/scene.html" target="blank">场景值</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/env.html" target="blank">运行环境</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/mechanism.html" target="blank">运行机制</a> </p>
</li>
<li>
<p><a href="/tutorial/front-end/mini-app/guide/frame/update.html" target="blank">更新机制</a> </p>
</li>
</ul>`,r:{minutes:.22,words:66},y:"a",t:"框架",i:"frame"},["/tutorial/front-end/mini-app/guide/frame/index.html","/tutorial/front-end/mini-app/guide/frame/README.md"]],["v-7030d796","/tutorial/front-end/mini-app/guide/frame/env.html",{d:1681181241e3,c:"小程序",e:`<p>微信小程序运行在多种平台上: iOS(iPhone/iPad)微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。</p>
<p>各平台脚本执行环境以及用于渲染非原生组件的环境是各不相同的:</p>
<ul>
<li>
<p>在 iOS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，环境有 iOS 12、iOS 13 等；</p>
</li>
<li>
<p>在 Android 上，小程序逻辑层的 JavaScript 代码运行在 V8 中，视图层是由自研 XWeb 引擎基于 Mobile Chrome 内核来渲染的；</p>
</li>
<li>
<p>在 开发工具上，小程序逻辑层的 JavaScript 代码是运行在 NW.js 中，视图层是由 Chromium Webview 来渲染的。</p>
</li>
<li>
<p>在 PC 上，小程序逻辑层 JavaScript 和视图层 JavaScript 都是用 Chrome 内核</p>
</li>
<li>
<p>在 Mac 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，与 iOS 一致</p>
</li>
</ul>`,r:{minutes:1.46,words:439},y:"a",t:"小程序的运行环境",i:"leaf"},["/tutorial/front-end/mini-app/guide/frame/env","/tutorial/front-end/mini-app/guide/frame/env.md"]],["v-fa183054","/tutorial/front-end/mini-app/guide/frame/intro.html",{d:1681181241e3,c:"小程序",e:`<p>小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。</p>
<p>整个小程序框架系统分为两部分: <a href="/tutorial/front-end/mini-app/guide/service/" target="blank"><strong>逻辑层</strong></a> (App Service) 和 <a href="/tutorial/front-end/mini-app/guide/view/" target="blank"><strong>视图层</strong></a> (../view)。小程序提供了自己的视图层描述语言 <a href="/tutorial/front-end/mini-app/guide/view/wxml.html" target="blank">WXML</a> 和 <a href="/tutorial/front-end/mini-app/guide/view/wxss.html" target="blank">WXSS</a>，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。</p>
`,r:{minutes:2.1,words:629},y:"a",t:"框架",i:"frame"},["/tutorial/front-end/mini-app/guide/frame/intro","/tutorial/front-end/mini-app/guide/frame/intro.md"]],["v-6bf63fb6","/tutorial/front-end/mini-app/guide/frame/js-support.html",{d:1681181241e3,c:"小程序",e:`<h2> 运行限制</h2>
<p>基于安全考虑，小程序中不支持动态执行 JS 代码，即:</p>
<ul>
<li>不支持使用 <code>eval</code> 执行 JS 代码</li>
<li>不支持使用 <code>new Function</code> 创建函数</li>
</ul>
<h2> 客户端 ES6 API 支持情况</h2>
<p>微信小程序已经支持了绝大部分的 ES6 API，已支持的 API 如下(部分 API 依赖系统版本):</p>
<table>
<thead>
<tr>
<th>String</th>
<th>iOS10+</th>
<th>Android</th>
</tr>
</thead>
<tbody>
<tr>
<td>codePointAt</td>
<td></td>
<td></td>
</tr>
<tr>
<td>normalize</td>
<td></td>
<td></td>
</tr>
<tr>
<td>includes</td>
<td></td>
<td></td>
</tr>
<tr>
<td>startsWith</td>
<td></td>
<td></td>
</tr>
<tr>
<td>endsWith</td>
<td></td>
<td></td>
</tr>
<tr>
<td>repeat</td>
<td></td>
<td></td>
</tr>
<tr>
<td>String.fromCodePoint</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:.57,words:172},y:"a",t:"JavaScript 支持情况",i:"javascript"},["/tutorial/front-end/mini-app/guide/frame/js-support","/tutorial/front-end/mini-app/guide/frame/js-support.md"]],["v-4a6ada89","/tutorial/front-end/mini-app/guide/frame/mechanism.html",{d:1681181241e3,c:"小程序",e:`<h2> 前台/后台状态</h2>
<p>小程序启动后，界面被展示给用户，此时小程序处于前台状态。</p>
<p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。</p>
<p>当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。</p>
<h2> 小程序启动</h2>
<p>这样，小程序启动可以分为两种情况，一种是冷启动，一种是热启动。</p>
<ul>
<li>冷启动: 如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。</li>
<li>热启动: 如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。</li>
</ul>`,r:{minutes:5.85,words:1756},y:"a",t:"小程序运行机制",i:"operate"},["/tutorial/front-end/mini-app/guide/frame/mechanism","/tutorial/front-end/mini-app/guide/frame/mechanism.md"]],["v-97f2ec94","/tutorial/front-end/mini-app/guide/frame/scene.html",{d:1681181241e3,c:"小程序",e:`<p>场景值用来描述用户进入小程序的路径。</p>
`,r:{minutes:5.08,words:1524},y:"a",t:"场景值",i:"number"},["/tutorial/front-end/mini-app/guide/frame/scene","/tutorial/front-end/mini-app/guide/frame/scene.md"]],["v-10871e32","/tutorial/front-end/mini-app/guide/frame/update.html",{d:1681181241e3,c:"小程序",e:`<h2> 未启动时更新</h2>
<p>开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先更新最新版本再打开。</p>
<h2> 启动时更新</h2>
<p>小程序每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。</p>`,r:{minutes:1.23,words:370},y:"a",t:"小程序更新机制",i:"update"},["/tutorial/front-end/mini-app/guide/frame/update","/tutorial/front-end/mini-app/guide/frame/update.md"]],["v-949401be","/tutorial/front-end/mini-app/guide/service/",{d:1681181241e3,c:"小程序",e:`<p>小程序开发框架的逻辑层 (App Service) 使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。</p>
<p>逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。</p>
<p>开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。这一行为类似 ServiceWorker，所以逻辑层也称之为 App Service。</p>
`,r:{minutes:1.13,words:339},y:"a",t:"逻辑层",i:"process"},["/tutorial/front-end/mini-app/guide/service/index.html","/tutorial/front-end/mini-app/guide/service/README.md"]],["v-8a057d0e","/tutorial/front-end/mini-app/guide/service/app.html",{d:1681181241e3,c:"小程序",e:`<p>注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 </p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。</p>
</div>
`,r:{minutes:2.59,words:777},y:"a",t:"App",i:"app"},["/tutorial/front-end/mini-app/guide/service/app","/tutorial/front-end/mini-app/guide/service/app.md"]],["v-7c8b712f","/tutorial/front-end/mini-app/guide/service/lifetime.html",{d:1681181241e3,c:"小程序",e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
</div>
<p>下图说明了页面 Page 实例的生命周期。</p>
<figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png" alt="lifetime" tabindex="0" loading="lazy"><figcaption>lifetime</figcaption></figure>
`,r:{minutes:.26,words:78},y:"a",t:"生命周期",i:"state"},["/tutorial/front-end/mini-app/guide/service/lifetime","/tutorial/front-end/mini-app/guide/service/lifetime.md"]],["v-82489fa8","/tutorial/front-end/mini-app/guide/service/module.html",{d:1681181241e3,c:"小程序",e:`<p>此部分是高效复用小程序代码的方式。</p>
<p>模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。</p>
<p>模块只有通过 <code>module.exports</code> 或者 <code>exports</code> 才能对外暴露接口。</p>
`,r:{minutes:1.94,words:582},y:"a",t:"模块化",i:"module"},["/tutorial/front-end/mini-app/guide/service/module","/tutorial/front-end/mini-app/guide/service/module.md"]],["v-85f0d4ae","/tutorial/front-end/mini-app/guide/service/page.html",{d:1681181241e3,c:"小程序",e:`<p>注册小程序中的一个页面。接受一个 Object 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。 </p>
`,r:{minutes:8.71,words:2614},y:"a",t:"Page",i:"page"},["/tutorial/front-end/mini-app/guide/service/page","/tutorial/front-end/mini-app/guide/service/page.md"]],["v-a771c2d6","/tutorial/front-end/mini-app/guide/service/register.html",{d:1681181241e3,c:"小程序",e:`<h2> 注册小程序 </h2>
<p>每个小程序都需要在 <code>app.js</code> 中调用 <code>App</code> 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。</p>
<p>详细的参数含义和使用请参考 <a href="/tutorial/front-end/mini-app/guide/service/app.html" target="blank">App 参考文档</a>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something initial when launch.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when show.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when hide.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">"I am global data"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.11,words:634},y:"a",t:"注册",i:"config"},["/tutorial/front-end/mini-app/guide/service/register","/tutorial/front-end/mini-app/guide/service/register.md"]],["v-0aadde11","/tutorial/front-end/mini-app/guide/service/route.html",{d:1681181241e3,c:"小程序",e:`<p>在小程序中所有页面的路由全部由框架进行管理。</p>
`,r:{minutes:1.92,words:576},y:"a",t:"页面路由",i:"router"},["/tutorial/front-end/mini-app/guide/service/route","/tutorial/front-end/mini-app/guide/service/route.md"]],["v-b3f29962","/tutorial/front-end/mini-app/guide/service/run.html",{d:1681181241e3,c:"小程序",e:`<h2> 小程序启动</h2>
<p>小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。</p>
<ul>
<li>热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；</li>
<li>冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。</li>
</ul>
<p>小程序没有重启的概念。</p>
<h2> 前台/后台状态</h2>
<p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了<strong>后台</strong>状态；</p>`,r:{minutes:1.56,words:467},y:"a",t:"小程序运行机制",i:"play"},["/tutorial/front-end/mini-app/guide/service/run","/tutorial/front-end/mini-app/guide/service/run.md"]],["v-54b9e083","/tutorial/front-end/mini-app/guide/view/",{d:1681181241e3,c:"小程序",e:`<p>框架的视图层由 WXML 与 WXSS 编写，由组件来进行展示。</p>
<p>将逻辑层的数据反应成视图，同时将视图层的事件发送给逻辑层。</p>
<ul>
<li>
<p>WXML (WeiXin Markup language) 用于描述页面的结构。</p>
</li>
<li>
<p>WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。</p>
</li>
<li>
<p>WXSS (WeiXin Style Sheet) 用于描述页面的样式。</p>
</li>
<li>
<p>组件 (Component) 是视图的基本组成单元。</p>
</li>
</ul>
`,r:{minutes:.85,words:256},y:"a",t:"视图层 View",i:"layout"},["/tutorial/front-end/mini-app/guide/view/index.html","/tutorial/front-end/mini-app/guide/view/README.md"]],["v-878011d0","/tutorial/front-end/mini-app/guide/view/animation.html",{d:1681181241e3,c:"小程序",e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> 界面动画的常见方式</h2>
<p>在小程序中，通常可以使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" target="_blank" rel="noopener noreferrer">CSS 渐变</a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations" target="_blank" rel="noopener noreferrer">CSS 动画</a> 来创建简易的界面动画。(这也是 Mr.Hope 主要使用的动画方式)</p>`,r:{minutes:5.33,words:1599},y:"a",t:"动画",i:"animation"},["/tutorial/front-end/mini-app/guide/view/animation","/tutorial/front-end/mini-app/guide/view/animation.md"]],["v-642ef93f","/tutorial/front-end/mini-app/guide/view/component.html",{d:1681181241e3,c:"小程序",e:`<p>框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/component/" target="_blank" rel="noopener noreferrer">组件文档</a>。</p>
<p>什么是组件:</p>
<ul>
<li>
<p>组件是视图层的基本组成单元。</p>
</li>
<li>
<p>组件自带一些功能与微信风格一致的样式。</p>
</li>
<li>
<p>一个组件通常包括 <strong>开始标签</strong> 和 <strong>结束标签</strong>，属性 用来修饰这个组件，内容 在两个标签之内。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tagname</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
Content goes here ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tagname</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>所有组件与属性都是小写，以连字符 <code>-</code> 连接</p>
</div>
</li>
</ul>
`,r:{minutes:1.53,words:459},y:"a",t:"基础组件",i:"plugin"},["/tutorial/front-end/mini-app/guide/view/component","/tutorial/front-end/mini-app/guide/view/component.md"]],["v-3c404aa4","/tutorial/front-end/mini-app/guide/view/condition-render.html",{d:1681181241e3,c:"小程序",e:`<h2> wx:if</h2>
<p>在框架中，使用 <code>wx:if=""</code> 来判断是否需要渲染该代码块:</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{condition}}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> True <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.35,words:404},y:"a",t:"条件渲染",i:"condition"},["/tutorial/front-end/mini-app/guide/view/condition-render","/tutorial/front-end/mini-app/guide/view/condition-render.md"]],["v-4d6a3f9c","/tutorial/front-end/mini-app/guide/view/data-bind.html",{d:1681181241e3,c:"小程序",e:`<p>WXML 中的动态数据均来自对应 <code>Page</code> 的 <code>data</code>。</p>
`,r:{minutes:2.02,words:607},y:"a",t:"数据绑定",i:"rank"},["/tutorial/front-end/mini-app/guide/view/data-bind","/tutorial/front-end/mini-app/guide/view/data-bind.md"]],["v-06ddb742","/tutorial/front-end/mini-app/guide/view/event.html",{d:1681181241e3,c:"小程序",e:`<h2> 什么是事件</h2>
<ul>
<li>事件是视图层到逻辑层的通讯方式。</li>
<li>事件可以将用户的行为反馈到逻辑层进行处理。</li>
<li>事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。</li>
<li>事件对象可以携带额外信息，如 <code>id</code>, <code>dataset</code>, <code>touches</code>。</li>
</ul>
<h2> 事件的使用方式</h2>
<p>在组件中绑定一个事件处理函数，如 <code>bindtap</code>，当用户点击该组件的时候会在该页面对应的 <code>Page</code> 中找到相应的事件处理函数。</p>`,r:{minutes:9.18,words:2753},y:"a",t:"事件",i:"activity"},["/tutorial/front-end/mini-app/guide/view/event","/tutorial/front-end/mini-app/guide/view/event.md"]],["v-30eeccd7","/tutorial/front-end/mini-app/guide/view/list-render.html",{d:1681181241e3,c:"小程序",e:`<h2> wx:for</h2>
<p>在组件上使用 <code>wx:for</code> 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。</p>
<p>默认数组的当前项的下标变量名默认为 <code>index</code>，数组当前项的变量名默认为 <code>item</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{array}}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  {{index}}: {{item.message}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.67,words:802},y:"a",t:"列表渲染",i:"loop"},["/tutorial/front-end/mini-app/guide/view/list-render","/tutorial/front-end/mini-app/guide/view/list-render.md"]],["v-49aa3013","/tutorial/front-end/mini-app/guide/view/model.html",{d:1681181241e3,c:"小程序",e:`<blockquote>
<p>基础库 2.9.3 开始支持</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> 语法</h2>
<p>在 WXML 中，普通的属性的绑定是单向的。例如:</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{value}}<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.97,words:592},y:"a",t:"简易双向绑定",i:"async"},["/tutorial/front-end/mini-app/guide/view/model","/tutorial/front-end/mini-app/guide/view/model.md"]],["v-9e4aad0a","/tutorial/front-end/mini-app/guide/view/rendering-cache.html",{d:1681181241e3,c:"小程序",e:`<blockquote>
<p>基础库 2.11.1 开始支持</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> 初始渲染缓存工作原理</h2>
<p>小程序页面的初始化分为两个部分。</p>
<ul>
<li>逻辑层初始化: 载入必需的小程序代码、初始化页面 <code>this</code> 对象(也包括它涉及到的所有自定义组件的 this 对象)、将相关数据发送给视图层。</li>
<li>视图层初始化: 载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发送的数据，最后渲染页面。</li>
</ul>`,r:{minutes:4.17,words:1250},y:"a",t:"初始渲染缓存",i:"cache"},["/tutorial/front-end/mini-app/guide/view/rendering-cache","/tutorial/front-end/mini-app/guide/view/rendering-cache.md"]],["v-b0c3df5e","/tutorial/front-end/mini-app/guide/view/resizable.html",{d:1681181241e3,c:"小程序",e:`<h2> 显示区域尺寸</h2>
<p>显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。</p>
<h3> 在手机上启用屏幕旋转支持</h3>
<p>从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 <code>"pageOrientation": "auto"</code> ，或在页面 json 文件中配置 <code>"pageOrientation": "auto"</code>。</p>`,r:{minutes:2.59,words:776},y:"a",t:"响应显示区域变化",i:"view"},["/tutorial/front-end/mini-app/guide/view/resizable","/tutorial/front-end/mini-app/guide/view/resizable.md"]],["v-01cc2cb7","/tutorial/front-end/mini-app/guide/view/selector.html",{d:1681181241e3,c:"小程序",e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> WXML 节点信息</h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html" target="_blank" rel="noopener noreferrer">节点信息查询 API</a> 可以用于获取节点属性、样式、在界面上的位置等信息。</p>`,r:{minutes:3.12,words:936},y:"a",t:"获取界面上的节点信息",i:"select"},["/tutorial/front-end/mini-app/guide/view/selector","/tutorial/front-end/mini-app/guide/view/selector.md"]],["v-775d7cfc","/tutorial/front-end/mini-app/guide/view/template.html",{d:1681181241e3,c:"小程序",e:`<p>WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。</p>
`,r:{minutes:1.68,words:505},y:"a",t:"模板",i:"template"},["/tutorial/front-end/mini-app/guide/view/template","/tutorial/front-end/mini-app/guide/view/template.md"]],["v-0e5f8376","/tutorial/front-end/mini-app/guide/view/wxml.html",{d:1681181241e3,c:"小程序",e:`<p>WXML (WeiXin Markup Language) 是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。</p>
`,r:{minutes:.73,words:219},y:"a",t:"WXML",i:"code"},["/tutorial/front-end/mini-app/guide/view/wxml","/tutorial/front-end/mini-app/guide/view/wxml.md"]],["v-8c9bce86","/tutorial/front-end/mini-app/guide/view/wxs-event.html",{d:1681181241e3,c:"小程序",e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> 背景</h2>
<p>有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 <code>touchmove</code> 手势，要求 B 也跟随移动，<a href="https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html" target="_blank" rel="noopener noreferrer">movable-view</a> 就是一个典型的例子。一次 <code>touchmove</code> 事件的响应过程为:</p>`,r:{minutes:3.56,words:1069},y:"a",t:"WXS 事件",i:"activity"},["/tutorial/front-end/mini-app/guide/view/wxs-event","/tutorial/front-end/mini-app/guide/view/wxs-event.md"]],["v-286cdfea","/tutorial/front-end/mini-app/guide/view/wxs.html",{d:1681181241e3,c:"小程序",e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<p>WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。</p>
<ol>
<li>WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。</li>
<li>WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。</li>
<li>WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。</li>
<li>WXS 函数不能作为组件的事件回调。</li>
<li>由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。</li>
</ol>
`,r:{minutes:1.24,words:373},y:"a",t:"WXS",i:"script"},["/tutorial/front-end/mini-app/guide/view/wxs","/tutorial/front-end/mini-app/guide/view/wxs.md"]],["v-57b6d355","/tutorial/front-end/mini-app/guide/view/wxss.html",{d:1681181241e3,c:"小程序",e:`<p>WXSS (WeiXin Style Sheets) 是一套样式语言，用于描述 WXML 的组件样式。</p>
<p>WXSS 用来决定 WXML 的组件应该怎么显示。</p>
<p>为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。</p>
<p>与 CSS 相比，WXSS 扩展的特性有:</p>
<ul>
<li>尺寸单位</li>
<li>样式导入</li>
</ul>
<p>与 CSS 相比，WXSS 缺失的特性有:</p>
<ul>
<li>一部分高级选择器</li>
<li>一部分 CSS3 高级功能</li>
</ul>
`,r:{minutes:2.21,words:663},y:"a",t:"WXSS",i:"css"},["/tutorial/front-end/mini-app/guide/view/wxss","/tutorial/front-end/mini-app/guide/view/wxss.md"]],["v-62622fc3","/tutorial/front-end/website/css/guide/",{d:15676416e5,l:"2019年9月5日",c:"CSS",g:["快速上手"],e:`<p>CSS 指层叠样式表 (<strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets)。</p>
`,r:{minutes:2.86,words:857},y:"a",t:"快速上手",i:"creative"},["/tutorial/front-end/website/css/guide/index.html","/tutorial/front-end/website/css/guide/README.md"]],["v-372d329e","/tutorial/front-end/website/css/guide/box.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",g:["快速上手"],e:`<p>CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。</p>
`,r:{minutes:1.93,words:578},y:"a",t:"盒模型简介",i:"box"},["/tutorial/front-end/website/css/guide/box","/tutorial/front-end/website/css/guide/box.md"]],["v-6ef62430","/tutorial/front-end/website/css/guide/cascade.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",g:["快速上手"],e:`<p>本文介绍 CSS 的一些最基本的概念: 层叠、优先级和继承。</p>
`,r:{minutes:6.45,words:1934},y:"a",t:"优先级和继承",i:"sort"},["/tutorial/front-end/website/css/guide/cascade","/tutorial/front-end/website/css/guide/cascade.md"]],["v-9ecc0baa","/tutorial/front-end/website/css/guide/common.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",g:["快速上手"],e:`<p>本章节介绍 CSS 的最常见，也是最基础属性。</p>
`,r:{minutes:3.89,words:1166},y:"a",t:"常见属性说明",i:"info"},["/tutorial/front-end/website/css/guide/common","/tutorial/front-end/website/css/guide/common.md"]],["v-6e8b1d3c","/tutorial/front-end/website/css/guide/declaration.html",{d:15676416e5,l:"2019年9月5日",c:"CSS",g:["快速上手"],e:`<h2> 值的专一性</h2>
<p>CSS 每个属性都会有且仅有一个值。</p>
<ul>
<li>如果您设置了多个值，最终优先级最高的值会被应用、</li>
<li>如果您没有设置值，则会应用默认值。默认值可以是 <code>unset</code>(未设置), <code>inherit</code> (继承父属性值), <code>initial</code> (初始值)。</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果属性未知或某个值对给定属性无效，则声明被视为无效，并被浏览器的 CSS 引擎完全忽略。</p>
</div>`,r:{minutes:1.28,words:385},y:"a",t:"CSS 声明",i:"object"},["/tutorial/front-end/website/css/guide/declaration","/tutorial/front-end/website/css/guide/declaration.md"]],["v-7ae2b4b1","/tutorial/front-end/website/css/guide/import.html",{d:15676416e5,l:"2019年9月5日",c:"CSS",g:["快速上手"],e:`<p>有三种方式引入并应用 CSS。</p>
<h2> 外部样式表</h2>
<p>外部样式表将样式写入 CSS 文件中，在 HTML 中使用 <code>&lt;link&gt;</code> 引用，可以根据实际需要放在 <code>&lt;head&gt;</code> 标签里或 <code>&lt;body&gt;</code> 标签的末尾。比如:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mystyle.css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.14,words:342},y:"a",t:"引入 CSS",i:"link"},["/tutorial/front-end/website/css/guide/import","/tutorial/front-end/website/css/guide/import.md"]],["v-4dcea577","/tutorial/front-end/website/css/guide/selector.html",{d:15676416e5,l:"2019年9月5日",c:"CSS",g:["快速上手"],e:`<p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p>
<p>选择器所选择的元素，叫做“选择器的对象”。</p>
`,r:{minutes:2.35,words:705},y:"a",t:"选择器简介",i:"select"},["/tutorial/front-end/website/css/guide/selector","/tutorial/front-end/website/css/guide/selector.md"]],["v-656e7253","/tutorial/front-end/website/css/intro/",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/website/css/intro/selector.html" target="blank">CSS 选择器</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/intro/box.html" target="blank">CSS 盒模型</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/intro/background-and-border.html" target="blank">背景与边框</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/intro/font.html" target="blank">CSS 字体</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/intro/text-direction.html" target="blank">文本方向</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/intro/overflow.html" target="blank">溢出</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/intro/value.html" target="blank">CSS 值</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/intro/replaced.html" target="blank">可替换元素</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/intro/media.html" target="blank">媒体查询</a></p>
</li>
</ul>`,r:{minutes:.38,words:114},y:"a",t:"CSS 介绍",i:"info"},["/tutorial/front-end/website/css/intro/index.html","/tutorial/front-end/website/css/intro/README.md"]],["v-4830b9aa","/tutorial/front-end/website/css/intro/background-and-border.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h2> 背景样式</h2>
<h3> 背景颜色</h3>
<p><code>background-color</code> 属性定义了 CSS 中任何元素的背景颜色。属性接受任何有效的颜色值。背景色扩展到元素的内容和内边距的下面。</p>

<h3> 背景图片</h3>
<p><code>background-image</code> 属性允许在元素的背景中显示图像。</p>
<p>默认情况下，大图不会缩小以适应方框，因此我们只能看到它的一个小角，而小图则是平铺以填充方框。</p>

<p>如果除了背景图像外，还指定了背景颜色，则图像将显示在颜色的顶部。尝试向上面的示例添加一个 <code>background-color</code> 属性，看看效果如何。</p>`,r:{minutes:7.29,words:2187},y:"a",t:"背景与边框",i:"frame"},["/tutorial/front-end/website/css/intro/background-and-border","/tutorial/front-end/website/css/intro/background-and-border.md"]],["v-26921941","/tutorial/front-end/website/css/intro/box.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<p>在 CSS 中，所有的元素都被一个个的“盒子(box)”包围着。</p>
`,r:{minutes:9.58,words:2873},y:"a",t:"盒模型",i:"box"},["/tutorial/front-end/website/css/intro/box","/tutorial/front-end/website/css/intro/box.md"]],["v-600108f7","/tutorial/front-end/website/css/intro/font.html",{d:15676416e5,l:"2019年9月5日",c:"CSS",e:`<h2> 文本</h2>
<p>元素中的文本是布置在元素的内容框中。以内容区域的左上角作为起点 (或者是右上角，是在 RTL 语言的情况下)，一直延续到行的结束部分。一旦达到行的尽头，它就会进到下一行，然后继续，再接着下一行，直到所有内容都放入了盒子中。文本内容表现地像一些内联元素，被布置到相邻的行上，除非到达了行的尽头，否则不会换行，或者您想强制地手动造成换行的话，您可以使用 <code>&lt;br&gt;</code> 元素。</p>
<p>用于样式文本的 CSS 属性通常可以分为两类:</p>
<ul>
<li><strong>字体样式</strong>: 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等。</li>
<li><strong>文本布局风格</strong>: 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐。</li>
</ul>`,r:{minutes:12.8,words:3839},y:"a",t:"文字样式",i:"format"},["/tutorial/front-end/website/css/intro/font","/tutorial/front-end/website/css/intro/font.md"]],["v-fad3f3f0","/tutorial/front-end/website/css/intro/media.html",{d:15676416e5,l:"2019年9月5日",c:"CSS",g:["CSS"],e:`<p><strong>媒体查询</strong> (Media queries) 非常实用，尤其是当您想要根据设备的大致类型 (如打印设备与带屏幕的设备) 或者特定的特征和设备参数 (例如屏幕分辨率和浏览器视窗宽度) 来修改网站或应用程序时。</p>
`,r:{minutes:10.62,words:3187},y:"a",t:"媒体查询",i:"search"},["/tutorial/front-end/website/css/intro/media","/tutorial/front-end/website/css/intro/media.md"]],["v-7d84eaa4","/tutorial/front-end/website/css/intro/overflow.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<p>溢出是在盒子无法容纳下太多的内容的时候发生的。</p>
<h2> 概念</h2>
<p>我们知道，CSS 中万物皆盒，因此我们可以通过给 <code>width</code> 和 <code>height</code>(或者 <code>inline-size</code> 和 <code>block-size</code>) 赋值的方式来约束盒子的尺寸。溢出是在您往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了您好几种工具来控制溢出。</p>
<h2> CSS 尽可能不丢弃内容</h2>
<p>在默认情况下，CSS 会将元素溢出的部分显示在和盒子外。</p>`,r:{minutes:4.13,words:1239},y:"a",t:"溢出",i:"overflow"},["/tutorial/front-end/website/css/intro/overflow","/tutorial/front-end/website/css/intro/overflow.md"]],["v-969c3194","/tutorial/front-end/website/css/intro/replaced.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h2> 替换元素</h2>
<p>图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。</p>
<div class="hint-container info">
<p class="hint-container-title">可替换元素</p>
<p>在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。</p>
<p>简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 <code>&lt;iframe&gt;</code> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。</p>
<p>CSS 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。</p>
</div>`,r:{minutes:3.2,words:959},y:"a",t:"可替换元素",i:"change"},["/tutorial/front-end/website/css/intro/replaced","/tutorial/front-end/website/css/intro/replaced.md"]],["v-4e01e632","/tutorial/front-end/website/css/intro/selector.html",{d:15676416e5,l:"2019年9月5日",c:"CSS",g:["CSS"],e:`<p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p>
<p>选择器所选择的元素，叫做“选择器的对象”。</p>
`,r:{minutes:4.06,words:1218},y:"a",t:"选择器",i:"select"},["/tutorial/front-end/website/css/intro/selector","/tutorial/front-end/website/css/intro/selector.md"]],["v-2b666a30","/tutorial/front-end/website/css/intro/sizing.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h2> 原始尺寸与固有尺寸</h2>
<p>在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。</p>
<p>一个空的 <code>&lt;div&gt;</code> 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 <code>&lt;div&gt;</code> 并给予其边框，您会在页面上看到一条线。</p>

<h2> 设置具体的尺寸</h2>
<p>当给元素指定尺寸时，我们将其称为<strong>外部尺寸</strong>。 我们可以给它一个具体的 <code>width</code> 和 <code>height</code> 值, 不论它的内容是什么，它将都是该尺寸。</p>`,r:{minutes:4.23,words:1270},y:"a",t:"调整大小",i:"resize"},["/tutorial/front-end/website/css/intro/sizing","/tutorial/front-end/website/css/intro/sizing.md"]],["v-7d8aa827","/tutorial/front-end/website/css/intro/text-direction.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h2> 书写模式</h2>
<p>CSS 中的书写模式是指文本的排列方向是横向还是纵向的。<code>writing-mode</code> 属性使我们从一种模式切换到另一种模式。为此，您不必使用一种竖向的语言——您还可以更改部分文字的方向以实现创新性的布局。</p>
<p>可以使用 <code>writing-mode: vertical-rl</code> 对一个标题的显示进行设置，将标题文本变为竖向。</p>
<p>竖向文本在平面设计中很常见，也可以为您的网页设计增添更加有趣的外观。</p>

<p><code>writing-mode</code> 的三个值分别是:</p>
<ul>
<li><code>horizontal-tb</code>: 块流向从上至下。对应的文本方向是横向的。</li>
<li><code>vertical-rl</code>: 块流向从右向左。对应的文本方向是纵向的。</li>
<li><code>vertical-lr</code>: 块流向从左向右。对应的文本方向是纵向的。</li>
</ul>`,r:{minutes:4.07,words:1220},y:"a",t:"文本方向",i:"direction"},["/tutorial/front-end/website/css/intro/text-direction","/tutorial/front-end/website/css/intro/text-direction.md"]],["v-ee7e56ca","/tutorial/front-end/website/css/intro/value.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h2> CSS 的值</h2>
<p>在 CSS 规范上，您将能够发现值的存在，CSS 有多种值类型，它们被尖括号包围，如 <code>&lt;color&gt;</code> 或 <code>&lt;length&gt;</code>。</p>
<p>当您看到值 <code>&lt;color&gt;</code> 对特定属性有效时，这意味着您可以使用任何有效的颜色作为该属性的值。</p>
<h3> 数字，长度和百分比</h3>
<table>
<thead>
<tr>
<th>数值类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&lt;integer&gt;</code></td>
<td>整数。如 <code>1024</code> 或 <code>-55</code>。</td>
</tr>
<tr>
<td><code>&lt;number&gt;</code></td>
<td>小数 (也可以为整数)。如: <code>0.255</code>、<code>128</code> 或 <code>-1.2</code>。</td>
</tr>
<tr>
<td><code>&lt;dimension&gt;</code></td>
<td><code>&lt;number&gt;</code> + 附加单位。如: <code>45deg</code>、<code>5s</code> 或 <code>10px</code>。<br><code>&lt;dimension&gt;</code> 是一个大类别，包括 <code>&lt;length&gt;</code>、<code>&lt;angle&gt;</code>、<code>&lt;time&gt;</code> 和 <code>&lt;resolution&gt;</code> 类型。</td>
</tr>
<tr>
<td><code>&lt;percentage&gt;</code></td>
<td>一些其他值的一部分，例如 <code>50%</code>。<br>百分比值总是相对于另一个量，例如，一个元素的长度相对于其父元素的长度。</td>
</tr>
</tbody>
</table>`,r:{minutes:8.16,words:2447},y:"a",t:"值与单位",i:"number"},["/tutorial/front-end/website/css/intro/value","/tutorial/front-end/website/css/intro/value.md"]],["v-5dae7d96","/tutorial/front-end/website/css/layout/",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/website/css/layout/intro.html" target="blank">布局介绍</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/layout/flow.html" target="blank">正常流布局</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/layout/flex.html" target="blank">弹性布局</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/layout/exercise.html" target="blank">实战练习</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/css/layout/grid.html" target="blank">网格布局</a></p>
</li>
</ul>`,r:{minutes:.13,words:40},y:"a",t:"CSS 布局",i:"layout"},["/tutorial/front-end/website/css/layout/index.html","/tutorial/front-end/website/css/layout/README.md"]],["v-30097a28","/tutorial/front-end/website/css/layout/exercise.html",{a:"阮一峰",d:1603152e6,l:"2020年10月20日",c:"CSS",e:`<p>本章包括了一些经典的布局实战案例。</p>
`,r:{minutes:9.4,words:2821},y:"a",t:"布局实战",i:"exercise"},["/tutorial/front-end/website/css/layout/exercise","/tutorial/front-end/website/css/layout/exercise.md"]],["v-fc27c22a","/tutorial/front-end/website/css/layout/flex.html",{a:"阮一峰",d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<p>Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。</p>
`,r:{minutes:8.83,words:2650},y:"a",t:"弹性模型",i:"flex"},["/tutorial/front-end/website/css/layout/flex","/tutorial/front-end/website/css/layout/flex.md"]],["v-7df0baf2","/tutorial/front-end/website/css/layout/float.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<p>在网站布局中，应当以 normal flow, flex 和 grid 布局为主。只有在需要特殊样式无法满足时，再考虑 float 布局。</p>
<h2> 简介</h2>
<p>把一个元素“浮动”(float)起来，会改变该元素本身和在正常布局流(normal flow)中跟随它的其他元素的行为。这一元素会浮动到左侧或右侧，并且从正常布局流(normal flow)中移除，这时候其他的周围内容就会在这个被设置浮动(float)的元素周围环绕。</p>
<p><code>float</code> 属性有四个可能的值:</p>
<ul>
<li><code>inherit</code>: 继承父元素的浮动属性。</li>
<li><code>left</code>: 将元素浮动到左侧。</li>
<li><code>right</code>: 将元素浮动到右侧。</li>
<li><code>none</code>: 默认值, 不浮动。</li>
</ul>`,r:{minutes:7.6,words:2281},y:"a",t:"浮动",i:"float"},["/tutorial/front-end/website/css/layout/float","/tutorial/front-end/website/css/layout/float.md"]],["v-dd94d254","/tutorial/front-end/website/css/layout/flow.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h3> 元素特性</h3>
<ul>
<li>
<p>一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。</p>
</li>
<li>
<p>内联元素的 <code>width</code> <code>height</code> 与内容一致。您无法设置内联元素的 <code>width</code> <code>height</code>。</p>
</li>
<li>
<p>如果您想控制内联元素的尺寸，您需要为元素设置 <code>display: block;</code> 或 <code>display: inline-block</code>。<code>inline-block</code> 混合了 <code>inline</code> 和 <code>block</code> 的特性。</p>
</li>
</ul>`,r:{minutes:1.9,words:569},y:"a",t:"正常布局流",i:"flow"},["/tutorial/front-end/website/css/layout/flow","/tutorial/front-end/website/css/layout/flow.md"]],["v-36ef9bbe","/tutorial/front-end/website/css/layout/grid.html",{a:"阮一峰",d:1603152e6,l:"2020年10月20日",c:"CSS",e:`<h2> 概述</h2>
<p>网格布局 (Grid) 是最强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。</p>

<p>上图这样的布局，就是 Grid 布局的拿手好戏。</p>
<div class="hint-container tip">
<p class="hint-container-title">与 flex 的区别</p>
<p>Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。</p>
<p>Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。</p>
</div>`,r:{minutes:31.84,words:9551},y:"a",t:"网格布局",i:"grid"},["/tutorial/front-end/website/css/layout/grid","/tutorial/front-end/website/css/layout/grid.md"]],["v-057d80e2","/tutorial/front-end/website/css/layout/intro.html",{d:1567728e6,l:"2019年9月6日",c:"CSS",e:`<h2> 正常布局流</h2>
<p>正常布局流(normal flow)是指在不对页面进行任何布局控制时，浏览器默认的 HTML 布局方式。HTML 元素完全按照源码中出现的先后次序显示。</p>

<p>出现在另一个元素下面的元素被描述为块元素，与出现在另一个元素旁边的内联元素不同，内联元素就像段落中的单个单词一样。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>关于内联元素和块元素，请见 <a href="/tutorial/front-end/website/css/intro/box.html" target="blank">CSS 介绍 → 盒模型</a></p>
</div>`,r:{minutes:12.89,words:3866},y:"a",t:"排版介绍",i:"info"},["/tutorial/front-end/website/css/layout/intro","/tutorial/front-end/website/css/layout/intro.md"]],["v-641c6293","/tutorial/front-end/website/html/guide/",{d:1567296e6,l:"2019年9月1日",c:"HTML",g:["快速上手"],e:`<p>本章能让您快速了解 HTML 并学会编写它。</p>
`,r:{minutes:7.79,words:2336},y:"a",t:"快速上手",i:"creative",O:1},["/tutorial/front-end/website/html/guide/index.html","/tutorial/front-end/website/html/guide/README.md"]],["v-a4b15ddc","/tutorial/front-end/website/html/guide/tag.html",{d:1567296e6,l:"2019年9月1日",c:"HTML",g:["快速上手"],e:`<h2> HTML 标题</h2>
<p>HTML 标题 (Heading) 是通过 <code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code> 标签来定义的。</p>

<h2> HTML 段落</h2>
<p>HTML 段落是通过标签 <code>&lt;p&gt;</code> 来定义的。</p>

<h2> HTML 列表</h2>
<p>文档许多内容都是列表，HTML 有一些特别的列表元素。标记列表通常包括至少两个元素。最常用的列表类型为:</p>
<ul>
<li>无序列表 (Unordered List) 中项目的顺序不重要，比如购物清单。用一个 <code>&lt;ul&gt;</code> 元素包围。</li>
<li>有序列表 (Ordered List) 中项目的顺序很重要，比如使用指南。用一个 <code>&lt;ol&gt;</code> 元素包围。</li>
</ul>`,r:{minutes:2.44,words:731},y:"a",t:"常见标签",i:"code",O:2},["/tutorial/front-end/website/html/guide/tag","/tutorial/front-end/website/html/guide/tag.md"]],["v-6728a523","/tutorial/front-end/website/html/intro/",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> HTML 介绍</h2>
<ul>
<li>
<p><a href="/tutorial/front-end/website/html/intro/history.html" target="blank">历史</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/head.html" target="blank">Head 标签</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/basic.html" target="blank">基本标签</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/link.html" target="blank">链接</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/image.html" target="blank">图片</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/svg.html" target="blank">矢量图形</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/media.html" target="blank">视频与音频</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/table.html" target="blank">表格</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/embed.html" target="blank">嵌入</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/format.html" target="blank">格式化文档</a></p>
</li>
<li>
<p><a href="/tutorial/front-end/website/html/intro/layout.html" target="blank">网站布局</a></p>
</li>
</ul>`,r:{minutes:.22,words:66},y:"a",t:"HTML 介绍",i:"info",O:2},["/tutorial/front-end/website/html/intro/index.html","/tutorial/front-end/website/html/intro/README.md"]],["v-11ecaece","/tutorial/front-end/website/html/intro/basic.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",g:["HTML"],e:`<p>本章是最常见的的 HTML 标签介绍。</p>
`,r:{minutes:9.99,words:2996},y:"a",t:"基础内容",i:"module",O:3},["/tutorial/front-end/website/html/intro/basic","/tutorial/front-end/website/html/intro/basic.md"]],["v-2a262703","/tutorial/front-end/website/html/intro/embed.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> Iframe</h2>
<p><code>&lt;iframe&gt;</code> 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。</p>
<div class="hint-container tip">
<p class="hint-container-title">案例</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/en-US/docs/Glossary<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>
  <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
  <span class="token attr-name">allowfullscreen</span>
  <span class="token attr-name">sandbox</span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/en-US/docs/Glossary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      Fallback link for browsers that don't support iframes
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,r:{minutes:5.39,words:1618},y:"a",t:"嵌入",i:"frame",O:9},["/tutorial/front-end/website/html/intro/embed","/tutorial/front-end/website/html/intro/embed.md"]],["v-1e1efb82","/tutorial/front-end/website/html/intro/format.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<p>HTML 中有许多其他元素可以用于格式化文本。本文介绍标记引文、描述列表、计算机代码和其他相关文本、下标和上标、联系信息等。</p>
`,r:{minutes:5.71,words:1712},y:"a",t:"格式化",i:"format",O:10},["/tutorial/front-end/website/html/intro/format","/tutorial/front-end/website/html/intro/format.md"]],["v-5becdd94","/tutorial/front-end/website/html/intro/head.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<p>在页面加载完成的时候，标签 <code>&lt;head&gt;</code> 里的内容，是不会在页面中显示出来的。</p>
<p><code>&lt;head&gt;</code> 包含了像页面的 <code>&lt;title&gt;</code>(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。</p>
`,r:{minutes:4.03,words:1209},y:"a",t:"head 标签",i:"heading",O:2},["/tutorial/front-end/website/html/intro/head","/tutorial/front-end/website/html/intro/head.md"]],["v-facfbd30","/tutorial/front-end/website/html/intro/history.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",g:["介绍"],e:`<p>1990 年，由于对 Web 未来发展的远见，Tim Berners-Lee 提出了<strong>超文本</strong>的概念，并在第二年在 SGML 的基础上将其正式定义为一个标记语言。IETF 于 1993 年正式开始制定 HTML 规范，并在经历了几个版本的草案后于 1995 年发布了 HTML 2.0 版本。1994 年，Berners-Lee 为了 Web 发展而成立了 W3C。1996 年，W3C 接管了 HTML 的标准化工作，并在 1 年后发布了 HTML 3.2 推荐标准。1999 年，HTML 4.0 发布，并在 2000 年成为 ISO 标准。</p>
<p>自那以后，W3C 几乎放弃了 HTML 而转向 XHTML，并于 2004 年成立了另一个独立的小组 WHATWG。幸运的是，WHATWG 后来又转回来参与了 HTML5 标准的制定，两个组织(译注: 即 W3C 和 WHATWG)在 2008 年发布了第一份草案，并在 2014 年发布了 HTML5 标准的最终版。</p>`,r:{minutes:.81,words:244},y:"a",t:"HTML 历史",i:"time",O:1},["/tutorial/front-end/website/html/intro/history","/tutorial/front-end/website/html/intro/history.md"]],["v-0227e47e","/tutorial/front-end/website/html/intro/image.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> 插入图片</h2>
<p>我们可以用 <code>&lt;img&gt;</code> 元素来把图片放到网页上。它是一个空元素(也就是无法包含内容，可以省略闭合标签)，最少只需要一个 <code>src</code> (一般读作其全称 source)来使其生效。<code>src</code> 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对 URL，就像 <code>&lt;a&gt;</code> 元素的 <code>href</code> 属性一样。</p>
<p>如果您有一幅文件名为 dinosaur.jpg 的图片，且它与您的 HTML 页面存放在相同路径下，那么您可以这样嵌入它:</p>`,r:{minutes:9.98,words:2993},y:"a",t:"图片",i:"pic",O:5},["/tutorial/front-end/website/html/intro/image","/tutorial/front-end/website/html/intro/image.md"]],["v-11e686ec","/tutorial/front-end/website/html/intro/layout.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<p>HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。</p>
`,r:{minutes:7.94,words:2382},y:"a",t:"网站布局",i:"layout",O:11},["/tutorial/front-end/website/html/intro/layout","/tutorial/front-end/website/html/intro/layout.md"]],["v-7e42ef5c","/tutorial/front-end/website/html/intro/link.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<p>超链接是互联网提供的最令人兴奋的创新之一，它们从一开始就一直是互联网的一个特性，使互联网成为互联的网络。超链接使我们能够将我们的文档链接到任何其他文档(或其他资源)，也可以链接到文档的指定部分，我们可以在一个简单的网址上提供应用程序(与必须先安装的本地应用程序或其他东西相比)。几乎任何网络内容都可以转换为链接，点击(或激活)超链接将使网络浏览器转到另一个网址(URL)。</p>
`,r:{minutes:9.26,words:2778},y:"a",t:"超链接",i:"link",O:4},["/tutorial/front-end/website/html/intro/link","/tutorial/front-end/website/html/intro/link.md"]],["v-6eea1650","/tutorial/front-end/website/html/intro/media.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> 简介</h2>
<p>HTML5 标准推出了 <code>&lt;video&gt;</code> 和 <code>&lt;audio&gt;</code> 标签，以及一些 JavaScript 和 APIs 用于对其进行控制。</p>
<h2> <code>&lt;video&gt;</code> 元素</h2>
<p><code>&lt;video&gt;</code> 允许您轻松地嵌入一段视频。</p>
<div class="hint-container tip">
<p class="hint-container-title">案例</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rabbit320.webm<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    您的浏览器不支持 HTML5 视频。可点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rabbit320.mp4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>此链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>观看
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,r:{minutes:8.39,words:2516},y:"a",t:"视频和音频",i:"play",O:7},["/tutorial/front-end/website/html/intro/media","/tutorial/front-end/website/html/intro/media.md"]],["v-425c99d0","/tutorial/front-end/website/html/intro/svg.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<h2> 矢量图形</h2>
<p>在网上，您会和两种类型的图片打交道 — 位图和矢量图:</p>
<ul>
<li>
<p>位图使用像素网格来定义。</p>
<p>一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (.bmp), PNG (.png), JPEG (.jpg), and GIF (.gif.)</p>
</li>
<li>
<p>矢量图使用算法来定义。</p>
<p>一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 SVG 格式可以让我们创造用于 Web 的精彩的矢量图形。</p>
</li>
</ul>`,r:{minutes:4.87,words:1462},y:"a",t:"SVG",i:"svg",O:6},["/tutorial/front-end/website/html/intro/svg","/tutorial/front-end/website/html/intro/svg.md"]],["v-0981e9a4","/tutorial/front-end/website/html/intro/table.html",{d:15673824e5,l:"2019年9月2日",c:"HTML",e:`<p>表格是由行和列组成的结构化数据集(表格数据)，它能够使您简捷迅速地查找某个表示不同类型数据之间的某种关系的值。</p>
<p>表格的一个特点就是严格. 通过在行和列的标题之间进行视觉关联的方法，就可以让信息能够很简单地被解读出来。</p>
<h2> 常见误区</h2>
<p>HTML 表格应该用于表格数据 ，这正是 HTML 表格设计出来的用途。请不要用它来进行布局。</p>
<p>使用表格而不是 CSS 布局的缺点:</p>
<ol>
<li>
<p>表格布局减少了视觉受损的用户的可访问性:</p>
<p>屏幕阅读器, 被盲人所使用, 解析存在于 HTML 页面上的标签，然后为用户读出其中的内容。因为对于布局来说，表格不是一个正确的工具，使用的标记比使用 CSS 布局技术更复杂, 所以屏幕阅读器的输出会让他们的用户感到困惑。</p>
</li>
<li>
<p>表格会产生很多标签:</p>
<p>正如刚才提到的, 表格布局通常会比正确的布局技术涉及更复杂的标签结构，这会导致代码变得更难于编写、维护、调试.</p>
</li>
<li>
<p>表格不能自动响应:</p>
<p>当您使用正确的布局容器 (比如 <code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, 或是 <code>&lt;div&gt;</code>), 它们的默认宽度是父元素的 <code>100%</code>. 而表格的的默认大小是根据其内容而定的。因此，需要采取额外的措施来获取表格布局样式，以便有效地在各种设备上工作。</p>
</li>
</ol>`,r:{minutes:8.2,words:2460},y:"a",t:"表格",i:"table",O:8},["/tutorial/front-end/website/html/intro/table","/tutorial/front-end/website/html/intro/table.md"]],["v-f1be8366","/tutorial/ops/linux/bash/archives/archiving.html",{d:1681181241e3,e:`<h1> 归档和备份</h1>
<h2> gzip</h2>
<p>gzip 程序用来压缩文件，原文件的压缩版(添加 <code>gz</code> 后缀名)会替代原文件。gunzip 程序用来还原压缩版本。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> foo.txt
gunzip foo.txt.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.21,words:1563},y:"a",t:"归档和备份"},["/tutorial/ops/linux/bash/archives/archiving","/tutorial/ops/linux/bash/archives/archiving.md"]],["v-ae500f20","/tutorial/ops/linux/bash/archives/async.html",{d:1681181241e3,e:`<h1> 异步任务</h1>
<p>Bash 脚本有时候需要同时执行多个任务。通常这涉及到启动一个脚本，依次，启动一个或多个子脚本来执行额外的任务，而父脚本继续运行。然而，当一系列脚本 以这种方式运行时，要保持父子脚本之间协调工作，会有一些问题。也就是说，若父脚本或子脚本依赖于另一方，并且 一个脚本必须等待另一个脚本结束任务之后，才能完成它自己的任务，这应该怎么办?</p>
<p>bash 有一个内置命令，能帮助管理诸如此类的异步执行的任务。wait 命令导致一个父脚本暂停运行，直到一个 特定的进程(例如，子脚本)运行结束。</p>
<p>首先我们将演示一下 wait 命令的用法。为此，我们需要两个脚本，一个父脚本:</p>`,r:{minutes:1.75,words:524},y:"a",t:"异步任务"},["/tutorial/ops/linux/bash/archives/async","/tutorial/ops/linux/bash/archives/async.md"]],["v-341a277e","/tutorial/ops/linux/bash/archives/command.html",{d:1681181241e3,e:`<h1> Shell 的命令</h1>
<h2> 命令的类别</h2>
<p>Bash 可以使用的命令分成四类。</p>
<ul>
<li>可执行程序</li>
<li>Shell 提供的命令</li>
<li>Shell 函数</li>
<li>前三类命令的别名</li>
</ul>
<h2> type, whatis</h2>
<p><code>type</code> 命令可以显示命令类型。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">type</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:5.27,words:1581},y:"a",t:"Shell 的命令"},["/tutorial/ops/linux/bash/archives/command","/tutorial/ops/linux/bash/archives/command.md"]],["v-1371a5e0","/tutorial/ops/linux/bash/archives/file-operation.html",{d:1681181241e3,e:`<h1> 文件操作</h1>
<h2> cp</h2>
<p><code>cp</code> 命令用于将文件(或目录)拷贝到目的地。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拷贝单个文件</span>
$ <span class="token function">cp</span> <span class="token builtin class-name">source</span> dest

<span class="token comment"># 拷贝多个文件</span>
$ <span class="token function">cp</span> source1 source2 source3 dest

<span class="token comment"># -i 目的地有同名文件时会提示确认</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-i</span> file1 file2

<span class="token comment"># -r 递归拷贝，将dir1拷贝到dir2，完成后dir2生成一个子目录dir1</span>
<span class="token comment"># dir2如果不存在，将被创建</span>
<span class="token comment"># 拷贝目录时，该参数是必需的</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-r</span> dir1 dir2

<span class="token comment"># -u --update 只拷贝目的地没有的文件，或者比目的地同名文件更新的文件</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-u</span> *.html destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.31,words:394},y:"a",t:"文件操作"},["/tutorial/ops/linux/bash/archives/file-operation","/tutorial/ops/linux/bash/archives/file-operation.md"]],["v-6cb46dea","/tutorial/ops/linux/bash/archives/file.html",{d:1681181241e3,e:`<h1> 文件系统</h1>
<h2> pwd</h2>
<p><code>pwd</code> 命令显示列出当前所在的目录。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:12.16,words:3647},y:"a",t:"文件系统"},["/tutorial/ops/linux/bash/archives/file","/tutorial/ops/linux/bash/archives/file.md"]],["v-1dd2927e","/tutorial/ops/linux/bash/archives/hardware.html",{d:1681181241e3,e:`<h1> 硬件操作</h1>
<h2> df</h2>
<p><code>df</code> 命令查看硬盘信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">df</span>
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/sda2 <span class="token number">15115452</span> <span class="token number">5012392</span> <span class="token number">9949716</span> <span class="token number">34</span>% /
/dev/sda5 <span class="token number">59631908</span> <span class="token number">26545424</span> <span class="token number">30008432</span> <span class="token number">47</span>% /home
/dev/sda1 <span class="token number">147764</span> <span class="token number">17370</span> <span class="token number">122765</span> <span class="token number">13</span>% /boot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.88,words:1165},y:"a",t:"硬件操作"},["/tutorial/ops/linux/bash/archives/hardware","/tutorial/ops/linux/bash/archives/hardware.md"]],["v-df2ead84","/tutorial/ops/linux/bash/archives/host.html",{d:1681181241e3,e:`<h1> 主机管理</h1>
<h2> hostname 命令</h2>
<p><code>hostname</code> 命令返回当前服务器的主机名。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">hostname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.08,words:23},y:"a",t:"主机管理"},["/tutorial/ops/linux/bash/archives/host","/tutorial/ops/linux/bash/archives/host.md"]],["v-59928cb8","/tutorial/ops/linux/bash/archives/named-pipe.html",{d:1681181241e3,e:`<h1> 命名管道</h1>
<p>在大多数类似 Unix 的操作系统中，有可能创建一种特殊类型的文件，叫做命名管道。命名管道用来在 两个进程之间建立连接，也可以像其它类型的文件一样使用。</p>
<p>命令管道的行为类似于文件，但实际上形成了先入先出(FIFO)的缓冲。和普通(未命令的)管道一样， 数据从一端进入，然后从另一端出现。通过命令管道，有可能像这样设置一些东西:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>process1 <span class="token operator">&gt;</span> named_pipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.7,words:509},y:"a",t:"命名管道"},["/tutorial/ops/linux/bash/archives/named-pipe","/tutorial/ops/linux/bash/archives/named-pipe.md"]],["v-2facf8c6","/tutorial/ops/linux/bash/archives/process.html",{d:1681181241e3,e:`<h1> 进程管理</h1>
<h2> ps</h2>
<p><code>ps</code> 命令用来列出进程信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ps</span>
PID TTY           TIME CMD
<span class="token number">5198</span> pts/1    00:00:00 <span class="token function">bash</span>
<span class="token number">10129</span> pts/1   00:00:00 <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.25,words:1575},y:"a",t:"进程管理"},["/tutorial/ops/linux/bash/archives/process","/tutorial/ops/linux/bash/archives/process.md"]],["v-39414800","/tutorial/ops/linux/bash/archives/redirection.html",{d:1681181241e3,e:`<h1> 重定向</h1>
<p>重定向指的是将命令行输出写入指定位置。</p>
<ul>
<li><code>cmd1 | cmd2</code>: Pipe; take standard output of cmd1 as standard input to cmd2.</li>
<li><code>&gt; file</code>: Direct standard output to file.</li>
<li><code>&lt; file</code>: Take standard input from file.</li>
<li><code>&gt;&gt; file</code>: Direct standard output to file; append to file if it already exists.</li>
<li><code>&gt;| file</code>: Force standard output to file even if noclobber is set.</li>
<li><code>n&gt;| file</code>: Force output to file from file descriptor n even if noclobber is set.</li>
<li><code>&lt;&gt; file</code>: Use file as both standard input and standard output.</li>
<li><code>n&lt;&gt; file</code>: Use file as both input and output for file descriptor n.</li>
<li><code>&lt;&lt; label</code>: Here-document; see text.</li>
<li><code>n &gt; file</code>: Direct file descriptor n to file.</li>
<li><code>n &lt; file</code>: Take file descriptor n from file.</li>
<li><code>n &gt;&gt; file</code>: Direct file descriptor n to file; append to file if it already exists.</li>
<li><code>n&gt;&amp;</code>: Duplicate standard output to file descriptor n.</li>
<li><code>n&lt;&amp;</code>: Duplicate standard input from file descriptor n.</li>
<li><code>n&gt;&amp;m</code>: File descriptor &nbsp;n is made to be a copy of the output file descriptor.</li>
<li><code>n&lt;&amp;m</code>: File descriptor &nbsp;n is made to be a copy of the input file descriptor.</li>
<li><code>&amp;&gt;file</code>: Directs standard output and standard error to file.</li>
<li><code>&lt;&amp;-</code>: Close the standard input.</li>
<li><code>&gt;&amp;-</code>: Close the standard output.</li>
<li><code>n&gt;&amp;-</code>: Close the output from file descriptor &nbsp;n.</li>
<li><code>n&lt;&amp;-</code>: Close the input from file descriptor &nbsp;n.</li>
<li><code>n&gt;&amp;word</code>: If &nbsp;n is not specified, the standard output (file descriptor 1) is used. If the digits in word do not specify a file descriptor open for output, a redirection error occurs. As a special case, if n is omitted, and word does not expand to one or more digits, the standard output and standard error are redirected as described previously.</li>
<li><code>n&lt;&amp;word</code>: If word expands to one or more digits, the file descriptor denoted by &nbsp;n is made to be a copy of that file descriptor. If the digits in word do not specify a file descriptor open for input, a redirection error occurs. If word evaluates to -, file descriptor n is closed. If n is not specified, the standard input (file descriptor 0) is used.</li>
<li><code>n&gt;&amp;digit-</code>: Moves the file descriptor digit to file descriptor &nbsp;n, or the standard output (file descriptor 1) if n is not specified.</li>
<li><code>n&lt;&amp;digit-</code>: Moves the file descriptor digit to file descriptor &nbsp;n, or the standard input (file descriptor 0) if n is not specified. digit is closed after being duplicated to n.</li>
</ul>`,r:{minutes:3.01,words:902},y:"a",t:"重定向"},["/tutorial/ops/linux/bash/archives/redirection","/tutorial/ops/linux/bash/archives/redirection.md"]],["v-803a1cf6","/tutorial/ops/linux/bash/archives/regex.html",{d:1681181241e3,e:`<h1> 正则表达式</h1>
<p><code>正则表达式</code>是表达文本模式的方法。</p>
<ul>
<li><code>.</code>: 匹配任何单个字符。</li>
<li><code>?</code>: 上一项是可选的，最多匹配一次。</li>
<li><code>*</code>: 前一项将被匹配零次或多次。</li>
<li><code>+</code>: 前一项将被匹配一次或多次。</li>
<li><code>{N}</code>: 上一项完全匹配 N 次。</li>
<li><code>{N，}</code>: 前一项匹配 N 次或多次。</li>
<li><code>{N，M}</code>: 前一项至少匹配 N 次，但不超过 M 次。</li>
<li><code>--</code>: 表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。</li>
<li><code>^</code>: 匹配行首的空字符串；也代表不在列表范围内的字符。</li>
<li><code>$</code>: 匹配行尾的空字符串。</li>
<li><code>\\b</code>: 匹配单词边缘的空字符串。</li>
<li><code>\\B</code>: 匹配空字符串，前提是它不在单词的边缘。</li>
<li><code>\\&lt;</code>: 匹配单词开头的空字符串。</li>
<li><code>\\&gt;</code>: 匹配单词末尾的空字符串。</li>
</ul>`,r:{minutes:4.51,words:1353},y:"a",t:"正则表达式"},["/tutorial/ops/linux/bash/archives/regex","/tutorial/ops/linux/bash/archives/regex.md"]],["v-6bb7d9d7","/tutorial/ops/linux/bash/archives/system.html",{d:1681181241e3,e:`<h1> 系统信息</h1>
<h2> uname</h2>
<p><code>uname</code> 命令返回当前机器的信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内核的版本</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-r</span>
<span class="token number">3.2</span>.0-24-virtual

<span class="token comment"># CPU 架构</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-m</span>
x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.38,words:114},y:"a",t:"系统信息"},["/tutorial/ops/linux/bash/archives/system","/tutorial/ops/linux/bash/archives/system.md"]],["v-7d5144d9","/tutorial/ops/linux/bash/archives/text.html",{d:1681181241e3,e:`<h1> 文本处理</h1>
<h2> cat</h2>
<p><code>cat</code> 可以文件的内容，显示在标准输出。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> text1
<span class="token number">1</span> apple
<span class="token number">2</span> pear
<span class="token number">3</span> banana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.86,words:1759},y:"a",t:"文本处理"},["/tutorial/ops/linux/bash/archives/text","/tutorial/ops/linux/bash/archives/text.md"]],["v-854e898e","/tutorial/ops/linux/bash/archives/time.html",{d:1681181241e3,e:`<h1> 时间管理</h1>
<h2> date 命令</h2>
<p><code>date</code> 命令用于输出当前时间</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">date</span>
<span class="token number">2016</span>年 03月 <span class="token number">14</span>日 星期一 <span class="token number">17</span>:32:35 CST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.59,words:478},y:"a",t:"时间管理"},["/tutorial/ops/linux/bash/archives/time","/tutorial/ops/linux/bash/archives/time.md"]],["v-6133de0a","/tutorial/ops/linux/bash/archives/user.html",{d:1681181241e3,e:`<h1> 用户管理</h1>
<h2> id</h2>
<p><code>id</code> 命令用于查看指定用户的用户名和组名。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.81,words:843},y:"a",t:"用户管理"},["/tutorial/ops/linux/bash/archives/user","/tutorial/ops/linux/bash/archives/user.md"]],["v-42c56014","/tutorial/front-end/mini-app/guide/service/api/",{d:1681181241e3,c:"小程序",e:`<p>小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。详细介绍请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank" rel="noopener noreferrer">API 文档</a>。 </p>
`,r:{minutes:2.16,words:649},y:"a",t:"API",i:"api"},["/tutorial/front-end/mini-app/guide/service/api/index.html","/tutorial/front-end/mini-app/guide/service/api/README.md"]],["v-bff027a6","/tutorial/front-end/mini-app/guide/service/api/interact.html",{d:1681181241e3,c:"小程序",e:`<p>本页面介绍的一系列 API 都是和小程序页面交互(用户交互)相关的 API。</p>
<p>小程序与用户交互合理，并在合适的时机向用户展示相应状态可以让用户的沉浸感更强。</p>
`,r:{minutes:4.06,words:1218},y:"a",t:"页面交互 API",i:"change"},["/tutorial/front-end/mini-app/guide/service/api/interact","/tutorial/front-end/mini-app/guide/service/api/interact.md"]],["v-78262261","/tutorial/front-end/mini-app/guide/service/api/network.html",{d:1681181241e3,c:"小程序",e:`<h2> wx.request(Object object)</h2>
<p>发起 HTTPS 网络请求。使用前请注意阅读相关说明。</p>
<h3> request 参数</h3>
<p>Object object</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th>
<th>说明</th>
<th>最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>string</td>
<td></td>
<td>是</td>
<td>开发者服务器接口地址</td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>string/object/ArrayBuffer</td>
<td></td>
<td>否</td>
<td>请求的参数</td>
<td></td>
</tr>
<tr>
<td>header</td>
<td>Object</td>
<td></td>
<td>否</td>
<td>设置请求的 header，header 中不能设置 Referer。</td>
<td></td>
</tr>
<tr>
<td>content-type 默认为 application/json</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>method</td>
<td>string</td>
<td>GET</td>
<td>否</td>
<td>HTTP 请求方法</td>
<td></td>
</tr>
<tr>
<td>dataType</td>
<td>string</td>
<td>json</td>
<td>否</td>
<td>返回的数据格式</td>
<td></td>
</tr>
<tr>
<td>responseType</td>
<td>string</td>
<td>text</td>
<td>否</td>
<td>响应的数据类型</td>
<td>1.7.0</td>
</tr>
<tr>
<td>success</td>
<td>function</td>
<td></td>
<td>否</td>
<td>接口调用成功的回调函数</td>
<td></td>
</tr>
<tr>
<td>fail</td>
<td>function</td>
<td></td>
<td>否</td>
<td>接口调用失败的回调函数</td>
<td></td>
</tr>
<tr>
<td>complete</td>
<td>function</td>
<td></td>
<td>否</td>
<td>接口调用结束的回调函数(调用成功、失败都会执行)</td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:4.14,words:1242},y:"a",t:"网络 API",i:"network"},["/tutorial/front-end/mini-app/guide/service/api/network","/tutorial/front-end/mini-app/guide/service/api/network.md"]],["v-4e0c2eb4","/tutorial/front-end/mini-app/guide/service/api/route.html",{d:1681181241e3,c:"小程序",e:`<h1> 路由 API</h1>
<p>本页面介绍的一系列 API 都是和小程序路由(导航)相关的 API。</p>
<p>可以通过这些 API，自定义小程序的页面导航逻辑。</p>
<div class="hint-container tip">
<p class="hint-container-title">概要</p>
<p>最常用的两个:</p>
<ul>
<li><code>wx.navigateTo</code>: 导航到一个新页面</li>
<li><code>wx.navigateBack</code>: 返回上一层(上 n 层)页面</li>
</ul>
<p>不太常用的三个:</p>
<ul>
<li><code>wx.redirectTo</code>: 将当前页面重定向到一个新的页面</li>
<li><code>wx.switchTab</code>: 到转到 Tabbar 的页面并关闭其他页面</li>
<li><code>wx.reLaunch</code>: 关闭小程序所有页面，并打开指定页面</li>
</ul>
</div>`,r:{minutes:3.97,words:1192},y:"a",t:"路由 API",i:"router"},["/tutorial/front-end/mini-app/guide/service/api/route","/tutorial/front-end/mini-app/guide/service/api/route.md"]],["v-a2653b98","/tutorial/front-end/mini-app/guide/service/api/storage.html",{d:1681181241e3,c:"小程序",e:`<p>本页面介绍的一系列 API 都是和小程序数据缓存(数据存储)相关的 API。</p>
<p>可以利用数据缓存存储一些不重要的信息，比如用户的设置、用户的操作历史记录等。</p>
`,r:{minutes:3.04,words:912},y:"a",t:"数据缓存 API",i:"storage"},["/tutorial/front-end/mini-app/guide/service/api/storage","/tutorial/front-end/mini-app/guide/service/api/storage.md"]],["v-b46fe358","/tutorial/front-end/mini-app/guide/service/api/system.html",{d:1681181241e3,c:"小程序",e:`<h2> wx.getSystemInfo(Object object)</h2>
<p>获取系统信息</p>
<h3> 参数</h3>
<p>Object object</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>success</td>
<td>function</td>
<td>否</td>
<td>接口调用成功的回调函数</td>
</tr>
<tr>
<td>fail</td>
<td>function</td>
<td>否</td>
<td>接口调用失败的回调函数</td>
</tr>
<tr>
<td>complete</td>
<td>function</td>
<td>否</td>
<td>接口调用结束的回调函数(调用成功、失败都会执行)</td>
</tr>
</tbody>
</table>`,r:{minutes:3.42,words:1026},y:"a",t:"系统相关 API",i:"OS"},["/tutorial/front-end/mini-app/guide/service/api/system","/tutorial/front-end/mini-app/guide/service/api/system.md"]],["v-a7b53186","/tutorial/ops/linux/bash/archives/commands/alias.html",{d:1681181241e3,e:`<h1> alias</h1>
<p><code>alias</code> 命令用于设置别名。通常用于在 Bash 设置文件中，设置别名。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">dockerlogin</span><span class="token operator">=</span><span class="token string">'ssh www-data@adnan.local -p2222'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.11,words:32},y:"a",t:"alias"},["/tutorial/ops/linux/bash/archives/commands/alias","/tutorial/ops/linux/bash/archives/commands/alias.md"]],["v-58c6beb8","/tutorial/ops/linux/bash/archives/commands/awk.html",{d:1681181241e3,e:`<h1> awk</h1>
<p><a href="https://en.wikipedia.org/wiki/AWK" target="_blank" rel="noopener noreferrer"><code>awk</code></a>是处理文本文件的一个应用程序，几乎所有 Linux 系统都自带这个程序。</p>
<p>它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，<code>awk</code> 可能是最方便的工具。</p>
<figure><img src="https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg" alt="Book" tabindex="0" loading="lazy"><figcaption>Book</figcaption></figure>`,r:{minutes:3.96,words:1187},y:"a",t:"awk"},["/tutorial/ops/linux/bash/archives/commands/awk","/tutorial/ops/linux/bash/archives/commands/awk.md"]],["v-c3164d02","/tutorial/ops/linux/bash/archives/commands/cal.html",{d:1681181241e3,e:`<h1> cal</h1>
<p><code>cal</code> 命令显示本月的日历。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cal</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.04,words:13},y:"a",t:"cal"},["/tutorial/ops/linux/bash/archives/commands/cal","/tutorial/ops/linux/bash/archives/commands/cal.md"]],["v-a7c8c312","/tutorial/ops/linux/bash/archives/commands/cat.html",{d:1681181241e3,e:`<h1> cat</h1>
<p><code>cat</code> 命令用于显示一个文本文件的内容。</p>
<p><code>cat - &gt;&gt; filename</code> 用于向一个现有文件的尾部追加内容。</p>
`,r:{minutes:.12,words:35},y:"a",t:"cat"},["/tutorial/ops/linux/bash/archives/commands/cat","/tutorial/ops/linux/bash/archives/commands/cat.md"]],["v-19028540","/tutorial/ops/linux/bash/archives/commands/clear.html",{d:1681181241e3,e:`<h1> clear</h1>
<p><code>clear</code> 命令用来清除当前屏幕的显示，运行后会只留下一个提示符。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.1,words:29},y:"a",t:"clear"},["/tutorial/ops/linux/bash/archives/commands/clear","/tutorial/ops/linux/bash/archives/commands/clear.md"]],["v-1bc87b50","/tutorial/ops/linux/bash/archives/commands/cp.html",{d:1681181241e3,e:`<h1> cp 命令</h1>
<p><code>cp</code> 命令用于复制文件。</p>
<h2> 参数</h2>
<p><code>-u</code> 参数只复制那些目标目录里面还不存在的文件，以及那些虽然存在、但是比源目录对应文件更陈旧的文件。</p>
`,r:{minutes:.2,words:59},y:"a",t:"cp 命令"},["/tutorial/ops/linux/bash/archives/commands/cp","/tutorial/ops/linux/bash/archives/commands/cp.md"]],["v-63cf80ea","/tutorial/ops/linux/bash/archives/commands/cut.html",{d:1681181241e3,e:`<h1> cut</h1>
<p><code>cut</code> 命令用于在命令行输出文本文件的指定位置的内容。</p>
<p>它的使用格式如下。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> OPTION <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.78,words:233},y:"a",t:"cut"},["/tutorial/ops/linux/bash/archives/commands/cut","/tutorial/ops/linux/bash/archives/commands/cut.md"]],["v-737f0692","/tutorial/ops/linux/bash/archives/commands/date.html",{d:1681181241e3,e:`<h1> date</h1>
<p><code>date</code> 命令显示当前的日期和时间。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">date</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.05,words:16},y:"a",t:"date"},["/tutorial/ops/linux/bash/archives/commands/date","/tutorial/ops/linux/bash/archives/commands/date.md"]],["v-1287d625","/tutorial/ops/linux/bash/archives/commands/dd.html",{d:1681181241e3,e:`<h1> dd</h1>
<p><code>dd</code> 命令用于复制磁盘或文件系统。</p>
<h2> 复制磁盘</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.98,words:294},y:"a",t:"dd"},["/tutorial/ops/linux/bash/archives/commands/dd","/tutorial/ops/linux/bash/archives/commands/dd.md"]],["v-15f18763","/tutorial/ops/linux/bash/archives/commands/df.html",{d:1681181241e3,e:`<h1> df</h1>
<p><code>df</code> 命令显示磁盘信息。</p>
`,r:{minutes:.03,words:10},y:"a",t:"df"},["/tutorial/ops/linux/bash/archives/commands/df","/tutorial/ops/linux/bash/archives/commands/df.md"]],["v-2f8a38b4","/tutorial/ops/linux/bash/archives/commands/du.html",{d:1681181241e3,e:`<h1> du</h1>
<p><code>du</code> 命令显示某个文件或目录的磁盘使用量。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">du</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-h</code> 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。</p>`,r:{minutes:.65,words:196},y:"a",t:"du"},["/tutorial/ops/linux/bash/archives/commands/du","/tutorial/ops/linux/bash/archives/commands/du.md"]],["v-0d59f7b2","/tutorial/ops/linux/bash/archives/commands/egrep.html",{d:1681181241e3,e:`<h1> egrep</h1>
<p><code>egrep</code> 命令用于显示匹配正则模式的行，与 <code>grep -E</code> 命令等价。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.42,words:125},y:"a",t:"egrep"},["/tutorial/ops/linux/bash/archives/commands/egrep","/tutorial/ops/linux/bash/archives/commands/egrep.md"]],["v-c9dd2d1e","/tutorial/ops/linux/bash/archives/commands/export.html",{d:1681181241e3,e:`<h1> export</h1>
<p><code>export</code> 命令用于向子 Shell 输出变量。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">hotellogs</span><span class="token operator">=</span><span class="token string">"/workspace/hotel-api/storage/logs"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.34,words:102},y:"a",t:"export"},["/tutorial/ops/linux/bash/archives/commands/export","/tutorial/ops/linux/bash/archives/commands/export.md"]],["v-f2be30ae","/tutorial/ops/linux/bash/archives/commands/file.html",{d:1681181241e3,e:`<h1> file</h1>
<p><code>file</code> 命令用来某个文件的类型。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">file</span> index.html
 index.html: HTML document, ASCII text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.41,words:122},y:"a",t:"file"},["/tutorial/ops/linux/bash/archives/commands/file","/tutorial/ops/linux/bash/archives/commands/file.md"]],["v-228ef4e8","/tutorial/ops/linux/bash/archives/commands/find.html",{d:1681181241e3,e:`<h1> find</h1>
<p><code>find</code> 命令用于寻找文件，会包括当前目录的所有下级目录。</p>
<p>如果不带任何参数，<code>find</code> 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 <code>sort</code> 效果更好。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> <span class="token operator">|</span> <span class="token function">sort</span>
<span class="token builtin class-name">.</span>
./Makefile
./README
./build
./client.c
./client.h
./common.h
./project.c
./server.c
./server.h
./tests
./tests/suite1.pl
./tests/suite2.pl
./tests/suite3.pl
./tests/suite4.pl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.76,words:527},y:"a",t:"find"},["/tutorial/ops/linux/bash/archives/commands/find","/tutorial/ops/linux/bash/archives/commands/find.md"]],["v-5e89ec20","/tutorial/ops/linux/bash/archives/commands/fmt.html",{d:1681181241e3,e:`<h1> fmt</h1>
<p><code>fmt</code> 命令用于对文本指定样式。</p>
<p>下面是 <code>example.txt</code> 的内容，是非常长的一行。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.49,words:148},y:"a",t:"fmt"},["/tutorial/ops/linux/bash/archives/commands/fmt","/tutorial/ops/linux/bash/archives/commands/fmt.md"]],["v-62499a8f","/tutorial/ops/linux/bash/archives/commands/grep.html",{d:1681181241e3,e:`<h1> grep</h1>
<p><code>grep</code> 命令用于文件内容的搜索，返回所有匹配的行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> pattern filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.34,words:401},y:"a",t:"grep"},["/tutorial/ops/linux/bash/archives/commands/grep","/tutorial/ops/linux/bash/archives/commands/grep.md"]],["v-53371364","/tutorial/ops/linux/bash/archives/commands/gunzip.html",{d:1681181241e3,e:`<h1> gunzip</h1>
<p><code>gunzip</code> 命令用于解压 <code>gzip</code> 命令压缩的文件。</p>
`,r:{minutes:.05,words:16},y:"a",t:"gunzip"},["/tutorial/ops/linux/bash/archives/commands/gunzip","/tutorial/ops/linux/bash/archives/commands/gunzip.md"]],["v-1409eb6a","/tutorial/ops/linux/bash/archives/commands/gzcat.html",{d:1681181241e3,e:`<h1> gzcat</h1>
<p><code>gzcat</code> 命令用于查看一个 <code>gz</code> 文件，但并不实际解压它。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gzcat filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.08,words:24},y:"a",t:"gzcat"},["/tutorial/ops/linux/bash/archives/commands/gzcat","/tutorial/ops/linux/bash/archives/commands/gzcat.md"]],["v-74ebee8b","/tutorial/ops/linux/bash/archives/commands/gzip.html",{d:1681181241e3,e:`<h1> gzip</h1>
<p><code>gzip</code> 命令用于压缩文件。</p>
`,r:{minutes:.03,words:10},y:"a",t:"gzip"},["/tutorial/ops/linux/bash/archives/commands/gzip","/tutorial/ops/linux/bash/archives/commands/gzip.md"]],["v-77e8ff07","/tutorial/ops/linux/bash/archives/commands/kill.html",{d:1681181241e3,e:`<h1> kill</h1>
<p><code>kill</code> 命令用户终止指定进程。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.05,words:15},y:"a",t:"kill"},["/tutorial/ops/linux/bash/archives/commands/kill","/tutorial/ops/linux/bash/archives/commands/kill.md"]],["v-f147e22c","/tutorial/ops/linux/bash/archives/commands/killall.html",{d:1681181241e3,e:`<h1> killall</h1>
<p><code>killall</code> 命令终止给定名字的一系列相关进程。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">killall</span> processname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.07,words:21},y:"a",t:"killall"},["/tutorial/ops/linux/bash/archives/commands/killall","/tutorial/ops/linux/bash/archives/commands/killall.md"]],["v-4d166acf","/tutorial/ops/linux/bash/archives/commands/last.html",{d:1681181241e3,e:`<h1> last</h1>
<p><code>last</code> 命令显示用户登录系统的记录。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>last
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>last</code> 命令后面加上用户名，会显示该用户上次登录的信息。</p>`,r:{minutes:.14,words:43},y:"a",t:"last"},["/tutorial/ops/linux/bash/archives/commands/last","/tutorial/ops/linux/bash/archives/commands/last.md"]],["v-67652140","/tutorial/ops/linux/bash/archives/commands/lpq.html",{d:1681181241e3,e:`<h1> lpq</h1>
<p><code>lpq</code> 命令显示打印机队列。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ lpq
Rank    Owner   Job     File<span class="token punctuation">(</span>s<span class="token punctuation">)</span>                         Total Size
active  adnanad <span class="token number">59</span>      demo                            <span class="token number">399360</span> bytes
1st     adnanad <span class="token number">60</span>      <span class="token punctuation">(</span>stdin<span class="token punctuation">)</span>                         <span class="token number">0</span> bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.11,words:32},y:"a",t:"lpq"},["/tutorial/ops/linux/bash/archives/commands/lpq","/tutorial/ops/linux/bash/archives/commands/lpq.md"]],["v-6919f9df","/tutorial/ops/linux/bash/archives/commands/lpr.html",{d:1681181241e3,e:`<h1> lpr</h1>
<p><code>lpr</code> 命令用于打印文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lpr</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.04,words:13},y:"a",t:"lpr"},["/tutorial/ops/linux/bash/archives/commands/lpr","/tutorial/ops/linux/bash/archives/commands/lpr.md"]],["v-595b3d04","/tutorial/ops/linux/bash/archives/commands/ls.html",{d:1681181241e3,e:`<h1> ls</h1>
<p><code>ls</code> 命令用于列出当前目录里面的文件和子目录。</p>
<h2> 参数</h2>
<ul>
<li>a: 列出隐藏文件</li>
<li>l: 以长格式列出文件</li>
<li>t: 按最后编辑日期排序，最新的最先。这在某个大目录里找出最近修改的文件列表时很有用，比如将结果导入( pipe ) head 或者 sed 10q。或许加上 -l 会效果更好。当然如果您想获取最旧的文件列表，只要加 -r 反转列表即可。</li>
<li>X: 按文件类型分类。这在多语言或多后缀的项目中特别方便，比如头文件和源文件分开，或区分开源文件和生成文件或目录。</li>
<li>v: 按照文件名里的版本号排序。</li>
<li>S: 按文件大小排序。</li>
<li>R: 递归地列举文件。这个选项和 -l 组合使用并将结果导出到 less 效果很好。</li>
</ul>`,r:{minutes:.82,words:245},y:"a",t:"ls"},["/tutorial/ops/linux/bash/archives/commands/ls","/tutorial/ops/linux/bash/archives/commands/ls.md"]],["v-312ceba7","/tutorial/ops/linux/bash/archives/commands/nl.html",{d:1681181241e3,e:`<h1> nl</h1>
<p><code>nl</code> 命令用于显示行号。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
<span class="token function">sed</span> diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, <span class="token function">sed</span>
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.56,words:168},y:"a",t:"nl"},["/tutorial/ops/linux/bash/archives/commands/nl","/tutorial/ops/linux/bash/archives/commands/nl.md"]],["v-b22962fc","/tutorial/ops/linux/bash/archives/commands/ps.html",{d:1681181241e3,e:`<h1> ps</h1>
<p><code>ps</code> 命令列出当前正在执行的进程信息。</p>
<p>由于进程很多，所以为了快速找到某个进程，一般与 <code>grep</code> 配合使用。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找出正在运行 vim 的进程</span>
$ <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.26,words:77},y:"a",t:"ps"},["/tutorial/ops/linux/bash/archives/commands/ps","/tutorial/ops/linux/bash/archives/commands/ps.md"]],["v-e5b0ff26","/tutorial/ops/linux/bash/archives/commands/scp.html",{d:1681181241e3,e:`<h1> scp</h1>
<h2> 基本用法</h2>
<p><code>scp</code> 是 secure copy 的缩写，用来在两台主机之间加密传送文件。它的底层是 SSH 协议，默认端口是 22。</p>
<p>它主要用于以下三种复制操作。</p>
<ul>
<li>从本地系统到远程系统。</li>
<li>从远程系统到本地系统。</li>
<li>在本地系统的两个远程系统之间。</li>
</ul>
<p>使用 <code>scp</code> 传输数据时，文件和密码都是加密的，不会泄漏敏感信息。</p>
<p><code>scp</code> 的语法类似 <code>cp</code> 的语法。</p>`,r:{minutes:2.61,words:784},y:"a",t:"scp"},["/tutorial/ops/linux/bash/archives/commands/scp","/tutorial/ops/linux/bash/archives/commands/scp.md"]],["v-3b0c610a","/tutorial/ops/linux/bash/archives/commands/sed.html",{d:1681181241e3,e:`<h1> sed</h1>
<p><code>sed</code> 命令用于对文本进行过滤和变形处理。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Hello This is a Test <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
replace all spaces with hyphens
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.33,words:100},y:"a",t:"sed"},["/tutorial/ops/linux/bash/archives/commands/sed","/tutorial/ops/linux/bash/archives/commands/sed.md"]],["v-5740a672","/tutorial/ops/linux/bash/archives/commands/sort.html",{d:1681181241e3,e:`<h1> sort</h1>
<p><code>sort</code> 命令用于文本文件的排序。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>f
b
c
g
a
e
d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.24,words:73},y:"a",t:"sort"},["/tutorial/ops/linux/bash/archives/commands/sort","/tutorial/ops/linux/bash/archives/commands/sort.md"]],["v-78cf62e7","/tutorial/ops/linux/bash/archives/commands/tr.html",{d:1681181241e3,e:`<h1> tr</h1>
<p><code>tr</code> 命令用于按照给定模式转换文本。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Hello World Foo Bar Baz<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.3,words:89},y:"a",t:"tr"},["/tutorial/ops/linux/bash/archives/commands/tr","/tutorial/ops/linux/bash/archives/commands/tr.md"]],["v-0e48a30d","/tutorial/ops/linux/bash/archives/commands/uname.html",{d:1681181241e3,e:`<h1> uname</h1>
<p><code>uname</code> 命令用来显示内核信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.05,words:15},y:"a",t:"uname"},["/tutorial/ops/linux/bash/archives/commands/uname","/tutorial/ops/linux/bash/archives/commands/uname.md"]],["v-985e8278","/tutorial/ops/linux/bash/archives/commands/uniq.html",{d:1681181241e3,e:`<h1> uniq</h1>
<p><code>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a
a
b
a
b
c
d
c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.33,words:98},y:"a",t:"uniq"},["/tutorial/ops/linux/bash/archives/commands/uniq","/tutorial/ops/linux/bash/archives/commands/uniq.md"]],["v-06c3e1bd","/tutorial/ops/linux/bash/archives/commands/uptime.html",{d:1681181241e3,e:`<h1> uptime</h1>
<p><code>uptime</code> 命令显示本次开机运行的时间。</p>
`,r:{minutes:.05,words:15},y:"a",t:"uptime"},["/tutorial/ops/linux/bash/archives/commands/uptime","/tutorial/ops/linux/bash/archives/commands/uptime.md"]],["v-bb709114","/tutorial/ops/linux/bash/archives/commands/w.html",{d:1681181241e3,e:`<h1> w</h1>
<p><code>w</code> 命令显示当期谁在线。</p>
`,r:{minutes:.04,words:11},y:"a",t:"w"},["/tutorial/ops/linux/bash/archives/commands/w","/tutorial/ops/linux/bash/archives/commands/w.md"]],["v-042d394e","/tutorial/ops/linux/bash/archives/commands/wc.html",{d:1681181241e3,e:`<h1> wc</h1>
<p><code>wc</code> 命令返回某个文件的行数、词数和字符数。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wc</span> demo.txt
<span class="token number">7459</span>   <span class="token number">15915</span>  <span class="token number">398400</span> demo.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.15,words:44},y:"a",t:"wc"},["/tutorial/ops/linux/bash/archives/commands/wc","/tutorial/ops/linux/bash/archives/commands/wc.md"]],["v-27278cdc","/tutorial/ops/linux/bash/archives/commands/whereis.html",{d:1681181241e3,e:`<h1> whereis</h1>
<p><code>whereis</code> 用来显示某个命令的位置。如果有多个程序符合条件，会全部列出。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">whereis</span> <span class="token function">node</span>
/usr/bin/node /usr/sbin/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.11,words:34},y:"a",t:"whereis"},["/tutorial/ops/linux/bash/archives/commands/whereis","/tutorial/ops/linux/bash/archives/commands/whereis.md"]],["v-9f2ae8e0","/tutorial/ops/linux/bash/archives/commands/which.html",{d:1681181241e3,e:`<h1> which</h1>
<p><code>which</code> 命令根据 <code>PATH</code> 环境变量指定的顺序，返回最早发现某个命令的位置。即不指定路径时，实际执行的命令的完整路径。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">which</span> <span class="token function">node</span>
/usr/bin/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.17,words:52},y:"a",t:"which"},["/tutorial/ops/linux/bash/archives/commands/which","/tutorial/ops/linux/bash/archives/commands/which.md"]],["v-3376838f","/tutorial/ops/linux/bash/archives/commands/who.html",{d:1681181241e3,e:`<h1> who</h1>
<p><code>who</code> 命令显示已经登录的用户。</p>
<h2> 参数</h2>
<p><code>-b</code> 参数显示上一次系统启动的时间。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">who</span> <span class="token parameter variable">-b</span>
system boot  <span class="token number">2017</span>-06-20 <span class="token number">17</span>:41
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.13,words:40},y:"a",t:"who"},["/tutorial/ops/linux/bash/archives/commands/who","/tutorial/ops/linux/bash/archives/commands/who.md"]],["v-9b139d8e","/tutorial/ops/linux/bash/archives/deleted/stdio.html",{d:1681181241e3,e:`<h1> 标准 I/O</h1>
<h2> echo</h2>
<p><code>echo</code> 命令用于将指定内容输出到显示屏(标准输出)。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> this is a <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.9,words:1470},y:"a",t:"标准 I/O"},["/tutorial/ops/linux/bash/archives/deleted/stdio","/tutorial/ops/linux/bash/archives/deleted/stdio.md"]],["v-3706649a","/404.html",{y:"p",t:""},["/404"]],["v-16ae08e6","/develop/linux/",{y:"p",t:"Linux"},["/develop/linux/index.html"]],["v-1891b76b","/develop/",{y:"p",t:"Develop"},["/develop/index.html"]],["v-24a9acdf","/develop/tools/",{y:"p",t:"Tools"},["/develop/tools/index.html"]],["v-04e71790","/tutorial/front-end/",{y:"p",t:"Front End"},["/tutorial/front-end/index.html"]],["v-90d1bd16","/tutorial/ops/",{y:"p",t:"Ops"},["/tutorial/ops/index.html"]],["v-d0d0fdd2","/tutorial/front-end/vue/core/",{y:"p",t:"Core"},["/tutorial/front-end/vue/core/index.html"]],["v-61399853","/tutorial/ops/linux/bash/archives/",{y:"p",t:"Archives"},["/tutorial/ops/linux/bash/archives/index.html"]],["v-648c5bb4","/tutorial/ops/linux/bash/archives/commands/",{y:"p",t:"Commands"},["/tutorial/ops/linux/bash/archives/commands/index.html"]],["v-05a52eee","/tutorial/ops/linux/bash/archives/deleted/",{y:"p",t:"Deleted"},["/tutorial/ops/linux/bash/archives/deleted/index.html"]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},["/timeline/index.html"]],["v-5e3b6d77","/category/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/",{y:"p",t:"深度学习 分类",I:0},["/category/深度学习/","/category/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/index.html"]],["v-b313b4e6","/tag/ddp/",{y:"p",t:"DDP 标签",I:0},["/tag/ddp/index.html"]],["v-506407f4","/en/article/",{y:"p",t:"Articles",I:0},["/en/article/index.html"]],["v-37a8c5a0","/en/star/",{y:"p",t:"Star",I:0},["/en/star/index.html"]],["v-0379cba1","/en/timeline/",{y:"p",t:"Timeline",I:0},["/en/timeline/index.html"]],["v-767189a0","/category/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7/",{y:"p",t:"常用工具 分类",I:0},["/category/常用工具/","/category/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7/index.html"]],["v-762b4219","/tag/firewalld/",{y:"p",t:"firewalld 标签",I:0},["/tag/firewalld/index.html"]],["v-e9c7e408","/category/%E5%89%8D%E7%AB%AF/",{y:"p",t:"前端 分类",I:0},["/category/前端/","/category/%E5%89%8D%E7%AB%AF/index.html"]],["v-0cc92656","/tag/iptables/",{y:"p",t:"iptables 标签",I:0},["/tag/iptables/index.html"]],["v-0e452818","/category/%E5%B0%8F%E7%A8%8B%E5%BA%8F/",{y:"p",t:"小程序 分类",I:0},["/category/小程序/","/category/%E5%B0%8F%E7%A8%8B%E5%BA%8F/index.html"]],["v-211f44ee","/tag/linux/",{y:"p",t:"linux 标签",I:0},["/tag/linux/index.html"]],["v-b749fb9c","/category/node.js/",{y:"p",t:"Node.js 分类",I:0},["/category/node.js/index.html"]],["v-6106c001","/tag/docker/",{y:"p",t:"docker 标签",I:0},["/tag/docker/index.html"]],["v-65f6d381","/category/vue/",{y:"p",t:"Vue 分类",I:0},["/category/vue/index.html"]],["v-b3117a4e","/tag/frp/",{y:"p",t:"frp 标签",I:0},["/tag/frp/index.html"]],["v-e2bac56c","/category/javascript/",{y:"p",t:"JavaScript 分类",I:0},["/category/javascript/index.html"]],["v-5aaac2db","/tag/angular/",{y:"p",t:"Angular 标签",I:0},["/tag/angular/index.html"]],["v-65efd6b5","/category/git/",{y:"p",t:"Git 分类",I:0},["/category/git/index.html"]],["v-60379330","/tag/node.js/",{y:"p",t:"Node.js 标签",I:0},["/tag/node.js/index.html"]],["v-9c48d85a","/category/linux/",{y:"p",t:"Linux 分类",I:0},["/category/linux/index.html"]],["v-17343014","/tag/%E8%BD%AF%E4%BB%B6/",{y:"p",t:"软件 标签",I:0},["/tag/软件/","/tag/%E8%BD%AF%E4%BB%B6/index.html"]],["v-2ae54282","/category/%E5%9F%BA%E7%A1%80/",{y:"p",t:"基础 分类",I:0},["/category/基础/","/category/%E5%9F%BA%E7%A1%80/index.html"]],["v-755965f0","/tag/%E5%AE%89%E8%A3%85/",{y:"p",t:"安装 标签",I:0},["/tag/安装/","/tag/%E5%AE%89%E8%A3%85/index.html"]],["v-d37ff7f0","/category/markdown/",{y:"p",t:"Markdown 分类",I:0},["/category/markdown/index.html"]],["v-a0ba2788","/tag/%E4%BB%8B%E7%BB%8D/",{y:"p",t:"介绍 标签",I:0},["/tag/介绍/","/tag/%E4%BB%8B%E7%BB%8D/index.html"]],["v-65ee2aa4","/category/css/",{y:"p",t:"CSS 分类",I:0},["/category/css/index.html"]],["v-56fbf552","/tag/%E7%BD%91%E9%A1%B5/",{y:"p",t:"网页 标签",I:0},["/tag/网页/","/tag/%E7%BD%91%E9%A1%B5/index.html"]],["v-581e04cc","/category/html/",{y:"p",t:"HTML 分类",I:0},["/category/html/index.html"]],["v-0d223344","/tag/react/",{y:"p",t:"React 标签",I:0},["/tag/react/index.html"]],["v-b3bd56da","/category/emmet/",{y:"p",t:"Emmet 分类",I:0},["/category/emmet/index.html"]],["v-b302da92","/tag/vue/",{y:"p",t:"Vue 标签",I:0},["/tag/vue/index.html"]],["v-2dcc8639","/category/jquery/",{y:"p",t:"jQuery 分类",I:0},["/category/jquery/index.html"]],["v-551fb564","/tag/%E5%B0%8F%E7%A8%8B%E5%BA%8F/",{y:"p",t:"小程序 标签",I:0},["/tag/小程序/","/tag/%E5%B0%8F%E7%A8%8B%E5%BA%8F/index.html"]],["v-5decfa84","/en/category/",{y:"p",t:"Category",I:0},["/en/category/index.html"]],["v-551de488","/tag/%E5%AF%B9%E6%AF%94/",{y:"p",t:"对比 标签",I:0},["/tag/对比/","/tag/%E5%AF%B9%E6%AF%94/index.html"]],["v-b310d42a","/tag/git/",{y:"p",t:"Git 标签",I:0},["/tag/git/index.html"]],["v-484552dc","/tag/markdown/",{y:"p",t:"Markdown 标签",I:0},["/tag/markdown/index.html"]],["v-1daa6b4d","/tag/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/",{y:"p",t:"快速上手 标签",I:0},["/tag/快速上手/","/tag/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/index.html"]],["v-14748cc9","/tag/%E5%9F%BA%E7%A1%80/",{y:"p",t:"基础 标签",I:0},["/tag/基础/","/tag/%E5%9F%BA%E7%A1%80/index.html"]],["v-3fb58c9e","/tag/vue-router/",{y:"p",t:"Vue Router 标签",I:0},["/tag/vue-router/index.html"]],["v-c7bf80f0","/tag/%E5%BF%AB%E6%8D%B7%E9%94%AE/",{y:"p",t:"快捷键 标签",I:0},["/tag/快捷键/","/tag/%E5%BF%AB%E6%8D%B7%E9%94%AE/index.html"]],["v-288e2c56","/tag/html/",{y:"p",t:"HTML 标签",I:0},["/tag/html/index.html"]],["v-2831124d","/tag/bash/",{y:"p",t:"Bash 标签",I:0},["/tag/bash/index.html"]],["v-3891cf12","/tag/emoji/",{y:"p",t:"Emoji 标签",I:0},["/tag/emoji/index.html"]],["v-b3142c4c","/tag/css/",{y:"p",t:"CSS 标签",I:0},["/tag/css/index.html"]],["v-075c6c62","/en/tag/",{y:"p",t:"Tag",I:0},["/en/tag/index.html"]]];var Vuepress=defineComponent({name:"Vuepress",setup(){const Q=usePageLayout();return()=>h$2(Q.value)}}),createRoutes=()=>pagesRoutes.reduce((Q,[de,ue,pe,ve])=>(Q.push({name:de,path:ue,component:Vuepress,meta:pe},...ve.map(me=>({path:me,redirect:ue}))),Q),[{name:"404",path:"/:catchAll(.*)",component:Vuepress}]),historyCreator=createWebHistory,createVueRouter=()=>{const Q=createRouter({history:historyCreator(removeEndingSlash("/")),routes:createRoutes(),scrollBehavior:(de,ue,pe)=>pe||(de.hash?{el:de.hash}:{top:0})});return Q.beforeResolve(async(de,ue)=>{var pe;(de.path!==ue.path||ue===START_LOCATION_NORMALIZED)&&([pageData.value]=await Promise.all([resolvers.resolvePageData(de.name),(pe=pagesComponents[de.name])==null?void 0:pe.__asyncLoader()]))}),Q},setupGlobalComponents=Q=>{Q.component("ClientOnly",ClientOnly),Q.component("Content",Content)},setupGlobalComputed=(Q,de,ue)=>{const pe=ref(de.currentRoute.value.path);watch(()=>de.currentRoute.value.path,we=>pe.value=we);const ve=computed(()=>resolvers.resolveLayouts(ue)),me=computed(()=>resolvers.resolveRouteLocale(siteData.value.locales,pe.value)),_e=computed(()=>resolvers.resolveSiteLocaleData(siteData.value,me.value)),he=computed(()=>resolvers.resolvePageFrontmatter(pageData.value)),ge=computed(()=>resolvers.resolvePageHeadTitle(pageData.value,_e.value)),fe=computed(()=>resolvers.resolvePageHead(ge.value,he.value,_e.value)),be=computed(()=>resolvers.resolvePageLang(pageData.value)),Pe=computed(()=>resolvers.resolvePageLayout(pageData.value,ve.value));return Q.provide(layoutsSymbol,ve),Q.provide(pageFrontmatterSymbol,he),Q.provide(pageHeadTitleSymbol,ge),Q.provide(pageHeadSymbol,fe),Q.provide(pageLangSymbol,be),Q.provide(pageLayoutSymbol,Pe),Q.provide(routeLocaleSymbol,me),Q.provide(siteLocaleDataSymbol,_e),Object.defineProperties(Q.config.globalProperties,{$frontmatter:{get:()=>he.value},$head:{get:()=>fe.value},$headTitle:{get:()=>ge.value},$lang:{get:()=>be.value},$page:{get:()=>pageData.value},$routeLocale:{get:()=>me.value},$site:{get:()=>siteData.value},$siteLocale:{get:()=>_e.value},$withBase:{get:()=>withBase}}),{layouts:ve,pageData,pageFrontmatter:he,pageHead:fe,pageHeadTitle:ge,pageLang:be,pageLayout:Pe,routeLocale:me,siteData,siteLocaleData:_e}},setupUpdateHead=()=>{const Q=usePageHead(),de=usePageLang(),ue=ref([]),pe=()=>{Q.value.forEach(me=>{const _e=queryHeadTag(me);_e&&ue.value.push(_e)})},ve=()=>{document.documentElement.lang=de.value,ue.value.forEach(me=>{me.parentNode===document.head&&document.head.removeChild(me)}),ue.value.splice(0,ue.value.length),Q.value.forEach(me=>{const _e=createHeadTag(me);_e!==null&&(document.head.appendChild(_e),ue.value.push(_e))})};provide(updateHeadSymbol,ve),onMounted(()=>{pe(),ve(),watch(()=>Q.value,()=>ve())})},queryHeadTag=([Q,de,ue=""])=>{const pe=Object.entries(de).map(([he,ge])=>isString$1(ge)?`[${he}=${JSON.stringify(ge)}]`:ge===!0?`[${he}]`:"").join(""),ve=`head > ${Q}${pe}`;return Array.from(document.querySelectorAll(ve)).find(he=>he.innerText===ue)||null},createHeadTag=([Q,de,ue])=>{if(!isString$1(Q))return null;const pe=document.createElement(Q);return isPlainObject(de)&&Object.entries(de).forEach(([ve,me])=>{isString$1(me)?pe.setAttribute(ve,me):me===!0&&pe.setAttribute(ve,"")}),isString$1(ue)&&pe.appendChild(document.createTextNode(ue)),pe},appCreator=createSSRApp,createVueApp=async()=>{var ue;const Q=appCreator({name:"VuepressApp",setup(){var pe;setupUpdateHead();for(const ve of clientConfigs)(pe=ve.setup)==null||pe.call(ve);return()=>[h$2(RouterView),...clientConfigs.flatMap(({rootComponents:ve=[]})=>ve.map(me=>h$2(me)))]}}),de=createVueRouter();setupGlobalComponents(Q),setupGlobalComputed(Q,de,clientConfigs);for(const pe of clientConfigs)await((ue=pe.enhance)==null?void 0:ue.call(pe,{app:Q,router:de,siteData}));return Q.use(de),{app:Q,router:de}};createVueApp().then(({app:Q,router:de})=>{de.isReady().then(()=>{Q.mount("#app")})});export{I$2 as I,__vitePreload as _,createVueApp,f$1 as f};
