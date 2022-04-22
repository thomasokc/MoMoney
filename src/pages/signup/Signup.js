import { useState } from 'react'

import styles from './Signup.module.css'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, name)
    }

    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Sign Up</h2>
            <label>
                <span>email:</span> 
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <label>
                <span>password:</span>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </label>
            <label>
                <span>user name:</span>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            </label>
            <button className='btn'>Sign Up</button>
        </form>
    )
}