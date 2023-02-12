export default class TheLensItemSheet extends ItemSheet {
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