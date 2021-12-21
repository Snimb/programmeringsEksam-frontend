const out = (str) => console.log(str);
const url = "http://localhost:8080/showAllKandidater/";


function fetchKandidater() {
  return fetch(url)
    .then(data => data.json())
    .then(kandidatData)
}


const KandiDivRow = document.getElementById('KandiDivRow');

function kandidatData(data) {
  for (let i = 0; i < data.length; i++) {


    const kandidat = data[i]
    out(kandidat)

    let kandiDiv = document.createElement('div')
    kandiDiv.setAttribute('id', 'kandiDiv')
    KandiDivRow.append(kandiDiv)

    let kandidatName = document.createElement('span')
    kandidatName.setAttribute('value', kandidat.kandidatName)
    kandidatName.innerHTML = kandidat.kandidatName

    kandiDiv.append(kandidatName)


    let kandiInput = document.createElement('input')
    kandiInput.type = 'text'
    kandiInput.setAttribute('value', kandidat.innerText);

    kandidatName.addEventListener('click', event => {
      kandiInput.value = kandidat.kandidatName;
      kandidatName.replaceWith(kandiInput)
    })



    const updateButton = document.createElement('button')
    updateButton.type = 'button'
    updateButton.innerText = 'Save'
    kandiDiv.append(updateButton)

    updateButton.onclick = function () {
      kandidat.kandidatName = kandiInput.value;
      updateKandidat(kandidat)
    }

    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.innerText = 'Delete'
    kandiDiv.append(deleteButton)

    deleteButton.onclick = function () {
      deleteKandidat(kandidat)
    }

  }
}


async function updateKandidat(kandidat) {
  try {
    const response = await restUpdateKandidat(kandidat);
    out(response);
    window.location.reload();
  } catch (error) {
    out(error);
  }

}

async function restUpdateKandidat(kandidat) {
  const updateURL = "http://localhost:8080/kandidat/" + kandidat.kandidatID;
  const jsonString = JSON.stringify(kandidat);
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



async function deleteKandidat(kandidat) {
  try {
    const response = await restDeleteKandidat(kandidat);
    out(response);
    window.location.reload();
  } catch (error) {
    out(error);
  }
}

async function restDeleteKandidat(kandidat) {
  const deleteUrl = "http://localhost:8080/kandidat/" + kandidat.kandidatID;
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

fetchKandidater();
