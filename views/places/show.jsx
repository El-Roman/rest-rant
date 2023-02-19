const React = require('react')
const Def = require('../default')

function show({ place, id }) {
    console.log(place, id)
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <div>
                    <img src={place.pic} alt={place.name} />
                </div>
                <div>
                    <h2>Rating</h2>
                    <p>Not rated yet</p>
                    <h2>Description</h2>
                    <p>Located in {place.city}, {place.state}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
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
            </main>
        </Def>
    )
}

module.exports = show
