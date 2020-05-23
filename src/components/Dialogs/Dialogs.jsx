import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let url = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={url} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    let dialogs = [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrew'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Viktor'},
        {id:6, name:'Valera'}
    ];

    let messages = [
        {id:1, message:'Hi!'},
        {id:2, message:'How is your it-kamasutra?'},
        {id:3, message:'Yo!!!'},
        {id:4, message:'Yo!!!'},
        {id:5, message:'Yo!!!'}
    ];

    let dialogElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messageElements = messages.map(message => <Message id={message.id} message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;