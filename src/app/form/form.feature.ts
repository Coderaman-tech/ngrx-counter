import { formReducer } from './form.reducer';
import { createFeature } from '@ngrx/store';

export const formFeature = createFeature({
    name:'form',
    reducer:formReducer
})