interface Jewel extends EquipmentPiece {
	slotSize: number,
	skills: { [skill: string]: number }
}

function addDefaultSlotSizes(o: any) {
	o.slotSizes = []
	return o
}

var jewels: Jewel[] = [
	{
		"name": "Absorber Jewel 1",
		"slotSize": 1,
		"skills": {
			"Recoil Down": 1
		}
	},
	{
		"name": "Quickload Jewel 1",
		"slotSize": 1,
		"skills": {
			"Reload Speed": 1
		}
	},
	{
		"name": "Steadfast Jewel 1",
		"slotSize": 1,
		"skills": {
			"Stun Resistance": 1
		}
	},
	{
		"name": "Sniper Jewel 1",
		"slotSize": 1,
		"skills": {
			"Steadiness": 1
		}
	},
	{
		"name": "Brace Jewel 1",
		"slotSize": 1,
		"skills": {
			"Flinch Free": 1
		}
	},
	{
		"name": "Wind Res Jewel 1",
		"slotSize": 1,
		"skills": {
			"Windproof": 1
		}
	},
	{
		"name": "Grinder Jewel 1",
		"slotSize": 1,
		"skills": {
			"Speed Sharpening": 1
		}
	},
	{
		"name": "Recovery Jewel 1",
		"slotSize": 1,
		"skills": {
			"Recovery Speed": 1
		}
	},
	{
		"name": "Sonorous Jewel 1",
		"slotSize": 1,
		"skills": {
			"Horn Maestro": 1
		}
	},
	{
		"name": "Drain Jewel 1",
		"slotSize": 1,
		"skills": {
			"Stamina Thief": 1
		}
	},
	{
		"name": "Venom Jewel 1",
		"slotSize": 1,
		"skills": {
			"Poison Attack": 1
		}
	},
	{
		"name": "Slider Jewel 1",
		"slotSize": 1,
		"skills": {
			"Affinity Sliding": 1
		}
	},
	{
		"name": "Bomber Jewel 1",
		"slotSize": 1,
		"skills": {
			"Bombardier": 1
		}
	},
	{
		"name": "Blaze Jewel 1",
		"slotSize": 1,
		"skills": {
			"Fire Attack": 1
		}
	},
	{
		"name": "Stream Jewel 1",
		"slotSize": 1,
		"skills": {
			"Water Attack": 1
		}
	},
	{
		"name": "Bolt Jewel 1",
		"slotSize": 1,
		"skills": {
			"Thunder Attack": 1
		}
	},
	{
		"name": "Frost Jewel 1",
		"slotSize": 1,
		"skills": {
			"Ice Attack": 1
		}
	},
	{
		"name": "Dragon Jewel 1",
		"slotSize": 1,
		"skills": {
			"Dragon Attack": 1
		}
	},
	{
		"name": "Defense Jewel 1",
		"slotSize": 1,
		"skills": {
			"Defense Boost": 1
		}
	},
	{
		"name": "Carver Jewel 1",
		"slotSize": 1,
		"skills": {
			"Carving Pro": 1
		}
	},
	{
		"name": "Hungerless Jewel 1",
		"slotSize": 1,
		"skills": {
			"Hunger Resistance": 1
		}
	},
	{
		"name": "Satiated Jewel 1",
		"slotSize": 1,
		"skills": {
			"Free Meal": 1
		}
	},
	{
		"name": "Muck Jewel 1",
		"slotSize": 1,
		"skills": {
			"Muck Resistance": 1
		}
	},
	{
		"name": "Diversion Jewel 1",
		"slotSize": 1,
		"skills": {
			"Diversion": 1
		}
	},
	{
		"name": "Dive Jewel 1",
		"slotSize": 1,
		"skills": {
			"Leap of Faith": 1
		}
	},
	{
		"name": "Geology Jewel 1",
		"slotSize": 1,
		"skills": {
			"Geologist": 1
		}
	},
	{
		"name": "Botany Jewel 1",
		"slotSize": 1,
		"skills": {
			"Botanist": 1
		}
	},
	{
		"name": "Antiblast Jewel 1",
		"slotSize": 1,
		"skills": {
			"Blast Resistance": 1
		}
	},
	{
		"name": "Pep Jewel 1",
		"slotSize": 1,
		"skills": {
			"Sleep Resistance": 1
		}
	},
	{
		"name": "Antipara Jewel 1",
		"slotSize": 1,
		"skills": {
			"Paralysis Resistance": 1
		}
	},
	{
		"name": "Antidote Jewel 1",
		"slotSize": 1,
		"skills": {
			"Poison Resistance": 1
		}
	},
	{
		"name": "Fire Res Jewel 1",
		"slotSize": 1,
		"skills": {
			"Fire Resistance": 1
		}
	},
	{
		"name": "Water Res Jewel 1",
		"slotSize": 1,
		"skills": {
			"Water Resistance": 1
		}
	},
	{
		"name": "Thunder Res Jewel 1",
		"slotSize": 1,
		"skills": {
			"Thunder Resistance": 1
		}
	},
	{
		"name": "Ice Res Jewel 1",
		"slotSize": 1,
		"skills": {
			"Ice Resistance": 1
		}
	},
	{
		"name": "Dragon Res Jewel 1",
		"slotSize": 1,
		"skills": {
			"Dragon Resistance": 1
		}
	},
	{
		"name": "Precise Jewel 2",
		"slotSize": 2,
		"skills": {
			"Ballistics": 1
		}
	},
	{
		"name": "Crit Element Jewel 2",
		"slotSize": 2,
		"skills": {
			"Critical Element": 1
		}
	},
	{
		"name": "Artillery Jewel 2",
		"slotSize": 2,
		"skills": {
			"Artillery": 1
		}
	},
	{
		"name": "Sprinter Jewel 2",
		"slotSize": 2,
		"skills": {
			"Marathon Runner": 1
		}
	},
	{
		"name": "Charger Jewel 2",
		"slotSize": 2,
		"skills": {
			"Focus": 1
		}
	},
	{
		"name": "Mind's Eye Jewel 2",
		"slotSize": 2,
		"skills": {
			"Mind's Eye": 1
		}
	},
	{
		"name": "Potential Jewel 2",
		"slotSize": 2,
		"skills": {
			"Heroics": 1
		}
	},
	{
		"name": "Trueshot Jewel 2",
		"slotSize": 2,
		"skills": {
			"Special Ammo Boost": 1
		}
	},
	{
		"name": "Magazine Jewel 2",
		"slotSize": 2,
		"skills": {
			"Load Shells": 1
		}
	},
	{
		"name": "Shield Jewel 2",
		"slotSize": 2,
		"skills": {
			"Guard Up": 1
		}
	},
	{
		"name": "Ironwall Jewel 2",
		"slotSize": 2,
		"skills": {
			"Guard": 1
		}
	},
	{
		"name": "Refresh Jewel 2",
		"slotSize": 2,
		"skills": {
			"Stamina Surge": 1
		}
	},
	{
		"name": "Enhancer Jewel 2",
		"slotSize": 2,
		"skills": {
			"Power Prolonger": 1
		}
	},
	{
		"name": "Mighty Jewel 2",
		"slotSize": 2,
		"skills": {
			"Maximum Might": 1
		}
	},
	{
		"name": "Attack Jewel 2",
		"slotSize": 2,
		"skills": {
			"Attack Boost": 1
		}
	},
	{
		"name": "Expert Jewel 2",
		"slotSize": 2,
		"skills": {
			"Critical Eye": 1
		}
	},
	{
		"name": "Quickswitch Jewel 2",
		"slotSize": 2,
		"skills": {
			"Rapid Morph": 1
		}
	},
	{
		"name": "Blunt Jewel 2",
		"slotSize": 2,
		"skills": {
			"Bludgeoner": 1
		}
	},
	{
		"name": "Footing Jewel 2",
		"slotSize": 2,
		"skills": {
			"Tremor Resistance": 1
		}
	},
	{
		"name": "Counter Jewel 2",
		"slotSize": 2,
		"skills": {
			"Counterstrike": 1
		}
	},
	{
		"name": "Bubble Jewel 2",
		"slotSize": 2,
		"skills": {
			"Bubbly Dance": 1
		}
	},
	{
		"name": "Gambit Jewel 2",
		"slotSize": 2,
		"skills": {
			"Punishing Draw": 1
		}
	},
	{
		"name": "Jumping Jewel 2",
		"slotSize": 2,
		"skills": {
			"Evade Extender": 1
		}
	},
	{
		"name": "Evasion Jewel 2",
		"slotSize": 2,
		"skills": {
			"Evade Window": 1
		}
	},
	{
		"name": "Sheath Jewel 2",
		"slotSize": 2,
		"skills": {
			"Quick Sheathe": 1
		}
	},
	{
		"name": "KO Jewel 2",
		"slotSize": 2,
		"skills": {
			"Slugger": 1
		}
	},
	{
		"name": "Friendship Jewel 2",
		"slotSize": 2,
		"skills": {
			"Wide-Range": 1
		}
	},
	{
		"name": "Destroyer Jewel 2",
		"slotSize": 2,
		"skills": {
			"Partbreaker": 1
		}
	},
	{
		"name": "Resistor Jewel 2",
		"slotSize": 2,
		"skills": {
			"Blight Resistance": 1
		}
	},
	{
		"name": "Gobbler Jewel 2",
		"slotSize": 2,
		"skills": {
			"Speed Eating": 1
		}
	},
	{
		"name": "Protection Jewel 2",
		"slotSize": 2,
		"skills": {
			"Divine Blessing": 1
		}
	},
	{
		"name": "Wall Run Jewel 2",
		"slotSize": 2,
		"skills": {
			"Wall Runner": 1
		}
	},
	{
		"name": "Wirebug Jewel 2",
		"slotSize": 2,
		"skills": {
			"Wirebug Whisperer": 1
		}
	},
	{
		"name": "Enduring Jewel 2",
		"slotSize": 2,
		"skills": {
			"Item Prolonger": 1
		}
	},
	{
		"name": "Medicine Jewel 2",
		"slotSize": 2,
		"skills": {
			"Recovery Up": 1
		}
	},
	{
		"name": "Physique Jewel 2",
		"slotSize": 2,
		"skills": {
			"Constitution": 1
		}
	},
	{
		"name": "Rodeo Jewel 2",
		"slotSize": 2,
		"skills": {
			"Master Mounter": 1
		}
	},
	{
		"name": "Fortitude Jewel 2",
		"slotSize": 2,
		"skills": {
			"Fortify": 1
		}
	},
	{
		"name": "Capacity Jewel 3",
		"slotSize": 3,
		"skills": {
			"Ammo Up": 1
		}
	},
	{
		"name": "Guardian Jewel 3",
		"slotSize": 3,
		"skills": {
			"Offensive Guard": 1
		}
	},
	{
		"name": "Fungiform Jewel 3",
		"slotSize": 3,
		"skills": {
			"Mushroomancer": 1
		}
	},
	{
		"name": "Draw Jewel 3",
		"slotSize": 3,
		"skills": {
			"Critical Draw": 1
		}
	},
	{
		"name": "Earplug Jewel 3",
		"slotSize": 3,
		"skills": {
			"Earplugs": 1
		}
	},
	{
		"name": "Challenger Jewel 2",
		"slotSize": 2,
		"skills": {
			"Agitator": 1
		}
	},
	{
		"name": "Flawless Jewel 2",
		"slotSize": 2,
		"skills": {
			"Peak Performance": 1
		}
	},
	{
		"name": "Furor Jewel 2",
		"slotSize": 2,
		"skills": {
			"Resentment": 1
		}
	},
	{
		"name": "Crisis Jewel 2",
		"slotSize": 2,
		"skills": {
			"Resuscitate": 1
		}
	},
	{
		"name": "Critical Jewel 2",
		"slotSize": 2,
		"skills": {
			"Critical Boost": 1
		}
	},
	{
		"name": "Tenderizer Jewel 2",
		"slotSize": 2,
		"skills": {
			"Weakness Exploit": 1
		}
	},
	{
		"name": "Throttle Jewel 2",
		"slotSize": 2,
		"skills": {
			"Latent Power": 1
		}
	},
	{
		"name": "Mastery Jewel 2",
		"slotSize": 2,
		"skills": {
			"Master's Touch": 1
		}
	},
	{
		"name": "Paralyzer Jewel 2",
		"slotSize": 2,
		"skills": {
			"Paralysis Attack": 1
		}
	},
	{
		"name": "Sleep Jewel 2",
		"slotSize": 2,
		"skills": {
			"Sleep Attack": 1
		}
	},
	{
		"name": "Blast Jewel 2",
		"slotSize": 2,
		"skills": {
			"Blast Attack": 1
		}
	},
	{
		"name": "Handicraft Jewel 3",
		"slotSize": 3,
		"skills": {
			"Handicraft": 1
		}
	},
	{
		"name": "Razor Jewel 2",
		"slotSize": 2,
		"skills": {
			"Razor Sharp": 1
		}
	},
	{
		"name": "Thrift Jewel 2",
		"slotSize": 2,
		"skills": {
			"Spare Shot": 1
		}
	},
	{
		"name": "Sharp Jewel 2",
		"slotSize": 2,
		"skills": {
			"Protective Polish": 1
		}
	},
	{
		"name": "Forceshot Jewel 3",
		"slotSize": 3,
		"skills": {
			"Normal/Rapid Up": 1
		}
	},
	{
		"name": "Pierce Jewel 3",
		"slotSize": 3,
		"skills": {
			"Pierce Up": 1
		}
	},
	{
		"name": "Spread Jewel 3",
		"slotSize": 3,
		"skills": {
			"Spread Up": 1
		}
	},
	{
		"name": "Salvo Jewel 3",
		"slotSize": 3,
		"skills": {
			"Rapid Fire Up": 1
		}
	},
	{
		"name": "Fate Jewel 3",
		"slotSize": 3,
		"skills": {
			"Good Luck": 1
		}
	},
	{
		"name": "Leap Jewel 3",
		"slotSize": 3,
		"skills": {
			"Jump Master": 1
		}
	},
	{
		"name": "Hellfire Jewel 3",
		"slotSize": 3,
		"skills": {
			"Hellfire Cloak": 1
		}
	},
	{
		"name": "Hard Fire Res Jewel 4",
		"slotSize": 4,
		"skills": {
			"Fire Resistance": 3
		}
	},
	{
		"name": "Hard Water Res Jewel 4",
		"slotSize": 4,
		"skills": {
			"Water Resistance": 3
		}
	},
	{
		"name": "Hard Ice Res Jewel 4",
		"slotSize": 4,
		"skills": {
			"Ice Resistance": 3
		}
	},
	{
		"name": "Hard Thunder Res Jewel 4",
		"slotSize": 4,
		"skills": {
			"Thunder Resistance": 3
		}
	},
	{
		"name": "Hard Dragon Res Jewel 4",
		"slotSize": 4,
		"skills": {
			"Dragon Resistance": 3
		}
	},
	{
		"name": "Hard Antidote Jewel 4",
		"slotSize": 4,
		"skills": {
			"Poison Resistance": 3
		}
	},
	{
		"name": "Hard Antipara Jewel 4",
		"slotSize": 4,
		"skills": {
			"Paralysis Resistance": 3
		}
	},
	{
		"name": "Hard Pep Jewel 4",
		"slotSize": 4,
		"skills": {
			"Sleep Resistance": 3
		}
	},
	{
		"name": "Hard Antiblast Jewel 4",
		"slotSize": 4,
		"skills": {
			"Blast Resistance": 3
		}
	},
	{
		"name": "Hard Botany Jewel 4",
		"slotSize": 4,
		"skills": {
			"Botanist": 3
		}
	},
	{
		"name": "Hard Geology Jewel 4",
		"slotSize": 4,
		"skills": {
			"Geologist": 3
		}
	},
	{
		"name": "Hard Satiated Jewel 4",
		"slotSize": 4,
		"skills": {
			"Free Meal": 3
		}
	},
	{
		"name": "Hard Drain Jewel 4",
		"slotSize": 4,
		"skills": {
			"Stamina Thief": 3
		}
	},
	{
		"name": "Hard Enduring Jewel 4",
		"slotSize": 4,
		"skills": {
			"Item Prolonger": 3
		}
	},
	{
		"name": "Hard Hungerless Jewel 4",
		"slotSize": 4,
		"skills": {
			"Hunger Resistance": 3
		}
	},
	{
		"name": "Blaze Jewel+ 2",
		"slotSize": 2,
		"skills": {
			"Fire Attack": 2
		}
	},
	{
		"name": "Hard Blaze Jewel 3",
		"slotSize": 3,
		"skills": {
			"Fire Attack": 3
		}
	},
	{
		"name": "Stream Jewel+ 2",
		"slotSize": 2,
		"skills": {
			"Water Attack": 2
		}
	},
	{
		"name": "Hard Stream Jewel 3",
		"slotSize": 3,
		"skills": {
			"Water Attack": 3
		}
	},
	{
		"name": "Frost Jewel+ 2",
		"slotSize": 2,
		"skills": {
			"Ice Attack": 2
		}
	},
	{
		"name": "Hard Frost Jewel 3",
		"slotSize": 3,
		"skills": {
			"Ice Attack": 3
		}
	},
	{
		"name": "Bolt Jewel+ 2",
		"slotSize": 2,
		"skills": {
			"Thunder Attack": 2
		}
	},
	{
		"name": "Hard Bolt Jewel 3",
		"slotSize": 3,
		"skills": {
			"Thunder Attack": 3
		}
	},
	{
		"name": "Dragon Jewel+ 2",
		"slotSize": 2,
		"skills": {
			"Dragon Attack": 2
		}
	},
	{
		"name": "Hard Dragon Jewel 3",
		"slotSize": 3,
		"skills": {
			"Dragon Attack": 3
		}
	},
	{
		"name": "Defense Jewel+ 2",
		"slotSize": 2,
		"skills": {
			"Defense Boost": 2
		}
	},
	{
		"name": "Hard Defense Jewel 3",
		"slotSize": 3,
		"skills": {
			"Defense Boost": 3
		}
	},
	{
		"name": "Hard Defense Jewel++ 4",
		"slotSize": 4,
		"skills": {
			"Defense Boost": 5
		}
	},
	{
		"name": "Hard Bomber Jewel 4",
		"slotSize": 4,
		"skills": {
			"Bombardier": 3
		}
	},
	{
		"name": "Hard Grinder Jewel 4",
		"slotSize": 4,
		"skills": {
			"Speed Sharpening": 3
		}
	},
	{
		"name": "Medicine Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Recovery Up": 2
		}
	},
	{
		"name": "Physique Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Constitution": 2
		}
	},
	{
		"name": "Wirebug Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Wirebug Whisperer": 2
		}
	},
	{
		"name": "Hard Wall Run Jewel 4",
		"slotSize": 4,
		"skills": {
			"Wall Runner": 3
		}
	},
	{
		"name": "Hard Venom Jewel 4",
		"slotSize": 4,
		"skills": {
			"Poison Attack": 3
		}
	},
	{
		"name": "Hard Recovery Jewel 4",
		"slotSize": 4,
		"skills": {
			"Recovery Speed": 3
		}
	},
	{
		"name": "Protection Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Divine Blessing": 2
		}
	},
	{
		"name": "Gobbler Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Speed Eating": 2
		}
	},
	{
		"name": "Resistor Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Blight Resistance": 2
		}
	},
	{
		"name": "Destroyer Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Partbreaker": 2
		}
	},
	{
		"name": "Hard Friendship Jewel 3",
		"slotSize": 3,
		"skills": {
			"Wide-Range": 3
		}
	},
	{
		"name": "Hard Friendship Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Wide-Range": 4
		}
	},
	{
		"name": "Evasion Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Evade Window": 2
		}
	},
	{
		"name": "Sheath Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Quick Sheathe": 2
		}
	},
	{
		"name": "Hard Sniper Jewel 4",
		"slotSize": 4,
		"skills": {
			"Steadiness": 3
		}
	},
	{
		"name": "Gambit Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Punishing Draw": 2
		}
	},
	{
		"name": "Hard Brace Jewel 4",
		"slotSize": 4,
		"skills": {
			"Flinch Free": 3
		}
	},
	{
		"name": "Bubble Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Bubbly Dance": 2
		}
	},
	{
		"name": "KO Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Slugger": 2
		}
	},
	{
		"name": "Jumping Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Evade Extender": 2
		}
	},
	{
		"name": "Hard Wind Res Jewel 4",
		"slotSize": 4,
		"skills": {
			"Windproof": 3
		}
	},
	{
		"name": "Counter Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Counterstrike": 2
		}
	},
	{
		"name": "Refresh Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Stamina Surge": 2
		}
	},
	{
		"name": "Ironwall Jewel+ 3",
		"slotSize": 3,
		"skills": {
			"Guard": 2
		}
	},
	{
		"name": "Shield Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Guard Up": 2
		}
	},
	{
		"name": "Precise Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Ballistics": 2
		}
	},
	{
		"name": "Crit Element Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Critical Element": 2
		}
	},
	{
		"name": "Charger Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Focus": 2
		}
	},
	{
		"name": "Sprinter Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Marathon Runner": 2
		}
	},
	{
		"name": "Draw Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Critical Draw": 2
		}
	},
	{
		"name": "Fungiform Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Mushroomancer": 2
		}
	},
	{
		"name": "Hard Steadfast Jewel 4",
		"slotSize": 4,
		"skills": {
			"Stun Resistance": 3
		}
	},
	{
		"name": "Razor Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Razor Sharp": 2
		}
	},
	{
		"name": "Mind's Eye Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Mind's Eye": 2
		}
	},
	{
		"name": "Quickswitch Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Rapid Morph": 2
		}
	},
	{
		"name": "Artillery Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Artillery": 2
		}
	},
	{
		"name": "Earplug Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Earplugs": 2
		}
	},
	{
		"name": "Enhancer Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Power Prolonger": 2
		}
	},
	{
		"name": "Trueshot Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Special Ammo Boost": 2
		}
	},
	{
		"name": "Magazine Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Load Shells": 2
		}
	},
	{
		"name": "Footing Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Tremor Resistance": 2
		}
	},
	{
		"name": "Crisis Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Resuscitate": 2
		}
	},
	{
		"name": "Sharp Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Protective Polish": 2
		}
	},
	{
		"name": "Hellfire Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Hellfire Cloak": 2
		}
	},
	{
		"name": "Fate Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Good Luck": 2
		}
	},
	{
		"name": "Mastery Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Master's Touch": 2
		}
	},
	{
		"name": "Foil Jewel 3",
		"slotSize": 3,
		"skills": {
			"Tune-Up": 1
		}
	},
	{
		"name": "Polisher Pro Jewel 3",
		"slotSize": 3,
		"skills": {
			"Grinder (S)": 1
		}
	},
	{
		"name": "Spiribird's Call Jewel 1",
		"slotSize": 1,
		"skills": {
			"Spiribird's Call": 1
		}
	},
	{
		"name": "Charge Jewel 2",
		"slotSize": 2,
		"skills": {
			"Charge Master": 1
		}
	},
	{
		"name": "Phoenix Jewel 2",
		"slotSize": 2,
		"skills": {
			"Coalescence": 1
		}
	},
	{
		"name": "Bladescale Jewel 2",
		"slotSize": 2,
		"skills": {
			"Bladescale Hone": 1
		}
	},
	{
		"name": "Flywall Jewel 1",
		"slotSize": 1,
		"skills": {
			"Wall Runner (Boost)": 1
		}
	},
	{
		"name": "Redirection Jewel 3",
		"slotSize": 3,
		"skills": {
			"Redirection": 1
		}
	},
	{
		"name": "Breath Jewel 3",
		"slotSize": 3,
		"skills": {
			"Quick Breath": 1
		}
	},
	{
		"name": "Mighty Bow Jewel 4",
		"slotSize": 4,
		"skills": {
			"Bow Charge Plus": 1
		}
	},
	{
		"name": "Sniper Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Steadiness": 2
		}
	},
	{
		"name": "Cornerstone Jewel 1",
		"slotSize": 1,
		"skills": {
			"Defiance": 1
		}
	},
	{
		"name": "Chain Jewel 2",
		"slotSize": 2,
		"skills": {
			"Burst": 1
		}
	},
	{
		"name": "Phoenix Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Coalescence": 2
		}
	},
	{
		"name": "Haze Jewel 1",
		"slotSize": 1,
		"skills": {
			"Chameleos Blessing": 1
		}
	},
	{
		"name": "Paralyzer Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Paralysis Attack": 2
		}
	},
	{
		"name": "Sleep Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Sleep Attack": 2
		}
	},
	{
		"name": "Blast Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Blast Attack": 2
		}
	},
	{
		"name": "Foray Jewel 2",
		"slotSize": 2,
		"skills": {
			"Foray": 1
		}
	},
	{
		"name": "Handicraft Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Handicraft": 2
		}
	},
	{
		"name": "Forceshot Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Normal/Rapid Up": 2
		}
	},
	{
		"name": "Pierce Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Pierce Up": 2
		}
	},
	{
		"name": "Spread Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Spread Up": 2
		}
	},
	{
		"name": "Mighty Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Maximum Might": 2
		}
	},
	{
		"name": "Hard Blaze Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Fire Attack": 4
		}
	},
	{
		"name": "Hard Stream Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Water Attack": 4
		}
	},
	{
		"name": "Hard Bolt Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Thunder Attack": 4
		}
	},
	{
		"name": "Hard Frost Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Ice Attack": 4
		}
	},
	{
		"name": "Hard Dragon Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Dragon Attack": 4
		}
	},
	{
		"name": "Redirection Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Redirection": 2
		}
	},
	{
		"name": "Flamescale Jewel 1",
		"slotSize": 1,
		"skills": {
			"Teostra Blessing": 1
		}
	},
	{
		"name": "Throttle Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Latent Power": 2
		}
	},
	{
		"name": "Ironshell Jewel 1",
		"slotSize": 1,
		"skills": {
			"Kushala Blessing": 1
		}
	},
	{
		"name": "Flawless Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Peak Performance": 2
		}
	},
	{
		"name": "Guardian Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Offensive Guard": 2
		}
	},
	{
		"name": "Element Exploit Jewel 2",
		"slotSize": 2,
		"skills": {
			"Element Exploit": 1
		}
	},
	{
		"name": "Counterattack Jewel 2",
		"slotSize": 2,
		"skills": {
			"Adrenaline Rush": 1
		}
	},
	{
		"name": "Backstab Jewel 2",
		"slotSize": 2,
		"skills": {
			"Sneak Attack": 1
		}
	},
	{
		"name": "Charge Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Charge Master": 2
		}
	},
	{
		"name": "Foil Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Tune-Up": 2
		}
	},
	{
		"name": "Bloodening Jewel 3",
		"slotSize": 3,
		"skills": {
			"Blood Rite": 1
		}
	},
	{
		"name": "Polisher Pro Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Grinder (S)": 2
		}
	},
	{
		"name": "Embolden Jewel 2",
		"slotSize": 2,
		"skills": {
			"Embolden": 1
		}
	},
	{
		"name": "Furor Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Resentment": 2
		}
	},
	{
		"name": "Dragon Spirit Jewel 4",
		"slotSize": 4,
		"skills": {
			"Dragonheart": 1
		}
	},
	{
		"name": "Element Exploit Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Element Exploit": 2
		}
	},
	{
		"name": "Intrepid Jewel 1",
		"slotSize": 1,
		"skills": {
			"Intrepid Heart": 1
		}
	},
	{
		"name": "Hard Cornerstone Jewel 4",
		"slotSize": 4,
		"skills": {
			"Defiance": 3
		}
	},
	{
		"name": "Backstab Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Sneak Attack": 2
		}
	},
	{
		"name": "Foray Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Foray": 2
		}
	},
	{
		"name": "Counterattack Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Adrenaline Rush": 2
		}
	},
	{
		"name": "Potential Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Heroics": 2
		}
	},
	{
		"name": "Trigger Jewel 3",
		"slotSize": 3,
		"skills": {
			"Status Trigger": 1
		}
	},
	{
		"name": "Chain Jewel+ 4",
		"slotSize": 4,
		"skills": {
			"Burst": 2
		}
	},
	{
		"name": "Jewel 1",
		"slotSize": 1,
		"skills": {
			"LV1 Slot Skill": 1
		}
	},
	{
		"name": "Jewel 2",
		"slotSize": 2,
		"skills": {
			"LV2 Slot Skill": 1
		}
	},
	{
		"name": "Jewel 3",
		"slotSize": 3,
		"skills": {
			"LV3 Slot Skill": 1
		}
	},
	{
		"name": "Jewel 4",
		"slotSize": 4,
		"skills": {
			"LV4 Slot Skill": 1
		}
	}
].map(o => addDefaultSlotSizes(o))
