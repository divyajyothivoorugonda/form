function myFunction() {
    let name = document.getElementById("name").value;
    let desc = document.getElementById("description").value;
    let assignedTo = document.getElementById("assignedTo").value;
    let dueDate = document.getElementById("dueDate").value;
    let status = document.getElementById("status").value;
    if(name != '' && desc!='' && assignedTo!=''){
        var taskData = [];
        taskData[taskData.length] = [name,desc,assignedTo,dueDate,status];
        console.log(taskData.length);
        document.getElementById('card-deck').innerHTML += 
        '<br/><div class="card" id="cardID'+ taskData.length +'"><div class="card-body bg-light"><h5 class="card-title">'+name+'</h5><h6 class="card-subtitle mb-2 text-muted">Assigned to: '+ assignedTo +'</h6><p class="card-text">' + desc + '</p><p class="card-text">Due date: '+ dueDate+'</p><p class="card-text">Status: '+status+' </p><button type="submit" class="btn btn-primary mt-2" onclick="">Delete</button></div>';
    }
    else{
        alert('Please fill all required fields');
    }
}
