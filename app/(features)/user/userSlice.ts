// app/(features)/users/usersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
}

interface UserState {
    user: User[];
}

const initialState: UserState = {
    user: [],
};

const userSlice: any = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.user.push(action.payload);
        },
        removeUser: (state, action: PayloadAction<number>) => {
            state.user = state.user.filter(data => data.id !== action.payload);
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
