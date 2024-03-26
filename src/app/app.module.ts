import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ActivitySelectorComponent } from './components/activity-selector/activity-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatorFormComponent } from './components/creator-form/creator-form.component';
import { ClassifyExecutorComponent } from './components/classify-executor/classify-executor.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HomeComponent,
    ActivitySelectorComponent,
    CreatorFormComponent,
    ClassifyExecutorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
