import{_ as u,o as p,c,a as m,d as s,h as l,i as d,j as f,F as _}from"./index-ec9bea5f.js";const{VITE_APP_URL:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"helena27",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},g={data(){return{user:{username:"",password:""}}},methods:{login(){const a=`${h}admin/signin`;this.$http.post(a,this.user).then(e=>{const{token:n,expired:r}=e.data;console.log(n,r),document.cookie=`helenaToken=${n}; expires=${new Date(r)};`,this.$router.push("/admin/products")}).catch(e=>{alert(e)})}}},w={class:"form-floating mb-3"},P=s("label",{for:"floatingInput"},"Email address",-1),b={class:"form-floating"},x=s("label",{for:"floatingPassword"},"Password",-1),V=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function E(a,e,n,r,t,i){return p(),c(_,null,[m(" 登入畫面 "),s("form",{class:"form-signin",onSubmit:e[2]||(e[2]=f((...o)=>i.login&&i.login(...o),["prevent"]))},[s("div",w,[l(s("input",{type:"email",class:"form-control",id:"floatingInput","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,t.user.username]]),P]),s("div",b,[l(s("input",{type:"password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o),id:"floatingPassword",placeholder:"Password",required:""},null,512),[[d,t.user.password]]),x]),V],32)],64)}const T=u(g,[["render",E]]);export{T as default};
