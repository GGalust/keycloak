import useAuth from "./hooks/useAuth.ts";

const Login = () => {
    const client  = useAuth();

    const handleClick = async (e) => {
        e.preventDefault();
        await client.init({checkLoginIframe: false});
        //window.location.href = "http://localhost:9090/realms/cognaize-realm/protocol/openid-connect/auth?client_id=worktimal-workflow-client&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&response_mode=fragment&response_type=code&scope=openid";
    }

    const handleAPICall = async () => {
        const response = await fetch('http://localhost:8087/workflow-api/api/v1/oa/test',{
            credentials: "include",
        });
        const json = await response.json();
    }

    return (
        <div>
            <button onClick={handleClick} style={{
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