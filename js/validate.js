var validation = new JustValidate('#newSignUp');

validation 
    .addField("#name", [
	{
	    rule: "required"
	}
     ])
    .addField("#email", [
	{
	    rule: "required"
	},
	{
	    rule: "email"
	},
	{
	    validator: (value) => () => {
		return fetch("validate-email.php?email=" + encodeURIComponent(value))
		.then(function(response) {
		     return response.json();
		})
		.then(function(json) {
			return json.available;
		});
	    },
	    errorMessage: "That email is already taken!"
	}


     ])
     .addField("#password", [
	{
	    rule: "required"
	},
	{
	    rule: "password"
	}

     ])
     .addField("#password_confirmation", [
	{
	    validator: (value, fields) => {
		return value === fields["#password"].elem.value;
	    },
	    errorMessage: "Passwords should match!"
	}
     ])
     .onSuccess((event) => { 
	document.getElementById('newSignUp').submit();
     });
