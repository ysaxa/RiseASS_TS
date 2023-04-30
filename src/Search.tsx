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

class Results {
	list: ArmorSet[] = []
}

function filterArmor(wantedSkills: string[]): ArmorPiece[] {
	function isStrictlyBetter(champion: ArmorPiece, candidate: ArmorPiece): boolean {
		// [4] isn't strictly better than [1,1]
		// [4,1] isn't strictly better than [2,2]
		// [4] is strictly better than [3] which is strictly better than [2]
		// [4,1] is strictly better than [4] and than [3,1]
		// so basically [...W] is worse than [...B] if we have those two conditions
		// - [...W].length <= [...B].length
		// - when ordered, every value in W is less than the value in B at the same index

		if (candidate.slotSizes.length > champion.slotSizes.length) return false

		let orderedChampion: number[] = [...champion.slotSizes].sort()
		let orderedCandidate: number[] = [...candidate.slotSizes].sort()
		return [...Array(orderedCandidate.length).keys()].every(i => orderedChampion[i] >= orderedCandidate[i])
	}

	// armor pieces that contribute to the wanted skills
	let directlyRelevant: ArmorPiece[] = armor.filter(a=>Object.keys(a.skills).some(sa=>wantedSkills.some(sw=>sw===sa)))

	// armor pieces with the best deco slots, even if they don't contribute to the wanted skills
	let bestDecoSlots: ArmorPiece[] = []
	;[...new Set(armor.map(a=>a.place))].forEach(place=>{
		let bestDecoSlotsLocal: ArmorPiece[] = []
		armor.filter(a=>a.place===place).forEach(candidate => {
			// obvious edgecase
			if (bestDecoSlotsLocal.length === 0) {
				bestDecoSlotsLocal = bestDecoSlotsLocal.concat(candidate)
				return
			}

			// if any of the current bests is strictly better than the candidate, forget the candidate
			if (bestDecoSlotsLocal.some(best => isStrictlyBetter(best, candidate))) return
			// otherwise, keep the candidate and remove any current best that is actually worse
			bestDecoSlotsLocal = bestDecoSlotsLocal.filter(best => !isStrictlyBetter(candidate, best))
			bestDecoSlotsLocal = bestDecoSlotsLocal.concat(candidate)
		})
		bestDecoSlotsLocal.forEach(a=>bestDecoSlots = bestDecoSlots.concat(a))
	})

	return [...directlyRelevant, ...bestDecoSlots]
}

function search(wantedSkills: { [skill: string]: number }, results: Results): void {
	let relevantArmor: ArmorPiece[] = filterArmor(Object.keys(wantedSkills))
	results.list = [
		new ArmorSet(relevantArmor[0].name, relevantArmor[1].name, relevantArmor[2].name, relevantArmor[3].name, relevantArmor[4].name),
		new ArmorSet(relevantArmor[5].name, relevantArmor[6].name, relevantArmor[7].name, relevantArmor[8].name, relevantArmor[9].name),
	]
	document.body.dispatchEvent(new Event(EVENT_updateResults));
}
