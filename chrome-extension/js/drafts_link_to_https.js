Array.from(document.getElementsByTagName("a")).forEach(anchor => {
	if (anchor.href.startsWith("http://qiita.com/drafts/")) {
		anchor.href = anchor.href.replace(/^http:/, "https:");
	}
});
