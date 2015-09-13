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
	debate = {
		"active": true,
		"createdAt": "2015-09-13T03:47:54.768Z",
		"description": "\
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, soluta culpa aliquam ut excepturi rem!\
		Sapiente magni vero, ad saepe? Sequi porro reprehenderit culpa rerum adipisci nihil saepe, corporis vitae?\
		 Vel sequi impedit sunt ducimus blanditiis possimus aperiam exercitationem similique totam a eligendi,\
		 incidunt quam necessitatibus reiciendis dolorem, illum, cupiditate doloremque eaque recusandae quia praesentium,\
		 at. Id reprehenderit neque eveniet! Quaerat nam omnis aspernatur sapiente debitis quas harum unde accusamus\
		 enim dicta blanditiis accusantium neque atque eius ab, quae, esse possimus officiis nesciunt, dolores\
		asperiores! Eum voluptatem voluptas explicabo. Minima. Fugit, consequatur, corporis. Officia at cum, eius!\
		 Doloremque molestias quas excepturi alias voluptas quidem soluta fuga, accusamus nihil eius sint,\
		 harum neque obcaecati ex deserunt odit ab optio itaque, libero! Sunt quisquam accusamus labore eum optio\
		 dolorum laborum, earum neque consectetur eaque tenetur autem error iusto ipsum aliquid accusantium odit,\
		 obcaecati ratione culpa architecto iure maiores reprehenderit, quas voluptate et. Dolor, enim facilis,\
		totam possimus est ratione. Vel consequuntur dolorem consequatur repudiandae veritatis. Pariatur repudiandae\
		 ipsa quam asperiores quasi neque fugiat ratione quibusdam distinctio fuga quos quisquam nobis, illum, illo!\
		 Neque, nam quos. Quaerat fuga excepturi temporibus placeat provident mollitia et nam, sequi voluptate tempore\
		quod voluptatem ea beatae! Perferendis quos doloribus, nemo nobis consequatur maiores laborum voluptatem\
		repellendus quae!",
		"memberIdList": [
		"4wPW3z3GOy",
		"oB3uA21XhK"
		],
		"objectId": "zYJg0BdQkX",
		"postIdList": [
		"h7XmASJjSI","bN7fQkdGW6","tAMzBT548e","F0pFJqk40S"
		],
		"tagList": [],
		"title": "This house is for the advantages of unhealthy food for a healthy living",
		"updatedAt": "2015-09-13T03:56:05.169Z"
	}
	//showDebate(debate);
});


function showDebate(debate)
{
	// debateId must be a string

	// 1. hideAll() and then display post page
	hideAll();
	document.getElementById("page_debate").style.display="initial";

	// 2. get list of post IDs
	var postList = debate.postIdList;
	// 3. Set elements such as title and description
	document.getElementById("debate_title").innerHTML=debate.title;
	document.getElementById("debate_description").innerHTML=debate.description;

	for(i=0; i < postList.length; i++)
	{
		console.log(postList[i]);

		var query = new Parse.Query("Post");
		query.equalTo("objectId", postList[i]);
		query.find().then
		(
			function(results)
			{
				// console.log("successful read");
				// console.log(results[0]);
				if(results[0] == undefined)
					postInfo = (-1);
				else
				{
					postInfo = (results[0].toJSON());
					console.log(postInfo); // JSON object
					var cardString = cardGenerate(postInfo);

					// following decides where to add the post to
					console.log(postInfo.type + "," + postInfo.motion);
					if(postInfo.type == 'C')
					{
						if(postInfo.motion == 'F')
						{
							$(cardString).appendTo("#post_forConstructive");
						}
						else if(postInfo.motion == 'A')
						{
							$(cardString).appendTo("#post_againstConstructive");
						}
					}
					if(postInfo.type == 'R')
					{
						if(postInfo.motion == 'F')
						{
							$(cardString).appendTo("#post_forRebuttal");
						}
						else if(postInfo.motion == 'A')
						{
							$(cardString).appendTo("#post_againstRebuttal");
						}
					}
				}
			},
			function(error)
			{
				window.alert(error.message);
			}
		);

	} // end of loop
}

// generates card for debate based on posts in debate
function cardGenerate(postInfo)
{
	var cardString = "";
	cardString += "<li>";
	cardString += "<div class=\"row\">";
	cardString += "<div class=\"col s12\">";

	if(postInfo.type == 'C')
	{
		if(postInfo.motion == 'F')
		{
			cardString += "<div class=\"card cyan darken-3\">";
		}
		else if(postInfo.motion == 'A')
		{
			cardString += "<div class=\"card blue darken-3\">";
		}
	}
	if(postInfo.type == 'R')
	{
		if(postInfo.motion == 'F')
		{
			cardString += "<div class=\"card cyan darken-1\">";
		}
		else if(postInfo.motion == 'A')
		{
			cardString += "<div class=\"card blue darken-1\">";
		}
	}

	cardString += "<div class=\"card-content white-text\">";
	cardString += "<span class=\"card-title\">";
	cardString += postInfo.title;
	cardString += "</span>";
	cardString += "<p>";
	cardString += postInfo.description;
	cardString += "</p>";
	cardString += "</div>";
	cardString += "<div class=\"card-action\">";
	cardString += "<p>"; // open cross reference
	for(i = 0; i < postInfo.crossQuestionList.length; i++)
	{
		var QAList = postInfo.crossQuestionList[i];
		// let question = postInfo.crossQuestionList[i][0];
		// let answer   = postInfo.crossQuestionList[i][1];
		cardString += "Q) " + QAList[0] + "<br>";
		cardString += "A) " + QAList[1] + "<br>";
	}
	cardString += "</p>";
	cardString += "</div></div></div></div>"
	cardString += "</li>";
	console.log(cardString);
	return cardString;
}

function getPostInfo(postId, t)
{
	var postInfo = {};
	console.log("returning: " + postInfo);
	t = postInfo;
	return postInfo;
}




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
	else if(elem.id == "link_login")
	{
		if(Parse.User.current())
			document.getElementById("page_home").style.display="initial";
		else
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
		updateDebateList();
	}, function(error)
	{
		window.alert(error.message);
	}

	);
}


function updateDebateList() {

var query = new Parse.Query("Debate");

//updating current debates
query.equalTo("active", true);
query.find({
	success: function(list) {


    // Successfully retrieved the object.
    for(var i = 0; i < list.length; i++) {
    	$("<li><a href='#'>" + list[i].get("title") + "</a></li>").appendTo("#debateList_current");
    }

},
error: function(error)
{
	alert("Error: " + error.code + " " + error.message);
}

});



var query = new Parse.Query("Debate");
//updating completed debates
query.equalTo("active", false);
query.find({
	success: function(list) {
    // Successfully retrieved the object.
    for(var i = 0; i < list.length; i++) {
    	$("<li><a href='#'>" + list[i].get("title") + "</a></li>").appendTo("#debateList_completed");
    }

},
error: function(error)
{
	alert("Error: " + error.code + " " + error.message);
}

});




var query = new Parse.Query("Debate");
//updating my debates
var myId = Parse.User.current().id;
query.containedIn("memberIdList", [myId]);
query.find(
{
	success: function(array) {


    // Successfully retrieved the object.
    for(var i = 0; i < array.length; i++) {
    	$("<li><a href='#'>" + array[i].get("title") + "</a></li>").appendTo("#debateList_mine");
    }

},
error: function(error)
{
	alert("Error: " + error.code + " " + error.message);
}

});










}
