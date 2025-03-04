
export function chatId() { 
    const random = "KDASOEA333123123442CCC";    
    let ans = "";

    for(let i = 0; i < 6; i++){
        ans += random[Math.floor(Math.random() * random.length)]
    }
    return ans;
}

