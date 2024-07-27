class Song {
  constructor(name, artist, favorite) {
    this.name = name,
    this.artist = artist,
    this.favorite = favorite,
    this.hasBeenPlayed = false
  }
}

const createSong = (name, artist, favorite) => {
  const song = new Song(name, artist, favorite)
  return song
}

module.exports = { 
  createSong, 
  // playSong, 
  // makePlaylist, 
  // addSongToPlaylist, 
  // playSongs
};
