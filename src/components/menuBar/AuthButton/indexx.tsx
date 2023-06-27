import  { useState, useEffect } from 'react';

import signOutImg from '../../../assets/imgs/singOut.svg';
import { auth, googleProvider } from '../../../firebase';
import { addOrUpdateUser } from '../../../api/firebaseApi'

import './styles.css';

interface Iprops {
    handleCloseSlideMenu: () => void
}

const AuthButton = (props: Iprops) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userAvatar, setUserAvatar] = useState<string | undefined>(signOutImg);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setIsAuthenticated(true);
                const avatar = user.photoURL;
                setUserAvatar(avatar!);
            } else {
                setIsAuthenticated(false);
                setUserAvatar(signOutImg);
            }
        });
    }, []);

    const handleGoogleSignIn = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                setIsAuthenticated(true);
                const avatar = result?.user?.photoURL;
                setUserAvatar(avatar!);
                addOrUpdateUser(result.user);
            })
            .catch((error) => {
                // Обработка ошибки авторизации Google
            });
    };

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                setIsAuthenticated(false);
                setUserAvatar(signOutImg);
            })
            .catch((error) => {
                // Обработка ошибки выхода
            });

            props.handleCloseSlideMenu()
    };

    return (
        <button
            onClick={isAuthenticated ? handleSignOut: handleGoogleSignIn}
className = { isAuthenticated? 'sing-button singOut-button': 'sing-button singIn-button' }
    >
    <img src={userAvatar} className="user-img" alt="" />
        </button >
    );
};

export default AuthButton;
