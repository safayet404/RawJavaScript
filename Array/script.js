





 /* const captain = {
    name : "Mashrafee",
    age : 23,
    country : "Bangladesh"
}


let player = Object.create(captain);

*/




/*function Person(name,age)
{
    

    let person = {}
    person.name = name;
    person.age = age;

}


Person.prototype = {
    eat(){
        console.log(`Player is eating `)
    },

    slep(){
        console.log(`Plauyer is sleeping`)
    }
}


let sakib = new Person('Sakib',44);
console.log(sakib)
sakib.eat();

sakib.slep();

*/


/*const takeOrder = (customer, callback )=>{

    console.log(`take order for ${customer}`)
    callback(customer);
}



const PlaceOrder = (customer,callback) => {

    console.log("processing customer order 1");

    setTimeout(()=>{
        console.log(`cooking completed`)
        console.log(`Order processed for ${customer}`);
        callback(customer);
    },3000);   
}


const completeOrder=(customer)=>{
    console.log(`completed order for ${customer}`);
}

takeOrder('Customer 1',(customer)=>{
    PlaceOrder(customer,(customer)=>{
        completeOrder(customer);
    })
});

*/


const hasMeeting = false;


const meeting = new Promise((resolved,reject) => {

    if(!hasMeeting){
        const meetingDetails = {
            name : "New Project Meeting",
            location : "Yelling",
            time : "10.00"
        }

        resolved(meetingDetails);
    }
    else
    {
        reject(new Error('Meeting already Scheduled'));
    }  

});


meeting
.then((res)=>{
    console.log(JSON.stringify(res));
})
.catch((err)=>{
    console.log(err.message);
});