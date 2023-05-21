import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from 'redux/operations';

function isPendingAction(action) {
  return action.type.endsWith('pending');
}
function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1, payload);
      })
      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/fulfilled')
          )
            return true;
        },
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/pending')
          )
            return true;
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/rejected')
          )
            return true;
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,

//     filter: '',
//   },
//   reducers: {
//     getFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: builder =>
//     builder
//       // .addCase(fetchContacts.pending, (state, action) => {
//       //   state.isLoading = true;
//       // })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.isLoading = false;
//       })
//       // .addCase(addContact.pending, (state, action) => {
//       //   state.isLoading = true;
//       // })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items.unshift(action.payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(item => +item.id !== +action.payload);
//         console.log(state.items);
//         state.isLoading = false;
//       })
//       .addMatcher(isPendingAction, (state, action) => {
//         state.isLoading = true;
//       })
//       .addMatcher(isRejectedAction, (state, action) => {
//         state.error = action.payload;
//       }),
// });

// export const { getFilter } = contactsSlice.actions;
// // export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
