import vLogotype from "./vLogotype.js";
export default{
    template:`
    <div :class= "scrollPosition > scrollNumber ? 'scroll-clr' : '' ">
        <div class="container">
            <div :class="scrollPosition > scrollNumber ? 'header__inner-scroll' : 'header__inner' ">
                <v-logotype @click.prevent="$emit('selectpage', 'main')"/>
                
                <ul v-if="!loginUser">
                    <a href="#" :class="currentPage === 'main' ? 'select' : ''" @click.prevent="$emit('selectpage', 'main')" ><li>Главная</li></a>
                    <a href="#" :class="currentPage === 'auth' ? 'select' : ''" @click.prevent="$emit('selectpage', 'auth')"><li>Войти</li></a>
                    <a href="#" :class="currentPage === 'registration' ? 'select' : ''" @click.prevent="$emit('selectpage', 'registration')"><li>Зарегестрироваться</li></a>
                    <a href="#"><li>Поддержка</li></a>
                </ul>
                <ul v-else>
                    <a href="#" :class="currentPage === 'main' ? 'select' : ''" @click.prevent="$emit('selectpage', 'main')" ><li>Главная</li></a>
                    <a href="#"><li>Поддержка</li></a>
                    <a href="#"><li>Личный кабинет</li></a>
                    <a href="#" @click.prevent="$emit('logout')"><li>Выйти</li></a>
                </ul>
            </div>
        </div>
        
        <div/>
    `,

    components:{
        vLogotype,
    },
    data(){
        return{
            scrollPosition: null
        }
    },
    props:{
        currentPage: String,
        scrollNumber: Number,
        loginUser: Boolean,
        inFooter: Boolean,
    },
    methods: {
        updateScroll() {
           this.scrollPosition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }

    
}