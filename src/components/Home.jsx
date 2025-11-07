import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

export default function Home(props) {
    return <div>
        <Card className="text-center mt-5" style={{ maxWidth: '600px', height: '200px', margin: '0 auto', borderWidth: '4px', borderColor: '#000000' }}>
            <Card.Body>
                <Card.Title style={{fontSize: '32px'}}>Welcome to MoodTunes!</Card.Title>
                <Card.Text>
                    Body
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}