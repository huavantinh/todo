function submit() {
    var textBox = document.getElementById('input-sub');
    var content = textBox.value;
    var randId = Math.random(); // 0.1235
    $("#products").append('<div id="' + randId + '"> ' + content + '<div><input  class="checkbox" type="checkbox" onclick="checkItem(' + randId+ ')"/></div> <button onclick="deleteItem(' + randId + ')">Delete</button>' + '</div>');
    textBox.value = '';
}

// const button2 = document.getElementById("delete")
// button2.addEventListener("click", delete2);
function delete2() {
    var products = document.getElementById('products');
    products.innerHTML = '';
}

function checkAll(){
    var checkboxes = document.getElementsByClassName("checkbox");
    for(var checkbox of checkboxes){
        checkbox.checked=true;
    }
}

function unCheckAll(){
    var checkboxes = document.getElementsByClassName("checkbox");
    for(var checkbox of checkboxes){
        checkbox.checked=false;
    }
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

function checkItem(){
    
    var checkboxes = document.getElementsByClassName("checkbox");
    var changestatus = document.getElementById('input-sub');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked){
            changestatus.style.color="red";
            break;
        }else{
            changestatus.style.color="blue";

        }
    }
}


