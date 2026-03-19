import React from 'react';
import { Button, Accordion } from 'react-bootstrap';
import { About } from './About';
import { References } from './References';
import { Contact } from './Contact';
import { Layout } from './components/Layout';

export const Home = () => (
    <div>
        <h2>Vítejte na našem webu</h2>
        <p>úvodní text úvodní strany</p>
        <Button href="/about" variant="secondary">O nás</Button>
        <p>Další text</p>
    </div>
)


