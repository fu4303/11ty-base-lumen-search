import{Suggestions as n}from"./suggestions.js";export default class e extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:"open"});n.innerHTML='\n<style>\n  :host {\n    display: flex;\n    align-items: center;\n  }\n  form {\n    position: relative;\n  }\n  ul {\n    position: absolute;\n    background: white;\n    display: none;\n    max-width: 90vh;\n    overflow-y: auto;\n    list-style: none;\n    padding: 0.5em;\n    margin: .5em 0;\n    width: 100%;\n    box-shadow: 0 2px 3px #0003;\n    border: solid 1px #0003;\n    border-top: none;\n  }\n  ul.is-open {\n    display: block;\n  }\n  li {\n    padding: .5em 1em;\n  }\n  li.is-focused {\n    background-color: var(--lightgray);\n  }\n  input {\n    padding: .5em;\n    background: none;\n    border: solid 2px var(--darkgray);\n    border-radius: 4px;\n  }\n</style>\n<form>\n  <label>\n    Search:\n    <input type="search" name="search">\n  </label>\n</form>\n',this.form=n.querySelector("form"),this.results=n.querySelector("ul")}async connectedCallback(){const e=this.getAttribute("url"),t=await fetch(e),o=await t.json(),a=new n(this.form),s=this.form.search;a.load(o),a.attachInput(s),s.addEventListener("suggestions:select",(n=>{s.value="";const e=n.detail;document.location=e.data.value}))}}customElements.define("search-box",e);