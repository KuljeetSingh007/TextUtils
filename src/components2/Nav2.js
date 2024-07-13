// import React, { useEffect, useState } from 'react'
export default function Nav2({ props }) {
  const arrThemes = ['theme-red', 'theme-blue', 'theme-green'];
  // const [jiko, setjiko] = useState('bloddy hell !');
  // const [count, setcount] = useState(0)
  // const [jinda, setjinda] = useState(0)
  // const clicked = () => {
  //   setjiko('fuck');
  //   console.log(jiko)
  //   // onThemeChange(theme);
  // };

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  //the useEffect method is a self invoking method.whenever its element value changed or got effected it invokes by itself.
  // useEffect(() => {
  //   console.log(jinda)
  // }, [jinda])


  return (
    <nav className='navBar'>
      <ul>
        {
          arrThemes.map((elem) => {
            return <li key={elem}>
              <button onClick={() =>props(elem)}>
                {elem.replace('theme-', '').toUpperCase()}
              </button>
            </li>
          })
        }
      </ul>
      {/* <p>taped {count} times !</p>
      <button onClick={() => setcount(count + 1)}>tap</button>
      <p>taped jinda {jinda} times !</p>
      <button onClick={() => setjinda(jinda + 10)}>Jinada</button> */}
    </nav>
  )
}


// // src/components2/Nav2.js
// import React from 'react';

// function Nav2({ onThemeChange }) {
//   const themes = ['theme-red', 'theme-blue', 'theme-green'];

//   return (
//     <nav>
//       <ul>
//         {themes.map((items) => (
//           <li key={items}>
//             <button onClick={() => onThemeChange(items)}>
//               {items.replace('theme-', '').toUpperCase()}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Nav2;
