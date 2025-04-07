const API_KEY = "AIzaSyBkCbrIopKUkeeSZ0mwghMH6_g226WLR0o";
const PLAYLIST_ID = "PL9khxBZiiQwoKEqdTrb4ip-S_Tov6FkBQ";
let videos = [];
let currentIndex = 0;

async function fetchPlaylistItems() {
  const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`);
  const data = await res.json();
  videos = data.items.map(item => ({
    title: item.snippet.title,
    videoId: item.snippet.resourceId.videoId
  }));
  displaySongList();
  loadSong(currentIndex);
}

function displaySongList() {
  const songListDiv = document.getElementById("song-list");
  songListDiv.innerHTML = "";
  videos.forEach((video, index) => {
    const btn = document.createElement("button");
    btn.textContent = video.title;
    btn.onclick = () => {
      currentIndex = index;
      loadSong(index);
    };
    songListDiv.appendChild(btn);
  });
}

function loadSong(index) {
  const video = videos[index];
  document.getElementById("player").src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1`;
  document.getElementById("song-title").textContent = video.title;
}

function playSong() {
  loadSong(currentIndex);
}

function nextSong() {
  currentIndex = (currentIndex + 1) % videos.length;
  loadSong(currentIndex);
}

function prevSong() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  loadSong(currentIndex);
}

fetchPlaylistItems();
