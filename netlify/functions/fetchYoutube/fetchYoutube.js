
const youtubeKey = process.env.YOUTUBE_API_KEY


const handler = async (event) => { 
  //query parameters for youtube API call
  const queryParams = new URLSearchParams({
    part: 'snippet',
    q: event.body, 
    maxResults: 2,
    key: youtubeKey
  })
  try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${queryParams}`)
         const data = await response.json()
         const videoLinks = data.items
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        reply: videoLinks   //returning data 
       }),
     
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
