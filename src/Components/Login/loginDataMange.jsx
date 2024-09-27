import { getAuth, GoogleAuthProvider, initializeAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../../firebaseConfig/firebaseConfig";
import { initializeApp } from "firebase/app";



initializeApp(firebaseConfig);


const auth = getAuth();

export const googlePopupLogin = ()=>{

    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth,provider)
    .then(result=>{
        return {
            popupGoogle: true,
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL
        }
    })
}



export const passwordUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        return{
            emailLogin: true,
            displayName: result.user.displayName,
            email: result.user.email
        }}
    )

}

