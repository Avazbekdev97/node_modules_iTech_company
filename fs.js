// fs writeFile

const fs = require('fs')
const path = require('path')
const prompt = require('prompt')


let users = [
    {
        "name": "John",
        "lastname": "Obama"
    },
    {
        "name": "Barack",
        "lastname": "Trump"
    }
]

const write = fs.writeFileSync(path.join('./users.txt'), JSON.stringify(users, null, 4))


// fs appendFile

//let newUser = {
//    "name": "John",
//    "lastname": "Baiden"
//}
//
//users.push(newUser) 
//const append = fs.writeFileSync(path.join('./users.json'), JSON.stringify(users, null, 4))

//fs readFile

const people = fs.readFileSync(path.join('./users.txt'), 'utf-8')
//
console.log(people);

// fs delete
//fs.unlinkSync(path.join('./users.json'))



//let data = fs.readFileSync(path.join('./data.json'), "utf-8")
//data = JSON.parse(data)
// console.log(data);
//const updateData = (data) => {
//    const updateName = "Jack" 
//    for(let name of data) {
//        if(name.name === 'Olimjon') {
//            console.log(name.name);
//            name.name = updateName;
//        }
//        return data;
//    }
//}

// console.log(data);
//let updateUser = fs.writeFileSync(path.join('./data.json'), JSON.stringify(updateData(data), null, 4))

//const readline = require('readline').createInterface({
//    input: process.stdin,
//    output: process.stdout
//})

/* readline.question("What is your name: ", name => {
    console.log(`Welcome ${name}`);
    let person = {

    }
    let data = fs.readFileSync(path.join('./data.json'), "utf-8")
    data = JSON.parse(data) 
    data.push()
    fs.writeFileSync(path.join('./data.json'), JSON.stringify())
}) */

/* prompt.start()

prompt.get(['name', 'lastname'], (err, result) => {
    if(err) {
        console.log(err)
    }
    else {
        let data = fs.readFileSync(path.join('./data.json'), 'utf-8')
        data = JSON.parse(data)
        let person = { "name": result.name, "lastname": result.lastname }
        data.push(person)
        fs.writeFileSync(path.join('./data.json'), JSON.stringify(data, null, 4))
        console.log("Name>>>>> " + result.name)
        console.log("Lastname>>>>> " + result.lastname)
    }
}) */