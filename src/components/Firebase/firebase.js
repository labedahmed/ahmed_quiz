import app from 'firebase/app';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCjo6UaeBNxgt9xiD8MA7K4eGVZTaTgUtE",
    authDomain: "ahmed-quiz.firebaseapp.com",
    projectId: "ahmed-quiz",
    storageBucket: "ahmed-quiz.appspot.com",
    messagingSenderId: "1035998682842",
    appId: "1:1035998682842:web:4ab6c3136aaff94cdc8fe3"
  };



class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();

    }

    // inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    // Déconnexion
    signoutUser = () => this.auth.signOut();

}


    export default Firebase;