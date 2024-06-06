import useAuth from "./hooks/useAuth.ts";
import axios from "axios";

const Login = () => {
    const client  = useAuth();

    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     await client.init({onLoad:'login-required',checkLoginIframe: false});
    // }

    const handleAPICall = async () => {
        try {
            console.log('token',client.token)
            axios.get('http://localhost:8087/workflow-api/api/v1/oa/test', {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${client.token}`
                },
                withCredentials: true  // If you're making requests that require credentials
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });


        }
        catch(e){
            console.log(e)
        }

    }

    return (
        <div>
            <button  style={{
                height: '200px',
                width: '1000px',
                background: 'red'
            }}>Login
            </button>
            <button onClick={handleAPICall}  style={{
                height: '200px',
                width: '1000px',
                background: 'blue'
            }}>API</button>
        </div>
    )
}

export default Login;