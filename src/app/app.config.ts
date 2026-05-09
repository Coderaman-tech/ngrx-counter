import { userFeature } from './users/user.feature';
import { UserEffects } from './users/user.effects';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { counterFeature } from './store/counter.feature';
import { routes } from './app.routes';
import { formFeature } from './form/form.feature';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideStore(),
    // feature for counter state
    provideState(counterFeature),
    provideState(formFeature),// feature for form state
    // if any other feature is added then add here
    provideState(userFeature), // feature for user state
    provideEffects([UserEffects])
]
};
