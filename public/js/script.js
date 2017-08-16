$.ajax({
	url: "http://localhost:3000/users=kshantilal03",
	dataType: "json",
	success: function(DataFromServer){
		console.log(DataFromServer);
	},
	error: function(){
		console.log("something went wrong");
	}








});
