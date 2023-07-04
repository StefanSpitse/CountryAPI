let url = 'https://restcountries.com/v2/all'

window.onload = apiRequest


function apiRequest()
{

    axios.get(url).then(function (response) {
        let json = response.data
        CountryFactory(json)
        const buurlanden = document.querySelectorAll(".buurlanden");
        buurlanden.forEach(buurlanden => {
            buurlanden.addEventListener("change", function () {

                TableChange(json, this.options[this.selectedIndex].text)})
        })


    })

}

