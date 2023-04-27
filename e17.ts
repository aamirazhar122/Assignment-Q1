console.log(`I can invite only two people on dinner`);
const friends: string[] = ["Zaigham", "Waqar", "Hamza","Ali","Saleem","Qamar"];
console.log(`${friends[2]}`,`you are sorry you can't invite on dinner`);
console.log(`${friends[3]}`,`you are sorry you can't invite on dinner`);
console.log(`${friends[4]}`,`you are sorry you can't invite on dinner`);
console.log(`${friends[5]}`,`you are sorry you can't invite on dinner`);

friends.pop();
friends.pop();
friends.pop();
friends.pop();
console.log (friends);
console.log(`${friends[0]}`,`you are still invited`);
console.log(`${friends[1]}`,`you are still invited`);
console.log (friends);
friends.pop();
friends.pop();
console.log (friends);
//empty list
