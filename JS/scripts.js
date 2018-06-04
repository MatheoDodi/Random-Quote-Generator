var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
	$(".quote-text").text(data.quoteText);
	if (data.quoteAuthor === "") {
		data.quoteAuthor = "Unknown";
	}
	$(".author-text").text("- " + data.quoteAuthor);
	var quote =  data.quoteText + " - " + data.quoteAuthor;
	$("#btnTwitter").attr("href","https://twitter.com/intent/tweet?text="+ data.quoteText + " - " + data.quoteAuthor).attr("target", "_blank");
	console.log(quote);
};


$("#btnQuote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

