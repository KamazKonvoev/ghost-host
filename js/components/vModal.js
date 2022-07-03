export default{
    template: `
<section class="modal__window" >
    <div class="modal-container" id="modal-opened">
        <div class="modal">
            <div class="modal__details">
                <h1 class="modal__title">Вы успешно зарегестрировались</h1>
            </div>
                <p class="modal__text">Теперь вы можете авторизоваться. Чтобы войти в свой личный кабинет, нажмите на кнопку расположенную ниже.</p>
                <button class="modal__btn" @click.prevent="$emit('gotoacc')">Войти</button>
                <a href="#modal-closed" class="link-2" @click.prevent="$emit('closemodal')"></a>
         </div>
    </div>
</section>
    `,

}