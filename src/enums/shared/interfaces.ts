export interface IsLoadedI {
    loaded: boolean
}

export interface PaymentInfoI {
    responseCode: string,
    responseMessage: string,
    invoiceNo: string,
    approvalCode: string
}
