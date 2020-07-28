import DOMfunctions from './DOM.js';
import ooStuff from './cities.js';

let TownControls = new ooStuff.CityControls();
let i = 0;

document.body.addEventListener("click", (e) => {

    if (e.target.nodeName === 'BUTTON') {

        if (e.target.textContent === "Add City") {

            const cardSection = document.getElementById("idCityCards");

            let div = document.createElement("div");

            cardSection.appendChild(div);

            if (idCityName.value.length > 0 && idInitPop.value.length > 0) {
                TownControls.addCity(idCityName.value, Number(idInitPop.value));
                // TownControls.citySize(idCityName.value, Number(idInitPop.value));
                DOMfunctions.buildNewCard(idCityCards, (TownControls.cityArray[i]));
                DOMfunctions.attachDropDown(idDropDown, (TownControls.cityArray[i]));
                i++;
                idCityStatusMsg.innerText = `The total population of all cities is ${TownControls.getTotalPopulation()}`;
                clearFields();
            }

        } else if (e.target.textContent === "Move In") {

            if (lengthCheck() > 0) {
                TownControls.moveIn(idDropDown.value, Number(idAmount.value).toFixed(2));
                // TownControls.citySize(idCityName.value, Number(population));
                updateCity();
                idCityStatusMsg.innerText = `The total population of all cities is ${TownControls.getTotalPopulation()}`;
                clearFields();
            }

        } else if (e.target.textContent === "Move Out") {

            if (lengthCheck() > 0) {
                TownControls.moveOut(idDropDown.value, Number(idAmount.value).toFixed(2));
                // TownControls.citySize(idCityName.value, Number(population));
                updateCity();
                idCityStatusMsg.innerText = `The total population of all cities is ${TownControls.getTotalPopulation()}`;
                clearFields();
            }

        } else if (e.target.textContent === "Remove City") {

            TownControls.removeCity(event.target.parentElement.id);
            idCityStatusMsg.innerText = `The total population of all cities is ${TownControls.getTotalPopulation()}`;
            DOMfunctions.deleteCityCard(event.target.parentElement);

            let dropDown = event.target.parentElement.id;

            let counter = 0;
            for (let n = 0; n < idDropDown.length; n++) {

                if (dropDown === idDropDown[n].id) {
                    counter = n;
                }
            };
            idDropDown.removeChild(idDropDown[counter]);
            return i--;


        } else if (e.target.textContent === "Lowest City Population") {

            idCityStatusMsg.innerText = `The lowest city and population is ${TownControls.lowestPop()}`;


        } else if (e.target.textContent === "Highest City Population") {

            idCityStatusMsg.innerText = `The highest city and population is ${TownControls.highestPop()}`;


        } else if (e.target.textContent === "Total City Populations") {

            idCityStatusMsg.innerText = `The total population of all cities is $${TownControls.getTotalPopulation()}`;

        } else if (e.target.textContent === "Most Northerly City") {

            idCityStatusMsg.innerText = `The most northerly city is ${TownControls.mostNortherly()}`;

        }else if (e.target.textContent === "Most Southerly City") {

        idCityStatusMsg.innerText = `The most southerly city is ${TownControls.mostSoutherly()}`;

    }
    } 
    }
);

function clearFields() {
    idCityName.value = "";
    idInitPop.value = "";
    idLat.value = "";
    idLong.value = "";
    idAmount.value = "";
    idDropDown.value = "Select";
};

function lengthCheck() {
    return idAmount.value.length;
};

function updateCity() {
    let index = TownControls.cityArray.findIndex(cityFinder => cityFinder.name === idDropDown.value);
    let updatePopulation = TownControls.cityArray[index].name;
    let counter = 0;
    for (let n = 0; n < idDropDown.length; n++) {

        if (updatePopulation === idDropDown[n].id) {
            counter = n;
        }
    };
    if (updatePopulation === idDropDown[counter].value) {
        document.getElementById(`idCityCard ${updatePopulation}`).textContent = TownControls.cityArray[index].population;
    }
};