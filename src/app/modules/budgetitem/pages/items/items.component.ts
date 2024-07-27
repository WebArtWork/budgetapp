import { Component } from "@angular/core";
import { FormService } from "src/app/modules/form/form.service";
import {
	BudgetitemService,
	Budgetitem,
} from "../../services/budgetitem.service";
import { AlertService, CoreService } from "wacom";
import { TranslateService } from "src/app/modules/translate/translate.service";
import { FormInterface } from "src/app/modules/form/interfaces/form.interface";

@Component({
	templateUrl: "./items.component.html",
	styleUrls: ["./items.component.scss"],
})
export class ItemsComponent {
	columns = ["name", "description"];

	form: FormInterface = this._form.getForm("items", {
		formId: "items",
		title: "Items",
		components: [
			{
				name: "Text",
				key: "name",
				focused: true,
				fields: [
					{
						name: "Placeholder",
						value: "fill items title",
					},
					{
						name: "Label",
						value: "Title",
					},
				],
			},
			{
				name: "Text",
				key: "description",
				fields: [
					{
						name: "Placeholder",
						value: "fill items description",
					},
					{
						name: "Label",
						value: "Description",
					},
				],
			},
		],
	});

	config = {
		create: () => {
			this._form.modal<Budgetitem>(this.form, {
				label: "Create",
				click: (created: unknown, close: () => void) => {
					this._sb.create(created as Budgetitem);
					close();
				},
			});
		},
		update: (doc: Budgetitem) => {
			this._form
				.modal<Budgetitem>(this.form, [], doc)
				.then((updated: Budgetitem) => {
					this._core.copy(updated, doc);
					this._sb.save(doc);
				});
		},
		delete: (doc: Budgetitem) => {
			this._alert.question({
				text: this._translate.translate(
					"Common.Are you sure you want to delete this cservice?"
				),
				buttons: [
					{
						text: this._translate.translate("Common.No"),
					},
					{
						text: this._translate.translate("Common.Yes"),
						callback: () => {
							this._sb.delete(doc);
						},
					},
				],
			});
		},
	};

	get rows(): Budgetitem[] {
		return this._sb.budgetitems;
	}

	constructor(
		private _sb: BudgetitemService,
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) { }
}
