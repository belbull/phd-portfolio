import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BKyCNIRX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Thankful to have been selected to attend the <a href=\"https://cra.org/cra-wp/grad-cohort-ideals/\">CRA’s 2025 Grad Cohort for IDEALS Workshp</a>!</p>";

				const frontmatter = {"month":"December 2024","date":"2024-12-01T00:00:00.000Z"};
				const file = "/Users/beleiciabullock/dev/phd-portfolio/src/content/highlights/dec2024.md";
				const url = undefined;
				function rawContent() {
					return "\nThankful to have been selected to attend the [CRA's 2025 Grad Cohort for IDEALS Workshp](https://cra.org/cra-wp/grad-cohort-ideals/)!\n";
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
