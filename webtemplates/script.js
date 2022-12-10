
function examples(){
    const shearch = document.getElementById("inputsearch").value
    const nav = document.getElementById("nav")
    const div = document.getElementById("div")
    const found = document.getElementById("found")
    const middle = document.getElementById("middle")
    const end = document.getElementById("end")
    const alert_ = document.getElementById("alert")
    found.innerHTML = "Tags: Examples";

}
function Css(){
    const shearch = document.getElementById("inputsearch").value
    const nav = document.getElementById("nav")
    const div = document.getElementById("div")
    const found = document.getElementById("found")
    const middle = document.getElementById("middle")
    const end = document.getElementById("end")
    const alert_ = document.getElementById("alert")
    const confirm_ = document.getElementById("confirm")
    confirm_.parentNode.removeChild(confirm_);
    found.innerHTML = "Tags: Css";
    
    alert_.parentNode.removeChild(alert_);
}
function Html(){
    const shearch = document.getElementById("inputsearch").value
    const nav = document.getElementById("nav")
    const div = document.getElementById("div")
    const found = document.getElementById("found")
    const middle = document.getElementById("middle")
    const end = document.getElementById("end")
    const alert_ = document.getElementById("alert")
    const confirm_ = document.getElementById("confirm")
    confirm_.parentNode.removeChild(confirm_);
    found.innerHTML = "Tags: html";
    alert_.parentNode.removeChild(alert_);
}
function Js(){
    const shearch = document.getElementById("inputsearch").value
    const nav = document.getElementById("nav")
    const div = document.getElementById("div")
    const found = document.getElementById("found")
    const middle = document.getElementById("middle")
    const end = document.getElementById("end")
    const alert_ = document.getElementById("alert")
    found.innerHTML = "Tags: Java script";
    div.parentNode.removeChild(div);

    nav.parentNode.removeChild(nav);

}
function search(){
    const shearch = document.getElementById("inputsearch").value
    const nav = document.getElementById("nav")
    const div = document.getElementById("div")
    const found = document.getElementById("found")
    const middle = document.getElementById("middle")
    const end = document.getElementById("end")
    const alert_ = document.getElementById("alert")
    const confirm_ = document.getElementById("confirm")
    
    if (shearch == "Nav bar"){
        confirm_.parentNode.removeChild(confirm_);
        div.parentNode.removeChild(div);
        end.innerHTML = "End of results";
        
        
    }else{
        if(shearch =="Div"){
            confirm_.parentNode.removeChild(confirm_);
            nav.parentNode.removeChild(nav);
            end.innerHTML = "End of results";
            alert_.parentNode.removeChild(alert_);
            
        }else{
            if(shearch == "HTML"){
                confirm_.parentNode.removeChild(confirm_);
                end.innerHTML = "End of results";
                
                alert_.parentNode.removeChild(alert_);
            }else{
                if(shearch =="Css"){
                    confirm_.parentNode.removeChild(confirm_);
                    end.innerHTML = "End of results";
                    
                    alert_.parentNode.removeChild(alert_);
                }
                else{
                    if (shearch =="Java script"){
                        nav.parentNode.removeChild(nav);
                        div.parentNode.removeChild(div); 
                    }else{
                        if(shearch=="Alert"){
                            nav.parentNode.removeChild(nav);
                            div.parentNode.removeChild(div);
                            confirm_.parentNode.removeChild(confirm_);

                        }else{
                            if(shearch=="confirm"){
                                nav.parentNode.removeChild(nav);
                                div.parentNode.removeChild(div);
                                alert_.parentNode.removeChild(alert_);
                            }else{
                                end.innerHTML = "Not Found";
                                nav.parentNode.removeChild(nav);
                                div.parentNode.removeChild(div);
                                alert_.parentNode.removeChild(alert_);
                                confirm_.parentNode.removeChild(confirm_);
                            }
                            
                        }
                    }
                    

                }
            }
            
           
           
           
        }
        

    }
}