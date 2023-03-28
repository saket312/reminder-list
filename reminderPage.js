let user = localStorage.getItem("currUser");
let storageList = localStorage.getItem(user);
let list = (storageList == null) ? [] : JSON.parse(storageList);

const editItem = (index) => {
    let newTask = prompt("Enter Updated Reminder", list[index][0]);
    while (newTask === "") {
        newTask = prompt("Enter Updated Reminder (Can't be Empty)", list[index][0]);
    }
    if(newTask !== null) {
        list[index][0] = newTask;
        localStorage.setItem(user, JSON.stringify(list));
        update();
    }
}
const deleteItem = (index) => {
    list.splice(index, 1);
    localStorage.setItem(user, JSON.stringify(list));
    update();
}
const tickItem = (index) => {
    list[index][1] = !list[index][1];
    localStorage.setItem(user, JSON.stringify(list));
    update();
}
const update = () => {
    // filling the html
    let strHTML = '';
    list.forEach((element, index) => {
        if (element[1]) strHTML += '<tr><td class="col1">' + (index + 1) + '</td><td class="col2">' + (element[0]) + '</td><td class="col3"><button onclick = tickItem(' + index + ') title="Disable"><i class="fa fa-times"></i></button><button onclick = editItem(' + index + ') title="Edit"><i class="fa fa-edit" ></i></button><button onclick = deleteItem(' + index + ') title="Delete"><i class="fa fa-trash"></i></button></td></tr>';
        else strHTML += '<tr><td class="col1">' + (index + 1) + '</td><td class="col2"><s>' + (element[0]) + '</s></td><td class="col3"><button onclick = tickItem(' + index + ') title="Enable"><i class="fa fa-check"></i></button><button onclick = editItem(' + index + ') title="Edit"><i class="fa fa-edit" ></i></button><button onclick = deleteItem(' + index + ') title="Delete"><i class="fa fa-trash"></i></button></td></tr>';
    });
    document.getElementById('tableBody').innerHTML = strHTML;

}
const addItem = () => {
    let task = document.getElementById('task').value;
    if (task === '') {
        alert("Please Enter Reminder");
    }
    else {
        list.push([task, true]);
        localStorage.setItem(user, JSON.stringify(list));
        update();
        document.getElementById('task').value = '';
    }
}
const clearAll = () => {
    if (confirm("Do you want to clear all?")) {
        list = [];
        localStorage.setItem(user, JSON.stringify(list));
        update();
    }
}
const logout = () => {
    localStorage.setItem("currUser", null);
    location.assign('index.html');
}
update();
document.getElementById('usernameDisplay').innerHTML = `<h2>Welcome, ${user}</h2>`