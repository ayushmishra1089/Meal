(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__37zkG",summary:"CartItem_summary__t2yok",price:"CartItem_price__O2qxA",amount:"CartItem_amount__-dJN3",actions:"CartItem_actions__2Qzqj"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__34OWx",total:"Cart_total__1hiQa",actions:"Cart_actions__2ZmHW","button--alt":"Cart_button--alt__xmA5h",button:"Cart_button__1Byma"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1Z9bj",icon:"HeaderCartButton_icon__Dl_ek",badge:"HeaderCartButton_badge__1Zwqa",bump:"HeaderCartButton_bump__2fRvL"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2vb0y",description:"MealItem_description__1goUy",price:"MealItem_price__3zfB3"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2OGCU",modal:"Modal_modal__G2fdl","slide-down":"Modal_slide-down__32C9-"}},,function(e,t,n){e.exports={header:"Header_header__1r49q","main-image":"Header_main-image__2QUp8"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__3liVe"}},function(e,t,n){e.exports={card:"Card_card__89lBr"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1TWY4","meals-appear":"AvailableMeals_meals-appear__1voe8"}},function(e,t,n){e.exports={input:"Input_input__uFnrp"}},function(e,t,n){e.exports={form:"MealItemForm_form__1AT30"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),c=(n(24),n(2)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(8),u=n.n(m),j=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(r.useContext)(d),m=s.items,j=m.reduce((function(e,t){return e+t.amount}),0),b="".concat(u.a.button," ").concat(a?u.a.bump:" ");return Object(r.useEffect)((function(){if(0!==s.items.length){i(!0);var e=setTimeout((function(){i(!1)}),300);return function(){clearTimeout(e)}}}),[m,s.items.length]),Object(o.jsxs)("button",{className:b,onClick:e.onClick,children:[Object(o.jsx)("span",{className:u.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:u.a.badge,children:j})]})},b=n.p+"static/media/meals.2971f633.jpg",h=n(13),x=n.n(h),p=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"Meals"}),Object(o.jsx)(j,{onClick:e.onshowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},O=n(15),f=n.n(O),_=function(){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food , Delivered To you"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=function(e){return Object(o.jsx)("div",{className:C.a.card,children:e.children})},y=n(17),A=n.n(y),N=n(10),k=n.n(N),I=n(3),w=n(18),M=n.n(w),H=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:M.a.input,children:[Object(o.jsxs)("label",{htmlFor:e.input.id,children:[e.label," "]}),Object(o.jsx)("input",Object(I.a)({ref:t},e.input))]})})),B=n(19),F=n.n(B),T=function(e){var t=Object(r.useState)(!0),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?i(!1):e.onAddToCart(a)},children:[Object(o.jsx)(H,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount(1-5). "})]})},D=function(e){var t="\u20b9".concat(e.price.toFixed(2)),n=Object(r.useContext)(d);return Object(o.jsxs)("li",{className:k.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("div",{className:k.a.description,children:[e.description," "]}),Object(o.jsxs)("div",{className:k.a.price,children:[t," "]})]}),Object(o.jsx)("div",{children:Object(o.jsx)(T,{id:e.id,onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})}})})]})},R=[{id:"m1",name:"Biryani",description:" It is a layered rice preparation, traditionally made with cooked meat and rice. The meat is flavoured with warm spices (garam masala) and a gravy with tomato or onion.",price:180},{id:"m2",name:"Tandoori Chicken",description:"A dish of roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour.",price:400},{id:"m3",name:"Masala Chai",description:"A tea beverage made by boiling black tea in milk and water with a mixture of aromatic herbs and spices",price:30},{id:"m4",name:"Masala Dosa",description:"It is made from rice, lentils, potato, fenugreek, ghee and curryleaves, and served with chutneys and sambar.",price:80}],E=function(){var e=R.map((function(e){return Object(o.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:A.a.meals,children:Object(o.jsx)(g,{children:Object(o.jsx)("ul",{children:e})})})},z=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(E,{})]})},q=n(11),S=n.n(q),P=function(e){return Object(o.jsx)("div",{className:S.a.backdrop,onClick:e.onClose})},V=function(e){return Object(o.jsx)("div",{className:S.a.modal,children:Object(o.jsx)("div",{className:S.a.content,children:e.children})})},G=document.getElementById("overlays"),J=function(e){return Object(o.jsxs)(r.Fragment,{children:[i.a.createPortal(Object(o.jsx)(P,{onClose:e.onClose}),G),i.a.createPortal(Object(o.jsx)(V,{children:e.children}),G)]})},Q=n(4),U=n.n(Q),W=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:U.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:U.a.summary,children:[Object(o.jsx)("span",{className:U.a.price,children:t}),Object(o.jsxs)("span",{className:U.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:U.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=n(5),Y=n.n(Z),L=function(e){var t=Object(r.useContext)(d),n="\u20b9".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,i=function(e){t.removeItem(e)},c=function(e){t.addItem(e)},s=Object(o.jsx)("ul",{className:Y.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),oAdd:c.bind(null,e)},e.id)}))});return Object(o.jsxs)(J,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:Y.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:Y.a.actions,children:[Object(o.jsx)("button",{className:Y.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:Y.a.button,children:"Order"})]})]})},K=n(14),X={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),c=e.items[i];if(c){var r=Object(I.a)(Object(I.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(K.a)(e.items))[i]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(K.a)(e.items))[o]=m}return{items:s,totalAmount:d}}return X},ee=function(e){var t=Object(r.useReducer)($,X),n=Object(c.a)(t,2),a=n[0],i=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(o.jsx)(d.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ee,{children:[n&&Object(o.jsx)(L,{onClose:function(){a(!1)}}),Object(o.jsx)(p,{onshowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(z,{})})]})};i.a.render(Object(o.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.39ba8708.chunk.js.map