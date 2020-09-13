import "./club-item.js";

class ClubList extends HTMLElement{
    set clubs(clubs){
        this._clubs=clubs;
        this.render();
    }
    renderError(error){
        this.innerHTML ="";
        this.innerHTML += `<h2 class="placeholder">${error}</h2>`;
    }
    render(){
        this.innerHTML= "";
        this._clubs.forEach(club => {
                const clubItemElement = document.createElement("club-item");
                clubItemElement.club=club;
                this.appendChild(clubItemElement)
        });
    }  
   
}
customElements.define("club-list",ClubList);