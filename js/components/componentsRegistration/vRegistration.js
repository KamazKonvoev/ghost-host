import vInput from "../componentsAuthorisation/vInput.js"
import vBlackbutton from "../componentsAuthorisation/vBlackbutton.js"
import vError from "../vError.js"
export default{
    template: ` 
<section :class="darkThem ? 'registration-dark' : 'registration' ">
    <div class="container">
        <div class="registration__inner">
            <v-error v-if="showError" :errors="errors"/>
            <h2>Регистрация</h2>
            <div class="registration__form">
                <form @submit.prevent="$emit('registeruser')">
                    <v-input :type-input="'mail'" :place-holder="'Почта'" v-model:reactiv-elem="formRegister.email"/>
                    <v-input :type-input="'text'" :place-holder="'Имя'" v-model:reactiv-elem="formRegister.name"/>        
                    <v-input :type-input="'text'" :place-holder="'Фамилия'" v-model:reactiv-elem="formRegister.surname"/>        
                    <v-input :type-input="'nickname'" :place-holder="'Ваш никнейм'" v-model:reactiv-elem="formRegister.nickname"/>
                    <v-input :type-input="'password'" :place-holder="'Пароль'"  v-model:reactiv-elem="formRegister.password"/>    
                    <v-input :type-input="'password'" :place-holder="'Повторите пароль'"  v-model:reactiv-elem="formRegister.passwordagain"/>    
                    <v-blackbutton :name-button="'Зарегистрироваться'" />
                </form>
            </div>
        </div>
    </div>
</section>
    `,
    components:{
        vInput,
        vBlackbutton,
        vError
    },
    props:{
        formRegister: Object,
        showError: Boolean,
        errors: String,
        darkThem: Boolean
    }
    


}