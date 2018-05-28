// We grab the fs package to handle read/write
var fs = require("fs");
var request = require('request');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var data_info;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('https://www.google.com/');

driver.findElement(By.name('q')).sendKeys('little mamas filipino food austin');

driver.findElement(By.name('btnK')).click();

driver.sleep(5000).then(function(){
  driver.findElement(By.linkText('Website')).click(); 

  driver.sleep(6000).then(function(){
    driver.findElement(By.linkText('About')).click();

    driver.sleep(10000).then(function(){
        //------This logs the phone
        //Reference in getting an xpath using selenium: https://www.guru99.com/xpath-selenium.html OR you can right click the element in the source code and copy the xpath
        driver.findElement(By.xpath("//*[@class='_4bl9']//descendant::div[@class='_50f4']")).then(function(element){
          element.getText().then(function(phone){
            console.log("Phone: " + phone);
            writeToFile(phone + ", ");

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
                  writeToFile(address + ", ");
                }
              })
              });
            });

            //logging the hours
            driver.sleep(3000).then(function(){
              driver.findElement(By.xpath("//*[@id='u_jsonp_2_2']//child::div[@class='_4bl7']")).then(function(element){
                  element.getText().then(function(hours){
                    console.log("Hours: " + hours);
                    writeToFile(hours +", ");
                  });
                });
              //logging image
              driver.findElement(By.xpath("//img[@src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/10404436_877418918975495_7884373613217558080_n.jpg?_nc_cat=0&oh=10b193a379dfd2089515d9efc9b05cad&oe=5B76A264']")).then(function(element){
                  element.getAttribute("src").then(function(src){
                    download(src, 'logo.png',function(){
                      console.log("done");
                   })
                    });
              });  
            }); //EOL line 63 logging the hours
        }); //EOL line 43 logging the address

    });

  });
});


//Downloading image Reference: https://stackoverflow.com/questions/12740659/downloading-images-with-node-js
var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

//Reference for npm fs: https://www.w3schools.com/nodejs/nodejs_filesystem.asp
function writeToFile (data){
  // If the file didn't exist then it gets created on the fly.
  fs.appendFile("data_info", data, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("content added");
    }
  });
}

//----------------------------------
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

