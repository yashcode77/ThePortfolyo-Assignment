import Popup from "./Popup";

const ServicePopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        <div className="image">
          {/* <img src="img/thumbs/4-2.jpg" alt="" /> */}
          <img 
            src={data?.image?.url} 
            alt="" 
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="; // Provide path to placeholder image
            }}
          />
          <div
            className="main"
            data-img-url={data.img}
            style={{ backgroundImage: `url(${data?.image?.url})` }}
          />
        </div>
        <div className="main_title">
          <h3>{data?.name}</h3>
        </div>
        <div className="descriptions">
          {/* {data &&
            data.desc &&
            data?.desc?.map((des, i) => <p key={i}>{des}</p>)} */}
            {data.desc}
        </div>
      </div>
    </Popup>
  );
};
export default ServicePopup;
