import { Injectable } from '@angular/core';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService
} from 'wacom';
import { Budgettransaction } from "../interfaces/budgettransaction.interface";

@Injectable({
	providedIn: 'root'
})
export class BudgettransactionService extends CrudService<Budgettransaction> {
	budgettransactions: Budgettransaction[] = [];
	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'budgettransaction'
			},
			_http,
			_store,
			_alert,
			_core
		);
		this.get().subscribe((budgettransactions: Budgettransaction[]) =>
			this.budgettransactions.push(...budgettransactions)
		);
	}
}
