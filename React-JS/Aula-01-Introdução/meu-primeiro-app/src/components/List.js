// function List(){
//     return (
//         <>
//             <h1>Minha Lista</h1>
//             <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//             </ul>
//         </>
//     )
// }
// export default List


// Agora utilizando o Item.js 

import Item from "./Item"


function List(){
        return (
            <>
                <h1>Minha Lista</h1>
                <ul>
                    <Item marca="Ferrari" ano_lancamento={1985} />
                    <Item marca="Fiat" ano_lancamento={1988}/>
                    <Item marca="Audi" ano_lancamento={2000}/>
                    <Item />
                </ul>
            </>
        )
    }
    export default List