import React, { useState, useCallback, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { generateColor } from './utils';
import { SocketIOContext, useSocket } from '../../socket';

const init = {
    userName: '',
    color: generateColor(),
    roomName: '',
    priority: 0,
    resources: {},
    rooms: [],
    login: () => {},
    choiceRoom: () => {},
    createRoom: () => {},
    leaveRoom: () => {},
};

export const PlayerContext = React.createContext(init);

export const PlayerContextProvider = ({ children }) => {
    const io = useContext(SocketIOContext);
    const [userName, setUserName] = useState('');
    const [color, setColor] = useState(generateColor());
    const [roomName, setRoomName] = useState('');
    const [priority, setPriority] = useState(0);
    const [resources, setResources] = useState({}); 
    const [rooms, setRooms] = useState([]);

    const history = useHistory();
    const navigateToGame = useCallback(() => history.push('/game'), [history]);
    
    useSocket('login', obj => {
        setUserName(obj.username);
    })

    useSocket('rooms', data => {
        setRooms(data.rooms);
    })

    const login = useCallback(name => {
        io.emit('login', { username: name })
    }, [io]);

    const choiceRoom = useCallback(roomname => {
        io.emit('room:choice', {
            roomName: roomname,
        })
        setRoomName(roomname);
        navigateToGame();
    }, [setRoomName, io, navigateToGame])

    const createRoom = useCallback(roomname => {
        io.emit('room:create', {
            roomName: roomname
        })
        setRoomName(roomname);
        navigateToGame();
    }, [setRoomName, io, navigateToGame]);

    const leaveRoom = useCallback(roomname => {
        io.emit('room:leave', {
            roomName: roomname,
        })
        setRoomName('');
    }, [setRoomName, io])
    return (
        <PlayerContext.Provider value={{
            userName,
            login,
            choiceRoom,
            createRoom,
            leaveRoom,
            color,
            roomName,
            rooms,
            priority,
            resources,
        }}>
            {children}
        </PlayerContext.Provider>
    )
}