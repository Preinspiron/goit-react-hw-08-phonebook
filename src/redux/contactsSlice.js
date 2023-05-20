import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

function isPendingAction(action) {
  return action.type.endsWith('pending');
}
function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,

    filter: '',
  },
  reducers: {
    getFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      // .addCase(fetchContacts.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      // .addCase(addContact.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => +item.id !== +action.payload);
        console.log(state.items);
        state.isLoading = false;
      })
      .addMatcher(isPendingAction, (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.error = action.payload;
      }),
});

export const { getFilter } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
