- attributes(meta-data eg id) vs properties(everything in css)
- setattributes method
- removeattribute
- getattribte - returns the attribute value
- classList.contains => returns a booleans
- const hoverEffects = document.querySelector("p:hover") =>> returns a single value so instead eventhandler
- hoverEffects.style.color = `red`
- document.documentElement =select myself
  
## dom tree traversal
- element.parentNode 
- element.parentElement
> html.parentNode=#document vs html.parentElemnt=null
- element.childNodes = all nodes including line breaks in the html code
- element.children = html collection

> Is it a node selector or element selector
- previousSibling - node selector *spam it less* 
- nextElementsSibling
- previousElementSibling

## EVENTS
### event propagation
> **take aways**
- e = represents all the properties that any event may have
- But by ...('click', _) you are setting a key:value of an object-*Event_object* *{type:click}*
  
> useful utilities
- e.stopPropagation()
- e.target = whoever is eg clicked
- element.appendchild('`variable containing the defined element`')