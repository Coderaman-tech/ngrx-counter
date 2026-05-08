import {createReducer, on} from '@ngrx/store';
import { updateFormField, resetForm } from './form.action';

export interface FormState{
    name:string;
    email:string;
}

export const initialState:FormState={
    name:'',
    email:''
};

export const formReducer=createReducer(
    initialState,
    on(updateFormField,(state,{field,value})=>({
        ...state,
        [field]:value
    })),
    on(resetForm,()=>initialState)
);