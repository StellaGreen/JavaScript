let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '.toUpperCase()

str1 = str.toUpperCase().trim().split(' ')

for (let elem of str1)
  console.log(`Mot : ${elem}`)