function adduser() {
    var user = document.getElementById("user").value;
    localStorage.setItem("User", user);
    window.location = "";
}