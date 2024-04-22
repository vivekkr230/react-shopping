import {HeaderComponent} from "./header.jsx"
import {MainComponent} from './main'
export function IndexComponent(){
    return(
        <div>
            <HeaderComponent/>
            <section>
                <MainComponent/>
            </section>
        </div>
    )
}