import React, { useState } from "react";

function CSVTable({ data }) {
  const [xData] = useState(data);

  function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    //define the file type to text/csv
    csvFile = new Blob([csv], { type: "text/csv" });
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();
  }  

  function exportTableToCSV(filename) {
    //declare a JavaScript variable of array type
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    //merge the whole data in tabular form
    for (var i = 0; i < rows.length; i++) {
      var row = [],
        cols = rows[i].querySelectorAll("td, th");
      for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);
      csv.push(row.join(","));
    }
    //call the function to download the CSV file
    downloadCSV(csv.join("\n"), filename);
  }  

  const btnDownloadHandler = () => {
    console.log("Download button clicked");
    exportTableToCSV("cyclops" + new Date());
  }
  return (
    <div className="app" style={{ textAlign: "center" }}>
      <h1>Tabular data</h1>

      <table>
        <button onClick={btnDownloadHandler}>Download</button>
        <tbody>
          {
            <tr>
              <td>Date</td>
              <td>Inventory</td>
            </tr>
          }
          {data != null &&
            data.map((numList, i) =>
              //console.log(numList.x)

              numList.x.map((num, j) => (
                <tr key={j}>
                  <td>{num}</td>
                  <td>{numList.y[j]}</td>
                </tr>
              ))
            )}
        </tbody>
      </table>
    </div>
  );
}

export default CSVTable;
