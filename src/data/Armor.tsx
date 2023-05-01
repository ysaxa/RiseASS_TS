interface ArmorPiece extends EquipmentPiece {
	maxDef: number
	elemRes: number[]
}

var armor: ArmorPiece[] = [
	{
		"name": "Shadow Shades",
		"place": 0,
		"maxDef": 76,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 1,
			"Good Luck": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Cunning Specs",
		"place": 0,
		"maxDef": 80,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Geologist": 2
		},
		"elemRes": [
			2,
			2,
			2,
			2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Kamura Head Scarf",
		"place": 0,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 1
		},
		"elemRes": [
			1,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Headgear",
		"place": 0,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Hunger Resistance": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Headgear",
		"place": 0,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Botanist": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Helm",
		"place": 0,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Ice Attack": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Fortify": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Helm",
		"place": 0,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Attack": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Helm",
		"place": 0,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Partbreaker": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chaoshroom",
		"place": 0,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Mushroomancer": 1
		},
		"elemRes": [
			2,
			-2,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Vizor",
		"place": 0,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Resistance": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Vertex",
		"place": 0,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Attack": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Vertex",
		"place": 0,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Attack": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Hat",
		"place": 0,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Resistance": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Slagtoth Hood",
		"place": 0,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Free Meal": 1
		},
		"elemRes": [
			-2,
			2,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Helm",
		"place": 0,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Pierce Up": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Hat",
		"place": 0,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recoil Down": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Maximum Might": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Extender": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Fire Attack": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Attack": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Up": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Windproof": 1
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Hat",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Paralysis Resistance": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Brain",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Dragon Resistance": 2
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Vizor",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Blast Resistance": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Helm",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Ammo Up": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Gargwa Mask",
		"place": 0,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Leap of Faith": 1
		},
		"elemRes": [
			-3,
			-2,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bullfango Mask",
		"place": 0,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Bludgeoner": 1
		},
		"elemRes": [
			0,
			4,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Headgear",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Windproof": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Mask",
		"place": 0,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Affinity Sliding": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Paralysis Attack": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1,
			"Stun Resistance": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Special Ammo Boost": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Basarios Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Defense Boost": 2
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Sleep Attack": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rathian Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Blight Resistance": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Barioth Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Draw": 1
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Kadachi Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Jump Master": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Hood",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Sleep Resistance": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Vertex",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Element": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Vertex",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Element": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Hat",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Mask (V)",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Free Meal": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Hair-tie",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Free Meal": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Mask (H)",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hair-tie",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Lobos",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Botanist": 2
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Resentment": 1,
			"Counterstrike": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Focus": 1,
			"Slugger": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Helm",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Attack": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Fire Attack": 1
		},
		"elemRes": [
			4,
			0,
			-2,
			0,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Skull Visage",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Fortify": 1
		},
		"elemRes": [
			-3,
			-3,
			-3,
			-3,
			4
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Agitator": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Earplugs": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1,
			"Stamina Surge": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kamura Head Scarf S",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 1,
			"Resuscitate": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Headgear S",
		"place": 0,
		"maxDef": 68,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Geologist": 1,
			"Hunger Resistance": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Headgear S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Botanist": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Helm S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Helm S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Water Attack": 1,
			"Protective Polish": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Helm S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Stamina Thief": 1,
			"Partbreaker": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Vertex S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Poison Attack": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Vertex S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Poison Attack": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Hat S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Poison Attack": 1,
			"Recoil Down": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Helm S",
		"place": 0,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Helm S",
		"place": 0,
		"maxDef": 74,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Ice Attack": 2
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Helm S",
		"place": 0,
		"maxDef": 76,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Maximum Might": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Helm S",
		"place": 0,
		"maxDef": 76,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Rapid Fire Up": 1,
			"Evade Extender": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Helm S",
		"place": 0,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Fortify": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Helm S",
		"place": 0,
		"maxDef": 74,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Ice Attack": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Helm S",
		"place": 0,
		"maxDef": 76,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Fire Attack": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Helm S",
		"place": 0,
		"maxDef": 76,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Focus": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Helm S",
		"place": 0,
		"maxDef": 78,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Helm S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Windproof": 1
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chaos Archbun",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Mushroomancer": 1
		},
		"elemRes": [
			2,
			-2,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Vizor S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Poison Resistance": 2
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Slagtoth Hood S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Free Meal": 1,
			"Diversion": 1
		},
		"elemRes": [
			-2,
			2,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Helm S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Pierce Up": 2,
			"Stun Resistance": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bullfango Mask S",
		"place": 0,
		"maxDef": 66,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Bludgeoner": 2
		},
		"elemRes": [
			0,
			4,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Mask S",
		"place": 0,
		"maxDef": 66,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Affinity Sliding": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Helm S",
		"place": 0,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Paralysis Attack": 2,
			"Bludgeoner": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Helm S",
		"place": 0,
		"maxDef": 78,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Marathon Runner": 1,
			"Peak Performance": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Helm S",
		"place": 0,
		"maxDef": 80,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Defense Boost": 1,
			"Offensive Guard": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Helm S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1,
			"Wide-Range": 1,
			"Stun Resistance": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Helm S",
		"place": 0,
		"maxDef": 80,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Special Ammo Boost": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Helm",
		"place": 0,
		"maxDef": 78,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Offensive Guard": 1,
			"Evade Extender": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Helm S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Load Shells": 1,
			"Defense Boost": 2
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Rathian Helm S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Blight Resistance": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Skull Visage S",
		"place": 0,
		"maxDef": 70,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Fortify": 1
		},
		"elemRes": [
			-3,
			-3,
			-3,
			-3,
			4
		]
	} as ArmorPiece,
	{
		"name": "Dober Helm",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Attack Boost": 1,
			"Heroics": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Hat S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Ballistics": 2
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Hat S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Paralysis Resistance": 2
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Brain S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Protective Polish": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Vizor S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Blast Resistance": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Helm S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Ammo Up": 2
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Hood S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Sleep Resistance": 2
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Mask (V) S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Free Meal": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Hair-tie S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Free Meal": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Mask (H) S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 2,
			"Spare Shot": 2,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hair-tie S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 2,
			"Spare Shot": 2,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Headgear S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Windproof": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Helm S",
		"place": 0,
		"maxDef": 78,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Sleep Attack": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Barioth Helm S",
		"place": 0,
		"maxDef": 78,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Draw": 2
		},
		"elemRes": [
			-3,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Kadachi Helm S",
		"place": 0,
		"maxDef": 78,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Jump Master": 1,
			"Constitution": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Helm S",
		"place": 0,
		"maxDef": 80,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Focus": 1,
			"Slugger": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Helm S",
		"place": 0,
		"maxDef": 80,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Helm S",
		"place": 0,
		"maxDef": 80,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Resuscitate": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Helm S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Partbreaker": 1
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Helm S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Weakness Exploit": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Vertex S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Element": 2
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Vertex S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Element": 2
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Hat S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Partbreaker": 1,
			"Divine Blessing": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Lobos S",
		"place": 0,
		"maxDef": 82,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Botanist": 2
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Mighty Bow Feather",
		"place": 0,
		"maxDef": 76,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Bow Charge Plus": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Gargwa Mask S",
		"place": 0,
		"maxDef": 74,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Leap of Faith": 1,
			"Good Luck": 1
		},
		"elemRes": [
			-3,
			-2,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Sinister Helm S",
		"place": 0,
		"maxDef": 84,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Resentment": 1,
			"Handicraft": 1,
			"Flinch Free": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Helm S",
		"place": 0,
		"maxDef": 84,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Agitator": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Helm S",
		"place": 0,
		"maxDef": 84,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Rapid Morph": 2
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Helm S",
		"place": 0,
		"maxDef": 84,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Earplugs": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Helm S",
		"place": 0,
		"maxDef": 84,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Guard": 1,
			"Stamina Surge": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rakna Helm",
		"place": 0,
		"maxDef": 86,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Spread Up": 1,
			"Reload Speed": 1
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Golden Headdress",
		"place": 0,
		"maxDef": 90,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Heroics": 2,
			"Maximum Might": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Damascus Helm",
		"place": 0,
		"maxDef": 88,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Tremor Resistance": 2,
			"Earplugs": 2
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Feather of Mastery",
		"place": 0,
		"maxDef": 76,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Carving Master": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Flame Seal",
		"place": 0,
		"maxDef": 76,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 4
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Kushala Glare",
		"place": 0,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Handicraft": 2,
			"Normal/Rapid Up": 2
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Mizuha Cap",
		"place": 0,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Mind's Eye": 2,
			"Ballistics": 2,
			"Evade Window": 2
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Crown",
		"place": 0,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Eye": 3,
			"Critical Boost": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Helm",
		"place": 0,
		"maxDef": 92,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Artillery": 1,
			"Guard": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Helm",
		"place": 0,
		"maxDef": 86,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Focus": 1,
			"Evade Extender": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Helm",
		"place": 0,
		"maxDef": 96,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Rapid Morph": 1,
			"Offensive Guard": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Helm",
		"place": 0,
		"maxDef": 100,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Weakness Exploit": 1
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Kamura Legacy Head Scarf",
		"place": 0,
		"maxDef": 136,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 2,
			"Resuscitate": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Headgear X",
		"place": 0,
		"maxDef": 136,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Geologist": 1,
			"Hunger Resistance": 1,
			"Carving Pro": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Headgear X",
		"place": 0,
		"maxDef": 138,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Stamina Surge": 1,
			"Defense Boost": 2
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Helm X",
		"place": 0,
		"maxDef": 138,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Helm X",
		"place": 0,
		"maxDef": 138,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Water Attack": 1,
			"Protective Polish": 1,
			"Speed Sharpening": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Helm X",
		"place": 0,
		"maxDef": 138,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Stamina Thief": 1,
			"Partbreaker": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Gargwa Mask X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Leap of Faith": 1,
			"Good Luck": 2
		},
		"elemRes": [
			-3,
			-2,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Helm X",
		"place": 0,
		"maxDef": 146,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Pierce Up": 2,
			"Stun Resistance": 1,
			"Muck Resistance": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bullfango Mask X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Diversion": 1,
			"Agitator": 3
		},
		"elemRes": [
			0,
			4,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Hat X",
		"place": 0,
		"maxDef": 140,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Poison Attack": 1,
			"Recoil Down": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Hornetaur Helm",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Resuscitate": 2,
			"Recovery Up": 1
		},
		"elemRes": [
			-1,
			-1,
			-1,
			-1,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vespoid Helm",
		"place": 0,
		"maxDef": 140,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Paralysis Attack": 1,
			"Wirebug Whisperer": 2
		},
		"elemRes": [
			-2,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Mask X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Affinity Sliding": 1,
			"Marathon Runner": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Velociprey Helm",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Stun Resistance": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Helm X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Evade Window": 2
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Helm X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Sleep Attack": 1,
			"Ice Resistance": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Helm X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Maximum Might": 2,
			"Quick Sheathe": 1,
			"Stun Resistance": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Rapid Fire Up": 2,
			"Evade Extender": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Helm X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Fortify": 1,
			"Defense Boost": 3,
			"Speed Eating": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Helm X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Ice Attack": 2,
			"Master's Touch": 1,
			"Reload Speed": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Helm X",
		"place": 0,
		"maxDef": 150,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Paralysis Attack": 2,
			"Earplugs": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Fire Attack": 1,
			"Critical Draw": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Helm X",
		"place": 0,
		"maxDef": 148,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Marathon Runner": 1,
			"Peak Performance": 1,
			"Focus": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Helm X",
		"place": 0,
		"maxDef": 150,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Defense Boost": 1,
			"Offensive Guard": 1,
			"Spread Up": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hermitaur Helm",
		"place": 0,
		"maxDef": 150,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 2,
			"Tremor Resistance": 2
		},
		"elemRes": [
			-5,
			1,
			-3,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Helm X",
		"place": 0,
		"maxDef": 146,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 2,
			"Speed Eating": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Helm X",
		"place": 0,
		"maxDef": 142,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Windproof": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Vertex X",
		"place": 0,
		"maxDef": 146,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Poison Attack": 3,
			"Latent Power": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Vertex X",
		"place": 0,
		"maxDef": 146,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Poison Attack": 3,
			"Latent Power": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Grand Chaoshroom",
		"place": 0,
		"maxDef": 146,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Mushroomancer": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			2,
			-2,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Vizor X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Poison Resistance": 2,
			"Speed Eating": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Hat X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Ballistics": 2,
			"Steadiness": 2,
			"Tune-Up": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Hat X",
		"place": 0,
		"maxDef": 140,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Paralysis Resistance": 2,
			"Divine Blessing": 2
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Five Element Mask",
		"place": 0,
		"maxDef": 148,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 2,
			"Mind's Eye": 1,
			"Ballistics": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			3
		]
	} as ArmorPiece,
	{
		"name": "Squire's Earrings",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Speed Eating": 3
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Yukumo Sky Kasa",
		"place": 0,
		"maxDef": 140,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Evade Window": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			0,
			0,
			2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Slagtoth Hood X",
		"place": 0,
		"maxDef": 140,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Free Meal": 1,
			"Diversion": 1,
			"Speed Eating": 2
		},
		"elemRes": [
			-2,
			2,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Khezu Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Focus": 1,
			"Recovery Up": 1,
			"Thunder Attack": 2
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Item Prolonger": 1,
			"Wide-Range": 2,
			"Stun Resistance": 2
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Orangaten Helm",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Blast Attack": 1,
			"Latent Power": 2
		},
		"elemRes": [
			2,
			-4,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Special Ammo Boost": 1,
			"Spare Shot": 1,
			"Poison Attack": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Offensive Guard": 1,
			"Evade Extender": 2,
			"Resentment": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Helm X",
		"place": 0,
		"maxDef": 148,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Load Shells": 1,
			"Defense Boost": 2,
			"Artillery": 2
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Sleep Attack": 1,
			"Sleep Resistance": 2,
			"Spare Shot": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Auroracanth Head",
		"place": 0,
		"maxDef": 152,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Master's Touch": 1,
			"Agitator": 2
		},
		"elemRes": [
			-3,
			1,
			-1,
			3,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rathian Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Blight Resistance": 1,
			"Poison Resistance": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kadachi Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Jump Master": 1,
			"Constitution": 1,
			"Critical Eye": 3
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Helm X",
		"place": 0,
		"maxDef": 146,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Focus": 1,
			"Slugger": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skull Visage X",
		"place": 0,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Fortify": 1,
			"Handicraft": 1
		},
		"elemRes": [
			-3,
			-3,
			-3,
			-3,
			4
		]
	} as ArmorPiece,
	{
		"name": "Dober Helm X",
		"place": 0,
		"maxDef": 148,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Attack Boost": 1,
			"Heroics": 1,
			"Marathon Runner": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vaik Helm X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Ammo Up": 2,
			"Recovery Speed": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Vizor X",
		"place": 0,
		"maxDef": 144,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Blast Resistance": 2,
			"Fire Attack": 2,
			"Critical Element": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Brain X",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Protective Polish": 1,
			"Speed Sharpening": 2,
			"Attack Boost": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Hood X",
		"place": 0,
		"maxDef": 148,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Sleep Resistance": 2,
			"Speed Eating": 1,
			"Stamina Surge": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Vertex X",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Critical Element": 2,
			"Evade Window": 2
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Vertex X",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Critical Element": 2,
			"Evade Window": 2
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Artillery Corps Helm",
		"place": 0,
		"maxDef": 150,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Steadiness": 2,
			"Recoil Down": 1,
			"Evade Extender": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Guild Bard Lobos",
		"place": 0,
		"maxDef": 148,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Evade Window": 2,
			"Mushroomancer": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Scholar's Beret",
		"place": 0,
		"maxDef": 148,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Evade Window": 2,
			"Mushroomancer": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guardian Helm",
		"place": 0,
		"maxDef": 152,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Guard": 1,
			"Guard Up": 1,
			"Earplugs": 1
		},
		"elemRes": [
			2,
			0,
			0,
			2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Brigade Lobos X",
		"place": 0,
		"maxDef": 150,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Botanist": 2,
			"Divine Blessing": 2
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Barioth Helm X",
		"place": 0,
		"maxDef": 152,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Draw": 2,
			"Partbreaker": 1,
			"Ice Attack": 2
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Sinister Demon Helm",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Resentment": 2,
			"Handicraft": 1,
			"Flinch Free": 2
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Helm X",
		"place": 0,
		"maxDef": 152,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Constitution": 2,
			"Flinch Free": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Helm X",
		"place": 0,
		"maxDef": 150,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Agitator": 2,
			"Quick Sheathe": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Golm Helm",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Charge Master": 1,
			"Maximum Might": 1,
			"Tremor Resistance": 1
		},
		"elemRes": [
			-1,
			3,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Ceanataur Helm",
		"place": 0,
		"maxDef": 152,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Peak Performance": 2
		},
		"elemRes": [
			-3,
			1,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Almudron Helm X",
		"place": 0,
		"maxDef": 152,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Rapid Morph": 2,
			"Power Prolonger": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Magmadron Helm",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Resentment": 1,
			"Heroics": 2,
			"Fire Attack": 3
		},
		"elemRes": [
			5,
			-5,
			0,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rakna Helm X",
		"place": 0,
		"maxDef": 152,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Spread Up": 1,
			"Reload Speed": 1,
			"Tune-Up": 1
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Pyre-Kadaki Helm",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Maximum Might": 1,
			"Blast Attack": 1,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			2,
			-4,
			2,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Snowshear Headgear",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Grinder (S)": 1,
			"Stamina Thief": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			0,
			0,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barbania Patch",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Weakness Exploit": 1,
			"Capture Master": 1,
			"Resentment": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Mask (V)",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Eating": 2,
			"Free Meal": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Hair Tie (Light)",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Eating": 2,
			"Free Meal": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Mask (H)",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 2,
			"Spare Shot": 2,
			"Wirebug Whisperer": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hair Tie (Spring)",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 2,
			"Spare Shot": 2,
			"Wirebug Whisperer": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hoplite's Helm",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Guard Up": 1,
			"Artillery": 1,
			"Load Shells": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Hawkhat",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Constitution": 2,
			"Weakness Exploit": 1,
			"Good Luck": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lecturer's Hood",
		"place": 0,
		"maxDef": 154,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Constitution": 2,
			"Weakness Exploit": 1,
			"Good Luck": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dignified Earrings",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Focus": 2,
			"Power Prolonger": 2,
			"Evade Extender": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Remobra Headgear X",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			4,
			2,
			1
		],
		"skills": {
			"Windproof": 1,
			"Poison Attack": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Helm X",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Resuscitate": 1,
			"Evade Window": 2,
			"Constitution": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Helm X",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Partbreaker": 1,
			"Critical Boost": 1
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Helm X",
		"place": 0,
		"maxDef": 160,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Weakness Exploit": 1,
			"Critical Element": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Lunagaron Helm",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			-4,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Astalos Helm",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			4,
			2,
			1
		],
		"skills": {
			"Burst": 1,
			"Stun Resistance": 2
		},
		"elemRes": [
			0,
			-1,
			4,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Espinas Brain",
		"place": 0,
		"maxDef": 160,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Paralysis Attack": 3,
			"Partbreaker": 1
		},
		"elemRes": [
			3,
			-1,
			2,
			-3,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Gore Helm",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Agitator": 1,
			"Constitution": 2
		},
		"elemRes": [
			-2,
			3,
			-1,
			2,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Regios Helm",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Bladescale Hone": 1,
			"Constitution": 3
		},
		"elemRes": [
			4,
			0,
			-3,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Helm X",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Earplugs": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Helm X",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Guard": 3,
			"Tremor Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Damascus Helm X",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Tremor Resistance": 2,
			"Earplugs": 2
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Jelly Hat X",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Partbreaker": 1,
			"Divine Blessing": 1,
			"Focus": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Professor's Goggles",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Recovery Speed": 3,
			"Earplugs": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Charité Barrette",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Recovery Speed": 3,
			"Earplugs": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Scholarly Hood",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Wide-Range": 3,
			"Capture Master": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Commission Gorget",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Constitution": 3,
			"Recovery Speed": 1
		},
		"elemRes": [
			2,
			2,
			2,
			2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sailor Hat",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			4,
			2,
			1
		],
		"skills": {
			"Spiribird's Call": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guild Palace Helm",
		"place": 0,
		"maxDef": 160,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Agitator": 1,
			"Offensive Guard": 2
		},
		"elemRes": [
			1,
			2,
			2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Glare X",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Handicraft": 2,
			"Normal/Rapid Up": 2
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Grand Mizuha Mask",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Mind's Eye": 2,
			"Ballistics": 2,
			"Foray": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Crown X",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Critical Eye": 3,
			"Critical Boost": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Malzeno Helm",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Weakness Exploit": 1,
			"Wirebug Whisperer": 2
		},
		"elemRes": [
			-2,
			2,
			2,
			-1,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Arc Helm",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Bloodlust": 1,
			"Coalescence": 2
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Storge Helm",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Bloodlust": 1,
			"Coalescence": 2
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Grand God's Peer Mask",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Heroics": 2,
			"Maximum Might": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Helm X",
		"place": 0,
		"maxDef": 160,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Artillery": 1,
			"Guard": 2,
			"Razor Sharp": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Outpost HQ Earrings",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wide-Range": 3,
			"Focus": 3
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Soaring Feather",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Wirebug Whisperer": 3,
			"Wall Runner (Boost)": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Blessed Feather",
		"place": 0,
		"maxDef": 156,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Good Luck": 3
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Archfiend Armor Cerato",
		"place": 0,
		"maxDef": 166,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Weakness Exploit": 1,
			"Resentment": 2
		},
		"elemRes": [
			0,
			3,
			-2,
			3,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Pure Helm",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Focus": 1,
			"Evade Extender": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Pure Helm",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Rapid Morph": 1,
			"Offensive Guard": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Divine Ire Mask",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Furious": 1,
			"Critical Eye": 1,
			"Razor Sharp": 2,
			"Spare Shot": 2
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Helm - Eclipse",
		"place": 0,
		"maxDef": 164,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Dragonheart": 1,
			"Weakness Exploit": 1
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Sinister Grudge Helm",
		"place": 0,
		"maxDef": 164,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 2,
			"Coalescence": 2,
			"Redirection": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Pride Helm",
		"place": 0,
		"maxDef": 163,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Latent Power": 2,
			"Attack Boost": 1,
			"Earplugs": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Golden Lunehelm",
		"place": 0,
		"maxDef": 160,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Status Trigger": 2,
			"Foray": 1,
			"Burst": 2
		},
		"elemRes": [
			3,
			-3,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Silver Solhelm",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Critical Boost": 2,
			"Critical Element": 1,
			"Windproof": 3
		},
		"elemRes": [
			4,
			-4,
			-3,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Lambent Casque",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Handicraft": 1,
			"Ammo Up": 1,
			"Agitator": 3
		},
		"elemRes": [
			3,
			3,
			0,
			-5,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Flaming Espinas Brain",
		"place": 0,
		"maxDef": 162,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Razor Sharp": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			3,
			-4,
			-1,
			2,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Onmyo Toukan",
		"place": 0,
		"maxDef": 160,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Adrenaline Rush": 1,
			"Evade Extender": 3
		},
		"elemRes": [
			2,
			0,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Risen Mizuha Headdress",
		"place": 0,
		"maxDef": 165,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Peak Performance": 3,
			"Evade Window": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Chaotic Helm",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Strife": 1,
			"Critical Eye": 2,
			"Element Exploit": 1
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Nephilim Helm",
		"place": 0,
		"maxDef": 158,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Strife": 1,
			"Critical Eye": 2,
			"Element Exploit": 1
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Rimeguard Helm",
		"place": 0,
		"maxDef": 163,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Grinder (S)": 3,
			"Protective Polish": 1,
			"Ammo Up": 3
		},
		"elemRes": [
			-3,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Risen Kushala Glare",
		"place": 0,
		"maxDef": 164,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {
			"Wind Mantle": 1,
			"Wirebug Whisperer": 3
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Risen Kaiser Horns",
		"place": 0,
		"maxDef": 164,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Powder Mantle": 1,
			"Weakness Exploit": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Helm - Epoch",
		"place": 0,
		"maxDef": 161,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Dragon Conversion": 1,
			"Latent Power": 2,
			"Attack Boost": 1
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Guild Cross Circlet",
		"place": 0,
		"maxDef": 24,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Botanist": 1,
			"Hunger Resistance": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Helm",
		"place": 0,
		"maxDef": 36,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Earplugs": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Azure Age Hair",
		"place": 0,
		"maxDef": 92,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Constitution": 2,
			"Water Attack": 2
		},
		"elemRes": [
			2,
			2,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Helm S",
		"place": 0,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Earplugs": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kamura Garb",
		"place": 1,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			1,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Vest",
		"place": 1,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Botanist": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Vest",
		"place": 1,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Peak Performance": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Mail",
		"place": 1,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Recovery Speed": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Counterstrike": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Affinity Sliding": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Mail",
		"place": 1,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Sharpening": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Mail",
		"place": 1,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stamina Thief": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chaos Plate",
		"place": 1,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {},
		"elemRes": [
			2,
			-2,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Ribplate",
		"place": 1,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Up": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Thorax",
		"place": 1,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Thorax",
		"place": 1,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Vest",
		"place": 1,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Reload Speed": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Slagtoth Cloak",
		"place": 1,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Free Meal": 1
		},
		"elemRes": [
			-2,
			2,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Mail",
		"place": 1,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Artillery": 1,
			"Stun Resistance": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Mail",
		"place": 1,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Resistance": 1
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Suit",
		"place": 1,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Paralysis Attack": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Horn Maestro": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Attack": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stamina Surge": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wall Runner": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Windproof": 1
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Jacket",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Botanist": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Muscle",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Ribplate",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Reload Speed": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Mail",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Steadiness": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Uroktor Torso",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Fire Resistance": 2
		},
		"elemRes": [
			4,
			-2,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Suit",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Constitution": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Basarios Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rathian Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Up": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Barioth Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tobi-Kadachi Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Cover",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Attack": 2
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Thorax",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Dragon Attack": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Thorax",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Dragon Attack": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Vest",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Blast Attack": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Chest (V)",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Robe",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Chest (H)",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Robe",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Suit",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Blight Resistance": 1
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Garb",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Resentment": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Focus": 1,
			"Marathon Runner": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Mail",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Bubbly Dance": 1,
			"Water Attack": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Partbreaker": 1,
			"Windproof": 1
		},
		"elemRes": [
			4,
			0,
			-2,
			0,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Draw": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Earplugs": 1,
			"Bludgeoner": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kamura Garb S",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Wirebug Whisperer": 2,
			"Wall Runner": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Vest S",
		"place": 1,
		"maxDef": 68,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Botanist": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Vest S",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Defense Boost": 1,
			"Flinch Free": 2
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Mail S",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Handicraft": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Mail S",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Sharpening": 2
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Mail S",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Stamina Thief": 1,
			"Marathon Runner": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Thorax S",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Latent Power": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Thorax S",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Latent Power": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Suit S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Paralysis Attack": 1,
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Mail S",
		"place": 1,
		"maxDef": 74,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Recovery Speed": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Mail S",
		"place": 1,
		"maxDef": 74,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Ice Attack": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Mail S",
		"place": 1,
		"maxDef": 76,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Slugger": 2,
			"Horn Maestro": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Mail S",
		"place": 1,
		"maxDef": 76,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Rapid Fire Up": 1,
			"Poison Attack": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Mail S",
		"place": 1,
		"maxDef": 74,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Counterstrike": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Mail S",
		"place": 1,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Affinity Sliding": 1,
			"Constitution": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Mail S",
		"place": 1,
		"maxDef": 76,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Peak Performance": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Mail S",
		"place": 1,
		"maxDef": 76,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Wall Runner": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Mail S",
		"place": 1,
		"maxDef": 78,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1,
			"Evade Extender": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Mail S",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Windproof": 2
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chaos Archplate",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Mushroomancer": 2
		},
		"elemRes": [
			2,
			-2,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Ribplate S",
		"place": 1,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Recovery Up": 2
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Slagtoth Cloak S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Free Meal": 2
		},
		"elemRes": [
			-2,
			2,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Mail S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Artillery": 1,
			"Stun Resistance": 2
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Mail S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Water Attack": 2
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Mail S",
		"place": 1,
		"maxDef": 80,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Jump Master": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Mail S",
		"place": 1,
		"maxDef": 78,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Stamina Surge": 2
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Mail S",
		"place": 1,
		"maxDef": 80,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Defense Boost": 2
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Mail S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Mail S",
		"place": 1,
		"maxDef": 80,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Special Ammo Boost": 1,
			"Constitution": 2
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Mail",
		"place": 1,
		"maxDef": 78,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Power Prolonger": 2,
			"Evade Extender": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Mail S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard": 1,
			"Load Shells": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Rathian Mail S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Recovery Up": 1,
			"Botanist": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Dober Mail",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Focus": 1,
			"Power Prolonger": 1,
			"Heroics": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Vest S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1,
			"Pierce Up": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Jacket S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Botanist": 2,
			"Recovery Up": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Muscle S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Fortify": 1,
			"Rapid Morph": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Ribplate S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Reload Speed": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Mail S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Cover S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Water Attack": 3
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Chest (V) S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Wide-Range": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Robe S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Wide-Range": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Chest (H) S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Spare Shot": 1,
			"Evade Window": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Robe S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Spare Shot": 1,
			"Evade Window": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Uroktor Torso S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Fire Attack": 3
		},
		"elemRes": [
			4,
			-2,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Suit S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Boost": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Mail S",
		"place": 1,
		"maxDef": 78,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Sleep Attack": 1,
			"Item Prolonger": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Barioth Mail S",
		"place": 1,
		"maxDef": 78,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Quick Sheathe": 1,
			"Maximum Might": 1
		},
		"elemRes": [
			-3,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tobi-Kadachi Mail S",
		"place": 1,
		"maxDef": 78,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Mind's Eye": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Mail S",
		"place": 1,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Focus": 2,
			"Marathon Runner": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Mail S",
		"place": 1,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Mail S",
		"place": 1,
		"maxDef": 80,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Bubbly Dance": 1,
			"Resuscitate": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Mail S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Partbreaker": 1,
			"Windproof": 1
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Mail S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Weakness Exploit": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Thorax S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Critical Eye": 2,
			"Dragon Attack": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Thorax S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Critical Eye": 2,
			"Dragon Attack": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Vest S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Blast Attack": 2
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Suit S",
		"place": 1,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Capture Master": 1,
			"Geologist": 1
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Garb S",
		"place": 1,
		"maxDef": 84,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Resentment": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Mail S",
		"place": 1,
		"maxDef": 84,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Resentment": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Mail S",
		"place": 1,
		"maxDef": 84,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 2,
			"Power Prolonger": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Mail S",
		"place": 1,
		"maxDef": 84,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Earplugs": 2,
			"Bludgeoner": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Mail S",
		"place": 1,
		"maxDef": 84,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Guard": 2,
			"Offensive Guard": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rakna Mail",
		"place": 1,
		"maxDef": 86,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Spread Up": 1,
			"Reload Speed": 1
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Golden Haori",
		"place": 1,
		"maxDef": 90,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Heroics": 1,
			"Maximum Might": 1,
			"Latent Power": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Damascus Mail",
		"place": 1,
		"maxDef": 88,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Tremor Resistance": 1,
			"Handicraft": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Cista",
		"place": 1,
		"maxDef": 94,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Kushala Blessing": 1,
			"Recovery Speed": 1,
			"Diversion": 1
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Mizuha Guards",
		"place": 1,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Chameleos Blessing": 1,
			"Poison Attack": 1,
			"Mind's Eye": 1,
			"Ballistics": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Mail",
		"place": 1,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Teostra Blessing": 1,
			"Critical Eye": 1,
			"Master's Touch": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Mail",
		"place": 1,
		"maxDef": 92,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard Up": 2,
			"Agitator": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Breastplate",
		"place": 1,
		"maxDef": 86,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Guard": 1,
			"Flinch Free": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Breastplate",
		"place": 1,
		"maxDef": 96,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Constitution": 1,
			"Critical Draw": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Mail",
		"place": 1,
		"maxDef": 100,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Resuscitate": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Kamura Legacy Garb",
		"place": 1,
		"maxDef": 136,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Wirebug Whisperer": 2,
			"Wall Runner": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Vest X",
		"place": 1,
		"maxDef": 136,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Botanist": 2,
			"Recovery Up": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Vest X",
		"place": 1,
		"maxDef": 138,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Defense Boost": 1,
			"Flinch Free": 2,
			"Guard": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Mail X",
		"place": 1,
		"maxDef": 138,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Handicraft": 1,
			"Item Prolonger": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Mail X",
		"place": 1,
		"maxDef": 138,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Speed Sharpening": 2,
			"Protective Polish": 2
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Mail X",
		"place": 1,
		"maxDef": 138,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Stamina Thief": 1,
			"Marathon Runner": 2
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Mail X",
		"place": 1,
		"maxDef": 146,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Artillery": 1,
			"Stun Resistance": 2
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Mail X",
		"place": 1,
		"maxDef": 146,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Water Attack": 2
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Suit X",
		"place": 1,
		"maxDef": 140,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Paralysis Attack": 1,
			"Evade Window": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Hornetaur Mail",
		"place": 1,
		"maxDef": 142,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 2,
			"Recovery Up": 1
		},
		"elemRes": [
			-1,
			-1,
			-1,
			-1,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vespoid Mail",
		"place": 1,
		"maxDef": 140,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Paralysis Resistance": 2
		},
		"elemRes": [
			-2,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Velociprey Mail",
		"place": 1,
		"maxDef": 142,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Windproof": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Mail X",
		"place": 1,
		"maxDef": 142,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Recovery Speed": 2,
			"Evade Window": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Mail X",
		"place": 1,
		"maxDef": 142,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Sleep Attack": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Mail X",
		"place": 1,
		"maxDef": 142,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Slugger": 2,
			"Quick Sheathe": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Rapid Fire Up": 1,
			"Poison Attack": 1,
			"Poison Resistance": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Mail X",
		"place": 1,
		"maxDef": 142,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Counterstrike": 1,
			"Resentment": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Mail X",
		"place": 1,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Affinity Sliding": 1,
			"Constitution": 2,
			"Master's Touch": 1,
			"Reload Speed": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Mail X",
		"place": 1,
		"maxDef": 150,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Jump Master": 1,
			"Earplugs": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Peak Performance": 1,
			"Critical Draw": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Mail X",
		"place": 1,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Stamina Surge": 2,
			"Focus": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Mail X",
		"place": 1,
		"maxDef": 150,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Defense Boost": 2,
			"Muck Resistance": 2
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hermitaur Mail",
		"place": 1,
		"maxDef": 150,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Guard": 3,
			"Load Shells": 1,
			"Normal/Rapid Up": 1,
			"Ammo Up": 1
		},
		"elemRes": [
			-5,
			1,
			-3,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Mail X",
		"place": 1,
		"maxDef": 146,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1,
			"Evade Extender": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Mail X",
		"place": 1,
		"maxDef": 142,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Windproof": 2,
			"Critical Eye": 2
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Thorax X",
		"place": 1,
		"maxDef": 146,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Latent Power": 2,
			"Mind's Eye": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Thorax X",
		"place": 1,
		"maxDef": 146,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Latent Power": 2,
			"Mind's Eye": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Grand Chaos Plate",
		"place": 1,
		"maxDef": 146,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Mushroomancer": 2,
			"Horn Maestro": 1
		},
		"elemRes": [
			2,
			-2,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Ribplate X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Recovery Up": 2,
			"Wide-Range": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Vest X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1,
			"Pierce Up": 1,
			"Tune-Up": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Jacket X",
		"place": 1,
		"maxDef": 140,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Botanist": 2,
			"Recovery Up": 1,
			"Divine Blessing": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Five Element Garb",
		"place": 1,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Blight Resistance": 1,
			"Mind's Eye": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			3
		]
	} as ArmorPiece,
	{
		"name": "Squire's Cuirass",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Flinch Free": 1,
			"Offensive Guard": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Yukumo Sky Dogi",
		"place": 1,
		"maxDef": 140,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Earplugs": 2
		},
		"elemRes": [
			0,
			0,
			2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Slagtoth Cloak X",
		"place": 1,
		"maxDef": 140,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Free Meal": 2,
			"Item Prolonger": 2
		},
		"elemRes": [
			-2,
			2,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Khezu Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Wall Runner": 2,
			"Recovery Up": 2
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Wide-Range": 3
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Orangaten Mail",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Quick Sheathe": 1,
			"Fire Resistance": 2,
			"Recovery Speed": 3
		},
		"elemRes": [
			2,
			-4,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Special Ammo Boost": 1,
			"Constitution": 3,
			"Speed Sharpening": 2
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Power Prolonger": 2,
			"Evade Extender": 1,
			"Resentment": 1,
			"Tune-Up": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Mail X",
		"place": 1,
		"maxDef": 148,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard": 2,
			"Load Shells": 1,
			"Latent Power": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Sleep Attack": 1,
			"Ammo Up": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Auroracanth Mail",
		"place": 1,
		"maxDef": 152,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Agitator": 2
		},
		"elemRes": [
			-3,
			1,
			-1,
			3,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rathian Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Recovery Up": 1,
			"Poison Resistance": 2,
			"Free Meal": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Tobi-Kadachi Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Mind's Eye": 1,
			"Critical Eye": 1,
			"Critical Element": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Mail X",
		"place": 1,
		"maxDef": 146,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Focus": 2,
			"Marathon Runner": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dober Mail X",
		"place": 1,
		"maxDef": 148,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Focus": 1,
			"Power Prolonger": 1,
			"Heroics": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vaik Mail X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {
			"Hunger Resistance": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Ribplate X",
		"place": 1,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Tune-Up": 1,
			"Steadiness": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Muscle X",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Fortify": 1,
			"Rapid Morph": 2,
			"Speed Sharpening": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Cover X",
		"place": 1,
		"maxDef": 148,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Water Attack": 3,
			"Speed Eating": 1,
			"Stamina Surge": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Thorax X",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Critical Eye": 3,
			"Dragon Attack": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Thorax X",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Critical Eye": 3,
			"Dragon Attack": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Artillery Corps Vest",
		"place": 1,
		"maxDef": 150,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Ballistics": 3,
			"Recoil Down": 1,
			"Evade Extender": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Guild Bard Bolero",
		"place": 1,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Divine Blessing": 1,
			"Good Luck": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Scholar's Blouse",
		"place": 1,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Divine Blessing": 1,
			"Good Luck": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guardian Suit",
		"place": 1,
		"maxDef": 152,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Guard": 1,
			"Speed Sharpening": 1,
			"Blight Resistance": 1
		},
		"elemRes": [
			2,
			0,
			0,
			2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Brigade Suit X",
		"place": 1,
		"maxDef": 150,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Capture Master": 1,
			"Geologist": 1,
			"Marathon Runner": 1
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Barioth Mail X",
		"place": 1,
		"maxDef": 152,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Quick Sheathe": 1,
			"Maximum Might": 2
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Sinister Demon Garb",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Resentment": 1,
			"Earplugs": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Mail X",
		"place": 1,
		"maxDef": 152,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Critical Eye": 2,
			"Flinch Free": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Mail X",
		"place": 1,
		"maxDef": 150,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Resentment": 3
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Golm Mail",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Flinch Free": 3,
			"Tremor Resistance": 2
		},
		"elemRes": [
			-1,
			3,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Ceanataur Mail",
		"place": 1,
		"maxDef": 152,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Grinder (S)": 1,
			"Marathon Runner": 2,
			"Critical Eye": 1
		},
		"elemRes": [
			-3,
			1,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Almudron Mail X",
		"place": 1,
		"maxDef": 152,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 2,
			"Power Prolonger": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Magmadron Mail",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Resuscitate": 1,
			"Heroics": 2
		},
		"elemRes": [
			5,
			-5,
			0,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rakna Mail X",
		"place": 1,
		"maxDef": 152,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Spread Up": 1,
			"Reload Speed": 2,
			"Spare Shot": 1
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Pyre-Kadaki Mail",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Maximum Might": 1,
			"Wirebug Whisperer": 2
		},
		"elemRes": [
			2,
			-4,
			2,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Snowshear Mail",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Tremor Resistance": 1,
			"Stamina Thief": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			0,
			0,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barbania Vest",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Partbreaker": 1,
			"Counterstrike": 1,
			"Resentment": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Chest (V)",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Wide-Range": 1,
			"Good Luck": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Robe (Light)",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Wide-Range": 1,
			"Good Luck": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Chest (H)",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Spare Shot": 1,
			"Evade Window": 3,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Robe (Spring)",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Spare Shot": 1,
			"Evade Window": 3,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hoplite's Armor",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard": 1,
			"Artillery": 2,
			"Offensive Guard": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Hawksuit",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Constitution": 1,
			"Quick Sheathe": 1,
			"Good Luck": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lecturer's Suit",
		"place": 1,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Constitution": 1,
			"Quick Sheathe": 1,
			"Good Luck": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dignified Jacket",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Evade Window": 1,
			"Evade Extender": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Uroktor Torso X",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Guard Up": 2,
			"Special Ammo Boost": 2,
			"Evade Window": 1
		},
		"elemRes": [
			4,
			-2,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Suit X",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Critical Boost": 1,
			"Poison Attack": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Mail X",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Bubbly Dance": 1,
			"Resuscitate": 1,
			"Constitution": 2
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Mail X",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Partbreaker": 1,
			"Earplugs": 1
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Mail X",
		"place": 1,
		"maxDef": 160,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Latent Power": 1,
			"Weakness Exploit": 2,
			"Thunder Attack": 2
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Lunagaron Mail",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Agitator": 2,
			"Redirection": 1
		},
		"elemRes": [
			-4,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Astalos Mail",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Burst": 1,
			"Stamina Surge": 2
		},
		"elemRes": [
			0,
			-1,
			4,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Espinas Muscle",
		"place": 1,
		"maxDef": 160,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Foray": 1,
			"Partbreaker": 2
		},
		"elemRes": [
			3,
			-1,
			2,
			-3,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Gore Mail",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Coalescence": 1,
			"Constitution": 3
		},
		"elemRes": [
			-2,
			3,
			-1,
			2,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Regios Mail",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Bladescale Hone": 1,
			"Evade Window": 3
		},
		"elemRes": [
			4,
			0,
			-3,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Mail X",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Earplugs": 2,
			"Peak Performance": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Mail X",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Guard": 2,
			"Offensive Guard": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Damascus Mail X",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Tremor Resistance": 1,
			"Handicraft": 2,
			"Pierce Up": 2
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Jelly Vest X",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Blast Attack": 2,
			"Focus": 1,
			"Slugger": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Professor's Jacket",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Earplugs": 3,
			"Hunger Resistance": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Charité Jacket",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Earplugs": 3,
			"Hunger Resistance": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Scholarly Suit",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Blight Resistance": 3,
			"Free Meal": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Commission Vest",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Good Luck": 2,
			"Recovery Speed": 1
		},
		"elemRes": [
			2,
			2,
			2,
			2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sailor Suit",
		"place": 1,
		"maxDef": 156,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Evade Window": 4,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guild Palace Mail",
		"place": 1,
		"maxDef": 160,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Agitator": 2,
			"Heroics": 1
		},
		"elemRes": [
			1,
			2,
			2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Cista X",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Recovery Speed": 3,
			"Handicraft": 2,
			"Ammo Up": 2
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Grand Mizuha Guards",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Mind's Eye": 1,
			"Ballistics": 1,
			"Evade Window": 3
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Mail X",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Master's Touch": 2,
			"Ballistics": 2
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Malzeno Mail",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Blood Rite": 1,
			"Weakness Exploit": 1,
			"Partbreaker": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-1,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Arc Mail",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Bloodlust": 1,
			"Resuscitate": 2,
			"Critical Element": 1
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Storge Mail",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Bloodlust": 1,
			"Resuscitate": 2,
			"Critical Element": 1
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Grand God's Peer Robe",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Heroics": 1,
			"Maximum Might": 1,
			"Latent Power": 2
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Mail X",
		"place": 1,
		"maxDef": 160,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard Up": 2,
			"Agitator": 2,
			"Razor Sharp": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Outpost HQ Armor",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			3,
			3,
			0
		],
		"skills": {
			"Charge Master": 1,
			"Critical Draw": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Archfiend Armor Baulo",
		"place": 1,
		"maxDef": 166,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Weakness Exploit": 1,
			"Resentment": 1,
			"Burst": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			3,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Pure Breastplate",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Guard": 1,
			"Flinch Free": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Pure Breastplate",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Constitution": 1,
			"Critical Draw": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Divine Ire Haori",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Burst": 1,
			"Maximum Might": 2,
			"Evade Extender": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Mail - Eclipse",
		"place": 1,
		"maxDef": 164,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Resuscitate": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Sinister Grudge Garb",
		"place": 1,
		"maxDef": 164,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Mail of Hellfire": 1,
			"Wirebug Whisperer": 2
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Pride Mail",
		"place": 1,
		"maxDef": 163,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Guts": 1,
			"Attack Boost": 1,
			"Speed Eating": 2
		},
		"elemRes": [
			3,
			0,
			-2,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Golden Lunemail",
		"place": 1,
		"maxDef": 160,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Defiance": 2,
			"Counterstrike": 2,
			"Divine Blessing": 3
		},
		"elemRes": [
			3,
			-3,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Silver Solmail",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			4,
			3,
			1
		],
		"skills": {
			"Element Exploit": 1,
			"Critical Element": 1,
			"Fire Attack": 3
		},
		"elemRes": [
			4,
			-4,
			-3,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Lambent Hauberk",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Sneak Attack": 1,
			"Critical Boost": 1,
			"Agitator": 2
		},
		"elemRes": [
			3,
			3,
			0,
			-5,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Flaming Espinas Muscle",
		"place": 1,
		"maxDef": 162,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Charge Master": 1,
			"Marathon Runner": 2,
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			-4,
			-1,
			2,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Onmyo Kariginu",
		"place": 1,
		"maxDef": 160,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {
			"Embolden": 1,
			"Weakness Exploit": 1,
			"Stamina Surge": 2
		},
		"elemRes": [
			2,
			0,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Risen Mizuha Robes",
		"place": 1,
		"maxDef": 165,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Buildup Boost": 1,
			"Chameleos Blessing": 2,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Chaotic Mail",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Strife": 1,
			"Critical Eye": 2,
			"Critical Boost": 2
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Nephilim Mail",
		"place": 1,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Strife": 1,
			"Critical Eye": 2,
			"Critical Boost": 2
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Rimeguard Mail",
		"place": 1,
		"maxDef": 163,
		"slotSizes": [
			4,
			2,
			1
		],
		"skills": {
			"Frostcraft": 1,
			"Quick Sheathe": 3
		},
		"elemRes": [
			-3,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Risen Kushala Iram",
		"place": 1,
		"maxDef": 164,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {
			"Kushala Blessing": 2,
			"Attack Boost": 2,
			"Razor Sharp": 2,
			"Spare Shot": 2
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Risen Kaiser Mail",
		"place": 1,
		"maxDef": 164,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Powder Mantle": 1,
			"Weakness Exploit": 1,
			"Critical Eye": 3
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Mail - Epoch",
		"place": 1,
		"maxDef": 161,
		"slotSizes": [
			4,
			4,
			0
		],
		"skills": {
			"Dragon Conversion": 1,
			"Dragon Resistance": 3,
			"Attack Boost": 1
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Guild Cross Suit",
		"place": 1,
		"maxDef": 24,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Geologist": 1,
			"Marathon Runner": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Mail",
		"place": 1,
		"maxDef": 36,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Earplugs": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Azure Age Haori",
		"place": 1,
		"maxDef": 92,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Constitution": 2,
			"Weakness Exploit": 1
		},
		"elemRes": [
			2,
			2,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Mail S",
		"place": 1,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Earplugs": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kamura Braces",
		"place": 2,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Heroics": 1
		},
		"elemRes": [
			1,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Gloves",
		"place": 2,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Geologist": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Gloves",
		"place": 2,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Botanist": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Vambraces",
		"place": 2,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Braces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Constitution": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Vambraces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Sleep Resistance": 1,
			"Ice Attack": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Vambraces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Defense Boost": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Vambraces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Ice Attack": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Vambraces",
		"place": 2,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Vambraces",
		"place": 2,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stamina Thief": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Creeper",
		"place": 2,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Resistance": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Brachia",
		"place": 2,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Brachia",
		"place": 2,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Gloves",
		"place": 2,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recoil Down": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Braces",
		"place": 2,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Artillery": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Gloves",
		"place": 2,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Gauntlets",
		"place": 2,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1
		},
		"elemRes": [
			0,
			0,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Braces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Slugger": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Vambraces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Ammo Up": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Braces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Fire Attack": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Braces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Marathon Runner": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Vambraces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Affinity Sliding": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Vambraces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wall Runner": 1,
			"Recovery Speed": 1,
			"Thunder Attack": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Braces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Special Ammo Boost": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Vambraces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Attack": 2
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Branch",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Paralysis Resistance": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Grip",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Maximum Might": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Creeper",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Blast Resistance": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Braces",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Gloves",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Windproof": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Vambraces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Extender": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Vambraces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Braces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Spare Shot": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Basarios Vambraces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1,
			"Speed Sharpening": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Braces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Bombardier": 1,
			"Divine Blessing": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rathian Braces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Blight Resistance": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Barioth Vambraces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tobi-Kadachi Braces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Constitution": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Sleeves",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Leap of Faith": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Brachia",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Brachia",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Gloves",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Braces (V)",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Prayer",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Braces (H)",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hope",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Vambraces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Geologist": 2
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Gauntlets",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Vambraces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Slugger": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Braces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Evade Extender": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Braces",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Attack": 1,
			"Free Meal": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Braces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1
		},
		"elemRes": [
			4,
			0,
			-2,
			0,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Braces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Constitution": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Braces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Punishing Draw": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Vambraces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Evade Window": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Braces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Bludgeoner": 2
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Vambraces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Offensive Guard": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kamura Braces S",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Heroics": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Gloves S",
		"place": 2,
		"maxDef": 68,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Geologist": 1,
			"Special Ammo Boost": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Gloves S",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Botanist": 1,
			"Defense Boost": 2
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Vambraces S",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Vambraces S",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Water Attack": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Vambraces S",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Muck Resistance": 1,
			"Stamina Thief": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Brachia S",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Brachia S",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Gloves S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Poison Attack": 2,
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Braces S",
		"place": 2,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Constitution": 2
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Vambraces S",
		"place": 2,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Sleep Resistance": 2,
			"Ice Attack": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Braces S",
		"place": 2,
		"maxDef": 76,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Slugger": 1,
			"Stamina Thief": 2
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Vambraces S",
		"place": 2,
		"maxDef": 76,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Ammo Up": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Vambraces S",
		"place": 2,
		"maxDef": 74,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Counterstrike": 1,
			"Defense Boost": 2
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Vambraces S",
		"place": 2,
		"maxDef": 74,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Ice Attack": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Braces S",
		"place": 2,
		"maxDef": 76,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Peak Performance": 1,
			"Fire Attack": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Vambraces S",
		"place": 2,
		"maxDef": 76,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Wall Runner": 1,
			"Recovery Speed": 1,
			"Thunder Attack": 2
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Braces S",
		"place": 2,
		"maxDef": 78,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Heroics": 1,
			"Special Ammo Boost": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Vambraces S",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Thunder Attack": 3
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Creeper S",
		"place": 2,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Capture Master": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Braces S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Artillery": 2
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Gauntlets S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Attack Boost": 2
		},
		"elemRes": [
			0,
			0,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Vambraces S",
		"place": 2,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Evade Extender": 1,
			"Paralysis Attack": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Braces S",
		"place": 2,
		"maxDef": 78,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Marathon Runner": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Vambraces S",
		"place": 2,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Affinity Sliding": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Vambraces S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1,
			"Stun Resistance": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Braces S",
		"place": 2,
		"maxDef": 80,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Spare Shot": 1,
			"Ballistics": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Vambraces",
		"place": 2,
		"maxDef": 78,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Vambraces S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard": 2,
			"Speed Sharpening": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Rathian Braces S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Blight Resistance": 1,
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Dober Vambraces",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Dragon Attack": 1,
			"Power Prolonger": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Gloves S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Spread Up": 1,
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Branch S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Paralysis Resistance": 1,
			"Botanist": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Grip S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Maximum Might": 2
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Creeper S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Blast Resistance": 1,
			"Flinch Free": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Braces S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Normal/Rapid Up": 2
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Sleeves S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Bubbly Dance": 1,
			"Leap of Faith": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Braces (V) S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Prayer S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Braces (H) S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hope S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Gloves S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Windproof": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Braces S",
		"place": 2,
		"maxDef": 78,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Bombardier": 2,
			"Divine Blessing": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Barioth Vambraces S",
		"place": 2,
		"maxDef": 78,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Maximum Might": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			-3,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Kadachi Braces S",
		"place": 2,
		"maxDef": 78,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Constitution": 3
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Vambraces S",
		"place": 2,
		"maxDef": 80,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Slugger": 2,
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Braces S",
		"place": 2,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Evade Extender": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Braces S",
		"place": 2,
		"maxDef": 80,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Resuscitate": 1,
			"Free Meal": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Braces S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Braces S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Constitution": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Brachia S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Brachia S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Gloves S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Divine Blessing": 2
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Vambraces S",
		"place": 2,
		"maxDef": 82,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Geologist": 2
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Gauntlets S",
		"place": 2,
		"maxDef": 84,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Handicraft": 2
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Braces S",
		"place": 2,
		"maxDef": 84,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Punishing Draw": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Vambraces S",
		"place": 2,
		"maxDef": 84,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Evade Window": 2
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Braces S",
		"place": 2,
		"maxDef": 84,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Bludgeoner": 2,
			"Mind's Eye": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Vambraces S",
		"place": 2,
		"maxDef": 84,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Offensive Guard": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rakna Armguards",
		"place": 2,
		"maxDef": 86,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Constitution": 2,
			"Stamina Surge": 1
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Golden Kote",
		"place": 2,
		"maxDef": 90,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Heroics": 1,
			"Latent Power": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Damascus Vambraces",
		"place": 2,
		"maxDef": 88,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Earplugs": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Grip",
		"place": 2,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Kushala Blessing": 1,
			"Recovery Speed": 1,
			"Agitator": 2
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Mizuha Sleeves",
		"place": 2,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Chameleos Blessing": 1,
			"Poison Attack": 1,
			"Evade Window": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Vambraces",
		"place": 2,
		"maxDef": 94,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Teostra Blessing": 1,
			"Critical Eye": 1,
			"Critical Boost": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Braces",
		"place": 2,
		"maxDef": 92,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Load Shells": 1,
			"Guard Up": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Pauldrons",
		"place": 2,
		"maxDef": 86,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Constitution": 1,
			"Stamina Surge": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Pauldrons",
		"place": 2,
		"maxDef": 96,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Guard": 1,
			"Partbreaker": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Braces",
		"place": 2,
		"maxDef": 100,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Weakness Exploit": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Kamura Legacy Braces",
		"place": 2,
		"maxDef": 136,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Heroics": 1,
			"Divine Blessing": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Gloves X",
		"place": 2,
		"maxDef": 136,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Geologist": 1,
			"Special Ammo Boost": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Gloves X",
		"place": 2,
		"maxDef": 138,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Stamina Surge": 1,
			"Defense Boost": 2
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Vambraces X",
		"place": 2,
		"maxDef": 138,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Handicraft": 1,
			"Ammo Up": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Vambraces X",
		"place": 2,
		"maxDef": 138,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Water Attack": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Vambraces X",
		"place": 2,
		"maxDef": 138,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Punishing Draw": 2,
			"Stamina Thief": 1,
			"Marathon Runner": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Braces X",
		"place": 2,
		"maxDef": 146,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Artillery": 2,
			"Load Shells": 1,
			"Special Ammo Boost": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Gloves X",
		"place": 2,
		"maxDef": 140,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Poison Attack": 2,
			"Evade Window": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Hornetaur Braces",
		"place": 2,
		"maxDef": 142,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Steadiness": 2
		},
		"elemRes": [
			-1,
			-1,
			-1,
			-1,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vespoid Vambraces",
		"place": 2,
		"maxDef": 140,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Paralysis Attack": 2,
			"Master Mounter": 1
		},
		"elemRes": [
			-2,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Gauntlets X",
		"place": 2,
		"maxDef": 146,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Attack Boost": 3
		},
		"elemRes": [
			0,
			0,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Velociprey Braces",
		"place": 2,
		"maxDef": 142,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Attack Boost": 2
		},
		"elemRes": [
			0,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Braces X",
		"place": 2,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Constitution": 2,
			"Evade Window": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Vambraces X",
		"place": 2,
		"maxDef": 142,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Sleep Resistance": 2,
			"Sleep Attack": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Braces X",
		"place": 2,
		"maxDef": 142,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Slugger": 1,
			"Stamina Thief": 2,
			"Quick Sheathe": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Vambraces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Ammo Up": 1,
			"Poison Resistance": 2,
			"Mind's Eye": 2
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Vambraces X",
		"place": 2,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Counterstrike": 1,
			"Defense Boost": 1,
			"Resentment": 2
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Vambraces X",
		"place": 2,
		"maxDef": 142,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Ice Attack": 3
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Vambraces X",
		"place": 2,
		"maxDef": 150,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Evade Extender": 1,
			"Paralysis Attack": 1,
			"Earplugs": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Braces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Peak Performance": 1,
			"Fire Attack": 2,
			"Critical Element": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Braces X",
		"place": 2,
		"maxDef": 148,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Marathon Runner": 1,
			"Power Prolonger": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Vambraces X",
		"place": 2,
		"maxDef": 150,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Affinity Sliding": 1,
			"Offensive Guard": 1,
			"Spread Up": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hermitaur Braces",
		"place": 2,
		"maxDef": 150,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Guard": 2,
			"Guard Up": 1,
			"Normal/Rapid Up": 2
		},
		"elemRes": [
			-5,
			1,
			-3,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Braces X",
		"place": 2,
		"maxDef": 146,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Heroics": 2,
			"Special Ammo Boost": 2,
			"Hunger Resistance": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Vambraces X",
		"place": 2,
		"maxDef": 142,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Thunder Attack": 3
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Brachia X",
		"place": 2,
		"maxDef": 146,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Latent Power": 1,
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Brachia X",
		"place": 2,
		"maxDef": 146,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Latent Power": 1,
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Edel Creeper X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Capture Master": 1,
			"Wide-Range": 3
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Gloves X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Spread Up": 2,
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Branch X",
		"place": 2,
		"maxDef": 140,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Paralysis Resistance": 1,
			"Botanist": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Five Element Arms",
		"place": 2,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 1,
			"Ballistics": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			3
		]
	} as ArmorPiece,
	{
		"name": "Squire's Braces",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Guard Up": 3,
			"Flinch Free": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Yukumo Sky Kote",
		"place": 2,
		"maxDef": 140,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Critical Eye": 2,
			"Evade Window": 2
		},
		"elemRes": [
			0,
			0,
			2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Vambraces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Wall Runner": 1,
			"Recovery Speed": 1,
			"Thunder Attack": 3
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Vambraces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1,
			"Stun Resistance": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Orangaten Braces",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Latent Power": 3,
			"Quick Sheathe": 1
		},
		"elemRes": [
			2,
			-4,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Braces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Spare Shot": 1,
			"Ballistics": 2
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Vambraces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {
			"Resentment": 2
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Vambraces X",
		"place": 2,
		"maxDef": 148,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Guard": 3,
			"Speed Sharpening": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Braces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Bombardier": 2,
			"Divine Blessing": 1,
			"Spare Shot": 2,
			"Handicraft": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Auroracanth Braces",
		"place": 2,
		"maxDef": 152,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Master's Touch": 1,
			"Ice Attack": 1
		},
		"elemRes": [
			-3,
			1,
			-1,
			3,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rathian Braces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Blight Resistance": 1,
			"Wide-Range": 2,
			"Free Meal": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kadachi Braces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Constitution": 3,
			"Fortify": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Vambraces X",
		"place": 2,
		"maxDef": 146,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Slugger": 2,
			"Attack Boost": 2,
			"Agitator": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dober Vambraces X",
		"place": 2,
		"maxDef": 148,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Dragon Attack": 1,
			"Power Prolonger": 2,
			"Recoil Down": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vaik Braces X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Normal/Rapid Up": 2,
			"Hunger Resistance": 1,
			"Razor Sharp": 2
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Creeper X",
		"place": 2,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Blast Resistance": 1,
			"Flinch Free": 2,
			"Critical Element": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Grip X",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Maximum Might": 2,
			"Attack Boost": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Sleeves X",
		"place": 2,
		"maxDef": 148,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Bubbly Dance": 1,
			"Leap of Faith": 1,
			"Resuscitate": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Brachia X",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Evade Window": 2,
			"Critical Eye": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Brachia X",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Evade Window": 2,
			"Critical Eye": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Artillery Corps Gauntlets",
		"place": 2,
		"maxDef": 150,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Ammo Up": 1,
			"Reload Speed": 1,
			"Artillery": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Guild Bard Braces",
		"place": 2,
		"maxDef": 148,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Mushroomancer": 1,
			"Good Luck": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Scholar's Gloves",
		"place": 2,
		"maxDef": 148,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Mushroomancer": 1,
			"Good Luck": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guardian Vambraces",
		"place": 2,
		"maxDef": 152,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Guard": 1,
			"Speed Sharpening": 1,
			"Earplugs": 1
		},
		"elemRes": [
			2,
			0,
			0,
			2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Brigade Vambraces X",
		"place": 2,
		"maxDef": 150,
		"slotSizes": [
			3,
			3,
			0
		],
		"skills": {
			"Geologist": 2,
			"Spiribird's Call": 1,
			"Divine Blessing": 1
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Barioth Vambraces X",
		"place": 2,
		"maxDef": 152,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Maximum Might": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Sinister Demon Gauntlets",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Handicraft": 2,
			"Ammo Up": 2
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Braces X",
		"place": 2,
		"maxDef": 152,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Evade Extender": 1,
			"Constitution": 2
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Braces X",
		"place": 2,
		"maxDef": 150,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Punishing Draw": 1,
			"Quick Sheathe": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Golm Braces",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Charge Master": 1,
			"Focus": 2
		},
		"elemRes": [
			-1,
			3,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Ceanataur Braces",
		"place": 2,
		"maxDef": 152,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Grinder (S)": 1,
			"Peak Performance": 1,
			"Critical Eye": 2,
			"Pierce Up": 1
		},
		"elemRes": [
			-3,
			1,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Almudron Vambraces X",
		"place": 2,
		"maxDef": 152,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Evade Window": 2
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Magmadron Vambraces",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Resentment": 1,
			"Guard Up": 2,
			"Heroics": 1
		},
		"elemRes": [
			5,
			-5,
			0,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rakna Armguards X",
		"place": 2,
		"maxDef": 152,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Constitution": 2,
			"Stamina Surge": 1
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Pyre-Kadaki Braces",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Maximum Might": 1,
			"Rapid Morph": 2,
			"Blast Resistance": 1,
			"Tune-Up": 1
		},
		"elemRes": [
			2,
			-4,
			2,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Snowshear Braces",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Recovery Speed": 3,
			"Latent Power": 2,
			"Attack Boost": 1
		},
		"elemRes": [
			0,
			0,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barbania Gloves",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Weakness Exploit": 1,
			"Partbreaker": 1,
			"Good Luck": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Braces (V)",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Wide-Range": 2,
			"Recovery Up": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Prayer (Light)",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Wide-Range": 2,
			"Recovery Up": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Braces (H)",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Wirebug Whisperer": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hope (Spring)",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Wirebug Whisperer": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hoplite's Braces",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Guard": 2,
			"Guard Up": 1,
			"Razor Sharp": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Hawk Gloves",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Quick Sheathe": 2,
			"Weakness Exploit": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lecturer Gloves",
		"place": 2,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Quick Sheathe": 2,
			"Weakness Exploit": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dignified Gloves",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Evade Window": 2,
			"Razor Sharp": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Remobra Gloves X",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Critical Element": 1,
			"Windproof": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Braces X",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Resuscitate": 1,
			"Free Meal": 2
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Braces X",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Earplugs": 2
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Braces X",
		"place": 2,
		"maxDef": 160,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Constitution": 2,
			"Critical Element": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Lunagaron Braces",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Agitator": 3,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			-4,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Astalos Braces",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Burst": 1,
			"Stamina Surge": 1,
			"Stun Resistance": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Espinas Vambraces",
		"place": 2,
		"maxDef": 160,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Foray": 1,
			"Protective Polish": 2,
			"Rapid Fire Up": 1
		},
		"elemRes": [
			3,
			-1,
			2,
			-3,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Gore Braces",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Coalescence": 1,
			"Speed Eating": 2
		},
		"elemRes": [
			-2,
			3,
			-1,
			2,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Regios Vambraces",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Handicraft": 3
		},
		"elemRes": [
			4,
			0,
			-3,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Braces X",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Mind's Eye": 1,
			"Peak Performance": 1,
			"Stun Resistance": 3,
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Vambraces X",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Offensive Guard": 2,
			"Stamina Surge": 1,
			"Pierce Up": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Damascus Vambraces X",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Earplugs": 2,
			"Blight Resistance": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Jelly Gloves X",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Divine Blessing": 2,
			"Focus": 1,
			"Slugger": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Professor's Mittens",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Divine Blessing": 3,
			"Hunger Resistance": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Charité Gloves",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Divine Blessing": 3,
			"Hunger Resistance": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Scholarly Strongarm",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Recovery Up": 3,
			"Free Meal": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Commission Vambraces",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Speed Eating": 3,
			"Mushroomancer": 1
		},
		"elemRes": [
			2,
			2,
			2,
			2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sailor Gloves",
		"place": 2,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Focus": 3,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guild Palace Braces",
		"place": 2,
		"maxDef": 160,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Agitator": 2,
			"Coalescence": 1,
			"Wall Runner (Boost)": 1
		},
		"elemRes": [
			1,
			2,
			2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Grip X",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Kushala Blessing": 2,
			"Agitator": 2
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Grand Mizuha Sleeves",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Chameleos Blessing": 1,
			"Poison Attack": 2,
			"Evade Window": 2
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Vambraces X",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Teostra Blessing": 1,
			"Critical Eye": 1,
			"Critical Boost": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Malzeno Braces",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Wirebug Whisperer": 1,
			"Attack Boost": 2,
			"Blight Resistance": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-1,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Arc Vambraces",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Critical Element": 2,
			"Resuscitate": 1
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Storge Vambraces",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Critical Element": 2,
			"Resuscitate": 1
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Grand God's Peer Arms",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Heroics": 1,
			"Latent Power": 2
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Braces X",
		"place": 2,
		"maxDef": 160,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Guard Up": 1,
			"Guard": 1,
			"Agitator": 2
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Outpost HQ Braces",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Charge Master": 2,
			"Quick Sheathe": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Archfiend Armor Epine",
		"place": 2,
		"maxDef": 166,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Dereliction": 2,
			"Resentment": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			3,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Pure Pauldrons",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Constitution": 1,
			"Stamina Surge": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Pure Pauldrons",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Guard": 1,
			"Partbreaker": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Divine Ire Kote",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Furious": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Braces - Eclipse",
		"place": 2,
		"maxDef": 164,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Weakness Exploit": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Sinister Grudge Gauntlets",
		"place": 2,
		"maxDef": 164,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Mail of Hellfire": 1,
			"Counterstrike": 1,
			"Redirection": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Pride Vambraces",
		"place": 2,
		"maxDef": 163,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Guts": 1,
			"Weakness Exploit": 1,
			"Earplugs": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Golden Lunebraces",
		"place": 2,
		"maxDef": 160,
		"slotSizes": [
			4,
			2,
			1
		],
		"skills": {
			"Critical Boost": 1,
			"Peak Performance": 1,
			"Burst": 1
		},
		"elemRes": [
			3,
			-3,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Silver Solbraces",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Element Exploit": 1,
			"Critical Element": 1,
			"Constitution": 2
		},
		"elemRes": [
			4,
			-4,
			-3,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Lambent Wristrays",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Adrenaline Rush": 2,
			"Evade Window": 3
		},
		"elemRes": [
			3,
			3,
			0,
			-5,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Flaming Espinas Grip",
		"place": 2,
		"maxDef": 162,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Intrepid Heart": 1,
			"Attack Boost": 1,
			"Razor Sharp": 2,
			"Spare Shot": 2
		},
		"elemRes": [
			3,
			-4,
			-1,
			2,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Onmyo Tekkou",
		"place": 2,
		"maxDef": 160,
		"slotSizes": [
			2,
			2,
			2
		],
		"skills": {
			"Embolden": 1,
			"Agitator": 2,
			"Stamina Surge": 1
		},
		"elemRes": [
			2,
			0,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Risen Mizuha Sleeves",
		"place": 2,
		"maxDef": 165,
		"slotSizes": [
			4,
			2,
			1
		],
		"skills": {
			"Buildup Boost": 1,
			"Chameleos Blessing": 1,
			"Foray": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Chaotic Vambraces",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Berserk": 1,
			"Bloodlust": 1,
			"Resentment": 3
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Nephilim Vambraces",
		"place": 2,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Berserk": 1,
			"Bloodlust": 1,
			"Resentment": 3
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Rimeguard Gloves",
		"place": 2,
		"maxDef": 163,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {
			"Frostcraft": 1,
			"Critical Draw": 3
		},
		"elemRes": [
			-3,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Risen Kushala Grande",
		"place": 2,
		"maxDef": 164,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Wind Mantle": 1,
			"Burst": 2
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Risen Kaiser Braces",
		"place": 2,
		"maxDef": 164,
		"slotSizes": [
			4,
			4,
			0
		],
		"skills": {
			"Teostra Blessing": 2,
			"Master's Touch": 1,
			"Ballistics": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Braces - Epoch",
		"place": 2,
		"maxDef": 161,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Critical Boost": 2,
			"Latent Power": 2,
			"Attack Boost": 1
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Guild Cross Vambraces",
		"place": 2,
		"maxDef": 24,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Geologist": 1,
			"Wall Runner": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Braces",
		"place": 2,
		"maxDef": 36,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Azure Age Sleeve",
		"place": 2,
		"maxDef": 92,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Constitution": 1,
			"Weakness Exploit": 1,
			"Critical Element": 2
		},
		"elemRes": [
			2,
			2,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Braces S",
		"place": 2,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Recovery Up": 1,
			"Constitution": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kamura Obi",
		"place": 3,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			1,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Belt",
		"place": 3,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Up": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Belt",
		"place": 3,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Coil",
		"place": 3,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Sleep Resistance": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Defense Boost": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Constitution": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Coil",
		"place": 3,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Attack": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Coil",
		"place": 3,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Focus": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Folia",
		"place": 3,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Resistance": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Elytra",
		"place": 3,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Elytra",
		"place": 3,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Sash",
		"place": 3,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Ballistics": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Coil",
		"place": 3,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Tremor Resistance": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Coil",
		"place": 3,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Diversion": 1
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Coil",
		"place": 3,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Paralysis Attack": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stamina Thief": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Attack": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Speed": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Attack": 2
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Focus": 1,
			"Slugger": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Heroics": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Power Prolonger": 1
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Folia",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Botanist": 1,
			"Recovery Speed": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Bowels",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Dragon Resistance": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Folia",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Fire Attack": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Steadiness": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Uroktor Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Fire Resistance": 1
		},
		"elemRes": [
			4,
			-2,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Belt",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Element": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Attack": 2
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Basarios Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Sharpening": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Bombardier": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rathian Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Up": 1,
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Barioth Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tobi-Kadachi Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Attack": 2
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Sleep Resistance": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Elytra",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 2
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Elytra",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 2
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Coil",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Partbreaker": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Tassets (V)",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Obi",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Tassets (H)",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Obi",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Blight Resistance": 1
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Tassets",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Counterstrike": 2
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Extender": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Coil",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Free Meal": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Windproof": 1
		},
		"elemRes": [
			4,
			0,
			-2,
			0,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Latent Power": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Punishing Draw": 1,
			"Resentment": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Power Prolonger": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Earplugs": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stamina Surge": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kamura Obi S",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Wirebug Whisperer": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Belt S",
		"place": 3,
		"maxDef": 68,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Recovery Up": 1,
			"Hunger Resistance": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Belt S",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Botanist": 1,
			"Guard": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Coil S",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Stun Resistance": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Coil S",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Water Attack": 2,
			"Critical Eye": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Coil S",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Focus": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Elytra S",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Weakness Exploit": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Elytra S",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Weakness Exploit": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Coil S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Paralysis Attack": 1,
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Coil S",
		"place": 3,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Coil S",
		"place": 3,
		"maxDef": 74,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Sleep Resistance": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Coil S",
		"place": 3,
		"maxDef": 76,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Stamina Thief": 1,
			"Maximum Might": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Coil S",
		"place": 3,
		"maxDef": 76,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Ammo Up": 1,
			"Poison Attack": 2
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Coil S",
		"place": 3,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Counterstrike": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Coil S",
		"place": 3,
		"maxDef": 74,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Constitution": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Coil S",
		"place": 3,
		"maxDef": 76,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Coil S",
		"place": 3,
		"maxDef": 76,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Focus": 1,
			"Slugger": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Coil S",
		"place": 3,
		"maxDef": 78,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Heroics": 2
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Coil S",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Power Prolonger": 2
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Folia S",
		"place": 3,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Recovery Up": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Coil S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Tremor Resistance": 2
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Coil S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Diversion": 1
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Coil S",
		"place": 3,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Bludgeoner": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Coil S",
		"place": 3,
		"maxDef": 78,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Marathon Runner": 1,
			"Peak Performance": 2
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Coil S",
		"place": 3,
		"maxDef": 80,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Guard": 2,
			"Defense Boost": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Coil S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Item Prolonger": 1,
			"Maximum Might": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Coil S",
		"place": 3,
		"maxDef": 80,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Spare Shot": 1,
			"Poison Attack": 2
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Coil",
		"place": 3,
		"maxDef": 78,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard Up": 1,
			"Power Prolonger": 1,
			"Offensive Guard": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Coil S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Sharpening": 2,
			"Defense Boost": 2
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Rathian Coil S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Recovery Up": 2,
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Chrome Metal Coil",
		"place": 3,
		"maxDef": 66,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Dober Coil",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Sash S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Ballistics": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Folia S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Botanist": 1,
			"Recovery Speed": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Bowels S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Protective Polish": 1,
			"Maximum Might": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Folia S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Fire Attack": 3
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Coil S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Coil S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Sleep Resistance": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Tassets (V) S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Free Meal": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Obi S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Free Meal": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Tassets (H) S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Agitator": 2,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Obi S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Agitator": 2,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Uroktor Coil S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Fire Attack": 2
		},
		"elemRes": [
			4,
			-2,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Belt S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Element": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Coil S",
		"place": 3,
		"maxDef": 78,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Sleep Attack": 1,
			"Bombardier": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Barioth Coil S",
		"place": 3,
		"maxDef": 78,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			-3,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tobi-Kadachi Coil S",
		"place": 3,
		"maxDef": 78,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Mind's Eye": 2
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Coil S",
		"place": 3,
		"maxDef": 80,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Coil S",
		"place": 3,
		"maxDef": 80,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Evade Extender": 2,
			"Critical Eye": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Coil S",
		"place": 3,
		"maxDef": 80,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Bubbly Dance": 1,
			"Free Meal": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Coil S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Windproof": 1
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Coil S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Latent Power": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Elytra S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 3
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Elytra S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 3
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Coil S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Partbreaker": 2
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Coil S",
		"place": 3,
		"maxDef": 82,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Good Luck": 1
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Tassets S",
		"place": 3,
		"maxDef": 84,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Coil S",
		"place": 3,
		"maxDef": 84,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Punishing Draw": 1,
			"Resentment": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Coil S",
		"place": 3,
		"maxDef": 84,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Power Prolonger": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Coil S",
		"place": 3,
		"maxDef": 84,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Earplugs": 2
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Coil S",
		"place": 3,
		"maxDef": 84,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard": 1,
			"Stamina Surge": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rakna Coil",
		"place": 3,
		"maxDef": 86,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Spread Up": 1
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Golden Obi",
		"place": 3,
		"maxDef": 90,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Heroics": 1,
			"Critical Boost": 1,
			"Maximum Might": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Damascus Coil",
		"place": 3,
		"maxDef": 88,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Earplugs": 1,
			"Handicraft": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Cocoon",
		"place": 3,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Kushala Blessing": 1,
			"Recovery Speed": 1,
			"Handicraft": 1,
			"Pierce Up": 1
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Mizuha Sash",
		"place": 3,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Chameleos Blessing": 1,
			"Poison Attack": 1,
			"Peak Performance": 2
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Coil",
		"place": 3,
		"maxDef": 94,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Teostra Blessing": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Coil",
		"place": 3,
		"maxDef": 92,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Load Shells": 1,
			"Guard": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Fauld",
		"place": 3,
		"maxDef": 86,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Power Prolonger": 1,
			"Evade Window": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Fauld",
		"place": 3,
		"maxDef": 96,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Guard": 1,
			"Artillery": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Coil",
		"place": 3,
		"maxDef": 100,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Resuscitate": 1,
			"Resentment": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Kamura Legacy Obi",
		"place": 3,
		"maxDef": 136,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Wirebug Whisperer": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Belt X",
		"place": 3,
		"maxDef": 136,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Recovery Up": 2,
			"Hunger Resistance": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Belt X",
		"place": 3,
		"maxDef": 138,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Guard": 2,
			"Flinch Free": 1,
			"Defense Boost": 2
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Coil X",
		"place": 3,
		"maxDef": 138,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Stun Resistance": 2,
			"Handicraft": 1,
			"Item Prolonger": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Coil X",
		"place": 3,
		"maxDef": 138,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Water Attack": 3,
			"Critical Eye": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Coil X",
		"place": 3,
		"maxDef": 138,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Focus": 1,
			"Partbreaker": 2
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Coil X",
		"place": 3,
		"maxDef": 146,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Tremor Resistance": 2,
			"Load Shells": 1,
			"Special Ammo Boost": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Coil X",
		"place": 3,
		"maxDef": 146,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Diversion": 1,
			"Resentment": 1
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Coil X",
		"place": 3,
		"maxDef": 140,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Paralysis Attack": 2,
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Hornetaur Tassets",
		"place": 3,
		"maxDef": 142,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 2,
			"Dragon Resistance": 3
		},
		"elemRes": [
			-1,
			-1,
			-1,
			-1,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vespoid Tassets",
		"place": 3,
		"maxDef": 140,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Paralysis Resistance": 1
		},
		"elemRes": [
			-2,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Velociprey Tassets",
		"place": 3,
		"maxDef": 142,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Capture Master": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Coil X",
		"place": 3,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Constitution": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Coil X",
		"place": 3,
		"maxDef": 142,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Sleep Resistance": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Coil X",
		"place": 3,
		"maxDef": 142,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Stamina Thief": 1,
			"Maximum Might": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Ammo Up": 2,
			"Poison Attack": 2
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Coil X",
		"place": 3,
		"maxDef": 142,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Counterstrike": 1,
			"Defense Boost": 3,
			"Speed Eating": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Coil X",
		"place": 3,
		"maxDef": 142,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Constitution": 3
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Coil X",
		"place": 3,
		"maxDef": 150,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Earplugs": 2
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Critical Element": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Coil X",
		"place": 3,
		"maxDef": 148,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Marathon Runner": 1,
			"Peak Performance": 2
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Coil X",
		"place": 3,
		"maxDef": 150,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Guard": 3,
			"Defense Boost": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hermitaur Coil",
		"place": 3,
		"maxDef": 150,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Tune-Up": 1,
			"Handicraft": 1,
			"Quick Sheathe": 1
		},
		"elemRes": [
			-5,
			1,
			-3,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Coil X",
		"place": 3,
		"maxDef": 146,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Heroics": 2,
			"Evade Extender": 2
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Coil X",
		"place": 3,
		"maxDef": 142,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Power Prolonger": 2,
			"Attack Boost": 1
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Elytra X",
		"place": 3,
		"maxDef": 146,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Weakness Exploit": 2,
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Elytra X",
		"place": 3,
		"maxDef": 146,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Weakness Exploit": 2,
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Edel Folia X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Recovery Up": 1,
			"Wide-Range": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Sash X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Ballistics": 1,
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Folia X",
		"place": 3,
		"maxDef": 140,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Botanist": 1,
			"Recovery Speed": 1,
			"Stamina Surge": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Five Element Obi",
		"place": 3,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Blight Resistance": 2,
			"Master Mounter": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			3
		]
	} as ArmorPiece,
	{
		"name": "Squire's Belt",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Weakness Exploit": 1,
			"Critical Boost": 1,
			"Offensive Guard": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Yukumo Sky Obi",
		"place": 3,
		"maxDef": 140,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Evade Window": 1,
			"Earplugs": 1
		},
		"elemRes": [
			0,
			0,
			2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Focus": 1,
			"Slugger": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Item Prolonger": 1,
			"Maximum Might": 2,
			"Speed Eating": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Orangaten Coil",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Blast Attack": 2,
			"Handicraft": 2,
			"Spread Up": 2
		},
		"elemRes": [
			2,
			-4,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei-Pukei Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Spare Shot": 1,
			"Poison Attack": 2
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Guard Up": 1,
			"Power Prolonger": 1,
			"Offensive Guard": 2
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Coil X",
		"place": 3,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Speed Sharpening": 2,
			"Defense Boost": 3,
			"Latent Power": 1,
			"Reload Speed": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Sleep Attack": 1,
			"Bombardier": 1,
			"Ammo Up": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Auroracanth Coil",
		"place": 3,
		"maxDef": 152,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Master's Touch": 1,
			"Ice Attack": 2
		},
		"elemRes": [
			-3,
			1,
			-1,
			3,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rathian Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Recovery Up": 2,
			"Wide-Range": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Tobi-Kadachi Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Mind's Eye": 2,
			"Critical Element": 1,
			"Pierce Up": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Coil X",
		"place": 3,
		"maxDef": 146,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dober Coil X",
		"place": 3,
		"maxDef": 148,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Attack Boost": 2,
			"Marathon Runner": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vaik Coil X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1,
			"Recovery Speed": 2,
			"Razor Sharp": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Folia X",
		"place": 3,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Fire Attack": 3,
			"Flinch Free": 1,
			"Critical Element": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Bowels X",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Protective Polish": 1,
			"Maximum Might": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Coil X",
		"place": 3,
		"maxDef": 148,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Sleep Resistance": 1,
			"Water Attack": 2,
			"Resuscitate": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Elytra X",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 3,
			"Critical Eye": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Elytra X",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 3,
			"Critical Eye": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Artillery Corps Tassets",
		"place": 3,
		"maxDef": 150,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Ammo Up": 2,
			"Reload Speed": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Guild Bard Coil",
		"place": 3,
		"maxDef": 148,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Good Luck": 1,
			"Horn Maestro": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Scholar's Skirt",
		"place": 3,
		"maxDef": 148,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Good Luck": 1,
			"Horn Maestro": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guardian Coil",
		"place": 3,
		"maxDef": 152,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Diversion": 1,
			"Speed Sharpening": 1,
			"Blight Resistance": 2
		},
		"elemRes": [
			2,
			0,
			0,
			2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Brigade Coil X",
		"place": 3,
		"maxDef": 150,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Good Luck": 2
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Barioth Coil X",
		"place": 3,
		"maxDef": 152,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Draw": 1,
			"Critical Eye": 3,
			"Partbreaker": 1
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Sinister Demon Tassets",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Earplugs": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Coil X",
		"place": 3,
		"maxDef": 152,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Evade Extender": 2,
			"Critical Eye": 2,
			"Flinch Free": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Coil X",
		"place": 3,
		"maxDef": 150,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Punishing Draw": 1,
			"Resentment": 2,
			"Quick Sheathe": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Golm Faulds",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Spiribird's Call": 1,
			"Focus": 1,
			"Maximum Might": 2
		},
		"elemRes": [
			-1,
			3,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Ceanataur Coil",
		"place": 3,
		"maxDef": 152,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Grinder (S)": 1,
			"Handicraft": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			-3,
			1,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Almudron Coil X",
		"place": 3,
		"maxDef": 152,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Evade Window": 2,
			"Power Prolonger": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Magmadron Coil",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			3,
			0
		],
		"skills": {
			"Resuscitate": 1,
			"Guard Up": 1
		},
		"elemRes": [
			5,
			-5,
			0,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rakna Coil X",
		"place": 3,
		"maxDef": 152,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Spread Up": 1,
			"Spare Shot": 1,
			"Tune-Up": 1
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Pyre-Kadaki Coil",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Peak Performance": 2,
			"Blast Attack": 2
		},
		"elemRes": [
			2,
			-4,
			2,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Chrome Metal Coil X",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {
			"Flinch Free": 1
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Snowshear Coil",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Tremor Resistance": 2,
			"Stamina Thief": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			0,
			0,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barbania Belt",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Weakness Exploit": 1,
			"Counterstrike": 1,
			"Good Luck": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Tassets (V)",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Free Meal": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Obi (Light)",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1,
			"Free Meal": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Tassets (H)",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Agitator": 2,
			"Wirebug Whisperer": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Obi (Spring)",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Agitator": 2,
			"Wirebug Whisperer": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hoplite's Belt",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1,
			"Quick Sheathe": 1,
			"Offensive Guard": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Hawkcoil",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Speed Eating": 2,
			"Constitution": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lecturer's Skirt",
		"place": 3,
		"maxDef": 154,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Speed Eating": 2,
			"Constitution": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dignified Cuisse",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Focus": 1,
			"Evade Window": 2,
			"Razor Sharp": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Uroktor Coil X",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Guard Up": 1,
			"Special Ammo Boost": 1,
			"Evade Window": 1
		},
		"elemRes": [
			4,
			-2,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Belt X",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Critical Element": 2,
			"Poison Resistance": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Coil X",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Bubbly Dance": 1,
			"Free Meal": 1,
			"Constitution": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Coil X",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Windproof": 3,
			"Critical Boost": 1
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Coil X",
		"place": 3,
		"maxDef": 160,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Critical Element": 1,
			"Thunder Attack": 3
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Lunagaron Coil",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Latent Power": 2,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			-4,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Astalos Coil",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Power Prolonger": 3,
			"Speed Sharpening": 2
		},
		"elemRes": [
			0,
			-1,
			4,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Espinas Bowels",
		"place": 3,
		"maxDef": 160,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Agitator": 2,
			"Protective Polish": 1
		},
		"elemRes": [
			3,
			-1,
			2,
			-3,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Gore Coil",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Coalescence": 1,
			"Agitator": 1
		},
		"elemRes": [
			-2,
			3,
			-1,
			2,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Regios Coil",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Wall Runner (Boost)": 1,
			"Wall Runner": 2
		},
		"elemRes": [
			4,
			0,
			-3,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Coil X",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Earplugs": 2,
			"Peak Performance": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Coil X",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Heroics": 1,
			"Stamina Surge": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Damascus Coil X",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Earplugs": 1,
			"Handicraft": 1,
			"Pierce Up": 1,
			"Blight Resistance": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Jelly Coil X",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Partbreaker": 2,
			"Charge Master": 2
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Professor's Bottoms",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Tremor Resistance": 3,
			"Flinch Free": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Charité Skirt",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Tremor Resistance": 3,
			"Flinch Free": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Scholarly Sash",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Quick Sheathe": 3,
			"Free Meal": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Commission Belt",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Mushroomancer": 2,
			"Recovery Speed": 1
		},
		"elemRes": [
			2,
			2,
			2,
			2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sailor Skirt",
		"place": 3,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Protective Polish": 3,
			"Wirebug Whisperer": 1,
			"Ballistics": 3
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guild Palace Coil",
		"place": 3,
		"maxDef": 160,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Heroics": 2,
			"Offensive Guard": 1
		},
		"elemRes": [
			1,
			2,
			2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Cocoon X",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Kushala Blessing": 1,
			"Agitator": 3
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Grand Mizuha Sash",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Chameleos Blessing": 1,
			"Peak Performance": 2,
			"Foray": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Coil X",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Teostra Blessing": 2,
			"Critical Eye": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Malzeno Coil",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Blood Rite": 2,
			"Partbreaker": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-1,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Arc Coil",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Coalescence": 1,
			"Razor Sharp": 2,
			"Spare Shot": 2
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Storge Coil",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Coalescence": 1,
			"Razor Sharp": 2,
			"Spare Shot": 2
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Grand God's Peer Belt",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Heroics": 1,
			"Critical Boost": 1,
			"Maximum Might": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Coil X",
		"place": 3,
		"maxDef": 160,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Load Shells": 2,
			"Guard": 1,
			"Razor Sharp": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Outpost HQ Belt",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Punishing Draw": 3,
			"Quick Sheathe": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Archfiend Armor Ura",
		"place": 3,
		"maxDef": 166,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Weakness Exploit": 1,
			"Burst": 2
		},
		"elemRes": [
			0,
			3,
			-2,
			3,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Pure Fauld",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Power Prolonger": 1,
			"Evade Window": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Pure Fauld",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Guard": 1,
			"Artillery": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Divine Ire Obi",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Burst": 1,
			"Critical Element": 2,
			"Razor Sharp": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Coil - Eclipse",
		"place": 3,
		"maxDef": 164,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Resuscitate": 1,
			"Resentment": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Sinister Grudge Tassets",
		"place": 3,
		"maxDef": 164,
		"slotSizes": [
			4,
			2,
			1
		],
		"skills": {
			"Mail of Hellfire": 1,
			"Coalescence": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Pride Coil",
		"place": 3,
		"maxDef": 163,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Latent Power": 3,
			"Stamina Surge": 1,
			"Earplugs": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Golden Lunecoil",
		"place": 3,
		"maxDef": 160,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Status Trigger": 1,
			"Foray": 1,
			"Evade Window": 2
		},
		"elemRes": [
			3,
			-3,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Silver Solcoil",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Element Exploit": 1,
			"Redirection": 1,
			"Constitution": 3
		},
		"elemRes": [
			4,
			-4,
			-3,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Lambent Sash",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Sneak Attack": 1,
			"Handicraft": 2,
			"Spread Up": 2
		},
		"elemRes": [
			3,
			3,
			0,
			-5,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Flaming Espinas Bowels",
		"place": 3,
		"maxDef": 162,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Charge Master": 2,
			"Marathon Runner": 1,
			"Burst": 1
		},
		"elemRes": [
			3,
			-4,
			-1,
			2,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Onmyo Ateobi",
		"place": 3,
		"maxDef": 160,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Embolden": 1,
			"Agitator": 3,
			"Adrenaline Rush": 1
		},
		"elemRes": [
			2,
			0,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Risen Mizuha Sash",
		"place": 3,
		"maxDef": 165,
		"slotSizes": [
			4,
			4,
			0
		],
		"skills": {
			"Wirebug Whisperer": 2,
			"Foray": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Chaotic Faulds",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Strife": 1,
			"Critical Eye": 2,
			"Resentment": 2
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Nephilim Tassets",
		"place": 3,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Strife": 1,
			"Critical Eye": 2,
			"Resentment": 2
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Rimeguard Coil",
		"place": 3,
		"maxDef": 163,
		"slotSizes": [
			3,
			3,
			2
		],
		"skills": {
			"Frostcraft": 1,
			"Focus": 3
		},
		"elemRes": [
			-3,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Risen Kushala Cocoon",
		"place": 3,
		"maxDef": 164,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Kushala Blessing": 2,
			"Attack Boost": 2,
			"Recovery Up": 3
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Risen Kaiser Coil",
		"place": 3,
		"maxDef": 164,
		"slotSizes": [
			4,
			3,
			0
		],
		"skills": {
			"Powder Mantle": 1,
			"Master's Touch": 2,
			"Ballistics": 2
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Coil - Epoch",
		"place": 3,
		"maxDef": 161,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Dragon Conversion": 1,
			"Stamina Surge": 3,
			"Attack Boost": 1
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Guild Cross Coil",
		"place": 3,
		"maxDef": 24,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Botanist": 1,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Tassets",
		"place": 3,
		"maxDef": 36,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Earplugs": 1,
			"Constitution": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Azure Age Obi",
		"place": 3,
		"maxDef": 92,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Water Attack": 2,
			"Critical Element": 1
		},
		"elemRes": [
			2,
			2,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Tassets S",
		"place": 3,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Earplugs": 1,
			"Constitution": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Black Leather Legs",
		"place": 4,
		"maxDef": 80,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Wirebug Whisperer": 2
		},
		"elemRes": [
			2,
			2,
			2,
			2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Kamura Leggings",
		"place": 4,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wall Runner": 1
		},
		"elemRes": [
			1,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Pants",
		"place": 4,
		"maxDef": 67,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Geologist": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Pants",
		"place": 4,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stamina Surge": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Greaves",
		"place": 4,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Speed": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Diversion": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Greaves",
		"place": 4,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Sharpening": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Greaves",
		"place": 4,
		"maxDef": 62,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Muck Resistance": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Roots",
		"place": 4,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Resistance": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Crura",
		"place": 4,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Crura",
		"place": 4,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Poison Resistance": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Sandals",
		"place": 4,
		"maxDef": 64,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Spread Up": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Greaves",
		"place": 4,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Tremor Resistance": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Greaves",
		"place": 4,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Water Resistance": 2
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Boots",
		"place": 4,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recoil Down": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Shinguards",
		"place": 4,
		"maxDef": 66,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Master Mounter": 1
		},
		"elemRes": [
			0,
			0,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Extender": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Fire Attack": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Power Prolonger": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Speed": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Hunger Resistance": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Roots",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recovery Speed": 2
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Heel",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Roots",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Recoil Down": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Greaves",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Ammo Up": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Feet",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Extender": 1
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Maximum Might": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Constitution": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Basarios Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Load Shells": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Rathian Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Free Meal": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Barioth Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Kadachi Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Constitution": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Pants",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Crura",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Crura",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Boots",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Blast Attack": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Greaves (V)",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Hakama",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Greaves (H)",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hakama",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Boots",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Resentment": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Marathon Runner": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Greaves",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Bubbly Dance": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Fire Attack": 1
		},
		"elemRes": [
			4,
			0,
			-2,
			0,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Constitution": 2
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Agitator": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Razor Sharp": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Speed Eating": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Guard": 1,
			"Offensive Guard": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kamura Leggings S",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Wall Runner": 2,
			"Resuscitate": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Pants S",
		"place": 4,
		"maxDef": 68,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Geologist": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Pants S",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Botanist": 1,
			"Stamina Surge": 1
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Greaves S",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Greaves S",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Speed Sharpening": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Greaves S",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Muck Resistance": 2,
			"Focus": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Crura S",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Poison Resistance": 1,
			"Mind's Eye": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Crura S",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Poison Resistance": 1,
			"Mind's Eye": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Boots S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Paralysis Attack": 1,
			"Recoil Down": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Greaves S",
		"place": 4,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Recovery Speed": 1,
			"Constitution": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Greaves S",
		"place": 4,
		"maxDef": 74,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Attack Boost": 1
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Greaves S",
		"place": 4,
		"maxDef": 76,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Greaves S",
		"place": 4,
		"maxDef": 76,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Ammo Up": 1,
			"Evade Extender": 1
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Greaves S",
		"place": 4,
		"maxDef": 74,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Greaves S",
		"place": 4,
		"maxDef": 74,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Jump Master": 1,
			"Critical Eye": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Greaves S",
		"place": 4,
		"maxDef": 76,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Peak Performance": 1,
			"Fire Attack": 2
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Greaves S",
		"place": 4,
		"maxDef": 76,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Focus": 1,
			"Slugger": 1,
			"Recovery Speed": 1
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Greaves S",
		"place": 4,
		"maxDef": 78,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Normal/Rapid Up": 1,
			"Hunger Resistance": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Greaves S",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Critical Eye": 2
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Edel Roots S",
		"place": 4,
		"maxDef": 70,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Poison Resistance": 1
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Greaves S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Pierce Up": 1,
			"Tremor Resistance": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Greaves S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Water Attack": 3
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Shinguards S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Master Mounter": 1
		},
		"elemRes": [
			0,
			0,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Greaves S",
		"place": 4,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Evade Extender": 2
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Greaves S",
		"place": 4,
		"maxDef": 78,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Power Prolonger": 2
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Greaves S",
		"place": 4,
		"maxDef": 80,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Guard": 1,
			"Defense Boost": 1,
			"Offensive Guard": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Greaves S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Maximum Might": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei Greaves S",
		"place": 4,
		"maxDef": 80,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Constitution": 1,
			"Ballistics": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Greaves",
		"place": 4,
		"maxDef": 78,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Guard Up": 2
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Greaves S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Load Shells": 1,
			"Defense Boost": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Rathian Greaves S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Blight Resistance": 1,
			"Free Meal": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Chrome Metal Boots",
		"place": 4,
		"maxDef": 66,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Flinch Free": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Dober Greaves",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Focus": 1,
			"Heroics": 1
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Sandals S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Spread Up": 1,
			"Pierce Up": 1
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Roots S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Recovery Up": 1,
			"Recovery Speed": 2
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Heel S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Protective Polish": 1,
			"Rapid Morph": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Roots S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Recoil Down": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Vaik Greaves S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Ammo Up": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Pants S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Bubbly Dance": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Greaves (V) S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1,
			"Free Meal": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Hakama S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Wide-Range": 1,
			"Free Meal": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi Greaves (H) S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hakama S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Evade Window": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Remobra Feet S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Weakness Exploit": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Greaves S",
		"place": 4,
		"maxDef": 78,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Divine Blessing": 2
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Barioth Greaves S",
		"place": 4,
		"maxDef": 78,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1
		},
		"elemRes": [
			-3,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Kadachi Greaves S",
		"place": 4,
		"maxDef": 78,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Constitution": 1,
			"Critical Eye": 2
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Greaves S",
		"place": 4,
		"maxDef": 80,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Marathon Runner": 2
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Greaves S",
		"place": 4,
		"maxDef": 80,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Evade Window": 2,
			"Critical Eye": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Greaves S",
		"place": 4,
		"maxDef": 80,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Bubbly Dance": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Greaves S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Partbreaker": 1
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Greaves S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Constitution": 2
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Crura S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Dragon Attack": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Crura S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Dragon Attack": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jelly Boots S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Blast Attack": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Brigade Boots S",
		"place": 4,
		"maxDef": 82,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Carving Pro": 1,
			"Botanist": 2
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sinister Greaves S",
		"place": 4,
		"maxDef": 84,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Resentment": 1,
			"Flinch Free": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Greaves S",
		"place": 4,
		"maxDef": 84,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Punishing Draw": 1,
			"Agitator": 3
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Almudron Greaves S",
		"place": 4,
		"maxDef": 84,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Razor Sharp": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Greaves S",
		"place": 4,
		"maxDef": 84,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Speed Eating": 2,
			"Mind's Eye": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Greaves S",
		"place": 4,
		"maxDef": 84,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Guard": 1,
			"Offensive Guard": 1
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rakna Greaves",
		"place": 4,
		"maxDef": 86,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Constitution": 2,
			"Stamina Surge": 2
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Golden Hakama",
		"place": 4,
		"maxDef": 90,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Critical Boost": 2,
			"Latent Power": 1
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Damascus Greaves",
		"place": 4,
		"maxDef": 88,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Handicraft": 2
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Crus",
		"place": 4,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Kushala Blessing": 1,
			"Handicraft": 1,
			"Pierce Up": 1
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Mizuha Gaiters",
		"place": 4,
		"maxDef": 94,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Chameleos Blessing": 1,
			"Evade Window": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Greaves",
		"place": 4,
		"maxDef": 94,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Teostra Blessing": 1,
			"Master's Touch": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Greaves",
		"place": 4,
		"maxDef": 92,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Artillery": 2,
			"Guard": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Foot",
		"place": 4,
		"maxDef": 86,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Slugger": 1,
			"Guard Up": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Foot",
		"place": 4,
		"maxDef": 96,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Evade Window": 1,
			"Marathon Runner": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Greaves",
		"place": 4,
		"maxDef": 100,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Resentment": 1
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Kamura Legacy Leggings",
		"place": 4,
		"maxDef": 136,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wall Runner": 2,
			"Resuscitate": 1,
			"Affinity Sliding": 1
		},
		"elemRes": [
			2,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Leather Trousers X",
		"place": 4,
		"maxDef": 136,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Geologist": 1,
			"Botanist": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Chainmail Pants X",
		"place": 4,
		"maxDef": 138,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Stamina Surge": 1,
			"Guard": 2
		},
		"elemRes": [
			0,
			0,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hunter's Greaves X",
		"place": 4,
		"maxDef": 138,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 1,
			"Attack Boost": 2,
			"Quick Sheathe": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Alloy Greaves X",
		"place": 4,
		"maxDef": 138,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Critical Eye": 2
		},
		"elemRes": [
			-1,
			0,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bone Greaves X",
		"place": 4,
		"maxDef": 138,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Muck Resistance": 2,
			"Focus": 1,
			"Punishing Draw": 1
		},
		"elemRes": [
			0,
			0,
			0,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rhenoplos Greaves X",
		"place": 4,
		"maxDef": 146,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Pierce Up": 1,
			"Tremor Resistance": 1
		},
		"elemRes": [
			2,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Droth Greaves X",
		"place": 4,
		"maxDef": 146,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Water Attack": 3
		},
		"elemRes": [
			-2,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Bnahabra Boots X",
		"place": 4,
		"maxDef": 140,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Recoil Down": 1,
			"Steadiness": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Hornetaur Greaves",
		"place": 4,
		"maxDef": 142,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Resuscitate": 1,
			"Steadiness": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			-1,
			-1,
			-1,
			-1,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vespoid Greaves",
		"place": 4,
		"maxDef": 140,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			-2,
			1,
			1,
			1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Jaggi Shinguards X",
		"place": 4,
		"maxDef": 146,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Master Mounter": 1,
			"Wall Runner": 2
		},
		"elemRes": [
			0,
			0,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Velociprey Greaves",
		"place": 4,
		"maxDef": 142,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Windproof": 2,
			"Stun Resistance": 2
		},
		"elemRes": [
			0,
			0,
			0,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Izuchi Greaves X",
		"place": 4,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Recovery Speed": 1,
			"Constitution": 2,
			"Evade Window": 1
		},
		"elemRes": [
			2,
			-1,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Baggi Greaves X",
		"place": 4,
		"maxDef": 142,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Ice Resistance": 2
		},
		"elemRes": [
			-4,
			-1,
			-1,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kulu-Ya-Ku Greaves X",
		"place": 4,
		"maxDef": 142,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Stun Resistance": 2,
			"Critical Eye": 2
		},
		"elemRes": [
			0,
			-3,
			0,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Wroggi Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Evade Extender": 2
		},
		"elemRes": [
			2,
			-2,
			1,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Arzuros Greaves X",
		"place": 4,
		"maxDef": 142,
		"slotSizes": [
			3,
			2,
			1
		],
		"skills": {
			"Speed Eating": 1
		},
		"elemRes": [
			-2,
			0,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lagombi Greaves X",
		"place": 4,
		"maxDef": 142,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Jump Master": 1,
			"Critical Eye": 1,
			"Master's Touch": 1,
			"Reload Speed": 1
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Volvidon Greaves X",
		"place": 4,
		"maxDef": 150,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 2,
			"Evade Extender": 2
		},
		"elemRes": [
			2,
			-3,
			0,
			-1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Aknosom Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Peak Performance": 1,
			"Fire Attack": 2,
			"Critical Draw": 1
		},
		"elemRes": [
			3,
			-3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ludroth Greaves X",
		"place": 4,
		"maxDef": 148,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Power Prolonger": 2,
			"Focus": 1
		},
		"elemRes": [
			-3,
			4,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barroth Greaves X",
		"place": 4,
		"maxDef": 150,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Guard": 2,
			"Defense Boost": 1,
			"Offensive Guard": 1
		},
		"elemRes": [
			-3,
			-1,
			3,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hermitaur Greaves",
		"place": 4,
		"maxDef": 150,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Tune-Up": 1,
			"Handicraft": 1,
			"Tremor Resistance": 1
		},
		"elemRes": [
			-5,
			1,
			-3,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Tetranadon Greaves x",
		"place": 4,
		"maxDef": 146,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Hunger Resistance": 2,
			"Heroics": 1,
			"Speed Eating": 1
		},
		"elemRes": [
			-1,
			4,
			-2,
			1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Ingot Greaves X",
		"place": 4,
		"maxDef": 142,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Attack Boost": 2,
			"Critical Eye": 2
		},
		"elemRes": [
			-1,
			-1,
			1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Skalda Crura X",
		"place": 4,
		"maxDef": 146,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Poison Resistance": 1,
			"Mind's Eye": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Spio Crura X",
		"place": 4,
		"maxDef": 146,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Poison Resistance": 1,
			"Mind's Eye": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Edel Roots X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Poison Resistance": 1,
			"Speed Eating": 2
		},
		"elemRes": [
			-1,
			3,
			-1,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "S. Studded Sandals X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Spread Up": 1,
			"Pierce Up": 2
		},
		"elemRes": [
			0,
			2,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Melahoa Roots X",
		"place": 4,
		"maxDef": 140,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Recovery Up": 1,
			"Recovery Speed": 2,
			"Stamina Surge": 1
		},
		"elemRes": [
			0,
			1,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Five Element Legwear",
		"place": 4,
		"maxDef": 148,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 2,
			"Hellfire Cloak": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			3
		]
	} as ArmorPiece,
	{
		"name": "Squire's Greaves",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Razor Sharp": 2,
			"Critical Boost": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Yukumo Sky Hakama",
		"place": 4,
		"maxDef": 140,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Evade Window": 1,
			"Recovery Up": 2
		},
		"elemRes": [
			0,
			0,
			2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Khezu Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Focus": 1,
			"Slugger": 2,
			"Recovery Speed": 2
		},
		"elemRes": [
			-4,
			1,
			4,
			2,
			1
		]
	} as ArmorPiece,
	{
		"name": "Bishaten Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Maximum Might": 1,
			"Master's Touch": 1,
			"Speed Eating": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-4,
			2
		]
	} as ArmorPiece,
	{
		"name": "Orangaten Greaves",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Protective Polish": 2,
			"Spread Up": 1
		},
		"elemRes": [
			2,
			-4,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Pukei Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Constitution": 2,
			"Ballistics": 1
		},
		"elemRes": [
			0,
			3,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Jyuratodus Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Guard Up": 2,
			"Resentment": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Basarios Greaves X",
		"place": 4,
		"maxDef": 148,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Load Shells": 1,
			"Defense Boost": 2,
			"Latent Power": 2,
			"Reload Speed": 1
		},
		"elemRes": [
			0,
			-2,
			1,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Somnacanth Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Divine Blessing": 2,
			"Sleep Resistance": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			0,
			1
		]
	} as ArmorPiece,
	{
		"name": "Auroracanth Greaves",
		"place": 4,
		"maxDef": 152,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Critical Element": 1,
			"Agitator": 1,
			"Ice Attack": 2
		},
		"elemRes": [
			-3,
			1,
			-1,
			3,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rathian Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Blight Resistance": 1,
			"Free Meal": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			0,
			-2,
			0,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kadachi Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Constitution": 1,
			"Critical Eye": 2,
			"Critical Element": 1
		},
		"elemRes": [
			0,
			-3,
			3,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Anjanath Greaves X",
		"place": 4,
		"maxDef": 146,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Marathon Runner": 2,
			"Agitator": 2
		},
		"elemRes": [
			3,
			-3,
			-1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dober Greaves X",
		"place": 4,
		"maxDef": 148,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Dragon Attack": 1,
			"Focus": 2,
			"Heroics": 2
		},
		"elemRes": [
			-2,
			0,
			0,
			0,
			4
		]
	} as ArmorPiece,
	{
		"name": "Vaik Greaves X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Ammo Up": 1,
			"Hunger Resistance": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Mosgharl Roots X",
		"place": 4,
		"maxDef": 144,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Tune-Up": 1,
			"Steadiness": 2
		},
		"elemRes": [
			-3,
			1,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Death Stench Heel X",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Protective Polish": 1,
			"Rapid Morph": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			3,
			1,
			1,
			-1,
			0
		]
	} as ArmorPiece,
	{
		"name": "Makluva Pants X",
		"place": 4,
		"maxDef": 148,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Bubbly Dance": 2,
			"Speed Eating": 1,
			"Resuscitate": 1
		},
		"elemRes": [
			1,
			2,
			-2,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Aelucanth Crura X",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Dragon Attack": 1,
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Rhopessa Crura X",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Critical Eye": 2,
			"Dragon Attack": 1,
			"Evade Window": 1
		},
		"elemRes": [
			-2,
			0,
			3,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Artillery Corps Greaves",
		"place": 4,
		"maxDef": 150,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Spare Shot": 3,
			"Special Ammo Boost": 1,
			"Artillery": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Guild Bard Boots",
		"place": 4,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 2,
			"Mushroomancer": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Scholar's Socks",
		"place": 4,
		"maxDef": 148,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Divine Blessing": 2,
			"Mushroomancer": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guardian Boots",
		"place": 4,
		"maxDef": 152,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Guard": 2,
			"Earplugs": 1
		},
		"elemRes": [
			2,
			0,
			0,
			2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Brigade Boots X",
		"place": 4,
		"maxDef": 150,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Carving Pro": 1,
			"Botanist": 2,
			"Marathon Runner": 2
		},
		"elemRes": [
			1,
			0,
			2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Barioth Greaves X",
		"place": 4,
		"maxDef": 152,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 1,
			"Partbreaker": 1,
			"Ice Attack": 2
		},
		"elemRes": [
			-5,
			0,
			-1,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Sinister Demon Greaves",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Hellfire Cloak": 1,
			"Resentment": 2,
			"Flinch Free": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Nargacuga Greaves X",
		"place": 4,
		"maxDef": 152,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Evade Window": 2,
			"Critical Eye": 2,
			"Constitution": 1
		},
		"elemRes": [
			-2,
			1,
			-3,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Goss Harag Greaves X",
		"place": 4,
		"maxDef": 150,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Punishing Draw": 1,
			"Agitator": 3,
			"Ballistics": 1
		},
		"elemRes": [
			-4,
			1,
			-1,
			4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Golm Greaves",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Charge Master": 1,
			"Slugger": 2,
			"Stamina Thief": 2
		},
		"elemRes": [
			-1,
			3,
			-2,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Ceanataur Greaves",
		"place": 4,
		"maxDef": 152,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Critical Eye": 1,
			"Marathon Runner": 1,
			"Handicraft": 2,
			"Pierce Up": 2
		},
		"elemRes": [
			-3,
			1,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Almudron Greaves X",
		"place": 4,
		"maxDef": 152,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Razor Sharp": 1,
			"Evade Window": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			-4,
			3,
			3,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Magmadron Greaves",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			3,
			3,
			0
		],
		"skills": {
			"Resuscitate": 1,
			"Resentment": 1
		},
		"elemRes": [
			5,
			-5,
			0,
			-4,
			0
		]
	} as ArmorPiece,
	{
		"name": "Rakna Greaves X",
		"place": 4,
		"maxDef": 152,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Constitution": 3,
			"Stamina Surge": 2
		},
		"elemRes": [
			4,
			-2,
			-1,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Pyre-Kadaki Greaves",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			4,
			2,
			1
		],
		"skills": {
			"Peak Performance": 1,
			"Blast Resistance": 2
		},
		"elemRes": [
			2,
			-4,
			2,
			-2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Chrome Metal Boots X",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Flinch Free": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Snowshear Greaves",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Grinder (S)": 1,
			"Latent Power": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			0,
			0,
			0,
			3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Barbania Boots",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Partbreaker": 1,
			"Counterstrike": 1,
			"Good Luck": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Greaves (V)",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wide-Range": 2,
			"Free Meal": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Medium's Hakama (Light)",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wide-Range": 2,
			"Free Meal": 1,
			"Good Luck": 1
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Utsushi True Greaves (H)",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Evade Window": 1,
			"Agitator": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Channeler's Hakama (Spring)",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Evade Window": 1,
			"Agitator": 1,
			"Attack Boost": 2
		},
		"elemRes": [
			3,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Hoplite's Greaves",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Guard Up": 1,
			"Quick Sheathe": 2,
			"Razor Sharp": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Hawkboots",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Capture Master": 1,
			"Good Luck": 1,
			"Weakness Exploit": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Lecturer's Boots",
		"place": 4,
		"maxDef": 154,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Capture Master": 1,
			"Good Luck": 1,
			"Weakness Exploit": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Dignified Greaves",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Rapid Morph": 1,
			"Power Prolonger": 1,
			"Razor Sharp": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Remobra Feet X",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Weakness Exploit": 1,
			"Poison Resistance": 2
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			3
		]
	} as ArmorPiece,
	{
		"name": "Mizutsune Greaves X",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			3,
			1,
			1
		],
		"skills": {
			"Bubbly Dance": 1,
			"Evade Window": 1,
			"Constitution": 1
		},
		"elemRes": [
			0,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Rathalos Greaves X",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Partbreaker": 1,
			"Earplugs": 2
		},
		"elemRes": [
			3,
			1,
			-2,
			1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Zinogre Greaves X",
		"place": 4,
		"maxDef": 160,
		"slotSizes": [
			1,
			0,
			0
		],
		"skills": {
			"Latent Power": 1,
			"Constitution": 3,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			0,
			-1,
			4,
			-4,
			1
		]
	} as ArmorPiece,
	{
		"name": "Lunagaron Greaves",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			2,
			1,
			1
		],
		"skills": {
			"Latent Power": 3,
			"Redirection": 1
		},
		"elemRes": [
			-4,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Astalos Greaves",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			1,
			1,
			0
		],
		"skills": {
			"Razor Sharp": 3,
			"Spare Shot": 3,
			"Thunder Attack": 3
		},
		"elemRes": [
			0,
			-1,
			4,
			-3,
			0
		]
	} as ArmorPiece,
	{
		"name": "Espinas Heel",
		"place": 4,
		"maxDef": 160,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Foray": 1,
			"Flinch Free": 2,
			"Poison Attack": 3
		},
		"elemRes": [
			3,
			-1,
			2,
			-3,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Gore Greaves",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Agitator": 3,
			"Speed Eating": 1
		},
		"elemRes": [
			-2,
			3,
			-1,
			2,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Regios Greaves",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Bladescale Hone": 1,
			"Evade Extender": 2
		},
		"elemRes": [
			4,
			0,
			-3,
			-2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Tigrex Greaves X",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Speed Eating": 2,
			"Mind's Eye": 2,
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			2,
			0,
			-3,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Diablos Greaves X",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Heroics": 2,
			"Tremor Resistance": 2
		},
		"elemRes": [
			3,
			-1,
			-1,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Damascus Greaves X",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Handicraft": 2,
			"Ammo Up": 2,
			"Blight Resistance": 1
		},
		"elemRes": [
			-1,
			2,
			-3,
			1,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Jelly Boots X",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Blast Attack": 1,
			"Charge Master": 1,
			"Slugger": 1
		},
		"elemRes": [
			1,
			3,
			0,
			2,
			0
		]
	} as ArmorPiece,
	{
		"name": "Professor's Boots",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Marathon Runner": 3,
			"Hunger Resistance": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Charité Boots",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Marathon Runner": 3,
			"Hunger Resistance": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Scholarly Boots",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Item Prolonger": 3,
			"Wide-Range": 2
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Commission Trousers",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Constitution": 2,
			"Good Luck": 1
		},
		"elemRes": [
			2,
			2,
			2,
			2,
			2
		]
	} as ArmorPiece,
	{
		"name": "Sailor Socks",
		"place": 4,
		"maxDef": 156,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Marathon Runner": 3,
			"Evade Window": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Guild Palace Greaves",
		"place": 4,
		"maxDef": 160,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Heroics": 2,
			"Coalescence": 2
		},
		"elemRes": [
			1,
			2,
			2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Kushala Crus X",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Kushala Blessing": 1,
			"Handicraft": 1,
			"Normal/Rapid Up": 1
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Grand Mizuha Leg Wrap",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Chameleos Blessing": 2,
			"Peak Performance": 1,
			"Poison Attack": 1
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Kaiser Greaves X",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Teostra Blessing": 1,
			"Master's Touch": 1,
			"Critical Boost": 1
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Malzeno Greaves",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Blight Resistance": 2,
			"Weakness Exploit": 1,
			"Attack Boost": 1
		},
		"elemRes": [
			-2,
			2,
			2,
			-1,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Arc Greaves",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Bloodlust": 1,
			"Razor Sharp": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Storge Greaves",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			3,
			2,
			0
		],
		"skills": {
			"Bloodlust": 1,
			"Razor Sharp": 1,
			"Spare Shot": 1
		},
		"elemRes": [
			-2,
			2,
			-1,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Grand God's Peer Feet",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			1,
			1,
			1
		],
		"skills": {
			"Critical Boost": 2,
			"Latent Power": 1,
			"Flinch Free": 2
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Bazelgeuse Greaves X",
		"place": 4,
		"maxDef": 160,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Artillery": 2,
			"Guard": 1,
			"Agitator": 1
		},
		"elemRes": [
			3,
			1,
			-4,
			-2,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Outpost HQ Greaves",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Critical Draw": 2,
			"Quick Sheathe": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Archfiend Armor Sceros",
		"place": 4,
		"maxDef": 166,
		"slotSizes": [
			3,
			2,
			2
		],
		"skills": {
			"Dereliction": 1,
			"Resentment": 1
		},
		"elemRes": [
			0,
			3,
			-2,
			3,
			-5
		]
	} as ArmorPiece,
	{
		"name": "Ibushi's Pure Foot",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Wind Alignment": 1,
			"Slugger": 1,
			"Guard Up": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			-1,
			0,
			0,
			0,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Narwa's Pure Foot",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			2,
			0,
			0
		],
		"skills": {
			"Thunder Alignment": 1,
			"Evade Window": 1,
			"Marathon Runner": 1,
			"Stormsoul": 1
		},
		"elemRes": [
			2,
			1,
			4,
			-3,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Holy Ire Hakama",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Furious": 1,
			"Evade Extender": 2
		},
		"elemRes": [
			2,
			1,
			3,
			-5,
			2
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Greaves - Eclipse",
		"place": 4,
		"maxDef": 164,
		"slotSizes": [
			3,
			1,
			0
		],
		"skills": {
			"Dragonheart": 1,
			"Resentment": 3
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Sinister Grudge Greaves",
		"place": 4,
		"maxDef": 164,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Hellfire Cloak": 2,
			"Counterstrike": 2,
			"Wirebug Whisperer": 1
		},
		"elemRes": [
			3,
			-3,
			-2,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Pride Greaves",
		"place": 4,
		"maxDef": 163,
		"slotSizes": [
			2,
			2,
			0
		],
		"skills": {
			"Guts": 1,
			"Stamina Surge": 2,
			"Stamina Thief": 3
		},
		"elemRes": [
			3,
			0,
			-2,
			-3,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Golden Lunegreaves",
		"place": 4,
		"maxDef": 160,
		"slotSizes": [
			4,
			2,
			0
		],
		"skills": {
			"Defiance": 3,
			"Peak Performance": 2,
			"Recovery Up": 2
		},
		"elemRes": [
			3,
			-3,
			-4,
			-1,
			2
		]
	} as ArmorPiece,
	{
		"name": "Silver Solgreaves",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			2,
			2,
			1
		],
		"skills": {
			"Critical Boost": 1,
			"Redirection": 1,
			"Maximum Might": 2
		},
		"elemRes": [
			4,
			-4,
			-3,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Lambent Gaiters",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Sneak Attack": 1,
			"Adrenaline Rush": 1,
			"Handicraft": 2,
			"Ammo Up": 2
		},
		"elemRes": [
			3,
			3,
			0,
			-5,
			-2
		]
	} as ArmorPiece,
	{
		"name": "Flaming Espinas Heel",
		"place": 4,
		"maxDef": 162,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Intrepid Heart": 1,
			"Attack Boost": 1,
			"Burst": 2
		},
		"elemRes": [
			3,
			-4,
			-1,
			2,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Onmyo Sashiko",
		"place": 4,
		"maxDef": 160,
		"slotSizes": [
			4,
			0,
			0
		],
		"skills": {
			"Flinch Free": 3,
			"Weakness Exploit": 2,
			"Offensive Guard": 2
		},
		"elemRes": [
			2,
			0,
			-1,
			-3,
			1
		]
	} as ArmorPiece,
	{
		"name": "Risen Mizuha Gaiters",
		"place": 4,
		"maxDef": 165,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Buildup Boost": 1,
			"Chameleos Blessing": 1,
			"Evade Window": 2
		},
		"elemRes": [
			-5,
			1,
			0,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Chaotic Greaves",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Berserk": 1,
			"Bloodlust": 1,
			"Coalescence": 3
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Nephilim Greaves",
		"place": 4,
		"maxDef": 158,
		"slotSizes": [
			3,
			0,
			0
		],
		"skills": {
			"Berserk": 1,
			"Bloodlust": 1,
			"Coalescence": 3
		},
		"elemRes": [
			-4,
			3,
			-2,
			2,
			-4
		]
	} as ArmorPiece,
	{
		"name": "Rimeguard Greaves",
		"place": 4,
		"maxDef": 163,
		"slotSizes": [
			4,
			1,
			0
		],
		"skills": {
			"Ice Attack": 5,
			"Critical Element": 3,
			"Element Exploit": 1
		},
		"elemRes": [
			-3,
			2,
			-1,
			4,
			-1
		]
	} as ArmorPiece,
	{
		"name": "Risen Kushala Crus",
		"place": 4,
		"maxDef": 164,
		"slotSizes": [
			4,
			4,
			0
		],
		"skills": {
			"Wind Mantle": 1,
			"Burst": 1
		},
		"elemRes": [
			-1,
			2,
			-2,
			3,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Risen Kaiser Cuisse",
		"place": 4,
		"maxDef": 164,
		"slotSizes": [
			4,
			1,
			1
		],
		"skills": {
			"Teostra Blessing": 2,
			"Weakness Exploit": 1,
			"Critical Element": 2,
			"Fire Attack": 2
		},
		"elemRes": [
			4,
			-4,
			1,
			-1,
			-3
		]
	} as ArmorPiece,
	{
		"name": "Valstrax Greaves - Epoch",
		"place": 4,
		"maxDef": 161,
		"slotSizes": [
			4,
			3,
			0
		],
		"skills": {
			"Critical Boost": 1,
			"Stun Resistance": 3,
			"Attack Boost": 2
		},
		"elemRes": [
			-2,
			-2,
			-2,
			-2,
			3
		]
	} as ArmorPiece,
	{
		"name": "Guild Cross Boots",
		"place": 4,
		"maxDef": 24,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Geologist": 1,
			"Carving Pro": 1
		},
		"elemRes": [
			0,
			0,
			0,
			0,
			0
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Greaves",
		"place": 4,
		"maxDef": 36,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Flinch Free": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece,
	{
		"name": "Azure Age Geta",
		"place": 4,
		"maxDef": 92,
		"slotSizes": [
			2,
			1,
			0
		],
		"skills": {
			"Quick Sheathe": 2,
			"Focus": 1
		},
		"elemRes": [
			2,
			2,
			0,
			0,
			2
		]
	} as ArmorPiece,
	{
		"name": "Black Belt Greaves S",
		"place": 4,
		"maxDef": 72,
		"slotSizes": [
			0,
			0,
			0
		],
		"skills": {
			"Attack Boost": 1,
			"Flinch Free": 1,
			"Recovery Up": 1
		},
		"elemRes": [
			1,
			1,
			1,
			1,
			1
		]
	} as ArmorPiece
]