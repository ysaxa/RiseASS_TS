declare namespace JSX {
	interface IntrinsicElements {
		[tagname: string]: any
	}
}

abstract class JsxComponent {
	attributes: {[key: string]: string}|null
	constructor(attributes: {[key: string]: string}|null) {
		this.attributes = attributes
	}

	abstract render(): HTMLElement
}

function h<K extends keyof HTMLElementTagNameMap>(arg1: K|(new (attributes:{[key: string]: string}|null)=>JsxComponent), attributes: {[key: string]: string}|null, ...content: (string|HTMLElement)[]) {
	if (typeof(arg1) === 'string') {
		let element = document.createElement(arg1)
		content?.forEach(child => element.append(child))
		attributes && Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
		return element
	} else {
		return new arg1(attributes).render()
	}
}

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
