import { colleges } from "../Database/Colleges";

export function create(){
    var list = new Set()

    for(var i = 0; i < colleges.length; i++){
        for(var j = 0; j < colleges[i].location.length; j++){
            list.add(colleges[i].location[j])
        }
    }
    return Array.from(list)
}