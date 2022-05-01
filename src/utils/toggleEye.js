export default function toggleEye(eye, setEye, open, close){

    if(eye.type.name === "FaEye"){

        setEye(close)

    }
    else if(eye.type.name === "FaEyeSlash"){

        setEye(open)

    }   
        
    
}