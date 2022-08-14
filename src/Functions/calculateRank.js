import { ranks } from "../Database/Ranks";

export function getRank(perc){
    for(var i = 0; i < ranks.length; i++){
        if(perc >= ranks[i].marks[1]){
            console.log(ranks[i].rank)
            return ranks[i].rank
        }
    }
    return 60000
}