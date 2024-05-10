---
to: <%= path %>/index.pug
---
<% if (layout) { -%>
extends /layouts/<%= layoutName %>/index.pug

append variables
  -

block title
  title <%= name %>

block header

block body
  .<%= prefixedName %>

block footer
<% } -%>
<% if (!layout) { -%>
include ../../core/lib/pug/index

doctype html
html(lang="ru")
  head
    meta(charset="UTF-8")
    meta(http-equiv="X-UA-Compatible", content="IE=edge")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title <%= name %>

    link(rel="stylesheet", href="css/index.css")

  body.uk-page.<%= prefixedName %>

    script(src="js/index.js")
<% } -%>


