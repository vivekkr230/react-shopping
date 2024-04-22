export function FlipkartComponent(){
    const detail={
        "model":"Apple iPhone 15 plus(Blue,128gb)",
        "price":76499,
        "rating":{"rate":4.6,"ratings":4456,"reviews":4666},
        "features":[
            "128gb ROM",
            "6.7 inch super ratina xdr display",
            "48MP+12MP | 12MP Front Camera",
            "A16 bionic chip, 6 core processor",
            "1 year warranty for phone and 6 month warranty for accessories"
        ],
        "imgage":"iphone15.jpg"
    }
    return(
        <div className="row">
            <div className="col-3">
                <img src="{detail.imgage}" alt="image not found"/>
            </div>
            <div className="col-7">
                <h3 className="mt-3">{detail.model}</h3>
                <div>
                    <span className="bg-success rounded rounded-2 p-2">{detail.rating.rate}<span className="bi bi-star-fill"></span></span>
                    <span className="p-1 text-danger">{detail.rating.ratings}</span>ratings <span className="p-1 text-danger">{detail.rating.reviews}</span>reviews
                    <div style={{
                        marginTop:"10px",
                    }}>
                        <ul className="mt-3">{detail.features.map(res=>
                        <li>{res}</li>
                        )}</ul>
                    </div>
                    
                </div>
            </div>
            <div className="col-2 mt-4">
                    <h2>&#8377;{detail.price}</h2>
            </div>
        </div>
    )
}