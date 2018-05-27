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
            console.log(phone);
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

            // driver.sleep(3000).then(function(){
            //   driver.findElements(By.xpath("//div[@class='_4bl7']")).then(function(elements){
            //     elements.forEach(function(element){
            //       element.getText().then(function(hours){
            //           console.log(hours);
            //       });
            //     })
            //   })
            // });

            driver.sleep(3000).then(function(){
              driver.findElement(By.xpath("//*[@id='u_jsonp_2_2']//child::div[@class='_4bl7']")).then(function(element){
                  element.getText().then(function(hours){
                    console.log(hours);
                  });
                });
            });




        }); //EOL line 49 

    });

  });
});

// _4bl7 class for hours


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