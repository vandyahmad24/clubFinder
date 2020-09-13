class AppBar extends HTMLElement{
    connectedCallback(){
        //terpanggil jika element sudah diterapkan dalam dom
        this.render();
    }
    render(){
        this.innerHTML=`<h2>CLub Finder</h2>`;
    }
}

customElements.define("app-bar",AppBar)