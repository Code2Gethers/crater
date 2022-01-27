import{G as E,J as G,B as F,k as h,L as p,M as C,N as k,Q as L,P,T as R,r as c,o as g,e as D,f as u,w as i,h as $,t as I,u as e,x as _,l as b,m as A,j as O,i as T,U as z}from"./vendor.01d0adc5.js";import{a as J,u as Q}from"./global.baecaf92.js";import"./auth.0422ff47.js";import"./main.c43fbacd.js";const H=["onSubmit"],K={class:"font-bold text-left"},W={class:"mt-2 text-sm leading-snug text-left text-gray-500",style:{"max-width":"680px"}},X={class:"grid gap-6 sm:grid-col-1 md:grid-cols-2 mt-6"},Y=$("span",null,null,-1),oe={setup(Z){const r=J();Q(),E();const{t:m,tm:S}=G();let f=F([]),d=F(!1),y=F(null),n=F(!1),l=F(!1);r.userForm.avatar&&f.value.push({image:r.userForm.avatar});const U=h(()=>({userForm:{name:{required:p.withMessage(m("validation.required"),C),minLength:p.withMessage(m("validation.name_min_length",{count:3}),k(3))},email:{required:p.withMessage(m("validation.required"),C),email:p.withMessage(m("validation.email_incorrect"),L)},password:{minLength:p.withMessage(m("validation.password_min_length",{count:8}),k(8))},confirm_password:{sameAsPassword:p.withMessage(m("validation.password_incorrect"),P(r.userForm.password))}}})),o=R(U,h(()=>r));function x(t,s){y.value=s}function M(){y.value=null}function q(){if(o.value.userForm.$touch(),o.value.userForm.$invalid)return!0;d.value=!0;let t=new FormData;t.append("name",r.userForm.name),t.append("email",r.userForm.email),r.userForm.password!=null&&r.userForm.password!==void 0&&r.userForm.password!==""&&t.append("password",r.userForm.password),y.value&&t.append("customer_avatar",y.value),r.updateCurrentUser({data:t,message:S("settings.account_settings.updated_message")}).then(s=>{s.data.data&&(d.value=!1,r.$patch(B=>{B.userForm.password="",B.userForm.confirm_password=""}))}).catch(s=>{d.value=!1})}return(t,s)=>{const B=c("BaseFileUploader"),v=c("BaseInputGroup"),V=c("BaseInput"),w=c("BaseIcon"),N=c("BaseButton"),j=c("BaseCard");return g(),D("form",{class:"relative h-full mt-4",onSubmit:z(q,["prevent"])},[u(j,null,{default:i(()=>[$("div",null,[$("h6",K,I(t.$t("settings.account_settings.account_settings")),1),$("p",W,I(t.$t("settings.account_settings.section_description")),1)]),$("div",X,[u(v,{label:t.$tc("settings.account_settings.profile_picture")},{default:i(()=>[u(B,{modelValue:e(f),"onUpdate:modelValue":s[0]||(s[0]=a=>_(f)?f.value=a:f=a),avatar:!0,accept:"image/*",onChange:x,onRemove:M},null,8,["modelValue"])]),_:1},8,["label"]),Y,u(v,{label:t.$tc("settings.account_settings.name"),error:e(o).userForm.name.$error&&e(o).userForm.name.$errors[0].$message,required:""},{default:i(()=>[u(V,{modelValue:e(r).userForm.name,"onUpdate:modelValue":s[1]||(s[1]=a=>e(r).userForm.name=a),invalid:e(o).userForm.name.$error,onInput:s[2]||(s[2]=a=>e(o).userForm.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),u(v,{label:t.$tc("settings.account_settings.email"),error:e(o).userForm.email.$error&&e(o).userForm.email.$errors[0].$message,required:""},{default:i(()=>[u(V,{modelValue:e(r).userForm.email,"onUpdate:modelValue":s[3]||(s[3]=a=>e(r).userForm.email=a),invalid:e(o).userForm.email.$error,onInput:s[4]||(s[4]=a=>e(o).userForm.email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),u(v,{error:e(o).userForm.password.$error&&e(o).userForm.password.$errors[0].$message,label:t.$tc("settings.account_settings.password")},{default:i(()=>[u(V,{modelValue:e(r).userForm.password,"onUpdate:modelValue":s[7]||(s[7]=a=>e(r).userForm.password=a),type:e(n)?"text":"password",invalid:e(o).userForm.password.$error,onInput:s[8]||(s[8]=a=>e(o).userForm.password.$touch())},{right:i(()=>[e(n)?(g(),b(w,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:s[5]||(s[5]=a=>_(n)?n.value=!e(n):n=!e(n))})):(g(),b(w,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:s[6]||(s[6]=a=>_(n)?n.value=!e(n):n=!e(n))}))]),_:1},8,["modelValue","type","invalid"])]),_:1},8,["error","label"]),u(v,{label:t.$tc("settings.account_settings.confirm_password"),error:e(o).userForm.confirm_password.$error&&e(o).userForm.confirm_password.$errors[0].$message},{default:i(()=>[u(V,{modelValue:e(r).userForm.confirm_password,"onUpdate:modelValue":s[11]||(s[11]=a=>e(r).userForm.confirm_password=a),type:e(l)?"text":"password",invalid:e(o).userForm.confirm_password.$error,onInput:s[12]||(s[12]=a=>e(o).userForm.confirm_password.$touch())},{right:i(()=>[e(l)?(g(),b(w,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:s[9]||(s[9]=a=>_(l)?l.value=!e(l):l=!e(l))})):(g(),b(w,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:s[10]||(s[10]=a=>_(l)?l.value=!e(l):l=!e(l))}))]),_:1},8,["modelValue","type","invalid"])]),_:1},8,["label","error"])]),u(N,{loading:e(d),disabled:e(d),class:"mt-6"},{left:i(a=>[e(d)?O("",!0):(g(),b(w,{key:0,name:"SaveIcon",class:A(a.class)},null,8,["class"]))]),default:i(()=>[T(" "+I(t.$t("general.save")),1)]),_:1},8,["loading","disabled"])]),_:1})],40,H)}}};export{oe as default};