let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '.toLowerCase()

let word = 'bob'

const trimmed = str.trim();

if (str.includes(word)) {
  console.log(`Dans la phrase "${trimmed}" on y retrouve le mot "${word}"`);
}