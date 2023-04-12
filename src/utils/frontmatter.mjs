import getReadingTime from 'reading-time';
import {toString} from 'mdast-util-to-string';

export function readingTimeRemarkPlugin() {
    return function (tree, file) {
        const textOnPage = toString(tree);
        file.data.astro.frontmatter.readingTime = Math.ceil(getReadingTime(textOnPage).minutes)
    };
}
