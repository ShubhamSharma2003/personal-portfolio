import shubham3d from "../../assets/images/shubham3d.jpeg";

function Illustration() {
  return (
    <div className="h-[400px] w-[350px] text-accentColor max-sm:h-[334px] max-sm:w-full">
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
