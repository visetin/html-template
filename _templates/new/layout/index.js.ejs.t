---
to: <%= path %>/index.js
---
const <%= h.changeCase.camel(prefixedName) %> = (element) => {
  if (!element) {
    return;
  }
};

export const mount<%= h.capitalize(h.changeCase.camel(prefixedName)) %> = () => {
  const elements = [...document.querySelectorAll('.<%= prefixedName %>')];
  
  elements.forEach(<%= h.changeCase.camel(prefixedName) %>);
};

export default <%= h.changeCase.camel(prefixedName) %>;
