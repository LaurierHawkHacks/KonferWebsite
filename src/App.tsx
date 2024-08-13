
const App = () => {
    return (
        <div className="container">
            <h1>Konfer</h1>
            <div className="card">
                <p>
                    {"Konfer bridges innovative companies with the next generation of tech talent. We organize high-impact events connecting businesses to ambitious students and young professionals."}
                </p>
            </div>

            <div className="card">
                <p>
                    {"We're still in the early stages of development. Peek some of our largest events we've ran below. If you want to chat, contact us "}
                    <a href="mailto:executive@hawkhacks.ca" target="_blank">
                        {"at this email"}
                    </a>
                    {"."}
                </p>
            </div>
            <div className="link-container">
                <a href="https://hawkhacks.ca" target="_blank">
                    {"HawkHacks"}
                </a>
                <a href="https://lauriercs.ca" target="_blank">
                    {"Laurier Computing Society"}
                </a>
                <a href="https://lu.ma/8iwq9lxb" target="_blank">
                    {"Yacht After-Party @ Collision 2024"}
                </a>
            </div>
        </div>
    );
};

export default App;
