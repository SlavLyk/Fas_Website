import "./Privacy.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer";
// maybe import header css here instead of in the header component so you can change it
function Privacy() {
  return (
    <div className="Privacy">
      <Header />
      <div className="bg1">
        <div className="flex-container-main">
          <div className="blur-container-1">
            <h1>Privacy Policy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos est
              nihil debitis perspiciatis sunt necessitatibus. Sed eaque
              consequuntur non perferendis! Voluptate, ullam perferendis. Eum,
              nobis iusto quas culpa a nisi optio laboriosam voluptate
              laudantium, obcaecati quidem quos consequuntur voluptatibus{" "}
            </p>
            <p>
              consequatur veritatis. Illo est dolorum, voluptate iusto facilis
              veritatis nam ea obcaecati omnis eos doloribus dolorem deleniti
              ipsum. Atque maiores totam architecto incidunt reprehenderit, aut,
              voluptatum neque commodi ea deleniti sapiente dolorem repellat. At
              dicta inventore perspiciatis illo cum magnam repellat, sunt
              voluptatibus esse beatae saepe aliquam impedit quibusdam
              blanditiis cupiditate laudantium? Sit dignissimos iure magni?
              Sapiente expedita qui, alias neque ab, numquam minus unde aut ad
              ratione facere maxime harum sint perspiciatis dolorum, quos
              quisquam possimus. Eius quaerat, iusto ex corrupti non voluptates!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
