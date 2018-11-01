import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { GameComponent } from './game/game.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './game/card/card.component';
import { GridComponent } from './game/grid/grid.component';




@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		NotFoundComponent,
		GameComponent,
		UserComponent,
		CardComponent,
		GridComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		NgxPaginationModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
