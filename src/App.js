import React from 'react';
import ReactDOM from 'react-dom';
import EditorMonaco from './components/EditorMonaco';

const AppLayout = () => {
    return (
        <div className="">
            <EditorMonaco/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);