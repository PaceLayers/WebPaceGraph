import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigAppComponent} from './config-app/config-app.component';
import {MapBusinessProcessApplicationComponent} from './map-business-process-application/map-business-process-application.component';
import { PaceLayerChartComponent } from './pace-layer-chart/pace-layer-chart.component';
import {TimeplotComponent} from './timeplot/timeplot.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BookService } from './bubbly/book.service';
import { BubblyComponent } from './bubbly/bubbly.component';
const routes: Routes = [
    { path: 'InventoryApplications', component: ConfigAppComponent},
    {path: 'mapbusinessprocessapplication', component: MapBusinessProcessApplicationComponent},
    {path:'paceLayerchart',component:PaceLayerChartComponent},
    {path:'timeplot',component:TimeplotComponent},
    {path:'book',component:BubblyComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes), NgxSpinnerModule],
    
    exports: [RouterModule]

  })

  export class AppRoutingModule { }
  export const routingComponents = [ConfigAppComponent,MapBusinessProcessApplicationComponent,PaceLayerChartComponent,TimeplotComponent,BubblyComponent]