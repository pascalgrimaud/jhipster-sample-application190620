import { NgModule } from '@angular/core';

import { JhipsterSampleApplication190620SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterSampleApplication190620SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterSampleApplication190620SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSampleApplication190620SharedCommonModule {}
