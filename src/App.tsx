import React, {useEffect, useRef, useState} from 'react';
import WebViewer from "@pdftron/webviewer";
import './App.scss';

function App() {
    const viewerDiv = useRef<HTMLDivElement>(null)
    const [file, setFile] = useState('')
    const [fileInput, setFileInput] = useState('')

    useEffect(() => {
        if (fileInput) {
            WebViewer({
                path: 'lib',
                initialDoc: 'hello.pdf',
            }, viewerDiv.current as HTMLDivElement).then(instance => {
            })
        }
    }, [fileInput])

    const inputHandler = (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.get('file'))
        setFileInput(file)
        // send formData
    }

    return (
        <div className="app">
            {!fileInput
                ?
                <form onSubmit={inputHandler}>
                    <label htmlFor="file">Choose images to upload (TXT, PDF, JPG, PNG, WORD)</label>
                    <input
                        value={file}
                        onChange={e => setFile(e.target.value)}
                        multiple
                        type="file"
                        accept=".pdf, .word, .jpg, .png"
                        id="file"
                        name="file"/>
                    <button>Send</button>
                </form>
                :
                <div className="webviewer" ref={viewerDiv}></div>}

        </div>
    );
}

export default App;
