const out = (...str) => console.log(...str);
let currentUserId = localStorage.getItem('currentUserId')


function createParti() {

  let partiName = document.getElementById("inpPartiName").value
  let partiVotes = document.getElementById("inpPartiVotes").value

  let postPartiRequest = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      "partiName": partiName,
      "partiVotes": partiVotes,

    })
  }

  fetch("http://localhost:8080/parti", postPartiRequest)
    .then(response => response.json())
    .then(data => partiCreated(data))
    .catch(error => console.log(error));
}

function partiCreated(data) {
  out(arguments);
  out(data);
  window.location.href = "../rediger-partier.html";
}
