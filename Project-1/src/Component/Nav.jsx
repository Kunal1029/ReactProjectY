import "../App.css"

function Nav(){
    return(
        <>
          <nav className="container">
            <div className="logo">
                <img src="/brand_logo.png" alt="" />
            </div>

            <div className="menu">
                <ul>
                    <li>menu</li>
                    <li>location</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>

            <div className="login">
                <button>Login</button>
            </div>
          </nav>
        </>
    )
}

export default Nav
