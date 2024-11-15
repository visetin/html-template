---
to: <%= path %>/template.pug
---

mixin <%= h.capitalize(h.changeCase.camel(name)) %>(props = {})

  div
    block
