import vCharactercard from "./vCharactercard.js"
export default{
    template:`
    <section :class="darkThem  ? 'characters__dark' : 'characters'">
            <div class="container">
                <div class="characters__inner">
                   <v-charactercard :coloricon="'#f1c40f'" :heighticon="'25px'" :text-header="'Быстрые сервера'" :description="'Nulla dapibus neque augue, quis tincidunt tortor aliquam vitae.'" :imageicon="'./fonts/lightning-svgrepo-com.svg'"/> 
                   <v-charactercard :coloricon="'#0faff1'" :heighticon="'25px'" :text-header="'Облачные сервера'" :description="'Nulla dapibus neque augue, quis tincidunt tortor aliquam vitae.'" :imageicon="'./fonts/clouddown_icon-icons.com_54405.svg'"/> 
                   <v-charactercard :coloricon="'#95a5a6'" :heighticon="'25px'" :text-header="'Перенос доменов'" :description="'Nulla dapibus neque augue, quis tincidunt tortor aliquam vitae.'" :imageicon="'./fonts/two-clockwise-circular-rotating-arrows-circle_icon-icons.com_72907.svg'"/> 
                   <v-charactercard :coloricon="'#f1540f'" :heighticon="'25px'" :text-header="'Постоянная поддержка'" :description="'Nulla dapibus neque augue, quis tincidunt tortor aliquam vitae.'" :imageicon="'./fonts/comments_icon-icons.com_70231.svg'"/> 
                </div>
            </div>
    </section>
    `,
    components:{
        vCharactercard
    },
    props:{
        darkThem: Boolean
    }
}