//post user
var url = 'https://my-json-server.typicode.com/typicode/demo/posts'
var data = {}
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var user = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
        console.table(user);
    } else {
        console.error(user);
    }
}

// //get a user
// var url = 'https://my-json-server.typicode.com/typicode/demo/posts'
// var xhr = new XMLHttpRequest()
// xhr.open('GET', url, true)
//     //xhr.open('GET', url + '/12', true)
// xhr.onload = function() {
//     var usres = JSON.parse(xhr.responseText);
//     console.log(xhr.responseText)
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(usres);
//     } else {
//         console.error(usres)
//     }
// }
// xhr.send(null)