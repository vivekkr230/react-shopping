import {useState} from "react"

export function Getname(){
    const[username,setUsername]=useState("jhon")
    

    function handleName(event){
        setUsername(event.target.value)
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>Name</dt>
                <dd><input type="text" value={username}  onChange={handleName}/></dd>
            </dl>
            <div><span>Hi</span> {username}</div>
        </div>
    )
}