import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team() {
  const members = [
    { name: "Rahul Singh Dhami", role: "Founder / Co-Founder", img: "/images/rahul.jpg", alt: "RSD" },
    { name: "Paras Bisht", role: "Chief Executive Officer", img: "/images/paras.jpg", alt: "Paras Bisht" },
    { name: "Udit Samant", role: "Technical Lead", img: "/images/udit.jpg", alt: "Udit Samant" },
    { name: "Shantanu", role: "General Manager", img: "/images/shantanu.jpg", alt: "Shantanu" },
    { name: "Tushar", role: "Event Manager", img: "/images/tushar.jpg", alt: "Tushar" },
    { name: "Shadan Dabir Khan", role: "Operations Manager", img: "/images/shadan.jpg", alt: "Shadan" },
    { name: "Aman Panwar", role: "Public Relations & Outreach Head", img: "/images/aman.jpg", alt: "Aman Panwar" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleCardClick = (member) => {
      console.log(`Clicked on ${member.name}'s card.`);
  };

  return(
    <div className="w-full max-w-6xl mx-auto py-10 ">
      <h2 className="text-2xl font-bold px-6">Meet the Team</h2>
      <p className="text-gray-400 mt-2 px-6 pb-8">Organizers, Admins and Members who run UK ESPORTS HUB.</p>
      <div className="">
          <Slider {...settings}>
            {members.map((m) => (
              <div 
                key={m.name} 
                className="h-450px bg-gray-800 text-white rounded-xl group"
                onClick={() => handleCardClick(m)}
              >
                <div className="h-52 rounded-xl bg-transparent flex justify-center items-center">
                  <img 
                    src={m.img} 
                    alt={m.alt} 
                    className="h-44 w-44 rounded-full border-2 border-purple-500/50 transition-all ease-out duration-1000 delay-600 group-hover:scale-105 group-hover:bg-transparent group-hover:shadow-lg group-hover:shadow-purple-500/30 cursor-pointer" 
                  />
                </div>

                <div className="flex flex-col justify-center items-center gap-1 py-3 ">
                  <h4 className="text-xl font-bold mt-4 ">{m.name}</h4>
                  <p className="text-xs text-gray-400 font-bold pb-2 ">{m.role}</p>
                </div>
              </div>
            ))}
          </Slider>
      </div>
    </div>
  );
};

export default Team;
