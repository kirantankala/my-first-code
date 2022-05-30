document.getElementById("loginform").addEventListener("submit",(event)=>{
  event.preventDefault();
})
import firebaseApp from "./firebase.js";
import{getAuth,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

export const auth=getAuth(firebaseApp);

onAuthStateChanged(auth,(user)=>{
  if(user){
    location.replace("welcome.html")
  }
})


document.getElementById("loginbx").addEventListener('click',function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("finalpassword").value;
  signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
          document.getElementById("errormsg").innerHTML = error.message
      })
})

document.getElementById("signupbx").addEventListener('click',function(){
  const email=document.getElementById("emails").value
  const username=document.getElementById("username").value
  const password=document.getElementById("password").value
  const conformpassword=document.getElementById("conformpassword").value
  const usercredentials= createUserWithEmailAndPassword(auth,email,password)
  .catch((error)=>{
    if(password!=conformpassword){
      alert("check your password again")
    }
    document.getElementById("errormsgs").innerHTML=error.message
  })
})


