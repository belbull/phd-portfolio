import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><mark class=\"bg-blue-200\"> How does the algorithmic management behind online and ride-share gig work impact women working in developing countries?</mark> We synthesize literature from academia, government agencies, NGOs, and public media to 1) <mark class=\"bg-blue-200\">compile common platform and algorithmic features</mark> of gig work platforms, and 2) <mark class=\"bg-blue-200\">highlight how these features can impact worker well-being</mark> across developing contexts. We pay special attention to how these features impact women, given existing systemic gender oppression across the gobe. Based on this work, <mark class=\"bg-blue-200\">we make recommendations for developing actors and platforms</mark> - including advocating for intersectional well-being frameworks, standardizing features, removing reliance on algorithmic management, and minimizing hierarchies between workers and users.</p>";

				const frontmatter = {"title":"Gig Platforms, Worker Well-Being and Gender in Developing Countries","authors":["Beleicia Bullock","Shachee Doshi","Andrew Merluzzi"],"conference":"Internship @ USAID","type":"project","paper":false,"year":2023};
				const file = "/Users/beleiciabullock/dev/phd-portfolio/src/content/work/USAID.md";
				const url = undefined;
				function rawContent() {
					return "\n<mark class=\"bg-blue-200\"> How does the algorithmic management behind online and ride-share gig work impact women working in developing countries?</mark> We synthesize literature from academia, government agencies, NGOs, and public media to 1) <mark class=\"bg-blue-200\">compile common platform and algorithmic features</mark> of gig work platforms, and 2) <mark class=\"bg-blue-200\">highlight how these features can impact worker well-being</mark> across developing contexts. We pay special attention to how these features impact women, given existing systemic gender oppression across the gobe. Based on this work, <mark class=\"bg-blue-200\">we make recommendations for developing actors and platforms</mark> - including advocating for intersectional well-being frameworks, standardizing features, removing reliance on algorithmic management, and minimizing hierarchies between workers and users.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
