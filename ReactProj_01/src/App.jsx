import Members from "./Members";
import NavbarComp from "./NavbarComp";

function App() {
  return (
    <>
      {/*1st page  */}
      <NavbarComp />
      <div className="w-full min-h-[calc(100vh-3.5rem)] relative overflow-hidden">
        <video
          src="https://videocdn.cdnpk.net/videos/a028eda0-1603-4c80-b345-a29a5829884d/horizontal/previews/clear/large.mp4?token=exp=1726674160~hmac=bca1c53d4c02ebd30b93a7ff88ac6dd3c899d31053f094f46d097a07e1587490"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1
            
            className="text-white text-3xl font-bold px-4 text-center"
          >
          Smart India Hackathon
          </h1>
        </div>
      </div>
      {/* 2nd page */}
      <div className="h-[100vh] w-auto text-white ">
        <div>
        <h1 className="text-center font-bold p-6 pt-10 text-[1.8rem] mt-10  leading-loose">INTRODUCING<br /><span className="text-sky-600">TEAM HACKNOVICES</span></h1>
       <Members />
        </div>
      </div>
    </>
  );
}

export default App;
