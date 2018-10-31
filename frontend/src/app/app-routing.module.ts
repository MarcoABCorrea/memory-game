import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found/not-found.component';
import {LoginComponent} from './login/login/login.component';
import {ProdutosComponent} from './produtos/produtos/produtos.component';
import {UserAuthGuard} from './user-auth.guard';


const routes: Routes = [
	{path: 'login', component: LoginComponent, canActivate: [UserAuthGuard]},
	{path: 'home', component: DashboardComponent, canActivate: [UserAuthGuard]},
	{path: 'produtos', component: ProdutosComponent, canActivate: [UserAuthGuard]},
	{path: 'not-found', component: NotFoundComponent, canActivate: [UserAuthGuard]},
	{path: '**', redirectTo: '/not-found'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
