(()=>{"use strict";const e=["`","1","2","3","4","5","6","7","8","9","0","-","=","backspace","tab","q","w","e","r","t","y","u","i","o","p","[","]","delete","capslock","a","s","d","f","g","h","j","k","l",";","'","enter","shift","z","x","c","v","b","n","m",",",".","/","arrowup","shift","control","meta","alt","space","alt","arrowleft","arrowdown","arrowright","control"],t=["~","!","@","#","$","%","^","&","*","(",")","_","+","q","w","e","r","t","y","u","i","o","p","{","}","a","s","d","f","g","h","j","k","l",":",'"',"z","x","c","v","b","n","m","<",">","?"],s=["`","1","2","3","4","5","6","7","8","9","0","-","=","q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",",".","/"],o=["ё","1","2","3","4","5","6","7","8","9","0","-","=","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю","."],r=["ё","!",'"',"№",";","%",":","?","*","(",")","_","+","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю",","],a={elements:{main:null,keysContainer:null,keys:[]},eventHandlers:{oninput:null},properties:{value:"",capsLock:!1,lang:!1},cursorPosition:0,init(){this.elements.main=document.createElement("div"),this.elements.keysContainer=document.createElement("div"),this.elements.main.classList.add("keyboard"),this.elements.keysContainer.classList.add("keyboard__keys"),this.elements.keysContainer.appendChild(this.createKeys()),this.elements.keys=this.elements.keysContainer.querySelectorAll(".keyboard__key"),this.elements.main.appendChild(this.elements.keysContainer),document.body.appendChild(this.elements.main);const e=document.querySelector(".use-keyboard-input");let t;e.addEventListener("focus",(()=>{this.open(e.value,(s=>{t=[...s],t.pop(),e.value=t.join("")}))})),e.addEventListener("blur",(()=>{this.open(e.value,(t=>{e.value=t}))})),this.open(e.value,(t=>{e.value=t})),e.addEventListener("mouseup",(()=>{this.cursorPosition=e.selectionStart,console.log(this.cursorPosition,"!")}))},createKeys(){const t=document.createDocumentFragment(),s=e,o=document.querySelector(".use-keyboard-input");return s.forEach((e=>{let s;const r=document.createElement("button"),a=-1!==["backspace","delete","enter","?"].indexOf(e);switch(e.length>1&&(r.dataset.name=e.toLocaleLowerCase()),(e.charCodeAt(0)>=65&&e.charCodeAt(0)<=90||e.charCodeAt(0)>=97&&e.charCodeAt(0)<=122)&&(r.dataset.letter=e.toLocaleLowerCase()),r.setAttribute("type","button"),r.classList.add("keyboard__key"),e){case"backspace":r.classList.add("keyboard__key--wide","func-keys"),r.innerHTML="Backspace",r.addEventListener("click",(()=>{let e=[...this.properties.value];e.splice(this.cursorPosition-1,1),e=e.join(""),this.cursorPosition>0&&(this.cursorPosition-=1),console.log(this.cursorPosition),this.properties.value=this.cursorPosition>0?e:this.properties.value.substring(0,this.properties.value.length-1),this.triggerEvent("oninput"),this.cursorPosition>0&&(o.selectionStart=o.selectionEnd=this.cursorPosition),o.focus()}));break;case"capslock":r.classList.add("keyboard__key--wide","keyboard__key--activatable","func-keys"),r.innerHTML="Caps",r.addEventListener("click",(()=>{this.toggleCapsLock(),r.classList.toggle("keyboard__key--active",this.properties.capsLock)}));break;case"enter":r.classList.add("keyboard__key--wide","func-keys"),r.innerHTML="Enter",r.addEventListener("click",(()=>{this.properties.value+="\n",this.triggerEvent("oninput")}));break;case"space":r.classList.add("keyboard__key--extra-wide","func-keys"),r.innerHTML="",r.addEventListener("click",(()=>{this.cursorPosition+=1;let e=[...this.properties.value];e.splice(this.cursorPosition-1,0," "),e=e.join(""),this.properties.value=e,this.triggerEvent("oninput"),this.cursorPosition>=0&&(o.selectionStart=o.selectionEnd=this.cursorPosition),o.focus()}));break;case"arrowup":r.classList.add("func-keys"),r.innerHTML="&#9650;",r.addEventListener("click",(()=>{this.cursorPosition+=1;let e=[...this.properties.value];e.splice(this.cursorPosition-1,0,"▲"),e=e.join(""),this.properties.value=e,this.triggerEvent("oninput"),o.selectionStart=o.selectionEnd=this.cursorPosition,o.focus()}));break;case"arrowleft":r.classList.add("func-keys"),r.innerHTML="&#9668;",r.addEventListener("click",(()=>{this.cursorPosition+=1;let e=[...this.properties.value];e.splice(this.cursorPosition-1,0,"◄"),e=e.join(""),this.properties.value=e,this.triggerEvent("oninput"),o.selectionStart=o.selectionEnd=this.cursorPosition,o.focus()}));break;case"arrowdown":r.classList.add("func-keys"),r.innerHTML="&#9660;",r.addEventListener("click",(()=>{this.cursorPosition+=1;let e=[...this.properties.value];e.splice(this.cursorPosition-1,0,"▼"),e=e.join(""),this.properties.value=e,this.triggerEvent("oninput"),o.selectionStart=o.selectionEnd=this.cursorPosition,o.focus()}));break;case"arrowright":r.classList.add("func-keys"),r.innerHTML="&#9658;",r.addEventListener("click",(()=>{this.cursorPosition+=1;let e=[...this.properties.value];e.splice(this.cursorPosition-1,0,"►"),e=e.join(""),this.properties.value=e,this.triggerEvent("oninput"),o.selectionStart=o.selectionEnd=this.cursorPosition,o.focus()}));break;case"shift":r.classList.add("keyboard__key--wide","func-keys"),r.innerHTML="Shift",r.addEventListener("mousedown",(()=>{this.toggleCapsLockShift()})),r.addEventListener("mouseup",(()=>{this.toggleCapsLockShift()}));break;case"control":r.classList.add("keyboard__key--bold","func-keys"),r.innerHTML="Ctrl";break;case"alt":r.classList.add("keyboard__key--bold","func-keys"),r.innerHTML="Alt";break;case"meta":r.classList.add("keyboard__key--bold","func-keys"),r.innerHTML="Win";break;case"delete":r.classList.add("keyboard__key--midlle-wide","func-keys"),r.innerHTML="Del",r.addEventListener("click",(()=>{0!==o.selectionStart&&(s=o.selectionStart);const e=[...this.properties.value];e.splice(0===o.selectionStart?s:o.selectionStart,1),this.properties.value=e.join(""),this.triggerEvent("oninput"),this.cursorPosition>=0&&(o.selectionStart=o.selectionEnd=this.cursorPosition),o.focus()}));break;case"tab":r.classList.add("keyboard__key--midlle-wide","func-keys"),r.innerHTML="Tab",r.addEventListener("click",(()=>{this.cursorPosition+=2;let e=[...this.properties.value];e.splice(this.cursorPosition-1,0,"  "),e=e.join(""),this.properties.value=e,this.triggerEvent("oninput"),o.selectionStart=o.selectionEnd=this.cursorPosition+1,o.focus()}));break;default:r.textContent=e.toLowerCase(),r.addEventListener("click",(()=>{this.cursorPosition+=1;let e=[...this.properties.value];e.splice(this.cursorPosition-1,0,r.textContent),e=e.join(""),console.log(this.cursorPosition),this.cursorPosition>1?this.properties.value=e:(this.properties.value+=r.textContent,this.cursorPosition=this.properties.value.length),this.triggerEvent("oninput"),o.selectionStart=o.selectionEnd=this.cursorPosition,o.focus()}))}t.appendChild(r),a&&t.appendChild(document.createElement("br"))})),window.addEventListener("keydown",(e=>{let t,s="",r="",a=[],i="";const c=/[А-Яа-я]/gi,n=/[ХхЪъЖжЭэБбЮюЁё]/gi;switch(e.key.length>1?(s=document.querySelector(`.keyboard__key[data-name=${String(e.key).toLowerCase()}]`),a=[...document.querySelectorAll(`.keyboard__key[data-name=${String(e.key).toLowerCase()}]`)]):r=document.querySelector(".keyboard__key--extra-wide"),e.key.toLocaleLowerCase()){case"backspace":this.properties.value=this.properties.value.substring(0,this.properties.value.length-1),this.triggerEvent("oninput"),s.classList.add("keyboard__key--active");break;case"capslock":this.toggleCapsLock(),s.classList.toggle("keyboard__key--active",this.properties.capsLock);break;case"enter":this.cursorPosition=0,this.properties.value+="\n",this.triggerEvent("oninput"),s.classList.add("keyboard__key--active");break;case" ":this.cursorPosition=0,this.properties.value+=" ",this.triggerEvent("oninput"),r.classList.add("keyboard__key--active");break;case"arrowup":this.properties.value+="▲",this.triggerEvent("oninput"),s.classList.add("keyboard__key--active");break;case"arrowleft":this.properties.value+="◄",this.triggerEvent("oninput"),s.classList.add("keyboard__key--active");break;case"arrowdown":this.properties.value+="▼",this.triggerEvent("oninput"),s.classList.add("keyboard__key--active");break;case"arrowright":this.properties.value+="►",this.triggerEvent("oninput"),s.classList.add("keyboard__key--active");break;case"shift":e.repeat||("ShiftLeft"===e.code?a[0].classList.add("keyboard__key--active"):a[1].classList.add("keyboard__key--active"),this.toggleCapsLockShift());break;case"control":"ControlLeft"===e.code?a[0].classList.add("keyboard__key--active"):a[1].classList.add("keyboard__key--active");break;case"alt":e.preventDefault(),"AltLeft"===e.code?a[0].classList.add("keyboard__key--active"):a[1].classList.add("keyboard__key--active");break;case"meta":s.classList.add("keyboard__key--active");break;case"delete":s.classList.add("keyboard__key--active");{0!==o.selectionStart&&(t=o.selectionStart);const e=[...this.properties.value];e.splice(0===o.selectionStart?t:o.selectionStart,1),this.properties.value=e.join(""),this.triggerEvent("oninput")}break;case"tab":e.preventDefault(),this.cursorPosition=0,this.properties.value+="    ",this.triggerEvent("oninput"),s.classList.add("keyboard__key--active");break;default:if(this.cursorPosition=0,this.properties.lang)switch(e.code.toLocaleLowerCase()){case"bracketleft":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="х".charCodeAt(0)))[0].classList.add("keyboard__key--active"),this.properties.value+=this.properties.capsLock?"Х":"х";break;case"bracketright":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="ъ".charCodeAt(0)))[0].classList.add("keyboard__key--active"),this.properties.value+=this.properties.capsLock?"Ъ":"ъ";break;case"semicolon":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="ж".charCodeAt(0)))[0].classList.add("keyboard__key--active"),this.properties.value+=this.properties.capsLock?"Ж":"ж";break;case"quote":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="э".charCodeAt(0)))[0].classList.add("keyboard__key--active"),this.properties.value+=this.properties.capsLock?"Э":"э";break;case"comma":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="б".charCodeAt(0)))[0].classList.add("keyboard__key--active"),this.properties.value+=this.properties.capsLock?"Б":"б";break;case"period":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="ю".charCodeAt(0)))[0].classList.add("keyboard__key--active"),this.properties.value+=this.properties.capsLock?"Ю":"ю";break;case"backquote":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="ё".charCodeAt(0)))[0].classList.add("keyboard__key--active"),this.properties.value+=this.properties.capsLock?"Ё":"ё"}e.key.charCodeAt(0)>=65&&e.key.charCodeAt(0)<=90||e.key.charCodeAt(0)>=97&&e.key.charCodeAt(0)<=122||e.key.search(c)>=0&&-1===e.key.search(n)?i=document.querySelector(`.keyboard__key[data-letter=${[...e.code.toLowerCase()].pop()}]`):-1===e.key.search(n)&&([i]=[...document.querySelectorAll(".keyboard__key")].filter((t=>t.textContent.toLowerCase()===e.key.toLowerCase()))),i&&(this.properties.value+=i.textContent,i.classList.add("keyboard__key--active")),this.triggerEvent("oninput")}})),window.addEventListener("keyup",(e=>{let t="",s="",o=[],r="";const a=/[А-Яа-я]/gi,i=/[ХхЪъЖжЭэБбЮюЁё]/gi;switch(e.key.length>1?(t=document.querySelector(`.keyboard__key[data-name=${String(e.key).toLowerCase()}]`),o=[...document.querySelectorAll(`.keyboard__key[data-name=${String(e.key).toLowerCase()}]`)]):s=document.querySelector(".keyboard__key--extra-wide"),e.key.toLocaleLowerCase()){case"backspace":case"enter":case"arrowup":case"arrowleft":case"arrowdown":case"arrowright":case"meta":case"delete":case"tab":t.classList.remove("keyboard__key--active");break;case" ":s.classList.remove("keyboard__key--active");break;case"shift":e.repeat||("ShiftLeft"===e.code?o[0].classList.remove("keyboard__key--active"):o[1].classList.remove("keyboard__key--active"),this.toggleCapsLockShift());break;case"control":"ControlLeft"===e.code?o[0].classList.remove("keyboard__key--active"):o[1].classList.remove("keyboard__key--active");break;case"alt":e.repeat||("AltLeft"===e.code?o[0].classList.remove("keyboard__key--active"):o[1].classList.remove("keyboard__key--active"));break;default:if(this.properties.lang)switch(e.code.toLocaleLowerCase()){case"bracketleft":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="х".charCodeAt(0)))[0].classList.remove("keyboard__key--active");break;case"bracketright":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="ъ".charCodeAt(0)))[0].classList.remove("keyboard__key--active");break;case"semicolon":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="ж".charCodeAt(0)))[0].classList.remove("keyboard__key--active");break;case"quote":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="э".charCodeAt(0)))[0].classList.remove("keyboard__key--active");break;case"comma":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="б".charCodeAt(0)))[0].classList.remove("keyboard__key--active");break;case"period":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="ю".charCodeAt(0)))[0].classList.remove("keyboard__key--active");break;case"backquote":[...document.querySelectorAll(".keyboard__key")].filter((e=>e.textContent.toLowerCase().charCodeAt(0)==="ё".charCodeAt(0)))[0].classList.remove("keyboard__key--active")}e.key.charCodeAt(0)>=65&&e.key.charCodeAt(0)<=90||e.key.charCodeAt(0)>=97&&e.key.charCodeAt(0)<=122||e.key.search(a)>=0&&-1===e.key.search(i)?r=document.querySelector(`.keyboard__key[data-letter=${[...e.code.toLowerCase()].pop()}]`):-1===e.key.search(i)&&([r]=[...document.querySelectorAll(".keyboard__key")].filter((t=>t.textContent.toLowerCase()===e.key.toLowerCase()))),r&&r.classList.remove("keyboard__key--active")}})),document.addEventListener("keydown",(e=>{e.ctrlKey&&e.altKey&&(this.properties.lang?localStorage.setItem("lang","en"):localStorage.setItem("lang","ru"),this.toggleLanguageLayout())})),t},triggerEvent(e){"function"==typeof this.eventHandlers[e]&&this.eventHandlers[e](this.properties.value)},toggleCapsLock(){this.properties.capsLock=!this.properties.capsLock;const e=[...this.elements.keys].filter((e=>!e.classList.contains("func-keys")));for(const t of e)0===t.childElementCount&&(t.textContent=this.properties.capsLock?t.textContent.toUpperCase():t.textContent.toLowerCase())},toggleCapsLockShift(){this.properties.capsLock=!this.properties.capsLock,[...this.elements.keys].filter((e=>!e.classList.contains("func-keys"))).forEach(((e,a)=>{0===e.childElementCount&&(this.properties.lang?e.textContent=this.properties.capsLock?r[a]:o[a]:e.textContent=this.properties.capsLock?t[a]:s[a],e.textContent=this.properties.capsLock?e.textContent.toUpperCase():e.textContent.toLowerCase())}))},toggleLanguageLayout(){this.properties.lang=!this.properties.lang,[...this.elements.keys].filter((e=>!e.classList.contains("func-keys"))).forEach(((e,t)=>{0===e.childElementCount&&(this.properties.capsLock?e.textContent=this.properties.lang?o[t].toLocaleUpperCase():s[t].toLocaleUpperCase():e.textContent=this.properties.lang?o[t]:s[t])}))},open(e,t){this.properties.value=e||"",this.eventHandlers.oninput=t}};window.onload=()=>{const e=document.createElement("h1");e.classList.add("header"),e.innerHTML="RSS Virtual Keyboard",document.body.append(e);const t=document.createElement("textarea");t.classList.add("use-keyboard-input"),document.body.append(t),a.init();const s=document.createElement("div");s.classList.add("footer"),s.innerHTML="\n    <p>Created in the <span>Windows</span> operating system</p>\n    <p>Press the <span>Ctrl</span> + <span>Alt</span> to switch the keyboard language layout</p>\n  ",document.body.append(s),"ru"===localStorage.getItem("lang")&&a.toggleLanguageLayout()}})();