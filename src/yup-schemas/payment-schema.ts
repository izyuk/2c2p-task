import * as yup from "yup";
import {EMAIL, PAYMENT_CARD_DEFAULT, PAYMENT_CARD_AMEX, PAYMENT_FORM_CUSTOMER_NAME} from "../enums/regexes";
import {StringSchema} from "yup";

export const paymentSchema = yup
    .object()
    .shape({
        userName: yup.string()
            .max(50)
            .matches(PAYMENT_FORM_CUSTOMER_NAME, "User name must be valid.")
            .required('name  is required!'),
        email: yup.string()
            .min(0)
            .max(254)
            .matches(EMAIL, "Email must be valid."),
        cardType: yup.string()
            .required(),
        cardNumber: yup.string()
            .when("cardType", {
                is: "Amex",
                then: (field: StringSchema) => field.matches(PAYMENT_CARD_AMEX, "Card number must be valid."),
                otherwise: (field: StringSchema) => field.matches(PAYMENT_CARD_DEFAULT, "Card number must be valid."),
            })
            .required(),
        expiry: yup.string()
            .required()
    });
