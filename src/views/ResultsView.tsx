function buildResultsView(results: Results): HTMLElement {
	return div(d=>{
		document.body.addEventListener(EVENT_updateResults, e=>{
			d.innerHTML = "" // empty the div
			results.list.forEach(a=>d.append(div(ad=>ad.textContent=a.head)))
		})
		document.body.dispatchEvent(new Event(EVENT_updateResults))
	})
}
