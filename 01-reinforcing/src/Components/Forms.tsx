import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const Forms = () => {

 const { state, email, password, onChange} = useForm({
    email:'test@test.com',
    password:'123456'
 });
  return (
    <>
        <h3> Forms</h3>
        <input
            type="text"
            className='form-conntrol'
            placeholder='Email'
            value={email}
            onChange={({target})=>onChange( target.value, 'email')}
            
            />
        <input
            type="text"
            className='form-conntrol'
            placeholder='Password'
            value={password}
            onChange={({target})=>onChange( target.value, 'password')}
            
        />
        <code>
            <pre> {JSON.stringify(state, null,)} </pre>
        </code>

    </>
  )
}