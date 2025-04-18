const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;

    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = Users.find(user => user.email === email && user.pass === pass) || false;
    if(!validUser){
        return alert("El usuario o contraseña ingresada es incorrecta");
    }

    localStorage.setItem("loged_user", JSON.stringify(validUser));
    
    alert(`Has iniciado sesión correctamente ${validUser.name}!`);

    window.location.href = "index.html";
});
