function CountryFactory(json) {

    console.log(json)
    let out = "<table class='table table-hover'>" +
        "<tr><th>land</th>" +
        "<th>continent</th>" +
        "<th>Aantal buurlanden</th>" +
        "<th> Buurlanden</th></tr>";

    // filter selectbox


    if (!document.body.contains(document.getElementById("region"))) {
        let filterd = "<select id='region'>";
        let filter = [];
        json.forEach(function (continent, index) {
            console.log(continent.region)
            if (!filter.includes(continent.region)) {
                filterd += "<option>" + continent.region + "</option>"
                filter.push(continent.region)

            }
        })
        document.getElementById("filters").innerHTML = filterd;
    }



    json.forEach(function (landen, index) {


        // land table row.
        out += "<tr>";
        out += "<td>" + landen.name + "</td>";

        // continent table row
        out += "<td>" + landen.region + "</td>";

        // amount of neighbours table row
        if (typeof landen.borders != "undefined") { // has countries on the borders
            out += "<td> " + landen.borders.length + " </td>";
            out += "<td><select name='" + landen.alpha3Code + "' id='" + landen.alpha3Code + "' class='buurlanden'>"; // name and id are cca3 code of the country

            // loop through the countries in the array and put them in the select box
            let border = landen.borders
            border.forEach(function (land, index) {
                out += "<option>" + land + "</option>"

            })


            out += "</select></td>";
        } else {
            out += "<td> 0 </td>";
            out += "<td>-</td>";
        }

    })


    document.getElementById("tabel").innerHTML = out;
    const region = document.getElementById("region");
    region.addEventListener("change", function () {
        url = "https://restcountries.com/v2/region/" + this.options[this.selectedIndex].text;
        console.log("working?")
        apiRequest()
    })
}

function TableChange(json, cca3) {
    json.forEach(function (land) {
        if (land.alpha3Code === cca3) {
            let out = "<p> Land = " + land.name + "</p>"
            out += "<p>Hoofdstad = " + land.capital + "</p>"
            out += "<p>aantal Inwoners = " + land.population + "</p>"
            document.getElementById("output").innerHTML = out;
        }
    })
}