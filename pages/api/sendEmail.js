const API_URL = process.env.API_MAIL_PATH
export default async function handler(req, res) {
    const {data} = req.body;
    //console.log('ReqData',data)
    //console.log('taxData1',parseFloat(item.AMT).toFixed(2))
    /*const arr=[]
    taxData.forEach(el : {
      arr.push(el.ddid)
    });
    const tData=arr.join(',')*/
    //const rid=uniqid()
    try {
      const resu = await fetch(`${API_URL}/send-mail.php`, {
        method: "POST",
        cache: 'no-store' ,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: data.userName,
            email: data.email,
            number: data.number,
            msg: data.msg
        })
      })
      const resData = await resu.json()
      //console.log('response:',resData)
      return res.json(resData)
      
     
  
    } catch (error) {
      console.error('error-respons',error)
      return res.status(error.status || 500).end(error.message)
    }
  }