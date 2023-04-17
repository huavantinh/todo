const button = document.getElementById("button-submit");

button.addEventListener("click", function(e){
    var textBox = document.getElementById('input-sub');
    var content = textBox.value;
    $("#product").append('<div>' + content + '</div>');
});

