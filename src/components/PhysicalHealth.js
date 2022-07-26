import React, {useState, useEffect} from "react";
import Content from "./Content";
import ContentForm from "./ContentForm";

function PhysicalHealth(){

    const [data, setData] = useState({})
    const [isloaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch(" http://localhost:4000/physical")
        .then(res => res.json())
        .then(data => {setData(data); setIsLoaded(true)})
    },[])
    // console.log(data)
    console.log(isloaded)

    return(
        <div>
            {isloaded ? <Content data={data} />: "Loading..."}<br></br>
            {/* {isloaded ? <ContentForm data={data} setData={setData} />: "Form Loading..."} */}
            <ContentForm data={data} setData={setData} />
        </div>
    )
}

export default PhysicalHealth;