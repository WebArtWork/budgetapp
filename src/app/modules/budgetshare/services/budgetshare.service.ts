import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Budgetshare {
	_id: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class BudgetshareService {
	budgetshares: Budgetshare[] = [];

	_budgetshares: any = {};

	new(): Budgetshare {
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
		this.budgetshares = mongo.get('budgetshare', {}, (arr: any, obj: any) => {
			this._budgetshares = obj;
		});
	}

	create(
		budgetshare: Budgetshare = this.new(),
		callback = (created: Budgetshare) => {},
		text = 'budgetshare has been created.'
	) {
		if (budgetshare._id) {
			this.save(budgetshare);
		} else {
			this.mongo.create('budgetshare', budgetshare, (created: Budgetshare) => {
				callback(created);
				this.alert.show({ text });
			});
		}
	}

	doc(budgetshareId: string): Budgetshare {
		if(!this._budgetshares[budgetshareId]){
			this._budgetshares[budgetshareId] = this.mongo.fetch('budgetshare', {
				query: {
					_id: budgetshareId
				}
			});
		}
		return this._budgetshares[budgetshareId];
	}

	update(
		budgetshare: Budgetshare,
		callback = (created: Budgetshare) => {},
		text = 'budgetshare has been updated.'
	): void {
		this.mongo.afterWhile(budgetshare, ()=> {
			this.save(budgetshare, callback, text);
		});
	}

	save(
		budgetshare: Budgetshare,
		callback = (created: Budgetshare) => {},
		text = 'budgetshare has been updated.'
	): void {
		this.mongo.update('budgetshare', budgetshare, () => {
			if(text) this.alert.show({ text, unique: budgetshare });
		});
	}

	delete(
		budgetshare: Budgetshare,
		callback = (created: Budgetshare) => {},
		text = 'budgetshare has been deleted.'
	): void {
		this.mongo.delete('budgetshare', budgetshare, () => {
			if(text) this.alert.show({ text });
		});
	}
}
