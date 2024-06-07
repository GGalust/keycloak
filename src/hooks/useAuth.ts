import {useEffect, useRef, useState} from "react";
import keycloakClient from "../keycloakClient.ts"

const useAuth = () => {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    const [client,setClient] = useState<any>();
    const isRun = useRef(false);
    useEffect(() => {
        if(isRun.current) return;

        keycloakClient.init(
            {onLoad:'login-required',checkLoginIframe: false}).then((res)=>{
            return setIsLoggedIn(res);
        }).catch((res)=>{
            console.log('error',res);
        })

        setClient(keycloakClient);
        isRun.current = true;
    }, []);

    const logout = async () => {
        await client.logout().then(() => {
            console.log('logout')

            client.clearToken();
        });
    }

    return {client,isLoggedIn,logout};
}

export default useAuth;