
Parse.initialize("gaNH3iqPa51vU7S4UeJGU8BqPwEZWHxYiFvPYRIJ", "NlQk7ypYuRJLsf6EcOOvPJTUZLUbWSHhtYHOoUKD");
pageChanged(document.getElementById("page_login"));
document.getElementById("page_login").style.display="initial";







function hideAll()
{
	document.getElementById("page_about").style.display="none";
	document.getElementById("page_login").style.display="none";
	document.getElementById("page_contactUs").style.display="none";
	document.getElementById("page_home").style.display="none";
	document.getElementById("page_debate").style.display="none";
	document.getElementById("page_policy").style.display="none";
	document.getElementById("page_settings").style.display="none";
	document.getElementById("page_notifications").style.display="none";
}


function pageChanged(elem) {

	hideAll();

    if(elem.id == "link_about") {
    	document.getElementById("page_about").style.display="initial";
    }
	else if(elem.id == "link_contactUs") {
		document.getElementById("page_contactUs").style.display="initial";
	}
	else if(elem.id == "link_login") {
		document.getElementById("page_login").style.display="initial";
	}
	else if(elem.id == "link_policy") {
    	document.getElementById("page_policy").style.display="initial";
    }
    else if(elem.id == "link_settings") {
    	document.getElementById("page_settings").style.display="initial";
    }
    else if(elem.id == "link_notifications") {
    	document.getElementById("page_notifications").style.display="initial";
    }
    else if(elem.id == "link_logOut") {
    	document.getElementById("page_home").style.display="initial";
    }







}
