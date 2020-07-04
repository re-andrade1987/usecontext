import React, { useState, useEffect, Fragment } from 'react';
 
import Loading from './Loading'
 
import { getDepartments } from '../services/api'
 

const Departaments = () => {
    const [departaments, setdepartaments] = useState([])
    const [loading, setLoading] = useState(true);

        useEffect(() => {
        const loadDepartaments = async () => {
          setLoading(true);
         try {
            const response = await getDepartments();
            setdepartaments(response);
            } catch (e) {
            setLoading(true);
            } finally {
            setLoading(false);
        }
    };

       loadDepartaments();
    }, []);
 
        
    return (
        <div>
          <button onClick={getDepartments}>Buscar departamentos</button>
            <Loading loading={loading} message='Carregando departamentos...' />
        </div>
    );
};
 
export default Departaments