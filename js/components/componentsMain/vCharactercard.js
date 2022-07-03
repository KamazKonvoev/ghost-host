
export default{
    template:`
<div class="character__card">
    <div class="character__icon" :style="changeColor"><img :src="imageicon" alt="" :style="{'height': heighticon}"></div>
    <p class="character__header">{{textHeader}}</p>
    <p class="character__description">{{description}}</p> 
</div>
    `,
    props:{
        textHeader: String,
        description:String,
        coloricon: String,
        imageicon: String,
        heighticon: String
    },
    computed:{
        changeColor(){
            return{
                'background-color': this.coloricon,
            }
        }
    }

}