import useAuth from "./hooks/useAuth.ts";
import axios from "axios";

const Login = () => {
    const {client}  = useAuth();


    if (!client)
        return null;

    const handleAPICall = async () => {
        try {
            axios.get('http://localhost:8087/workflow-api/api/v1/oa/test', {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${client.token}`
                },
                withCredentials: true
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
            <button onClick={handleAPICall} style={{
                height: '200px',
                width: '1000px',
                background: 'blue'
            }}>API
            </button>
            <button onClick={()=>client.logout()} style={{
                height: '200px',
                width: '1000px',
                background: 'red'
            }}>Logout
            </button>
        </div>
    )
}

export default Login;