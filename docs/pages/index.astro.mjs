/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D8fHKCNL.mjs';
import { g as getCollection } from '../chunks/_astro_content_DHVea2Kc.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.beleiciabullock.com");
const $$Highlight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Highlight;
  const { date, desc, badge, entry, fontmatter } = Astro2.props;
  const { Content } = await desc.render();
  return renderTemplate`${maybeRenderHead()}<div class="bg-base-100 transition ease-in-out hover:scale-[102%]"> <div class="hero-content flex-col md:flex-row"> <div class="grow w-full"> <h1 class="text-xl font-bold mb-2"> ${date} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h1> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/Highlight.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const hls = (await getCollection("highlights")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const latest = hls.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="mb-6"> <div class="text-5xl font-bold mb-4">Hi, I'm Beleicia! 👋🏾</div> <div class="text-2xl">
🗣️ pronounced: <span class="italic">/buh-lee-see-ah/</span> </div> </div> <div class="py-2"> <text class="text-lg leading-8"> <p class="my-3">
I am a Computer Science Ph.D. candidate at Stanford University, where
          I am co-advised by James Landay and Michael Bernstein. Prior to
          Stanford, I completed my Master's at the UIUC, where I was co-advised
          by Karrie Karahalios.
</p> <p class="my-3">
Within my work, I research tools and methods to actualize equitable
          design. In my Master's, I designed and evaluated computer science
          ethics activities to better train future developers. Now, as a Ph.D.
          candidate, I am developing lightweight and robust design methods to
          elicit different communities' perspectives within design feedback. In
          particular, I often use social computing platforms as case studies for
          improving equitable experiences across systems.
</p> </text> </div> </div> <hr class="border-1 border-gray-200"> <div> <div class="text-3xl w-full font-bold mt-10 mb-8">✨ Latest Updates</div> </div> ${latest.map((hl) => renderTemplate`${renderComponent($$result2, "Highlight", $$Highlight, { "date": hl.data.month, "desc": hl })}`)}` })}`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/beleiciabullock/dev/phd-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
