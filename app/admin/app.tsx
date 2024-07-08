"use client"

import { Admin, Resource, useDelete } from 'react-admin';
import simpleRestProvider from "ra-data-simple-rest";


import UserList from "./users/list";

import ProductCreate from './products/create';
import ProductList from './products/list'

const apiProvider: any = simpleRestProvider("/api");

const App = () => {
    return (
        <>
            <Admin dataProvider={apiProvider}>
                <Resource
                    name='users'
                    list={UserList}

                />

                <Resource
                name='products'
                list={ProductList}
                create={ProductCreate}

                />
            </Admin>
        </>
    );

}

export default App;
