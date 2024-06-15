
import Herosection from "@/app/components/Herosection";

const About = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <Herosection title={"OUR STORY"} imageUrl ={"/about1.svg"} />
    );
};

export default About;