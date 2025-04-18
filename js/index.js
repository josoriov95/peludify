const logedUser = JSON.parse(localStorage.getItem("loged_user")) || false;
if(!logedUser){
    window.location.href = "login.html";
}

const fullName = document.querySelector("#full-name");
fullName.textContent = `${logedUser.name} ${logedUser.lastName}`

const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
    alert(`Has cerrado sesión, hasta pronto ${logedUser.name}`);
    localStorage.removeItem("loged_user");
    window.location.href = "login.html";
});