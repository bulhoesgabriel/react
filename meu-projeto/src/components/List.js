import Item from './Item'

function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Porsche" ano_lancamento={1964} />
                <Item marca="Mercedes" ano_lancamento={1997} />
                <Item marca="Jaguar" ano_lancamento={1999} />
                <Item />
             </ul>
        </>
    )
}

export default List