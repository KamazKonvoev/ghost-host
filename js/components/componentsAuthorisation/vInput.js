export default{
    template: `
    <input :type="typeInput" :placeholder="placeHolder" class="form__input" :value="reactivElem" @input="$emit('update:reactivElem', $event.target.value)" required>   
    `,
    props:{
        typeInput: String,
        placeHolder: String,
        requiredStatus: Boolean,
        reactivElem: {type: String, default: null,},
    },
   
}