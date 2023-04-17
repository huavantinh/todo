function submit() {
  let textBox = document.getElementById("input-sub");
  let content = textBox.value;
  let randId = Math.random(); // 0.1235
  // onclick="checkItem(' +
  //     randId +
  //     ')"
  $("#products").append(
    '<div style="color: orange" class="product1" id="' +
      randId +
      '"> ' +
      content +
      '<div><input  class="checkbox" type="checkbox" /></div> <button onclick="deleteItem(' +
      randId +
      ')">Delete</button>' +
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

function deleteItem(id) {
  var products = document.getElementById("products");
  var div = document.getElementById(id);
  products.removeChild(div);
}

// function checkItem() {
//   var checkboxes = document.getElementsByClassName("checkbox");
//   var product1 = document.getElementsByClassName("product1");

  
//   for (var i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//         product1.style.color = "red";
//       break;
//     } else {
//         product1.style.color = "blue";
//     }
//   }
// }

const checkBox = document.getElementsByClassName("checkbox");
checkBox.addEventListener("change", updateBackground);
updateBackground();

function updateBackground() {
  document.body.style.backgroundColor = checkBox.checked ? "red" : "blue";
}
