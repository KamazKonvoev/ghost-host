import vInputdomen from "./vInputdomen.js"
export default{
    template: `
<section :class="darkThem ? 'domain__form-dark' : 'domain__form' ">
    <div class="container">
        <p class="domain__title">Вы хотите приобрести новый домен?</p>
        <p class="domain__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mauris ac nulla interdum, id molestier.</p>
        <v-inputdomen/>
        <div class="price__list">
            <div class="price__list-up">
                <ul>
                    <li>.com</li>
                    <li>1 год</li>
                    <li>550 ₽</li>
                    <li>Комиссия 7%</li>
                </ul>
            </div>
            <div class="price__list-down">
                <ul>
                    <li>.net</li>
                    <li>1 год</li>
                    <li>500 ₽</li>
                    <li>Комиссия 5%</li>
                </ul>
            </div>
        </div>
    </div>
</section>
    
`,
data(){
    return{
        domen:'.com',
        hiddenWindow:false,
    }
},
props:{
    darkThem: Boolean
},
components:{
    vInputdomen
}

}