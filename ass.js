"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 2
const names = 'Saba Sarfaraz';
console.log(`Hello ${names}, would you like to learn some Python today?`);
console.log("------------------".repeat(6));
//question 3
console.log(names.toLowerCase());
console.log(names.toUpperCase());
console.log(names[0].toUpperCase() + names.slice(1).toLowerCase());
console.log("------------------".repeat(6));
//question 4
console.log(`A person who never made a mistake never tried anything new.`);
console.log("------------------".repeat(6));
//question 5
const famous_person = 'Elbert Einstein';
const message = 'A person who never made a mistake never tried anything new.';
console.log(`${famous_person} once said, "${message}"`);
console.log("------------------".repeat(7));
//question 6
let NameOfPerson = "\n\tAbdur Rehman\t";
console.log(NameOfPerson);
console.log(NameOfPerson.trim());
console.log("------------------".repeat(7));
//question 7 and 8
console.log(6 + 2);
console.log(12 - 4);
console.log(2 * 4);
console.log(160 / 20);
console.log("------------------".repeat(7));
//question 9
let favNumber = 7;
let message1 = `My favourite number is ${favNumber}`;
console.log(message1);
console.log("------------------".repeat(7));
//question 10
const favNo1 = 9; // 9 no stored in a varibale
console.log(`My favourite number is ${favNo1}`); //Printing fav no with a message 
console.log("------------------".repeat(7));
//question 11
let Names1 = ["Ahmed", "Ali", "Daniyal", "Shayan", "Umer"];
console.log(Names1[0]);
console.log(Names1[1]);
console.log(Names1[2]);
console.log(Names1[3]);
console.log("------------------".repeat(7));
//question 12
const Names = ["Ahmed", "Ali", "Daniyal", "Shayan", "Umer"];
Names.forEach(n => console.log(`Hi, ${n} How are you?`));
console.log("------------------".repeat(7));
//question 13
const cars = ["Civic", "Corola", "Ferrari", "Lambo"];
cars.forEach(c => console.log(`I just want ${c}`));
console.log("------------------".repeat(7));
//question 14
const invities = ['fakhar', 'asif', 'shan', 'babar'];
invities.forEach(i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`));
console.log("------------------".repeat(7));
//question 15
let Invities = ['fakhar', 'asif', 'rizu', 'bobby'];
Invities.forEach(i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`));
console.log(`${Invities[3]} won't be able to come`);
Invities[3] = 'sarfaraz';
Invities.forEach(i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`));
console.log("------------------".repeat(7));
//question 16
Invities.forEach(i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`));
console.log(`I found a bigger table`);
Invities.unshift('haider');
Invities.splice(Math.ceil(Invities.length / 2), 0, 'khurseed');
Invities.push('irfan');
Invities.forEach(i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`));
console.log("------------------".repeat(7));
//quetsion 17
Invities.forEach(i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`));
console.log(`We can only invite only 2 people`);
const len = Invities.length - 2;
for (let i = 0; i < len; i++) {
    const rName = Invities.pop();
    console.log(`${rName} you won't be able to attend the dinner`);
}
Invities.forEach(i => console.log(`${i} you are still invited`));
console.log("------------------".repeat(7));
//question 18
const favPlaces = ["Makkah", "Madina", "Karbala", "Palestain"];
console.log(favPlaces);
console.log(favPlaces.slice().sort());
console.log(favPlaces);
console.log(favPlaces.slice().reverse());
console.log(favPlaces);
console.log(favPlaces.reverse());
console.log(favPlaces.reverse());
console.log(favPlaces.sort());
console.log(favPlaces.reverse());
console.log("------------------".repeat(7));
//question 19
console.log(Invities.length);
//question 20
const arr = ["China", "k2", "Nanga Parbat", "Karachi", "Islamaba", "Chinab", "Satlaj"];
//question 21
let obj = {
    name: "Ahmed",
};
console.log("------------------".repeat(7));
arr[8];
//question 22
//console.log(Obj.age);
console.log("------------------".repeat(7));
//question 23
let car1 = 'subaru';
console.log("Is car1 == 'subaru'? I predict True otherwise I predict False");
console.log(car1 == 'subaru');
console.log(car1 == 'audi');
let number = 23;
console.log("Is number === '23'? I predict True otherwise I predict False");
console.log(number === 23);
console.log(number === "23");
let country = "Pakistan";
console.log("Is country == 'Pakistan'? I predict True otherwise I predict False");
console.log(country == "Pakistan");
console.log(country == "Turkey");
let mobile = "Iphone";
console.log("Is mobile == 'Iphone'? I predict True otherwise I predict False");
console.log(mobile == "Iphone");
console.log(mobile == "Android");
let mattress = "MoltyFoam";
console.log("Is mattres == 'MoltyFoam'? I predict True otherwise I predict False");
console.log(mattress == "MoltyFoam");
console.log(mattress == "DuraFoam");
let pen = "gel pen";
console.log("Is pen == 'gel pen'? I predict True otherwise I predict False");
console.log(pen == "gel pen");
console.log(pen == "ball point");
let book = "Islamic books";
console.log("Is book == 'Islamic books'? I predict True otherwise I predict False");
console.log(book == "Islamic books");
console.log(book == "story books");
let inverterAC = "Dawlance";
console.log("Is inverterAC == 'Dawlance'? I predict True otherwise I predict False");
console.log(inverterAC == "Dawlance");
console.log(inverterAC == "Panasonic");
let programmingLanguage = "TypeScript";
console.log("Is programmingLanguage == 'TypeScript'? I predict True otherwise I predict False");
console.log(programmingLanguage == "TypeScript");
console.log(programmingLanguage == "JavaScript");
let motorCycle = "Honda";
console.log("Is motorCycle == 'Honda'? I predict True otherwise I predict False");
console.log(motorCycle == "Honda");
console.log(motorCycle == "Suzuki");
console.log("----x----".repeat(7)); // for visual clarity
// 24. More conditional tests
let veg1 = "Potato";
let veg2 = "Tomato";
console.log(veg1 === veg2);
console.log(veg1 !== veg2);
let myName = "ALI AHMED";
let lowerCaseString = myName.toLowerCase();
console.log(lowerCaseString === "ALI AHMED");
console.log(lowerCaseString !== "ALI AHMED");
let num1 = 5;
let num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
let g = true;
let h = false;
console.log(g && h);
console.log(g || h);
let stationary = ["Ink pen", "Pencil", "Eraser", "Sharpner", "Scale"];
console.log(stationary.includes("Ink pen"));
console.log(stationary.includes("Ink Pen"));
console.log("----x----".repeat(7)); // for visual clarity
//25 
let alien_color = 'green';
if (alien_color === 'green') {
    console.log('Player just earned 5 points');
}
alien_color = 'red';
if (alien_color === 'green') {
    console.log('Player just earned 5 points');
}
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log('Player just earned 5 points');
}
else if (alien_color !== 'green') {
    console.log('Player just earned 10 points');
}
alien_color = 'green';
if (alien_color === 'green') {
    console.log('Player just earned 5 points');
}
else if (alien_color !== 'green') {
    console.log('Player just earned 10 points');
}
//27 (M Ahmed Raza 30-Sept-2022)
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log('Player just earned 5 points');
}
else if (alien_color === 'yellow') {
    console.log('Player just earned 10 points');
}
else if (alien_color === 'red') {
    console.log('Player just earned 15 points');
}
alien_color = 'green';
if (alien_color === 'green') {
    console.log('Player just earned 5 points');
}
else if (alien_color === 'yellow') {
    console.log('Player just earned 10 points');
}
else if (alien_color === 'red') {
    console.log('Player just earned 15 points');
}
alien_color = 'red';
if (alien_color === 'green') {
    console.log('Player just earned 5 points');
}
else if (alien_color === 'yellow') {
    console.log('Player just earned 10 points');
}
else if (alien_color === 'red') {
    console.log('Player just earned 15 points');
}
console.log("------------------".repeat(7));
//quetion 28
var age = 22;
if (age < 2) {
    console.log('The person is a baby');
}
else if (age >= 2 && age < 4) {
    console.log('The person is a toddler');
}
else if (age >= 4 && age < 13) {
    console.log('The person is a kid');
}
else if (age >= 13 && age < 20) {
    console.log('The person is a teenager');
}
else if (age >= 20 && age < 65) {
    console.log('The person is a adult');
}
else if (age >= 65) {
    console.log('The person is a elder');
}
console.log("------------------".repeat(7));
//question 29
var favorite_fruits = ['banana', 'pineapple', 'apple'];
if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
}
else if (favorite_fruits.includes('apple')) {
    console.log('You really like apple!');
}
else if (favorite_fruits.includes('pineapple')) {
    console.log('You really like pineapple!');
}
else if (favorite_fruits.includes('orange')) {
    console.log('You really like orange!');
}
else if (favorite_fruits.includes('papaya')) {
    console.log('You really like papaya!');
}
console.log("------------------".repeat(7));
//question 30
let users = ['Ahmed', 'Khan', 'Bobby', 'Admin', 'Rizwan'];
users.forEach((user) => {
    if (user === 'Admin')
        console.log("Hello admin, would you like to see a status report?");
    else
        console.log(`Hi ${user}, Thank You for logging.`);
});
console.log("------------------".repeat(7));
//question 31
if (users.length === 0) {
    console.log("We need to find some users");
}
else {
    users.forEach((user) => {
        if (user === 'Admin')
            console.log("Hello admin, would you like to see a status report?");
        else
            console.log(`Hi ${user}, Thank You for logging.`);
    });
}
//question 32
var current_users = ['Ahmed', 'Khan', 'Bobby', 'Admin', 'Rizwan'];
var new_users = ['ahmed', 'Shifran', 'BobBy', 'Farook', 'Shabi'];
new_users.forEach((user) => {
    let exist = current_users.some(u => {
        return u.toLowerCase() === user.toLowerCase();
    });
    if (exist) {
        console.log("User is already avaliable with this name kindly select another");
    }
    else {
        console.log("Username is avaliable");
    }
});
//question 33
var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinal_numbers.forEach((n) => {
    let no;
    if (n === 1) {
        no = `${n}st`;
    }
    else if (n === 2) {
        no = `${n}nd`;
    }
    else if (n === 3) {
        no = `${n}rd`;
    }
    else {
        no = `${n}th`;
    }
    console.log(no);
});
console.log("------------------".repeat(7));
//question 34
var pizzas = ['Tandoori', 'Tikka', 'Fajita'];
pizzas.forEach(pizza => {
    console.log(`I Like ${pizza} Pizza`);
});
console.log("I like piiza with extra chees \nAnd more sauses\nAnd little Sipcy");
console.log("------------------".repeat(7));
//question 35
let animal = ["elephant", 'Tiger', "Whale"];
animal.forEach(a => {
    console.log(`${a} is not a pet`);
});
console.log('These all animals are maimals and they are wild animals');
console.log("------------------".repeat(7));
//question 36
function make_shrit(Size, Text) {
    console.log(`${Text} will be printed on ${Size} sized shirt`);
}
make_shrit("Medium", "Metaverse");
console.log("------------------".repeat(7));
//question 37
function make_shrit1(Size = "Large", Text = "I love javascript") {
    console.log(`${Text} will be printed on ${Size} sized shirt`);
}
make_shrit1();
make_shrit1("medium");
make_shrit1("large");
console.log("------------------".repeat(7));
//question 38
function describe_city(city = "Karachi", country = "Pakistan") {
    console.log(`${city} is the city of ${country}`);
}
describe_city();
describe_city('Islamabad');
describe_city('London');
describe_city('Lahore');
//question 39
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", 'Pakistan'));
console.log(city_country("Dubai", 'UAE'));
console.log(city_country("Jeddah", 'Saudia'));
console.log("------------------".repeat(7));
//question 40
function make_album(artist, album, numoftract) {
    let obj = {
        artist,
        album,
    };
    if (numoftract) {
        obj['numoftrack'] = numoftract;
    }
    return obj;
}
console.log(make_album("Adat", "Atif"));
//question 41
let magicians = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
showMagicians(magicians);
console.log("------------------".repeat(7));
//question 42
function makeGreat(magicians) {
    for (let magician of magicians) {
        console.log(`The great ${magician}`);
    }
}
makeGreat(magicians);
//question 43
let greatMagicians = [];
function makeGreat2(magicians) {
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    console.log(greatMagicians);
}
function showMagicians2(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
magicians = ["Harry Houdini", "David Blaine", "Criss Angel"];
greatMagicians = makeGreat([...magicians]);
console.log(magicians);
console.log(greatMagicians);
//question 44
function sandwitch(items) {
    console.log(`Your order is ready with ${items.join(', ')}`);
}
sandwitch(["CHeese", "Paproni", "Kali mirch"]);
sandwitch(["Spice", "Mayo", "Ketchup"]);
//question 45
function car(maufectuere, model, kargs) {
    let c = {
        maufectuere, model
    };
    if (kargs)
        c = { ...c, ...kargs };
    return c;
}
car("Honda", "Civic", { Color: 'Black', Type: 'Sports' });
