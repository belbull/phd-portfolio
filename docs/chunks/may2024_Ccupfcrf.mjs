import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Grateful to have been selected as a <a href=\"https://pacscenter.stanford.edu/opportunities/fellowships/\">2024-25 PACS Ph.D. Fellow</a>!</p>";

				const frontmatter = {"month":"May 2024","date":"2024-05-01T00:00:00.000Z"};
				const file = "/Users/beleiciabullock/dev/phd-portfolio/src/content/highlights/may2024.md";
				const url = undefined;
				function rawContent() {
					return "\nGrateful to have been selected as a [2024-25 PACS Ph.D. Fellow](https://pacscenter.stanford.edu/opportunities/fellowships/)!\n";
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
