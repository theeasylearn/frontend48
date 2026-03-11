import { useCookies } from 'react-cookie';
import { FILE_NAME } from "./common";
import { useNavigate } from "react-router-dom";

export default function VerifyLogin() {
    var [cookies, setCookie, removeCookie] = useCookies(FILE_NAME);
    let navigate = useNavigate();
    //check whether user has logged in or not 
    //console.log('admin id = ', cookies['admin_id']);
    if (cookies['admin_id'] === undefined) {
        navigate("/");
    }
}