!function(){
    var view = View('section.messages')
    var model = Model({resourceName: 'Message'})

    var controller = Controller({
        init: function (view, controller) {
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessages()
        },
        loadMessages: function(){
            this.model.fetch().then((messages) => {
                // console.log(messages)
                // console.log(messages[0].attributes)
                let array = messages.map((items)=>items.attributes)
                array.forEach((items)=>{
                    let li = document.createElement('li')
                    li.innerText = `${items.name}: ${items.content}`
                    this.messageList.appendChild(li)
                })
            });

        },
        bindEvents: function(){//绑定事件只绑定
            this.form.addEventListener('submit', (e)=>{
                e.preventDefault()
                this.saveMessage()
            })

        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save({'name':name,'content':content}).then((message)=>{
                console.log('保存成功')
                //  window.location.reload()//自动刷新页面
                let li = document.createElement('li')
                li.innerText = `${message.attributes.name}: ${message.attributes.content}`
                // console.log(li.innerText)
                let messagesList = document.querySelector('#messageList')
                messagesList.appendChild(li)
                myForm.querySelector('input[name=content]').value=''
                myForm.querySelector('input[name=name]').value=''
            })
        },
    })

    controller.init(view,model)
}.call()


/*//创建 TestObject 表
const TestObject = AV.Object.extend('TestObject');
// 在表中创建一行数据
const testObject = new TestObject();
testObject.set('words', 'Hello world!');
//数据内容事 words : 'Hello World' 保存
testObject.save().then((testObject) => {
    console.log('保存成功。')
})*/