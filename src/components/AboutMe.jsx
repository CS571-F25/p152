import { Card } from 'react-bootstrap'

export default function AboutMe(props) {
    return <div>
        <Card className="text-center mt-5" style={{ maxWidth: '600px', height: '200px', margin: '0 auto', borderWidth: '4px', borderColor: '#000000' }}>
            <Card.Body>
                <Card.Title style={{fontSize: '32px'}}>About</Card.Title>
                <Card.Text>
                    Website developed by Lukas H
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}