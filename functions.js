
function collapseAll()
{
	document.getElementById("page_about").style.visibility="collapse";
	document.getElementById("page_login").style.visibility="collapse";
	document.getElementById("page_contactUs").style.visibility="collapse";
	document.getElementById("page_home").style.visibility="collapse";
	document.getElementById("page_debate").style.visibility="collapse";
	document.getElementById("page_policy").style.visibility="collapse";
	document.getElementById("page_settings").style.visibility="collapse";
	document.getElementById("page_notifications").style.visibility="collapse";
}


function pageChanged(elem) {

	collapseAll();

    if(elem.id == "link_about") {
    	document.getElementById("page_about").style.visibility="visible";
    }
	else if(elem.id == "link_contactUs") {
		document.getElementById("page_contactUs").style.visibility="visible";
	}
	else if(elem.id == "link_login") {
		document.getElementById("page_login").style.visibility="visible";
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
