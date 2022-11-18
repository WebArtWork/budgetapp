import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Transaction {
	wallet: string,
	name: string,
	amount: number
}

@Injectable({
	providedIn: 'root'
})
export class TransactionService {
	public transactions: any = [];
	public _transactions: any = {};
	constructor(private mongo: MongoService, private alert: AlertService) {
		this.transactions = mongo.get('transaction', {}, (arr: any, obj: any)=>{
			this._transactions = obj;
		});
	}
	create(transaction:any={}, text = 'transaction has been created.') {
		if(transaction._id) return this.save(transaction);
		this.mongo.create('transaction', transaction, (created: any )=>{
			this.alert.show({ text });
		});
	}
	doc(transactionId: any){
		if(!this._transactions[transactionId]){
			this._transactions[transactionId] = this.mongo.fetch('transaction', {
				query: {
					_id: transactionId
				}
			});
		}
		return this._transactions[transactionId];
	}
	update(transaction: any, text = 'transaction has been updated.') {
		this.mongo.afterWhile(transaction, (_: any)=> {
			this.save(transaction, text);
		});
	}
	save(transaction: any, text = 'transaction has been updated.'){
		this.mongo.update('transaction', transaction, (_: any)=>{
			if(text) this.alert.show({ text, unique: transaction });
		});
	}
	delete(transaction: any, text = 'transaction has been deleted.') {
		this.mongo.delete('transaction', transaction, (_: any)=>{
			if(text) this.alert.show({ text });
		});
	}
}
