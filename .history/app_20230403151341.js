function submit() {
    var textBox = document.getElementById('input-sub');
    var content = textBox.value;
    $("#products").append('<div>' + content + ' <button onclick="deleteItem()">Delete</button>' + '</div>');
    textBox.value = '';
}

// const button2 = document.getElementById("delete")
// button2.addEventListener("click", delete2);
function delete2() {
    var productclear = document.getElementById('products');
    productclear.innerHTML = '';
}

var textBox2 = document.getElementById('input-sub');

textBox2.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submit();
    }
});

function deleteItem(){
    alert(1);
}

