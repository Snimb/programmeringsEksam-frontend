const url = "http://localhost:8080/showAllpartier/"

function fetchAllParties() {
  return fetch(url)
    .then(data => data.json())
    .then(voteData);
}

const table = document.getElementById("SectionTable");
const TableBody = document.getElementById('TableBody')
table.append(TableBody)

function voteData(data) {

  for (let i = 0; i < data.length; i++) {

    const parti = data[i];
    let rowCount = TableBody.rows.length;
    let row = TableBody.insertRow(rowCount);
    row.id = parti.partiID;

    let voteTableRow = row.insertCell(0);
    let voteTd = document.createElement("td");
    voteTd.setAttribute("value", parti.partiVotes);
    voteTd.innerText = parti.partiVotes;
    voteTableRow.append(voteTd)

    let partiNameTableRow = row.insertCell(1);
    let partiNameTd = document.createElement("td");
    partiNameTd.setAttribute("value", parti.partiName);
    partiNameTd.innerText = parti.partiName;
    partiNameTableRow.append(partiNameTd)

    let percentageTableRow = row.insertCell(2);
    let percentageTd = document.createElement("td");
    percentageTd.setAttribute("value", parti.partiVotePercentage);
    percentageTd.innerText = Math.round(parti.partiVotePercentage) + "%";
    percentageTableRow.append(percentageTd)
    }
  }

fetchAllParties()
