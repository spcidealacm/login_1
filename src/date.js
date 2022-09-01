const date = new Date()

console.log(date.getTime());
console.log(date.getTimezoneOffset());

console.log('Now: ', Date.now());

console.log('Year: ', date.getFullYear());
console.log('Month: ', date.getMonth());
console.log('Date:', date.getDate());
console.log('Day: ', date.getDay());
console.log('Hours: ', date.getHours());
console.log('Minutes: ', date.getMinutes());
console.log('Seconds: ', date.getSeconds());
console.log('Milliseconds: ', date.getMilliseconds());
console.log('================');
console.log('UTCYear: ', date.getUTCFullYear());
console.log('UTCMonth: ', date.getUTCMonth());
console.log('UTCDate: ', date.getUTCDate());
console.log('UTCDay: ', date.getUTCDay());
console.log('UTCHours: ', date.getUTCHours());
console.log('UTCMinutes: ', date.getUTCMinutes());
console.log('UTCSeconds: ', date.getUTCSeconds());
console.log('UTCMilliseconds: ', date.getUTCMilliseconds());