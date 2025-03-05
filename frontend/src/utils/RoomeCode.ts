

export function RoomId():string { 
    const random = "JFAIFJEAWE323IJIJ453433443";
    let ans = ""

    for(let i = 0; i<6; i++){ 
        ans += random[Math.floor(Math.random() * random.length)]
    }

    return ans;
}



