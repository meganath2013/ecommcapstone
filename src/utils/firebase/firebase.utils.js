// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {getAuth, 
    GoogleAuthProvider,
    onAuthStateChanged, 
    signInWithPopup,
     signInWithRedirect, createUserWithEmailAndPassword, 
     sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth'

import {doc,getDoc,getFirestore, 
    setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBKlOL-H-5fpAncZkLQxTJ8GD0ONfMc-HM",
    authDomain: "crwn-clothing-db2-e8979.firebaseapp.com",
    projectId: "crwn-clothing-db2-e8979",
    storageBucket: "crwn-clothing-db2-e8979.appspot.com",
    messagingSenderId: "852911099166",
    appId: "1:852911099166:web:dee48ca9e5bc4b07facd0f"
  };    


// Initialize Firebase

const FirebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
    prompt:'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,GoogleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth,GoogleProvider);



// DB process
export const db =getFirestore();

// export const addCollection = async (collectionKey,objectsToAdd) =>  {
//     const collectionRef = collection(db,collectionKey);
//     const batch=writeBatch(db);
//     objectsToAdd.forEach(object => {
//         const docRef=doc(collectionRef,object.title.toLowerCase());
//         batch.set(docRef,object);
        
//     });
//     await batch.commit();
// };

export const getCollectionData = async ()=>{
    const collectionRef= collection(db,'categories');
    const q =query(collectionRef);
    const querySnapShot=await getDocs(q);

    const categoryMap=querySnapShot.docs.reduce((acc, dataShot)=>{
        const {title, items}=dataShot.data();
        console.log("title "+title+" items : "+dataShot.data());
        acc[title.toLowerCase()]=items;
        return acc;
    },{})

    return categoryMap;

}
export const createUserDocumentFromAuth =async (user,additionalInfo={})=>{
    if(!user) return;

    const userDocRef =doc(db,'users',user.uid);
    const userSnapSht =await getDoc(userDocRef);


    if(!userSnapSht.exists())
    {
        const {displayName, email} = user;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });

        }catch(error){
            console.log('error creating user',error.message);
        }
    }

    return userDocRef;
}

export const signOutUser = async () => await signOut(auth)

export const createAuthUserwithEmailandPassword =async (email,password)=>{
    if(!email || !password) return;
    /*below is  library fn of firebase*/
    return await createUserWithEmailAndPassword(auth,email,password);
    }
export const signInAuthWithEmailAndPassword =async (email,password)=>{
        if(!email || !password) return;
        /*below is  library fn of firebase*/
        return await signInWithEmailAndPassword(auth,email,password);
        }
export const onAuthStateChangedListener =(callback) =>{
onAuthStateChanged(auth, callback)
}