import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	data: {},
	status: 'idle',
	pageStatus: 'idle',
	error: null,
	pageError: null,
};

export const fetchDays = createAsyncThunk('days/fetchDays', async (data) => {
	const page = {
		page: data.page,
	};
	const res = await fetch('/api/userData', {
		method: 'POST',
		headers: {
			authorization: data.auth,
			'content-type': 'application/json',
		},
		body: JSON.stringify(page),
	}).then((Response) => Response.json());
	return res;
});

export const fetchPage = createAsyncThunk('days/fetchPage', async (data) => {
	const page = {
		page: data.page,
	};
	const res = await fetch('/api/userData', {
		method: 'POST',
		headers: {
			authorization: data.auth,
			'content-type': 'application/json',
		},
		body: JSON.stringify(page),
	}).then((Response) => Response.json());
	return res;
});

export const saveData = createAsyncThunk('days/userInputEdit', async (data) => {
	const res = await fetch('/api/userInputEdit', {
		method: 'POST',
		headers: {
			authorization: data.auth,
			'content-type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then((Response) => Response.json());
	return res;
});

export const daysSlice = createSlice({
	name: 'days',
	initialState,
	reducers: {
		addFood: (state, action) => {
			state.data.arr[action.payload.day].food.push(action.payload.item);
		},
		removeFood: (state, action) => {
			let removedItem;
			removedItem = state.data.arr[action.payload.day].food.splice(
				action.payload.item,
				1
			);
			state.data.arr[action.payload.day].food = [
				...state.data.arr[action.payload.day].food,
			];
		},
		editSleep: (state, action) => {
			state.data.arr[action.payload.day].sleep = {
				...state.data.arr[action.payload.day].sleep,
				...action.payload.item,
			};
		},
		incrementPoop: (state, action) => {
			state.data.arr[action.payload.day].poop += 1;
		},
		decrementPoop: (state, action) => {
			state.data.arr[action.payload.day].poop -= 1;
		},
		addNote: (state, action) => {
			state.data.arr[action.payload.day].notes.push(action.payload);
		},
		removeNote: (state, action) => {
			let removedItem;
			removedItem = state.data.arr[action.payload.dayIndex].notes.splice(
				action.payload.itemIndex,
				1
			);
			state.data.arr[action.payload.dayIndex].notes = [
				...state.data.arr[action.payload.dayIndex].notes,
			];
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchDays.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchDays.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Add any fetched posts to the array
				state.data = action.payload;
			})
			.addCase(fetchDays.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(fetchPage.pending, (state, action) => {
				state.pageStatus = 'loading';
			})
			.addCase(fetchPage.fulfilled, (state, action) => {
				state.pageStatus = 'succeeded';
				// Add any fetched posts to the array
				state.data = action.payload;
			})
			.addCase(fetchPage.rejected, (state, action) => {
				state.pageStatus = 'failed';
				state.pageError = action.error.message;
			});
	},
});

// Action creators are generated for each case reducer function
export const {
	addFood,
	removeFood,
	editSleep,
	incrementPoop,
	decrementPoop,
	addNote,
	removeNote,
} = daysSlice.actions;

export default daysSlice.reducer;
