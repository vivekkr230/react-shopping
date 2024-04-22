import { toBeDisabled } from "@testing-library/jest-dom/matchers"
import {useState} from 'react'

export function ComplexComponent() {
    // var data = [
    //     { "category": "electronics", "product": ["mobile", "laptop", "tab"] },
    //     { "category": "fashion", "product": ["footwear", "bottomwear", "topwear"] }
    // ]
    // var topics=[
    //     {"title":"html","description":"it is a markup language"},
    //     {"title":"css","description":"it a style design language"}
    // ]
    const [data] = useState([[10,20,30],[40,50,60]])
    return (
        <div className="container-fluid">
            {/* <ol>
                {data.map(res=>
                <li>{res.category}
                <ul>
                    {
                        res.product.map(ress=>
                            <li>{ress}</li>
                        )
                    }
                </ul>
                </li>
                
                
                )}
            </ol> */}
            {/* <select name="" id="">
                {
                    data.map(res=>
                        <optgroup label={res.category}>{res.category}
                            {
                                res.product.map(ress=>
                                    <option>{ress}</option>)
                            }
                        </optgroup>
                        
                          
                        )
                }
            </select> */}
            {/* <dl>
               
                    {
                       
                        topics.map(data=>
                            <>
                            <dt>{data.title}</dt>
                            <dd>{data.description}</dd>
                            </>)
                    }
                
            </dl> */}
            {
                data.map(row=>
                    <div className="row m-4">
                        {
                            row.map(val=>
                                <div className="col">{val}</div>)
                        }
                    </div>)
            }
                      
                    
               
        </div>
    )
}