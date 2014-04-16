Markdown here!
==============

Mix [Markdown](http://en.wikipedia.org/wiki/Markdown) with HTML, and have it rendered on the fly by Javascript!

Recipe
------

1. Include [showdown.js](https://github.com/coreyti/showdown) in your HTML. Also include `markdownhere.js` from this repo (or by loading it from `//wafi.iit.cnr.it/webvis/markdownhere/markdownhere.js`), having care to put the `<script>` tag right before the end of the body.
2. Insert Markdown content in whatever HTML element you want, then add the special `x-mdhere` class to it. Take care of removing any unwanted indentation from Markdown code (indented lines are interpreted as code blocks).
3. That's it! Load the page in your favorite browser to see your Markdown turned into HTML. Add CSS to taste. If you want, open the page source to see the original Markdown.

Example
-------

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Markdown here!</title>
        <script src="showdown.js"></script>
    </head>
    <body class="x-mdhere">
This is *Markdown*.
    </body>
    <script src="//wafi.iit.cnr.it/webvis/markdownhere/markdownhere.js"></script>
</html>
```

Demo
----

You can try a demo [here](http://bl.ocks.org/nitaku/10920924).
