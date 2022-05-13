import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Essence', duration: '4:05' },
        { title: 'Buga', duration: '3:45' },
        { title: 'Calm Down', duration: '3:25' },
        { title: 'Finesse', duration: '3:05' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});