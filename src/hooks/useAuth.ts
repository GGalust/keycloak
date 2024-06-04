import Keycloak from "keycloak-js";
import {useEffect, useRef, useState} from "react";

const useAuth = () => {
    const [isLogin,setIsLogin] = useState<boolean>(false);
    const [client,setClient] = useState<any>();
    const isRun = useRef(false);
    useEffect(() => {
        if(isRun.current) return;

        const keycloakClient = new Keycloak({
            "url":"https://localhost:9090",
            "realm": "cognaize-realm",
            "clientId": "worktimal-workflow-client"
        })



        // keycloakClient.init({onLoad:'login-required',checkLoginIframe: false}).then((res)=>{
        //     console.log('success',res)
        //     return setIsLogin(res)
        // }).catch((res)=>{
        //     console.log('error',res)
        // })

        setClient(keycloakClient);
        isRun.current = true;
    }, []);

    return client;
}

export default useAuth;