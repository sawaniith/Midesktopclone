import React from 'react'
// import {Carousel} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

export default function Slider() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
                </div>


                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/860_operator_in/09/06/2021/15c70c1f59ef4aad235531578c3d1757.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/279_operator_in/08/06/2021/072acd0a667c5a0e045ed50a9064c531.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/417_operator_in/04/06/2021/36c1c9f10ac411c5ba304d30d60ca234.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/172_operator_in/08/06/2021/44c5407a6c9ede6d782bebfd70cecc24.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/667_operator_in/09/06/2021/eca16c5a1a97b1f30cedb943e144e2e0.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i02.appmifile.com/934_operator_in/07/06/2021/372a6e5d29c26c34b716b0408a533e3f.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
}

