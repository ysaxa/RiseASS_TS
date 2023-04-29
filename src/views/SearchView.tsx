/** @jsx h */

function buildSearchView(results: Results): HTMLElement {
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

	return (
		<div>
			<table class={CLASS_skillTable}></table>
			{button("Add Skill", CLASS_addSkillButton, "addskillbutton", addSkillButton)}
			{button("Search", CLASS_searchButton, "searchbutton", searchButton)}
		</div>
	)
}
