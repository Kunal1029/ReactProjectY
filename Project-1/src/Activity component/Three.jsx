function singleClick(){
    console.log("hi");
}

function paraCursor(){
    console.log("para");
}

function DoubleClick(){
    console.log("Double Click");
}

function Three(){
    return(
        <>
          <button onClick={singleClick}>Click Me!</button>
          <p onMouseOver={paraCursor}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolorem odio delectus illo non numquam doloremque ex, ipsum consectetur nihil nesciunt modi praesentium nobis sint? Odio quae corrupti dolores eveniet.</p>
          <button onDoubleClick={DoubleClick}>Double click</button>
        </>
    )
}

export default Three