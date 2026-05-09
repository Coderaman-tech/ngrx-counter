import { createFeature } from '@ngrx/store';
import { userReducer, UserState } from './user.reducer'; 

export const userFeature = createFeature({
    name: 'user',
    reducer: userReducer
});