const out = (str) => console.log(str);
const url = "http://localhost:8080/showAllpartier/"

function newKandidat() {
  let kandidatName = document.getElementById("inpKandidatName").value

  let chosenParti = localStorage.getItem('chosenParti');
  out(chosenParti)

  let postKandidatRequest = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "kandidatName": kandidatName,
      "parti": {
          "partiID": chosenParti,
        },
    })
  }

  out(postKandidatRequest)


  fetch("http://localhost:8080/kandidat", postKandidatRequest)
    .then(response => response.json())
    .then(data => kandidatCreated(data))
    .catch(error => console.log(error));
}

function kandidatCreated(data){
  out(arguments)
  out(data)
  window.location.href = "../oversigt.html";
}

function fetchAllPartier() {
  return fetch(url)
    .then(data => data.json())
    .then(partiDropdown);

}

function partiDropdown(data) {
  let firstParti = data[0];
  let firstPartiID = firstParti[Object.keys(firstParti)[0]];
  localStorage.setItem('chosenParti', firstPartiID)

  for (let i = 0; i < data.length; i++) {

    let parti = data[i];

    let dropdown = document.getElementById("selectDropdown");
    let option = document.createElement("option");
    option.innerText = parti.partiName;
    option.setAttribute("value", parti.partiID);
    localStorage.setItem("chosenParti", 1);
    dropdown.appendChild(option);


    dropdown.addEventListener("change",(event) => {
      const selectIndex = dropdown.selectedIndex;
      let optionIndex = dropdown.options[selectIndex]
      parti.partiID = optionIndex.value
      out(optionIndex.value);
      localStorage.setItem("chosenParti", optionIndex.value)

    })
  }

}

fetchAllPartier();
