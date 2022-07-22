import { setToken, logIn } from "./LogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = 'http://localhost:3001/api/v1/';

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (username, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: username, password: password })
        };
        fetch(BACKEND_URL + 'user/login/', requestOptions)
        .then(response => response.json())
        .then(data => {
            const token = data.body.token;
            dispatch(setToken(token))
            dispatch(logIn())
            navigate('/profil')
        })
    }

}

export { useLogin }