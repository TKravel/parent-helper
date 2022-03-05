import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	data: {},
	status: 'idle',
	error: null,
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
	console.log(res);
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
			state.data.arr[0].notes.push(action.payload);
		},
		removeNote: (state, action) => {
			let removedItem;
			removedItem = state.data.arr[0].notes.splice(action.payload, 1);
			state.data.arr[0].notes = [...state.data.arr[0].notes];
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
			});
	},
});

// Action creators are generated for each case reducer function
export const {
	populateStore,
	addFood,
	removeFood,
	editSleep,
	incrementPoop,
	decrementPoop,
	addNote,
	removeNote,
} = daysSlice.actions;

export default daysSlice.reducer;
