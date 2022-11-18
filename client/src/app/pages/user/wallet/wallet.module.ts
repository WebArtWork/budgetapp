import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { WalletComponent } from './wallet.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: WalletComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		WalletComponent
	],
	providers: []

})

export class WalletModule { }
