const Card=({data})=>{
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list" key={item.name+Date.now()}>
                        {/*All the content of the card has to be added over here*/}
                        <h1>{item.Name}</h1>
                        <h1>{item.height}</h1>
                        <h1>{item.power}</h1>
                        <h1>{item.weight}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
