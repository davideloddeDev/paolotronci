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
            <h2>Contact</h2>
            <form
                className="form-container"
                onSubmit={handleSubmit}
                action="send_mail.php"
                method="POST"
                target="_blank"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">Send</button>
            </form>
            <p>{response}</p>
        </div>
    );
}
