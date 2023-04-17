const button = document.getElementById("button-submit");

button.addEventListener("click", test);

function test() {
    var textBox = document.getElementById('input-sub');
    var content = textBox.value;
}

$("#product").append('<div>' + content + '</div>');