import "../component/club-list.js";
import "../component/search-bar.js";
import DataSource from '../data/data-source.js';

const main = () => {

    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result)
        } catch (error) {
            fallbackResult(error)
        }
    }

    const renderResult = results => {
       clubListElement.clubs=results;
    }


    const fallbackResult = message => {
        clubListElement.renderError(message);
    }

    // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;