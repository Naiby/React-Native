import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqRespList, User } from "../interface/reqRes";


export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1);

     useEffect(() => {
        //API
        LoadUsers();
    }, [])


    const LoadUsers = async () => {
        // reqResApi.get<ReqRespList>('/users').then(resp => {
        //     setUsers(resp.data.data)
        // }).catch(console.log);
        const resp = await reqResApi.get<ReqRespList>('/users', {
            params:{
                page:pageRef.current
            }
        })
        if(resp.data.data.length >0){
            setUsers(resp.data.data);
        }else{
            pageRef.current --;
            alert('No more records');
        }
    }

    const previousPage = ()=>{
        if (pageRef.current >1) {
            pageRef.current --;            
            LoadUsers();
        }
    }

    const nextPage = ()=>{
            pageRef.current ++;            
            LoadUsers();
    }

    return{
        users,
        previousPage,
        nextPage,
    }

}