class ElementLoader extends HTMLElement {//or any othere element you want
    contructor() {
        //super()//to call the parent class contructor
        this._root = this.attachShadow({ mode: "open" })
    }//attach a shadow dom for easy manipulation
    connectedCallback() {
        const contentUrl = this.getAttribute("src");
        var req = new XMLHttpRequest();
        req.open("GET", contentUrl, false); // 'false': synchronous.
        req.send(null);
        this.innerHTML = req.responseText;
        this.childNodes.forEach(n => { this.parentElement.insertBefore(n, this); });
        // this.parentElement.removeChild(this);
    }
    disconnectedCallback() {
        //runs everytime the element is removed from the dom
    }
    adoptedCallback() {
        //runs everytime the element is moved
    }
    attributeChangedCallback(nameOfAtr, oldValue, newValue) {
        //runs everytime the elements attributes are changed in any way
    }
 
}
window.customElements.define("x-", ElementLoader)//to add the custom element and be able to add in in html 
class ContentLoader extends HTMLElement {
    contructor() {
        //super()//to call the parent class contructor
        this._root = this.attachShadow({ mode: "open" })
    }//attach a shadow dom for easy manipulation
    connectedCallback() {
        //runs code everytime the element is used on the html page
        // console.warn("****************** connected")
        const contentUrl = new URLSearchParams(window.location.search).get('c')+".html";
        var req = new XMLHttpRequest();
        req.open("GET", contentUrl, false); // 'false': synchronous.
        req.send(null);
        this.innerHTML = req.responseText
        this.childNodes.forEach(n => this.parentElement.insertBefore(n, this));
    }
}
window.customElements.define("c-", ContentLoader)//to add the custom element and be able to add in in html 
 
