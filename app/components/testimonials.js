import React from "react";

import Container from "./container";
import Testimonial from "./testimonial";
import userImg1 from "../../public/img/user1.jpg";
import userImg2 from "../../public/img/user2.jpg";
import userImg3 from "../../public/img/user3.jpg";
import userImg4 from "../../public/img/user4.jpg";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Testimonial
        src={userImg1}
        name="Micheal Gough"
        role="CEO at Google"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A enim
              totam ipsa laborum, cumque, sequi eum porro rem, maiores odio
              tenetur veritatis aliquam quo! Magni, qui! Natus obcaecati, optio
              itaque quis placeat aliquam tempore."
      />
      <Testimonial
        src={userImg2}
        name="Yehuda Cohen"
        role="Software Engineer"
        text="A enim ipsa laborum, cumque, sequi eum porro rem
              tenetur veritatis aliquam quo! Magni, qui! Natus obcaecati, optio
              itaque quis placeat aliquam tempore."
      />
      <Testimonial
        src={userImg3}
        name="Sarah Michels"
        role="Occupational Therapist"
        text="Natus obcaecati, optio. A enim
              totam ipsa laborum, cumque, sequi eum porro rem, maiores odio 
              tenetur veritatis aliquam quo! Magni, qui! itaque quis placeat aliquam tempore."
      />
      <Testimonial
        src={userImg4}
        name="Mathilda Khoo"
        role="Theacher"
        text="Repudiandae aspernatur doloribus ratione temporibus, rem voluptas optio deleniti 
              omnis consequuntur laudantium. sequi eum porro rem, maiores odio
              tenetur veritatis aliquam quo! Magni, qui! Natus obcaecati"
      />
    </div>
  );
};

export default Testimonials;
