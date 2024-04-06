import Editor from "@monaco-editor/react";

const EditorMonaco=()=>{
    return(
        <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// Enter your code here"
        theme="vs-dark"
        />
        
    )
}

export default EditorMonaco;