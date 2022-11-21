import {thelens} from "./module/config.js";
import TheLensItemSheet from "./modules/TheLensItemSheet.js"

Hooks.once("init", function() {
	console.log("the-lens | Initializing The Lens TTRPG System...");

	CONFIG.thelens = thelens;

	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("thelens", TheLensItemSheet, {makeDefault: true });
});