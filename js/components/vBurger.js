import vLogotype from "./vLogotype.js"
export default{
    template: `
<div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box" v-if="!loginUser">
            <li><a class="menu__item" href="#" @click.prevent="$emit('selectpage', 'main')">Главная</a></li>
			<li><a class="menu__item" href="#" @click.prevent="$emit('selectpage', 'auth')">Войти</a></li>
			<li><a class="menu__item" href="#" @click.prevent="$emit('selectpage', 'registration')">Зарегистрироваться</a></li>
			<li><a class="menu__item" href="#" >Поддержка</a></li>
    </ul>
    <ul v-else>
            <li><a class="menu__item" href="#">Главная</a></li>
            <li><a class="menu__item" href="#">Поддержка</a></li>
            <li><a class="menu__item" href="#">Личный кабинет</a></li>
            <li><a class="menu__item" href="#" @click.prevent="$emit('logout')">Выйти</a></li>
    </ul>
    <v-logotype/>
  </div>
    `,
    components:{
        vLogotype
    },
    props:{
        loginUser: Boolean,
    }
}