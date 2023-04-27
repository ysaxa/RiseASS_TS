class Results {
	list: ArmorSet[] = []
}

function filterArmor(wantedSkills: string[]): ArmorPiece[] {
	// TODO actually should also sometimes return armor pieces with irrelevant skills BUT with top skill slots available
	return armor.filter(a=>Object.keys(a.skills).some(sa=>wantedSkills.some(sw=>sw===sa)))
}

function search(wantedSkills: { [skill: string]: number }, results: Results): void {
	let relevantArmor: ArmorPiece[] = filterArmor(Object.keys(wantedSkills))
	results.list = [
		new ArmorSet(relevantArmor[0].name, relevantArmor[1].name, relevantArmor[2].name, relevantArmor[3].name, relevantArmor[4].name),
		new ArmorSet(relevantArmor[5].name, relevantArmor[6].name, relevantArmor[7].name, relevantArmor[8].name, relevantArmor[9].name),
	]
	document.body.dispatchEvent(new Event(EVENT_updateResults));
}
