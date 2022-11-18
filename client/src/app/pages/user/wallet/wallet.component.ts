import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService, WalletService } from 'src/app/services';
import { Transaction } from 'src/app/services/transaction.service';
@Component({
	templateUrl: './wallet.component.html',
	styleUrls: ['./wallet.component.scss']
})
export class WalletComponent{
	_id = this._router.url.replace('/wallet/', '');

	wallet = this.ws.doc(this._id);

	transaction: Transaction = {
		wallet: this._id,
		name: '',
		amount: 0
	};

	create(): void {
		this.ts.create(this.transaction);

		if (!this.wallet.balance) {
			this.wallet.balance = 0;
		}

		this.wallet.balance += this.transaction.amount;

		this.transaction = {
			name: '',
			amount: 0,
			wallet: this._id
		};
	}

	constructor(
		public ts: TransactionService,
		public ws: WalletService,
		private _router: Router
	) {}
}
