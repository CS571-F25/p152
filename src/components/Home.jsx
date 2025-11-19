import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Container, Col, Row, Button } from 'react-bootstrap'
import '../styles/cards.css';
import Track from "./Track"; 
import MoodBackground from './MoodBackground.jsx';
import SavedSongsContext from "../contexts/SavedSongsContext.jsx";
import { useContext } from "react";

export default function Home() {

  // States
  const [mood, setMood] = useState("happy");
  const [tracks, setTracks] = useState([]);
  const [loading, isLoading] = useState(false);
  const { toggle, isSaved } = useContext(SavedSongsContext);

  function getSpotifyToken() {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    const authString = btoa(`${clientId}:${clientSecret}`);

    return fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "grant_type=client_credentials"
    })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        alert(`Token fetch failed. Status ${res.status}`);
      }
    })
    .then(data => {
      if (data && data.access_token) {
        return data.access_token;
      } else {
        alert("Failed to get access token.");
      }
    })
    .catch(err => {
      console.error(err);
      alert("Error getting token.");
    });
  }

  // Handle mood change
  function handleMoodChange(newMood) {
      if (newMood === mood) return;

      setMood(newMood);
      setTracks([]);
  }

  // Fetch tracks from Spotify API based on mood
  function fetchTracks(e) {
    isLoading(true);

    if (mood === "happy") {

      getSpotifyToken()
        .then(token => {
          if (!token) return;

          return fetch("https://api.spotify.com/v1/playlists/0RH319xCjeU8VyTSqCF6M4/tracks?", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
      })
      .then(res => res.json())
      .then(data => {
        
        if (!data) {
          alert("No tracks found for the selected mood.");
          isLoading(false);
          return;
        }

        const fetchedTracks = (data.items ?? [])
          .filter(item => item.track)
          .map(item => {
            const track = item.track;
            return {
              id: track.id,
              name: track.name,
              artist: (track.artists && track.artists[0] && track.artists[0].name) || "Unknown Artist",
              url: (track.external_urls && track.external_urls.spotify) || "#",
              category: "happy"
            };
          });

          setTracks(fetchedTracks);
          //console.log("Fetched tracks:", fetchedTracks);

      })
      .catch(err => {
        console.error("Error fetching tracks:", err);
        isLoading(false);
      });
    } else if (mood === "sad") {

      getSpotifyToken()
        .then(token => {
          if (!token) return;

          return fetch("https://api.spotify.com/v1/playlists/7pkuOr53olXeIpdrv837Qs/tracks?", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
      })
      .then(res => res.json())
      .then(data => {
        
        if (!data) {
          alert("No tracks found for the selected mood.");
          isLoading(false);
          return;
        }

        const fetchedTracks = (data.items ?? [])
          .filter(item => item.track)
          .map(item => {
            const track = item.track;
            return {
              id: track.id,
              name: track.name,
              artist: (track.artists && track.artists[0] && track.artists[0].name) || "Unknown Artist",
              url: (track.external_urls && track.external_urls.spotify) || "#",
              category: "sad"
            };
          });

          setTracks(fetchedTracks);
          //console.log("Fetched tracks:", fetchedTracks);

      })
      .catch(err => {
        console.error("Error fetching tracks:", err);
        isLoading(false);
      });
    } else if (mood === "energetic") {

      getSpotifyToken()
        .then(token => {
          if (!token) return;

          return fetch("https://api.spotify.com/v1/playlists/252smsmbOuo6F6osNb89P5/tracks?", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
      })
      .then(res => res.json())
      .then(data => {
        
        if (!data) {
          alert("No tracks found for the selected mood.");
          isLoading(false);
          return;
        }

        const fetchedTracks = (data.items ?? [])
          .filter(item => item.track)
          .map(item => {
            const track = item.track;
            return {
              id: track.id,
              name: track.name,
              artist: (track.artists && track.artists[0] && track.artists[0].name) || "Unknown Artist",
              url: (track.external_urls && track.external_urls.spotify) || "#",
              category: "energetic"
            };
          });

          setTracks(fetchedTracks);
          //console.log("Fetched tracks:", fetchedTracks);

      })
      .catch(err => {
        console.error("Error fetching tracks:", err);
        isLoading(false);
      });
    } else if (mood === "calm") {

      getSpotifyToken()
        .then(token => {
          if (!token) return;

          return fetch("https://api.spotify.com/v1/playlists/3l6b0zuXjgyPxLK6PIAqED/tracks?", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
      })
      .then(res => res.json())
      .then(data => {
        
        if (!data) {
          alert("No tracks found for the selected mood.");
          isLoading(false);
          return;
        }

        const fetchedTracks = (data.items ?? [])
          .filter(item => item.track)
          .map(item => {
            const track = item.track;
            return {
              id: track.id,
              name: track.name,
              artist: (track.artists && track.artists[0] && track.artists[0].name) || "Unknown Artist",
              url: (track.external_urls && track.external_urls.spotify) || "#",
              category: "calm"
            };
          });

          setTracks(fetchedTracks);
          //console.log("Fetched tracks:", fetchedTracks);

      })
      .catch(err => {
        console.error("Error fetching tracks:", err);
        isLoading(false);
      });
    }
  }

  // Save track to local storage
  function saveTrack(track) {
    toggle(track);
    //console.log("Toggled track:", track);
  }

  // Render
  return (
    <div>
      <MoodBackground mood={mood} />
      <Card className="text-center mt-5 mt-card mt-center">
        <Card.Body>
          <Card.Title className="mt-title" style={{fontSize: '34px'}}>Welcome to MoodTunes!</Card.Title>
          <Card.Text className="mt-body" style={{marginBottom: '10px'}}>MoodTunes is your space to discover music that actually matches how you feel. Just choose a mood and we’ll instantly generate song recommendations tailored to your vibe. Whether you’re studying, relaxing, or hyping yourself up, MoodTunes helps you find the perfect sound.</Card.Text>
        </Card.Body>
      </Card>

      <Container className="my-5">
        <Row className="justify-content-center g-1">
          <Col xs="auto" md="auto">
            <Card className="text-center mt-card mt-sm" style={{height: '520px'}}>
              <Card.Body>
                <Card.Title className="mt-title">Genre</Card.Title>
                <Card.Text>
                  <Button 
                    className="mt-btn" 
                    variant={mood === "happy" ? "primary" : "secondary"} 
                    onClick={() => handleMoodChange("happy")}
                    > Happy </Button>
                  <Button 
                    className="mt-btn" 
                    variant={mood === "sad" ? "primary" : "secondary"} 
                    onClick={() => handleMoodChange("sad")}
                    > Sad </Button>
                  <Button 
                    className="mt-btn" 
                    variant={mood === "energetic" ? "primary" : "secondary"} 
                    onClick={() => handleMoodChange("energetic")}
                    > Energetic </Button>
                  <Button 
                    className="mt-btn" 
                    variant={mood === "calm" ? "primary" : "secondary"} 
                    onClick={() => handleMoodChange("calm")}
                    > Calm </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="auto" md="auto">
            <Card className="text-center mt-card mt-lg">
              <Card.Body>
                <Card.Title className="mt-title" style={{fontSize: '40px'}}>Music</Card.Title>
              </Card.Body>
            </Card>
            <Card className="text-center mt-lg mt-card" style={{ height: '420px' }}>
              <Card.Body style={{ padding: "16px" }}>
                <div className="d-flex flex-column" style={{ alignItems: "center" }}>
                  <Button 
                    className="mt-btn" 
                    variant="danger" 
                    style={{ maxHeight: '60px', width: 200, marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}
                    onClick={() => fetchTracks()}>
                    Generate Music
                  </Button>

                  {/* If we have tracks, show them. Otherwise, show a small hint */}
                  {
                    tracks.length > 0
                      ? (
                        <div
                          style={{
                            width: "100%",
                            maxHeight: "300px",
                            overflowY: "auto",
                            marginTop: "8px",
                            textAlign: "left"
                          }}
                        >
                          {tracks.map(t => (
                            <Track
                              key={t.id}
                              id={t.id}
                              name={t.name}
                              artist={t.artist}
                              url={t.url}
                              saved={isSaved(t.id)}        // from SavedSongsContext
                              onSave={saveTrack}           // your save handler that calls toggle(track)
                              category={t.category}
                            />
                          ))}
                        </div>
                      )
                      : (
                        <p style={{ color: "#777", marginTop: "8px" }}>
                          Click &ldquo;Generate Music&rdquo; to load songs.
                        </p>
                      )
                  }
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}