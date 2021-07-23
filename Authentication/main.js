// Create a registration system
var objPeople = [
	{
		username: 'user1',
		password: '987654321'
	},
	{
		username: 'user2',
		password: '123456789'
	},
	{
		username: 'tcs',
		password: 'tcs12345'
	}
]


function login() {
    //var objPeople = new Array();
    //objPeople = localStorage.getItem("all_users");
    //var data2 = JSON.parse(objPeople);
    //console.log(data2)
    //console.log(objPeople)
    //objPeople = localStorage.getItem('all_users',JSON.stringify(objPeople));
    //console.log('retrieveddata', JSON.parse(retrievedata));
    //objPeople=(localStorage.getItem("all_users"));
    //objPeople.push({username: username, password: password});
    //localStorage.setItem('username',JSON.stringify(objPeople));
    //localStorage.setItem('password',JSON.stringify(objPeople));

    //var getJson = localStorage.getItem('all_users')
    //arrayName = JSON.parse(getJson)

   // var pull=JSON.parse(localStorage.getItem('all_users'));

	var username = document.getElementById('username').value

	var password = document.getElementById('password').value


	for(var i = 0; i < objPeople.length; i++) {

		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + ' ,you are now logged ')
			location.href = 'https://cloudtechin.blogspot.com/';
			break
		} else {
			console.log('incorrect username or password')
			alert('Invalid username or Password')
			location.href = '/Authentication/signin.html';
			break
		}
	}
}


function registerUser() {

    var registerfullname = document.getElementById('newfullname').value
    var registerEmail = document.getElementById('newEmail').value
	var registerUsername = document.getElementById('newUsername').value
	var registerPassword = document.getElementById('newPassword').value
	//sessionStorage.setItem(“currentloggedin”,registerUsername);
	//sessionStorage.setItem(“currentloggedin”,registerPassword);
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	for(var i = 0; i < objPeople.length; i++) {
		if(registerUsername == objPeople[i].username) {

			alert('That username is already in exist, please sign in with ur details')

			break

		} else if (registerPassword.length < 8) {

			alert('That is very short password, include > 8 characters')

			break
		}
		else{
		alert('successfully registered')
		location.href = '/Authentication/signin.html';

		break
		}
	}

	objPeople.push(newUser)
	localStorage.setItem('all_users',JSON.stringify(objPeople));

	console.log(objPeople)
}
