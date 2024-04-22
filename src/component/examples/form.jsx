import {useState} from "react"

export function FormComponent(){
    const [state, setstate] = useState({Name:"Samsu",Price:67000,City:"Sitamarhi",Stock:true})

    function handleName(e){
        setstate({
            Name:e.target.value,
            Price:state.Price,
            City:state.City,
            Stock:state.Stock
        })
    }
    function handleCity(e){
        setstate({
            Name:state.Name,
            Price:state.Price,
            City:e.target.value,
            Stock:state.Stock
        })
    }
    function handlePrice(e){
        setstate({
            Name:state.Name,
            Price:e.target.value,
            City:state.City,
            Stock:state.Stock
        })
    }
    function handleRadio(e){
        setstate({
            Name:state.Name,
            Price:state.Price,
            City:state.City,
            Stock:e.target.checked
        })
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <dl>
                        <dt>
                            Name:
                        </dt>
                        <dd>
                            <input type="text" className="form-control" value={state.Name} onChange={handleName}></input>
                        </dd>
                        <dt>
                            Price:
                        </dt>
                        <dd>
                            <input type="number" className="form-control" value={state.Price} onChange={handlePrice}></input>
                        </dd>
                        <dt>
                            City:
                        </dt>
                        <dd>
                            <select name="" id="" onChange={handleCity} className="form-select" value={state.City}>
                                <option>Select City</option>
                                <option>Patna</option>
                                <option>Sitamarhi</option>
                            </select>
                        </dd>
                        <dt>
                            Stock:
                        </dt>
                        <dd className="form-switch">
                            <input type="checkbox" checked={state.Stock} className="form-check-input" onChange={handleRadio}/><label className="ms-3">Available</label>
                        </dd>
                    </dl>
                    <button className="form-control btn btn-success">update</button>
                </div>
                <div className="col-8">
                    <h2>Product details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{state.Name}</dd>
                        <dt>Price</dt>
                        <dd>{state.Price}</dd>
                        <dt>City</dt>
                        <dd>{state.City}</dd>
                        <dt>Stock</dt>
                        <dd>
                            {(state.Stock===true)?"Available":"Out of Stock"}
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}