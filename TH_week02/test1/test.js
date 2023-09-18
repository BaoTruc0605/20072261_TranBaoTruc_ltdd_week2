// var obj = {
//     name: "BaoTruc",
//     age: 18
// }
// console.log(obj)
// var jsonsf = JSON.stringify(obj);
// console.log(jsonsf);


const urlBacon = 'https://jsonplaceholder.typicode.com/todos/1';
(function() {
    $.ajax({
            method: 'GET',
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("No good");
        })

})()