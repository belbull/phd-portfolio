import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Prior work has shown that understanding program and department expectations play a key role in doctoral degree completion. <mark class=\"bg-blue-200\">So, how do computer science Ph.D. students form and fulfill expectations in their programs?</mark> To answer this, <mark class=\"bg-blue-200\">we interview 14 CS Ph.D. students</mark> from underrepresented groups on how they identify and meet expectations in their programs. We offer two recommendations for departments - <mark class=\"bg-blue-200\">lab-based mentorship and goal clarity</mark> - to better support students.</p>";

				const frontmatter = {"title":"Forming and Fulfilling Expectations: Perspectives of Underrepresented Computer Science Doctoral Students","authors":["Vidushi Ojha","Raul Enrique Platero","Beleicia Bullock"],"conference":"ASEE 2022","year":2022,"type":"paper","paper":true,"link":"../public/pdfs/Ojha2022-FormingFulfillingExpectations.pdf","doi":"https://peer.asee.org/forming-and-fulfilling-expectations-perspectives-of-underrepresented-computer-science-doctoral-students"};
				const file = "/Users/beleiciabullock/dev/phd-portfolio/src/content/work/FormingFulfillingExpectations.md";
				const url = undefined;
				function rawContent() {
					return "\nPrior work has shown that understanding program and department expectations play a key role in doctoral degree completion. <mark class=\"bg-blue-200\">So, how do computer science Ph.D. students form and fulfill expectations in their programs?</mark> To answer this, <mark class=\"bg-blue-200\">we interview 14 CS Ph.D. students</mark> from underrepresented groups on how they identify and meet expectations in their programs. We offer two recommendations for departments - <mark class=\"bg-blue-200\">lab-based mentorship and goal clarity</mark> - to better support students.\n";
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
