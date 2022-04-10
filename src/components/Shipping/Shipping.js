import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import styles from '../Login/Login.module.css'
const Shipping = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [user] = useAuthState(auth)
    const handleName =(e)=>{
        setName(e.target.value)
    }
    const handleAddress = (e)=>{
        setAddress(e.target.value)

    }
    const handlePhone = (e) => {
        setPassword(e.target.value)
    }

    const handleShippingSubmit = (event) => {
        event.preventDefault()
        
    }
    return (
        <div className={styles.formBody}>
        <div className={styles.formBackground}>
            <div className={styles.formContent}>
                <h3 className={styles.formTitle}>shipping</h3>
                <form onSubmit={handleShippingSubmit} >
                    <label htmlFor="name">name</label>
                    <input onBlur={handleName} required type="text" name="name" />
                    <label htmlFor="address">Address</label>
                    <input required  onBlur={handleAddress} type="address" name='address' />
                    <label  htmlFor="phone">phone</label>
                    <input required onBlur={handlePhone} type="number" name='number' />
                    <input className={styles.submitBtn} type="submit" value="add shipping info" />
                </form>
            </div>

        </div>

    </div>
    );
};

export default Shipping;