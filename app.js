var list = document.getElementById('list')

function todoItem(){

    //create li with Text node
    var items = document.getElementById('items');
    var li = document.createElement('li');
    var liText= document.createTextNode(items.value);
    li.appendChild(liText);
    list.appendChild(li);

    //create delete button
    var delBtn = document.createElement('button');
    var btnText = document.createTextNode("Delete");
    delBtn.appendChild(btnText);
delBtn.setAttribute('class','btnItems');
delBtn.setAttribute('onclick','btnItem(this)');
//create Edit button
var  editbtn = document.createElement('button');
var editText = document.createTextNode("Edit");
editbtn.appendChild(editText);
editbtn.setAttribute('class','btnItems');
editbtn.setAttribute('onclick','editItem(this)');
li.appendChild(editbtn);




    li.appendChild(delBtn);


    items.value = " ";
    // console.log(li);
}

function btnItem(e){
    e.parentNode.remove();
}

function deleteAll(){
    // list.style.display ="none";
    list.innerHTML = " ";
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter the value that you are edit",val);
    e.parentNode.firstChild.nodeValue = editValue;
}