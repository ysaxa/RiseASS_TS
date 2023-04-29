/** @jsx h */

const CLASS_skillTable = "skillTable"
const CLASS_addSkillButton = "addSkillButton"
const CLASS_skillRow = "skillRow"
const CLASS_removeSkillButton = "removeSkillButton"
const CLASS_searchButton = "searchButton"

const EVENT_updateResults = "updateResults"

window.onload = function(): void {
	console.log("script start")

	let results = new Results()

	function getButton(text: string, onclick: ()=>void) {
		let elem: HTMLButtonElement = <button>{text}</button>
		elem.onclick = onclick
		return elem
	}

	document.body.append(
		<div>
			<div class="tabbar">
				{getButton("Armor set", ()=>console.log(1))}
				{getButton("Search results", ()=>console.log(2))}
				{getButton("Search", ()=>console.log(3))}
			</div>
			<div class="tabview">
				{buildSearchView(results)}
				{buildResultsView(results)}
			</div>
		</div>
	)
}
