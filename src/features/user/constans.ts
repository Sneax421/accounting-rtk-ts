export const base_url = 'https://webaccounting.herokuapp.com';

export const createToken =
    (login: string, password: string) =>
        `Basic ${btoa(login + ':' + password)}`