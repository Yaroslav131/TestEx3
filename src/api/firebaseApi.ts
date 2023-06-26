import { doc, updateDoc, getDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebase';

export const addSavedPlace = async (userId: string, placeId: number) => {
    const userRef = doc(db, 'users', userId);

    try {
        await updateDoc(userRef, {
            savedPlaces: arrayUnion(placeId.toString())
        });
        console.log('ID достопримечательности успешно добавлен в массив savedPlaces');
    } catch (error) {
        console.error('Ошибка при добавлении ID достопримечательности:', error);
    }
};

export const removeSavedPlace = async (userId: string, placeId: number) => {
    const userRef = doc(db, 'users', userId);

    try {
        await updateDoc(userRef, {
            savedPlaces: arrayRemove(placeId.toString())
        });
        console.log('ID достопримечательности успешно удален из массива savedPlaces');
    } catch (error) {
        console.error('Ошибка при удалении ID достопримечательности:', error);
    }
};

export const getAllSavedPlaces = async (userId: string) => {
    const userRef = doc(db, 'users', userId);

    try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const savedPlaces = userData?.savedPlaces || [];
            console.log('Все ID достопримечательностей:', savedPlaces);
            return savedPlaces;
        } else {
            console.log('Пользователь не найден');
            return [];
        }
    } catch (error) {
        console.error('Ошибка при получении ID достопримечательностей:', error);
        return [];
    }
};
