import { perc,ranks } from "../Database/Ranks";

export function getRank(p){
    for(var i = 0; i < perc.length; i++){
        if(p >= perc[i]){
            return ranks[i]
        }
    }
    return 26500
}