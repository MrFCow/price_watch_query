import React, {useEffect, useState} from "react";
import axios from "axios";

const getData = async (keyword) => {
	const url = `https://online-price-watch.consumer.org.hk/opw/getPriceList/keyword/${keyword}?start=0&length=999&order=asc&sortby=index`;

	const result = await axios(url, {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      // "accept-language": "en-US,en;q=0.9,zh-HK;q=0.8,zh-TW;q=0.7,zh;q=0.6,zh-CN;q=0.5,ja;q=0.4",
      // "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      // "pragma": "no-cache",
      // "sec-fetch-dest": "empty",
      // "sec-fetch-mode": "cors",
      // "sec-fetch-site": "same-origin",
      // "sec-gpc": "1",
      // "x-requested-with": "XMLHttpRequest",
      // "cookie": "accept_cookies=1; ci_session=9ujje98nqv742ltm2t9b2v8926a7kjbk"
		},
		"referrer": "https://online-price-watch.consumer.org.hk/opw/search/lemonade",
    "method": "POST",
    // "mode": "cors"
	});
	
	return result
}


function ResultPanel(props){
	const [data, setData] = useState([]);
	const [keyword, setKeyword] = useState("axe");

	useEffect( () => {
		getData(keyword).then(result => setData(result));
	}, [keyword]);

	return (
		<>
			{data?.length > 0 ? data : "No result"}
		</>
	)
}

export {ResultPanel};