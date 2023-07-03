import { useState } from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(senha)
        console.log("Enviou!")
    }

    const [name, setName] = useState("CRISTIANO")
    const [senha, setSenha] = useState("Senai123")

    return(
        <>
            <h1>Meu Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' id='name' name='name' placeholder='Digite seu nome...' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='senha'>Nome</label>
                    <input type='password' id='senha' name='senha' value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Digite sua senha...' />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form