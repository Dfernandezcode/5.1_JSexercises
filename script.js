/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
	{
		name: 'Cristiano Ronaldo',
		country: 'Portugal',
		goldenBall: 5,
		goldenBoot: 6,
	},

	{ name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4 },

	{ name: 'Luis Suárez', country: 'Uruguay', goldenBall: 0, goldenBoot: 2 },

	{ name: 'Diego Forlan', country: 'Uruguay', goldenBall: 0, goldenBoot: 2 },

	{ name: 'Thierry Henry', country: 'Francia', goldenBall: 0, goldenBoot: 2 },
];

let uruguayPrize = players.filter((player) => player.country === 'Uruguay');

let uruguayPrizeTotal = uruguayPrize.map(
	(player) => player.goldenBall + player.goldenBoot
);

let totalPrize = uruguayPrizeTotal.reduce((acc, score) => acc + score);

console.log('Uruguay Total Prizes = ' + totalPrize);

/* 
    Dado el siguiente array:
*/

const forbesList = [
	{
		name: 'Elon Musk',
		amount: 219,
		age: 50,
		country: 'EEUU',
		company: 'Tesla',
		industry: 'Automotive',
	},
	{
		name: 'Jeff Bezos',
		amount: 171,
		age: 58,
		country: 'EEUU',
		company: 'Amazon',
		industry: 'Technology',
	},
	{
		name: 'Bernard Arnault',
		amount: 158,
		age: 73,
		country: 'France',
		company: 'LVMH',
		industry: 'Fashion',
	},
	{
		name: 'Bill Gates',
		amount: 129,
		age: 66,
		country: 'EEUU',
		company: 'Microsoft',
		industry: 'Technology',
	},
	{
		name: 'Warren Buffet',
		amount: 118,
		age: 91,
		country: 'EEUU',
		company: 'Berkshire',
		industry: 'Finance',
	},
	{
		name: 'Larry Page',
		amount: 111,
		age: 49,
		country: 'EEUU',
		company: 'Google',
		industry: 'Technology',
	},
	{
		name: 'Sergey Brin',
		amount: 171,
		age: 58,
		country: 'EEUU',
		company: 'Google',
		industry: 'Technology',
	},
	{
		name: 'Larry Ellison',
		amount: 106,
		age: 77,
		country: 'EEUU',
		company: 'Software',
		industry: 'Technology',
	},
	{
		name: 'Steve Ballmer',
		amount: 91,
		age: 66,
		country: 'EEUU',
		company: 'Microsoft',
		industry: 'Technology',
	},
	{
		name: 'Mukesh Ambani',
		amount: 90,
		age: 64,
		country: 'India',
		company: 'Diversified',
		industry: 'Finance',
	},
];

//1) Muestra por consola el listado de nombres de los millonarios

let billionaireList = forbesList.map((billionaire) => billionaire.name);
console.log(billionaireList);

//2) Muestra por consola (true/false) si está Amancio en la lista

console.log(billionaireList.includes('Amancio Ortega'));

//3) Muestra por consola un listado con el resultado de dividir su patrimonio entre los años que tienen

let forbesAmount = forbesList.map((amount) => amount.amount);
let forbesAges = forbesList.map((age) => age.age);

let ageAmountDivided = [];
for (let i = 0; i < forbesAges.length; i++) {
	ageAmountDivided.push(forbesAmount[i] / forbesAges[i]);
}

let ageAmountDividedFixed = [];
for (let i = 0; i < ageAmountDivided.length; i++) {
	ageAmountDividedFixed.push(ageAmountDivided[i].toFixed(2));
}
console.log(ageAmountDividedFixed);
//inefficient as shit

let ageAmountDivFix = forbesList.map((person) =>
	(person.amount / person.age).toFixed(2)
);
console.log(ageAmountDivFix);
//AI optimized

//4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes

let forbesAge = forbesList.map((age) => age.age);

let ageSum = forbesAge.reduce((a, b) => a + b, 0);

let ageAvg = ageSum / forbesAge.length || 0;
console.log(ageAvg);

//5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología

let eeuuBillionaire = forbesList.filter(
	(forbesEEUU) => forbesEEUU.country === 'EEUU'
);

let techEEUU = eeuuBillionaire.filter(
	(forbesTech) => forbesTech.industry === 'Technology'
);

let sumTech = techEEUU.reduce((acc, elemento) => {
	return acc + elemento.amount;
}, 0);

console.log('$' + sumTech + ' billion dollars');

let billionaireEEUU = forbesList.reduce((acc, element) => {
	element.country === 'EEUU' && element.industry === 'Technology'
		? acc + element.amount
		: acc;
});

console.log('$' + billionaireEEUU + ' billion dollars');

//6) Muestra por consola el millonario más joven que no sea de EEUU

let nonUs = forbesList.filter((forbesNonUs) => forbesNonUs.country !== 'EEUU');
let listNonUs = nonUs.map((nonUsAge) => nonUsAge.age);

let youngestNonUs = listNonUs.reduce((youngest, elemento) => {
	return youngest.age === undefined || youngest.age >= elemento.age
		? elemento
		: youngest;
}, {});

console.log(youngestNonUs);
//Optimized
let youngestRich = forbesList
	.filter((person) => person.country !== 'EEUU')
	.reduce(
		(acc, person) =>
			acc.age === undefined || acc.age >= person.age ? person : acc,
		{}
	);
console.log(youngestRich);

//7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU

let usOnly = forbesList.filter(
	(forbesOnlyUs) => forbesOnlyUs.country === 'EEUU'
);
let listTopUs = usOnly.map((onlyUsAge) => onlyUsAge.age);

listTopUs.sort((a, b) => b - a);

let finalList = listTopUs.slice(0, 1);
console.log(finalList);

//8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos

let millGM = forbesList.filter(
	(element) => element.company === 'Google' || element.company === 'Microsoft'
);

let acc = millGM.reduce((acc, element) => acc + element.age / millGM.length, 0);

console.log(acc);
