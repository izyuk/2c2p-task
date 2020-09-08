import React, {useEffect, useState} from 'react';
import './payment-form.less'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {SetCardList} from "../../../store/payment-data/card-types/actions";
import {GetPaymentInformation} from "../../../store/payment-info/actions";
import {CardType} from "../../../store/payment-data/card-types/types";
import Input from "../../masked-input";
import {useHistory} from "react-router-dom";
import {paymentSchema} from "../../../yup-schemas/payment-schema";
import {InputState} from "react-input-mask";


const PaymentForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [buttonState, changeButtonState] = useState(true);
    const [cardType, setCardType] = useState('Visa');
    const [cardNumber, changeCardNumberFieldState] = useState('');
    const [expiry, changeExpiryFieldState] = useState('');
    const [userName, changeNameFieldState] = useState('');
    const [email, changeEmailFieldState] = useState('');
    const cardState = useSelector((state: RootState) => state.cardTypes.data);

    const collectState = () => {
        return {
            cardType,
            cardNumber,
            expiry,
            userName,
            email
        }
    };

    useEffect(() => {
        dispatch(SetCardList())
    }, []);

    useEffect(() => {
        validateForm();
    }, [cardNumber, expiry, userName, email]);

    const validateForm = () => {
        paymentSchema.validate(collectState(), {abortEarly: true})
            .then(() => changeButtonState(false))
            .catch(() => changeButtonState(true));
    };


    const handleFormSubmit = () => {
        history.push('/success');
        dispatch(GetPaymentInformation(collectState()));
    };

    const beforeMaskedInputChange = (newState: InputState) => {
        let {value} = newState;
        let selection = newState.selection;

        changeCardNumberFieldState(value);
        return {
            value,
            selection
        }
    };

    return (
        <form className='payment-form'>
            <div>
                <label htmlFor="card-types">Card Types: </label>
                <select id="card-types"
                        onChange={(event) => setCardType(event.target.value)}>
                    {cardState &&
                    cardState.map((item: CardType, i: number) => <option key={i}
                                                                         value={item.value}>{item.value}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="card-number">Card Number: </label>
                <Input beforeMaskedInputChange={beforeMaskedInputChange} callback={(event) => {
                    console.log('card-number callback', event.target.value);
                    changeCardNumberFieldState(event.target.value)
                }}
                       id={'card-number'}
                       formatChars={{"0": "[0-9]"}} maskType={cardType}/>
            </div>
            <div>
                <label htmlFor="expiry">Expiry: </label>
                <Input callback={(event) => changeExpiryFieldState(event.target.value)} maskType={'expiry'}
                       id={'expiry'} formatChars={{"0": "[0-9]"}}/>
            </div>
            <div>
                <label htmlFor="name">Name: </label>
                <input onChange={(event) => changeNameFieldState(event.target.value)} id="name" type="text"/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input onChange={(event) => changeEmailFieldState(event.target.value)} id="email" type="email"/>
            </div>
            <button disabled={buttonState} onClick={() => handleFormSubmit()}>Confirm Payment</button>
        </form>
    )
};

export default PaymentForm;
