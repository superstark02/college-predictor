import { colleges } from "../Database/Colleges";

export function getCollege(rank,state,caste){

    if(caste === "SC/ST"){
        rank = Math.max(1,rank-10000)
    }
    if(caste === "OBC"){
        rank = Math.max(1,rank-5000)
    }

    var list = null
    var loc = null
    for(var i = 0; i < colleges.length; i++){
        if(rank <= colleges[i].rank){
            list = [...colleges[i].colleges]
            loc = [...colleges[i].location]
            break
        }
    }
    if(!list){
        return ["No colleges available"]
    }

    //delete college and add in diff array
    var temp = []
    var deleted = []
    i = 0;
    while(i < list.length){
        if(state === loc[i]){
            temp.push(list[i])
            deleted.push(i)
        }
        i++;
    }

    for(var i = deleted.length-1; i > -1;i--){
        list.splice(deleted[i],1)
    }

    temp = temp.concat(list)
    return temp
}