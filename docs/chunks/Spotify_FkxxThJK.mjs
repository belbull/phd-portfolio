import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><mark class=\"bg-blue-200\"> How do we evaluate the impact of methods for equitable recommendations</mark>, particularly those that aim to support racial equity? Synthesizing prior literature, <mark class=\"bg-blue-200\"> we outline different methods for evaluating recommendation interventions</mark> aimed at improving equity, as well as their challenges and interaction with privacy regulations like GDPR. We extend this analysis through <mark class=\"bg-blue-200\"> the case study of editorial interventions </mark> within the context of online music recommendations.</p>";

				const frontmatter = {"title":"Equitable Recommendations","authors":["Beleicia Bullock","Amar Assad","Henriette Cramer"],"conference":"Internship @ Spotify's Trust and Safety","type":"project","paper":false,"year":2022};
				const file = "/Users/beleiciabullock/dev/phd-portfolio/src/content/work/Spotify.md";
				const url = undefined;
				function rawContent() {
					return "\n<mark class=\"bg-blue-200\"> How do we evaluate the impact of methods for equitable recommendations</mark>, particularly those that aim to support racial equity? Synthesizing prior literature, <mark class=\"bg-blue-200\"> we outline different methods for evaluating recommendation interventions</mark> aimed at improving equity, as well as their challenges and interaction with privacy regulations like GDPR. We extend this analysis through <mark class=\"bg-blue-200\"> the case study of editorial interventions </mark> within the context of online music recommendations.\n";
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
