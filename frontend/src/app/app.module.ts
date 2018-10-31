import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found/not-found.component';
import {LoginComponent} from './login/login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProdutosComponent} from './produtos/produtos/produtos.component';
import {Interceptor} from './shared/interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import {ChartsModule} from 'ng2-charts';
import {UserAuthGuard} from './user-auth.guard';


@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		NotFoundComponent,
		LoginComponent,
		ProdutosComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		NgxPaginationModule,
		ChartsModule
	],
	providers: [
		UserAuthGuard,
		AuthService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: Interceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
