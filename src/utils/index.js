export const fetchUsers = async (e, email, username, pass, setUser) => {
    e.preventDefault();
    try {
        let response;
        if (email) {
            response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: pass
                })
            })
        } else {
            response = await fetch(`${process.env.REACT_APP_REST_API}users/${username}`)
        }
        const data = await response.json();
        setUser(data.user.username)
    
    } catch (error) {
        console.log(error);
    }
};

export const updateUserDetails = async (e,email, username, pass, user, setUser ) => {
    e.preventDefault();

    try {
        let response;
        if (username) {
            response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: pass,
                    currentUser: user
                })
        })
    }
    const data = await response.json();
    setUser(data.user.username)
    } catch (error) {
        console.log(error);
    }
};


//Movie Update
export const updateMovie = async (e, watched, rating) => {
    e.preventDefault();
    try {
        let response;
        if (watched){ 
            response = await fetch(`${process.env.REACT_APP_REST_API}movies`),{
                method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    watched: watched,
                    ratings: rating
                })

            }
            

        }
    const data = await response.json();
    setMovie(data.movies.watched)    
    } catch (error) {
        console.log(error);
    }
};
