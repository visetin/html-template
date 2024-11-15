---
to: <%= path %>/template.pug
---
block variables
  -
    extraBodyTagClasses = [];

-
  bodyTagClasses = ['<%= name %>', ...extraBodyTagClasses].join(' ');


doctype html
html(lang="ru")
  head
    meta(charset="UTF-8")
    meta(http-equiv="X-UA-Compatible", content="IE=edge")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    block title

    link(rel="stylesheet", href="css/styles.css")

  body(class= bodyTagClasses)
    block body

    script(src="js/bundle.js")
