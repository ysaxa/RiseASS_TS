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

function range(n: number) {
	return [...Array(n).keys()]
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
		return range(orderedCandidate.length).every(i => orderedChampion[i] >= orderedCandidate[i])
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

function filterDecos(wantedSkills: string[]): Jewel[] {
	let relevantJewels = jewels.filter(j => Object.keys(j.skills).some(jewelSkill => wantedSkills.includes(jewelSkill)))
	// TODO can probably filter more
	return relevantJewels
}

function doSearch(wantedSkills: skillLevels): ArmorSet[] {
	let relevantEquipment: EquipmentPiece[] = filterArmor(Object.keys(wantedSkills))

	let equipmentPerPlace: EquipmentPiece[][] = [...new Set(armor.map(a=>a.place))].map(place => relevantEquipment.filter(a=>a.place === place))

	// add dummy charm
	// TODO add real charms according to some configuration somewhere
	equipmentPerPlace = [...equipmentPerPlace, [{
		name: "dummy charm",
		place: 5,
		slotSizes: [],
		skills: {},
	} as EquipmentPiece]]

	console.log(`relevant piecesper place: ${equipmentPerPlace.map(p=>`${p.length}`).join(', ')}`)

	let relevantDecos = filterDecos(Object.keys(wantedSkills))
	console.log(relevantDecos.map(j => j.name).join(', '))
	let decoArray = relevantDecos.map(j => range(Math.floor(Math.max(...Object.keys(j.skills).map(skillName => skills[skillName]/j.skills[skillName])))).map(i=>j)).flat()
	console.log(decoArray.length)
	console.log(decoArray.map(j => j.name).join(', '))

	let localResults: ArmorSet[] = []

	let maxResults = 100

	equipmentPerPlace[0]?.forEach(equipment=>{ // head
		if (localResults.length > maxResults) return
		let pieces0 = [equipment]
		equipmentPerPlace[1]?.forEach(equipment=>{ // chest
			if (localResults.length > maxResults) return
			let pieces1 = pieces0.concat(equipment)
			equipmentPerPlace[2]?.forEach(equipment=>{ // arms
				if (localResults.length > maxResults) return
				let pieces2 = pieces1.concat(equipment)
				equipmentPerPlace[3]?.forEach(equipment=>{ // waist
					if (localResults.length > maxResults) return
					let pieces3 = pieces2.concat(equipment)
					equipmentPerPlace[4]?.forEach(equipment=>{ // legs
						if (localResults.length > maxResults) return
						let pieces4 = pieces3.concat(equipment)
						equipmentPerPlace[5]?.forEach(equipment=>{ // charms
							if (localResults.length > maxResults) return
							let pieces5 = pieces4.concat(equipment)
							let pieces: EquipmentPiece[] = [...pieces5]

							// TODO decos
							let allSlots: number[] = pieces.map(e=>e.slotSizes).flat()

							if (Object.keys(wantedSkills).some(skill => wantedSkills[skill] > pieces.map(piece=>piece.skills[skill] || 0).reduce((a,b)=>a+b, 0))) return
							localResults = localResults.concat(new ArmorSet(
								(pieces4[0] as ArmorPiece).name,
								(pieces4[1] as ArmorPiece).name,
								(pieces4[2] as ArmorPiece).name,
								(pieces4[3] as ArmorPiece).name,
								(pieces4[4] as ArmorPiece).name,
							))
						})
					})
				})
			})
		})
	})

	return localResults
}

function search(wantedSkills: skillLevels, results: Results): void {
	results.list = doSearch(wantedSkills)
	document.body.dispatchEvent(new Event(EVENT_updateResults));
}
