import { configureStore } from '@reduxjs/toolkit';
import daysReducer from './features/daysSlice';

export default configureStore({
	reducer: {
		days: daysReducer,
	},
});
