import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserData, UserProfile, UserRegister} from "../../utils/types";
import {base_url, createToken} from "../user/constans.ts";
import {RootState} from "../../app/store.ts";

// registraziya
export const registerUser = createAsyncThunk(
    'users/register',
    async (user: UserRegister) => {
        const response = await fetch(`${base_url}/account/user`, {
            method: 'Post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        if(response.status === 409){
            throw new Error(`user ${user.login} already exist`)
        }
        if(!response.ok){
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        const token = createToken(user.login, user.password)
        return{user: data, token}
    }
)

//Login
export const fetchUser = createAsyncThunk(
    'users/fetch',
    async (token: string) => {
        const response = await fetch(`${base_url}/account/login`, {
            method: 'Post',
            headers: {
                Authorization: token
            }
        })
        if(response.status === 401){
            throw new Error(`login or password incorrect`)
        }
        if(!response.ok){
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        return {user: data, token}
    }
)

// update user
export const updateUser = createAsyncThunk<UserProfile, UserData, {state: RootState}>(
    'users/update',
    async (user, {getState}) => {
        const response = await fetch(`${base_url}/account/user`, {
            method: 'Put',
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json',
                Authorization: getState().token
            }
        })
        if(response.status === 401){
            throw new Error(`login or password incorrect`)
        }
        if(!response.ok){
            throw new Error(`Something went wrong`);
        }
        return await response.json();
    }
)


export const changePassword = createAsyncThunk<string, {newPassword: string, oldPassword: string}, {state: RootState}>(
    'users/password',
    async ({newPassword, oldPassword}, {getState}) => {
        const response = await fetch(`${base_url}/account/user/password`,{
            method: 'Put',
            headers:{
                'X-Password': newPassword,
                Authorization: createToken(getState().user.login, oldPassword)
            }
        })
        if(response.status === 401){
            throw new Error(`login or password incorrect`)
        }
        if(!response.ok){
            throw new Error(`Something went wrong`);
        }
        return createToken(getState().user.login, newPassword);
    }
)