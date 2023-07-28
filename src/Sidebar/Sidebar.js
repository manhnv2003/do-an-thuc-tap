import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Sidebar.css';
import Category from './Category/Category';
import Colors from './color/color';
import Price from './Price/Price'; 
// export default function Sidebar() {
//   return (
//     <div className='sidebar'>
//       <div className='head'>
//         <h2 className='logo-sidebar'>sellclothes</h2>
//       </div>
//     </div>
//   )
// }
 const Sidebar = ({handleChange}) => {
    return (
        <>
        <div className='sidebar'>
        <div className='head'>
        <h2 className='logo-sidebar'>sellclothes</h2>
        </div>
        <Category handleChange={handleChange}/>
        <Colors handleChange={handleChange} />
        <Price handleChange={handleChange} />
        </div>
        </>
    );
}
export default Sidebar;