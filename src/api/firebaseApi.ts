import { toast } from 'react-toastify';
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
                        const savedId = userData.savedId || [];

                        resolve(savedId);
                    } else {
                        toast.error("Пользователя не существует.")
                        resolve([]);
                    }
                })
                .catch((error) => {
                    toast.error("Пользователя не существует.")
                    reject(error);
                });
        } else {
            toast.error("Пользователь не авторизирован.")
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
                } else {
                    userRef.set(newUser)
                }
            })
            .catch(() => {
                toast.error("Пользователя не существует.")
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
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        } else {
            toast.error("Пользователя не существует.")
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
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        } else {
            toast.error("Пользователя не существует.")
            resolve();
        }
    });
};