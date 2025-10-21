export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>
                    <a href="https://github.com/Michaelndula" target="_blank" rel="noopener noreferrer">GitHub</a>
                    &bull;
                    <a href="https://www.linkedin.com/in/michael-ndula-bb57ab1b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    &bull;
                    <a href="mailto:michaelndula@gmail.com">Email</a>
                </p>
                <p>Crafted with Code & Coffee &copy; {new Date().getFullYear()} Michael Ndula.</p>
            </div>
        </footer>
    );
}

