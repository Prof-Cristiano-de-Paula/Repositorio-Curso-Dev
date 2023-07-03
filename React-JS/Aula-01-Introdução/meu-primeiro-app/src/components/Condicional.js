import {useState} from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function enviarEmail(e){
        e.preventDefault()
        console.log("Enviou Email")
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')
    }
    
    return(
        <>
            <h2>Cadastre Seu E-mail....</h2>
            <form>
                <input type='email' placeholder='Digite seu E-mail....' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar Email</button>
            </form>
            {userEmail &&(
                <div>
                    <p>O E-mail é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </>
    )
}

export default Condicional