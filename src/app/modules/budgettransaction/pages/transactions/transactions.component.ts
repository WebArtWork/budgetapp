import { Component } from "@angular/core";
import { FormService } from "src/app/modules/form/form.service";
import { BudgettransactionService } from "../../services/budgettransaction.service";
import { Budgettransaction } from '../../interfaces/budgettransaction.interface';
import { AlertService, CoreService } from "wacom";
import { TranslateService } from "src/app/modules/translate/translate.service";
import { FormInterface } from "src/app/modules/form/interfaces/form.interface";

@Component({
	templateUrl: "./transactions.component.html",
	styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent {
	columns = ["name", "description"];

	rows: Budgettransaction[] = [];
	private _page = 1;
	setRows(page = this._page) {
		this._page = page;
		this._core.afterWhile(
			this,
			() => {
				this._sb.get({ page }).subscribe((rows) => {
					this.rows.splice(0, this.rows.length);
					this.rows.push(...rows);
				});
			},
			250
		);
	}

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
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._sb.setPerPage.bind(this._sb),
		allDocs: false,
		create: () => {
			this._form.modal<Budgettransaction>(this.form, {
				label: "Create",
				click: (created: unknown, close: () => void) => {
					this._sb.create(created as Budgettransaction, {
						alert: this._translate.translate(
							'Budgettransaction.Budgettransaction has been created'
						),
						callback: () => {
							this.setRows();
							close();
						}
					});
				},
			});
		},
		update: (doc: Budgettransaction) => {
			this._form.modal<Budgettransaction>(this.form, [], doc).then((updated: Budgettransaction) => {
				this._core.copy(updated, doc);
				this._sb.update(doc, {
					alert: this._translate.translate(
						'Budgettransaction.Budgettransaction has been updated'
					)
				});
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
							this._sb.delete(doc, {
								name: 'admin',
								alert: this._translate.translate(
									'Budgettransaction.Budgettransaction has been deleted'
								),
								callback: () => {
									this.setRows();
								}
							});
						},
					},
				],
			});
		}
	};

	constructor(
		private _translate: TranslateService,
		private _alert: AlertService,
		private _sb: BudgettransactionService,
		private _form: FormService,
		private _core: CoreService
	) { }
}
