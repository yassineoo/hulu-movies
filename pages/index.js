import Header from "../components/header";
import Head from "next/head"
import Nav from "../components/nav";
import Results from "../components/results";
import requests from "../utils/requests";

export default function Home({result}) {
  return (
  
    <div className='home'>
    
      <Head> 
       <title> HUlu 2.00</title>
      </Head>

      <Header/>
      <Nav/>
      <Results results={result}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json())
 console.log(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);
  return  {
    props : {
      result :request?.results
    }
  }
}