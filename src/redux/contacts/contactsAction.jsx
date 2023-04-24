import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/item_add');
const deleteContact = createAction('contacts/item_delete');
const addFilter = createAction('contacts/filter_change');

export { addContact, deleteContact, addFilter };
