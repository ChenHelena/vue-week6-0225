import{R as h,_,r as c,o as p,c as m,a as e,b as t,w as s,d as i,j as f,F as k}from"./index-74cc9183.js";const{VITE_APP_URL:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"helena27",BASE_URL:"/vue-week6-0225/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},F={components:{RouterView:h},methods:{logout(){document.cookie=`helenaToken=; expires=${new Date}`,this.$router.push("/login")},checkAdmin(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=n;const o=`${A}api/user/check`;this.$http.post(o).then(r=>{r.data.success||this.$router.push("/login")})}},mounted(){this.checkAdmin()}},$=i("hr",null,null,-1);function w(n,o,r,V,E,a){const u=c("router-link"),l=c("router-view");return p(),m(k,null,[e(" 這是後台(DashboardView) "),t(u,{to:"/admin/products"},{default:s(()=>[e("後台產品列表")]),_:1}),e(" | "),t(u,{to:"/admin/orders"},{default:s(()=>[e("後台訂單列表")]),_:1}),e(" | "),t(u,{to:"/"},{default:s(()=>[e("回前台首頁")]),_:1}),e(" | "),i("a",{href:"#",onClick:o[0]||(o[0]=f((...d)=>a.logout&&a.logout(...d),["prevent"]))},"登出"),$,t(l)],64)}const P=_(F,[["render",w]]);export{P as default};
