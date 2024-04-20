import "./Login.css"
const Login = () => {


    


    return (
        <div className="container-Login">
''

            <form className="form" > 
            <h1>Ato mogi</h1>      
                <input id="input_cpf" type="text" placeholder="N°CPF" required />
                <input id="input_senha" type="password" placeholder="Senha" required />
                <input id="submit" type="submit" value="Entrar" />
                <p id="nova-conta">Primeira vez aqui? <span>Crie uma conta agora</span></p>
            </form>
            <div>
            </div>


        </div>
    )
}
export default Login
