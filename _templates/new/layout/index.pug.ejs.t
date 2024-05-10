---
to: <%= path %>/index.pug
---
block variables
  include ../../core/config/pug/vars

include ../../core/lib/pug/index

doctype html
html(lang="ru")
  head
    meta(charset="UTF-8")
    meta(http-equiv="X-UA-Compatible", content="IE=edge")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    block title

    link(rel="stylesheet", href="css/index.css")

  body.uk-page.<%= prefixedName %>

    script(src="js/index.js")
