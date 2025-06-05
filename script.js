var chickenWings = 0;
var cwPrice = 3.66;
var chickenDrums = 0;
var cdPrice = 2.58;
var kebab = 0;
var kPrice = 4.00;
var chickenNuggets = 0;
var cnPrice = 5.00;
var fries = 0;
var fPrice = 1.50;
var onionRings = 0;
var orPrice = 2.00;

function chickenWingsAdd() {
    chickenWings += 1;
    alert('Vistas spārni pievienoti grozam! (Grozā ir: '+chickenWings+')');
}
function chickenDrumsAdd() {
    chickenDrums += 1;
	alert('Vistas kājas pievienoti grozam! (Grozā ir: '+chickenDrums+')');
}
function kebabAdd() {
    kebab += 1;
	alert('Kebabs pievienots grozam! (Grozā ir: '+kebab+')');
}
function chickenNuggetsAdd() {
    chickenNuggets += 1;
	alert('Vistas nageti pievienoti grozam! (Grozā ir: '+chickenNuggets+')');
}
function friesAdd() {
    fries += 1;
	alert('Kartupeļi frī pievienoti grozam! (Grozā ir: '+fries+')');
}
function onionRingsAdd() {
    onionRings += 1;
	alert('Sīpola gredzeni pievienoti grozam! (Grozā ir: '+onionRings+')');
}
function myFunction() {
  const x = document.getElementById("main");
  const y = document.getElementById("basket");

  x.style.display = window.getComputedStyle(x).display === "none" ? "block" : "none";
  y.style.display = window.getComputedStyle(y).display === "block" ? "none" : "block";

  const list = document.getElementById("list");
  list.innerHTML = '';

  const spacerLi = document.createElement("li");
  spacerLi.style.marginTop = "10px";

  const basketLabel = document.createElement("li");
  basketLabel.textContent = `Pirkumi:`;
  list.appendChild(basketLabel);

  if (chickenWings != 0) {
    const li = document.createElement("li");
    li.textContent = `(${chickenWings}) Vistas spārni: €${cwPrice}`;
    list.appendChild(li);
  }


  const sum = Math.round((chickenWings * cwPrice + chickenDrums * cdPrice + kebab * kPrice + chickenNuggets * cnPrice + fries * fPrice + onionRings * orPrice) * 100) / 100;
  const sumPVN = Math.round((sum * 1.21) * 100) / 100;

  list.appendChild(document.createElement("hr"));

  const totalLi = document.createElement("li");
  totalLi.textContent = `Kopā (bez PVN): €${sum.toFixed(2)}`;
  list.appendChild(totalLi);

  const totalPVNLi = document.createElement("li");
  totalPVNLi.textContent = `Kopā (ar PVN 21%): €${sumPVN.toFixed(2)}`;
  list.appendChild(totalPVNLi);

  // Form inputs
  const inputLi = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = "Ievadi Vārdu un Uzvārdu:";
  label.htmlFor = "personal-info";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "personal-info";
  input.placeholder = "Ievadi savus datus";
  input.style.width = "100%";

  inputLi.appendChild(label);
  inputLi.appendChild(input);

  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Tālrunis:";
  phoneLabel.htmlFor = "phone-info";

  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.id = "phone-info";
  phoneInput.placeholder = "Ievadi savu tālruni";
  phoneInput.style.width = "100%";

  inputLi.appendChild(phoneLabel);
  inputLi.appendChild(phoneInput);

  const addressLabel = document.createElement("label");
  addressLabel.textContent = "Adrese:";
  addressLabel.htmlFor = "address-info";

  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.id = "address-info";
  addressInput.placeholder = "Ievadi savu adresi";
  addressInput.style.width = "100%";

  inputLi.appendChild(addressLabel);
  inputLi.appendChild(addressInput);

  list.appendChild(inputLi);
  list.appendChild(spacerLi);

  const infoButton = document.createElement("button");
  infoButton.textContent = "Saglabāt";
  const buttonLi = document.createElement("li");
  buttonLi.appendChild(infoButton);
  list.appendChild(buttonLi);

  infoButton.onclick = function clicksave() {
  const name = input.value;
  const phonenumber = phoneInput.value;
  const address = addressInput.value;

  //izdzēš iepriekšējo
  const existingInfo = document.getElementById("user-info");
  if (existingInfo) {
    existingInfo.remove();
  }

  //izveido jaunu
  const savedInfo = document.createElement("label");
  savedInfo.textContent = `Vārds, Uzvārds: ${name}, Tālr.: ${phonenumber}, Adrese: ${address}`;

  const inf = document.createElement("li");
  inf.id = "user-info"; // pievieno id lai varētu aizvietopt
  inf.appendChild(savedInfo);

  list.appendChild(spacerLi.cloneNode());//atstarpe
  list.appendChild(inf);
};

}
