import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Projects = ({ data }) => {
  useEffect(() => {
    dataImage();
  }, []);

  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} data={data}/>
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                {data &&
                  data?.projects?.map((project, index) => (
                    <SwiperSlide key={index}>
                      <div className="list_inner">
                        <div className="image">
                          <img src={project?.image?.url} alt="" />
                          <div className="main" data-img-url={project?.image?.url} />
                        </div>
                        <div className="details">
                          <span className="category">{project?.category}</span>
                          <h3 className="title">
                            <span>{project.title}</span>
                          </h3>
                        </div>
                        <a className={`orido_tm_full_link ${project.linkType}`} href={project.link} onClick={() => setDetailsPopup(true)}/>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" onClick={() => setDetailsPopup(true)}/>
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
