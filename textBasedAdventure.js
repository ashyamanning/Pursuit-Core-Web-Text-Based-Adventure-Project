
const readline = require('readline-sync')
let nameInput = readline.question("Enter your name: ")
console.log("Hello " + nameInput + " !  Welcome to my game, Survive.")
const play = () => {
    let userInput;
    while (userInput !== "yes") {
        userInput = readline.question("Would you like to play? yes or no?")
        if (userInput === "no") {
            console.log("Come on, it's just one game...")
            userInput = readline.question("Are you going to play? okay or no?")
            break;
        } else {
            console.log("Glad I could convince you.")
        }
    }
}
play();
readline.question("This is a game of survival where your choices will determine your future. Are you ready to fight for your life? yes or no?")
console.log(nameInput + " you are a skilled Air Marshall who has served a decade in the Army Special Forces.You are currently transporting a high-priority prisoner to an underground facility on a commercial flight. Word reaches you that there is a bomb on the plane.")

const search = (ans) => {
    let userInput = ans;
    if (userInput === "defuse") {
        console.log("You have no background in Explosive Ordnance Disposal. You set the bomb off and everyone dies!")
        play();
    } else if (userInput === "call") {
        console.log("Homeland Security assists on call with instructions to defuse the bomb. It's a success! The bomb is now deactivated! The plane makes an emergency landing and an escort arrives to continue the transport. Being a watchful eye, you notice two unmarked vehicles following the convoy.")
        userInput = readline.question("What do you do?")
    }
}
search();



const panic = (something) => {
    let userInput = something
    if (userInput === "ease panic") {
        console.log("The plane stabilizes and everyone calmly settles into their seats.k")
        let ans = readline.question("Do you...[search] for bomb or get [prisoner]?")
        if (ans === "search") {
            console.log("You locate the bomb in the cargo compartment. You have 30 minutes before detonation.")
            let answer = readline.question("Do you...[defuse] the bomb or [call] for back-up?");
            search(answer);
        } else {
            console.log("Prisoner jumps you from the bathroom and manages to steal your firearm.");
            userInput = readline.question("Do you...[disarm] the prisoner or [surrender]?");
            fight();
        }
    } else if (userInput === "prisoner") {
        console.log("Prisoner jumps you from the bathroom and manages to steal your firearm.");
        userInput = readline.question("Do you...[disarm] the prisoner or [surrender]?");
        fight();
    }
}

const fight = (something) => {
    let userInput = something;
    if (userInput === "disarm") {
        console.log("There is a tremendous tussle between the two of you but you are able to secure the prisoner with zipties to his seat.");
        let answer = readline.question("What do you do next? ease panic or [search] for bomb");
        ease(answer);
    } else if (userInput === "surrender") {
        console.log("There is no escape for you. The bomb goes off and everyone dies!")
        play();
    }
}

const ease = (something) => {
    let userInput = something;
    if (userInput === "ease panic") {
        console.log("The plane stabilizes and everyone calmly settles into their seats.");
    } else if (userInput === "search")
}
const bomb = (something) => {
    let userInput = readline.question("What do you do? [alert] the passengers or [search] for bomb?");
    if (userInput === "alert") {
        console.log("Panic breaks out in the cabin and the plane becomes unstable. In the commotion, your prisoner escapes to the bathroom.")
        let ans = readline.question("Do you...ease panic or get [prisoner]?")
        panic(ans);
    } else if (userInput === "search") {
        console.log("You locate the bomb in the cargo compartment. You have 30 minutes before detonation.")
        let answer = readline.question("Do you...[defuse] the bomb or [call] for back-up?")
        search(answer);
    }
}
bomb();







