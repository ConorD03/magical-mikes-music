const songs = [
{
title: "Song 1",
url: "https://www.mureka.ai/song-detail/36LdLMimYwjEDP2Jpqowp5?is_from_share=1"
},
{
title: "Song 2",
url: "https://www.mureka.ai/song-detail/3E5A7WSLoiuED8whRHikZf?is_from_share=1"
},
{
title: "Song 3",
url: "https://www.mureka.ai/song-detail/L8dG8A9YHMaKTyrBuDrChs?is_from_share=1"
},
{
title: "Song 4",
url: "https://www.mureka.ai/song-detail/BEc5TGxjs7ndKoiHm6TSW1?is_from_share=1"
},
{
title: "Song 5",
url: "https://www.mureka.ai/song-detail/ATFcxBABjjQmRDzP3AaFam?is_from_share=1"
},
{
title: "Song 6",
url: "https://www.mureka.ai/song-detail/SRVw2XHpEKuq9QAfkndZ79?is_from_share=1"
},
{
title: "Song 7",
url: "https://www.mureka.ai/song-detail/165497098469377"
},
{
title: "Song 8",
url: "https://elevenmusic.io/tracks/XB72tUstvtMncsv8"
},
{
title: "Song 9",
url: "https://www.mureka.ai/song-detail/LWPo6d8zjAdpb9iB7qCMn7?is_from_share=1"
},
{
title: "Song 10",
url: "https://www.mureka.ai/song-detail/3sEgGXpqF5sxgjmt59tZd3?is_from_share=1"
},
{
title: "Matt Song",
url: "https://www.mureka.ai/song-detail/JLmLiXaJdoRB7JzRt9Mg1A?is_from_share=1"
}
];

const songsContainer = document.getElementById("songs");
const searchInput = document.getElementById("search");

function renderSongs(searchText = "") {

    songsContainer.innerHTML = "";

    songs
        .filter(song =>
            song.title
                .toLowerCase()
                .includes(searchText.toLowerCase())
        )
        .forEach(song => {

            songsContainer.innerHTML += `
                <div class="song-card">
                    <h3>${song.title}</h3>

                    ${song.url}
                        🎵 Open Song
                    </a>
                </div>
            `;
        });
}

renderSongs();

searchInput.addEventListener("input", (e) => {
    renderSongs(e.target.value);
});