export default{
template:`
<div :class="changeColor">


<div class="packages__card">
<div class="card__header">
    <div class="poloska"></div>
    <img src="./fonts/server-svgrepo-com.svg" alt="">
    <p>{{package.name}}</p>
    <div class="dark__poloska"></div>
</div>
<div class="card__body">
    <ul>
        <li>
            <p>Дисковое пространство </p>
            <p class="package__option">{{package.diskspace}}</p> 
        </li>
        <li>
            <p>Субдомины</p>
            <p class="package__option">{{package.subdomains}}</p> 
        </li>
        <li>
            <p>Базы данных</p>
            <p class="package__option">{{package.databases}}</p> 
        </li>
        <li>
            <p>Панель инструментов</p>
            <p class="package__option">{{package.dashboards}}</p> 
        </li>
        <li>
            <p>Панель управления</p>
            <p class="package__option">{{package.controlPanel}}</p> 
        </li>
        <li>
            <p>Поддержка</p>
            <p class="package__option">{{package.freeSupport}}</p> 
        </li>
    </ul>
</div>
<div class="card__footer">
    <div class="dark__poloska"></div>
    <p>{{package    .price}}<span>/в месяц</span></p>
    <button>Выбрать план</button>
    {{packageColor}}
</div>
</div>
</div>
`,
props:{
    package: Object,
    darkThem: Boolean,
},
data(){
    return{
    }
},
computed:{
    changeColor(){
        if(this.package.name=== 'Базовый пакет'){
            return  'package__green'
        }
        if(this.package.name=== 'Стандартный пакет'){
            return 'package__grey'
        }
        if(this.package.name=== 'Пакет плюс'){
            return 'package__red'
        }
        if(this.package.name=== 'Пакет Gold'){
            return 'package__yellow'
        }
        return
    }
}
}