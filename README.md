# Rhythm n’ Flow

## Link 

[Rhythm n’ Flow](https://soundcloud-nmw8.onrender.com)

This is a clone of SoundCloud the implementation steps are fairly simple

1. Pull the project

2. Set up a bucket in Amazon Web Services [AWS](https://portal.aws.amazon.com/billing/signup#/start/email)

3. 2 set up your local environment
Create a .env file within the backend directory and set up the following:

- PORT= port number to run the system off of
- DB_FILE= the location of the sqlite3 file ex. db/dev.db
- JWT_SECRET= JWT secret key
- JWT_EXPIRES_IN= expiration time frame for the security token
- AWS_ACCESS_KEY_ID= Amazon web services id
- AWS_SECRET_ACCESS_KEY= Amazon web services access key 

Open up the project in your chosen IDE.  Open up a terminal and in the frontend, backend and and root directories.  Run

```
npm install
```

To run the app locally, open up two separate terminals in backend and frontend.    Run npm start in both directories simultaneously.  The port linked to your front end will print up the root page.

# Features

- Full crud for songs
- Full crud for albums
- Mobile compatible of all screen sizes
- User creation
- User login
- Bycrypt secure

# Navigation


## Landing page

The app will start at the landing page.  In order to have full access to the app, you must either log in or create a user to log in.  A demo user has been created for convenience.

![landingPage](https://user-images.githubusercontent.com/69321727/189464558-98c27cf1-8659-47f4-88fd-567fdc1768bd.png)



## Albums

The albums page allows the user to scroll through the selection of albums available for interaction.  Each album comes with a link to it's details for a further look into the album, as well as a list of songs on the album.
![albums](https://user-images.githubusercontent.com/69321727/189464582-9d0de635-1924-41f3-9dce-7daa829b6711.png)



## Album Details
The album details page displays the album's cover image and description.  Underneath the pic will be a list of songs belonging to the album.
![albumDetails](https://user-images.githubusercontent.com/69321727/189464599-79c55132-97ba-435d-92ff-c5c908115e6a.png)


## Songs
The songs page lists every song that is within the collection of the site.  Each song page has a link to it's details page.
![songs](https://user-images.githubusercontent.com/69321727/189464713-05351656-17af-46a1-b97a-edb1aefa0cb0.png)


## Song Details

The song details page allows for a user to look at the details of the page.  The page will display the image of the song and it's details.
![songDetails](https://user-images.githubusercontent.com/69321727/189464726-6f041790-d886-4f06-86bb-9f4e0e40543d.png)


# CRUD Control flow
Each user has the ability to create an album instantly.  

![createAlbum](https://user-images.githubusercontent.com/69321727/189465838-e3cc7701-758a-4248-833c-ff4f61c822c2.png)




On user owned albums the user possess the ability to create songs on the album.  The user can also edit or delete the album's details.

![albumOwner](https://user-images.githubusercontent.com/69321727/189465816-d52a6819-8457-4176-bf11-7f73a32fa0bb.png)



On the song if the user has owner ship of the song, the user has the ability to edit or delete the song.  

![songOwner](https://user-images.githubusercontent.com/69321727/189465940-0ae5565f-02f1-4aa8-a610-e55f88354d87.png)

# Tech implementation

The primary way of controling the capacity a user's capabilities over data is if the user does or does not have ownership of the song or album.  If the user owns the album or song, the crud buttons will display for the song or album.  If the user does not own the song or album, then the buttons will not display.  Control flow was accomplished by manipulating the architecture of the environment checking if the user's ID matched with the song or album owner ID.
Ex:

```
            {(user.id === album.userId) &&
                (
                    <div className='album-button-divs'>
                        <EditAlbumModal album={albumId} />
                        <button className='delete-album-button' onClick={deleteAlbum}>Delete Album</button>
                        <CreateSongModal />
                    </div>
                )
            }
```


# Tech stack composition

- react
- sequelize
- bcrypt
- csrf
- aws
- heroku
- express
- node




