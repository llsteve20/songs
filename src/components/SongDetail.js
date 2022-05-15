import React from "react";
import { connect } from "react-redux";

const SongDetail = ({selected}) => {
    if(!selected){
        return <div>Select a Song</div>
    }
    return (
        <div>
            <h3> Details for:</h3>
            <p>
                Title: {selected.title}
                <br />
                Duration: {selected.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {selected: state.selectedSong}
}

export default connect (mapStateToProps)(SongDetail);