export default class TheLensItemSheet extends ItemSheet {
	get template() {
		return `systems/thelens/templates/sheets/${this.item.data.type}-sheet.html`
	}

	getData() {
		const data = super.getData();

		data.config = CONFIG.thelens;

		return data;
	}
}