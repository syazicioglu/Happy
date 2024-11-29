import { makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues, VerifyEmailFormValues } from "../models/user";
import agent from "../api/agent";
import { store } from "./store";
import { router } from "../router/Routes";

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        const user = await agent.Account.login(creds);
        store.commonStore.setToken(user.token);
        runInAction(() => this.user = user);
        router.navigate("/");
    }
    
    register = async (creds: UserFormValues) => {
        await agent.Account.register(creds);
        /*store.commonStore.setToken(user.token);
        runInAction(() => this.user = user);
        router.navigate("/");*/
    }

    verifyEmail = async (creds: VerifyEmailFormValues) => {
        /*const user = await agent.Account.verifyEmail(creds);
        store.commonStore.setToken(user.token);
        runInAction(() => this.user = user);
        router.navigate("/");*/
        try {
            const user = await agent.Account.verifyEmail(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            router.navigate("/");
        } catch (error) {
            console.error("Doğrulama hatası:", error);
            // Hata mesajını kullanıcıya gösterebilirsiniz
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        this.user = null;
        router.navigate("/");
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        } catch (error) {
            console.log(error);
        }
    }
}