import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { PermissionGuard } from './permission.guard';
import { UserComponent } from './user/user.component';
import { RankingComponent } from './home/ranking/ranking.component';

@NgModule({
	declarations: [
		AppComponent,
		RankingComponent,
		NotFoundComponent,
		GameComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NgxPaginationModule
	],
	providers: [
		PermissionGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
