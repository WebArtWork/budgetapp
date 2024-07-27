import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Budget {
	_id: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class BudgetService {
	budgets: Budget[] = [];

	_budgets: any = {};

	new(): Budget {
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
		this.budgets = mongo.get('budget', {}, (arr: any, obj: any) => {
			this._budgets = obj;
		});
	}

	create(
		budget: Budget = this.new(),
		callback = (created: Budget) => {},
		text = 'budget has been created.'
	) {
		if (budget._id) {
			this.save(budget);
		} else {
			this.mongo.create('budget', budget, (created: Budget) => {
				callback(created);
				this.alert.show({ text });
			});
		}
	}

	doc(budgetId: string): Budget {
		if(!this._budgets[budgetId]){
			this._budgets[budgetId] = this.mongo.fetch('budget', {
				query: {
					_id: budgetId
				}
			});
		}
		return this._budgets[budgetId];
	}

	update(
		budget: Budget,
		callback = (created: Budget) => {},
		text = 'budget has been updated.'
	): void {
		this.mongo.afterWhile(budget, ()=> {
			this.save(budget, callback, text);
		});
	}

	save(
		budget: Budget,
		callback = (created: Budget) => {},
		text = 'budget has been updated.'
	): void {
		this.mongo.update('budget', budget, () => {
			if(text) this.alert.show({ text, unique: budget });
		});
	}

	delete(
		budget: Budget,
		callback = (created: Budget) => {},
		text = 'budget has been deleted.'
	): void {
		this.mongo.delete('budget', budget, () => {
			if(text) this.alert.show({ text });
		});
	}
}
