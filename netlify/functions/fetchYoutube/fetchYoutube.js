
const youtubeKey = process.env.YOUTUBE_API_KEY


const handler = async (event) => {

  try {
        const response = await fetch('https://www.googleapis.com/youtube/v3/search',{
          params: {
            part: 'snippet',
            q: event.body, 
            maxResults: 2,
            key: youtubeKey
          },
        } )
         const data = await response.json()
         const videoLinks = data.items
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        reply: videoLinks
       }),
     
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
