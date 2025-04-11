import {useState} from "react";

interface Props {
    close: () => void;
}

const EditProfile = ({close}: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickClear = () =>{
        setFirstName('');
        setLastName('');
    }

    // const handleClickSave=()=>{
    //     if(!(firstName === '' || lastName === '')){
    //         return close();
    //     }else{
    //         alert('Write first name and last name changed successfully.');
    //     }
    // }

    const handleClickSave= ()=>{
        //TODO handleClickSave
        alert('Save profile data');
        close();
    }
    return (
        <>
            <label>First Name:
                <input type="text"
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>Last Name:
                <input type="text"
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default EditProfile;