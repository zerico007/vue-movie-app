import{d as w,u as y,o as x,c as a,a as v,w as M,B as k,b as s,e,t as o,F as S,r as V,f as B,g as C,h as I,i as n,j as R,p as b,k as N,_ as F}from"./index.2c17990c.js";const H=i=>(b("data-v-017e1ffd"),i=i(),N(),i),j={class:"wrapper"},z={class:"return-home-btn btn-body"},E=H(()=>e("span",null,"Return Home",-1)),L={key:0,class:"movie-details-container"},O={class:"movie-details-container__poster"},P=["src"],T={class:"movie-details-container__info"},Y={class:"genres"},q=w({__name:"MovieDetailsView",setup(i){const h=C(),f=I(),t=y();x(()=>{t.fetchMovieDetails(h.params.id)});function D(){f.push("/vue-movie-app"),t.resetMovieDetails()}return(A,G)=>{var l,r,c,_,u,d,p;const g=R("vue-feather");return n(),a("div",j,[v(k,{onClick:D,theme:"secondary",width:"150px"},{default:M(()=>[e("div",z,[v(g,{type:"arrow-left",size:"20px"}),E])]),_:1}),s(t).movieDetails?(n(),a("div",L,[e("div",O,[e("img",{src:(r=(l=s(t).movieDetails)==null?void 0:l.title.image)==null?void 0:r.url,alt:"movie poster"},null,8,P)]),e("div",T,[e("h1",null,o((c=s(t).movieDetails)==null?void 0:c.title.title),1),e("p",null,"Year: "+o((_=s(t).movieDetails)==null?void 0:_.title.year),1),e("p",null," Runtime: "+o((u=s(t).movieDetails)==null?void 0:u.title.runningTimeInMinutes)+" minutes ",1),e("p",null,"Plot: "+o((d=s(t).movieDetails)==null?void 0:d.plotOutline.text),1),e("ul",Y,[(n(!0),a(S,null,V((p=s(t).movieDetails)==null?void 0:p.genres,m=>(n(),a("li",{key:m},o(m),1))),128))]),e("p",null,"Rating: "+o(s(t).movieDetails.ratings.rating),1)])])):B("",!0)])}}});const K=F(q,[["__scopeId","data-v-017e1ffd"]]);export{K as default};
