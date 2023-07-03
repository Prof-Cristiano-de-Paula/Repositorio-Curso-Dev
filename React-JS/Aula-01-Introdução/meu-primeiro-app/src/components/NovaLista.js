function NovaLista({ itens }){

    return(
        <>
            <h3>Lista de FrameWorks:</h3>
            { itens.length > 0 ? (
                itens.map((item, index) => (<p key={index}>{item}</p>))) : (<p>Não há itens nessa Lista</p> )}
        </>
    )
}

export default NovaLista