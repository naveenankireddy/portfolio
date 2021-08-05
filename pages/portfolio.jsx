import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Portfolio() {
  return (
    <>
      <Head>
        <title>portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
        />
      </Head>

      <Navbar />

      <div></div>

      <section className="section">
        <div className="responsive-title_2">
          <h3 className="title_2">My Work</h3>
        </div>
        <div class="services-grid">
          <div class="service service1">
            <i class="ti-bar-chart"></i>
            <h4>Helping-Hands</h4>
            <p className="description">
              Helping-Hands is made with pure HTML & CSS.
            </p>
            <a
              href="https://github.com/AltCampus/helping-hands
"
              class="cta"
            >
              Link <span class="ti-angle-right"></span>
            </a>
          </div>

          <div class="service service1">
            <i class="ti-light-bulb"></i>
            <h4>Book-Shelf</h4>
            <p className="description">
              Book-Shelf is made with Node Js,Express Js,MongoDB.
            </p>
            <a
              href="https://github.com/naveenankireddy/Book_Shelf
"
              class="cta"
            >
              Link <span class="ti-angle-right"></span>
            </a>
          </div>

          <div class="service service1">
            <i class="ti-money"></i>
            <h4>Expense-trac</h4>
            <p className="description">
              Expense-trac is made with React Js, Redux and Material-UI.
            </p>
            <a
              href="https://github.com/naveenankireddy/expense-tracker"
              class="cta"
            >
              Link<span class="ti-angle-right"></span>
            </a>
          </div>
          <div class="service service1">
            <i class="ti-money"></i>
            <h4>Coin-Collector</h4>
            <p className="description">
              Coin collector game is made with pure Vanilla Js.
            </p>
            <a
              href="https://bob-the-collector.netlify.app/
"
              class="cta"
            >
              Link <span class="ti-angle-right"></span>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="responsive-title_2">
          <h3 className="title_2">My Blogs</h3>
        </div>
        <div class="services-grid">
          <div class="service service1">
            <i class="ti-bar-chart"></i>
            <h4>ReactJs</h4>
            <p className="description">
              Things to recall before touching React.
            </p>
            <a
              href="https://medium.com/@naveenkumarreddyankireddy/things-to-recall-in-javascript-before-entering-into-react-js-177b798322ec
"
              class="cta"
            >
              Link <span class="ti-angle-right"></span>
            </a>
          </div>

          <div class="service service1">
            <i class="ti-light-bulb"></i>
            <h4>NodeJs</h4>
            <p className="description">
              I wrote this on Basic introduction about Node.js.
            </p>
            <a
              href="https://medium.com/@naveenkumarreddyankireddy/basic-intro-to-node-js-d9515a588b8a
"
              class="cta"
            >
              Link <span class="ti-angle-right"></span>
            </a>
          </div>

          <div class="service service1">
            <i class="ti-money"></i>
            <h4>JavaScript</h4>
            <p className="description">
              I wrote this on Higher order functions in JS like map,filter
              etc...
            </p>
            <a
              href="https://medium.com/@naveenkumarreddyankireddy/javascript-higher-order-functions-map-foreach-filter-99e8e1513603
"
              class="cta"
            >
              Link<span class="ti-angle-right"></span>
            </a>
          </div>
          <div class="service service1">
            <i class="ti-money"></i>
            <h4>HTML & CSS</h4>
            <p className="description">
              I wrote this on detailed about Flex-Box.
            </p>
            <a
              href="https://medium.com/@naveenkumarreddyankireddy/flex-box-a8d4a65df671
"
              class="cta"
            >
              Link <span class="ti-angle-right"></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
