function Submit(event){
    console.log("Submit");
    event.preventDefault();
}

function Form(){
    return(
        
        <form onSubmit={Submit}>
          <input type="text" placeholder="write something" />
          <button >Submit</button>
          {/* <button onClick={Submit}>Submit</button> */}
        </form>    
        
    )
}

export default Form