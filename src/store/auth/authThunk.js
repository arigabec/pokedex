import { logInWithEmailAndPassword } from "../../config/firebaseConfig";
import { isLoading, setUser } from "./authSlice";

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isLoading());
        const loginResponse = await 
            logInWithEmailAndPassword(email, password);
        const {user} = loginResponse;
        console.log(loginResponse);
        dispatch(setUser(user));
    };
}