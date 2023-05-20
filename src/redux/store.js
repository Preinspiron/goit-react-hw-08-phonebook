import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
// import { filterReducer } from './filterSlice';
// import { persistStore, persistReducer, createTransform } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { combineReducers } from 'redux-persist';
// const SetTransform = createTransform(
//   // transform state on its way to being serialized and persisted.
//   (inboundState, key) => {
//     // convert mySet to an Array.
//     return { ...inboundState, mySet: [...inboundState.mySet] };
//   },
//   // transform state being rehydrated
//   (outboundState, key) => {
//     // convert mySet back to a Set.
//     return { ...outboundState, mySet: new Set(outboundState.mySet) };
//   },
//   // define which reducers this transform gets called for.
//   { whitelist: ['someReducer'] }
// );

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: ['filter'],
//   transforms: [SetTransform],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);
// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });
// // customizedMiddleware()
// console.log(customizedMiddleware);
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    // filter: filterReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);
