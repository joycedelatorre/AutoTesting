// var extend = require('selenium-extend');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

// extend.addExtend(driver);

driver.get('https://www.google.com/');

driver.findElement(By.name('q')).sendKeys('little mamas filipino food austin');


// driver.sleep(5000).then(function() {
//   driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
//   // driver.extend.doubleClick('#btnK');
// });

// driver.sleep(5000).then(function(){

  driver.findElement(By.name('btnK')).click();
// });

driver.sleep(5000).then(function(){
  driver.findElement(By.linkText('Website')).click(); 
  driver.sleep(6000).then(function(){
    driver.findElement(By.linkText('About')).click();


    driver.sleep(10000).then(function(){
        // driver.findElements(By.className("_50f4")).then(function(elements){
        //   elements.forEach(function(element){
        //     element.getText().then(function(text){
        //       console.log(text);
        //     });
        //   });
        // });
        //------This logs the phone
        driver.findElement(By.xpath("//*[@class='_4bl9']//descendant::div[@class='_50f4']")).then(function(element){
          element.getText().then(function(phone){
            console.log("Phone: " + phone);
          })
        });

        // logging the address 
        driver.sleep(5000).then(function(){
            driver.findElements(By.xpath("//*[@class='_4bl9']//descendant::span[@class='_2iem']")).then(function(elements){
              console.log("Address:");
              elements.forEach(function(element){
                element.getText().then(function(address){
                // console.log(address);
                if (address[0] != "@"){
                  console.log(address);
                }
              })
              });
            });

            //logging the hours
            driver.sleep(3000).then(function(){
              driver.findElement(By.xpath("//*[@id='u_jsonp_2_2']//child::div[@class='_4bl7']")).then(function(element){
                  element.getText().then(function(hours){
                    console.log("Hours: " + hours);
                  });
                });
              //logging image
              // driver.findElements(By.xpath("//img[@src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/10404436_877418918975495_7884373613217558080_n.jpg?_nc_cat=0&oh=10b193a379dfd2089515d9efc9b05cad&oe=5B76A264']")).then(function(elements){

              //   elements.forEach(function(element){
              //     console.log(element.toString());
              //   });



driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div/div/div[2]/div[1]/div/div[1]/div[3]/div/div/div/div/a/div/div/div/img")).then(function(element){
                  element.getAttribute("src").then(function(src) {
                                      console.log(src);

                  })
                });








                // element.getText().then(function(image){
                //   console.log(image);
                // });
              //});

            }); //EOL line 63 logging hours




        }); //EOL line 49 logging address

    });

  });
});
//Download an image using selenium get the src attr of image, use image io read save buffered image using image IO.write function

//  WebElement logo = driver.findElement(By.cssSelector(".image-logo"));
//  String logoSRC = logo.getAttribute("src");

//  URL imageURL = new URL(logoSRC);
//  BufferedImage saveImage = ImageIO.read(imageURL);

//  ImageIO.write(saveImage, "png", new File("logo-image.png"));

// //----------------------------------



// driver.findElement(By.class("span[class='_2iem']")).getText().then(function(text){
//   console.log(text);
// });

// driver.extend.getText("span[class='_2iem']").then(function(text){
//   console.log(text);
// });

// driver.sleep(2000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed');
//     }
//   });
// });

// driver.quit();