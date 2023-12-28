import { useState } from "react"

function Like(){
    let [like , setLike] = useState(false)
    let [clickCount , setClickCount] = useState(0)

    let checklike = ()=>{
        setLike(!like);
        setClickCount(clickCount+1);
        // console.log(like)
    }

    return (
        <>
          <p onClick={checklike}>
            {like ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>}
          </p>
          <h1>Total clics : {clickCount}</h1>

        </>
    )
}

export default Like