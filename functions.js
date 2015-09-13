


//var Post = Parse.Object.extend("Post")


$(function()
{
	Parse.$ = jQuery;
	Parse.initialize("gaNH3iqPa51vU7S4UeJGU8BqPwEZWHxYiFvPYRIJ", "NlQk7ypYuRJLsf6EcOOvPJTUZLUbWSHhtYHOoUKD");
	hideAll();
	if(Parse.User.current())
	{
		document.getElementById("page_home").style.display="initial";
	}
	else
	{
		document.getElementById("page_login").style.display="initial";
	}

	var Post = Parse.Object.extend("Post");
	var post = new Post();
	post.set("title", "trial");
	post.set("description", "description");
	post.set("motion", "F");
	post.set("type", "C");
	post.set("userId", "4wPW3z3GOy");
	var crossQuestionList = [["Q1", "A1"],["Q2", "A2"],["Q3", ""]];
	post.set("crossQuestionList", crossQuestionList);
	post.save();
	







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
		Parse.User.logOut();
		window.alert("you have been successfully logged out");
    	document.getElementById("page_login").style.display="initial";
    }
}


function signUp()
{
	var user = new Parse.User();
	var emailId = document.getElementById("signUp_email").value;
	var password = document.getElementById("signUp_password").value;
	var repassword = document.getElementById("signUp_repassword").value;
	var firstName = document.getElementById("signUp_firstName").value;
	var lastName = document.getElementById("signUp_lastName").value;
	if(emailId == "")
	{
		window.alert("Please enter email");
		return;
	}
	if(firstName == "")
	{
		window.alert("Please enter first name");
		return;
	}
	if(lastName == "")
	{
		window.alert("Please enter last name");
		return;
	}
	if(password == "")
	{
		window.alert("Please enter password");
		return;
	}
	if(password != repassword)
	{
		window.alert("Please enter same passwords");
		document.getElementById("signUp_password").value = "";
		document.getElementById("signUp_repassword").value = "";
		return;
	}
	var emptyList = [];
	user.set("email", emailId);
	user.set("password", password);
	user.set("username", emailId); // user name is the email
	user.set("firstName", firstName);
	user.set("lastName", lastName);
	user.set("debateList", emptyList);
	user.signUp(null,{
		success: function(user)
		{
		// account was created
			alert("Account successfully created. Please follow verification link mailed to you.");
			document.getElementById("signUp_email").value = "";
			document.getElementById("signUp_firstName").value = "";
			document.getElementById("signUp_lastName").value = "";
			document.getElementById("signUp_password").value = "";
			document.getElementById("signUp_repassword").value = "";
		},
		error: function(user, error)
		{
			// error creating account
			window.alert(error.message);
			document.getElementById("signUp_password").value = "";
			document.getElementById("signUp_repassword").value = "";
		}
	});
}

function signIn()
{
	var emailId = document.getElementById("signIn_email").value;
	var password = document.getElementById("signIn_password").value;
	Parse.User.logIn(emailId, password).then(function(user)
	{
		//User is logged in
		hideAll();
		document.getElementById("page_home").style.display="initial";
	}, function(error)
	{
		window.alert(error.message);
	}

	);
}



