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

  addUser(
    name,
    email,
    address,
    city,
    state,
    postalcode,
    phone,
    capacity,
    lat,
    long,
    service,
    description
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
      name,
      address,
      email,
      city,
      state,
      postalcode,
      phone,
      capacity,
      lat,
      long,
      service,
      description,
      uid: new Date().getTime(),
    };

    // adding data here
    this.db
      .collection("users")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        // NotificationManager.success("A new user has been added", "Success");
        alert("Sucess : New User Added");
        // window.location = "/";
      })
      .catch((error) => {
        // NotificationManager.error(error.message, "Create user failed");
        alert("Failure : New User NOT Added" + "  " + error);
        // this.setState({ isSubmitting: false });
      });
  }

  addCustomer(
    name,
    age,
    email,
    phone,
    city,
    state,
    postalcode,
    lat,
    long,
    complete,
    helped
  ) {
    const data = {
      name,
      age,
      email,
      phone,
      city,
      state,
      postalcode,
      lat,
      long,
      complete,
      helped,
      uid: new Date().getTime(),
    };

    // adding data here
    this.db
      .collection("customers")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        // NotificationManager.success("A new user has been added", "Success");
        alert("Sucess : New Customer Added");
        // window.location = "/";
      })
      .catch((error) => {
        // NotificationManager.error(error.message, "Create user failed");
        alert("Failure : New Customer NOT Added" + "  " + error);
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