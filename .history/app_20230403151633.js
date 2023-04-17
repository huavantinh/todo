function submit() {
    var textBox = document.getElementById('input-sub');
    var content = textBox.value;
    var randId = Math.random();
    $("#products").append('<div id="' + randId + '">' + content + ' <button onclick="deleteItem(' + randId +')">Delete</button>' + '</div>');
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

function deleteItem(1){
    alert(1);
}

