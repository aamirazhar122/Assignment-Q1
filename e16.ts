export{}
const friends: string[] = ["Zaigham", "Waqar", "Hamza"];
friends.splice(0,0,"Ali");
console.log(friends);

friends.splice(1,0,"Saleem");
console.log(friends);

friends.push("Qamar");
console.log(friends);
//const friends: string[] = ["Zaigham", "Waqar", "Hamza","Ali","Saleem","Qamar"];
console.log(`${friends[0]}`,`you're invited to dinner tonight!` );
console.log(`${friends[1]}`,`you're invited to dinner tonight!` );
console.log(`${friends[2]}`,`you're invited to dinner tonight!` );
console.log(`${friends[3]}`,`you're invited to dinner tonight!` );
console.log(`${friends[4]}`,`you're invited to dinner tonight!` );
console.log(`${friends[5]}`,`you're invited to dinner tonight!` );
/*friends.forEach(friend => {
    console.log(`Hey`, `${friend}`,`you're invited to dinner tonight!`)
    
});*/


