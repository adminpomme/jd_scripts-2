/*
此文件为Node.js专用。其他用户请忽略
 */
// 此处填写京东账号cookie。
// 注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJgyJxJADDSKf-FucqoM58pjQo3TpPthccC1SceqTIp86mb7C_5gjN3NMtupXQWexa6sSt11i4;pt_pin=adminpomme;', // 账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJgyJiTADDiHg5mMORmh88ZVkFtpRidmDQft9hDS3SVRl62YA1khDIKlvZ3eZUGJMy9LllHksU;pt_pin=wdANencaZrMBnS;'// 账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&')
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n')
  } else {
    CookieJDs = process.env.JD_COOKIE.split()
  }
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`)
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1)
  exports['CookieJD' + index] = CookieJDs[i]
}
