var extend = require('selenium-extend');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

extend.addExtend(driver);

driver.get('https://www.google.com/');

driver.findElement(By.name('q')).sendKeys('little mamas filipino food austin');


driver.sleep(5000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
  // driver.extend.doubleClick('#btnK');
});

// driver.sleep(5000).then(function(){

  driver.findElement(By.name('btnK')).click();
// });

driver.sleep(5000).then(function(){
  driver.findElement(By.linkText('Website')).click(); 
  driver.sleep(5000).then(function(){
      driver.findElement(By.linkText('About')).click();


      driver.sleep(5000).then(function(){
      //   driver.extend.getText('_2iem');
          var address = driver.findElement(By.class("span[class='_2iem']"));
          for(var i = 0; i < address.length; i ++){
            console.log(driver.getText(address[i]));
            
          }
      });
  });
});


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