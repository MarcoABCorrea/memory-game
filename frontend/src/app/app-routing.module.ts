import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { GameComponent } from './game/game.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
	{path: '', component: DashboardComponent},
	{path: 'user', component: UserComponent},
	{path: 'game', component: GameComponent},
	{path: 'not-found', component: NotFoundComponent},
	{path: '**', redirectTo: '/not-found'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
