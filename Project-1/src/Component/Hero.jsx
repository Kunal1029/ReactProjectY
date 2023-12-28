import '../App.css'
function Hero(){
    return (
        <>
          <main className='main'>
            <div className="content">
              <h1>
                YOUR FEET DESERVE THE BEST
              </h1>

              <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
              </p>

              <div className="btn">
                <button className='shop'>Shop Now</button>
                <button className='cato'>Category</button>
              </div>

              <div className="avail">
                <p>Also Available On</p>

                <div className='amaflip'>  
                  <img src="./flipkart.png" alt="" />
                  <img src="./amazon.png" alt="" />
                </div>
                 
              </div>
            </div>
            
            <div className="bigimg">
              <img src="./shoe_image.png" alt="" />
            </div>
          </main>
        </>
    )
}

export default Hero;