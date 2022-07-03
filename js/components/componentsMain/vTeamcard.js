export default{
    template: `
<div class="team__card">
    <div class="team__img">
        <img :src="member.img" alt="">
    </div>
    <div class="team__information">
          
        <p class="team__name">{{member.name}}</p>
        <p class="team__role">{{member.role}}</p>
    </div>
    <div class="team__contact">
        <a href="#"><img src="./fonts/facebook_icon_146242.svg" alt=""></a>
        <a href="#"><img src="./fonts/twitter_icon_146244.svg" alt=""></a>
        <a href="#"><img src="./fonts/instagram_icon_146245.svg" alt=""></a>
    </div>
</div>
    `,
    props:{
        member: Object
    }
}