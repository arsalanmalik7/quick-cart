import { Button } from 'react-admin';
import * as React from 'react';
import { useDelete, useNotify, useRefresh } from 'react-admin';




interface UserRecord {
    id: number;
    productName: string;
}


interface DeleteButtonProps {
     record?: UserRecord;
}



const DeleteButton: React.FC<DeleteButtonProps> = ({ record }) => {
    const [deleteOne] = useDelete();
    const notify = useNotify();
    const refresh = useRefresh();

    const handleDelete = () => {
        deleteOne('products', { id: record?.id }, {
            onSuccess: () => {
                notify('Product deleted successfully', { type: 'info' });
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
