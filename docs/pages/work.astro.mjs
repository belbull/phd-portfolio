/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D8fHKCNL.mjs';
import { $ as $$HorizontalCard } from '../chunks/HorizontalCard_YruxdnK5.mjs';
import { g as getCollection } from '../chunks/_astro_content_DHVea2Kc.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const work = (await getCollection("work")).sort(
    (a, b) => b.data.year.valueOf() - a.data.year.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Work", "sideBarActiveItemID": "work" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="text-5xl w-full font-bold mb-8">Work</div> <hr class="border-1 border-gray-200"> </div> <div class="w-full lg:w-3/4"> <div class="text-3xl w-full font-bold mt-8">Publications</div> <div> ${work.filter((pub) => pub.data.type === "paper").map((pub) => renderTemplate`${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": pub.data.title, "authors": pub.data.authors.join(", "), "conference": pub.data.conference, "paper": pub.data.paper, "link": pub.data.link, "doi": pub.data.doi, "desc": pub })}`)} </div> </div> <hr class="border-1 border-gray-200"> <div class="w-full lg:w-3/4"> <div class="text-3xl w-full font-bold mt-8">Projects</div> <div> ${work.filter((proj) => proj.data.type === "project").map((proj) => renderTemplate`${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": proj.data.title, "authors": proj.data.authors.join(", "), "paper": proj.data.paper, "link": proj.data.link, "desc": proj })}`)} </div> </div> ` })}`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/pages/work.astro", void 0);

const $$file = "/Users/beleiciabullock/dev/phd-portfolio/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
