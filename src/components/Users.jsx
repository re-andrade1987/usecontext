import React, { useState, useEffect, Fragment } from 'react';

import Loading from './Loading'

import { getUsers } from '../services/api'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);

        useEffect(() => {
        const loadUsers = async () => {
          setLoading(true);
         try {
            const response = await getUsers();
            console.log(response)
            setUsers(response);
            } catch (e) {
            setLoading(true);
            } finally {
            setLoading(false);
        }
    };

       loadUsers();
    }, []);
 

    return (
        <Fragment>
            <div>
                <h1>Lista usuários</h1>
                {users.map(user =>
                <div className='user-list' key={user.id}>
                  <p >Nome: {user.first_name}</p>
                  <p>Sobrenome: {user.last_name}</p>
                  <p>Email: {user.email}</p>
                </div>
                )}
            </div>
            <Loading loading={loading} message='Carregando usuários...' />
        </Fragment>
    );
};
 
export default Users