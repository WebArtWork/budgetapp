import { Component } from "@angular/core";
import { FormService } from "src/app/modules/form/form.service";
import {
	BudgetService,
	Budget,
} from "../../services/budget.service";
import { AlertService, CoreService } from "wacom";
import { TranslateService } from "src/app/modules/translate/translate.service";
import { FormInterface } from "src/app/modules/form/interfaces/form.interface";

@Component({
	templateUrl: "./budgets.component.html",
	styleUrls: ["./budgets.component.scss"],
})
export class BudgetsComponent {
	columns = ["name", "amount", "currency"];

	form: FormInterface = this._form.getForm("budgets", {
		formId: "budgets",
		title: "Budgets",
		components: [
			{
				name: "Number",
				key: "amount",
				fields: [
					{
						name: "Placeholder",
						value: "fill budgets amount",
					},
					{
						name: "Label",
						value: "Amount",
					},
				],
			},
			{
				name: "Text",
				key: "currency",
				fields: [
					{
						name: "Placeholder",
						value: "fill budgets currency",
					},
					{
						name: "Label",
						value: "Currency",
					},
				],
			},
			{
				name: "Text",
				key: "name",
				focused: true,
				fields: [
					{
						name: "Placeholder",
						value: "fill budgets title",
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
						value: "fill budgets description",
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
			this._form.modal<Budget>(this.form, {
				label: "Create",
				click: (created: unknown, close: () => void) => {
					this._sb.create(created as Budget);
					close();
				},
			});
		},
		update: (doc: Budget) => {
			this._form
				.modal<Budget>(this.form, [], doc)
				.then((updated: Budget) => {
					this._core.copy(updated, doc);
					this._sb.save(doc);
				});
		},
		delete: (doc: Budget) => {
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

	get rows(): Budget[] {
		return this._sb.budgets;
	}

	constructor(
		private _sb: BudgetService,
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) { }
}
