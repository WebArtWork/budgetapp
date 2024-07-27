import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Budgetitem {
	_id: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class BudgetitemService {
	budgetitems: Budgetitem[] = [];

	_budgetitems: any = {};

	new(): Budgetitem {
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
		this.budgetitems = mongo.get('budgetitem', {}, (arr: any, obj: any) => {
			this._budgetitems = obj;
		});
	}

	create(
		budgetitem: Budgetitem = this.new(),
		callback = (created: Budgetitem) => {},
		text = 'budgetitem has been created.'
	) {
		if (budgetitem._id) {
			this.save(budgetitem);
		} else {
			this.mongo.create('budgetitem', budgetitem, (created: Budgetitem) => {
				callback(created);
				this.alert.show({ text });
			});
		}
	}

	doc(budgetitemId: string): Budgetitem {
		if(!this._budgetitems[budgetitemId]){
			this._budgetitems[budgetitemId] = this.mongo.fetch('budgetitem', {
				query: {
					_id: budgetitemId
				}
			});
		}
		return this._budgetitems[budgetitemId];
	}

	update(
		budgetitem: Budgetitem,
		callback = (created: Budgetitem) => {},
		text = 'budgetitem has been updated.'
	): void {
		this.mongo.afterWhile(budgetitem, ()=> {
			this.save(budgetitem, callback, text);
		});
	}

	save(
		budgetitem: Budgetitem,
		callback = (created: Budgetitem) => {},
		text = 'budgetitem has been updated.'
	): void {
		this.mongo.update('budgetitem', budgetitem, () => {
			if(text) this.alert.show({ text, unique: budgetitem });
		});
	}

	delete(
		budgetitem: Budgetitem,
		callback = (created: Budgetitem) => {},
		text = 'budgetitem has been deleted.'
	): void {
		this.mongo.delete('budgetitem', budgetitem, () => {
			if(text) this.alert.show({ text });
		});
	}
}
