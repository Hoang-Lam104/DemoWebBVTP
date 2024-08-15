import { useEffect, useState } from "react";
import { getSlider } from "../../api/sliderApi";
import { Carousel } from "antd";
import "./style.css";
import { replaceImageUrl } from "../../utils";

const Slider = () => {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        getSlider().then((response) => {
            setSliders(response.data);
        });
    }, []);

    return (
        <Carousel autoplay autoplaySpeed={5000}>
            {sliders.map((slider) => {
                return (
                    <div key={slider.Id}>
                        <img alt="" src={replaceImageUrl(slider.Image)} />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default Slider;
