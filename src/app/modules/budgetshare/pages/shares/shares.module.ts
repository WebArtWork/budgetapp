import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharesComponent } from './shares.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: SharesComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		SharesComponent
	],
	providers: []

})

export class SharesModule { }
