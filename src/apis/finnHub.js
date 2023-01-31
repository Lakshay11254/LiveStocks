import axios from "axios";

const TOKEN = "cfch3g9r01qs3nqkphe0cfch3g9r01qs3nqkpheg"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params:{
  token: TOKEN
  }
})