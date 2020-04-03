var btnCreateTask= document.querySelector(".btnCreateTask");

var inputId=document.querySelector("#id");
var inputName=document.querySelector("#task");
var inputAssignee=document.querySelector("#assignee");
var inputStatus = document.querySelectorAll('#checkOption');
var dateNow= new Date();
var filter = document.querySelector(".filter");
var taskList = document.querySelector(".tableItems");



btnCreateTask.addEventListener("click", getValues)

function getValues(e){
    //checks for checked box
        var checkedValue = null; 
    for(var i=0; inputStatus[i]; ++i){
        if(inputStatus[i].checked){
            checkedValue = inputStatus[i].value;
            break;
        } 
        if(checkedValue==""){
            alert("You must select a status");
        return false;;
        }
    }

    if(inputName.value===""){
        alert("You must insert a task name");
        return false;;
    }else if(inputAssignee.value==""){
        alert("You must choose a designee");
        return false;;
    }

    //table insertions
    var table = document.querySelector(".myTable");
    var newRow = table.insertRow(1);
    newRow.classList.add("tableRows");
    
    var td1 = newRow.insertCell(0);
    var td2 = newRow.insertCell(1);
    var td3 = newRow.insertCell(2);
    var td4 = newRow.insertCell(3);
    var td5 = newRow.insertCell(4);
    var td6 = newRow.insertCell(5);

    td1.innerHTML = inputId.value;
    td2.innerHTML = inputName.value;
    td3.innerHTML = inputAssignee.value;
    td4.innerHTML = checkedValue;
    td5.innerHTML = dateNow;

   var deleteIcon=document.createElement("a");
    deleteIcon.setAttribute("href","#")
    deleteIcon.classList=("deleteIconClass fa fa-trash ");
    td6.appendChild(deleteIcon);

  //blanks text boxes for new insertion of data;
    inputId.value=Number(inputId.value)+1;
   
    inputName.value="";
    inputAssignee.value="";
    inputStatus.uncheck;
    e.preventDefault();

    // var myTable = document.querySelector(".myTable");
    // for(var i=0; i<myTable.row.length; i++){
    //     table.rows[i].onclick = function()
    //     {
    //         index = this.parentElement.rowIndex;
    //         console.log(index);
    //     }
    // }
    
    //storeInLocalStorage(inputId.value, inputName.value, inputAssignee.value,checkedValue, dateNow)
    table.addEventListener("click", deleteR);
    filter.addEventListener("keyup", filterName);
}
document.addEventListener("DOMContentLoaded", getTasks());


function deleteR(e) {
    if(e.target.classList.contains('deleteIconClass')) {
       if(confirm("The item clicked will be deleted"));
        e.target.parentElement.parentElement.remove();
    }
    //remove from local storage
    removeFromLocalStorage(e.target.parentElement.parentElement);

   }  

   function removeFromLocalStorage(item){
    var tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(item.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function filterName(){
    var filter, td, tr;
    filter = inputName.value.toUpperCase();
    var table = document.querySelector(".myTable");
    tr = table.getElementsByTagName("tr");
    console.log(tr.length+"asdfsd");
    
    // for (i = 0;i < tr.length; i++){
    //     td = tr[i].getElementsByTagName("td")[0];
    //     console.log(tr+"asdfsd");
    //     if(td){
    //         txtValue=td.textContent || td.innerText;
    //         if(txtValue.toUpperCase().indexOf(filter)>-1){
    //             tr[i].style.display = "";
    //         }else{
    //             tr[i].style.display= "none";
    //         }
    //     }
    // }

}
// Save to local storage
// function storeInLocalStorage(id, name, assignee, status, date){
//     var tasks=[];

//     if(localStorage.getItem('tasks')===null){
//         tasks=[];
//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push({id, name, assignee, status, date});

//     localStorage.setItem("tasks",JSON.stringify(tasks));
// }

// Get tasks from local storage
function getTasks(){
    var tasks=[];
    console.log(localStorage.getItem('tasks'));
    if(localStorage.getItem('tasks')===null){
        tasks=[];
      
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log(tasks);
    }

    tasks.forEach(function(task){
       
        //table insertions
    var table = document.querySelector(".myTable");
    var newRow = table.insertRow(1);
    newRow.classList.add("tableRows");
    
    var td1 = newRow.insertCell(0);
    var td2 = newRow.insertCell(1);
    var td3 = newRow.insertCell(2);
    var td4 = newRow.insertCell(3);
    var td5 = newRow.insertCell(4);
    var td6 = newRow.insertCell(5);

    td1.innerHTML = task.id;
    td2.innerHTML = task.name;
    td3.innerHTML = task.assignee;
    td4.innerHTML = task.status;
    td5.innerHTML = task.date;

   var deleteIcon=document.createElement("a");
    deleteIcon.setAttribute("href","#")
    deleteIcon.classList=("deleteIconClass fa fa-trash ");
    td6.appendChild(deleteIcon);
    });

}




