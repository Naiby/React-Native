import { useEffect, useReducer } from 'react';

interface AuthState {
    validate: boolean;
    token: string | null;
    username: string;
    name: string;
}


const initialState: AuthState = {
    validate: true,
    token: null,
    username: '',
    name: ''
}

type LoginPayload = {
    username: string;
    name: string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };


const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch ( action.type ) {
        case 'logout':
            return {
                validate: false,
                token: null,
                name: '',
                username: ''
            }

        case 'login':
            const { name, username } = action.payload;
            return {
                validate: false,
                token: 'ABC123',
                name,
                username
            }
    
        default:
            return state;
    }

}


export const Login = () => {

    const [{ validate, token, name }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, []);

    const login = () => {
        dispatch({ 
            type: 'login', 
            payload: {
                name: 'Naiby',
                username: 'Naisay'
            } 
        })
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    if( validate ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    validate...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                ( token )
                    ? <div className="alert alert-success"> Authenticated as: { name } </div>
                    : <div className="alert alert-danger"> Not authenticated </div>
            }          
           
           {
               ( token )
               ? 
               (
                <button
                    className="btn btn-danger"
                    onClick={ logout }
                >
                    Logout
                </button>
               )
               : 
               (
                <button
                    className="btn btn-primary"
                    onClick={ login }
                >
                    Login
                </button>
               )
           }
        </>
    )
}