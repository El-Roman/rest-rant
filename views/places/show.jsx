const React = require('react')
const Def = require('../default')

function show({ place, id }) {
    console.log(place, id)
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not rated yet!
        </h3>
    )

    if (place.comments.length) {
        let sumRatings = place.comments.reduce((total, comment) => {
            return total + comment.stars
        }, 0)
        let averageRating = Math.round(sumRatings / place.comments.length)
        let stars = ""
        for (let i = 0; i < averageRating; i++) {
            stars += "⭐"
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = place.comments.map((comment, index) => {
            return (
                <div key={index} className="border col-md-4">
                    <h2 className="rant mt-2">
                        {comment.rant ? "Rant! 😡" : "Rave! 😻"}
                    </h2>
                    <h4>{comment.content}</h4>
                    <h3>
                        <strong>- {comment.author}</strong>
                    </h3>
                    <h4>Rating: {comment.stars}</h4>
                    <form action={`/places/${place._id}/comment/${comment._id}?_method=DELETE`} method="POST">
                        <input className="mb-2 btn btn-danger" type="submit" value="Delete" />
                    </form>
                </div>
            )
        })
    }


    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <div>
                    <img src={place.pic} alt={place.name} />
                    <h3>
                        Located in {place.city}, {place.state}
                    </h3>
                </div>
                <div>
                    <h2>Rating</h2>
                    <p>Not rated yet</p>
                    <h2>Description</h2>
                    <h3>
                        {place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {place.cuisines}
                    </h4>
                    <div>
                        <a href={`/places/${id}/edit`} className="btn btn-warning">
                            Edit
                        </a>

                        <form method="POST" action={`/places/${id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                    <form className="row justify-content-md-center" action={`/places/${place._id}/comment`} method="POST">
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="author">Name: </label>
                            <input className="form-control" type="text" id="author" name="author" placeholder="Name Here!" />
                        </div>
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="stars">Rating: </label>
                            <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                        </div>
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="rant">Is this a rant?</label>
                            <br />
                            <input type="checkbox" id="rant" name="rant" />
                        </div>
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="content">Comment: </label>
                            <textarea className="form-control" type="text" id="content" name="content" placeholder="I love this place! ..."></textarea>
                            <button className="btn btn-primary mt-2" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
