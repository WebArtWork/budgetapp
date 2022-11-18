import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { WalletsComponent } from './wallets.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: WalletsComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		WalletsComponent
	],
	providers: []

})

export class WalletsModule { }
