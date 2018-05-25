var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('https://www.google.com');

driver.findElement(By.name('q')).sendKeys('little mamas filipino food austin');

//driver.sleep(1000).then(function() {
driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
// });

driver.findElement(By.name('btnK')).click();

driver.sleep(5000).then(function(){
  driver.findElement(By.linkText('Website')).click();
  
});
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