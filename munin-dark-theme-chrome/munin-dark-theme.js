var munin_footer = document.getElementById("footer")

if (munin_footer && munin_footer.innerHTML.match(/munin|Munin/)) {
	var link = document.createElement("link");
	link.href = chrome.extension.getURL('') + "munin-dark-theme.css";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);
} 
