var myFirebase = new Firebase("https://k-chatapp.firebaseio.com/");

var submitMessage = function(){
	var $messageBody = $(".message-body");
	myFirebase.push($messageBody.val());
	$(".message-body").val("");
};

var displayMessage = function(data){
	var $messageEl = $("<p>").text(data.val())
	$(".conversation-box").append($messageEl);
};

myFirebase.on("child_added", displayMessage)



$(".submit-button").click(submitMessage);

