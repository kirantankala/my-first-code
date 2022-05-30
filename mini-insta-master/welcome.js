import firebaseApp from "./firebase.js";
import{getAuth,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const auth=getAuth(firebaseApp);

onAuthStateChanged(auth,(user)=>{
  if(!user){
    location.replace("index.html")
  }
  else{
    document.getElementById("mockmsg").innerHTML="hello, "+user.email
  }
})
//for gitbash
//functionality of logout
document.getElementById("buffer").addEventListener('click',function(){
    signOut(auth);
})
