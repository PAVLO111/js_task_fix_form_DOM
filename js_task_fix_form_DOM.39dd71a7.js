"use strict";var inputAll=document.querySelectorAll("input");inputAll.forEach(function(e){var t=e.getAttribute("name"),l=t[0].toUpperCase()+t.slice(1),r=document.createElement("label");r.className="field-label",r.setAttribute("for",e.id),r.textContent=t,e.placeholder=l,e.before(r)});
//# sourceMappingURL=js_task_fix_form_DOM.39dd71a7.js.map
