import { useState, useContext, useEffect } from "react"
import { Card, Row } from 'react-bootstrap'
import SavedSongsContext from "../contexts/SavedSongsContext.jsx";
import SavedTrack from "./SavedTrack.jsx";

export default function UsersSaved(props) {

    const { saved, toggle, isSaved } = useContext(SavedSongsContext); 

    function filterByCategory(trackList, category) {
        return trackList.filter(t => t.category === category);
    }

    const happySongs = filterByCategory(saved, "happy");
    const sadSongs = filterByCategory(saved, "sad");
    const energeticSongs = filterByCategory(saved, "energetic");
    const calmSongs = filterByCategory(saved, "calm");

    return <div>
        <Card className="text-center mt-5" style={{ maxWidth: '600px', margin: '0 auto', borderWidth: '4px', borderColor: '#000000', maxHeight: '700px', overflowY: 'auto'}}>
            <Card.Body>
                <Card.Title style={{fontSize: '32px'}}>Saved Songs</Card.Title>
                <Card.Text as="div">
                    <Row>
                        <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
                            {saved.length === 0
                                ? "No saved songs yet."
                                : `You have ${saved.length} songs saved.`}
                        </div>

                        <div style={{ fontSize: '14px', marginBottom: '5px' }} className="d-flex gap-3 flex-wrap justify-content-center">
                        {happySongs.length > 0 && <span>Happy: {happySongs.length}</span>}
                        {sadSongs.length > 0 && <span>Sad: {sadSongs.length}</span>}
                        {energeticSongs.length > 0 && <span>Energetic: {energeticSongs.length}</span>}
                        {calmSongs.length > 0 && <span>Calm: {calmSongs.length}</span>}
                        </div>
                    </Row>
                </Card.Text>

                {saved.length > 0 && (
                    <div style={{ textAlign: "left"}}>
                        {saved.map(t => (
                            <SavedTrack
                            key={t.id}
                            id={t.id}
                            name={t.name}
                            artist={t.artist ?? (t.artists ? t.artists.join(", ") : "Unknown Artist")}
                            url={t.url}
                            saved={isSaved(t.id)}
                            onSave={() => toggle(t)}
                            category={t.category}
                            />
                        ))}
                    </div>
                    )}

            </Card.Body>
        </Card>
    </div>
}