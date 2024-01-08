import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setUserToken } from '../store/appVars';
import { auth } from '../services/firebaseConfig';
import { useSelector } from 'react-redux';
import { deleteUser } from "firebase/auth";

const Dashboard = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.appVars.userData)
    const logout = () => {
        auth.signOut()
    }

    const deleteAccount = () => {
        const user = auth.currentUser;
        deleteUser(user).then(() => {
            console.log("User deleted successfully");
        }).catch((error) => {
            console.error("Error deleting user:", error);
        });
    }

    

    useEffect(() => {
        /*
        console.log('DASHBOARD YÜKLENDİ')
        let token = localStorage.getItem('token')
        if(token) {
            console.log(auth.)
            
        }
        else console.log('TOKEN YOK')
        */
    }, [])


    return (
        <div className='flex flex-col gap-6 p-4'>
            <span>DASHBOARD</span>
            <span>Signed in: <b>{userInfo.email}</b></span>
            { userInfo.displayName ? <span>Display Name: <b>{userInfo.displayName}</b></span> : <></> }
            
            { !userInfo.emailVerified ? <span className='text-sm text-amber-400'>Email is not verified</span> : <></>}
            <span>Signed in: <b>{userInfo.email}</b></span>
            <button onClick={logout} type="button" className="text-red-700 w-[200px] hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Sign out</button>
            <button onClick={deleteAccount} type="button" className="text-red-700 w-[200px] hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete account</button>
            <span className='text-white'>Hesabı silme butonu çalışmazsa, hesaptan çıkıp bidaha girip hemen hesabı silme butonuna basılmalı</span>
        </div>
        

    )
}

export default Dashboard