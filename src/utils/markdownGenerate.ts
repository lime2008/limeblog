function markdownToHtml(markdown: string): string {
    // Convert images before links to avoid conflict
    markdown = markdown.replace(/!\[([^[]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

    // Then convert links
    markdown = markdown.replace(/\[([^[]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // The rest of the conversion remains the same
    // Convert headers
    markdown = markdown.replace(/^(#{1,6})\s*(.*)$/gm, (_ , hashes, text) => {
        const level = hashes.length;
        return `<h${level}>${text.trim()}</h${level}>`;
    });

    // Convert bold and italic text
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    markdown = markdown.replace(/__(.*?)__/g, '<strong>$1</strong>');
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');
    markdown = markdown.replace(/_(.*?)_/g, '<em>$1</em>');

    // Convert inline code
    markdown = markdown.replace(/`(.*?)`/g, '<code>$1</code>');

    // Convert lists
    markdown = markdown.replace(/^\s*([-*+]) (.*)$/gm, '<li>$2</li>');
    markdown = markdown.replace(/<\/li>\n<li>/g, '</li><li>');
    markdown = markdown.replace(/<li>([\s\S]*?)<\/li>/g, '<ul>$1</ul>');

    // Convert blockquotes
    markdown = markdown.replace(/^(>.*)$/gm, '<blockquote>$1</blockquote>');

    // Convert horizontal rule
    markdown = markdown.replace(/^\s*[-*_]{3,}\s*$/gm, '<hr>');

    // Split into paragraphs and process each paragraph
    const paragraphs = markdown.split('\n\n');
    const processedParagraphs = paragraphs.map(paragraph => {
        const trimmedParagraph = paragraph.trim();
        return `<p>${trimmedParagraph.replace(/\n/g, '<br>')}</p>`;
    });

    return `<div class="content">${processedParagraphs.join('')}</div>`;
}

export default {
    markdownToHtml
}