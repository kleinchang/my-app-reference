import React, { useState } from 'react';
import BasicTable from './components/BasicTable'

const NewsCard = (props) => {
	return (
		<div style={{ padding: '20' }}>
			<a href={props.url}>
				{props.title} by {props.author}
			</a>
		</div>
	);
};

function App2(props) {
	console.log(`App2 ${props}`)

    const [hits, setHits] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);
    const [query, setQuery] = useState('startups');
    const [data, setData] = useState({});

    const URL = `https://hn.algolia.com/api/v1/search?query=${props.keyword}`;

    const handleFetch = () => {
			console.log(`handleFetch start`)
		fetch(URL)
			.then(response => response.json())
			.then(body => {
        console.log(`Query: ${query}`)
				setHits([...body.hits]);
        setisLoaded(true)
			})
			.catch(error => console.error('Error', error));
	};
	//handleFetch()

return (
    <div>
         <label>Search</label>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={handleFetch}>Get Data</button>


			{isLoaded ? (
				hits.map((item) => {
					return (
						<NewsCard
							url={item.url}
							title={item.title}
							author={item.author}
							key={item.objectID}
						/>
					);
				})
			) : (
				<div></div>
			)}    
    </div>
);
  
}

export default App2;