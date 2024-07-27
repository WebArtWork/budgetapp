import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Budgettransaction {
	_id: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class BudgettransactionService {
	budgettransactions: Budgettransaction[] = [];

	_budgettransactions: any = {};

	new(): Budgettransaction {
		return {
			_id: '',
			name: '',
			description: ''
		}
	}

	constructor(
		private mongo: MongoService,
		private alert: AlertService
	) {
		this.budgettransactions = mongo.get('budgettransaction', {}, (arr: any, obj: any) => {
			this._budgettransactions = obj;
		});
	}

	create(
		budgettransaction: Budgettransaction = this.new(),
		callback = (created: Budgettransaction) => {},
		text = 'budgettransaction has been created.'
	) {
		if (budgettransaction._id) {
			this.save(budgettransaction);
		} else {
			this.mongo.create('budgettransaction', budgettransaction, (created: Budgettransaction) => {
				callback(created);
				this.alert.show({ text });
			});
		}
	}

	doc(budgettransactionId: string): Budgettransaction {
		if(!this._budgettransactions[budgettransactionId]){
			this._budgettransactions[budgettransactionId] = this.mongo.fetch('budgettransaction', {
				query: {
					_id: budgettransactionId
				}
			});
		}
		return this._budgettransactions[budgettransactionId];
	}

	update(
		budgettransaction: Budgettransaction,
		callback = (created: Budgettransaction) => {},
		text = 'budgettransaction has been updated.'
	): void {
		this.mongo.afterWhile(budgettransaction, ()=> {
			this.save(budgettransaction, callback, text);
		});
	}

	save(
		budgettransaction: Budgettransaction,
		callback = (created: Budgettransaction) => {},
		text = 'budgettransaction has been updated.'
	): void {
		this.mongo.update('budgettransaction', budgettransaction, () => {
			if(text) this.alert.show({ text, unique: budgettransaction });
		});
	}

	delete(
		budgettransaction: Budgettransaction,
		callback = (created: Budgettransaction) => {},
		text = 'budgettransaction has been deleted.'
	): void {
		this.mongo.delete('budgettransaction', budgettransaction, () => {
			if(text) this.alert.show({ text });
		});
	}
}
