// Added if statement
function legalAge(age){
    if(age >= 18){
        console.log("You are an adult");
    } else {
        console.log("You are not an adult");
    }
}

  legalAge(50);

// Added if else statements
function computeGrade(grade){
    if(grade >= 94.5){
        console.log("1");

    } else if (grade >=91.5){
        console.log("1.25");

    } else if (grade >=89.5){
        console.log("1.5");

    } else if (grade >=86.5){
        console.log("1.75");

    } else if (grade >=84.5){
        console.log("2");

    } else {
        console.log("Not within the transmutation");
    }
}

computeGrade(85);

// Added nested if statements
function login(username,password){
    if(username === "lovegrace"){
    
       if(password === 1234){
        console.log("Welcome User");
       } else {
        console.log("Invalid Login Credentials")
       }

    } else {
        console.log("Invalid User");
    }
}

login("LG",1234);


// Added conditional statement to division on math.js
function quo(num1,num2){
    quo = num1 / num2;
    console.log(quo);
    if(num2 === 0){
        console.log("Cannot divide by zero");
    } else {
        quo = num1 / num2;
        console.log(quo);
    }
}

quo(2,3);
quo(2,0);