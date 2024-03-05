import React from 'react'

function NewsItem(props) {
    return (
        <div>
            <div className="card  my-3" >
                <img src={props.imaGeUrl} style={{height: '250px'}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.Title.slice(0, 40)}...</h5>
                        <p className="card-text">{props.Discription}...</p>
                        <a href={props.newsUrl} rel="noreferrer" target='_blank'  className="btn btn-sm btn-primary">More...</a>
                        {/* {console.log(props.Title)} */}
                    </div>
            </div>
        </div>
    )
}

export default NewsItem
