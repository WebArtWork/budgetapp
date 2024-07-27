import { Component } from "@angular/core";
import { FormService } from "src/app/modules/form/form.service";
import {
	BudgettransactionService,
	Budgettransaction,
} from "../../services/budgettransaction.service";
import { AlertService, CoreService } from "wacom";
import { TranslateService } from "src/app/modules/translate/translate.service";
import { FormInterface } from "src/app/modules/form/interfaces/form.interface";

@Component({
	templateUrl: "./transactions.component.html",
	styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent {
	columns = ["name", "description"];

	form: FormInterface = this._form.getForm("transactions", {
		formId: "transactions",
		title: "Transactions",
		components: [
			{
				name: "Text",
				key: "name",
				focused: true,
				fields: [
					{
						name: "Placeholder",
						value: "fill transactions title",
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
						value: "fill transactions description",
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
			this._form.modal<Budgettransaction>(this.form, {
				label: "Create",
				click: (created: unknown, close: () => void) => {
					this._sb.create(created as Budgettransaction);
					close();
				},
			});
		},
		update: (doc: Budgettransaction) => {
			this._form
				.modal<Budgettransaction>(this.form, [], doc)
				.then((updated: Budgettransaction) => {
					this._core.copy(updated, doc);
					this._sb.save(doc);
				});
		},
		delete: (doc: Budgettransaction) => {
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

	get rows(): Budgettransaction[] {
		return this._sb.budgettransactions;
	}

	constructor(
		private _sb: BudgettransactionService,
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) { }
}
