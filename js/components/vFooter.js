import vHeader from "./vHeader.js"
export default{
    template: `
<footer>
    <div class="container">
        <div class="main__footer">
            <v-header :current-page="currentPage" @selectpage="selectPage($event)" :login-user="loginUser" @logout="$emit('logout')"/>
        </div>
        <div class="footer__pages">
            <div class="footer__pages-inner">
                <p class="footer__description">Lorem ipsum dolor sit amet, consecteteeseurı adipiscing elit. Donec mollis commodoeesene que, non commodo risus volutpat vel.</p>
                <ul class="footer__menu">
                    <li><img src="./fonts/right-arrow-svgrepo-com2.svg" alt=""><a href="">Поддержка</a></li>
                    <li><img src="./fonts/right-arrow-svgrepo-com2.svg" alt=""><a href="">Аккаунт</a></li>
                    <li><img src="./fonts/right-arrow-svgrepo-com2.svg" alt=""><a href="">Каталог</a></li>
                    <li><img src="./fonts/right-arrow-svgrepo-com2.svg" alt=""><a href="">Шорткоды</a></li>
                </ul>
                <ul class="footer__menu">
                    <li><img src="./fonts/right-arrow-svgrepo-com2.svg" alt=""><a href="">Поддержка</a></li>
                    <li><img src="./fonts/right-arrow-svgrepo-com2.svg" alt=""><a href="">Аккаунт</a></li>
                    <li><img src="./fonts/right-arrow-svgrepo-com2.svg" alt=""><a href="">Каталог</a></li>
                    <li><img src="./fonts/right-arrow-svgrepo-com2.svg" alt=""><a href="">Шорткоды</a></li>
                </ul>
                <div class="footer__poloska"></div>
                <div class="contacts">
                    <a href=""><img src="./fonts/-phone_90567.svg" alt="">0000-0000-0000</a>
                    <a href=""><img src="./fonts/mail-svgrepo-com.svg" alt="">informationteam@ghosthost.com</a>
                    <p>Lorem Ipsum Street, Lorem Avenue,Lorem Ipsum</p>
                </div>
            </div>
        </div>
    </div>
</footer>
    `,
    components:{
        vHeader
    },
    props:{
        currentPage: String,
        loginUser: Boolean,
    },
    methods:{
        selectPage(elem){
            this.$emit('selectpage', elem)
        }
    }

}