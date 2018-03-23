console.log("Remember to run node as `node --icu-data-dir=node_modules/full-icu index.js`");
console.log();

require('full-icu'); // Not necessary, only for check that it is installed.

const assert = require('assert');

assert.equal(typeof Intl, 'object', 'Intl must exist');

assert.equal(typeof process.versions.icu, 'string', 'ICU version string');

const hasFullICU = (() => {
    try {
	const january = new Date(9e8);
	const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
	return spanish.format(january) === 'enero';
    } catch (err) {
	return false;
    }
})();

assert(hasFullICU, 'Must have full ICU available');

/*
console.log(`Has full ICU available: ${String(hasFullICU).toUpperCase()}`);
console.log();
*/

var str;
const amount = 1234567.89;

console.log(`Using Node's full ICU locales to render as amount.toLocaleString(**locale**, {style: 'currency', currency: **currency**})`);
console.log();
for (currency of ['EUR', 'USD', 'CHF']) {
    for (locale of ['fi-FI', 'en-US', 'de-CH']) {
	console.log(`Rendering ${currency} amount with locale ${locale} results ${amount.toLocaleString(locale, {style: 'currency', currency})}`);
    }
    console.log();
}
