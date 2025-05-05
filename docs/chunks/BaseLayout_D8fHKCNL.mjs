import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, i as defineScriptVars, a as renderComponent, j as renderHead, e as renderSlot } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './config_CS11I9I5.mjs';

const $$Astro$5 = createAstro("https://www.beleiciabullock.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/social_img.webp", ogType = "website" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/BaseHead.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sticky lg:hidden top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm"> <div class="navbar"> <div class="navbar-start"> <label for="my-drawer" class="btn btn-square btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </label> </div> <div class="navbar-center"> <a class="btn btn-ghost normal-case text-xl" href="/">👩🏾‍💻 Beleicia Bullock</a> </div> <div class="navbar-end"></div> </div> </div>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro("https://www.beleiciabullock.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer footer-center block mb-5 pt-10"> <div class="pb-2">
&copy; ${today.getFullYear()} Manuel Ernesto
</div> <div class="inline opacity-75">
Developed by <a href="https://manuelernestog.github.io" target="_blank" class="font-bold">Manuel Ernesto</a> using
<!-- Thanks for using this template. You can keep this line to support my work :) --> <a href="https://astrofy-template.netlify.app/" target="_blank" class="font-bold">Astrofy Template ⚡️</a> </div> </footer> `;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/Footer.astro", void 0);

const $$SideBarFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="block sticky pointer-events-none bg-base-200 justify-center h-8 [mask-image:linear-gradient(transparent,#000000)]"></div> <div class="social-icons pb-5 pt-1 flex place-content-evenly sticky bottom-0"> <a href="https://scholar.google.com/citations?hl=en&user=OyE0sDYAAAAJ" class="mx-2 transition ease-in-out hover:scale-[105%]" aria-label="Find me on Google Scholar" title="Find me on Google Scholar"> <span class="text-xs"> Google Scholar </span> </a> <a href="mailto:beleicia@cs.stanford.edu" class="mx-2 transition ease-in-out hover:scale-[105%]" aria-label="Email me" title="Email me"> <span class="text-xs">Email</span> </a> <a href="https://linkedin.com/in/beleiciabullock" class="mx-2 transition ease-in-out hover:scale-[105%]" aria-label="Download my CV" title="Download my CV"> <span class="text-xs">CV</span> </a> </div>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/SideBarFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://www.beleiciabullock.com");
const $$SideBarMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideBarMenu;
  const { sideBarActiveItemID } = Astro2.props;
  const activeClass = "bg-base-300";
  return renderTemplate(_a || (_a = __template(["", '<ul class="menu grow shrink menu-md overflow-y-auto"> <li> <a class="py-3 text-base" id="home" href="/">Home</a> </li> <li> <a class="py-3 text-base" id="work" href="/work">Work</a> </li> <li> <a class="py-3 text-base" id="cv" href="/cv">Curriculum Vitae</a> </li> <!-- <li>\n    <a\n      class="py-3 text-base"\n      id="blog"\n      href="/blog/"\n      >Blog</a\n    >\n  </li> --> </ul> <script>(function(){', "\n  const activeItemElem = document.getElementById(sideBarActiveItemID);\n  activeItemElem && activeItemElem.classList.add(activeClass);\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({
    sideBarActiveItemID,
    activeClass
  }));
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/SideBarMenu.astro", void 0);

const $$Astro$2 = createAstro("https://www.beleiciabullock.com");
const $$SideBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideBar;
  const { sideBarActiveItemID } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="drawer-side z-40"> <label for="my-drawer" class="drawer-overlay"></label> <aside class="px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col"> <div class="w-fit mx-auto mt-5 mb-6"> <a href="/"> <div class="avatar transition ease-in-out hover:scale-[102%]"> <div class="p-3"> <img src="/profile.webp" alt="Profile image" class="rounded-md max-h-1/4"> </div> </div> </a> </div> ${renderComponent($$result, "SideBarMenu", $$SideBarMenu, { "sideBarActiveItemID": sideBarActiveItemID })} ${renderComponent($$result, "SideBarFooter", $$SideBarFooter, {})} </aside> </div>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/SideBar.astro", void 0);

const $$Astro$1 = createAstro("https://www.beleiciabullock.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://www.beleiciabullock.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    image,
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    includeSidebar = true,
    sideBarActiveItemID,
    ogType
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="lofi"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, ",": true, "ogType": ogType })}${renderTemplate`${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`}${renderHead()}</head> <body> <div class="bg-base-100 drawer lg:drawer-open"> <input id="my-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content bg-base-100"> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <div class="md:flex md:justify-center"> <main class="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${includeSidebar && renderTemplate`${renderComponent($$result, "SideBar", $$SideBar, { "sideBarActiveItemID": sideBarActiveItemID })}`} </div> </body></html>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
