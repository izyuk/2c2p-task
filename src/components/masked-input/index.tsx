import React, {ChangeEvent} from 'react';
import InputMask, {InputState} from 'react-input-mask';
import {masks} from "../../enums";

interface InputPropsI {
    maskType: string,
    formatChars: {
        [key: string]: string
    },
    id: string,
    callback: (event: ChangeEvent<HTMLInputElement>) => any,
    beforeMaskedInputChange?: (newState: InputState, oldState: InputState, userInput: string) => InputState
}

const Input = ({beforeMaskedInputChange, callback, maskType, id, formatChars, ...rest}: InputPropsI) => {
    const mask = masks[maskType] || masks['default'];

    return <InputMask beforeMaskedValueChange={beforeMaskedInputChange} onChange={callback} id={id} mask={mask}
                      maskChar=" " formatChars={formatChars} {...rest}/>;
};

export default Input;
