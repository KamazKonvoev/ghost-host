export default{
    template: `
    <section class="register">
        <div class="register__authorisation">
            <a href="#" @click.prevent="$emit('selectpage', 'auth')">Войти</a>
        </div>
        <div class="register__registration">
                <a href="#" @click.prevent="$emit('selectpage', 'registration')">Зарегистрироваться</a>
        </div>
    </section>
    `
}