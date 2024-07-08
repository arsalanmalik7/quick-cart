import { Datagrid, List, TextField } from 'react-admin';

const ProductList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="productName" />
        </Datagrid>
    </List>
);

export default ProductList;