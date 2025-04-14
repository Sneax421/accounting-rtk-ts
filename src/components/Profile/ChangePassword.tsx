import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {changePassword} from "../../features/api/accountApi.ts";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}: Props) => {

    const [oldPassword, setOlPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useAppDispatch();

    const handleClickSave = () =>{

        if(newPassword === confirmPassword){
            dispatch(changePassword({newPassword, oldPassword}));
        }else{
            alert('New password and confirm password are different')
        }
        close();
    }

    const handleClickClear = () => {
        setOlPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <>
            <label>Old Password:
                <input type="password"
                       value={oldPassword}
                       onChange={(e) => setOlPassword(e.target.value)}/>
            </label>

            <label>New Password:
                <input type="password"
                       value={newPassword}
                       onChange={(e) => setNewPassword(e.target.value)}/>
            </label>

            <label> Confirm Password:
                <input type="password"
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>

            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>

        </>
    );
};

export default ChangePassword;