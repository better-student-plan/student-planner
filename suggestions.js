function populateTable(d) {
    const table = document.getElementsByClassName("table")[0];
    if (typeof d == 'string') {
        d = JSON.parse(d);
    }
    let rawhtml = "";

    for (var i = 0; i < d.data.length; i++) {
        let x = d.data[i];
        // console.log(x);
        var row =
            "<tr><td>" +
            x.class +
            "</td><td>" +
            x.location +
            "</td><td>" +
            x.time +
            "</td><td>" +
            x.credits +
            "</td><td><ahref='" +
            x.professorsLink +
            "'>" +
            x.professors +
            "</a></td></tr>";

        rawhtml += row;
    }
    table.children[1].innerHTML = rawhtml;
}

function postAndRecieveData() {
    let querystr = window.location.search;
    querystr = querystr.replace("?", "");
    //TODO: change the querystr to the proper object and remove the test requestBody
    console.log(querystr);
    let requestBody = { dayoftheweek1: 'S' };


    var xhttp = new XMLHttpRequest();
    xhttp.open(
        "POST",
        "https://kaf7lx6cj5.execute-api.us-east-1.amazonaws.com/prod/",
        true
    );

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(JSON.stringify(requestBody));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            populateTable(this.responseText);
        }
        //if there is a problem or the webservice was taken down, then just use the testjson
        else if (this.readyState == 4 && this.status != 200) {
            populateTable(testjson);
        }
    };
}

const testjson = {
    status: "SUCCESS",
    data: [
        {
            class: "ACCT 102 - Managerial Accounting",
            location: "Internet Course",
            time: "N/A",
            credits: "3",
            professors: "McCrory, Dennis William",
            professorsLink:
                "https://www.coursicle.com/ivytechindianapolis/professors/Dennis+McCrory/"
        },
        {
            class: "ACCT 122 - Accounting Systems Appl",
            location: "Internet Course",
            time: "N/A",
            credits: "3",
            professors: "Johnson, Demelece",
            professorsLink:
                "https://www.coursicle.com/ivytechindianapolis/professors/Demelece+Johnson/"
        },
        {
            class: "BOAT 218 - Microsoft Excel",
            location: "Internet Course",
            time: "N/A",
            credits: "3",
            professors: "Leverette, Debra",
            professorsLink:
                "https://www.coursicle.com/ivytechindianapolis/professors/Debra+Leverette/"
        },
        {
            class: "ACCT 205 - Income Tax",
            location: "Lawrence",
            time: "M 9:30am-12:20pm",
            credits: "3",
            professors: "McCrory, Dennis William",
            professorsLink:
                "https://www.coursicle.com/ivytechindianapolis/professors/Dennis+McCrory/"
        },
        {
            class: "HUMA 100 - Theatre Appreciation",
            location: "Central",
            time: "M 5:30pm-8:20pm",
            credits: "3",
            professors: "TBD",
            professorsLink: ""
        }
    ]
};

postAndRecieveData();