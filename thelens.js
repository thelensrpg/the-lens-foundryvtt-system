import TheLensItemSheet from "./modules/TheLensItemSheet.js"

Hooks.once("init", function() {
	console.log("the-lens | Initializing The Lens TTRPG System...");

	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("thelens", TheLensItemSheet, {makeDefault: true });
});