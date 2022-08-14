import { colleges } from "../Database/Colleges";

export function getCollege(rank,state,caste){

    if(caste === "SC/ST"){
        rank = Math.max(0,rank-10000)
    }
    if(caste === "OBC"){
        rank = Math.max(0,rank-9000)
    }

    var list = null
    for(var i = 0; i < colleges.length; i++){
        if(rank <= colleges[i].rank[1]){
            list = [...colleges[i].colleges]
            break
        }
    }

    for(i = 0; i < list.length; i++){
        if(state === list[i].location){
            list[i].rank-=100
        }
    }

    //sort list
    list.sort(function(a,b){return a.rank-b.rank})
    return list
}