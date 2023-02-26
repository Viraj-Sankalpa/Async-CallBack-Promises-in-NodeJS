/*

const getUser = ()=>{
    return {name:"Viraj"}
};

let user = getUser();

console.log(user);

*/

const getUser = (callback)=>{
    setTimeout(()=>{
        callback({name:"Viraj"})
    },2000);
}

getUser((data)=>{
    console.log(data);
});