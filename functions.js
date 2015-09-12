
function pageChanged(elem) {

	document.getElementById("page_about").style.visibility="collapse";
    	document.getElementById("page_login").style.visibility="collapse";
    	document.getElementById("page_contactus").style.visibility="collapse";
    	document.getElementById("page_home").style.visibility="collapse";
    	document.getElementById("page_debate").style.visibility="collapse";
    	document.getElementById("page_policy").style.visibility="collapse";
    	document.getElementById("page_settings").style.visibility="collapse";
    	document.getElementById("page_notifications").style.visibility="collapse";
    
    if(elem.id == "link_about") {
    	document.getElementById("page_about").style.visibility="visible";
    }
    else if(elem.id == "link_contactus") {
    	document.getElementById("page_contactus").style.visibility="visible";
    }
    else if(elem.id == "link_policy") {
    	document.getElementById("page_policy").style.visibility="visible";
    }
    else if(elem.id == "link_settings") {
    	document.getElementById("page_settings").style.visibility="visible";
    }
    else if(elem.id == "link_notifications") {
    	document.getElementById("page_notifications").style.visibility="visible";
    }
    else if(elem.id == "link_logOut") {
    	document.getElementById("page_home").style.visibility="visible";
    }



    


    
}
