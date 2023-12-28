// Amazon card
import './Activity2.css'
import Prod from "./Product"
function Amazon(){
    return(
        <>
        <h2 style={{textAlign:"center"}}>BlockBuster Deals Shop Now</h2>
        <div className='prod'>
          <Prod title={"Product 1"} idx={0} />
          <Prod title={"Product 2"} idx={1} />
          <Prod title={"Product 3"} idx={2} />
          <Prod title={"Product 4"} idx={3} />
        </div>
        </>
    )
}

export default Amazon
