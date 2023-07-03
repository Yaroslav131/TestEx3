import { useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

import signOutImg from '../../../assets/images/singOut.svg';
import { auth, googleProvider } from '../../../firebase';
import { addOrUpdateUser } from '../../../api/firebaseApi';

import './styles.css';
import { UserAppeals } from '../../../config';

interface Iprops {
    handleCloseSlideMenu: () => void;
}

const AuthButton = (props: Iprops) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userAvatar, setUserAvatar] = useState<string | undefined>(signOutImg);

    const handleAuthStateChanged = useCallback((user: any) => {
        if (user) {
            setIsAuthenticated(true);
            const avatar = user.photoURL;
            setUserAvatar(avatar!);
        } else {
            setIsAuthenticated(false);
            setUserAvatar(signOutImg);
        }
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);
        return () => unsubscribe();
    }, [handleAuthStateChanged]);

    const handleGoogleSignIn = useCallback(() => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                setIsAuthenticated(true);
                const avatar = result?.user?.photoURL;
                setUserAvatar(avatar!);
                addOrUpdateUser(result.user);
                toast.success(`Добро пажаловать ${result.user?.displayName}`);
            })
            .catch(() => {
                toast.error(UserAppeals.TryAgain);
            });
    }, []);

    const handleSignOut = useCallback(() => {
        auth.signOut()
            .then(() => {
                setIsAuthenticated(false);
                setUserAvatar(signOutImg);
            })
            .catch(() => {
                toast.error(UserAppeals.TryAgain);
            });

        props.handleCloseSlideMenu();
    }, [props]);

    const buttonClassName = useMemo(() => {
        return isAuthenticated ? 'sing-button singOut-button' : 'sing-button singIn-button';
    }, [isAuthenticated]);

    return (
        <button onClick={isAuthenticated ? handleSignOut : handleGoogleSignIn} className={buttonClassName}>
            <img src={userAvatar} className="user-img" alt="User icon" />
        </button>
    );
};

export default AuthButton;
