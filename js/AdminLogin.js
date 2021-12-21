const out = (...str) => console.log(...str);
let url = "http://localhost:8080/login";

localStorage.clear();

function adminLogin() {
  let adminName = document.getElementById("inpAdminName").value
  let adminPassword = document.getElementById("inpAdminPassword").value

  let postLoginRequest = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "adminName": adminName,
      "adminPassword": adminPassword,

    })
  }

  out(postLoginRequest)


  return fetch(url, postLoginRequest)
    .then(response => response.json())
    .then(data => adminValidation(data))
    .catch(error => console.log(error));

}

function adminValidation(data) {
  out(arguments);
  out(data);

  if (data > 0) {
    localStorage.setItem('currentUserId', data);
    window.location.href = "/programmeringsEksam-frontend/oversigt.html";

  } else {
    window.location.reload();
    alert("Login Failed");
  }
}
