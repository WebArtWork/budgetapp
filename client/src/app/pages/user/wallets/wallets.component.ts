import { Component } from '@angular/core';
import { WalletService } from 'src/app/services';

@Component({
	templateUrl: './wallets.component.html',
	styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent{
	constructor(public ws: WalletService) {}
}
