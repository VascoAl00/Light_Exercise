function ChangeLights(){

    let element = document.getElementById("divalinhamento");
    if(element.classList.contains("lightoff")){

        element.classList.remove("lightoff");
        element.classList.add("lighton");

    }

    else{

        element.classList.remove("lighton");
        element.classList.add("lightoff");
        
    }


}

document.getElementById("interruptor").addEventListener("click", ChangeLights);