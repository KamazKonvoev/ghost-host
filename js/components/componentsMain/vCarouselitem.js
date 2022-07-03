export default{
    template: `
<div class="carousel__item" :style="{'margin-left': '-' +(50 * currentSlide + '%')}">
    <p :class='offset'>“{{citation.citation}}”  </p> 
    <p :class="offset">-{{citation.Author}}</p>
</div>
    `,
    props:{
        citation: Object,
        currentSlide: Number
    },
    computed:{
        offset(){
            if(!(this.currentSlide+1 === this.citation.id)){
                return 'offset__citation'
            }
        }
    }

}