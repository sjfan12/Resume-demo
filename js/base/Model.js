window.Model = function (options) {
    let resourceName =  options.resourceName
    return{
        init: function () {
            AV.init({
                appId: "bVJTUEzHit4ATYqjCaaNOlme-gzGzoHsz",
                appKey: "hIjs6hhe2X18JQ6BAkl0KoIq",
                serverURL: "https://bvjtuezh.lc-cn-n1-shared.com"
            });
        },
        fetch: function () {
            const query = new AV.Query(resourceName);
            return query.find()//Promise对象
        },
        save: function (object) {
            const X= AV.Object.extend(resourceName)
            const x = new X()
            // console.log(message)
            x.set(object)
            return x.save()
        }
    }
}