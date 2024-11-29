export interface User {
    email: string;
    token: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    firstname?: string;
    lastname?: string;
}

export interface VerifyEmailFormValues {
    email: string;
    verificationCode: string;
}