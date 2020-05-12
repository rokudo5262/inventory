import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { StatesComponent } from './states.component';
import { StatesRoutingModule } from './states-routing.module';
import { CounterComponent } from './counter/counter.component';
import { MaterialModule } from './material';

@NgModule({
  imports: [
    StatesRoutingModule,
    ThemeModule,
    MaterialModule,
    // StoreModule.forFeature('count', counterReducer),
  ],
  declarations: [
    StatesComponent,
    CounterComponent,
  ],
})
export class StatesModule { }
