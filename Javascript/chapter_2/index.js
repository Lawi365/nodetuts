// data types. no, string, boolelan,null undefined object symbol

let $score =75;
console.log($score)

// log everything on console.
// MORE DATA TYPES
// strings
console.log('this is a string')

//string concat

console.log('this is a '+'n added string')

//geting characters
let firstname = 'denise'
console.log(firstname.matchAll('e').next)

// get length of string
console.log(firstname.length)

//string methods
console.log(firstname.endsWith('e'))
console.log(firstname.startsWith('d'))
console.log(firstname.endsWith('e'))
console.log(firstname.toLowerCase())
console.log(firstname.toUpperCase())

let result = firstname.toUpperCase()
console.log(result,firstname)


let email = 'mario@thenetninja.co.ke'
let index = email.indexOf('@')

console.log(index, email[5])


// var video = document.getElementById('myvideo');
// video.removeAttribute('muted');
// video.muted = false;
// video.volume= 0.5;

let results = email.slice(2,5);
console.log(results)

//similar to slice

let resulto = email.replace('n','w')
console.log(resulto)

//numbers.
let radius = 20;
const pi = 3.14;

console.log(radius,pi)

//math operators +,-,*,/,**,%
console.log(radius/3)
console.log(radius%3)

let answer = pi * radius**2

console.log(answer/2)

//Order of operation. BIDMAS
console.log(5* (10-3)**2)

let likes = 10;
likes ++
//shorthand saves the day
likes -=5
likes *=4
console.log(likes)

//NaN - not a number.
console.log(5/'hello')//operation not supported.

//concatenating numbers.
let resu = 'the blog has '+ likes + ' likes'
console.log(resu)

//template string.
const title = 'Best reads of 2019'
const author = 'Mario'
const like = 39;
//concat way
console.log(title + ' by ' + author +' has '+ like +' likes')

//template string way
console.log(`${title} by ${author} has ${like} likes`)

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${like} likes</span>`;
page = document.getElementsByClassName('home')
page.innerHTML = html
console.log(html)


let ninjas = ['shaun','ryan','johntee']
ninjas[1] = 'kennedy'
console.log(ninjas)

let ages = [20,25,30,35]
console.log(ages[2])

let random = ['shaun', 'crystal', 30,20]
console.log(random)

console.log(ninjas.length)
console.log(ninjas.join(' '))

console.log(ninjas.indexOf('crystal'))
console.log(ninjas.concat([3,4,5,30]))
console.log(ninjas.sort())

console.log(ninjas.push('yohni'))
console.log(ninjas.pop('kennedy'))

console.log(ninjas)


//undestandng null and undefined.
let we =null;

console.log(we,we + 3, `the age is ${we}`);

//booleans the truthy falsy.
//loose comparison.

let new_email = 'luigi@thenetninja.co.ke'
let names = ['mario','luigi','toad']
let reso = email.includes('@')

console.log(reso)
console.log(names.includes('mario'))

let new_age = 23;
// console.log(new_age == 24);
// console.log(new_age !=29)

// console.log(new_age<=23)

let name= 'shaullin'
console.log(name == 'shaun')
console.log(name >= 'shaullin')
console.log(name > 'shaun')
console.log(name < 'crystal')

//strict comparison (different types cannot be equal)

let age = 23;

console.log(age == 23);
console.log(age == '23')

console.log(age === 23);
console.log(age  ==='23');

console.log(age !== 23);
console.log(age !=='23')

//for predictable results we always use strict .

//Type Conversion.
let score = '100';
// score = Number(score)
console.log( Number(score)+ 1)
console.log(typeof score)

console.log(Number('hello'))

console.log(score , typeof String(score))

let ones = Boolean('')
console.log(ones)


//Control Flows
//a. For loop

// for (let i = 0; i< 5; i++){
//     console.log('In loop',i))
// }

const named = ['shau','mario','luigi']

for ( let i = 0; i < named.length; i++){
    // console.log(i,named[i])
    let htm = `<div> ${named[i]}</div>`
    console.log(htm)
}

//do the while while for a while.
// let i = 3;
// while (i < 5){
//     console.log('you lawi is see you brother');
//     i++;
// }

const nemesis = ['sho','madjozi']

// let j= 0;
// while(j<4){
//     console.log('val of i is : ',i);
//     i++;
// }

//do while loop reminds me of c and c++
i = 6;
do{
    console.log('val of i is : ',i);
    i++;

}while(i<5);

//if flow
const aged = 25;

if (age < 30){
    console.log('over30s not welcomed here')
}

if (ninjas.length < 3){
    console.log(" that's a lot of ninjas ")
}

const password = 'p@ss';

if (password.length >= 12 && password.includes('@') ){
    console.log('Long enough password now make it funky');
}else if (password.length >= 8 || password.includes('@')){
    console.log('special character guaranteed')
}else{
   console.log(
        'check password'
    )
}

//INTERMISSION
// Be the doer and not a follower.
// Backend developement.$score
// Node js framework --> cross plartform js framework ->apis etc.
// concpets
// http 
// test 
// grapql 
// web sockets 
// cors
// ci/cd 
// serverless

// dbs 
// sql(mysql,postgressql) nosql (mongo,couchdb, dynamodb)

// caching 
// redis 

// orm/odm 
// mongoose(mongodb,prismasql , sequelize)

// essentials 
// author,oauth,hasing,rae limiting , reversee Proxy, load balancer etc 

// other, 
// linux, teminal git , basic networking, payment etc 

// deploying to cloud.$score
// google cloud 
// digital ocean answer, azure, heroku , linode ,vercel 

//MENTORS
//get a mentor to skyrocket progress incase of unstucked.
// code reviews etc. the best way to do it is what countss.
//industry insights
//encouragement and motivation.(Mimetic desire.)


//craft a resume that is clear and concise.
//Man must stand out. Use action verbs. accomplished x as measured by y by doing z.
//showcase talent on linkedin then the rest will be history.
//Algorithmic exercises.(very crucial for job devs.)
// 3 most popular interview questions
// tell me about yourself.
// experience relevant to role.
// talk about value
// finish reason why I want to work here and find value in website.

//why our company --> dont talk about self.
// companies mission vision and value and how I align
// what are strengths and weaknesses. -> show you're working to do them.

//

// when the condition is false

let user = false;

if (!user){
    console.log('it has just began the avalance is here')
}

const arr = [40,23,0,30, 100,20,10]

for (let i = 0; i< arr.length; i++){
    console.log('your score: ', arr[i]);

    if(arr[i]===100){
        console.log('congrats,you got the top score!')
        
    }
}

//Switch Statements
const grade = 'B';

switch(grade){
    case 'A' : console.log('You are a genius');break;
    case 'B' : console.log('You got a B');break;
    case 'C' : console.log('You got a C');break;
    case 'D' : console.log('You got a D');break;
    case 'E' : console.log('You got a E');break;
    default:
        console.log('Not a valid grade');
}

//Variables and Block Scope.
const john = 30;//global scope.


if(true){
    const john = 40;
    const names = 'shaun'
    console.log('inside code block: ', john, names)

    if(true){
        const john = 50;
        console.log('inside sec if block: ',john)
    }
}
console.log('outside code block: ',john)

//6th jan 2023
// functions net ninja tut4
// function declaration

greet();
greet();
greet();

function greet(){
    console.log('hello people')
}

//function expression
const speak = function(){
    //a function expression
    console.log('good day brother!')
};

speak();
speak();
speak();

//arguments and parameters.

const speaking = function (name='njeri',time='Afternoon'){
    console.log(`good day ${name} ${time} `)
};

speaking();

const calcArea = function(radius){
    return  3.14 * radius ** 2;
}

console.log(calcArea(5))

const calcVol = function(area){

};

calcVol();

//arrow functions. The best there is and ever been.
//exactly one parameter.
const calcArea1 = radius => {
    return 3.14 * radius **2 ;
}

//no parameters 
const newly = () =>'happy lad';

//practicing turning regular functions to arrow functions.

const greet2 = function (){
    return 'hello world';

};

//equiv arrow func

const greet1 = ()=> 'hello world';

const bill = function(products, tax){
    let total = 0;

    for (let i =0 ; i< products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

//arrow equiv

const bill1 = (products, tax) => {
    let total = 0;
    for (let i =0 ; i< products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;

}

const a = bill1([12.30,50,80], 0.3)
console.log(a)

// methods and functions.
//the diff is where they are called and evoked.
const naml = 'shaunn';

console.log(naml.toUpperCase());

// callbacks & foreach

const myFunc = (callbackFunc) =>{
    //do something
    let value =50;
    callbackFunc(value);
};

myFunc(value=> {
    //do something
    console.log(value);
});

//callback & foreach

const people = ['marion','luigi','ryu','shaun','chun-li']

// people.forEach((person, index)=> {
//     console.log(person,index);
// })

const ul = document.querySelector('.people');


let htmll = ` `;

people.forEach(function(person){
    //create template for each person
    htmll += `<li style="color:purple">${person}</li>`
})

console.log(htmll)
ul.innerHTML = htmll;


//Lesson 5 Objects Literals.

let user_obj = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location:'berlin',
    blogs: [  {title: 'why mac & chees rules',likes: 30},
    {title:'10 things to make with marmite',likes:50}],
    login : function (){
        console.log('the user has logged in')
    },
    logout:function(){
        console.log('the user has logged out')
    },
    logBlogs(){
        // console.log(this.blogs)
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog =>{
            console.log(blog.title,blog.likes)
        })

    }

};

console.log(user_obj.name);

user_obj.age = 35;
console.log(user_obj.age)

//or 
console.log(user_obj['name'])

//update the user name etc

user_obj['name'] = 'chun-li'

console.log(user_obj['name']);


//
console.log(typeof user_obj);

//adding methods to objects.
//look inside user_obj

user_obj.login()
user_obj.logout()
user_obj.logBlogs()

//storing objects in objects.

const blogs = [
    {title: 'why mac & chees rules',likes: 30},
    {title:'10 things to make with marmite',likes:50}
]

console.log(blogs)

//Math object
 console.log(Math.round(10.5000))
 console.log(Math.floor(10.45098))
 console.log(Math.ceil(10.02348))
 console.log(Math.trunc(2.45098))

 // random numbers.

 const rand= Math.random();
 console.log(Math.round(rand * 100))

 // primitive values and referencee types
 //primitive values add new items in the stack
 //reference types will make a pointer pointing to the same value that we had earlier on.
 
//B4
 const userOne = {name: 'ryu', age: 30}
 const userTwo = userOne;

 console.log(userOne,userTwo);

 //After
 userOne.age = 40;
 console.log(userOne,userTwo);