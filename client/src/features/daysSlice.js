import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	status: 'idle',
	error: null,
	// food: [],
	// sleep: {
	// 	wakeUp: '00:00',
	// 	nap1Start: '00:00',
	// 	nap1End: '00:00',
	// 	nap2Start: '00:00',
	// 	nap2End: '00:00',
	// 	bedTime: '00:00',
	// },
	// poop: 0,
	// notes: [],
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
		populateStore: (state, action) => {
			state = action.payload;
		},
		addFood: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.food = [...state.food, action.payload];
		},
		removeFood: (state, action) => {
			let removedItem;
			removedItem = state.food.splice(action.payload, 1);
			state.food = [...state.food];
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
	decrement,
	incrementByAmount,
} = daysSlice.actions;

export default daysSlice.reducer;
