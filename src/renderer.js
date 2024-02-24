import { createRoot } from 'react-dom/client';
import * as React from 'react';
import App from '/src/layout/App';

const renderApp = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<App/>);
}

renderApp();

if (module.hot) {
    module.hot.accept('/src/layout/App', () => renderApp());
}