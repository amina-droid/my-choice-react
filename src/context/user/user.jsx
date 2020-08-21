import React, { useState, useCallback } from 'react';
import useRequest from '../../utils/useRequest';
import getUser from '../../requests/getUser';

const init = {
    state: {
        user: null,
        error: '',
        loading: false
    },
    getUserRequest: () => {}
}
export const UserContext = React.createContext(init);

export const UserContextProvider = ({ children }) => {
    const [state, request] = useRequest(getUser);

    return (
        <UserContext.Provider value={{
            state: {
                user: state.data,
                error: state.error,
                loading: state.loading,
            },
            getUserRequest: request,
        }}>
            {children}
        </UserContext.Provider>
    )
}