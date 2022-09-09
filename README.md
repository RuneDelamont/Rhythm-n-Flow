# Soundcloud

## Link 

[SoundCloud Clone](https://soundcloud01.herokuapp.com/)

This is a clone of SoundCloud the implementation steps are fairly simple

1. Pull the project

2. Set up a bucket in AWS

2. 2 set up your local environment
Create a .env file within the root directory and the the following:

- PORT
- DB_FILE
- JWT_SECRET
- JWT_EXPIRES_IN
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY



# Tech stack composition

- react
- sequelize
- bcrypt
- csrf
- aws
- heroku
- express
- node

# Navigation

## Albums
![albums](https://user-images.githubusercontent.com/69321727/189287079-8d868c33-8cdd-4f69-bdc8-053d8a17076b.png)


## Album Details
![albumDetails](https://user-images.githubusercontent.com/69321727/189287491-ac002692-b3d9-4bb3-9df3-d867be3b6736.png)


## Songs
![songs](https://user-images.githubusercontent.com/69321727/189287629-4b8e0c07-968d-4742-8231-efe6c00bd597.png)

## Song Details
![songDetails](https://user-images.githubusercontent.com/69321727/189288228-b4c07f35-35a1-425e-ac45-791d14873ba3.png)

# Features

- Full crud for songs
- Full crud for albums
- Mobile compatible of all screen sizes
- User creation
- User login


# Tech implementation

The primary way of controling the capacity a user has over songs associated with it is to make checks for each individual album or song that allows for crud manipulation

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
