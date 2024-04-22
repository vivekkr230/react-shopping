export function DatabindingComponent(){
    // var product={
    //     Name:"Samsung TV",
    //     Price:100000,
    //     Avalability:true
    // }
    // return(
    //     <div className="container">
    //         <dl>
    //             <dt>Name:</dt>
    //             <dd>{product.Name}</dd>
    //             <dt>Price:</dt>
    //             <dd>{product.Price}</dd>
    //             <dt>Stocks:</dt>
    //             <dd>{(product.Avalability==true)?"Available":"out of stock"}</dd>
    //         </dl>
            
    //     </div>
    //)
    var items=["all","electronics","fashion",]
    return(
        <div>
            <h2>Select Category</h2>
            <ol>
            {
                items.map(category=>
                    <li key={category}>{category}</li>
                )
            }
            </ol>
            <h2>Select Option</h2>
            <select>
                {
                   items.map(category=>
                    <option key={category} value={category}>{category}</option>
                ) 
                }
            </select>
        </div>
        
    )
}