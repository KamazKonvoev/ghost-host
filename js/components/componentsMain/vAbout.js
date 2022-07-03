import vTeamcard from "./vTeamcard.js"
export default{
    template:`
 <section :class="darkThem === true ? 'about-dark' : 'about'">
    <div class="container">
        <div class="about__information">
            <div class="about__information-inner">
                <h3>О нас</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat eget diam sit amet
                    molestie.Curabitur. ut ipsum bibendum tortor lacinia fermentum nec joeıa.Mauris at augue libero.
                    Fusce posuere, sapien nec poır.Uaee augsuada sed mauris in tincidunt...
                </p>
            </div> 
        </div>
        <div class="about__team">
           <v-teamcard v-for="member in teamCompany" :key="member.id" :member="member"/>
        </div>
    </div>
</section>

    `,
    components:{
        vTeamcard
    },
    props:{
        teamCompany: Array,
        darkThem: Boolean
    }
    
}