export const exerciseOptions= {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	
	headers: {
		'x-rapidapi-key':process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
	},
  };

export const fetchData=async(url,options) =>{
    const response = await fetch(url,options);
    const data= await response.json();

    return data;
}