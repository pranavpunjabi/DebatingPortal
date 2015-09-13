
//var User = Parse.Object.extend("User");
//var Debate = Parse.Object.extend("Debate");
//var Post = Parse.Object.extend("Post")


$(function()
{
	Parse.$ = jQuery;
	Parse.initialize("gaNH3iqPa51vU7S4UeJGU8BqPwEZWHxYiFvPYRIJ", "NlQk7ypYuRJLsf6EcOOvPJTUZLUbWSHhtYHOoUKD");
	hideAll();
	document.getElementById("page_login").style.display="initial";
});





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


function pageChanged(elem)
{
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


function signUp()
{
	var user = new Parse.User();
	var emailId = document.getElementById("signUp_email").value;
	var password = document.getElementById("signUp_password").value;
	var repassword = document.getElementById("signUp_repassword").value;
	if(password == "")
	{
		window.alert("Please enter password");
		document.getElementById("signUp_password").value = "";
		return;
	}
	if(password != repassword)
	{
		window.alert("Please enter same passwords");
		document.getElementById("signUp_password").value = "";
		document.getElementById("signUp_repassword").value = "";
		return;
	}
	var firstName = document.getElementById("signUp_firstName").value;
	var lastName = document.getElementById("signUp_lastName").value;
	var emptyList = [];
	user.set("email", emailId);
	user.set("password", password);
	user.set("username",firstName + " " + lastName);
	user.set("debateList", emptyList);
	user.save();
	window.alert("Kindly verify your email and then sign in");
}
