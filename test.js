taskbar = createSprite(displayWidth/2,20,displayWidth,150)
  taskbar.shapeColor="skyblue"

//Logo
  logo=createSprite(150,40,60,60);
  logo.addImage("LOGO",logoImage);
  logo.scale=0.5
  //Seach bar
  inputbox=createInput("SEARCH")
  inputbox.position(300,20)
  inputbox.size(1000,40)
//Magifier glass beside taskbar
  search=createSprite(1330,35,60,60)
  search.addImage("Glass",searchImg)
  search.scale=0.07


  pr1bu=createButton("")
  pr1bu.position(100,100)
  pr1bu.size(200,250)
  pr1bu.style("opacity","0")


  pr2bu=createButton("")
  pr2bu.position(350,100)
  pr2bu.size(200,250)
  pr2bu.style("opacity","0.1")

  pr3bu=createButton("")
  pr3bu.position(600,100)
  pr3bu.size(200,250)
  pr3bu.style("opacity","0.1")

  pr4bu=createButton("")
  pr4bu.position(850,100)
  pr4bu.size(200,250)
  pr4bu.style("opacity","0.1")

  pr5bu=createButton("")
  pr5bu.position(1100,100)
  pr5bu.size(200,250)
  pr5bu.style("opacity","0.1")

  pr6bu=createButton("")
  pr6bu.position(1350,100)
  pr6bu.size(200,250)
  pr6bu.style("opacity","0.1")

  pr7bu=createButton("")
  pr7bu.position(1600,100)
  pr7bu.size(200,250)
  pr7bu.style("opacity","0.1")


//Creating products and adding images
  pr1b=createSprite(200,220,170,220)
  pr1b.addImage("outline",outline)
  pr1b.scale=0.5

  pr2b=createSprite(450,220,170,220)
  pr2b.addImage("O",outline)
  pr2b.scale=0.5

  pr1=createSprite(200,200,20,20)
  pr1.addImage("Biscut",pr1img)

  pr2=createSprite(450,200,20,20)
  pr2.addImage("chips",pr2img)



  pr3b=createSprite(700,220,20,20)
  pr3b.addImage("O",outline)

  pr3=createSprite(700,200,20,20)
  pr3.addImage("nut",pr3img )
  pr3b.scale=0.5
  
  pr4b=createSprite(950,220,20,20)
  pr4b.addImage("o",outline)
  pr4b.scale=0.5

  pr4=createSprite(950,200,20,20)
  pr4.addImage("Slice",pr4img)

  pr5b=createSprite(1200,220,20,20)
  pr5b.addImage("outline",outline)
  pr5b.scale=0.5

  pr5=createSprite(1200,200,20,20)
  pr5.addImage("cheese",pr5img)

 p6b = createSprite(1450,220,20,20)
 p6b.addImage("ou",outline)
 p6b.scale=0.5

 var p6 = createSprite(1450,200,20,20)
 p6.addImage("idk",p6i)

 p7b = createSprite(1700,220,20,20)
 p7b.addImage("o",outline)
  p7b.scale=0.5

  var p7=createSprite(1700,200,20,20)
  p7.addImage("p",p7i)

  p8b = createSprite(200,500,20,20)
  p8b.addImage("o",outline)
  p8b.scale=0.5

  var p8=createSprite(200,480,20,20)
  p8.addImage("p",p8i)

  p9b=createSprite(450,500,20,20)
  p9b.addImage("o",outline)
  p9b.scale=0.5 

  var p9=createSprite(450,480,20,20)
  p9.addImage("j",p9i)

  p10b=createSprite(700,500,20,20)
  p10b.addImage("k",outline)
  p10b.scale=0.5 

  var p10=createSprite(700,480,20,20)
     p10.addImage("j",p10i)

     p11b=createSprite(950,500,20,20)
     p11b.addImage("h",outline)
     p11b.scale=0.5

     var p11=createSprite(950,480,20,20)
        p11.addImage("g",p11i)

        p12b=createSprite(1200,500,20,20)
        p12b.addImage("g",outline)
        p12b.scale=0.5

        var p12=createSprite(1200,500,20,20)
        p12.addImage("d",p12i)

        p13b=createSprite(1200,500,20,20)
        p13b.addImage('c',outline)
        p13b.scale=0.5

        var p13b=createSprite(1200,500,20,20)
            p13b.addImage("t",p13i)
        
            p14b=createSprite(1450,500,20,20)
            p14b.addImage("y",outline)
            p14b.scale=0.5
            
            var p14b=createSprite(1450,500,20,20)
                 p14b.addImage("j",p14i)

                 p15b=createSprite(1700,500,20,20)
                 p15b.addImage("h",outline)
                 p15b.scale=0.5

             var p15b=createSprite(1700,500,20,20) 
                 p15b.addImage("k",p15i) 
                 
                 
            p16b=createSprite(200,780,20,20)  
            p16b.addImage("i",outline)   
            p16b.scale=0.5

            var p16b=createSprite(200,780,20,20)
               p16b.addImage("l",p16i)

               p17b=createSprite(450,780,20,20)
               p17b.addImage("p",outline)
               p17b.scale=0.5

             var p18b=createSprite(450,780,20,20)
                 p18b.addImage("n",p18i)
                 
                
                 p19b=createSprite(700,780,20,20)
                 p19b.addImage("j",outline)
                 p19b.scale=0.5

                 var p19b=createSprite(700,780,20,20)
                   p19b.addImage("m",p19i)

               p20b=createSprite(950,780,20,20)
               p20b.addImage("k",outline) 
               p20b.scale=0.5 
                
         var p20b=createSprite(950,780,20,20)
             p20b.addImage("o",p20i)  

            p21b=createSprite(1200,780,20,20)
            p21b.addImage('o',outline)
            p21b.scale=0.5

            var p21=createSprite(1200,760,20,20)
            p21.addImage("d",p21i)

            p22b=createSprite(1450,780,20,20)
            p22b.addImage("o",outline)
            p22b.scale=0.5

            var p22=createSprite(1450,760,20,20)
            p22.addImage("p",p22i)

          p23b=createSprite(1700,780,20,20)
          p23b.addImage("o",outline)
          p23b.scale=0.5

          var p23=createSprite(1700,760,20,20)
          p23.addImage("p",p23i)

          slide=createSprite(displayWidth/2,1150,20,20)
          slide.addImage("s",slideimg)
          slide.scale=1.2

            slide2=createSprite(3000,1150,20,20)
            slide2.addImage("s2",slideimg2)
            slide2.scale=1.2



slide3=createSprite(3000,1150,20,20)
slide3.addImage("s3",slideimg3)
slide3.scale=1.2


leftButton=createButton("<")
leftButton.position(0,1100)
leftButton.size(100,100)
leftButton.style("font-size",'60px')
leftButton.style("opacity","0.3")
    
temp1=createSprite(49,1150,100,100)
temp1.visible=false

rightButton=createButton(">")
rightButton.position(1805,1100)
rightButton.size(100,100)
rightButton.style("font-size","60px")
rightButton.style("opacity","0.3")

temp2=createSprite(1850,1150,100,100)
temp2.visible=false

off50=createSprite(150,130)
off50.addImage("off",off50i)
off50.scale=0.2





pri1=createSprite(displayWidth/2,displayHeight/2,120,120)
pri1.addImage("deiWJKLK",hnsimg)
pri1.visible=false



taskbar.depth=pri1.depth+1
logo.depth=pri1.depth+1
search.depth=pri1.depth+1




