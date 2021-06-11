import React from 'react';
import css from "./Dialogs.module.css"
import Dialog from './Dialog/Dialog'
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogsData.dialogData.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>),
        messageElements = props.dialogsData.messageData.map(message => <Message text={message.text} id={message.id} me={message.me}/>),
        newMessageElement = React.createRef(),
        addMessage = () => {
            props.addMessage();
        },
        updateMessage = () => {
            let text = newMessageElement.current.value;
            props.updateMessageText(text);
        }


    return (
        <section className={css.dialogs}>
            <div className={css.dialog}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
                <div className={css.inputMessage}>
                    <textarea ref={newMessageElement} cols="100" rows="3" value={props.dialogsData.newMessageText} onChange={updateMessage}/>
                    <input type="submit" value="Send" onClick={addMessage}/>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;
