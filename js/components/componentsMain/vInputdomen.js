export default{
    template: `
    <div class="domain__form-inner">
        <div class="square"><p>WWW.</p></div>
        <input type="text" class="domain__input">
        <div class="square"><p>{{domen}} <img src="./fonts/arrow-down-svgrepo-com.svg" alt="" @click.prevent="hiddenWindow=!hiddenWindow" :class="hiddenWindow===true ? 'rotate-arrow' : '' "></p></div>
        <div class="domen__choose" v-if="hiddenWindow">
            <p @click="domen='.com'">.com</p>
            <p @click="domen='.net'">.net</p>
        </div>
    </div>

`,
data(){
    return{
        domen:'.com',
        hiddenWindow:false,
    }
}
}