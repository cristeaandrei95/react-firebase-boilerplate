import app from 'firebase/app';
import 'firebase/auth';
import config from '../env/firebaseConfig.json';

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***
    createUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    passwordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;