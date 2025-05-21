import { useState } from "react";
import Images from "./Images";
import Image2 from "./Image2";


function Conditional() {

    let content;
    let [isLogged, setIslogged] = useState();

    function handleClick(){
        setIslogged(isLogged ? isLogged = false : isLogged = true)
    }

    if (isLogged){
        content = "you're logged in"
    }
    else {
        content = "you are not logged in"
    }

    return (
        <>
            {content}
            <button onClick={handleClick}>verificar se sou desenrolado</button>
            {isLogged ? <Images/> : <Image2/>}
        </>
    )
}

export default Conditional