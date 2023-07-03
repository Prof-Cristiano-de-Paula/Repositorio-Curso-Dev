function NovaLista({ itens }){

    return(
        <>
            <h3>Lista de FrameWorks:</h3>
            {itens.map((item, index) => (<p key={index}>{item}</p>))}
        </>
    )
}

export default NovaLista