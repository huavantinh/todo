function submit() {
    var textBox = document.getElementById('input-sub');
    var content = textBox.value;
    var randId = Math.random(); // 0.1235
    $("#products").append('<div id="' + randId + '">' + content + '<input type="checkbox" onclick="checkItem(' + randId+ ')> + <button onclick="deleteItem(' + randId + ')">Delete</button>' + '</div>');
    textBox.value = '';
}

// const button2 = document.getElementById("delete")
// button2.addEventListener("click", delete2);
function delete2() {
    var products = document.getElementById('products');
    products.innerHTML = '';
}

var textBox2 = document.getElementById('input-sub');

textBox2.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submit();
    }
});

function deleteItem(id){
    var products = document.getElementById('products');
    var div = document.getElementById(id);
    products.removeChild(div);
}

// function checkItem(id){
//     var products = document.getElementById('products');
//     var checkboxid =document.getElementById(id);
//     checkboxid.checked=true;
    
// }

