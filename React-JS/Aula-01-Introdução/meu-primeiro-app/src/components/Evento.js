import Button from "./Button"

function Evento({numero}){

    function meuMetodo(){
        console.log(`Fui Ativado! ${numero}`)
    }

    function segundoMetodo(){
        console.log('Fui Ativado Pelo segundo Metodo')
    }

    return(
        <div>
            <p>Clique para disparar um evento!</p>
            {/* <button onClick={meuMetodo}>Ativar</button> */}
            <Button event={meuMetodo} text='Metodo 1' />
            <Button event={segundoMetodo} text='Metodo 2' />
        </div>
    )
}

export default Evento