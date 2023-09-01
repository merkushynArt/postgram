import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
   const isAuth = false;

   const activeStyles = {
      borderBottom: '3px solid #000',
   }
   return (
      <div className='navbar'>
         <div className="navbar__logo">Logo</div>
         {isAuth && (
            <div className="navbar__item">
               <NavLink 
                  to={'/'}
                  style={({ isActive }) => isActive ? activeStyles : undefined}
                  >
                  Головна
               </NavLink>
               <NavLink 
                  to={'/posts'}
                  style={({ isActive }) => isActive ? activeStyles : undefined}
                  >
                  Мої пости
               </NavLink>
               <NavLink 
                  to={'/new'}
                  style={({ isActive }) => isActive ? activeStyles : undefined}
                  >
                  Добавити пост
               </NavLink>
            </div>
         )}
         <div className="navbar__item">
            {isAuth ? (
                  <button className='navbar__btn'>Вийти</button>
               ) : (
                  <NavLink 
                     to={'/login'}
                     style={({ isActive }) => isActive ? activeStyles : undefined}
                     >
                     Увійти
                  </NavLink>
               )
            }
         </div>
      </div>   
   );
}
