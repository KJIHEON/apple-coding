const express = require(`express`)
const app = express();
const bodyParser= require('body-parser');

const { ClientSession } = require('mongodb');

app.use(bodyParser.urlencoded({extended: true})) 
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('mongodb+srv://youwa65:ss3108@cluster0.pmisujn.mongodb.net/?retryWrites=true&w=majority', function(error,client) {
   if(error) return console.log(error) //에러시 어떤 에러 인지 확인 (if문이나 할떄 한줄이면 중관호 생략 가능)

   db = client.db('MYDB') //나는 어디 데이터 폴더에 넣을꺼냐?
    
   db.collection('123').insertOne({이름 : 'jhon', _id : 40},function(error ,res){
    console.log('저장완료!!')
   });

app.listen(8080, function(){ // listen(8000,띄운후 실행할 코드)
    console.log("8080")
});
});

/*
app.get('/pet',function(요청,응답){ //app.get('/경로',function(req,res){})
    응답.send('야옹야옹.')
})

app.get("/beauty",function(req,res){ //우리는 요청 받은걸 응답해줘야하기 때문에 res
 res.send("안녕하세요 뷰티사이트 입니다.")
})
*/
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
  });

app.get("/write",function(req,res){ //우리는 요청 받은걸 응답해줘야하기 때문에 res
    res.sendFile(__dirname + '/write.html')
})
  
app.post('/add', (req,res) =>{
    res.send('전송완료!!')
    console.log(req.body.data)
    console.log(req.body.title)

})