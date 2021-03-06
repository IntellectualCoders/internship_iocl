import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyCXUr5-hMJdyhff77UtXMEBBRQnHTcN0zw",
  authDomain: "iocl-telemedicine.firebaseapp.com",
  projectId: "iocl-telemedicine",
  storageBucket: "iocl-telemedicine.appspot.com",
  messagingSenderId: "356117142866",
  appId: "1:356117142866:web:7606944bc2bc573c59ae8b"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  dbreturns() {
    return this.db;
  }

  authreturns(){
    return this.auth;
  }

  login(email, password) {
    
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  addAppointments(
    essNo,
    docName,
    specialization,
    patient,
    date,
    time,
    isprescription,
    prescription,
    status,
  ) {
    // if (!this.auth.currentUser) {
    //   return alert("Not authorized");
    // }

    // return this.db.doc(`users/${this.auth.currentUser.uid}`).set({
    //   name,
    //   email,
    //   city,
    //   state,
    //   postalcode,
    // });
    const data = {
      essNo,
      docName,
    specialization,
    patient,
    date,
    time,
    isprescription,
    prescription,
    status,
      uid: new Date().getTime(),
    };

    // adding data here
    this.db
      .collection("appointments")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        // NotificationManager.success("A new user has been added", "Success");
        alert("Sucess : Appointment booked");
        // window.location = "/";
      })
      .catch((error) => {
        // NotificationManager.error(error.message, "Create user failed");
        alert("Failure : Unable to book the appointment" , "  " , error);
        // this.setState({ isSubmitting: false });
      });
  }

  addVaccinePatients(
    drive,
    name,
    age,
    email,
    relation,
  ) {
    const data = {
      drive,
      name,
      age,
      email,
      relation,
      uid: new Date().getTime(),
    };

    // adding data here
    this.db
      .collection("vaccination")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        // NotificationManager.success("A new user has been added", "Success");
        alert("Sucess : New vaccine patient Added");
        // window.location = "/";
      })
      .catch((error) => {
        // NotificationManager.error(error.message, "Create user failed");
        alert("Failure : New Vaccine Patient NOT Added" , "  " , error);
        // this.setState({ isSubmitting: false });
      });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.email;
  }

  async getCurrentUserDetail(email) {
    await this.db
      .collection("users")
      .where("email", "==", `${email}`)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());

        return data[0];
      });
  }
}

export default new Firebase();