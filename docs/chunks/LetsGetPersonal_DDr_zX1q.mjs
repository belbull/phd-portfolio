import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As news sites aim to increase user engagement, <mark class=\"bg-blue-200\">how do designers’ structure the personalization of visualizations</mark> and what are the potential impacts? We develop <mark class=\"bg-blue-200\"> a design space of 47 personalized visualizations</mark> - or popular media visualizations that allow news readers to segment data by attributes such as race, gender, and income. Through this design space, we identify (un)common design mechanisms that may impact users’ exploration and understanding of topics such as health, politics, and finance. We find that <mark class=\"bg-blue-200\"> visualizations often lack explicit exploration suggestions or instructions, data notices, and personalized visual insights</mark>. We also outline three trajectories for future research.</p>";

				const frontmatter = {"title":"Let’s Get Personal: Exploring the Design of Personalized Visualizations","authors":["Beleicia Bullock","Shunan Guo","Eunyee Koh","Ryan Rossi","Fan Du","Jane Hoffswell"],"conference":"VIS 2022","year":2022,"type":"paper","paper":true,"link":"../public/pdfs/Bullock2022-PersonalizedViz.pdf","doi":"https://ieeexplore.ieee.org/abstract/document/9973231"};
				const file = "/Users/beleiciabullock/dev/phd-portfolio/src/content/work/LetsGetPersonal.md";
				const url = undefined;
				function rawContent() {
					return "\nAs news sites aim to increase user engagement, <mark class=\"bg-blue-200\">how do designers' structure the personalization of visualizations</mark> and what are the potential impacts? We develop <mark class=\"bg-blue-200\"> a design space of 47 personalized visualizations</mark> - or popular media visualizations that allow news readers to segment data by attributes such as race, gender, and income. Through this design space, we identify (un)common design mechanisms that may impact users' exploration and understanding of topics such as health, politics, and finance. We find that <mark class=\"bg-blue-200\"> visualizations often lack explicit exploration suggestions or instructions, data notices, and personalized visual insights</mark>. We also outline three trajectories for future research.\n";
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
