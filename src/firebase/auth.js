import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const userSignIn = async (email, password) => {
    const auth = getAuth();
    try {
      let response = await  signInWithEmailAndPassword(auth, email, password)
        // Signed in 
        return response.user;
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      throw error;
    }
}

export const userRegister = async (email, password) => {
  const auth = getAuth();
  try {
    let response = await  createUserWithEmailAndPassword(auth, email, password)
      // Signed in 
      return response.user;
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    throw error;
  }
}


export const userSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth)
      // Sign-out successful.
      return "Sign-out successful";
    } catch (error) {
      console.log(error);

    }
}