import{_ as s,o as c,c as a,a as n,d as r,t as u,F as d}from"./index-74cc9183.js";const{VITE_APP_URL:p,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"helena27",BASE_URL:"/vue-week6-0225/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},l={data(){return{product:{}}},methods:{getProduct(){const{id:e}=this.$route.params;this.$http.get(`${p}api/${i}/product/${e}`).then(t=>{this.product=t.data.product,console.log(t.data.product)})}},mounted(){this.getProduct()}},_=["src"];function h(e,t,P,m,o,f){return c(),a(d,null,[n(" 這是單一產品 "),r("h4",null,u(o.product.title),1),r("img",{src:o.product.imageUrl,width:"300",alt:""},null,8,_)],64)}const E=s(l,[["render",h]]);export{E as default};
