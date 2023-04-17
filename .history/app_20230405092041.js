function submit() {
  let textBox = document.getElementById("input-sub");
  let content = textBox.value;
  let randId = Math.random(); // 0.1235
  let randidcheck = Math.random(); 
  document.getElementById("new-task-message").classList.add("error-message");

  if (content == "") {
    onkeydown = function () {
      document
        .getElementById("new-task-message")
        .classList.remove("error-message");
    };
    return;
  } else {
    document
      .getElementById("new-task-message")
      .classList.remove("error-message");
    $("#products").append(
      '<div style="color: black" class="product1" id="' +
        randId +
        '">' +
        content +
        '<div><input id="'+randidcheck+'"  class="checkbox" type="checkbox"  onclick="checkItem(event)"/></div> <button class"delete-item" onclick="deleteItem(event)">Delete</button>' +
        "</div>"
    );
    textBox.value = "";
  }
}

function deleteAll() {
  var products = document.getElementById("products");
  products.innerHTML = "";
}

function checkAll() {
  var checkboxes = document.getElementsByClassName("checkbox");
  for (var checkbox of checkboxes) {
    checkbox.checked = true;
    checkbox.closest("div").parentNode.style.color = "red";
  }
}
function unCheckAll() {
  var checkboxes = document.getElementsByClassName("checkbox");
  // var product1ok = document.getElementsByClassName("product1");
  // checkboxes.style.color="purple";
  for (var checkbox of checkboxes) {
    checkbox.checked = false;
    checkbox.closest("div").parentNode.style.color = "orange";
  }
}
var textBox2 = document.getElementById("input-sub");
textBox2.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    submit();
  }
});

function deleteItem(event) {
  var products = document.getElementById("products");
  var div = event.currentTarget.parentNode;
  products.removeChild(div);
}

function checkItem(event) {
  var color = event.currentTarget.checked ? "red" : "orange";
  event.currentTarget.closest("div").parentNode.style.color = color;
}

//status:check  => move to done col2
checks = document.getElementById("'+ randidcheck +'");
checks.addEventListener("click", moveItem)
function moveItem(event) {
  if(check.checked) {
    var item = event.currentTarget.closest("div");
    item.style.backgroundColor ="red";
  }
  
}
