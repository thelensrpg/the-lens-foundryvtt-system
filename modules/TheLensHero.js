export default class TheLensHero extends foundry.abstract.DataModel {
	static _enableV10Validation = true;

	get template() {
		return `systems/thelens/templates/sheets/hero-sheet.hbs`
	}

	static get defaultOptions() {

		return mergeObject(super.defaultOptions, {
			template: "systems/thelens/templates/sheets/hero-sheet.hbs",
			classes: ["thelens", "sheet", "hero"]
		});
	}

	getData() {

		const baseData = super.getData();

		return baseData;
	}

	static defineSchema() {
		const fields = foundry.data.fields;

		return {
			biography: new fields.HTMLField(),
			body: new fields.SchemaField({
				value: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				min: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				max: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				strength: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				agility: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				endurance: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				})
			}),
			mind: new fields.SchemaField({
				value: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				min: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				max: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				knowledge: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				wisdom: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				devotion: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				})
			}),
			spirit: new fields.SchemaField({
				value: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				min: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				max: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				presence: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				intuition: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				faith: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				})
			}),
			luck: new fields.SchemaField({
				value: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				min: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				max: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				})
			}),
			void: new fields.SchemaField({
				value: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				min: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				max: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				})
			}),
			favor: new fields.SchemaField({
				value: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				min: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				}),
				max: new fields.NumberField({
					required: true,
					initial: 0,
					integer: true
				})
			})
		};
	}
}