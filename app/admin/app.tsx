"use client"

import { Admin, Resource, useDelete } from 'react-admin';
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "./users/list";

const apiProvider: any = simpleRestProvider("/api");

const App = () => {
    return (
        <>
            <Admin dataProvider={apiProvider}>
                <Resource
                    name='users'
                    list={UserList}

                />
            </Admin>
        </>
    );

}

export default App;
