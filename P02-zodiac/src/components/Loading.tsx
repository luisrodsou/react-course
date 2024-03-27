import loadingImg from "../assets/loading.png"

const Loading = () => {
    return (
        <>
            <img src={loadingImg} alt="loading" className="animate-pulse rounded-full w-20 h-20 mt-5" />
            <h4 className="text-white my-5">Loading...</h4>
        </>
    );
}

export default Loading;
