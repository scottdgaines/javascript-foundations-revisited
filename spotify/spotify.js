class Collection {
  constructor(name, description) {
    this.name = name,
    this.description = description,
    this.tracks = []
  }
}
class Track {
  constructor(title, artist, duration) {
    this.title = title ||  "unknown",
    this.duration = duration || 0,
    this.artist = artist || "unknown"
  }
}

const createCollection = (name, description) => {
  return collection = new Collection(name, description)
}

const createTrack = (title, artist, duration) => {
  return new Track(title, artist, duration)
}


  module.exports = { createCollection, createTrack }