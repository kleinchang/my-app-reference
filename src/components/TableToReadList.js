import React, { useEffect, useState } from 'react';
import TableToRenderList from './TableToRenderList'

const TableToReadList = (props) => {
	console.log(`App3 ${props}`)

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

	useEffect(handleFetch, [])

return (
    <div>
         {/* <label>Search</label>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={handleFetch}>Get Data</button> */}

			{isLoaded ? (
				<TableToRenderList rows={hits} />
			) : (
				<div></div>
			)}    
    </div>
);
  
}

export default TableToReadList;