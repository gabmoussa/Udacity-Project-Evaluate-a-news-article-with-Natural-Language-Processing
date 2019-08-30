
function urlHandler(event) {
    event.preventDefault()
    var link = document.querySelectorAll('input[name=test_url]')

    let json_link = JSON.parse(JSON.stringify(link[0].value))
    if (Client.urlInspect(json_link)) {
        console.log("::: Formulating a Demand to the api :::");
        
        fetch('http://localhost:4000/news_url', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: link[0].value})
        })
            .then(res => res.json())
            .then(function (res) {
                document.querySelector('section.url-results #polarity').innerHTML = res.polarity
                document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
                document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
                document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
                document.querySelector('section.url-results #excerpt').innerHTML = res.text
            })
    } else {
        var link_verify = document.querySelector('section.link_verify');
        var varLink = document.querySelector('section.link_verify #incorrect');
        varLink.innerHTML = "Please, the url:\"" + JSON.stringify(link[0].value) + "\" is incorrect. Check it again"
        link_verify.style.display = "block";

    }
}
export {urlHandler}