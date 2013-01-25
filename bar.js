function resetCounter(){
  //Array Index Start From 0
	document.getElementById("counter").max =(safari.application.activeBrowserWindow.tabs.length -1);
}

function closeCounter(){
	//decrease Counter by 1
	document.getElementById("counter").max =(parseInt(document.getElementById("counter").max) -1);
}

document.addEventListener("DOMContentLoaded",function (){
	resetCounter();
	document.getElementById("counter").addEventListener("change", function(){
		var _counter = document.getElementById("counter").value;
		if(_counter != undefined || _counter != "undefined")
			document.getElementById("output").innerText = (parseInt(_counter) + 1);
			safari.application.activeBrowserWindow.tabs[parseInt(_counter)].activate();
	});
});

safari.application.addEventListener("open", resetCounter,true);
safari.application.addEventListener("close", closeCounter,true);
