var door1 = document.querySelector('.door1')
var door2 = document.querySelector('.door2')
var door3 = document.querySelector('.door3')
var div1 = document.querySelector('.himbil')
var div2 = document.querySelector('.himbil2')
var div3 = document.querySelector('.himbil3')
var news1 = document.querySelector('.fornew1')
var news2 = document.querySelector('.fornew2')
var news3 = document.querySelector('.fornew3')
var paragraph1 = document.querySelector('.forparagraph1')
var paragraph2 = document.querySelector('.forparagraph2')
var paragraph3 = document.querySelector('.forparagraph3')
var images = [`<img src="./Gates.jfif" alt=""></img>`,`<img src="./grandfather.jfif" alt=""></img>`,`<img src="./js.jfif" alt=""></img>`]
var paragraphs = [paragraph1,paragraph2,paragraph3]
var create = [news1,news2,news3]
var divs = [div1,div2,div3]
var doors = [door1,door2,door3]
var number = Math.floor(Math.random()*doors.length)
var imgNumber = Math.floor(Math.random()*images.length)
console.log(number)
function addImg(){
    x = doors[number]
   
    x.addEventListener('click',function(){
    x.style.display = "none"
    showImg = images[imgNumber]
    divs[number].innerHTML=showImg
    
    if(showImg == images[0]){
       console.log(create[number])
      
       create[number].innerHTML = (`<button class="newBtn">Cry!</button>`)
       paragraphs[number].innerHTML=(`<p  style="margin-left: 0%;">Siz oz evinizin 7 gunluk demo versiyasini istifade edirsinz.Illik ve ya ayliq istifade ucun premium ve ya gold paketlerimize muraciet edin!</p>
       `)
       $('.newBtn').on('click',function(){
        var audio = new Audio("cry.mp3");
        audio.play()

       })
    }
    else if(showImg==images[1]){
        create[number].innerHTML = (`<button class="newBtn2 newBtn">Run!</button>`)
        paragraphs[number].innerHTML=(`<p  style="margin-left: 0%;">Dostum,bu deyesen o hemen ipi tutan agsaqqaldir.Dedim axi cox ses-kuy etme,yuxusundan oyandirmisan.Qac!</p>
        `)
        $('.newBtn').on('click',function(){
            body = document.querySelector('body')
            body.style.display="none"
           })
    }
    else{
        create[number].innerHTML = (`<button class="newBtn2 newBtn">Come on Python!</button>`)
        paragraphs[number].innerHTML=(`<p  style="margin-left: 0%;">Şərhsiz...</p>
        `)
        $('.newBtn').on('click',function(){
            alert("Java>Python && Javascript")
           })
    }
       
    })
}
addImg()