import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {fetchUser} from "../../features/api/accountApi.ts";
import {createToken} from "../../features/user/constans.ts";

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleClickSignIn = () => {
        dispatch(fetchUser(createToken(login, password)));
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