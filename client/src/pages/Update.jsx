import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(() => {
        axios.get('/api/v1/get-read/' + id)
        .then(res => {
            console.log(res)
            setValues({ ...values, name: res.data[0].name, email: res.data[0].email })
        })
        .catch((err) => console.log(err))
    }, [])

    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.put('/api/v1/edit-student/' + id, values)
        .then((res) => {
            console.log(res)
            navigate('/');
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input 
                            type='text' 
                            placeholder='Enter Name' 
                            className='form-control' 
                            onChange={e => setValues({...values, name: e.target.value})}
                            value={values.name}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input 
                            type='email' 
                            placeholder='Enter Email' 
                            className='form-control' 
                            onChange={e => setValues({...values, email: e.target.value})}
                            value={values.email}
                        />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}
