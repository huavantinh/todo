function submit() {
  let textBox = document.getElementById("input-sub");
  let content = textBox.value;
  let randId = Math.random(); // 0.1235
 
  $("#products").append(
    '<div style="color: orange" class="product1" id="' +
      randId +
      '"> ' +
      content +
      '<div><input  class="checkbox" type="checkbox"  onclick="checkItem(event)"/></div> <button onclick="deleteItem(event)">Delete</button>' +
      "</div>"
  );
  textBox.value = "";
}

// const button2 = document.getElementById("delete")
// button2.addEventListener("click", delete2);
function delete2() {
  var products = document.getElementById("products");
  products.innerHTML = "";
}

function checkAll() {
  var checkboxes = document.getElementsByClassName("checkbox");
  for (var checkbox of checkboxes) {
    checkbox.checked = true;
  }
}

function unCheckAll() {
  
  var checkboxes = document.getElementsByClassName("checkbox");
  for (var checkbox of checkboxes) {
    checkbox.checked = false;
  }
}

var textBox2 = document.getElementById("input-sub");

textBox2.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    submit();
  }
});

function deleteItem(event) {
debugger
  var products = document.getElementById("products");
  var div = event.currentTarget.parentNode.parentNode;
  products.removeChild(div);
}

function checkItem(event) {
  var color = event.currentTarget.checked ? "red" : "orange";
  event.currentTarget.closest("div").parentNode.style.color = color;

}

// var checkBox = document.getElementById(id);
// checkBox.addEventListener("change", updateBackground);
// updateBackground();

// function updateBackground() {
//   document.body.style.backgroundColor = checkBox.checked ? "red" : "blue";
// }
