import vHeader from "./components/vHeader.js"
import vSalute from "./components/componentsMain/vSalute.js"
import vDomainsearch from "./components/componentsMain/vDomainsearch.js"
import vAccountfunc from "./components/componentsMain/vAccountfunc.js"
import vPackages from "./components/componentsMain/vPackages.js"
import vAbout from "./components/componentsMain/vAbout.js"
import vCarousel from "./components/componentsMain/vCarousel.js"
import vCharacter from "./components/componentsMain/vCharacter.js"
import vAuthorisation from "./components/componentsAuthorisation/vAuthorisation.js"
import vRegistration from "./components/componentsRegistration/vRegistration.js"
import vFooter from "./components/vFooter.js"
import vModal from "./components/vModal.js"
import vBurger from "./components/vBurger.js"
const app={
    template:`
<header class="header" :style="headerZero">
    <v-header :current-page="currentPage" @selectpage="selectPage($event)" :scroll-number="150" v-if="currentPage=== 'main'" :login-user="loginUser" @logout="logOut"/>
    <v-header :current-page="currentPage" @selectpage="selectPage($event)" :scroll-number="-1" v-if="currentPage !== 'main'" :login-user="loginUser" @logout="logOut"/>
    <v-burger :current-page="currentPage" @selectpage="selectPage($event)" @logout="logOut" :login-user="loginUser"/>
</header>

<section v-if="currentPage === 'main'">
    <v-salute/>
    <v-accountfunc @selectpage="selectPage($event)" />
    <v-domainsearch :dark-them="darkThem"/>
    <v-packages :packages="packages" :dark-them="darkThem"/>
    <v-about :team-company="teamCompany" :dark-them="darkThem"/>
    <v-carousel :team-citation="teamСitation" :interval="0"/>
    <v-character :dark-them="darkThem"/>
</section>

<section v-if="currentPage==='auth'">
    <v-authorisation  @selectpage="selectPage($event)" :dark-them="darkThem" v-model:form-login="formLogin" @login="login" :errors="errors" :show-error="showError"/>
</section>

<section v-if="currentPage==='registration'">
    <v-registration v-model:form-register="formRegister" @registeruser="registerUser" :show-error="showError" :errors="errors" :dark-them="darkThem"/>
</section>

<v-modal v-if="showModal" @closemodal="showModal= !showModal" @gotoacc="currentPage='auth'"  @gotoacc="showModal= !showModal"/>

<v-footer :current-page="currentPage" @selectpage="selectPage($event)" :login-user="loginUser" @logout="logOut" in-footer="true"/>
<div class="them__switcher">
    <div class="cont">
            <label id="switch" class="switch">
                <input type="checkbox" id="slider" checked  @click="darkThem=!darkThem">
                <span class="slider round"></span>
            </label>
    </div>
</div>
    
    `,
    components:{
        vHeader,
        vSalute,
        vAccountfunc,
        vDomainsearch,
        vPackages,
        vAbout,
        vCarousel,
        vCharacter,
        vAuthorisation,
        vFooter,
        vRegistration,
        vModal,
        vBurger

    },
    data(){
        return{
            currentPage: 'auth',
            inFooter: false,
            showModal: false,
            // user: null,
            darkThem: false,
            packages:[{
                id:1,
                name:'Базовый пакет',
                diskspace: '50',
                subdomains:'50',
                databases:'1',
                dashboards:'',
                controlPanel:'Да',
                freeSupport:'Да',
                price:'1200 ₽'
            },
            {
                id:2,
                name:'Стандартный пакет',
                diskspace: '120',
                subdomains:'100',
                databases:'2',
                dashboards:'Да',
                controlPanel:'Да',
                freeSupport:'Да',
                price:'1600 ₽'
            },
            {
                id:3,
                name:'Пакет плюс',
                diskspace: '320',
                subdomains:'250',
                databases:'5',
                dashboards:'Да',
                controlPanel:'Да',
                freeSupport:'Да',
                price:'2200 ₽'
            },
            {
                id:4,
                name:'Пакет Gold',
                diskspace: '500',
                subdomains:'450',
                databases:'10',
                dashboards:'Да',
                controlPanel:'Да',
                freeSupport:'Да',
                price:'2600 ₽'
            }
            ],
            teamCompany:[{
                id:1,
                name:'Nate Higgers',
                img:'./image/team1.jpg',
                role:'Designer',
            },
            {
                id:2,
                name:'Pobeg Zlodeev',
                img:'./image/team2.jpg',
                role:'Designer',
            },
            {
                id:3,
                name:'Kamaz Konvoev',
                img:'./image/team3.jpg',
                role:'Director',
            },
            ],
            teamСitation:[
            {
                id:1,
                Author:'Kamaz Konvoev',
                citation:'I love make sueta situation',
            },
            {
                id:2,
                Author:'Nate Higgers',
                citation:'Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimquinterdum dolor pulvinar vitae.',
            }
            ],
            loginUser: false,
            user:null,
            users:[{
                fullName: 'User',
                email:'root@test.com',
                password:'root'
            }],
            formLogin:{
                login: null,
                password: null
            },
            formRegister:{
                email: null,
                name: null,
                surname: null,
                nickname: null,
                password: null,
                passwordagain: null,
            },
            errors:null,
            showError: false,
        }
    },
    methods:{
        selectPage(elem){
            this.currentPage= elem
            console.log(this.currentPage)
            console.log(elem)
        },
        isLogin(){
            console.log('dad')
            this.loginUser= !this.loginUser
            console.log(this.loginUser)
            this.currentPage='main'
        },
        // saveUser(elem){
        //     console.log(1212)
        //     this.user= elem
        //     console.log('юзверь', this.user)
        // },
        login(){
            console.log(12)
            const findUser= this.users.find(user=> user.email === this.formLogin.login)
            console.log(findUser)
            console.log(this.formLogin)
            if(findUser && findUser.password === this.formLogin.password){
                this.user= findUser
                this.isLogin()
                console.log('авторизация прошла')
                this.showError= false
                this.errors= null
            }
            else{
                this.showError= true
                this.errors= 'Неправильная пара логин-пароль.'
            }
        },
        logOut(){
            console.log('выход')
            this.user=null
            this.currentPage='auth'
            this.loginUser= !this.loginUser
            this.formLogin.login= null
            this.formLogin.password= null
            console.log(this.user)
        },
        registerUser(){
            console.log(this.formRegister)
            if(this.formRegister.password !== this.formRegister.passwordagain){
                this.errors= 'Пароли не совпадают'
                this.showError= true
                return
            }

            let newUser={...this.formRegister}
            this.users.push(newUser)
            this.showError= false
            this.errors= null
            this.formRegister.email= null
            this.formRegister.name= null
            this.formRegister.surname= null
            this.formRegister.nickname= null
            this.formRegister.password= null
            this.formRegister.passwordagain= null
            this.showModal= true
        }

    },
    computed:{
        headerZero(){
            if(this.currentPage !== 'main'){
                return ' height: 90px; '
            }
        }
    }
    
}
Vue.createApp(app).mount('#App')
