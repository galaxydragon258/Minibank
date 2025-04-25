


document.addEventListener("DOMContentLoaded",function(){
    const add = document.getElementById("bal");
    
    const submit = document.getElementById("sub");

    const update = document.getElementById("upd");

    let remove = document.getElementById("rev");

    let deduct = document.getElementById("min");

    let savedBalance = parseFloat(localStorage.getItem("balance"));

    let dashboard =  document.getElementById("dashs");

  
    
    let button = document.getElementById("log");

    function buttonhandler(){
        let User = document.getElementById("user").value;
        let Pass = document.getElementById("pass").value;

        if(User  == "Admin" && Pass == "123"){
            window.location.href ="mains.html";
        }

        else{
            document.getElementById("user").value ="";
            document.getElementById("pass").value ="";
            
         
            alert("Re-enter Username or Password");
           
        }
        
    }
    if(button){
        button.addEventListener("click",buttonhandler);
    };
   



   
    



    function addvalue(){
        const value = parseFloat(add.value);
        let current = parseFloat(localStorage.getItem("balance")) || 0;

      if(isNaN(value)){
             update.textContent = 0;
        return;
      }
        
        if(add && update){
        

            current += value;

            localStorage.setItem("balance",current);

            update.textContent = current;
            
            add.value = ""
        }
       
    }


    function removee(){

    savedBalance =0;
    localStorage.setItem("balance" ,savedBalance)

    update.textContent = savedBalance;
    add.value = "";
     

         
    }


    function deductt (){
        const value =parseFloat(add.value);
        let current = parseFloat(localStorage.getItem("balance"));
        if(isNaN(value)){
            update.textContent = 0;
            return;
           
        }

        current -= value;

        localStorage.setItem("balance" ,current);

        update.textContent = current;
         add.value = "";
    }

    function dashboardVView(){
        alert("Alert This Button is Currently on fix");

    }




   if(dashboard){
    dashboard.addEventListener("click" ,dashboardVView);
   }
    

    if(deduct){
        deduct.addEventListener("click",deductt);
    }

    if(remove){
        remove.addEventListener("click",removee);
    }

    if(submit){
        submit.addEventListener("click",addvalue);
    }

   

    if(savedBalance){
        update.textContent = savedBalance;
    }

  


    




});