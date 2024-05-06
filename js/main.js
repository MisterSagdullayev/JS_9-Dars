let toDoList = [];
let tr = 1;
let allTask = 0;
let completeTask = 0;

function addTask(){
    let taskName = document.getElementById("taskInput").value;
    if(taskName !=""){
        let object = {
            tartib: tr++,
            name: taskName,
            complete: false
        };
        toDoList.push(object);
        chizish();
        allTask = toDoList.length;
        document.getElementById("allTask").innerText = allTask;
    
    }
}

function chizish(){
    let list = "";
    toDoList.forEach(function(item){
        list += '<li class="list-group-item">' +
                    '<input '+ (item.complate ? "checked": "") +' onchange="complated(this)" type="checkbox" id="' + item.tartib + '"><label for="'+ item.tartib +'" class="ml-2">'+ item.name +'</label>' + 
                '</li>'
        console.log(list);
        document.getElementById("list").innerHTML = list;
        document.getElementById("completeTask").innerText = completeTask;
        let progressW = (completeTask * 100) / allTask;
        document.getElementById("progress").style.width = progressW + "%";
    });
}

function complated(input){
    let searchId = input.getAttribute("id");
    let checked = input.getAttribute("checked");
    toDoList.forEach(function(item,i){
        if(item.tartib == searchId){
            toDoList[i].complate = item.complate ? false : true;
        }
    });
    console.log(checked);
    if(checked == null){
        completeTask++;
    }else{
        completeTask--;
    }
    chizish();
}