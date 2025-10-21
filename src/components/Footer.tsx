export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>
                    <a href="https://github.com/Michaelndula" target="_blank" rel="noopener noreferrer">GitHub</a>
                    &bull;
                    <a href="mailto:michaelndula@gmail.com">Email</a>
                </p>
                <p>&copy; {new Date().getFullYear()} Michael Ndula. Built with lots of coffee.</p>
            </div>
        </footer>
    );
}
