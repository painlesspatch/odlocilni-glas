
const axios=require("axios")
const cheerio=require("cheerio")

async function scrape(){

const res=await axios.get("NEWS_SITE_URL")
const $=cheerio.load(res.data)

console.log("extract poll numbers here")

}

scrape()
