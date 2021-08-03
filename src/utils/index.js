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
            response = await fetch(`${process.env.REACT_APP_REST_API}users/${username}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    password: pass
                })
            })
        }
        const data = await response.json();
        console.log(data)
        setUser(data.user.username)
    } catch (error) {
        console.log(error)
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


export const deleteUser = async (user) => {
        console.log(user);
    try {
        let response;
        if (user) {
            response = await fetch(`${process.env.REACT_APP_REST_API}users/${user}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                username: user,
            })
    }
    await response.json();
    } catch (error) {
        console.log(error);
    }
}
   

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
