import { Component } from "@angular/core";
import { FormService } from "src/app/modules/form/form.service";
import {
	BudgetshareService,
	Budgetshare,
} from "../../services/budgetshare.service";
import { AlertService, CoreService } from "wacom";
import { TranslateService } from "src/app/modules/translate/translate.service";
import { FormInterface } from "src/app/modules/form/interfaces/form.interface";

@Component({
	templateUrl: "./shares.component.html",
	styleUrls: ["./shares.component.scss"],
})
export class SharesComponent {
	columns = ["name", "description"];

	form: FormInterface = this._form.getForm("shares", {
		formId: "shares",
		title: "Shares",
		components: [
			{
				name: "Text",
				key: "name",
				focused: true,
				fields: [
					{
						name: "Placeholder",
						value: "fill shares title",
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
						value: "fill shares description",
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
			this._form.modal<Budgetshare>(this.form, {
				label: "Create",
				click: (created: unknown, close: () => void) => {
					this._sb.create(created as Budgetshare);
					close();
				},
			});
		},
		update: (doc: Budgetshare) => {
			this._form
				.modal<Budgetshare>(this.form, [], doc)
				.then((updated: Budgetshare) => {
					this._core.copy(updated, doc);
					this._sb.save(doc);
				});
		},
		delete: (doc: Budgetshare) => {
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

	get rows(): Budgetshare[] {
		return this._sb.budgetshares;
	}

	constructor(
		private _sb: BudgetshareService,
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) { }
}
