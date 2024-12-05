let userNames=["Alice","Bob","charlie","sri","ram"];
function signup(str){
    let filteredData=userNames.filter((el,i)=>el==str);
   
    if(filteredData.length==0){
        userNames.push(str)
        console.log("signup Sucessfull......")
    }
    else{
        console.log("Already registred....")
    }
}
signup("Gayu")
signup("Gayu")


function login(str, password){
    let filteredData=userNames.filter((el,i)=>el==str);
    if(filteredData.length==0){
        console.log("User Not Found... Please Signup")
    }
    else{
        if(password=="Emp@123"){
            console.log("Login Sucessfull....")
        }
        else{
            console.log("Wrong Password.....")
        }
    }
}
login("Bob","Emp@123")