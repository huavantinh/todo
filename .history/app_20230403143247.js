const button = document.getElementById("button-submit");

button.addEventListener("click", (event) => {
    var textBox = document.getElementById('input-sub');
    var content = textBox.value;
    console.log(content);
});

$("#product").append('<div>' + content + '</div>');