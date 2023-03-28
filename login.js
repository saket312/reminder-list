let userList = [];
const isAlreadyExistingUser = (username) => {
    let userListJSON = localStorage.getItem("userList");
    userList = (userListJSON == null) ? [] : JSON.parse(userListJSON);
    for (let user of userList) {
        if (user[0] === username) return true;
    }
    return false;
}
const signUp = () => {
    let username = document.getElementById('signUpUsername').value;
    let password = document.getElementById('signUpPassword').value;
    if (isAlreadyExistingUser(username)) {
        alert("Username Already Exists. please Choose different username");
    }
    else {
        let userListJSON = localStorage.getItem("userList");
        userList = (userListJSON == null) ? [] : JSON.parse(userListJSON);
        userList.push([username, password]);
        localStorage.setItem("userList", JSON.stringify(userList));
        alert("User Created. Now Login");
        location.replace("index.html");
    }
}

const login = () => {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;
    let userListJSON = localStorage.getItem("userList");
    userList = (userListJSON == null) ? [] : JSON.parse(userListJSON);
    for (let user of userList) {
        if (user[0] === username && user[1] !== password) {
            alert("Wrong Password");
            return;
        }
        else if (user[0] === username && user[1] === password) {
            localStorage.setItem("currUser", username);
            location.replace("mainPage.html");
            return;
        }
    }
    alert("User Does Not Exist");

}

///--------------------------

