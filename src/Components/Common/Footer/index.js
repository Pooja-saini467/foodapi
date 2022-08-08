import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <footer>
      <section className="footer">
    <div className="container">
        <div className="row">

            <div className="col-md-4" data-aos="fade-right">
                <a href="#" className="logo"><span>Food</span>Vila <span>Rest</span>aurant</a>
                <p>It’s time to enjoy the finer things in life. A genuine fine-dining experience awaits.</p>
            </div>

            <div className="col-md-4 text-center" data-aos="fade-up">
                <h3>links</h3>
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">facility</a>
                <a href="#">review</a>
                <a href="#">contact</a>
                <a href="#">post</a>
            </div>

            <div className="col-md-4 text-center" data-aos="fade-left">
                <h3>share</h3>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">instagram</a>
                <a href="#">github</a>
            </div>
            <div className="social__icons">
                <a href="#" className="social__icon--link" target="_blank"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social__icon--link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social__icon--link"><i className="fab fa-youtube"></i></a>
                <a href="#" className="social__icon--link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social__icon--link"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>
</section>
    </footer>
  )
}

export default Footer