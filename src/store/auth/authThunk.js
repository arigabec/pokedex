import { isLoading, setUser } from "./authSlice";

const user = {
    name: 'Andres',
    lastName: 'Ballivian',
    password: 'Andres1234'
}

export const login = () => {
    return async (dispatch) => {
        dispatch(isLoading());
        dispatch(setUser(user));
        // TODO
        // dispatch(firebase login)
        // await user data
        // dispatch(setUser(userData));
    };
}