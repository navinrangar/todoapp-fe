export const SIGN_UP = "sign up";
export const SIGNED_UP = "signed up";
export const SIGN_IN = "sign in";
export const SIGNED_IN = "signed in";


export const signup = (body: {}) => {
    return { type: SIGN_UP, payload: body }
}

export const signedup = ({ id, first_name, last_name, email }: { id: number, first_name: string, last_name: string, email: string }) => {
    return { type: SIGNED_UP, payload: { id, firstName: first_name, lastName: last_name, email } }
}

export const signIn = (body: {}) => {
    return { type: SIGN_IN, payload: body }
}

export const signedIn = ({ id, first_name, last_name, email, role }: { id: number, first_name: string, last_name: string, email: string, role: string }) => {
    return { type: SIGNED_IN, payload: { id, email, role, firstName: first_name, lastName: last_name } }
}
