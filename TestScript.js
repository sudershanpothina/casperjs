var casper = require('casper').create()
var x = require('casper').selectXPath
casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');
casper.start('http://automationpractice.com/index.php')
casper.then(function(){
   this.sendKeys('#search_query_top', 'casperjs'); 
   console.log('entering  data')
   casper.capture('image1.png');
});
casper.thenClick(x('//*[@id="searchbox"]/button'),function(){
    console.log('searching for data');
});
casper.wait(5000,function(){
    casper.capture('image2.png');
    // wait 5 seconds before capturing the image
})
casper.run();
