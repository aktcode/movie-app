import { titlesData } from "../components/data/movies";

/**
 * Get titles divided into rows
 * @param {array} allTitles 
 * @param {integer} titlesPerRow 
 * @returns array
 */
export function getAllTitleRows(allTitles, titlesPerRow = 5){
    let finalArray = [];

    for(let i=0; i<allTitles.length; i+=titlesPerRow){
        finalArray.push(allTitles.slice(i, i+titlesPerRow))
    }

    return finalArray;
}


/**
 * Filter out titles based on their type
 * @param {string} type 
 * @returns object
 */
export function getTypeBasedTitles(type){
    if(type){
        return titlesData.filter(x => x.Type == type);
    }
    return titlesData;
}
