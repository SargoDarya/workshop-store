import { importProvidersFrom } from "@angular/core";
import { ApplicationConfig } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducer } from "./state/to-do-list.store";
import { ToDoListEffects } from "./state/to-do-list.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot({}),
      StoreModule.forFeature('to-do-list', reducer),
      EffectsModule.forRoot([]),
      EffectsModule.forFeature([ToDoListEffects]),
      StoreDevtoolsModule.instrument()
    )
  ]
}
