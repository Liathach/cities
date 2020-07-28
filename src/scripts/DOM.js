const DOMfunctions = {

    buildNewCard(node, text) {

        const cardSection = document.getElementById("idCityCard");

        const div = document.createElement('div');

        div.setAttribute('class', 'clCityCards');
        div.setAttribute('id', text.name);
        div.appendChild(document.createTextNode(text.name));

        let cardTitle = document.createElement("strong");
        cardTitle.setAttribute('id', `cardTitle ${text.name}`);
        div.appendChild(cardTitle);

        cardTitle.classList.add("text-center");
        div.appendChild(cardTitle);

        const breakLine1 = document.createElement("br");
        div.appendChild(breakLine1);

        const labelCurrPop = document.createElement("strong");
        labelCurrPop.textContent = "Current Population:";
        labelCurrPop.classList.add("text-center");
        div.appendChild(labelCurrPop);

        const breakLine2 = document.createElement("br");
        div.appendChild(breakLine2);

        let currentPopulation = document.createElement("P");
        currentPopulation.id = `idCityCard ${text.name}`;
        currentPopulation.textContent = text.population;
        // currentPopulation.textContent = text.citySize();
        currentPopulation.classList.add("text-center");
        div.appendChild(currentPopulation);
        
        // const breakLine3 = document.createElement("br");
        // div.appendChild(breakLine3);

        // City Size
        // const citySize = document.createElement("span");
        // citySize.setAttribute("id", `${text.name}citySizeID`)
        // div.appendChild(citySize);

        // const breakLine4 = document.createElement("br");
        // div.appendChild(breakLine4);

        // Hemisphere

        // const hemisphereDisplay = document.createElement("p");
        // hemisphereDisplay.setAttribute("id", `${text.name}hemisphereDisplayID`)
        // div.appendChild(hemisphereDisplay);

        // const breakLine5 = document.createElement("br");
        // div.appendChild(breakLine5);

        const removeCityButton = document.createElement('button');
        removeCityButton.append(document.createTextNode("Remove City"));
        removeCityButton.classList.add("button");
        div.appendChild(removeCityButton);

        const breakLine6 = document.createElement("br");
        div.appendChild(breakLine6);

        node.parentElement.insertBefore(div, node);

        return div;

    },

    citiesDropDownList(text) {
        const dropdownList = document.createElement('OPTION');
        dropdownList.setAttribute('id', text.name);
        dropdownList.appendChild(document.createTextNode(text.name));
        return dropdownList;
    },

    attachDropDown(node, text) {
        const dropdownList = DOMfunctions.citiesDropDownList(text);
        console.log(node);
        node.appendChild(dropdownList, node);
    },

    deleteCityCard(node) {
        node.remove();
    },

};

export default DOMfunctions;