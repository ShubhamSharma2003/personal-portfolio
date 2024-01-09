import shubham3d from "../../assets/images/developer.gif";

function Illustration() {
  return (
    <div className="h-[350px] w-[460px] text-accentColor max-sm:h-[334px] max-sm:w-full rounded-md">
      {/* Use the imported image as the source */}
      <img 
        src={shubham3d}
        alt="Shubham 3D Illustration" 
        className="w-full h-full object-cover rounded-md" 
      />
    </div>
  );
}

export default Illustration;
