function div(fn:(d:HTMLDivElement)=>void): HTMLDivElement {
	let div: HTMLDivElement = document.createElement('div')
	fn(div)
	return div
}

function button(
	text: string,
	classname: string = "",
	id: string = "",
	onclick = (b:HTMLButtonElement)=>{},
): HTMLButtonElement {
	let button: HTMLButtonElement = document.createElement('button')
	button.innerText = text
	button.id = id
	button.className = classname
	button.onclick = function() {
		onclick(button)
	}
	return button
}

function select(options: string[]): HTMLSelectElement {
	let select: HTMLSelectElement = document.createElement('select')
	options.forEach(o=>select.appendChild(selectOption(o)))
	return select
}
function selectOption(text: string, value: string = text): HTMLOptionElement {
	let option: HTMLOptionElement = document.createElement("option")
	option.value = value
	option.text = text
	return option
}

function table(fn:(d:HTMLTableElement)=>void): HTMLTableElement {
	let table = document.createElement("table")
	fn(table)
	return table
}
function tableRow(classname: string = "", elements: HTMLElement[]): HTMLTableRowElement {
	let row: HTMLTableRowElement = document.createElement("tr")
	elements.forEach(e=>{
		let cell: HTMLTableCellElement = document.createElement("td")
		cell.append(e)
		row.append(cell)
	})
	return row
}
