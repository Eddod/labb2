import { useState, useEffect } from 'react'
export function Portfolio() {

    const [name, setName] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://api.github.com/users/eddod/repos')
            .then(res => res.json())
            .then(data => {
                setName((lapi) => [
                    lapi,
                    {
                        
                        name: data[0].name,
                        description: data[0].description,
                        html_url: data[0].html_url

                    },
                    {
                        name: data[3].name,
                        description: data[3].description,
                        html_url: data[3].html_url

                    },
                    {
                        name: data[12].name,
                        description: data[12].description,
                        html_url: data[12].html_url

                    }
                ]);
                setIsLoading(false);
            });
    }, []);
    return (
        <div className="github_portfolio">
            {isLoading && <div><h2>Laddar Data...</h2></div>}
            {name.map((info) => (
                <>
                    {info.name}<br></br>
                    {info.description}<br></br>
                    <a href={info.html_url}>{info.html_url}</a>
                    <br></br><br></br>
                </>
            ))
            }
        </div>
    )

}