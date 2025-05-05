import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><mark class=\"bg-blue-200\"> How can we support the inclusion of ethics in existing computer science courses?</mark> We present <mark class=\"bg-blue-200\"> a novel reposirory of CS ethics modules </mark> that can be embedded within existing CS courses. To show this, <mark class=\"bg-blue-200\"> we pilot our predicitve policing module</mark> that aims to provide an ‘ethical laboratory’ for undergraduate students in an intermediate algorithms course. Our findings show that <mark class=\"bg-blue-200\"> students were able to contextualize ethical issues</mark>, but wanted more class time devoted to the activity.</p>";

				const frontmatter = {"title":"Computing ethics narratives: Teaching computing ethics and the impact of predictive algorithms","authors":["Beleicia Bullock","Fernando L. Nascimento","Stacy A. Doore"],"conference":"SIGCSE 2021","year":2021,"type":"paper","paper":true,"link":"../public/pdfs/Bullock2021-ComputingEthicsNarratives.pdf","doi":"https://dl.acm.org/doi/abs/10.1145/3408877.3432468"};
				const file = "/Users/beleiciabullock/dev/phd-portfolio/src/content/work/ComputingEthicsNarratives.md";
				const url = undefined;
				function rawContent() {
					return "\n<mark class=\"bg-blue-200\"> How can we support the inclusion of ethics in existing computer science courses?</mark> We present <mark class=\"bg-blue-200\"> a novel reposirory of CS ethics modules </mark> that can be embedded within existing CS courses. To show this, <mark class=\"bg-blue-200\"> we pilot our predicitve policing module</mark> that aims to provide an 'ethical laboratory' for undergraduate students in an intermediate algorithms course. Our findings show that <mark class=\"bg-blue-200\"> students were able to contextualize ethical issues</mark>, but wanted more class time devoted to the activity.\n";
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
