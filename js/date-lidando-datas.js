// Date
const date1 = new Date();
console.log('date1', date1);

const date2 = new Date('March 06 2025 09:30');
console.log('date2', date2);
console.log('date2', date2.toDateString());
console.log('date2', date2.toTimeString());
console.log('date2', date2.toISOString());

const date3 = new Date(2025, 2, 6, 9, 30);
console.log('date3', date3);

date3.setFullYear(2030);
console.log('date3', date3);

//---------------
// Definindo uma variável com a data de hoje
const date4 = new Date();
console.log('date4', date4);
console.log('date4',new Date().getDate()); // day of the month

const date5 = new Date(date4.getFullYear(), date4.getMonth(), date4.getDate(), date4.getHours(), date4.getMinutes(), date4.getSeconds());
console.log('date5', date5);

const date6 = new Date('Nov 14 2025 18:30:32');
console.log('date6', date6);


