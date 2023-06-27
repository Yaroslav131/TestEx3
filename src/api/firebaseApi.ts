import { db, auth } from '../firebase';
import firebase from 'firebase/compat/app';

interface User {
    id: string;
    name: string;
    email: string;
    savedId: number[];
}

export const getCurrentUserSavedId = (): Promise<number[]> => {
    return new Promise((resolve, reject) => {
        const currentUser = auth.currentUser;

        if (currentUser) {
            const userId = currentUser.uid;

            db.collection("users")
                .doc(userId)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const userData = doc.data() as User;
                        console.log("Current User:", userData);
                        const savedId = userData.savedId || [];
                        console.log("Saved IDs:", savedId);
                        resolve(savedId);
                    } else {
                        console.log("User does not exist");
                        resolve([]);
                    }
                })
                .catch((error) => {
                    console.error("Error getting current user: ", error);
                    reject(error);
                });
        } else {
            console.log("No user is currently signed in");
            resolve([]);
        }
    });
};

export const addOrUpdateUser = (user: any) => {
    if (user) {
        const newUser: User = {
            id: user.uid,
            name: user.displayName || '',
            email: user.email || '',
            savedId: [],
        };

        const userRef = db.collection('users').doc(newUser.id);
        userRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    console.log('User already exists with ID: ', newUser.id);
                } else {
                    userRef.set(newUser)
                        .then(() => {
                            console.log('User added with ID: ', newUser.id);
                        })
                        .catch((error) => {
                            console.error('Error adding user: ', error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error checking user existence: ', error);
            });
    }
};

export const addUserSavedId = (index: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        const currentUser = auth.currentUser;

        if (currentUser) {
            const userId = currentUser.uid;

            db.collection("users")
                .doc(userId)
                .update({
                    savedId: firebase.firestore.FieldValue.arrayUnion(index),
                })
                .then(() => {
                    console.log("Index added to savedId array:", index);
                    resolve();
                })
                .catch((error) => {
                    console.error("Error adding index to savedId array: ", error);
                    reject(error);
                });
        } else {
            console.log("No user is currently signed in");
            resolve();
        }
    });
};

export const removeUserSavedId = (index: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        const currentUser = auth.currentUser;

        if (currentUser) {
            const userId = currentUser.uid;

            db.collection("users")
                .doc(userId)
                .update({
                    savedId: firebase.firestore.FieldValue.arrayRemove(index),
                })
                .then(() => {
                    console.log("Index removed from savedId array:", index);
                    resolve();
                })
                .catch((error) => {
                    console.error("Error removing index from savedId array: ", error);
                    reject(error);
                });
        } else {
            console.log("No user is currently signed in");
            resolve();
        }
    });
};