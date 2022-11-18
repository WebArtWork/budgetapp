import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class WalletService {
	public wallets: any = [];
	public _wallets: any = {};
	constructor(private mongo: MongoService, private alert: AlertService) {
		this.wallets = mongo.get('wallet', {}, (arr: any, obj: any)=>{
			this._wallets = obj;
		});
	}
	create(wallet:any={}, text = 'wallet has been created.') {
		if(wallet._id) return this.save(wallet);
		this.mongo.create('wallet', wallet, (created: any )=>{
			this.alert.show({ text });
		});
	}
	doc(walletId: any){
		if(!this._wallets[walletId]){
			this._wallets[walletId] = this.mongo.fetch('wallet', {
				query: {
					_id: walletId
				}
			});
		}
		return this._wallets[walletId];
	}
	update(wallet: any, text = 'wallet has been updated.') {
		this.mongo.afterWhile(wallet, (_: any)=> {
			this.save(wallet, text);
		});
	}
	save(wallet: any, text = 'wallet has been updated.'){
		this.mongo.update('wallet', wallet, (_: any)=>{
			if(text) this.alert.show({ text, unique: wallet });
		});
	}
	delete(wallet: any, text = 'wallet has been deleted.') {
		this.mongo.delete('wallet', wallet, (_: any)=>{
			if(text) this.alert.show({ text });
		});
	}
}
