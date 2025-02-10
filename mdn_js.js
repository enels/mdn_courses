// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {

//     if (btn.textContent === "Start Machine") {
//         btn.textContent = "Stop Machine";
//         txt.textContent = "The machine was started";
//     }
//     else {
//         btn.textContent = "Start Machine";
//         txt.textContent = "The machine is stopped.";
//     }
    
// }

// Populate the list
// const list = document.querySelector(".output ul");
// list.textContent = "";

// const greetings = ["Happy Birthday", "Merry Christmas my love", "A happy Christmas to all the family", "You\' are all I want for Christmas", "Get well soon"];

// for (const greeting of greetings) {

//     if (greeting) {
//         const listItem = document.createElement("li");
//         listItem.textContent = greeting;

//         // test it's a christmas message
//         if (greeting.includes("Christmas"))
//             list.appendChild(listItem);
//     }


// }

// Exercise
// const list = document.querySelector(".output ul");

// list.textContent = "";

// const cities = ["London", "ManCHESTer", "BirRmiNGHAM", "LIVERpOOL"];

// for (const city of cities) {

//     // create the list item
//     let listItem = document.createElement("li");

//     // convert city to lower case chars
//     let cityLower = city.toLowerCase();

//     let firstChar = cityLower.slice(0, 1);

//     // change the firsst character to upper case
//     let cityNormal = cityLower.replace(firstChar, firstChar.toUpperCase());

//     listItem.textContent = cityNormal;

//     list.appendChild(listItem);
// }

const list = document.querySelector('.output ul');

list.textContent = "";

const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];


const str = "MAN675847583748sjt567654;Manchester Piccadilly";

for (const station of stations) {

    // get the index of the semi-colon seperator.
    const seperatorIndex = station.indexOf(";");

    // get the city name
    const cityName = station.slice(seperatorIndex+1)

    // get the city first 3 letters abbreviation
    const cityAbbr = station.slice(0, 3)

    // concatenate the two string
    const newStr = cityAbbr + ": " + cityName;

    // create and append the item in the newly created list
    const listItem = document.createElement("li");
    listItem.textContent = newStr;
    list.appendChild(listItem);
}