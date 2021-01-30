import firebase from "firebase/app";
import "firebase/storage";

const requireEnvVar = (varName) => {
  const envVar = process.env[`REACT_APP_${varName}`];
  if (!envVar) {
    throw new Error(
      `Setup error. ${process.env.NODE_ENV !== "production" ? varName : ""}`
    );
  }

  return envVar;
};

const firebaseConfig = {
  apiKey: requireEnvVar("FIREBASE_API_KEY"),
  authDomain: requireEnvVar("FIREBASE_AUTH_DOMAIN"),
  projectId: requireEnvVar("FIREBASE_PROJECT_ID"),
  storageBucket: requireEnvVar("FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: requireEnvVar("FIREBASE_MESSAGING_SENDER_ID"),
  appId: requireEnvVar("FIREBASE_APP_ID"),
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();

export const uploadPicture = (userId, file, type) => {
  if (!type || !["user_picture", "wallpaper"].includes(type)) {
    return null;
  }
  const pictureRef = storage.ref(`${type}s/${userId}`);
  const task = pictureRef.put(file);

  return task;
};

export const getPicture = (userId, type) => {
  if (!type || !["user_picture", "wallpaper"].includes(type)) {
    console.error("Wrong type passed in getPicture function");
    return null;
  }

  return storageRef
    .child(`${type}s/${userId}`)
    .getDownloadURL()
    .then((url) => url)
    .catch(() => null);
};
