let str = [];
let strUpdate = "";
// ADD FUNCTION
function add() {
  var obj = { input: document.getElementById("new").value, checked: 0 };
  str.push(obj);
  display();
}
// DISPLAY FUNCTION
function display() {
  var strIncomplete = "";
  var strComplete = "";
  str.forEach((element, index) => {
    if (element["checked"] == 0) {
      strIncomplete +=
        '<li><input type="checkbox" onclick="check(this)" value=' +
        element["input"] +
        "/><lable>" +
        element["input"] +
        '</lable><input type="text"/><button class="edit" onclick="edit(this)" value=' +
        element["input"] +
        '>Edit</button><button class="delete" onclick="deletedata(this)" value=' +
        element["input"] +
        ">Delete</button></li>";
    } else {
      strComplete +=
        '<li><input type="checkbox" onclick="check(this)" value=' +
        element["input"] +
        "/><lable>" +
        element["input"] +
        '</lable><input type="text"/><button class="edit" onclick="edit(this)" value=' +
        element["input"] +
        '>Edit</button><button class="delete" onclick="deletedata(this)" value=' +
        element["input"] +
        ">Delete</button></li>";
    }
  });
  document.getElementById("incomplete").innerHTML = strIncomplete;
  document.getElementById("complete").innerHTML = strComplete;
}
// CHECK FUNCTION
function check(check) {
  str.forEach((element) => {
    if (check.value == element["input"]) {
      if (element["checked"] == 0) {
        element["checked"] == 1;
      } else {
        element["checked"] == 0;
      }
    }
  });
  display();
}

// DELETE FUNCTION
function deletedata(deletethis) {
  str.forEach((element, index) => {
    if (deletethis.value == element["input"]) {
      str.splice(index, 1);
    }
  });
  display();
}
// UPDATE FUNCTION
function update() {
    var update = document.getElementById("new").value;
    str.forEach(element => {
        if(strUpdate == element["input"]){
            element["input"]= update;
        }
        
    });
    display();
    document.getElementById("update").style.display="none";
    document.getElementById("add").style.display="block";
}
// EDIT

function edit(editValue) {
    strUpdate = editValue.value;
    document.getElementById('new').value=editValue.value;
    document.getElementById("update").style.display="block";
    document.getElementById("add").style.display="none";
    
}
