export{}
let usernames=["Admin","Ali", "Bob", "Eric", "Amir"];

if (usernames.length > 0){
    console.log("we need to find some users");

}
else{
    console.log("Hello users");
}

usernames.splice(0, usernames.length);
console.log(usernames);