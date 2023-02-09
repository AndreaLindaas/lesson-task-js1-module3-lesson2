function greet(name = "John") {
  return `Hello ${name}!`;
}

var greeting = greet("Andrea");

function komponent(className, value) {
  return `<div class="${className}">${value}</div>`;
}
var ting = komponent("drue", "ost");

console.log(ting);

//

async function getFact() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();
    console.log(results[8].text);
  } catch (error) {
  } finally {
  }
}
