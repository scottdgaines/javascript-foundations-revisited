class Song {
  constructor(name, artist, favorite) {
    this.name = name,
    this.artist = artist,
    this.favorite = favorite || false,
    this.hasBeenPlayed = false
  }
}

class Playlist {
  constructor(title, songs) {
    this.name = title,
    this.songs = songs
  }
}

const createSong = (name, artist, favorite) => {
  const song = new Song(name, artist, favorite)
  return song
}

const playSong = (song) => {
  song.hasBeenPlayed = true
  return song
}

const makePlaylist = (title, songList) => {
  const playlist = new Playlist(title, songList)
  return playlist
}

const addSongToPlaylist = (playlist, newSong) => {
  playlist.songs.push(newSong)
  return playlist
}

const playSongs = (playlist) => {
  playlist.songs.forEach(song => {
    song.hasBeenPlayed = true 
  })
  return playlist
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
