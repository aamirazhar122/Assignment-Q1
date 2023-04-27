"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const current_users = ["Aamir", "Ali", "John", "Eric", "Boby"];
const new_users = ["Hamza", "Waqar", "Aamir", "Nida", "Ali"];
for (const new_user of new_users) {
    const is_already_used = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());
    if (is_already_used) {
        console.log("The person will need to enter a");
    }
    else {
        console.log("The user name is available");
    }
}
;
