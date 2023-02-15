export default class TheLensItemSheet extends ItemSheet {
	
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			width: 530,
			height: 400,
			classes: ["thelens", "sheet", "item"]
		});
	}
	
	get template() {
		return `systems/thelens/templates/sheets/${this.item.data.type}-sheet.hbs`
	}

	getData() {

		const baseData = super.getData();
 
		let sheetData = {
			owner: this.item.isOwner,
			editable: this.isEditable,
			item: baseData.item,
			data: baseData.item.data.data,
			config: CONFIG.thelens
		};

		return sheetData;
		
		/* RIP the old way.
		const data = super.getData();

		data.config = CONFIG.thelens;

		return data;
		*/
	}
}