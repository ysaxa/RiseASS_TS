/** @jsx h */

const skey_searchSkillList: string = "searchSkillList"

function buildSearchView(results: Results): HTMLElement {
	function getSkillListFromHtml(table_: HTMLTableElement|null = null): {skill:string, value:number}[] {
		let table: HTMLTableElement = table_ || document.getElementsByClassName(CLASS_skillTable)[0] as HTMLTableElement
		let rows: HTMLTableRowElement[] = [...Array(table.rows.length).keys()].map(i=>table.rows.item(i) as HTMLTableRowElement)
		let ret: {skill:string, value:number}[] = []
		rows.forEach(row=>{
			let cells: HTMLTableCellElement[] = [...Array(row.cells.length).keys()].map(i=>row.cells.item(i) as HTMLTableCellElement)
			let skill = cells[1].getElementsByTagName('select')[0].value
			let value = parseInt(cells[2].getElementsByTagName('select')[0].value)
			ret = ret.concat({skill: skill, value: value})
		})
		return ret
	}

	let loadSearchSkillList: () => {skill:string, value:number}[] = () => JSON.parse(sessionStorage.getItem(skey_searchSkillList) || "[]")
	let saveSearchSkillList = function(table: HTMLTableElement|null = null) {
		sessionStorage.setItem(skey_searchSkillList, JSON.stringify(getSkillListFromHtml(table)))
	}

	function addSkillButton(table: HTMLTableElement|null = null, skill: string|null = null, value: number|null = null): void {
		let onSkillSelectChange = function(table: HTMLTableElement|null = null): void {
			while (lvlSelect.options.length != 0) lvlSelect.options.remove(0)
			for (let i = 0; i<=skills[skillSelect.value]; i++) lvlSelect.options.add(selectOption(`${i}`))
			saveSearchSkillList(table)
		}
		let lvlSelect = select([]);
		let skillSelect = select(Object.keys(skills).sort())

		onSkillSelectChange(table)

		if (skill) skillSelect.value = skill;
		if (value) lvlSelect.value = `${value}`;

		(table || document.getElementsByClassName(CLASS_skillTable)[0]).append(tableRow(CLASS_skillRow, [
			button("Remove", CLASS_removeSkillButton, "randomId", b=>b?.parentElement?.parentElement?.remove()),
			skillSelect,
			lvlSelect,
		]))

		skillSelect.onchange = () => onSkillSelectChange()
		lvlSelect.onchange = () => saveSearchSkillList()
	}

	function searchButton(): void {
		let wantedSkills: {[skill:string]: number} = {}
		getSkillListFromHtml().forEach(item => wantedSkills[item.skill] = item.value)
		search(wantedSkills, results)
	}

	let skillTable = <table class={CLASS_skillTable}></table>
	let searchSkillList = loadSearchSkillList()
	searchSkillList.forEach(item => {
		addSkillButton(skillTable, item.skill, item.value)
	})

	return (
		<div>
			{skillTable}
			{button("Add Skill", CLASS_addSkillButton, "addskillbutton", ()=>addSkillButton())}
			{button("Search", CLASS_searchButton, "searchbutton", searchButton)}
		</div>
	)
}
