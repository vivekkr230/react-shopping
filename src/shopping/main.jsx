import './shopping.css'
export function MainComponent(){
    return(
        <main className="row">
            <div className="card-women col text-center">
                <h2 className="text-secondary mb-5">Women</h2>
                <button className="btn btn-danger mt-5">Shop
                <span className="bi bi-arrow-right ms-2"></span></button>
            </div>
            <div className="card-men col text-center">
                <h2 className="text-secondary mb-5">Men</h2>
                <button className="btn btn-danger mt-5">Shop
                <span className="bi bi-arrow-right ms-2"></span></button>
            </div>
            <div className="card-boy col text-center">
                <h2 className="text-secondary mb-5">Child</h2>
                <button className="btn btn-danger mt-5">Shop
                <span className="bi bi-arrow-right ms-2"></span></button>
            </div>
        </main>
    )
}