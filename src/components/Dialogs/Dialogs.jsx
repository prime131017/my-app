import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Anatolii
                </div>
                <div className={s.dialog}>
                    Rymma
                </div>
                <div className={s.dialog}>
                    Ksenia
                </div>
                <div className={s.dialog}>
                    Cheburashka
                </div>
                <div className={s.dialog}>
                    Gena
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo yo</div>
            </div>
        </div>
    )
}

export default Dialogs;
