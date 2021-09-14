import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img src="/assets/escalera.jpg" alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Título" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Diseña tus elementos estructurales"
                        type="text"
                        className="writeInput writeText"                    
                    ></textarea>
                </div>
                <button className="writeSubmit">Diseñar</button>
            </form>
        </div>
    )
}
