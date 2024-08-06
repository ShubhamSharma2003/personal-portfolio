import shubham3d from "../../assets/images/gifdev.gif";

function Illustration() {
  return (
    <div className="animate-in fade-in zoom-in delay-0 duration-1000 h-[380px] w-[460px] text-accentColor max-sm:h-[334px] max-sm:w-full rounded-md ">
      <img 
        src={shubham3d}
        alt="Shubham 3D Illustration" 
        className="w-full h-full object-cover rounded-md" 
        style={{ filter: 'drop-shadow(0 0 20px rgba(255, 140, 140, 0.51))' }} // Add this inline style for the glow effect
      />
    </div>
  );
}

export default Illustration;
