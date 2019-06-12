let quoteData;

function getQuotes() {
  return $.getJSON("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    (jsonQuotes) => {
			quoteData = jsonQuotes;
			console.log(quoteData);
    }
  );
}

function getQuote() {
	let num = quoteData.quotes.length;
	let randQuote = quoteData.quotes[Math.floor(Math.random() * num)];
	$("#quote-text").text(randQuote.quote);
	$("#author").text("-"+randQuote.author);
}

getQuotes().then(
		()=>{
			getQuote();
			$("#author").hide();
		}
	);	

$(function() {
	$("#subtitle").fadeIn("slow");
	$("#title, #subtitle").fadeIn("slow",function() {
		$("main").slideDown("slow", function() {
			$("footer").fadeIn("slow", function() {
				$("#text > *, #author").slideDown("slow")
			})
		})
	});


	$("#new-quote").click(function() {
		$("#text > *, #author").slideUp("slow",function(){
			getQuote();
		  $("#text > *, #author").slideDown("slow");
		}).delay(300);
	});

// Sent out the tweet on click.	
	const tweet = "https://twitter.com/intent/tweet?text=";
	$("#tweet-quote").click(function(){
		let quote = $("#text").text();
		let author = $("#author").text();
		$("#tweet-quote").attr("href",tweet + quote + "%20%0D"+ author);
	})
});
