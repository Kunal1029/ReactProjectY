/* eslint-disable react/prop-types */
export default function Activity1({textColor, userName , surName , bgColor , Age}){
    // let styles = {color: textColor};
   return (
     <>
       <h1 style={{color: textColor}}>Hello , {userName} <span style={{backgroundColor: bgColor}}>{surName}</span> ji. Your Age is {Age > 24 ? `${Age} big than ks` : `${Age} small thsn sk`}</h1>
       {/* <h1 style={styles}>Hello , {userName} <span style={styles}>{surName}</span> ji</h1> */}
     </>
   )
}