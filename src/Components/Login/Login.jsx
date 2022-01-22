import { useDispatch } from "react-redux"
import { loginSuccess } from "../../Redux/auth/action";

export default function Login(){
    const dispatch = useDispatch();

    const handleLogin = () => {
        const token = Date.now();
        dispatch(loginSuccess(token));
    }
    return (
        <>
            <h3>Login</h3>
            <button onClick={handleLogin}>LOGIN</button>
        </>
    )
}