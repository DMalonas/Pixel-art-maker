function makeGrid() {
	$("#pixelCanvas").empty();
	//Alternative : const height = ("#inputHeight").val();
	const height = document.querySelector('#inputHeight').value;
	const width = document.querySelector('#inputWidth').value;
	
	for (var row = 1; row <= height; row++) {
		$("#pixelCanvas").append($("<tr></tr>"));
		for (var col = 1; col <= width; col++) {
			$("tr").last().append($("<td></td>"));
		}
	}
}


//button event
$("#buttonInput").click(function(event) {
	event.preventDefault();
	makeGrid();
});

//mouse click event
$("#pixelCanvas").on("click", "td", function() {
	$(this).css("background-color", document.querySelector('#colorPicker').value);
});