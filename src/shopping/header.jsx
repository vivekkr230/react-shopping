export function HeaderComponent(){
    return(
        <div>
            <header>
                <nav className="d-flex justify-content-between">
                    <div>
                        <h4>Shopping</h4>
                    </div>
                    <div>
                        <span className="me-3">Home</span>
                        <span className="me-3">Catalog</span>
                        <span className="me-3">Shop</span>
                        <span className="me-3">Pages</span>
                        <span className="me-3">BLock</span>
                        <span className="me-3">Docs</span>
                    </div>
                    <div>
                        <span className="bi bi-search ms-3"></span>
                        <span className="bi bi-heart ms-3"></span>
                        <span className="bi bi-person ms-3"></span>
                        <span className="bi bi-cart3 ms-3"></span>
                    </div>
                </nav>
                <article className="text-center bg-dark p-1 text-white">
                    <span className="bi bi-lightning-charge-fill text-warning"></span>
                    HAPPY HOLIDAY DEALS ON EVERYTHING
                    <span className="bi bi-lightning-charge-fill text-warning"></span>
                </article>
            </header>
        </div>
    )
}