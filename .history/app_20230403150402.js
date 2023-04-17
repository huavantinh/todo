function submit() {
    var textBox = document.getElementById('input-sub');
    var content = textBox.value;
    $("#products").append('<div>' + content + '</div>');
    textBox.value = ''
}


// const button2 = document.getElementById("delete")
// button2.addEventListener("click", delete2);
function delete2() {
    var productclear = document.getElementById('products');
    productclear.innerHTML = '';
}

function onKeyDown(e) {
    debugger;
    if (e.keyCode === 13) {
        submit();
    }
}

