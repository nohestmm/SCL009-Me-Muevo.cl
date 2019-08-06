import React from 'react'
import '../views/components.css'
const TemplateHome = () => {
    return (
        <div>
            <h1>Bienvenido a Memuevo</h1>
            <section className="infoTemplateHome">
                <div className = "col-sm-12 col-md-8">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/t485RIj4-og" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video"></iframe>
                </div>
                <div className= "col-sm-12 col-md-4">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam laboriosam minus architecto nulla id consequatur eos porro culpa odio possimus? Iusto doloremque doloribus hic accusamus cumque libero repellat sit maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et atque adipisci, aliquid molestias ipsum libero debitis quos harum alias dolorum culpa optio consequatur veniam commodi vero? Odio, fugiat deleniti!
                        </p>
                </div>
            </section>
        </div>
    )
}

export default TemplateHome;