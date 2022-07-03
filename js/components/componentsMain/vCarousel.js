import vCarouselitem from "./vCarouselitem.js"
export default{
    template: `
<section class="carousel">
    <button @click.prevent="prevSlide"><img src="./fonts/back-light-svgrepo-com.svg" alt=""></button>
    <div class="carousel__inner">
        <v-carouselitem v-for="citation in teamCitation" :key="citation.id" :citation="citation" :current-slide="currentSlide"/>
    </div>
    <button @click.prevent="nextSlide"><img src="./fonts/next-light-svgrepo-com.svg" alt=""></button>
</section>
    `,
    components:{
        vCarouselitem
    },
    props:{
        teamCitation: Array,
        interval: Number
    },
    data(){
        return{
            currentSlide:0
        }
    },
    methods:{
        prevSlide(){
            if(this.currentSlide !==0){
                this.currentSlide--
            }
        },
        nextSlide(){
            if(this.currentSlide >= this.teamCitation.length-1){
                this.currentSlide=0
                return
            }
            this.currentSlide++
        }
    },
    mounted(){
        if(this.interval >0){
            let th= this
            setInterval(function(){
                th.nextSlide()
            }, th.interval)
        }
    }
}