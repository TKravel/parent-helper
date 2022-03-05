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
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.data.arr[0].food.push(action.payload);
		},
		removeFood: (state, action) => {
			let removedItem;
			removedItem = state.data.arr[0].food.splice(action.payload, 1);
			state.data.arr[0].food = [...state.data.arr[0].food];
		},
		editSleep: (state, action) => {
			state.data.arr[0].sleep = {
				...state.data.arr[0].sleep,
				...action.payload,
			};
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
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
	decrement,
	incrementByAmount,
} = daysSlice.actions;

export default daysSlice.reducer;
