

*Introduction to CSS

CSS: Cascading Stylesheets

Types:
- Internal: `<style>` tag in the `<head>` section
- Inline: Style directly inside a specific tag
- External:Separate file linked with `<link>` tag in HTML

Syntax:

elementName {
  property: value;
}

.className {}
#idName {}


*Examples:
- Inline:

html
<div style="background-color: ColorName;">

- Internal:

html
<style>
  .className {
    background-color: ColorName;
  }
</style>

- External: Linked in HTML file

html
<link rel="stylesheet" href="path_to_stylesheet.css">


*CSS Priority:
Inline > Internal > External (Inline being the most important)

