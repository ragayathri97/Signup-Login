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
signup("Bob")
signup("Bob")