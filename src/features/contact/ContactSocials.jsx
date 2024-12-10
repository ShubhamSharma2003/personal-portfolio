import HyperText from "../../components/ui/hyper-text";

function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "shubham8186@gmail.com",
      href: "mailto:shubham8186@gmail.com",
    },
    {
      social: "github",
      un: "ShubhamSharma2003",
      href: "https://www.github.com/ShubhamSharma2003/",
    },
    {
      social: "linkedin",
      un: "ShubhamSharma2003",
      href: "https://www.linkedin.com/in/shubhamsharma2003/",
    },
    {
      social: "instagram",
      un: "iamshubh.am",
      href: "https://www.instagram.com/iamshubh.am",
    },
    

  ];
  return (
    <div className="line-container flex flex-col">
    {/* HyperText for "Reach Out Via Socials" */}
    <HyperText className="text-3xl text-white" text="Reach Out Via Socials" />
    <div className="flex flex-col space-y-2 pt-5 animate-in fade-in zoom-in delay-0 duration-1000">
      <p className="line text-base text-textColor md:text-2xl">
        <span style={{ color: "#C792EA" }}>.socials</span> &#123;
      </p>
      {socials.map((social) => {
        return (
          <div className="line text-base md:text-2xl" key={social.social}>
            <span
              className="pl-5 md:pl-8"
              style={{ color: "#82AAFF" }}
            >
              {social.social}
            </span>
            <span style={{ color: "#89DDFF" }}>:</span>
            <a
              className="pl-2 hover:underline"
              style={{ color: "#C3E88D" }}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.un}
            </a>
            <span style={{ color: "#89DDFF" }}>;</span>
          </div>
        );
      })}
      <p className="line text-base text-textColor md:text-2xl">&#125;</p>
    </div>
  </div>
  );
}

export default ContactSocials;
