//get all user
var url = 'https://jsonplaceholder.typicode.com/todos'
var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function() {
    var usres = JSON.parse(xhr.responseText);
    console.log(xhr.responseText)
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(usres);
    } else {
        console.error(usres)
    }
}
xhr.send(null)