/** @jsx h */

function buildResultsView(results: Results): HTMLElement {
	return div(d=>{
		document.body.addEventListener(EVENT_updateResults, e=>{
			d.innerHTML = "" // empty the div
			d.append(table(t => {
				results.list.forEach(armorSet => t.append(
					<tr>
						<td>{armorSet.head}</td>
						<td>{armorSet.chest}</td>
						<td>{armorSet.arms}</td>
						<td>{armorSet.waist}</td>
						<td>{armorSet.legs}</td>
					</tr>
				))
			}))
		})
		document.body.dispatchEvent(new Event(EVENT_updateResults))
	})
}
