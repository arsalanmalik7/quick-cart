import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';
import DeleteButton from './delete';

const ProductCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="productName" validate={[required()]} fullWidth />
        </SimpleForm>
        <DeleteButton />
    </Create>
);

export default ProductCreate;