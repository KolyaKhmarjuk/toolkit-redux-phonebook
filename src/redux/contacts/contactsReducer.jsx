import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './contactsAction';

const itemsReducer = createReducer([], builder => {
  builder
    .addCase(action.addContact, (state, { payload }) => [...state, payload])
    .addCase(action.deleteContact, (state, { payload }) =>
      state.filter(item => item.id !== payload)
    );
});

const filterReducer = createReducer('', builder => {
  builder.addCase(action.addFilter, (_, { payload }) => payload.toLowerCase());
});

const contactsReducer = combineReducers({
  item: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
