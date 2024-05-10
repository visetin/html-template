---
to: <%= path %>/template.pug
---

mixin <%= h.changeCase.camel(prefixedName) %>(props)
  -
    const baseClasses = ['<%= prefixedName %>'];
    const attrs = {
        class: [...baseClasses]
    };

  div&attributes(attrs)
    block
