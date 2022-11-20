export default class TheLensItemSheet extends ItemSheet {
	get template() {
		return `systems/thelens/templates/sheets/${this.item.data.type}-sheet.html`
	}
}