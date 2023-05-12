import "./css/loading.scss"


const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center loading-wrapper">
            <div className="spinner-border text-primary" role="status">
                
                <span className="visually-hidden text-danger">Loading...</span>
            </div>
        </div>
    )
}

export default Loading

