import vBlackbutton from "./vBlackbutton.js"
import vInput from "./vInput.js"
export default{
    template: `
<form @submit.prevent="$emit('login')" class="form__authorisation">
    <v-input type-input="mail" place-holder="Почта" :required-status="true" v-model:reactiv-elem="formLogin.login" />
    <v-input type-input="password" place-holder="Пароль" :required-status="true" v-model:reactiv-elem="formLogin.password"/>
    <a href="#">Восстановить</a>
    <v-blackbutton name-button="Войти" />
</form>
    `,
    components:{
        vBlackbutton,
        vInput
    },
    data(){
        return{
        }
    },
    props:{
        users: Array,
        formLogin: Object,
    },
    methods:{
        
    }

}