let it: string = "anything";

let you = {
    can_dream: function (dream: string) {
        if (dream !== null && dream !== undefined) {
            console.log("You can dream about anything)))...so you can do anything");
            return true;
        }
        console.log("It's so sad(((");
        return false;
    },
    can_do: {
        anything: undefined
    }
}

if (you.can_dream(it) === true) {
    you.can_do[it] = true;
}
