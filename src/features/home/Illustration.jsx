import shubham3d from "../../assets/images/developer1.webp";

function Illustration() {
  return (
    <div className="animate-in fade-in zoom-in delay-150 duration-1000 h-[380px] w-[460px] text-accentColor max-sm:h-[334px] max-sm:w-full rounded-md ">
      <img 
        src={shubham3d}
        alt="Shubham 3D Illustration" 
        className="w-full h-full object-cover rounded-md" 
        style={{ filter: 'drop-shadow(0 0 10px rgba(216, 247, 0, 0.5))' }} // Add this inline style for the glow effect
      />
    </div>
  );
}

export default Illustration;
