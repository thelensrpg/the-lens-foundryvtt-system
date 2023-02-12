export default class TheLensCharacterSheet extends ActorSheet {

	get template() {
		return `systems/thelens/templates/sheets/character-sheet.hbs`
	}

	/*
	getData() {

		const baseData = super.getData();

		let sheetData = {
			owner: this.actor.isOwner,
			editable: this.isEditable,
			actor: baseData.actor,
			data: baseData.actor.data.data,
			config: CONFIG.thelens,
			template: "systems/thelens/templates/sheets/character-sheet.hbs",
			classes: ["thelens", "sheet", "character"]
		};

		console.log(baseData.toString());

		return sheetData;
		
		/* RIP the old way.
		const data = super.getData();

		data.config = CONFIG.thelens;

		return data;
		
	}
	*/
	

	
	static get defaultOptions() {

		return mergeObject(super.defaultOptions, {
			template: "systems/thelens/templates/sheets/character-sheet.hbs",
			classes: ["thelens", "sheet", "character"]
		});
	}
	
}