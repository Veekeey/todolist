//form validation

document.querySelector(".submit").addEventListener("click", (e) =>{
  e.preventDefault();

  let userName = document.querySelector(".input-name").value;
  let userLast = document.querySelector(".last-name").value;
  let email = document.querySelector(".email").value;
  let userPassword = document.querySelector(".input-password").value;
  let confirmPassword = document.querySelector(".confirm-password").value;
  let checkBox = document.getElementById("checkbox");


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

    if(checkBox.checked){
      alert("go!");
    }else{
      alert("check")
    }
    

    // window.localStorage.setItem("Name", userName.value);
    // window.localStorage.setItem("Email", email);
    // window.localStorage.setItem("password", confirmPassword);

    const users = {
      FName: userName, 
      Lname: userLast,
      Email: email, 
      password: confirmPassword
    } 
     

      JSON.stringify(users);
      
      window.localStorage.setItem("users", "{\"First name\": userName\"last name\": userLast}");

  
});

