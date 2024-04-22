export function NetflixHeaderComponent(){
    return(
        <>
            <div className=" text-white head">
                <div>
                    <h1>
                        NETFLIX
                    </h1>
                </div>
                <div className="input-group w-25">
                    <select className="form-select">
                        <option>Hindi</option>
                        <option>English</option>
                        <option>Bihari</option>
                    </select>
                    <button className="btn btn-danger ms-2">SignIn</button>
                </div>
            </div>
        </>
    )
}