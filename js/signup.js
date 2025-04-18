const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;
    const birth = document.querySelector("#birth").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;

    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const isRegistered = Users.find(user => user.email === email);

    if (isRegistered) {
        return alert("El correo indicado ya se encuentra en uso. Intenta iniciar sesión.");
    }

    Users.push({name: name, lastname: lastname, birth: birth, gender: gender, email: email, pass: pass})
    localStorage.setItem("users", JSON.stringify(Users));

    alert("Se ha realizado el registro exitosamente, ya puedes iniciar sesión!");

    window.location.href = "login.html";
});