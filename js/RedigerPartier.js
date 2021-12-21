const out = (str) => console.log(str);
const url = "http://localhost:8080/showAllpartier/";


function fetchPartier() {
  return fetch(url)
    .then(data => data.json())
    .then(partiData)
}


const PartiDivRow = document.getElementById('PartiDivRow');

function partiData(data) {
  for (let i = 0; i < data.length; i++) {


    const parti = data[i]
    out(parti)

    let partiDiv = document.createElement('div')
    partiDiv.setAttribute('id', 'partiDiv')
    PartiDivRow.append(partiDiv)

    let partiName = document.createElement('span')
    partiName.setAttribute('value', parti.partiName)
    partiName.innerHTML = parti.partiName

    partiDiv.append(partiName)


    let partiInput = document.createElement('input')
    partiInput.type = 'text'
    partiInput.setAttribute('value', partiName.innerText);

    partiName.addEventListener('click', event => {
      partiInput.value = parti.partiName;
      partiName.replaceWith(partiInput)
    })



    const updateButton = document.createElement('button')
    updateButton.type = 'button'
    updateButton.innerText = 'Save'
    partiDiv.append(updateButton)

    updateButton.onclick = function () {
      parti.partiName = partiInput.value;
      updateParti(parti)
    }

    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.innerText = 'Delete'
    partiDiv.append(deleteButton)

    deleteButton.onclick = function () {
      deleteParti(parti)
    }

  }
}


async function updateParti(parti) {
  try {
    const response = await restUpdateParti(parti);
    out(response);
    window.location.reload();
  } catch (error) {
    out(error);
  }

}

async function restUpdateParti(parti) {
  const updateURL = "http://localhost:8080/parti/" + parti.partiID;
  const jsonString = JSON.stringify(parti);
  out(jsonString);

  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonString
  }
  const response = await fetch(updateURL, fetchOptions);
  out(response.status);
  out(response.ok);
  if (!response.ok) {
    out("error");
  }
  return response.json();
}



async function deleteParti(parti) {
  try {
    const response = await restDeleteParti(parti);
    out(response);
    window.location.reload();
  } catch (error) {
    out(error);
  }
}

async function restDeleteParti(parti) {
  const deleteUrl = "http://localhost:8080/parti/" + parti.partiID;
  const fetchOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: ""
  }

  const response = await fetch(deleteUrl, fetchOptions);
  out(response.status)
  out(response.ok)
  if (!response.ok) {
    out(response.error())
  }

  return response;
}

fetchPartier();


