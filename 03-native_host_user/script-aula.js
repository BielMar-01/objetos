// EXERCÍCIOS
// Liste 5 objetos nativos
Object
String
Array
Function
Number

// Liste 5 objetos do browser
Window
history
Document
HTMLAllCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox
if (typeof window.onafterprint !== "undefined") {
  console.log("Existe window");
} else {
  console.log("Não existe window");
}

if (typeof document.adoptNode !== "undefined") {
  console.log("Existe document");
} else {
  console.log("Não existe document");
}

if (typeof document.webkitHidden !== "undefined") {
  console.log("Existe webkit");
} else {
  console.log("Não existe webkit");
}