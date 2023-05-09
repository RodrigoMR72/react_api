import React from 'react';
import { LabelInput } from './LabelInput';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export const CepForm = () => {

    const [data, setData] = useState({});

    const getDataCep = () => {

        axios.get('https://viacep.com.br/ws/01001000/json/')
        .then(response =>{

            console.log(response.data);
            setData(response.data);

        });

    };

    useEffect(() => {

        getDataCep()

    }, [])


  return (


    <form className="row g-3">
          
          
            <LabelInput 
            name='CEP'
            width={2}
            />

            <LabelInput 
            name='Logradouro'
            width={6}
            />


          
            {JSON.stringify(data)}
        </form>    
  )
}
