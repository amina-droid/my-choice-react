import React, { useState, useContext, useCallback } from 'react';
import cn from 'classnames';
import { Formik } from 'formik';
import CustomScroll from 'react-custom-scroll';

import 'react-custom-scroll/dist/customScroll.css';

import { ReactComponent as Close } from '../../icons/close.svg';
import { ReactComponent as ChatOpenBtn } from '../../icons/chat.svg';
import { ReactComponent as SendBtn } from '../../icons/send.svg'

import s from './Chat.module.sass';
import Button from '../../shared/Button/Button';
import { SocketIOContext, useSocket } from '../../socket';
import { PlayerContext } from '../../context/player/player';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(false);
    
    const io = useContext(SocketIOContext);
    const { userName, color } = useContext(PlayerContext);

    useSocket('chat:message', message => {
        setMessages(prevMessages => [
            ...prevMessages,
            message
        ])
        if (!isOpen) {
            setNewMessage(true);
        }
        
    })

    const sendMessage = useCallback(message => {
        io.emit('chat:message', {
            name: userName,
            message,
            color,
        })
    }, [userName, color, io]);

    const openChat = () => {
        setIsOpen(true);
        setNewMessage(false);
    }
    const closeChat = () => {
        setIsOpen(false);
    }
    if (!userName) {
        return null;
    }

    if (!isOpen) {
        const openButtonClassName = cn(
            s['chat-open-button'],
            newMessage && s['chat-open-button_new-message']
        )
        return (
            <Button className={openButtonClassName} onClick={openChat}>
                {newMessage && <div className={s['chat__new-message']} />}
                <ChatOpenBtn />
            </Button>
        )
    } 
    return (
        <div className={s['chat']}>
            <div className={s['chat__header']}>
                <div className={s['chat__tabs']}>Общий чат</div>
                <Button className={s['chat_close']} onClick={closeChat}><Close /></Button>
            </div>
            <div className={s['chat__body']}>
                <CustomScroll allowOuterScroll>
                    <ul className={s['chat__list']}>
                        {messages.map(message => {
                            const isCurrentUser = message.name === userName
                            const messageClassName = cn(
                                s['chat__message'],
                                isCurrentUser && s['chat__message_my']
                            );
                            return (
                                <li key={message.message} className={messageClassName}>
                                    {!isCurrentUser && (<span className={s['chat__author-message']} style={{ color: message.color }}>{message.name}</span>)}
                                    <span>{message.message}</span>
                                </li>
                            )
                        })}
                    </ul>
                </CustomScroll>
            </div>
            <div className={s['chat__footer']}>
                <Formik 
                    initialValues={{
                        message: '',
                    }}
                    onSubmit={(values, { resetForm }) => {
                        sendMessage(values.message);
                        resetForm();
                    }
                    }>
                    {props => {
                        const handlerKeyPress = e => {
                            if (e.keyCode === 13 && e.shiftKey === false) {
                                e.preventDefault();
                                props.submitForm();
                            }
                        }
                        return (
                            <form 
                                onSubmit={props.handleSubmit}
                                className={s['chat__form']}
                            >
                                <textarea 
                                    onKeyDown={handlerKeyPress} 
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.message}
                                    className={s['chat__textarea']} 
                                    name="message"
                                />
                                <Button 
                                    className={s['chat__button_send']} 
                                    type="submit"
                                >
                                    <SendBtn />
                                </Button>
                            </form>
                        )
                    }}

                </Formik>
            </div>
        </div>
    )
    
}

export default Chat;