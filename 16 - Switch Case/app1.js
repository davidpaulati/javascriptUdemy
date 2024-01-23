const nome = "David";

// if (nome == "David") {
//   console.log("O nome é David");
// } else if (nome == "Maria") {
// } else {
//   console.log("Nome desconhecido");
// }

switch (nome) {
  case "David":
    console.log("O nome é David");
    break;
  case "Maria":
    console.log("O nome é Maria");
    break;

  default:
    console.log("Nome desconhecido");
}
