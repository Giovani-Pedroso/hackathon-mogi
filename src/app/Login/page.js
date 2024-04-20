import "./Login.css"
const Login = () => {
    return (
        <div className="container-Login">


            <div className="container-capa">

                <img id="capaLogin" src="./capaMedico.png"  alt="capaMenu" />
            </div>
            
            <div className="menu-login">
                <div>

            <img id="logo" src="./image 20.png" alt="logo" /> 
                </div>
                <form className="form" >

                <label>Login</label>
                <input type="text" placeholder="Enter email" required />
                <label>Password</label>
                <input type="password" placeholder="password" required />
                    <input id="submit" type="submit" value="Entrar"/>
                </form>
            </div>



        </div>
    )
}
export default Login
