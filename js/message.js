var APP_ID = 'bVJTUEzHit4ATYqjCaaNOlme-gzGzoHsz'
var APP_KEY = 'hIjs6hhe2X18JQ6BAkl0KoIq'

AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
});


var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
    words: 'Hello World！'
}).then(function (object) {
    alert('LeanCloud ROCKS');
})