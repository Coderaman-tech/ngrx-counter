import {createAction} from '@ngrx/store';

//Increment action
                                    // feature name in square brackets, then the action name
export const increment=createAction('[Counter Component] Increment');

//Decrement action
export const decrement=createAction('[Counter Component] Decrement');

//Reset action
export const reset=createAction('[Counter Component] Reset');