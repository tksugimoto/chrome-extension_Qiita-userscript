// 更新済みの記事も初回投稿日時を表示
Array.from(document.querySelectorAll('.it-Header_time')).filter(elem => {
	// 更新あり
	return elem.querySelector('time[itemprop="dateModified"]');
}).forEach(elem => {
	const timeContainer = elem.querySelector('[data-original-title]');
	const postedTimeText = timeContainer.getAttribute('data-original-title');
	elem.append(postedTimeText);
	elem.append(' (');
	elem.append(timeContainer);
	elem.append(')');
});
