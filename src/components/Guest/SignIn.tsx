import {useState} from "react";

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClickSignIn = () => {
        // TODO handleClickSignIn
        alert('Sign in')
    }

    const handelClickClear = () => {
        setLogin('');
        setPassword('');
    }

    return (
        <>
            <label>Login:
                <input
                    type={'text'}
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </label>
            <label>Password:
                <input type={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button onClick={handleClickSignIn}>Sign in</button>
            <button onClick={handelClickClear}>Clear</button>
        </>
    );
};

export default SignIn;