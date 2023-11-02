import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { EstadoPipe } from './estado.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Tab4Page , EstadoPipe]
})
export class Tab4PageModule {}
