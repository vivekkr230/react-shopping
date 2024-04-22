import "./NetflixAll.css"
import {NetflixHeaderComponent} from "./NetflixHeader.js"
import {NetflixContentComponent} from "./NeflixContent"
import {NetflixText} from "./netflixcomponent"
export function NetflixIndexComponent(){
    return(
        <div className="container-fluid">
            <div className="box">
               <header>
                    <NetflixHeaderComponent/>
                </header> 
                <section className="d-flex justify-content-center align-items-center">
                    <main>
                        < NetflixContentComponent/>
                        < NetflixText/>
                    </main>     
                </section>
            </div>
            
        </div>
    )
}