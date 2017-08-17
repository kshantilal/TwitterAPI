$("#form").submit(function(event){
	event.preventDefault();
	var searchValue = $("#search").val();

	var url = "http://localhost:3000/users";
	if (searchValue.length > 0) {
		url += "/search=" + searchValue;
		console.log(url);
	}else{
		console.log("Please enter a value");
		return;
	}


	$.ajax({
		url: url,
		dataType: "json",
		success: function(DataFromServer){
			console.log(DataFromServer[0]);
			// console.log(DataFromServer[0].followers_count);
			// console.log(DataFromServer[0].statuses_count);

			
			
			$("#twitterName").empty();
			$("#userImage").empty();
			$("#Descriptions").empty();


			var profileImage = DataFromServer[0].profile_image_url;
			var screenName = DataFromServer[0].screen_name;
			var inputName = DataFromServer[0].name;
			var	description = DataFromServer[0].description;
			var location = DataFromServer[0].location;

			if (searchValue){
				
				$("#twitterName").append("<p>"+ inputName+"<p>");
				$("#userImage").append("<img style='width:300px;' src='"+profileImage+"'>");

				$("#Descriptions").append("<h1 class='name'>"+inputName+"</h1>"+
					"<strong><p>"+"@"+screenName+"</p></strong>"+
					"<p>"+location+"</p>"+
					"<i><p>"+description+"</p></i>"





					);
			}

			
			$("#tableBody").empty();
			var followers = DataFromServer[0].followers_count;
			var tweets = DataFromServer[0].statuses_count;
			var likes = DataFromServer[0].favourites_count;


				$("#tableBody").append("<tr>"+
					"<td>"+followers+"</td>"+
					"<td>"+tweets+"</td>"+
					"<td>"+likes+"</td>"+
				"<tr>");

			

		},
		error: function(){
			console.log("something went wrong");
		}

// "<img style='width:100px;' src='"+tweet.user.profile_image_url+"'>"+







	});















});




