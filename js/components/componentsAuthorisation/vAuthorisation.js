import vLogotype from "../vLogotype.js"
import vAuthorisationform from "./vAuthorisationform.js"
import vButtonsocial from "./vButtonsocial.js"
import vError from "../vError.js"
export default{
    template: `
<section :class="darkThem ? 'authorisation-dark' : 'authorisation'">
    <div class="authorisation__logo">
        <v-logotype/>
        <img src="./fonts/2022--sprinthost.svg" alt="">
    </div>
    <div class="authorisation__form">
        <v-error :darkthem="darkThem" v-if="showError" :errors="errors" :show-error="showError"/>
        <h3>Войти в личный кабинет</h3>
        <v-authorisationform   v-model:form-login="formLogin" @login= "$emit('login')" />
        <div class="authorisation__with">
            <p>Войти с помощью:</p>
            <div class="authorisation__buttons">
                <v-buttonsocial :imagePuth="'./fonts/vk.svg'"/>
                <v-buttonsocial :imagePuth="'./fonts/google.svg'"/>
            </div>
        </div>
        <a href="#" class="make__account" @click.prevent="$emit('selectpage', 'registration')">Создать аккаунт</a>
    </div>
</section>
    `,
    components:{
        vLogotype,
        vAuthorisationform,
        vButtonsocial,
        vError
    },
    data(){
        return{
            
            
        }
    },
    props:{
        formLogin: Object,
        errors: String,
        showError: Boolean,
        darkThem: Boolean,
    },
   
    methods:{
        
        
    }
}