---
sidebar_position: 203
hide_table_of_contents: false

---

# Sample Guidelines
- Try to make each section within a page self-sufficient. i.e. avoid structuring all pages as step-by-step guides unless it really is the intent. This ensures that we can refer to sections externally (from other docs pages, Console, etc.) and expect that the user will be able to follow the section without being lost on the context that was set in earlier sections of the page. Adding statements such as "As we have described in the above section ..." might help to set up the needed context.
- Try to include a TL;DR block for feature documentation at the top of the doc to summarise it as much as possible.

## Semantics
- Use `code block` for highlighting `actions`, important `keywords`, eg - Go to `Menu -> Settings`, we want this `order ID` to be dynamic or create new `table name` using this query - `CREATE TABLE TABLE_Name (col1 type, col2 type)`
- Don't use Italics.
- Only Headings and Table Headers will be bold.
- Don't use Linebreak `<hr />`.
- Use `->` for providing path in this format only and should be always inside codeblock.

## Bullet Lists
- Don't use bullet points for one point.
- Make sure that content which belongs under a bullet point is actually indented under that bullet point in markdown.
- Use a period at the end of bullet lists which are a sentence, like this.
- Bullet points should not have a blank line between each point.
