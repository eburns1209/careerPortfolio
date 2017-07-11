
$("#submit").on("click", function (event){
		event.preventDefault();

	var name = $("#name-input").val().trim();
	var email = $("#email-input").val().trim();
	var message = $("#message-input").val().trim();


	var newEmail = {
		person: name,
		contact: email,
		story: message
	};

	

	console.log(newEmail.person);
	console.log(newEmail.contact);
	console.log(newEmail.story);

	alert("email sent");

	$("#name-input").val("");
	$("#email-input").val("");
	$("#message-input").val("");

	return false;
});




$("#btn").click(function(){
	console.log("it worked");
	// window.location.href = '../images/ErinStowe2017.pdf'
	// console.log("it worked");
})