import { Button } from 'react-admin';
import * as React from 'react';
import { useDelete, useNotify, useRefresh } from 'react-admin';




interface UserRecord {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}


interface DeleteButtonProps {
     record?: UserRecord;
}



const DeleteButton: React.FC<DeleteButtonProps> = ({ record }) => {
    const [deleteOne] = useDelete();
    const notify = useNotify();
    const refresh = useRefresh();

    const handleDelete = () => {
        deleteOne('users', { id: record?.id }, {
            onSuccess: () => {
                notify('User deleted successfully', { type: 'info' });
                refresh();
            },
            onError: (error:any) => {
                notify(`Error: ${error.message}`, { type: 'warning' });
            }
        });
    };

    return (
        <Button onClick={handleDelete} label="Delete" />
    );
};

export default DeleteButton;
