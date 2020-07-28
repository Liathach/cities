// Account class

class City {

    constructor(name, population, lat, long) {
        this.name = name;
        this.population = population;
        this.lat = lat;
        this.long = long;

    }

    show(number) {
        this.population = Number(number);
        return this.population;
    }

    movedIn(number) {
        this.population += Number(number);
        return this.population;
    }

    movedOut(number) {
        this.population -= Number(number);
        return this.population;
    }

    howBig() {
        return this.population;
    }

    whichHemisphere() {
        if (this.lat > 0) return "Northern Hemisphere";
        if (this.lat < 0) return "Southern Hemisphere";

        return "Equatorial";
    }

    citySize() {
        if (this.population > 100000) return "City";
        if (this.population >= 20000) return "Large town";
        if (this.population >= 1000) return "Town";
        if (this.population > 100) return "Village";
        if (this.population >= 1) return "Hamlet";
        return "Ghost Town";
    }
}

class CityControls {
    constructor() {
        this.cityArray = [];
    }

    addCity(name, initPopulation, lat, long) {
        this.cityArray.push(new City(name, initPopulation, lat, long));
        return this.cityArray;
    }

    getPopulation(name) {
        let index = this.cityArray.findIndex(cityFinder => cityFinder.name === name);
        return this.cityArray[index].population();
    }

    getTotalPopulation() {
        let totalPopulation = 0;
        for (let i = 0; i < this.cityArray.length; i++) {
            totalPopulation += Number(this.cityArray[i].population);
        }
        return totalPopulation;
    }


    moveIn(name, amount) {
        let index = this.cityArray.findIndex(cityFinder => cityFinder.name === name);
        this.cityArray[index].movedIn(amount);
    }

    moveOut(name, amount) {
        let index = this.cityArray.findIndex(cityFinder => cityFinder.name === name);
        this.cityArray[index].movedOut(amount);
    }

    removeCity(cityObject) {
        let index = this.cityArray.findIndex(cityFinder => cityFinder.name === name);
        this.cityArray.splice(index, 1)
    }

    highestPop() {
        let highestCityPopulation = 0;
        let highestCityName;
        for (let i = 0; i < this.cityArray.length; i++) {
            let highPopulation = Number(this.cityArray[i].population);
            let cityName = this.cityArray[i].name;
            if (highestCityPopulation < highPopulation) {
                highestCityPopulation = highPopulation;
                highestCityName = cityName;
            }
        }
        return `${highestCityName}: ${highestCityPopulation}`;
    }

    lowestPop() {
        let lowestCityPopulation = Number.POSITIVE_INFINITY;
        let lowestCityName;
        for (let i = 0; i < this.cityArray.length; i++) {
            let lowPopulation = Number(this.cityArray[i].population);
            let cityName = this.cityArray[i].name;
            if (lowPopulation < lowestCityPopulation) {
                lowestCityPopulation = lowPopulation;
                lowestCityName = cityName;
            }
        }
        return `${lowestCityName}: ${lowestCityPopulation}`;
    }

    mostNortherly() {
        // let highestCityLat = -99;
        // let highestCityName = "";
        // for (let i = 0; i < this.cityArray.length; i++) {
        //     let highLat = Number(this.cityArray[i].lat);
        //     let cityName = this.cityArray[i].name;
        //     if (highestCityLat < highLat) {
        //         highestCityLat = highLat;
        //         highestCityName = cityName;
        //     }
        //     // console.log(highestCityName);
        //     // console.log(cityName);
        // }
        return (this.cityArray.reduce((prev, current) => (prev.lat > current.lat) ? prev : current)).name;

        //     const max = this.cityArray.reduce(function(prev, current) {
        //     return (prev.lat > current.lat) ? prev : current
        // });
        //     console.log(max.lat); return;
        //     return (`${max.name}: ${max.lat}`);
    }

    mostSoutherly() {
        return (this.cityArray.reduce((prev, current) => (prev.lat < current.lat) ? prev : current)).name;

    }
    // getMostNorthern() {
    //     if (this.cityArray.length > 0) {
    //         let mostNorthern = this.cityArray[0];
    //         this.cityArray.forEach(value => {
    //             if (value.lat > mostNorthern.lat) {
    //                 mostNorthern = value;
    //             }
    //         })
    //         let string = `${mostNorthern.name} at ${mostNorthern.lat}° latitude`;
    //         return string;
    //     }
    // }

}

export default { City, CityControls }; 