import './css/form.css';
import { useState } from 'react';

export function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Invia il form al file PHP
        e.target.submit();
    };

    return (
        <div className="form" id="contact">
            <h2>Contattaci</h2>
            <form
                onSubmit={handleSubmit}
                action="send_mail.php"
                method="POST"
                target="_blank"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    name="message"
                    placeholder="Messaggio"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">Invia</button>
            </form>
            <p>{response}</p>
        </div>
    );
}
