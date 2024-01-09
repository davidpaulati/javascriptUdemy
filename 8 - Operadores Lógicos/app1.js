// operadores lógicos

console.log("AND lógico (&&)")
//para que retorne um valor verdadeiro (true) as duas condições devem ser verdadeiras 
//true && true = true
//true && false = false 
//false && true = false
console.log("true && true: ", true && true);
console.log("false && true:" , false && true);
console.log("10 >= 10 && 11 >= 11 :", 10 >= 10 && 11 >= 11);

console.log("OR lógico (||)")
//para que retorne um valor verdadeiro (true) uma das condições deve ser verdadeiras 
//true || true = true
//false || false = false
//true || false = true
//false ||true = false
console.log("-------------------------------------------")
console.log("true || true: ", true || true);
console.log("false || false", false || false);
console.log("false || true:" , false || true);
console.log("10 >= 10 || 11 >= 11 :", 10 >= 10 || 11 >= 11);
//NOT lógico (!)
console.log("-------------------------------------------")
console.log("NOT lógico (||)")

const usuarioAtivo = true;
const inscrito = false;
console.log("usuarioAtivo", !usuarioAtivo);
console.log("inscrito" , !inscrito);
console.log("10 >= 10 || 11 >= 11 :", !(10 >= 10) && 11 >= 11);
console.log("10 >= 10", !(10 >= 10));