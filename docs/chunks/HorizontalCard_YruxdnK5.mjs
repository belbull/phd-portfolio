import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_8FuQcOkh.mjs';

const $$Astro = createAstro("https://www.beleiciabullock.com");
const $$HorizontalCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HorizontalCard;
  const {
    title,
    img,
    authors,
    link,
    paper,
    doi,
    conference,
    target = "_blank",
    desc,
    fontmatter
  } = Astro2.props;
  const { Content } = await desc.render();
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg my-12"> <div class="flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "width": 750, "height": 422, "format": "webp", "alt": title, "class": "max-w-full md:max-w-[13rem] rounded-lg" })}`} <div class="grow w-full"> <h1 class="text-lg font-bold mb-1"> ${title} </h1> <p class="py-1 text-md">${authors}</p> ${paper && renderTemplate`<p class="py-1 text-md italic">${conference}</p>`} </div> </div> <div class="my-1 text-md"> ${renderComponent($$result, "Content", Content, {})} </div> <div> ${paper && renderTemplate`<span class="mr-1"> ${" "} <a${addAttribute(link, "href")} class="text-blue-600 hover:underline">
[ pdf ]
</a> </span>
      <span> <a${addAttribute(doi, "href")} class="text-blue-600 hover:underline">
[ doi ]
</a> </span>`} </div> </div>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/HorizontalCard.astro", void 0);

export { $$HorizontalCard as $ };
