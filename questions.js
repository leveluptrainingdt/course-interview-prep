const questions = {
    "Beginner": [
        {
            id: 1,
            question: "What does the HTML abbreviation stand for, and what is its purpose?",
            answer: `
HTML stands for Hypertext Markup Language. Its purpose is to structure the content of web pages using a markup language, thereby defining how browsers display information, text, and various web elements.
            `,
            explanation: `
HTML is the backbone of web development, providing the structure needed for displaying text, links, images, and other multimedia elements on web pages.
            `,
            codeExample: "None"
        },
        {
            id: 2,
            question: "What is the function of an HTML tag, and what two fundamental forms do they usually appear in?",
            answer: `
An HTML tag defines an element's beginning or end, or content itself. They generally appear in two fundamental forms: opening and closing, e.g. \`<h1>\` and \`</h1>\`, or a self-closing or void element, like \`<br>\`.
            `,
            explanation: `
HTML tags are used to define different elements in an HTML document. They can be used to mark up text, create links, add images, and more.
            `,
            codeExample: `<h1>This is Heading tag.</h1> <br /> and self-closeing br tag`
        },
         {
            id: 3,
            question: "Explain with example, How does `<br>` and `<img>` HTML elements not have end tag?",
            answer: `
The \`<br>\` (line break) and \`<img>\` (image) tags are self-closing because they don't enclose content like a paragraph element, example \`<br>\` is an empty or self-closing tag as no content is present between tags for \`<img>\`, content is from external resources i.e the source specified \`<img src="example.jpg" alt="description">\`.
            `,
            explanation: `
Self-closing tags don't enclose any content and are closed in their opening tag. They are commonly used for single line elements or for elements that reference external resources.
            `,
             codeExample: "None"
        },
        {
             id: 4,
            question: "How can text formatting be achieved through HTML and provide three specific example tags for basic text appearance changes?",
            answer: `
Text formatting is achieved by applying different tags to your text elements such as \`<b>\` to make the enclosed text bold (\`<b>Bold Text</b>\`), \`<i>\` to make the enclosed text italic (\`<i>Italic Text</i>\`), and \`<u>\` to add an underline (\`<u>Underlined Text</u>\`).
            `,
            explanation: `
HTML offers a variety of tags for formatting text. These tags can be used to make text bold, italic, underlined, and more.
            `,
            codeExample: `<b>Bold Text</b>\n<i>Italic Text</i>\n<u>Underlined Text</u>`
        },
        {
            id: 5,
             question: "How can we create heading in an HTML document using appropriate tags? provide tags from the highest importance to lowest?",
            answer: `
HTML defines six levels of headings, ranging from highest to lowest, using the tags: \`<h1>\`, \`<h2>\`, \`<h3>\`, \`<h4>\`, \`<h5>\`, and \`<h6>\` (\`<h1>Largest Heading</h1>\`).
            `,
            explanation: `
HTML provides six heading tags, from <h1> to <h6>, with <h1> being the most important and <h6> the least.
            `,
            codeExample: `<h1>Largest Heading</h1>\n<h2> Heading level 2 </h2> \n<h6> Heading 6 last in level </h6>`
        },
        {
            id: 6,
            question: "Write the syntax of how do you add a hyperlink and with attributes that redirect the users from current web page to a given url?",
            answer: `
A hyperlink can be created using the \`<a>\` (anchor) tag. The syntax should be: \`<a href="URL">Link Text</a>\`, where URL is target url (\`<a href="https://www.example.com">Example Link</a>\`) and attributes may include \`target\`, (\`target="_blank"\` opens in new tab).
            `,
            explanation: `
The <a> tag is used to create hyperlinks in HTML. The href attribute specifies the URL of the page the link goes to.
            `,
             codeExample: `<a href="https://www.example.com" target='_blank'>Example Link</a>`
        },
        {
             id: 7,
            question: "List down HTML tags, you use for generating an HTML table structure.",
            answer: `
To display data in tabular format: \`<table>\` tag indicates a table, \`<tr>\` signifies rows, \`<th>\` identifies header cells, and \`<td>\` are the actual data-containing cells within rows.
            `,
            explanation: `
HTML tables are used to display data in rows and columns. The <table>, <tr>, <th>, and <td> tags are used to create the structure of a table.
            `,
             codeExample: `<table> \n <tr><th> name</th> <th>phone </th> </tr> <tr><td> John Doe </td> <td>123</td> </tr> \n</table>`
        },
        {
            id: 8,
            question: "List and specify types of HTML tags, you use to present data with different styles for showing content in the list.",
            answer: `
HTML provides \`<ol>\` (ordered or numbered lists: \`<ol> <li>Item 1</li> </ol>\`), \`<ul>\` (unordered or bulleted lists:\`<ul> <li>Item 1</li> </ul>\` ) , and \`<dl>\`( definition list containing tags \`<dt>\` for title and \`<dd>\` for detail or definition \`<dl><dt>Term</dt><dd>Definition</dd></dl>\`).
            `,
            explanation: `
HTML provides several tags for creating lists. <ol> for ordered lists, <ul> for unordered lists, and <dl> for description lists
            `,
             codeExample: ` <ol> <li>item1</li></ol> \n <ul><li>item1</li></ul> <dl>  <dt> Title</dt> <dd> Description for the given title</dd> </dl>`
        },
         {
           id: 9,
            question: "Elaborate with examples, the key difference between the roles and purpose of HTML `element` and `tags`?",
             answer: `
A tag is the markup construct used within HTML's source such as angle brackets <> that start and ends. HTML elements are containers of content usually in pair, beginning tag and an end tag surrounding it by a content. \`<span>content</span>\` span tag that acts as the wrapper and is the actual element too.
            `,
             explanation: `
Tags are used to mark the start and end of an element. An element is the combination of a start tag, an end tag, and the content between them.
            `,
              codeExample: `<p> This is html text element that used p tags <span> some inline tags with span </span></p>`
        },
        {
          id: 10,
            question: "In the context of HTML, briefly explain how semantic markup or coding style contributes towards meaning of content within a webpage?",
             answer: `
Semantic HTML tags like \`<article>\`, \`<aside>\`, \`<nav>\`, \`<footer>\`, and \`<header>\` add meaning to HTML content. So, \`<nav>\` means its a group of navigation elements, instead of \`div\`, thus improving page understanding and semantics, benefiting SEO, accessibility and ease of maintainability.
            `,
            explanation: `
Semantic HTML tags give meaning to the structure of the content rather than just its appearance. This improves accessibility and SEO.
            `,
              codeExample: `  <nav> navbar item links ...</nav>   <footer> section at bottom of page... </footer> <header> Page top header section </header>`
        },
        {
            id: 11,
           question: "Define, with an example, how to create an image map. What are it's basic structural requirements in terms of HTML elements?",
            answer: `
Image maps allows clickable regions on the image, using the \`<map>\` tag, then, \`<area>\` to define clickable area, and defining \`href\` within those \`area\` tag like below example \`<img src="example.png" alt="Map Image" usemap="#maparea" /><map name="maparea">  <area shape="rect" coords="0,0,100,100" href="link1.html" alt="First Area" />   </map>\`
            `,
             explanation: `
An image map allows for different parts of an image to be clickable, creating links to different destinations. It requires the use of <map> and <area> tags.
            `,
               codeExample: `<img src="image.png" alt="map" usemap='#areamap'> <map name='areamap'>  <area shape="rect"  href='index2.html'   coords='10,10,100,100'/>  </map> `
        },
         {
           id: 12,
           question: "Which characters do you utilize and How to render special symbols or characters like the copyright sign, with an appropriate entity name or character code within an HTML document?",
            answer: `
Special character or Symbols are rendered using HTML entity codes. For example: The entity name \`©\` or the numeric entity \`©\` can represent a copyright symbol (©).
            `,
            explanation: `
HTML entities are used to display special characters that are not part of the standard character set or have a special meaning in HTML, like <, >, and &.
            `,
                codeExample: ` <p> copyright  symbol using © or by © </p>`
        },
        {
            id: 13,
            question: "With relevant elements give and an explanation about, how does an `iframe` element contributes towards displaying a webpage within an HTML document.",
             answer: `
The \`<iframe>\` (inline frame) tag displays another HTML page within the current page. It takes an attribute \`src\`, which has url like \`<iframe src="other_page.html" height="500px" width="600px"></iframe>\` to displays an HTML page \`other_page.html\` within the frame.
            `,
             explanation: `
The iframe tag allows you to embed another HTML document within the current HTML document, acting as a sub window.
            `,
               codeExample: `<iframe  src='otherpage.html'  width='600px' height='400px'></iframe>`
        },
        {
           id: 14,
            question: "While coding and keeping things organised, specifically lists, how can code indents in the HTML file helps in clarity and readability ?",
            answer: `
By aligning tags inside list structures (for instance under \`<ol>\` or \`<ul>\`) it visually separates out parts and enables clear comprehension, structure and easier to work with nested HTML element code structure.
            `,
            explanation: `
Indentation in HTML code improves readability, making it easier to understand the structure and hierarchy of the document.
            `,
              codeExample: ` <ol>  <li> Item 1  </li>  <ul><li> item 1 a</li>  </ul></ol>  \n <ul>  <li> item a  </li> </ul>`
        },
          {
            id: 15,
            question: "Provide example demonstrating an implementation for links in a html document to be not restricted to texts and include with appropriate markup, what other element may they appear.",
             answer: `
Links can appear in text such as \`<a href="target.html"> text based links </a> \` or appear over images: \`<a href="target.html"> <img src="example.png"> </a> \`, using an \`<a>\` tag and providing destination using an \`href\` attribute, that wraps over the other tag (img), rather than simply in text form
            `,
              explanation: `
Links can be applied to various types of elements, not just text. You can also use links on images and other HTML elements by wrapping those tags around it.
            `,
                codeExample: `<a href='#target'> jump over target </a> <a href='another.html'>  <img src='myImage.png'/> </a> `
        },
        {
            id: 16,
            question: "Define in HTML the purpose of `style sheets` or generally `css`, in terms of content structure and visual presentations?",
            answer: `
A style sheet or Cascading Style Sheet(CSS), defines the visual layout, design, fonts, colors etc of an HTML content, allowing to manage consistent appearance throughout all HTML elements and maintain content presentation from document's markup.
            `,
              explanation: `
CSS (Cascading Style Sheets) is used to style HTML elements. It controls the appearance, layout, and design of web pages, separating style from content.
            `,
               codeExample: `<style> div {background-color:lightblue}</style>`
        },
         {
             id: 17,
            question: "Is creating a multicolour text on an HTML document doable?  give a demonstration or methodology that show a tag method (non recommended style usage of it), or prefer CSS implementation instead.",
            answer: `
You can achieve multicoloured text either by \`font\` tag's color attribute: \` <font color="red">Text in red color</font> <font color="blue"> Text in blue color </font> \` (note: deprecated approach) and using preferable CSS method, i.e \`<span style="color:red">text in red</span> <span style="color:blue"> text in blue </span>\`
            `,
            explanation: `
You can create multi-colored text by applying different styles to different parts of the text. This can be done using inline styles or CSS.
            `,
            codeExample: ` <font color='red'> text in red  </font> <span style='color:blue'> and blue color</span>`
        },
         {
            id: 18,
            question: "What method can be utilized to affect bullet colors inside the unordered `ul` and `li` HTML elements?",
            answer: `
Typically, a bullet point will take a color inherited by color setting of text, such as first text of an \`li\` in list \`<ul><li><span style='color:red'>List Item</span></li></ul>\` Or using more customizable \`list-style-type\`, \`list-style-image\`, with the CSS to adjust bullet color and appearance (\`li{ list-style-color:red}\`).
            `,
            explanation: `
The color of bullet points in lists can be controlled through CSS by setting the list-style-color property or by setting color on a text inside the list item.
            `,
             codeExample: `<ul style='color:red;'>  <li> item with style in root, child may inherit color too</li>   </ul> <ul> <li style='list-style-color:blue;'>  List item with blue</li>  </ul>`
        },
        {
            id: 19,
            question: "Name four common HTML elements in a web document that establishes a typical webpage and layouts?",
            answer: `
The common HTML layout elements are \`<header>\`, \`<nav>\`, \`<main>\`, \`<footer>\` along with \`<aside>\`, \`<section>\` \`<article>\`, that help divide a web document and arrange structure based on importance and visual organization.
            `,
             explanation: `
Common HTML layout elements include <header>, <nav>, <main>, and <footer> which help to structure the basic parts of a webpage.
            `,
              codeExample: `<header> Top Section </header><main>  Main document context <article> ...</article></main> <nav>navigation </nav> <footer> footer ... </footer>`
        },
        {
           id: 20,
            question: "What does the HTML tag `<marquee>` allows the document with animated text elements in an html doc, and what can it scroll over a document?",
            answer: `
The \`marquee\` element facilitates a webpage element scrolling behaviour. Texts or images scroll over a document (automatically), like in left-to-right, or from top-to-bottom etc using its internal markup elements(\` <marquee> text/element to scroll </marquee>\`).
            `,
            explanation: `
The <marquee> tag was used to create scrolling text or images. However, it's not recommended due to limited control and accessibility issues.
            `,
             codeExample: ` <marquee  direction='right' scrollamount='12'> Example text using Marquee, showing in horizontal way and can specify speed as attribute ( but this style of display not used )</marquee>`
        },
        {
            id: 21,
            question: "Can you list HTML tags to organize and provide section separation for any web text content?",
           answer: `
HTML elements used to separate texts include: \`<br>\` (for line breaks), \`<p>\` (for paragraph separations), and \`<blockquote>\` to isolate a long quoted section from surrounding text content.
            `,
            explanation: `
The <br>, <p>, and <blockquote> tags are used to separate and organize text content on a webpage.
            `,
            codeExample: ` <p> Text separated using different section elements <br> using  br tags</p>  <blockquote> Block Quote <br/> new lines or breaks from inside or from new quote in the text view </blockquote>`
        },
        {
            id: 22,
            question: "With a small example give html snippet with tag and attributes to display background picture of a given page",
             answer: `
To apply background-image \`<body style="background-image: url('image.jpg');">\`, where the file location/url is the image. Or better use css \`<body style="background-color:lightblue" class="setBackground"></body> <style> .setBackground{ background-image:url('path/image.png'); }</style>\`
            `,
            explanation: `
To set a background image for a page, use the style attribute with the background-image property, or through a CSS style sheet.
            `,
            codeExample: `<body style='background-image:url(image.png)' class='newbackstyle'  ><style> .newbackstyle{ background-repeat: no-repeat; background-position:center ; background-size:cover }</style>`
        },
        {
           id: 23,
             question: "Briefly, define empty elements using example for understanding.",
            answer: `
Empty HTML elements like \`<br>\` (line break), \`<hr>\` (horizontal rule) does not enclose or surround any contents so therefore also known as self-closing.
            `,
            explanation: `
Empty elements are those that have only a start tag and no end tag. They are typically used to insert items into the page that do not have content.
            `,
              codeExample: `Horizontal Line<hr/> image resource with image:<img src='any.img'/>`
        },
         {
            id: 24,
           question: "Describe with syntax examples how to highlight a specific text or a block of a content with appropriate html markup tags.",
            answer: `
To format/ highlight small blocks of inline content the \`<span>\` is usually used \`<span style="background-color:yellow"> highlight specific word </span>\`. To highlight section of paragraphs or line use can  use any block tag, wrapping inside a \`<div>\` or \`<p>\`,  \`<div style="background-color:lightgray"><p> block section</p></div>\`
            `,
            explanation: `
You can highlight specific text using the <span> tag with inline styles or the <div> or <p> tags using background style properties.
            `,
                codeExample: `  <span> Specific Text highlighting inside </span> <div style='background-color:green'> <p style='color:white'> highlighted Block Text /Paragraph  </p> </div> `
        },
         {
            id: 25,
             question: "Demonstrate usage of a relevant tag to insert one web page inside the other",
            answer: `
An \`<iframe>\` facilitates embedding one HTML web page document into another document like \`<iframe src="innerpage.html" width="800px" height="600px"> </iframe>\`, embedding a \`innerpage.html\`.
            `,
            explanation: `
The <iframe> tag is used to embed another HTML document into the current one, acting like a window within the webpage.
            `,
              codeExample: `<iframe src='otherdoc.html' width='100%' height='600px'>`
        },
         {
             id: 26,
            question: "State what characters and purpose HTML entity fulfill, for correct markup.",
            answer: `
HTML entities are special sequence of characters which are placeholders for non keyboard chars. And are especially to show/reserve special characters to markup, For example: the \`<\` can't be written directly so to render that html's code for such markup  \`<\` will be used to display that
            `,
             explanation: `
HTML entities are used to display reserved characters (like < and >) and special symbols on a webpage.
            `,
               codeExample: `  <p> To represent < as <,  >  as > & as & </p>`
        },
         {
           id: 27,
           question: "Provide a reason or an explanation why a Uniform resource location string require encodings within the scope of HTML markup implementation.",
            answer: `
Because URLs send info only through ASCII charset, a url contains characters out of the ASCII (Non Ascii characters), so characters not belonging in the valid URL pattern need converting (encode). Encoded characters, convert invalid patterns like \`"space"\` or \`"$"\` , to \`%20\`, or \`%24\` so URL's transfers across systems will be correct.
            `,
             explanation: `
URLs need encoding because they only support the ASCII character set, which means certain characters must be converted into their encoded representation to ensure proper transmission.
            `,
             codeExample: "None"
        },
         {
            id: 28,
            question: "Does `<!DOCTYPE html>` is part of the Html's document's structural tag ? give the reason?",
            answer: `
\`<!DOCTYPE html>\` is not an actual tag nor any Html element its just an declaration of document-type and has no HTML role and therefore, it does not mark-up an element. This indicates browser to display that document under specified markup standard or html document format.
            `,
             explanation: `
The <!DOCTYPE html> declaration is not a tag; it's an instruction to the browser about the HTML version used in the document and not a part of html content section.
            `,
              codeExample: `<!DOCTYPE html> `
        },
         {
           id: 29,
           question: "Define using HTML syntax the Canvas Element purpose inside the html file with explanation?",
            answer: `
\`<canvas id="examplecanvas" height="300px" width="500px"></canvas>\`, a canvas, or rectangle shape acts as container that holds graphics drawn on an HTML page with javascript by API such as by providing paths, shapes etc through a \`CanvasRenderingContext2D\` API that is associated with a context (\`getContext()\`), making shapes visible
            `,
            explanation: `
The <canvas> element is a container for graphics and is used for drawing 2D shapes, animations, and images.
            `,
             codeExample: ` <canvas width=200 height=100></canvas>`
        },
          {
             id: 30,
            question: "Define SVG within HTML implementation along with the structural or xml characteristics",
           answer: `
Scalable Vector Graphics (SVG) are used for vector based graphics described in an XML format and its \`svg\` structural form starts with \`<svg> <circle></circle> ... <polygon></polygon> ... <text> ... </text></svg>\` format, whose shape properties defined using attributes can scale in resolution
            `,
            explanation: `
SVG (Scalable Vector Graphics) is an XML-based vector graphics format used for displaying two-dimensional graphics on web pages and scale without losing quality
            `,
                codeExample: ` <svg width=100 height=100> <circle  cx=50 cy=50  r=20 fill=red/></svg> `
        }]}
         