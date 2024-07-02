import { BooleanField, Datagrid, EmailField, List, TextField } from 'react-admin';
import DeleteButton from './delete';

const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="password" />
            <BooleanField source="isAdmin" />
            <DeleteButton />

        </Datagrid>
    </List>
);

export default UserList;