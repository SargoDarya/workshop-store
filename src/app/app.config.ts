import { importProvidersFrom } from "@angular/core";
import { ApplicationConfig } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducer } from "./state/to-do-list.store";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot({}),
      StoreModule.forFeature('to-do-list', reducer),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument()
    )
  ]
}
