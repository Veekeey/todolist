//form validation

document.querySelector(".submit-form").addEventListener("click", (e) =>{
  e.preventDefault();

  let userName = document.querySelector(".input-name").value;
  let userLast = document.querySelector(".last-name").value;
  let email = document.querySelector(".email").value;
  let userPassword = document.querySelector(".input-password").value;
  let confirmPassword = document.querySelector(".confirm-password").value;


    if(userName === ""){
      userName.style.borderColor = "red";
      alert("field cannot be empty");
    }

    
    if(userLast === ""){
      userLast.style.borderColor = "red";
      alert("field cannot be empty");
    }

    if(userPassword.length < 8){
      alert("Password must be at least 8 characters")
    }

    if(confirmPassword !== userPassword){
      alert("Password does not match");
    }


    window.localStorage.setItem("First name", userName);
    window.localStorage.setItem("Last name", userLast);
    window.localStorage.setItem("Email", email);
    window.localStorage.setItem("password", confirmPassword);

    window.location.replace('/index (4).html');
  
});

