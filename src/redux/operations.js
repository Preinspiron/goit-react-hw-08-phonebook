import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import fetch from 'mock/fetch';
// import toast from 'react-hot-toast';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', contact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const res = await axios.patch(`/contacts/${id}`, {
        name: name,
        number: number,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const { data } = await fetch();
//   // console.log(data);
//   return data;
// });

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async name => {
//     try {
//       const toastId1 = toast.loading('Loading...', { position: 'top-right' });
//       const { data } = await fetch.post('', { ...name });
//       toast.success('Done', { id: toastId1 });
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     try {
//       const toastId2 = toast.loading('Loading...', { position: 'top-right' });
//       console.log(+id);
//       await fetch.delete(`/${id}`);
//       toast.error('Done', { id: toastId2 });
//       return id;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export default fetchAll;
