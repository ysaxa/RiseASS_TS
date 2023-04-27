/** @jsx h */

// ###########################
// ### ACTUAL PROJECT
// ############

/*
"jsx": "react-jsx",
"jsxImportSource": "customjsx",
*/

const CLASS_skillTable = "skillTable"
const CLASS_addSkillButton = "addSkillButton"
const CLASS_skillRow = "skillRow"
const CLASS_removeSkillButton = "removeSkillButton"
const CLASS_searchButton = "searchButton"

const EVENT_updateResults = "updateResults"

class ArmorSet {
	head: string
	chest: string
	arms: string
	waist: string
	legs: string
	constructor(head: string, chest: string, arms: string, waist: string, legs: string) {
		this.head = head
		this.chest = chest
		this.arms = arms
		this.waist = waist
		this.legs = legs
	}
}

declare namespace JSX {
	interface IntrinsicElements {
		[tagname: string]: any
	}
}

abstract class JsxComponent {
	abstract render(): HTMLElement
}

class TestComponent {
	render() {
		return <div>TEST COMPONENT</div>
	}
}

function Custom() {
	let element = document.createElement("div")
	element.textContent = "CUSTOMDIV"
	return element
}

function h(arg1: string|(()=>HTMLElement)|any, attributes: {[key: string]: string}|null, ...content: (string|HTMLElement)[]) {
	if (typeof(arg1) === 'string') {
		let element = document.createElement(arg1)
		content?.forEach(child => element.append(child))
		attributes && Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
		return element
	} else {
		if (arg1.prototype.render != undefined) {
			return new arg1().render.apply()
		}
		return arg1()
	}
}

window.onload = function(): void {
	console.log("script start")

	let results = new Results()

	document.body.append(
		div(d=>buildSearchView(d, results)),
		div(d=>buildResultsView(d, results)),
		<div>
			TESTDIV 1
			<Custom/>
			<p>TESTDIV 2</p>
			<TestComponent/>
		</div>,
	)
}

function buildSearchView(container: HTMLElement, results: Results): void {
	function addSkillButton(): void {
		let onSkillSelectChange = function(): void {
			while (lvlSelect.options.length != 0) lvlSelect.options.remove(0)
			for (let i = 0; i<=skills[skillSelect.value]; i++) lvlSelect.options.add(selectOption(`${i}`))
		}
		let lvlSelect = select([]);
		let skillSelect = select(Object.keys(skills).sort())
		skillSelect.onchange = onSkillSelectChange
		onSkillSelectChange()

		document.getElementsByClassName(CLASS_skillTable)[0].append(tableRow(CLASS_skillRow, [
			button("Remove", CLASS_removeSkillButton, "randomId", b=>b?.parentElement?.parentElement?.remove()),
			skillSelect,
			lvlSelect,
		]))
	}

	function searchButton(): void {
		let table: HTMLTableElement = document.getElementsByClassName(CLASS_skillTable)[0] as HTMLTableElement
		let rows: HTMLTableRowElement[] = [...Array(table.rows.length).keys()].map(i=>table.rows.item(i) as HTMLTableRowElement)
		let wantedSkills: {[skill:string]: number} = {}
		rows.forEach(row=>{
			let cells: HTMLTableCellElement[] = [...Array(row.cells.length).keys()].map(i=>row.cells.item(i) as HTMLTableCellElement)
			let skill = cells[1].getElementsByTagName('select')[0].value
			let value = parseInt(cells[2].getElementsByTagName('select')[0].value)
			wantedSkills[skill] = value
		})
		search(wantedSkills, results)
	}

	container.append(
		table(t=>t.className = CLASS_skillTable),
		button("Add Skill", CLASS_addSkillButton, "addskillbutton", addSkillButton),
		button("Search", CLASS_searchButton, "searchbutton", searchButton),
	)
}

function buildResultsView(container: HTMLElement, results: Results): void {
	container.append(
		div(d=>{
			document.body.addEventListener(EVENT_updateResults, e=>{
				d.innerHTML = "" // empty the div
				results.list.forEach(a=>d.append(div(ad=>ad.textContent=a.head)))
			})
			document.body.dispatchEvent(new Event(EVENT_updateResults))
		})
	)
}
