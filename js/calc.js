//式の中に数字は入れず、定数の場合は、外で文字で宣言する。
//分かりやすくするため。

const Gain = 20
let R1 = 0
let R2 = 0

 function Calc()
{
  let Invertingamplifier_times=document.form1.R1.value/form1.R2.value
  document.form1.Invertingamplifier_times.value = Invertingamplifier_times.toFixed(2) // 反転増幅回路増幅度計算結果[倍]
  let Invertingamplifier_log = Gain * Math.LOG10E * Math.log(Invertingamplifier_times)
  document.form1.Invertingamplifier_log.value = Invertingamplifier_log.toFixed(2) // 反転増幅回路増幅度計算[dB]
  let Invertingamplifire_Vout = document.form1.Vin.value * Invertingamplifier_times
  document.form1.Invertingamplifire_Vout.value = Invertingamplifire_Vout.toFixed(2)//出力電圧計算

  let Noninvertingamplifier_times=document.form1.R1.value/form1.R2.value+1
  document.form1.Noninvertingamplifier_times.value = Noninvertingamplifier_times.toFixed(2) // 増幅度計算結果
  let Noninvertingamplifier_log = Gain * Math.LOG10E * Math.log(Noninvertingamplifier_times)
  document.form1.Noninvertingamplifier_log.value = Noninvertingamplifier_log.toFixed(2) // 反転増幅回路増幅度計算[dB]
  let Noninvertingamplifier_Vout = document.form1.Vin.value * Noninvertingamplifier_times
  document.form1.Noninvertingamplifier_Vout.value = Noninvertingamplifier_Vout.toFixed(2)
  //console.log("%f",Invertingamplifier_times)
}
