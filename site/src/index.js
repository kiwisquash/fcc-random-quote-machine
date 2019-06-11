$(function() {
	
// Sent out the tweet on click.	
	const tweet = "https://twitter.com/intent/tweet?text=";
	$("#tweet-quote").click(function(){
		let quote = $("#text").text();
		let author = $("#author").text();
		$("#tweet-quote").attr("href",tweet + quote + "%20%0D"+ author);
	})
});
