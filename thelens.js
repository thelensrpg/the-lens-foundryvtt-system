import {thelens} from "./modules/config.js";
import TheLensItemSheet from "./modules/TheLensItemSheet.js";
import TheLensCharacterSheet from "./modules/TheLensCharacterSheet.js";

Hooks.once("init", function() {
	console.log("the-lens | Initializing The Lens TTRPG System...");

	CONFIG.thelens = thelens;

	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("thelens", TheLensItemSheet, {makedefault: true});

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("thelens", TheLensCharacterSheet, {makedefault: true});

});