import vPackagecard from "./vPackagecard.js"
export default{
    template:`
    <section :class="darkThem === true ? 'packages__dark' : 'packages' ">
    <div class="packages__wallpaper"><div class="packages__wallpaper-inner"></div></div>
    <div class="container">
        <div class="packages__cards-outer">
           <v-packagecard v-for="package in packages" :key="package.id" :package="package" :dark-them="darkThem"/>
        </div>
    </div>
</section>
    `,
props:{
    packages: Array,
    darkThem: Boolean,
},
components:{
    vPackagecard
}
}