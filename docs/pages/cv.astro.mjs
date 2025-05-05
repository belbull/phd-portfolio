/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent } from '../chunks/astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D8fHKCNL.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.beleiciabullock.com");
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-left"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/components/cv/TimeLine.astro", void 0);

const $$Cv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold">Curriculum Vitae</div> </div> <div class="mb-10 text-left"> <p class="italic">
Research Interests: Human-Computer Interaction, Social Computing,
      Equitable Design, Black Community Experiences
</p> <p class="text-blue-500 mt-5"> <a href="../public/pdfs/BullockCV.pdf" target="_blank">[ Download CV ]</a> </p> </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Education</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Stanford University (Ph.D.)", "subtitle": "Advisors: Michael Bernstein, James Landay" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "University of Illinois Urbana-Champaign (M.S.)", "subtitle": "Advisors: Karrie Karahalios" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Bowdoin College (B.A.)", "subtitle": "Major: Computer Science | Minor: Mathematics" })} </div> <hr class="border-1 border-gray-200"> <div class="mt-8 mb-5"> <div class="text-3xl w-full font-bold">Industry Experience</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Stanford HAI Tech & Policy Intern @ USAID", "subtitle": "Summer 2023" }, { "default": ($$result3) => renderTemplate`
Researched and formulated policy recommendations to improve the impact of
      ride-sharing and online gig work algorithms on the well-being of workers
      in developing countries, particularly workers who face gender
      discrimination
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Algorithmic Impact Intern @ Spotify", "subtitle": "Summer 2022" }, { "default": ($$result3) => renderTemplate`
Charted opportunities and challenges around equitable recommendation
      systems while analyzing the impact of ongoing initiatives around racial
      equity to provide guidance for policy and editorial teams
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Research Intern @ Adobe Research", "subtitle": "Summer 2021" }, { "default": ($$result3) => renderTemplate`
Analyzed design space for personalized visualizations in online news and
      blogs and conducted formative survey to understand how users explore these
      visualizations
` })} </div> <hr class="border-1 border-gray-200"> <div class="mt-8 mb-5"> <div class="text-3xl w-full font-bold">Academic Service</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Stanford CS Faculty Search Committee", "subtitle": "2024 - 2025" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Stanford CS Department Social Fund Chair", "subtitle": "2022 - 2023" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "UIUC Grainger Engineering Diversity Commitee", "subtitle": "2020 - 2021" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "UIUC Grainger Engineering Anti-Racism Task Force", "subtitle": "Summer 2020" })} </div> <hr class="border-1 border-gray-200"> <div class="mt-8 mb-5"> <div class="text-3xl w-full font-bold">Awards</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Stanford Community Impact Award", "subtitle": "2025" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Stanford Philanthropy and Civil Society Ph.D. Fellowship", "subtitle": "2024 - 2025" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Stanford CCSRE Tech and Racial Equity Graduate Fellowship", "subtitle": "2022 - 2023" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Siebel Scholar", "subtitle": "2021" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "GEM Ph.D. Science Fellowship", "subtitle": "2021" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "GEM M.S. Science Fellowship", "subtitle": "2019" })} </div> <hr class="border-1 border-gray-200"> <div class="mt-8 mb-5"> <div class="text-3xl w-full font-bold">Teaching Experience</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "UIUC CS210: Ethical and Professional Responsibilities", "subtitle": "Fall 2019, Spring 2020, Spring 2021" }, { "default": ($$result3) => renderTemplate`
Recevied an excellent rating on the Center for Innovation in Teaching's <span class="italic">
Teacher's Ranked as Excellent by Their Students
</span> List
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "UIUC CS598: Social Spaces on the Internet", "subtitle": "Fall 2020" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Bowdoin CS1101: Introduction to Computer Science", "subtitle": "Fall 2019" })} </div> <hr class="border-1 border-gray-200"> <div class="mt-8 mb-5"> <div class="text-3xl w-full font-bold">Relevant Courses</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-4"> <li> <a href="https://psych252.github.io/" class="text-blue-500 hover:underline">
PSYCH252: Statistical Methods</a> </li> <li> <a href="https://web.stanford.edu/class/cs329x/" class="text-blue-500 hover:underline">
CS329X: Human-Centered NLP</a> </li> <li> <a href="https://web.stanford.edu/class/cs329r/" class="text-blue-500 hover:underline">
CS329R: Race & NLP</a> </li> <li> <a href="https://bulletin.stanford.edu/courses/2232341" class="text-blue-500 hover:underline">
COMM355: World of Influencers</a> </li> <li> <a href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&q=MS%26E%20234:%20Data%20Privacy%20and%20Ethics&academicYear=20172018" class="text-blue-500 hover:underline">
MSE234: Data Privay & Ethics</a> </li> </ul> <hr class="border-1 border-gray-200"> <div class="mt-8 mb-5"> <div class="text-3xl w-full font-bold">Skills</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-4"> <li>Qualitative Analysis</li> <li>Quantitative Analysis</li> <li>Frontend Development</li> <li>Python</li> <li>R</li> </ul> ` })}`;
}, "/Users/beleiciabullock/dev/phd-portfolio/src/pages/cv.astro", void 0);

const $$file = "/Users/beleiciabullock/dev/phd-portfolio/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
