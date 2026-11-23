const city = "Karachi";
console.log(`city = ${city},type = ${typeof city}`);
const age = 19;
console.log(`age = ${age},type = ${typeof age}`);
const worldPopulation = 8000000000n;
console.log(`worldPopulation = ${worldPopulation},type = ${typeof worldPopulation}`);
const isHosteller = true;
console.log(`isHosteller = ${isHosteller},type = ${typeof isHosteller}`);
let phoneNumber;
console.log(`phoneNumber = ${phoneNumber},type = ${typeof phoneNumber}`);

const middleName = null;
console.log(`middleName = ${middleName},type = ${typeof middleName}`);
// expected typeof to print null but it printed object


const studentId = Symbol("id");
console.log(`studentId = ${String(studentId)},type = ${typeof studentId}`);
// Symbol a unique value created by calling Symbol()
// String(...) is needed because a Symbol cannot be put directly inside ${}