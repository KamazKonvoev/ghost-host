export default{
    template:`
<div class="error">
    <div class="error-inner">
        <h2>Ошибка <img src="./fonts/note-warning.d6e4c7b35b5ed187e936.svg" alt=""></h2>
        <p>{{errors}}</p>
    </div>
</div>
    `,
    props:{
        errors: String,
        showError: Boolean,
        darkThem: Boolean
    },
}