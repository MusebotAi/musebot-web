import formurlencoded from 'form-urlencoded'
const store = reactive({
  address: '',
  access_token: '',
  contractAddress: ''
})

const config: any = {
  headers: {
    common: {
      Authorization: 'Basic YXBpOjUzMTg5Yzc0OWIwNzExZWE5ODAyNDA3NGUwZGNhMDE4',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
}
// 'https://svr.wombostudio.com/api/oauth/api/token'
$axios
  .post(
    'https://svr.wombostudio.com/api/oauth/api/token',
    formurlencoded({
      grant_type: 'api',
      secretId: '5254004ab19d',
      secretKey: '488a30e422b711ed9bef5254004ab19d'
    }),
    config
  )
  .then((res: any) => {
    store.access_token = res.data.access_token
  })

//
$axios
  .get('http://contractpub.musebot.ai/api/moduleaddress')
  .then((res: any) => {
    console.log(
      '%c [ contractAddress res ]-28',
      'font-size:13px; background:pink; color:#bf2c9f;',
      res
    )
    store.contractAddress = res.data
  })
export default store
