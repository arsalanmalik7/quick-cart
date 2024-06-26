"use client"

import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from "ra-data-simple-rest";
import { list } from 'postcss';

const apiProvider: any = simpleRestProvider("/api");

const App = () => {
    return (
        <>
            <Admin dataProvider={apiProvider}>
                <Resource 
                name='users'
                list={ListGuesser}
                />
            </Admin>
        </>
    );

}

export default App;
