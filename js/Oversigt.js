const out = (...str) => console.log(...str);

const KanURL = "http://localhost:8080/partiKandidater/";
const PartiURL = "http://localhost:8080/showAllpartier/"


fetchAllPartier()
fetchAllKandidater6();
fetchAllKandidater5();
fetchAllKandidater4();
fetchAllKandidater3();
fetchAllKandidater2();
fetchAllKandidater1();

function fetchAllPartier() {
  return fetch(PartiURL)
    .then(data => data.json())
    .then(partier);
}

function partier(data) {


  for (let i = 0; i < data.length; i++) {

    const parti = data[i];
    partidiv = document.createElement("div")
    partidiv.setAttribute("value", parti.partiName)
    partidiv.setAttribute("id", parti.partiID)
    partidiv.innerHTML = parti.partiName.big()
    document.getElementById("kandidatTable").appendChild(partidiv)

  }

}

  function fetchAllKandidater1() {

      return fetch(KanURL + 1)
        .then(data => data.json())
        .then(partiKandidatData1)

  }
  function partiKandidatData1(data) {

    for (let i = 0; i < data.length; i++) {
      const kandidat = data[i];
      kandidatdiv = document.createElement("table");
      kandidatdiv.setAttribute("value", kandidat.kandidatName);
      kandidatdiv.innerText = kandidat.kandidatName;
      document.getElementById("1").append(kandidatdiv);

      }
  }

function fetchAllKandidater2() {

  return fetch(KanURL + 2)
    .then(data => data.json())
    .then(partiKandidatData2)

}
function partiKandidatData2(data) {

  for (let i = 0; i < data.length; i++) {
    const kandidat = data[i];
    kandidatdiv2 = document.createElement("table");
    kandidatdiv2.setAttribute("value", kandidat.kandidatName);
    kandidatdiv2.innerText = kandidat.kandidatName;
    document.getElementById("2").append(kandidatdiv2);

  }
}

function fetchAllKandidater3() {

  return fetch(KanURL + 3)
    .then(data => data.json())
    .then(partiKandidatData3)

}
function partiKandidatData3(data) {

  for (let i = 0; i < data.length; i++) {
    const kandidat = data[i];
    kandidatdiv3 = document.createElement("table");
    kandidatdiv3.setAttribute("value", kandidat.kandidatName);
    kandidatdiv3.innerText = kandidat.kandidatName;
    document.getElementById("3").append(kandidatdiv3);

  }
}

function fetchAllKandidater4() {

  return fetch(KanURL + 4)
    .then(data => data.json())
    .then(partiKandidatData4)

}
function partiKandidatData4(data) {

  for (let i = 0; i < data.length; i++) {
    const kandidat = data[i];
    kandidatdiv4 = document.createElement("table");
    kandidatdiv4.setAttribute("value", kandidat.kandidatName);
    kandidatdiv4.innerText = kandidat.kandidatName;
    document.getElementById("4").append(kandidatdiv4);

  }
}

function fetchAllKandidater5() {

  return fetch(KanURL + 5)
    .then(data => data.json())
    .then(partiKandidatData5)

}
function partiKandidatData5(data) {

  for (let i = 0; i < data.length; i++) {
    const kandidat = data[i];
    kandidatdiv5 = document.createElement("table");
    kandidatdiv5.setAttribute("value", kandidat.kandidatName);
    kandidatdiv5.innerText = kandidat.kandidatName;
    document.getElementById("5").append(kandidatdiv5);
  }
}

function fetchAllKandidater6() {

  return fetch(KanURL + 6)
    .then(data => data.json())
    .then(partiKandidatData6)

}
function partiKandidatData6(data) {

  for (let i = 0; i < data.length; i++) {
    const kandidat = data[i];
    kandidatdiv6 = document.createElement("table");
    kandidatdiv6.setAttribute("value", kandidat.kandidatName);
    kandidatdiv6.innerText = kandidat.kandidatName;
    document.getElementById("6").append(kandidatdiv6);

  }
}


