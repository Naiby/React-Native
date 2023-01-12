import { useEffect, useRef, useState } from 'react';
import { updateImportEqualsDeclaration } from 'typescript';
import { reqResApi } from '../api/reqRes';
import { useUsers } from '../hooks/useUsers';
import { ReqRespList, User } from '../interface/reqRes';

export const Users = () => {

    // *TODO:Migrate this functionality to a Custom Hook
    // const [users, setUsers] = useState<User[]>([]);
    // const pageRef = useRef(1);

    // useEffect(() => {
    //     //API
    //     LoadUsers();
    // }, [])

    // const LoadUsers = async () => {
    //     // reqResApi.get<ReqRespList>('/users').then(resp => {
    //     //     setUsers(resp.data.data)
    //     // }).catch(console.log);
    //     const resp = await reqResApi.get<ReqRespList>('/users', {
    //         params:{
    //             page:pageRef.current
    //         }
    //     })
    //     if(resp.data.data.length >0){
    //         setUsers(resp.data.data);
    //         pageRef.current ++;
    //     }else{
    //         alert('No more records')
    //     }
    // }
    const {users, previousPage, nextPage} = useUsers(); 

    const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{
                            width: 45,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name} {last_name} </td>
                {/* <td>{user.first_name} {user.last_name} </td> */}
                <td>Email</td>
            </tr>
        )
    }

    return (
        <>
            <h4>Users</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // users.map(user => renderItem(user))
                        users.map(renderItem)
                    }
                </tbody>
            </table>
            <button
                className='btn btn-primary'
                onClick={previousPage}
            >
                Previous
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={nextPage}
            >
                Next
            </button>
        </>
    )
}