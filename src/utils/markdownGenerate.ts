function markdownToHtml(markdown: string): string {
    // Convert headers
    markdown = markdown.replace(/^(#+)(.*)/gm, ( hashes, text) => {
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
    markdown = markdown.replace(/^\s*[-*+] (.*)$/gm, '<li>$1</li>');
    markdown = markdown.replace(/<li>(.*)<\/li>/g, '<ul>$&</ul>');

    // Convert blockquotes
    markdown = markdown.replace(/^(>.*)$/gm, '<blockquote>$1</blockquote>');

    // Convert horizontal rule
    markdown = markdown.replace(/^\s*[-*_]{3,}\s*$/gm, '<hr>');

    // Convert links
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Convert images
    markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');

    return markdown;
}
export default{
    markdownToHtml
}
