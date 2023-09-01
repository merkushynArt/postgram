import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
   return (
      <form className='form-auth' onSubmit={e => e.preventDefault()}>
         <h3 className='form-auth__title'>Реєстрація</h3>
         <label className='form-auth__item'>
            <input 
               type="text"
               placeholder='Username'
               className='form-auth__input'
            />
         </label>
         <label className='form-auth__item'>
            <input 
               type='password'
               placeholder='Password'
               className='form-auth__input'
            />
         </label>
         <div className="form-auth__submit">
            <button className='btn-1'>Зареєструвати </button>
            <Link to={'/login'}>У мене вже є акаунт</Link>
         </div>
      </form>
   );
}

