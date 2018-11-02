import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './home/ranking/ranking.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { GameComponent } from './game/game.component';
import { UserComponent } from './user/user.component';
import { PermissionGuard } from './permission.guard';


const routes: Routes = [
	{path: '', component: RankingComponent},
	{path: 'user', component: UserComponent},
	{path: 'game', component: GameComponent, canActivate: [PermissionGuard]},
	{path: 'not-found', component: NotFoundComponent},
	{path: '**', redirectTo: '/not-found'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
