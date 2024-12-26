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
        }],   
        "Intermediate": [
        {
            id: 31,
            question: "How are `<div>` and `<span>` HTML elements similar and in what context these grouping tags used, giving real life or coding practical implementation?",
            answer: `Both \`<div>\` and \`<span>\` elements serve as generic containers. \`<div>\` is a block-level container used for sections like header, and footers and so occupies full horizontal width (\`<div style='background-color:#eeeeee'> Header/Footer block element </div>\`) whilst \`<span>\` is an inline container that groups short text like applying a background (\`<p> this <span style='background-color:#aaaaaa'> styled block of text </span></p>\`) , typically using css styling on such spans, or javascript manipulation, when other semantics don't apply.`,
            explanation: ``,
            codeExample: "None"
        },
        {
            id: 32,
            question: "How does IDs (unique IDs) or classes (applied on multiple html elements), differentiate in CSS with respective html attribute implementation along with selection specificator with proper naming methods, providing one usage syntax?",
            answer: `ID, applied uniquely uses the # hash as selector: \`#unique-heading { color:blue;}\` (\`<h1 id="unique-heading"> header text here</h1>\`); Class, may apply on different or multiple elements and use . period prefix as selector. \`.red-button {background-color:red; }\` (\`<button class="red-button"> red-button </button>\`), naming IDs use more specific identifier, classes should convey type or style (eg. 'error-box', 'left-side'.)`,
             explanation: ``,
            codeExample: `<style> #header{color:#ddd}  .bluebtn{ background-color:blue;}</style> <div id='header'>Header section </div> <button class='bluebtn'>Blue Button<button>  `
        },
          {
            id: 33,
            question: "Provide the HTML codes how nested webpages are built with both tag implementation, and discuss, and why they would each use?",
            answer: `An embedded external webpage is achived through \`<iframe>\` : \`<iframe src="other_page.html" width="800" height="400"</iframe>\`, or \`embed\` (\`<embed type="text/html" src="anotherpage.html">\`), that embed another documents inside parent doc, iframe works in separate window space ideal for a completely new doc whereas, embed meant to embedded applications, or multimedia contents in main html.`,
            explanation: ``,
            codeExample: ` <iframe src='innerhtml.html'> page loads inside </iframe>  <embed type='application/pdf' src='externalpdf.pdf'> or to a pdf external or any resources using url. if source document need be to a  non html documents / file`
        },
        {
            id: 34,
            question: "Inside the html header elements provide a list of tags and the role they accomplish for an HTML doc to enable functionalities or document related info to display page appropriately or use it for various other functions?",
            answer: `The head element acts a container of essential data of web pages, including metadata that does not show on main view content page; elements can be : \`<title>\`, \`<meta>\`, \`<link>\` to link CSS files \`<style>\`, to define CSS within header itself, base for defining base urls, and \`<script>\`, that contain or refer code, needed for interactivity on page ( javascript files) or web behaviour control by \`<meta>\` tags.`,
            explanation: ``,
            codeExample: ` <head><title> Main title</title><meta charset='utf-8'> <link rel='stylesheet' src='app.css'/>  </head>`
        },
        {
          id: 35,
          question: "Elaborate what metadata is about and and what is it usage via its appropriate tag in HTML context , emphasizing it importance within html doc and for external agents?",
          answer: `Meta tags (\`<meta>\`) give document information such as page's description, character set (\`<meta charset='utf-8'>\`) viewport \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`, keywords (\`<meta name="keywords" content="html,web page,web programming">\`). These information help search engines with correct indexing, display settings of pages for responsive behaviour but do not directly affect the presentation of main view elements and content itself.`,
            explanation: ``,
            codeExample: `<meta charset='utf-8'/><meta  name='viewport' content='device-width, initial-scale=1.0' ><meta name='description' content='description'  /> `
        },
        {
            id: 36,
            question: "Elaborate an typical HTML layout how these tags and document sections used and their respective element type usage, in a web doc or website's view structure in a hierarchical perspective and use case example in markup of code?",
            answer: `A typical structure has these tag header at top or introduction section \`<header> <nav> </nav> <h1>logo </h1> </header>\`. Then, \`<main>\`, enclosing primary contents with article \`<article> <h2>article 1 title </h2> content for article </article>\` or with various sections using section, content in the side/context \`<aside> ads/ sidebar context </aside>\`, then footer section \`<footer></footer>\` always as a lower end.`,
            explanation: ``,
            codeExample: `<header> <nav> </nav> </header><main><article></article> <aside>  </aside></main>  <footer> </footer>`
        },
        {
            id: 37,
            question: "With real examples, Describe HTML5's sematic structural tags, that improves not just design structure but also how semantic context help different users?",
            answer: `HTML5’s semantic elements convey page section types by meaning: \`<article>\` as self content ,\`<aside>\` to display side content related to main doc, \`<details>\` with \`<summary>\` tag as expandable disclosure widgets , \`<figure>\` with caption \`<figcaption>\`, with \`<nav>\` to hold navigation structure. these provide machine as well user to easily and understand how the parts or divisions of a web doc is composed. (\`<article><header><h3> Blog header of a new article. </h3> <nav> navigation to jump to each section of article</nav> </header> <section> </section> <aside> side comment </aside> <details> <summary> Expand additional details</summary> Details expanded </details> </article>\`).`,
           explanation: ``,
           codeExample: `<article> <nav>  </nav> <div></div><aside> </aside> </article> <header>header</header><main></main><footer> </footer>`
        },
        {
            id: 38,
            question: "Why and what special function do we have for html entities to display non text, reserve, special characters via example implementation in doc to get accurate mark up behaviour ?",
            answer: `HTML entities enable representation of symbols and special chars and HTML elements that browser's can recognize such as to write code as content or reserve keywords which can display properly (for e.g., display \`<\` (\`<\` less-than)), \`>\` (\`>\` greater-than) so markup won't misinterpret or \`<br />\`. And such common ones \`&\` to represent (\`&\` and persand ). \`©\` represents (© Copyright sign) so such non text character can also render with proper representation.`,
            explanation: ``,
            codeExample: `<p> reserved html > characters <p> copy rights  ©`
        },
        {
            id: 39,
             question: "When you need to render various types of icons, characters that normal keymap on keyboards lack, how can they show on webpage content accurately? provide html implementation with symbols like copy, reg and tm?",
             answer: `Use HTML entity codes ( \`©\` ),( \`®\` ) or numeric ( \`™\`) such that correct glyph rendering occur to display copyright, trademarks in a consistent form: (\`<p> Copyright © Reserved. Registered ® Trademarks.</p>\`).`,
             explanation: ``,
             codeExample: `<p>   Copyright  © , Reg symbol ® trade symbol   ™ </p>`
        },
        {
            id: 40,
            question: "How can we add symbols in HTML?",
            answer: `Using HTML entities such as \`©\` for (©), \`®\` for (®), etc., or character codes.`,
            explanation: ``,
             codeExample: `© ® ™`
        },
        {
            id: 41,
            question: "In server communication by sending form submission, compare method that specify two approaches that define transmission pattern (GET, POST method ) in their functionality of use?",
            answer: `GET is to request or to view the resource data through URL parameters. All that URL sends becomes visible, while POST submits or adds new content or submits info to be processed to a defined resource on a web server (\`<form action="" method="post">\`). With Post request data becomes private unlike the URL visible GET approach as such GET request are idempotent (i.e get do not modify state in the server), whilst post typically makes changes/ adds data to data resources (it's not idempotent)`,
            explanation: ``,
            codeExample: `  <form action='serverurl.com' method='post'> Name <input /> Email:  <input/>  <input  type='submit'/></form> and using http URL (method = post sends secure body to web-servers or RESTful apis while get directly from url by querystrings. which becomes also visible, used only in specific cases. post mostly meant for action like a form for adding new or processing contents and user data securely)`
        },
        {
          id: 42,
          question: "For generating complex dynamic visuals inside browser, specifically an rectangular section inside html pages. explain the usage purpose with implementation of HTML canvas to draw graphics that relies mainly on javascript support?",
          answer: `\`<canvas id="myCanvas" width="400" height="300"></canvas>\` is used along javascript drawing context APIs to allow rendering bitmap visuals using java script's 2D rendering API ( for lines, circle, paths). Example \`<script> const canvas= document.getElementById("myCanvas") , const ctx = canvas.getContext('2d') ; ctx.fillRect(0, 0,100,100) </script>\` that draw filled shape.`,
          explanation: ``,
          codeExample: `  <canvas id='can1' width='300' height='300'></canvas><script> const can =document.getElementById('can1');   can.getContext('2d').fillStyle='red';can.getContext('2d').fillRect(20,10,80,60) ;</script> ( Canvas works with bitmaps pixel graphics while another format using vector for its graphical implementation approach of that SVG which you will learn in later questions/ responses from this project).  it allows rendering 2D or Webgl contexts which supports pixel manipulation with html layout integration parts .  its a type rendering region.`
        },
        {
            id: 43,
            question: "What HTML `<svg>` element stands for? What it provides for creation of image content (XML basis ) for usage on webpage or display and highlight advantages over other formats (like gif, jpeg formats)?",
            answer: `SVG stands for Scalable Vector Graphics. and use an xml based textual description that can scale very smoothly with no pixilation and high quality graphics are created such that you zoom, resize but does not blur and its elements also animated with great flexibility over raster or image form such jpeg orgif, allowing them being suitable for precise shapes or scalable visualisations. (pie chart diagrams, responsive icons )\`<svg width="200" height="100"><circle cx="100" cy="50" r="40" fill="blue" /></svg>\` to form circle shapes with text descriptions`,
            explanation: ``,
            codeExample: `<svg  height=500px   width=400px>    <circle cx='50' cy=40  fill='orange'  r=30 /> </svg>(  you get great high-res without pixelsation so better in icon or for maps  )`
        },
        {
           id: 44,
            question: "Mention and describe with one of multimedia formats and HTML implementations which a website may load, store display content related to it using appropriate types on tags and its specific behaviour or feature within browsers?",
            answer: `Multimedia such as .mp4 videos are supported on the page via \`<video>\` element \`<video width="320" height="240" controls><source src="example_video.mp4" type="video/mp4"></video>\`. and can store using the browsers storage options for access and display without online requirements in subsequent visits and is controlled by controls , it handles file types and show in correct display.`,
            explanation: ``,
           codeExample: ` <video controls  height='400' width=400'><source src='./video.mp4' type='video/mp4'>  This browser does not supports </video> `
        },
        {
            id: 45,
            question: "Using browser's feature or capabilities or javascript integration show by code usage or example of API's provided for fetching and updating location based information using available functionalities of device?",
            answer: `The browser gives access of \`navigator.geolocation\` (var geo = navigator.geolocation;) . API method such as \`getCurrentPosition(showPos)\` retrieves latitude longitude using device's location tracking service like \`<p id="show"> </p> <script> function showPos(pos) { document.getElementById("show").innerHTML= "longi: "+pos.coords.longitude+",lati"+pos.coords.latitude}</script> <button onClick='geo.getCurrentPosition(showPos)'>location now </button>\``,
            explanation: ``,
             codeExample: `<button onclick=" var location =  navigator.geolocation.getCurrentPosition((pos)=>{   document.write('my latitude  '+pos.coords.latitude +' my longi '+pos.coords.longitude   )   }) " >  Get Location   </button>`
        },
        {
           id: 46,
            question: "Differentiate Session and local html based storage API's in its persistent scope, purpose of use and key differences between data saving across web application and specific html browser instances or session types?",
            answer: `Session storage, with it is accessible only from currently open tab and lasts till you have it open(\`sessionStorage.setItem('testkey', 'value')\`) local is across sessions(tab closure and opening too, \`localStorage.setItem('localTestKey', 'val');\`), but till browser's or OS local is cleared. session store temp context based data (form info), local is to stored preference user settings. Both allows storage using keys and values ( data strings ).`,
            explanation: ``,
            codeExample: ` <script>  sessionStorage.setItem('isLoggedIn', 'true') // single session, data removal is done  sessionStorage.removeItem() or by clear() method (for each tab ),   or window closure // other persist setting for all types localStorage.setItem('myPrefColor','#f2f2f2') ; when data must available on the user systems / devices  , until user remove explicitly using method in API's , it has methods clear ( for all localStorage.removeItem(myKey)) ( or use clear method )  </script>`
        },
          {
            id: 47,
            question: "Inside HTML, with example implementation and various fields, form input handling capabilities for various common input cases or common type of usecases in various ways?",
            answer: `\`<form>\` contains forms , including different \`<input>\` tag to acquire various data type with specific attribute implementation; input type="text", or password\`<input type="password" />\`, or numeric\`<input type="number" />\`, checkboxes\`<input type="checkbox" />\`, or select from dropdown like \`<select> <option> </option> </select>\` that can collect input with their different usage attributes. (\`<form action="" method="post"> <input type='text'> <input type='number'> </form>\`)`,
           explanation: ``,
            codeExample: `  <form > name <input  />   email <input type=email/> <button> submit </button>   select option:   <select  ><option>option 1</option>   </select></form>`
        },
        {
            id: 48,
            question: "From fundamental design practices discuss purpose doctype, and if omitted can there be any serious implications ? explain with possible scenarios?",
            answer: `doctype is declaration to html's version (eg:\`<!DOCTYPE html>\`), and absence make browsers to operate on quirk mode where they do no follow specific standard so its layout will be inconsistent which will not conform a set standards . A strict DOCTYPE provides browsers follow the intended rendering for standard compliancy`,
            explanation: ``,
            codeExample: `  <!DOCTYPE html> HTML layout for the current file with valid HTML version will provide standardized display view across various different browsers by specific standard layouts. missing means fallback into compatibility modes, and it display might have unexpected behavior .`
        },
        {
            id: 49,
           question: "Inside any html doc can multiple languages exist or implemented for proper character support or usage? give html example by which a lang can be applied properly ?",
            answer: `Language settings in HTML involve attributes such as using in \`<html>\` ( \`<html lang='en'>\`, for a root document language type or \`<html>\` element using \`lang="en"\`. You can then mix languages in \`<span>\`, and \`<div>\` element to include more sections \`<div lang='fr'><p>text</p></div>\` to declare another language. Correct encoding like with \`<meta charset='utf-8'>\` ensures handling special characters that other characters cannot recognize (for accents of diff characters) to appear properly`,
             explanation: ``,
           codeExample: `<html lang='en'><head>  <meta charset='utf-8'> </head><body>  text of content with in eng text     <div lang='de'> German Language context text <p>   French part for document and  <span lang='fr'  >  This is in Frannc text part .     </span><p/>     <br/><br/> </p>  </div>    </body>  </html>`
        },
         {
            id: 50,
            question: "During developement multi lang, multi text sites or documents, provide some common areas that become complex or error prone with considerations, that needs careful implementation or specific approach to follow during developement or designs phase.",
             answer: `Handling character encoding (utf-8) to show each and special glyph and script related char, also text direction ( right to left/ left to right) need proper configuration, also length text might increase with certain other local language format needing different screen space, proper and right localization format to be implemented for numbers date time. These should all to handle properly from the desing and implementation stages.`,
            explanation: ``,
            codeExample: "None"
        },
        {
            id: 51,
            question: "Give examples demonstrating a case by what benefit `data-` attribute becomes, to serve to give more extra custom attributes information on different HTML tags? and how these added attributes help for dynamic implementation purposes or data integration within document context or its state",
             answer: `custom \`data-*\` attribute store info with a unique name using lowercase (\`data-book-id =\`). data are not read or affected from UI layout rendering, \`<li data-item-id="35" data-price=25 class='my_item'> Item </li> <button data-action='addtocart' >Click</button>\` can also stored within js script context or read it (using methods such as \`element.dataset.bookId\` to access data). And can use within script for updating dynamic UI.`,
            explanation: ``,
             codeExample: `<div  data-id='user12' class='selected user'> John </div>   (using javascript const userId = document.querySelector('.user').dataset.id // to get value from javascript/ DOM so html code can associate a data with tags`
        },
         {
           id: 52,
           question: "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
           answer: `HTML5 is based on elements, attributes, tags along with different APIs like canvas, SVG, Web Storage, Web workers etc.`,
           explanation: ``,
           codeExample: ` HTML has various element / and set attribute methods also various APIs provides by html environment where browsers enable those apis through javscript interfaces so different operations or interactions could occur by using methods from those tags`
        },
        {
            id: 53,
            question: "Mention with proper justification a sequence of steps which are very ideal to have or use within a code implementation so a website rendering, downloading and usage gets optimized via css js link?",
            answer: `It’s usually ideal position CSS \`<link>\` in head, for faster first load render, before actual rendering happens , JS \`<script>\` right before body closing,, or with use of \`<async /defer attributes>. This arrangement will also give layout style prior to render and reduce any blocking javascript operations over the body sections by only loading once body contents, visual render or images are being displayed fully with any layout styles applied`,
            explanation: ``,
            codeExample: ` place scripts body end tags using js attributes defer for lazy , load/async as non blocking when content shows so, all main content first so use will render with good UI/ loading by styles etc as these styles will help components in that HTML , using tags such a way, js load also not affect/block the loading but rather does by async when required on browser dom. so <head> <link type='css' href='mystyle' rel='style.css' /></head>  ....   </body> <script  defer='...'  src='index.js'/> . <script  src='scriptasync'  async/></body> is ideal.`
        },
        {
            id: 54,
            question: "For faster downloading and correct rendering of contents , can explain progressive rendering pattern (strategy)? and why such rendering type approach is beneficial within larger filesizes document or rich interactive websites usage ?",
            answer: `The progressive rendering helps render contents to make immediately display (instead wait full download complete ) content such image load as required or only viewports , by delaying the display. Images that can appear after text are being rendered using placeholders for them such \`img loading='lazy' attribute\`. Using this it make website seem interactive and available much more faster. Its advantageous in websites, large files or video streams since those content display much more quicker (like youtube thumbnails, after basic html renders, or article renders then image would appear slowly and progressively).`,
            explanation: ``,
             codeExample: ` Text content display quickly when loading on a page or when a page becomes very large to give users interactions as early possible when layout html loading. when using attribute loading= lazy from view sections, (img), where user might expect layout not showing blank ( or use progressive images format). images in the middle not above (text section should download html elements), first , only visible region parts`
        },
        {
             id: 55,
            question: "Within a responsive websites using images with flexible designs , how attributes are employed with example html syntax (\`srcset\` tag) so various layouts and various resolution based rendering occur according to a screen ?",
            answer: `By the use of \`srcset\`, which will let to display and select an image based on the users screen type size or pixel densitiy with different sized images with various width values , like \`<img src='small.png' srcset='med.png 640w, large.png 1200w', alt='adaptive'>\`. the browser then select by image width, image size. The syntax includes using various url or locations along its pixel density that may or may not depend from eachother but have different pixel count of sizes and pixels densities`,
             explanation: ``,
            codeExample: ` <img src="original_image.png" srcset=" small.png  200w,  medium.png  500w,  large.png 800w   sizes = (min-width=100px  100vw , min-width=300px 50vw, min-width =600px 33vw )   alt=" description of picture using srcset /responsive attribute loading image type"> ( if browser is larger that its also display high definition images, mobile version has much small images). Browser auto select / apply better performance and correct sizes by view properties from this style implementations of HTML image layouts / or content load)`
        },
       {
            id: 56,
             question: "Can you discuss few various implementation technologies that handle generation or composition of content within an HTML webpage using techniques of template and dynamic rendering?",
             answer: `Technologies for generating HTML include Templating like , Jinja (py), Jade / Pug (js), handlebars (js), , such technologies with a template format create the static HTML using special tags , then data variables and expression or other logic can control how contents dynamically render from a JSON api to make content updates dynamically rather by coding static forms and sections`,
             explanation: ``,
             codeExample: `For large site it need an templating engine to reuse part where HTML needs frequent change data values .  such (handlebars /jade) provide that with logic that can handle, each of those (or different templates ) for generating those complex UI elements based on user preferences / or data object response.`
        },
         {
           id: 57,
            question: "Can you elaborate between the basic operational usage distinction or differences between `<canvas>` and `svg` , that helps when selecting type of drawing or rendering for graphical contents and visual output with various specific usage scenario implementation on html document",
            answer: `\`<canvas>\` is raster , or pixels image drawing space (javascript draw bitmap through paths), better for animations or video games (\`ctx.fillStyle = 'blue', fillRect(0,0,20,30)\`) while \`svg\` (xml based scalable formats), works more efficiently when size / resolution needs resizing or precise geometric forms are there or using scalable shapes, vector graphics icons (\`<svg width='20' height='20' > <rect> </svg>\`). They use different mechanism and canvas based usage, is less scalable over zoom then svg rendering with xml descriptions , svg element properties, as their structure is retained (pixel resolution not). So Canvas are suitable for highly animated games type elements when the speed, pixel control required in a screen by a software app whereas SVG graphics suits to scale precise graphical displays over any resolution change.`,
           explanation: ``,
             codeExample: ` <canvas width=300  height=300 id=myCan ></canvas><script>const myCanvas = document.querySelector('#myCan'); ctx = myCanvas.getContext('2d');  ctx.fillRct(100,50,30,30);   svg has more structured data type and tag based markup when need a single diagram view with single image parts for icon <svg> ... (for shape properties as attribute settings) and can work as reusable in diff layouts and screen, also for scale easily where pixel manipulation via javascript code is not required as they scale smoothly )`
        },
        {
            id: 58,
            question: "In HTML elements (tags), list common tags where any elements in particular void tags can be included. ? List some self closing void tag within implementation examples or any kind usage type they can be seen inside any code implementations?",
            answer: `Void tags / self-closing (\`<br>\`, \`<img>\`, \`<input>\`) are found as child components, can be as attributes as part of form implementation or markup implementations but also never meant as to include another tags rather used to mark space and are structural (or data fetching using input or image, media links). Empty tags can not encapsulate content but still may have required set attributes to specify where content loads. (\`<br>\` to add line-break), or using an src to refer url path`,
            explanation: ``,
            codeExample: ` <img  src='image'  alt='an images of view data'> using \`<img>\` with self closing part with other \`input <input type='number'  />\`, \`<br/>\` used to put new line using html document components `
        },
        {
            id: 59,
            question: "What is an `<audio>` element tag in HTML? how these audio media content tags works when added on webpage implementation, show the structural implementation?",
            answer: `\`<audio controls> <source src="audio.mp3" type="audio/mpeg"> </audio>\` can insert/ add audio files to webpages using mp3 format files, having type (with type="audio/mpeg"), its controls also enabled user interfaces over its display and how the users might manipulate controls playback using different functionalities provided using it's HTML markup \`<source>\`, attribute like its format.`,
           explanation: ``,
            codeExample: `<audio controls width=200 >  <source  type='audio/mpeg' src='/testmp3.mp3' > Audio Not working </audio>( Audio controller from HTML / source element with various formats like ogg , wave and those control playback / load, also provide default view controller.)`
        },
        {
            id: 60,
            question: "Give example html usage pattern how various images or other elements and style properties used within an HTML implementation are bundled and managed as a package within a structure, specifically responsive layouts design techniques by implementing style, assets or data within the HTML code itself?",
            answer: `With HTML, Images (img), videos(video) or any complex component implementation can adapt using different approach and tech including : \`<link rel='stylesheet' href='./main.css'>\` (external stylesheet management), (\`<img src='...' class='adaptive' alt='img' srcset='...'>\`) with media screen settings, and can combine inline and data tag such as: (\`<div style='color:#fff; background:#000'>\` with additional inline stylings or \`<input type='text' data-info='helpinfo'><script></script>\` to make a whole custom setup, such responsive design approach allow better mobile handling of layout, flexible size adjustments as screen changes.`,
            explanation: ``,
           codeExample: ` <style>.imgres {   max-width: 300px;   display: block ;   } </style>   <img src='responsive-img.png' alt='adaptive image'   sizes = '(max-width: 400px) 100vw, 30vw' srcset = ' small-size-1.png  200w , med-size-2.png  400w  large-size.png 800w  class =imgres'  >( HTML elements can be styled by attribute or styles within tags and other tags, so specific styling for HTML could apply either way ( CSS or local inline with layout structure and tag ) where JS/ or server / client app data binding or control with properties , and it’s always better that layout rendering should have from layout sheet / or from a html external styling file rather inlines with html attributes ( styles ) to have consistency, unless specific cases require so ), , in this way responsive can render view different from all data parts`
        }
    ],
     "Advance": [
       {
            id: 61,
            question: "What is the benefit of collapsing the white space in HTML?",
            answer: `Collapsing whitespace reduces the file size and improves download speed by removing unnecessary characters like spaces, tabs, and line breaks.`,
            explanation: ``,
             codeExample: ` Multiple spaces/newlines etc does render single whitespace <br/>        <div>    test string and other     <br/> more section or space </div>`
        },
        {
           id: 62,
            question: "What is the use of the MathML element in HTML5?",
            answer: `MathML (Mathematical Markup Language) is used to display mathematical equations and formulas in web browsers.`,
            explanation: ``,
            codeExample: `  <math><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo> <mn>2 </mn></mrow> </math> `
        },
        {
            id: 63,
            question: "Is it possible for the text to occasionally appear elsewhere other than the browser?",
            answer: `By default browser wraps the text, but text within a table cell of a fixed width can go outside of the browser window.`,
            explanation: ``,
             codeExample: `<table>  <tr> <td width=200px  >  A very long line of test test tes tests test test text. it would not be able to show within specified element  </td>    </tr> </table>   Using fixed  table  view   content layout or structure ( this also will have effect in non table structures as a rendering view issue ) and layout property set with more text `
        },
        {
           id: 64,
            question: "In terms of style sheets, what is the hierarchy that is being used?",
            answer: `Inline styles > Internal (Embedded) Styles > External styles.`,
            explanation: ``,
            codeExample: "None"
        },
        {
          id: 65,
            question: "Compare and contrast an HTML specification with a browser’s implementation.",
            answer: `Specifications are what we follow when we code and browser implementation is how different browsers interpret those specifications.`,
            explanation: ``,
            codeExample: "None"
        },
        {
            id: 66,
            question: "Can elements from articles be found in sections? Can a section element be found in an article? Give usage illustrations.",
            answer: `Yes, articles can be within sections, and sections can be within articles; they are meant to denote content structure and hierarchy. Example - News Section within a webpage may contain articles and an article may have sections like comment section`,
           explanation: ``,
           codeExample: `<section> <article>  <h2>article </h2>    <section>   <h3> Section /comments here inside the blog part </h3>     </section>     </article></section>  Also HTML is flexible in these ways to structure parts correctly`
        },
        {
           id: 67,
            question: "What is an SVG tag in HTML?",
            answer: `The SVG (\`<svg>\`) tag embeds Scalable Vector Graphics into an HTML document. It's XML-based, zoomable without loss of quality.`,
            explanation: ``,
            codeExample: `<svg width="100" height="100">\n <circle cx="50" cy="50" r="40" stroke="black" fill="red" />\n</svg>`
        },
        {
            id: 68,
            question: "What is the difference between meter and progress tag?",
            answer: `The \`<progress>\` element displays the completion progress of a task while the \`<meter>\` tag shows a scalar measurement within a specific range.`,
            explanation: ``,
             codeExample: `  <meter value='100'   max='150'   min= '10' low=25    optimum = 105 >  Space </meter><br>  progress with value<progress value='25'  max='100'></progress>   and  that html can create UI progress based value as its percentage based of an html components to display UI and related states from js event action and operations.`
        },
        {
           id: 69,
            question: "How can website assets be optimized?",
            answer: `Assets can be optimized by compressing images, minifying CSS and JavaScript, using a CDN, and lazy-loading.`,
            explanation: ``,
            codeExample: "None"
        },
        {
            id: 70,
            question: "What is the Data Transfer API?",
            answer: `The Data Transfer API enables copying and pasting or transferring data between applications in a system.`,
            explanation: ``,
            codeExample: "None"
        },
         {
            id: 71,
             question: "What does HTML5’s application cache do, and why is it necessary?",
             answer: `HTML5 application cache stores website resources locally, enabling offline access. It's a crucial component for building web applications with offline functionalities.`,
             explanation: ``,
            codeExample: ` Add <html manifest='site.appcache' ( manifest files has caching parameters , resource list on CACHE or NETWORK or other rules and those are listed/described for browsers ) > with caching file to enable this behavior for that URL path from which web page/ resource access those with an appropriate settings files. that enables local browsing even if servers are inaccessible at some moment for such defined local web path.`
        },
        {
            id: 72,
            question: "What does an HTML5 web worker do?",
            answer: `Web workers enable running JavaScript in the background, off the main thread, allowing for smoother UI by handling complex operations without blocking the rendering.`,
            explanation: ``,
            codeExample: ` using new Worker (test-file.js); a  thread type separate context operations runs using this call / operation as event/response types for better parallelized code or operations outside the view area thread for resource or for calculation (web pages runs single threads by default. Web-workers provide ways that it use multithread behavior / model so that heavy CPU task in page do not slowdown main ui ) as async operation `
        },
        {
           id: 73,
            question: "How to specify the metadata in HTML5?",
            answer: `Using \`<meta>\` tags within the \`<head>\` tag of the HTML page, which includes the title, author, description, and keywords.`,
            explanation: ``,
            codeExample: ` <head> <title>Title </title><meta name='description' content='description'/><meta keywords='tag key1 , key2 ,key 3 '> <meta name="viewport" content="width=device-width"> </head> Meta provide metadata , or properties for tags ( title etc. ) they add descriptive type or browser related configuration to your web html , and also use by crawlers etc to organize / get document info from page view's main content `
        },
        {
            id: 74,
           question: "What is Microdata?",
            answer: `Microdata is an HTML5 specification for embedding structured data into webpages, enhancing SEO and search results display.`,
           explanation: ``,
            codeExample: ` <div itemscope itemtype="https://schema.org/Product">\n <span itemprop="name">Product Name</span>\n </div>`
        },
       {
            id: 75,
            question: "What is the difference between SVG and Canvas HTML5 elements?",
            answer: `SVG is a vector-based graphics language for shapes, while canvas uses a bitmap. SVG is better for static graphics, while canvas is more suitable for dynamic graphics and animations.`,
            explanation: ``,
            codeExample: ` ( both display images from codes , for rendering parts ,but in different context , one with drawing pixel map another with math geometry drawing descriptions which one with pixels or with resolution independent svg elements which is defined with text descriptions ( XML ), ) svg is more accurate but complex when large set and canvas easy pixel drawings fast animation type, with some data types that has properties defined`
        },
        {
            id: 76,
             question: "What are the custom attributes in HTML5?",
             answer: `Custom attributes are non-standard attributes that start with \`"data-"\` that can be used to add additional data to HTML elements.`,
            explanation: ``,
             codeExample: ` <div data-custom-attribute="custom data"></div> all elements support this style setting ( not style itself but used with javscript) of storing arbitrary strings with custom HTML implementation parts with custom property ( with any property with data-* name/string) `
        },
        {
           id: 77,
            question: "What are the essential goals of the HTML5 specification?",
            answer: `The primary goals of HTML5 are forward and backward compatibility, support for rich multimedia, device independence, accessibility, semantic markup, consistency, and improved security.`,
             explanation: ``,
            codeExample: ` A list with improved standards from backward and forwards, support (multi media) <audio> video <canvas> ( different api / device/ input types/ formats supported to access with different user behaviors with new features / support for mobile with those standards ). better performance all sections , web audio video formats . Accessibility support and structure data support through schema microdata . All new versions target this approach . Semantic tag <article> header <footer>`
        },
        {
            id: 78,
            question: "What is the use of the `<output>` tag in HTML, and what are its attributes?",
            answer: `The \`<output>\` tag displays the results of a calculation, form or JavaScript, with attributes like for, form, and name.`,
             explanation: ``,
            codeExample: `<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">\n <input type="number" id="a" value="0">\n +<input type="number" id="b" value="0">\n =<output name="x" for="a b"></output>\n</form>`
        },
         {
           id: 79,
            question: "What is an anchor tag in HTML?",
            answer: `The \`<a>\` tag defines a hyperlink, with the \`href\` attribute specifying the target URL.`,
            explanation: ``,
            codeExample: `<a href="https://www.example.com">Link Text</a>`
        },
         {
            id: 80,
            question: "What are void elements?",
            answer: `These are elements that do not contain any content, they have only starting tags, and examples include \`<br>\`, \`<hr>\`, \`<img>\`.`,
            explanation: ``,
            codeExample: ` <br><hr/>  <img>  empty or single use html types are listed from here using br , image horizontal lines tag , they wont wrap contents inside it.`
        },
        {
            id: 81,
            question: "How to change an inline element into a block-level element?",
            answer: `By setting the CSS display property to \`block\`.`,
             explanation: ``,
            codeExample: `<span style="display: block;">Inline to Block</span> ( changes text or view area with this method from js or with inline settings to take specific type style from another element with setting block / using flex layout and by different display from css)`
        },
         {
            id: 82,
           question: "How Container tag is different from the Empty tag in HTML?",
            answer: `Container tags come in pairs, while empty tags are self-closing and do not have content.`,
             explanation: ``,
            codeExample: ` <div>Content</div><br>( empty html tag perform its method with attribute values where is other wrap all children content of the document) or components views inside those (or even for layouts that could be set via css also ). <section> </section> <img> single self </button> </section> `
        },
        {
            id: 83,
           question: "What tags are used to separate a section of text?",
            answer: `The \`<br>\`, \`<p>\`, and \`<blockquote>\` tags.`,
            explanation: ``,
            codeExample: `Line Break: <br> \n Paragraph: <p>Paragraph</p> \n Long Quotation: <blockquote> Long Quotation </blockquote> ( those add specific spacing on their components parts or properties which can further extend by attributes like style using html code or with related components ) using a single tags on HTML parts by such tag components `
        },
       {
            id: 84,
           question: "In how many ways you can apply CSS to your HTML file?",
            answer: `Three ways: inline CSS, internal CSS, and external CSS.`,
            explanation: ``,
            codeExample: `style=color in html style inline style > from <head> as embedded <style> select {} > <link type = css style sheet as link > that provides html its appearance. order from top inline highest or more priority over selection than later / lower ( which gives general styles ) CSS file, the order matters. this method helps manage the whole look and properties in a single file where a HTML render page loads these layout/ display style and element from css with HTML components or parts using this method`
        },
         {
            id: 85,
           question: "How to include one CSS file in another?",
            answer: `Using \`@import\` in the CSS file.`,
            explanation: ``,
            codeExample: `@import url("style.css"); that includes one stylesheet from external file location / paths for html with css rule in another file using external styles / properties ( it adds / link one file as a import/ reference to use on other page that's also loading current css page style using @import from one css , using current sheet , where a external resoure css/url linked using relative paths) with some limited use when you have a complex dependency , generally single tag linked / is better.`
        },
        {
           id: 86,
            question: "How can you apply JS in your HTML?",
            answer: `Using the \`<script>\` tag in the \`<head>\` or \`<body>\`, or by referencing an external .js file.`,
           explanation: ``,
             codeExample: `<script type=text/javascript > all inline script here </script> or a src with <script src='main.js' > ( load external js from files , inline is limited small single event purpose from html , while from js make modular logic, or operations ) , those make code or layout and their UI component behavior changes, while script at top may also blocking layout if not required on start display `
        },
        {
            id: 87,
            question: "What are logical and physical tags in HTML?",
             answer: `Logical tags describe the purpose of text, while physical tags affect the look of text, like bold and italics.`,
           explanation: ``,
            codeExample: ` logical - <strong>important info</strong>. or text and strong make those important. Physical - <code> computer code snippets ( for displaying those or making visual formatting , or <strike> delete it ) that mark an elements appearance in HTML structure when those rendered </strike> using different type methods / attributes`
        },
        {
            id: 88,
             question: "What is MathML in HTML5?",
            answer: `MathML is a markup language for mathematical expressions, represented within \`<math>\` tags in HTML5.`,
            explanation: ``,
             codeExample: ` <math><mrow> <mi>x</mi> <mo> + </mo> <mi>y </mi> <mo> = </mo> <mn>3 </mn> </mrow> </math> ( this create scientific related data format or for equations inside HTML ) so visual renders math / numbers/ char set inside a HTML view  `
        },
         {
            id: 89,
            question: "What is the difference between `<html lang=”en”>` and `<html lang=”en-US”>`?",
             answer: `\`<html lang=”en”>\` specifies the language as English, while \`<html lang=”en-US”>\` specifies it as English (United States).`,
           explanation: ``,
            codeExample: `<html lang="en"></html> <html lang="en-US"></html>`
        },
       {
            id: 90,
           question: "How to create scrolling text or images on a webpage?",
             answer: `Using the \`<marquee>\` tag (though this is deprecated).`,
           explanation: ``,
            codeExample: ` <marquee behavior='scroll' loop = -1 scrolldelay =15 > Scrolling text/ content with a speed settings on different loop value </marquee> it runs only with view layout where such structure is set with it properties which browsers supports from those tag properties `
        }
    ]
}
